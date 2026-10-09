// Review aids for a built bank in src/data/banks/<bankId>.json.
//
// Usage:
//   node tools/review-bank.js sheet <bankId>     prints every question, its options (* marks the answer), and explanation
//   node tools/review-bank.js scan [bankId ...]  flags common quality problems:
//     - stem echo: the stem repeats a distinctive word that appears only in the correct answer
//     - short explanations (under 80 characters)
//     - option letters in explanations (letters change when options are shuffled)
//     - very similar stems and duplicate options
const fs = require("fs");
const path = require("path");

const banksDir = path.join(__dirname, "../src/data/banks");
const [mode, ...ids] = process.argv.slice(2);
const load = (id) => JSON.parse(fs.readFileSync(path.join(banksDir, id + ".json"), "utf8"));
const LETTERS = "ABCD";

if (mode === "sheet") {
  load(ids[0]).questions.forEach((q, i) => {
    console.log(`${i + 1}. [${q.domain}] ${q.stem}`);
    q.options.forEach((o, k) => console.log(`  ${q.answer.includes(k) ? "*" : " "}${LETTERS[k]}) ${o}`));
    console.log(`  E: ${q.explanation}`);
  });
} else if (mode === "scan") {
  const STOP = new Set("a an the of to in on for and or is are be by with what which this that it its from at as can should most best first does do how why when who into than not their they them".split(" "));
  const words = (s) => s.toLowerCase().replace(/[^a-z0-9+#.\- ]/g, " ").split(/\s+/).filter((w) => w.length > 3 && !STOP.has(w));
  const list = ids.length ? ids : fs.readdirSync(banksDir).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));
  for (const id of list) {
    const Q = load(id).questions;
    const out = [];
    Q.forEach((q, i) => {
      const n = i + 1;
      const ans = q.options[q.answer[0]];
      const ds = q.options.filter((_, k) => !q.answer.includes(k));
      if (/\b(option|answer) [A-D]\b|\([A-D]\)/.test(q.explanation)) out.push(`${n} option letter in explanation`);
      if (q.explanation.length < 80) out.push(`${n} short explanation (${q.explanation.length})`);
      const sw = new Set(words(q.stem));
      const echo = words(ans).filter((w) => sw.has(w));
      if (echo.length && !ds.some((d) => words(d).some((w) => sw.has(w)))) out.push(`${n} stem echo "${echo.join(",")}" -> ${ans}`);
      Q.forEach((p, j) => {
        if (j <= i) return;
        const a = new Set(words(q.stem)), c = words(p.stem);
        if (c.filter((w) => a.has(w)).length / Math.max(a.size, c.length) > 0.6) out.push(`${n} and ${j + 1} have similar stems`);
      });
      if (new Set(q.options.map((o) => o.toLowerCase())).size !== q.options.length) out.push(`${n} duplicate option`);
    });
    console.log(`== ${id}: ${Q.length} questions, ${out.length} flags`);
    out.forEach((l) => console.log("  " + l));
  }
} else {
  console.error("Usage: node tools/review-bank.js sheet <bankId> | scan [bankId ...]");
  process.exit(1);
}
