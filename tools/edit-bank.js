// Applies scripted edits to a bank source in content/banks/<bankId>.js.
// Every edit must match exactly one place, or nothing is written.
//
// Usage: node tools/edit-bank.js <bankId> <edits.js>
// edits.js exports any of:
//   replace: [["exact old text", "new text"], ...]           (anywhere in the file: stems, options, explanations)
//   options: [["stem substring", ["correct", "d1", "d2", "d3"]], ...]   (rewrites a question's options; correct first)
//   swap:    [["stem substring", { d, s, o: [correct, ...], e }], ...]  (replaces a whole question, keeping its position and id)
const fs = require("fs");
const path = require("path");

const [id, editsFile] = process.argv.slice(2);
if (!id || !editsFile) {
  console.error("Usage: node tools/edit-bank.js <bankId> <edits.js>");
  process.exit(1);
}
const file = path.join(__dirname, "../content/banks", id + ".js");
let text = fs.readFileSync(file, "utf8");
const { replace = [], options = [], swap = [] } = require(path.resolve(editsFile));

const lit = (s) => "`" + String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
const once = (needle) => {
  const n = text.split(needle).length - 1;
  if (n !== 1) throw new Error(`expected exactly one match, found ${n}: ${needle.slice(0, 80)}`);
  return text.indexOf(needle);
};
// Locates the block for the question whose stem contains `stem`.
const block = (stem) => {
  const at = once(stem);
  const start = text.lastIndexOf("{d:", at);
  const end = text.indexOf("`},", at) + 3;
  return [start, end];
};

for (const [oldText, newText] of replace) {
  const at = once(oldText);
  text = text.slice(0, at) + newText + text.slice(at + oldText.length);
}
for (const [stem, opts] of options) {
  const [start, end] = block(stem);
  const b = text.slice(start, end);
  const updated = b.replace(/\no:\[[\s\S]*?\],\na:\[[^\]]*\],/, `\no:[${opts.map(lit).join(",")}],\na:[0],`);
  if (updated === b) throw new Error(`couldn't find options for: ${stem}`);
  text = text.slice(0, start) + updated + text.slice(end);
}
for (const [stem, q] of swap) {
  const [start, end] = block(stem);
  const b = `{d:${JSON.stringify(q.d)},s:${lit(q.s)},\no:[${q.o.map(lit).join(",")}],\na:[0],\ne:${lit(q.e)}},`;
  text = text.slice(0, start) + b + text.slice(end);
}

fs.writeFileSync(file, text);
console.log(`${id}: ${replace.length} replacements, ${options.length} option rewrites, ${swap.length} swaps. Run npm run banks:build next.`);
