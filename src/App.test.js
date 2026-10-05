import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { EXAMS } from './data/catalog';

afterEach(() => {
  window.location.hash = '';
});

test('home page lists every exam grouped by vendor', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'ServiceNow' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Microsoft' })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /practice exam/i })).toHaveLength(EXAMS.length);
});

test.each(EXAMS)('catalog metadata matches exam file for $id', async (meta) => {
  const exam = (await meta.load()).default;
  expect(exam.id).toBe(meta.id);
  expect(exam.questions).toHaveLength(meta.questions);
  expect(exam.minutes).toBe(meta.minutes);
  const domains = new Set(exam.domains.map((d) => d.id));
  exam.questions.forEach((q) => {
    expect(domains.has(q.domain)).toBe(true);
    expect(q.answer.length).toBeGreaterThan(0);
    q.answer.forEach((a) => expect(q.options[a]).toBeDefined());
    if (q.group) expect(exam.groups[q.group]).toBeDefined();
  });
});

test('study mode reveals the explanation and results score the answer', async () => {
  window.location.hash = '#/exam/servicenow-cis-tprm-1';
  render(<App />);
  fireEvent.click(await screen.findByRole('button', { name: /study mode/i }));
  fireEvent.click(screen.getByRole('button', { name: /start studying/i }));

  // Q1's correct answer is B.
  fireEvent.click(screen.getByRole('button', { name: /one third-party record with two engagements/i }));
  fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
  expect(screen.getByText('Correct: B')).toBeInTheDocument();

  jest.spyOn(window, 'confirm').mockReturnValue(true);
  fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  expect(screen.getByText(/^1 of 60\./)).toBeInTheDocument();
});
