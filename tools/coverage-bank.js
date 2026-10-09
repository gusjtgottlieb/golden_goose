// Rough check of which exam-objective bullets a bank doesn't mention yet.
// The objectives text comes from the vendor's PDF, converted to text and saved locally under
// content/objectives/ (that folder is gitignored, because vendors don't allow redistributing it).
// Matching is word-based and crude, so read the unmatched list and judge each item yourself.
//
// Usage: node tools/coverage-bank.js <objectives.txt> <bankId> ["start marker"] ["end marker"]
const fs = require("fs");
const path = require("path");

const [objFile, id, start, end] = process.argv.slice(2);
if (!objFile || !id) {
  console.error('Usage: node tools/coverage-bank.js <objectives.txt> <bankId> ["start marker"] ["end marker"]');
  process.exit(1);
}
let text = fs.readFileSync(objFile, "utf8");
if (start && text.includes(start)) text = text.slice(text.indexOf(start));
if (end && text.includes(end)) text = text.slice(0, text.indexOf(end));

const items = text.split("\n")
  .map((line) => (line.match(/^\s*[•♦−\-◦o]\s+(.*)/) || [])[1])
  .filter((s) => s && s.trim().length > 2)
  .map((s) => s.trim());

const bank = JSON.parse(fs.readFileSync(path.join(__dirname, "../src/data/banks", id + ".json"), "utf8"));
const corpus = bank.questions.map((q) => [q.stem, ...q.options, q.explanation].join(" ")).join(" ").toLowerCase();

const missing = items.filter((item) => {
  const key = item.replace(/\(.*?\)/g, "").trim().toLowerCase();
  const acronyms = [...item.matchAll(/\(([A-Za-z0-9+/ -]{2,12})\)/g)].map((m) => m[1].toLowerCase());
  const words = key.split(/[^a-z0-9+.]+/).filter((w) => w.length > 3);
  return !(corpus.includes(key) || acronyms.some((a) => corpus.includes(a)) || (words.length && words.every((w) => corpus.includes(w))));
});
console.log(`${items.length} objective bullets, ${missing.length} not obviously covered:`);
missing.forEach((m) => console.log("  - " + m));
