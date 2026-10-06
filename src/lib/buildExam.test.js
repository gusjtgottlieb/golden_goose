import { allocate, buildExam, minutesFor } from './buildExam';
import tprm from '../data/banks/servicenow-cis-tprm.json';
import sc401 from '../data/banks/microsoft-sc-401.json';

// Deterministic RNG so failures are reproducible.
function seeded(seed) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

const tally = (qs) => qs.reduce((t, q) => ({ ...t, [q.domain]: (t[q.domain] || 0) + 1 }), {});

test('allocate splits proportionally and hits the exact count', () => {
  expect(allocate(10, { a: 50, b: 30, c: 20 })).toEqual({ a: 5, b: 3, c: 2 });
  const odd = allocate(7, { a: 1, b: 100 });
  expect(odd.a + odd.b).toBe(7);
  expect(allocate(500, { a: 3, b: 4 })).toEqual({ a: 3, b: 4 });
});

test.each([5, 10, 25, 60])('TPRM exam of %i has that many unique questions', (n) => {
  const qs = buildExam(tprm, { count: n, rng: seeded(n) });
  expect(qs).toHaveLength(n);
  expect(new Set(qs.map((q) => q.id)).size).toBe(n);
});

test('full-length SC-401 exam matches the real form: 4 case study, 40 MC, 6 yes/no, in order', () => {
  const qs = buildExam(sc401, { count: 50, rng: seeded(1) });
  expect(tally(qs)).toEqual({ CS: 4, MC: 40, YN: 6 });
  expect(qs.slice(0, 4).every((q) => q.domain === 'CS')).toBe(true);
  expect(qs.slice(44).every((q) => q.domain === 'YN')).toBe(true);
});

test('scenario questions are drawn from one scenario and stay consecutive', () => {
  for (let s = 1; s <= 20; s++) {
    const qs = buildExam(sc401, { count: 50, rng: seeded(s) });
    const groups = qs.map((q) => q.group).filter(Boolean);
    // 4 case-study questions fit in one case study; 6 yes/no fit in one scenario.
    expect(new Set(groups.filter((g) => g.startsWith('cs'))).size).toBe(1);
    expect(new Set(groups.filter((g) => g.startsWith('yn'))).size).toBe(1);
  }
});

test('focus areas restrict the pool and cap the count', () => {
  const qs = buildExam(tprm, { count: 50, domains: ['P', 'O'], rng: seeded(3) });
  expect(qs).toHaveLength(11); // 7 portal + 4 other relationships
  expect(new Set(qs.map((q) => q.domain))).toEqual(new Set(['P', 'O']));
});

test('unseen questions are served before seen ones', () => {
  // Half of every domain seen, so each domain still has enough unseen questions.
  const seen = new Set(tprm.questions.filter((_, n) => n % 2 === 0).map((q) => q.id));
  const qs = buildExam(tprm, { count: 20, seen, rng: seeded(9) });
  expect(qs).toHaveLength(20);
  expect(qs.filter((q) => seen.has(q.id))).toHaveLength(0);
});

test('blueprint balance wins over freshness when a domain is exhausted', () => {
  const seen = new Set(tprm.questions.filter((q) => q.domain === 'F').map((q) => q.id));
  const qs = buildExam(tprm, { count: 30, seen, rng: seeded(4) });
  expect(tally(qs).F).toBe(7); // 14/60 of 30, drawn from seen questions
});

test('time limit scales with exam length', () => {
  expect(minutesFor(tprm, 60)).toBe(90);
  expect(minutesFor(tprm, 10)).toBe(15);
  expect(minutesFor(sc401, 25)).toBe(50);
});
