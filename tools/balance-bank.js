// Answer-length balancing for a bank source in content/banks/<bankId>.js.
// First drafts tend to make the correct answer the longest option; the standard is that it's
// the longest (or the shortest) at most 37% of the time, and never more than 20% longer than
// every distractor.
//
// Usage:
//   node tools/balance-bank.js <bankId>                  lists questions whose answer is the longest option
//   node tools/balance-bank.js <bankId> <candidates.js>  applies candidates, then reports the result
//
// candidates.js exports, keyed by 1-based question number:
//   options: { 12: { "old distractor": "longer distractor" } }   (always applied)
//   answers: { 12: "shorter correct answer" }                    (applied, then reverted where the answer
//                                                                 became the shortest, until shortest <= longest)
const fs = require("fs");
const path = require("path");

const [id, candFile] = process.argv.slice(2);
if (!id) {
  console.error("Usage: node tools/balance-bank.js <bankId> [candidates.js]");
  process.exit(1);
}
const file = path.join(__dirname, "../content/banks", id + ".js");
const Q = require(file).Q.map((q) => ({ ...q, o: [...q.o] }));
const single = (q) => q.a.length === 1 && q.o.length === 4;

if (!candFile) {
  Q.forEach((q, i) => {
    if (!single(q)) return;
    const c = q.o[q.a[0]];
    const d = q.o.filter((_, k) => k !== q.a[0]);
    const max = Math.max(...d.map((x) => x.length));
    if (c.length >= max) console.log(`${i + 1} ${c.length > 1.2 * max ? "!!" : "  "} | ${c} || ${d.join(" / ")}`);
  });
  process.exit(0);
}

const { answers = {}, options = {} } = require(path.resolve(candFile));
for (const [n, map] of Object.entries(options)) {
  for (const [a, b] of Object.entries(map)) {
    const q = Q[n - 1];
    const i = q.o.indexOf(a);
    if (i < 0) throw new Error(`#${n}: option not found: ${a}`);
    if (q.a.includes(i)) throw new Error(`#${n}: option edits are for distractors only`);
    q.o[i] = b;
  }
}
const original = {};
Object.keys(answers).forEach((n) => (original[n] = Q[n - 1].o[Q[n - 1].a[0]]));
const kept = new Set(Object.keys(answers));
const answerText = (q, n) => (kept.has(String(n)) ? answers[n] : q.o[q.a[0]]);
const lengths = (q, n) => q.o.map((o, i) => (i === q.a[0] ? answerText(q, n) : o).length);
const stats = () => {
  let L = 0, S = 0, N = 0;
  Q.forEach((q, i) => {
    if (!single(q)) return;
    N++;
    const l = lengths(q, i + 1), c = l[q.a[0]], d = l.filter((_, k) => k !== q.a[0]);
    if (c >= Math.max(...d)) L++;
    if (c <= Math.min(...d)) S++;
  });
  return [L, S, N];
};
const margin = (n) => {
  const q = Q[n - 1], l = lengths(q, n);
  return Math.min(...l.filter((_, k) => k !== q.a[0])) - l[q.a[0]];
};
let [L, S, N] = stats();
for (const n of [...kept].sort((a, b) => margin(b) - margin(a))) {
  if (S <= L) break;
  if (margin(n) < 0) continue;
  const q = Q[n - 1];
  const l = q.o.map((o, i) => (i === q.a[0] ? original[n] : o).length);
  if (l[q.a[0]] > 1.2 * Math.max(...l.filter((_, k) => k !== q.a[0]))) continue;
  kept.delete(n);
  [L, S] = stats();
}

// Write changes back as exact replacements inside each question's own block.
let text = fs.readFileSync(file, "utf8");
const lit = (s) => "`" + String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
const swapIn = (n, a, b) => {
  const src = require(file).Q[n - 1];
  const stem = lit(src.s);
  const s = text.indexOf(stem);
  if (s < 0) throw new Error(`#${n}: stem not found`);
  const e = text.indexOf("`},", s);
  const blk = text.slice(s, e);
  if (blk.split(lit(a)).length !== 2) throw new Error(`#${n}: "${a}" not found exactly once in its question`);
  text = text.slice(0, s) + blk.replace(lit(a), lit(b)) + text.slice(e);
};
for (const [n, map] of Object.entries(options)) for (const [a, b] of Object.entries(map)) swapIn(n, a, b);
for (const n of kept) swapIn(n, original[n], answers[n]);
fs.writeFileSync(file, text);

const clear = Q.map((q, i) => {
  if (!single(q)) return 0;
  const l = lengths(q, i + 1), c = l[q.a[0]];
  return c > 1.2 * Math.max(...l.filter((_, k) => k !== q.a[0])) ? i + 1 : 0;
}).filter(Boolean);
console.log(`kept ${kept.size} of ${Object.keys(answers).length} shortened answers; longest ${Math.round((100 * L) / N)}%, shortest ${Math.round((100 * S) / N)}%, clear outliers: ${clear.join(" ") || "none"}`);
