// Checks every bank in src/data/banks against the project's content standards and exits
// non-zero if any bank has an issue, so CI can block bad edits.
//
// Usage: node tools/check-banks.js [bankId ...]
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");
const banksDir = path.join(root, "src/data/banks");
const srcDir = path.join(root, "content/banks");
const catalogSrc = fs.readFileSync(path.join(root, "src/data/catalog.js"), "utf8");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const only = process.argv.slice(2);
const ids = only.length ? only : fs.readdirSync(banksDir).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));
const pct = (n, d) => Math.round((100 * n) / d);

// Rebuild sources into a temp folder so we can confirm the committed JSON matches them.
const rebuilt = fs.mkdtempSync(path.join(os.tmpdir(), "banks-"));
execFileSync(process.execPath, [path.join(__dirname, "build-banks.js"), "--out", rebuilt], { stdio: "ignore" });

let failed = 0;
for (const id of ids) {
  const b = JSON.parse(fs.readFileSync(path.join(banksDir, id + ".json"), "utf8"));
  const issues = [];
  const notes = [];
  const Q = b.questions;

  // Source and build output stay in sync. Banks without a source file are maintained directly in JSON.
  if (fs.existsSync(path.join(srcDir, id + ".js"))) {
    const fresh = fs.readFileSync(path.join(rebuilt, id + ".json"), "utf8");
    if (fresh !== fs.readFileSync(path.join(banksDir, id + ".json"), "utf8")) {
      issues.push("JSON doesn't match content/banks source (run npm run banks:build)");
    }
  } else {
    notes.push("no source file; maintained directly in JSON");
  }

  // Catalog and README consistency
  const m = catalogSrc.match(new RegExp(`id: "${id}",[\\s\\S]*?bankSize: (\\d+),\\s*fullLength: (\\d+),\\s*minutes: (\\d+)`));
  if (!m) issues.push("missing from catalog");
  else {
    if (+m[1] !== Q.length) issues.push(`catalog bankSize ${m[1]} != ${Q.length}`);
    if (+m[2] !== b.fullLength) issues.push(`catalog fullLength ${m[2]} != ${b.fullLength}`);
    if (+m[3] !== b.minutes) issues.push(`catalog minutes ${m[3]} != ${b.minutes}`);
  }
  const row = readme.split("\n").find((l) => l.includes(`| ${b.code} `));
  if (!row) issues.push("missing README row");
  else if (!row.includes(`| ${Q.length} |`) || !row.includes(`${b.fullLength} questions / ${b.minutes} min`)) issues.push(`README row mismatch: ${row}`);

  // Bank size: about 2.5x the full exam
  const ratio = Q.length / b.fullLength;
  if (ratio < 2.4 || ratio > 3.1) notes.push(`bank is ${ratio.toFixed(2)}x the full exam`);

  // Structure and answer-length balance
  const seen = new Set();
  let single = 0;
  let longest = 0;
  let shortest = 0;
  const clear = [];
  const slots = [0, 0, 0, 0];
  for (const q of Q) {
    if (seen.has(q.id)) issues.push(`duplicate id ${q.id}`);
    seen.add(q.id);
    const yn = q.options.length === 2 && q.options[0] === "Yes";
    if (!yn && q.options.length !== 4) issues.push(`${q.id}: ${q.options.length} options`);
    if (!q.answer.length || q.answer.some((a) => a < 0 || a >= q.options.length)) issues.push(`${q.id}: bad answer index`);
    if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length) issues.push(`${q.id}: duplicate options`);
    if (q.options.some((o) => /\b(all|none) of the above\b/i.test(o))) issues.push(`${q.id}: all/none of the above`);
    if (!q.explanation || q.explanation.length < 60) issues.push(`${q.id}: thin explanation`);
    if (!/[?:.)"]$/.test(q.stem.trim())) notes.push(`${q.id}: stem ends "${q.stem.trim().slice(-12)}"`);
    if (!b.domains.some((d) => d.id === q.domain)) issues.push(`${q.id}: unknown domain ${q.domain}`);
    if (yn) continue;
    q.answer.forEach((a) => slots[a]++);
    if (q.answer.length !== 1) continue;
    single++;
    const l = q.options.map((o) => o.length);
    const c = l[q.answer[0]];
    const d = l.filter((_, k) => k !== q.answer[0]);
    if (c >= Math.max(...d)) longest++;
    if (c <= Math.min(...d)) shortest++;
    if (c > 1.2 * Math.max(...d)) clear.push(q.id);
  }

  // Domain shares vs blueprint weights: ranges like "20–25%" allow ±1 point, single values like "16%" allow ±2.
  if (!b.sectioned) {
    for (const d of b.domains) {
      const share = pct(Q.filter((q) => q.domain === d.id).length, Q.length);
      const range = d.weight.match(/(\d+)\s*[–-]\s*(\d+)%/);
      const one = d.weight.match(/^(\d+)%$/);
      if (range && (share < +range[1] - 1 || share > +range[2] + 1)) issues.push(`domain ${d.id} is ${share}% (blueprint ${d.weight})`);
      if (one && Math.abs(share - +one[1]) > 2) issues.push(`domain ${d.id} is ${share}% (blueprint ${d.weight})`);
    }
  }

  const answered = slots.reduce((a, s) => a + s, 0);
  const slotPct = slots.map((s) => pct(s, answered));
  if (Math.max(...slotPct) > 35 || Math.min(...slotPct) < 15) issues.push(`answer slots ${slotPct.join("/")}%`);
  if (clear.length) issues.push(`clear length outliers: ${clear.join(" ")}`);
  const L = pct(longest, single);
  const S = pct(shortest, single);
  if (L > 37 || S > 37) issues.push(`length balance longest ${L}% shortest ${S}% (max 37%)`);

  console.log(`${b.code.padEnd(9)} ${String(Q.length).padStart(3)} Q  longest ${L}%  shortest ${S}%  slots ${slotPct.join("/")}  ${issues.length ? "ISSUES" : "ok"}`);
  issues.forEach((i) => console.log("    ! " + i));
  if (process.env.VERBOSE) notes.forEach((n) => console.log("    · " + n));
  if (issues.length) failed++;
}

fs.rmSync(rebuilt, { recursive: true, force: true });
if (failed) {
  console.error(`\n${failed} bank(s) failed the content standards.`);
  process.exit(1);
}
