// Builds src/data/banks/*.json from the sources in content/banks/*.js.
// Each question's options are shuffled with a seed derived from its stable id, so answer
// positions are balanced but identical on every build. Question ids come from position,
// so add new questions at the end of a bank to keep existing ids (and users' history) stable.
//
// Usage: node tools/build-banks.js [--out <dir>] [bankId ...]
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const args = process.argv.slice(2);
const outIdx = args.indexOf("--out");
const outDir = outIdx >= 0 ? path.resolve(args.splice(outIdx, 2)[1]) : path.join(root, "src/data/banks");
const srcDir = path.join(root, "content/banks");
const ids = args.length ? args : fs.readdirSync(srcDir).filter((f) => f.endsWith(".js")).map((f) => f.replace(/\.js$/, ""));

function rngFrom(str) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0), (h ^= h >>> 13), (h >>> 0) / 4294967296);
}

fs.mkdirSync(outDir, { recursive: true });
for (const id of ids) {
  const { Q, idPrefix, ...meta } = require(path.join(srcDir, id + ".js"));
  const prefix = idPrefix || meta.code.toLowerCase().replace(/[^a-z0-9]/g, "");
  const questions = Q.map((q, n) => {
    const qid = `${prefix}-${n + 1}`;
    const rng = rngFrom(qid);
    const order = q.o.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return {
      id: qid, domain: q.d, stem: q.s,
      options: order.map((i) => q.o[i]),
      answer: q.a.map((i) => order.indexOf(i)).sort(),
      explanation: q.e,
      ...(q.v ? { verify: true } : {}),
    };
  });
  fs.writeFileSync(path.join(outDir, `${meta.id}.json`), JSON.stringify({ ...meta, groups: {}, questions }, null, 1));

  const per = {};
  const slots = [0, 0, 0, 0];
  questions.forEach((q) => { per[q.domain] = (per[q.domain] || 0) + 1; q.answer.forEach((a) => slots[a]++); });
  console.log(`${meta.code}: ${questions.length} Q | ${meta.domains.map((d) => `${d.id} ${per[d.id] || 0} (${d.weight})`).join(", ")} | answer slots A-D ${slots.join("/")}`);
}
