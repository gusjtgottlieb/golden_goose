import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { CERTS } from './data/catalog';

beforeEach(() => localStorage.clear());
afterEach(() => {
  window.location.hash = '';
});

test('home page lists every certification grouped by vendor', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'ServiceNow' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Microsoft' })).toBeInTheDocument();
  CERTS.forEach((c) => expect(screen.getByText(c.code)).toBeInTheDocument());
});

test.each(CERTS)('catalog metadata matches bank for $id', async (meta) => {
  const bank = (await meta.load()).default;
  expect(bank.id).toBe(meta.id);
  expect(bank.questions).toHaveLength(meta.bankSize);
  expect(bank.fullLength).toBe(meta.fullLength);
  expect(bank.minutes).toBe(meta.minutes);
  expect(new Set(bank.questions.map((q) => q.id)).size).toBe(bank.questions.length);
  const domains = new Set(bank.domains.map((d) => d.id));
  bank.questions.forEach((q) => {
    expect(domains.has(q.domain)).toBe(true);
    expect(q.answer.length).toBeGreaterThan(0);
    q.answer.forEach((a) => expect(q.options[a]).toBeDefined());
    if (q.group) expect(bank.groups[q.group]).toBeDefined();
  });
});

test('builds a 10-question study exam, reveals answers, and records seen questions', async () => {
  window.location.hash = '#/cert/servicenow-cis-tprm';
  render(<App />);

  fireEvent.click(await screen.findByRole('button', { name: /study mode/i }));
  fireEvent.click(screen.getByRole('button', { name: '10 questions' }));
  fireEvent.click(screen.getByRole('button', { name: /build my exam/i }));

  expect(screen.getByText('Question 1 of 10')).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: /^A/ })[0]);
  fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
  expect(screen.getByText(/^Correct: /)).toBeInTheDocument();

  jest.spyOn(window, 'confirm').mockReturnValue(true);
  fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  expect(screen.getByText(/ of 10\./)).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem('gg-seen-servicenow-cis-tprm'))).toHaveLength(10);

  fireEvent.click(screen.getByRole('button', { name: /build a new exam/i }));
  expect(screen.getByText(/seen 10 of 60 questions/)).toBeInTheDocument();
});
