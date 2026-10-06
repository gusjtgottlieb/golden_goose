// Builds a practice exam by drawing questions from a certification's bank.
//
// - The requested count is split across the selected domains in proportion to
//   each domain's share of the bank (largest-remainder rounding), which keeps
//   the exam close to the blueprint the bank was written to.
// - Questions sharing a scenario (a case study or yes/no group) are drawn
//   together so they appear consecutively under one scenario.
// - Questions the user hasn't seen are preferred over ones they have.
// - Sectioned banks (e.g. SC-401) keep the real exam's section order;
//   otherwise the drawn questions are shuffled together.

function shuffle(list, rng) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Split `count` across domains proportionally to `available`, never exceeding
// what a domain has.
export function allocate(count, available) {
  const ids = Object.keys(available);
  const total = ids.reduce((n, id) => n + available[id], 0);
  const target = Math.min(count, total);
  const alloc = {};
  const rema = [];
  let given = 0;
  ids.forEach((id) => {
    const exact = (target * available[id]) / total;
    alloc[id] = Math.floor(exact);
    given += alloc[id];
    rema.push([exact - alloc[id], id]);
  });
  rema.sort((x, y) => y[0] - x[0]);
  for (let k = 0; given < target; k = (k + 1) % rema.length) {
    const id = rema[k][1];
    if (alloc[id] < available[id]) {
      alloc[id]++;
      given++;
    }
  }
  return alloc;
}

export function buildExam(bank, { count, domains, seen = new Set(), rng = Math.random }) {
  const wanted = new Set(domains && domains.length ? domains : bank.domains.map((d) => d.id));
  const pool = bank.questions.filter((q) => wanted.has(q.domain));

  const byDomain = {};
  pool.forEach((q) => (byDomain[q.domain] = byDomain[q.domain] || []).push(q));
  const available = Object.fromEntries(Object.entries(byDomain).map(([d, qs]) => [d, qs.length]));
  const alloc = allocate(count, available);

  const unseenFirst = (qs) => [...qs].sort((a, b) => seen.has(a.id) - seen.has(b.id));

  const picked = []; // units: arrays of questions that stay together
  Object.entries(byDomain).forEach(([d, qs]) => {
    let need = alloc[d];
    if (!need) return;

    // Group questions into units: one per scenario, one per standalone question.
    const units = {};
    qs.forEach((q) => (units[q.group || q.id] = units[q.group || q.id] || []).push(q));
    const freshness = (u) => u.filter((q) => !seen.has(q.id)).length / u.length;
    const ordered = shuffle(Object.values(units), rng).sort((a, b) => freshness(b) - freshness(a));

    for (const unit of ordered) {
      if (need <= 0) break;
      const take = unseenFirst(shuffle(unit, rng)).slice(0, need);
      // Keep a scenario's questions in their authored order.
      take.sort((a, b) => unit.indexOf(a) - unit.indexOf(b));
      picked.push(take);
      need -= take.length;
    }
  });

  const order = bank.domains.map((d) => d.id);
  const units = bank.sectioned
    ? shuffle(picked, rng).sort((a, b) => order.indexOf(a[0].domain) - order.indexOf(b[0].domain))
    : shuffle(picked, rng);
  return units.flat();
}

// Exam-mode time limit scaled from the full-length exam's clock.
export const minutesFor = (bank, count) =>
  Math.max(1, Math.round((bank.minutes * count) / bank.fullLength));
