import { useState } from "react";
import { buildExam, minutesFor } from "../lib/buildExam";
import { clearSeen, loadSeen } from "../lib/history";

function Setup({ bank, onStart }) {
  const [mode, setMode] = useState("exam");
  const [domains, setDomains] = useState(() => bank.domains.map((d) => d.id));
  const [count, setCount] = useState(bank.fullLength);
  const [seen, setSeen] = useState(() => loadSeen(bank.id));

  const counts = {};
  bank.questions.forEach((q) => (counts[q.domain] = (counts[q.domain] || 0) + 1));
  const available = domains.reduce((n, d) => n + (counts[d] || 0), 0);
  const size = Math.max(0, Math.min(count || 0, available));
  const minutes = minutesFor(bank, size);
  const seenHere = bank.questions.filter((q) => seen.has(q.id)).length;

  const presets = [...new Set([10, 25, bank.fullLength])].filter((n) => n <= bank.questions.length);

  const toggleDomain = (id) =>
    setDomains((cur) => (cur.includes(id) ? cur.filter((d) => d !== id) : [...cur, id]));

  const start = () => {
    const questions = buildExam(bank, { count: size, domains, seen });
    onStart({ questions, mode, minutes });
  };

  return (
    <div className="wrap">
      <section className="hero">
        <a className="back" href="#/">← All certifications</a>
        <p className="eyebrow">{bank.vendor} · {bank.code}</p>
        <h1>{bank.name}</h1>
        <p>
          Build a practice exam from a {bank.questions.length}-question bank. Questions are drawn in
          blueprint proportion, and ones you haven't seen come first.
        </p>
      </section>

      <h2 className="sub">Mode</h2>
      <div className="modes">
        <button className="mode" aria-pressed={mode === "exam"} onClick={() => setMode("exam")}>
          <b>Exam mode</b>
          <small>Timed, no feedback until you submit. Use this once you're drilling for score.</small>
        </button>
        <button className="mode" aria-pressed={mode === "study"} onClick={() => setMode("study")}>
          <b>Study mode</b>
          <small>Answer, then reveal the explanation before moving on. No clock.</small>
        </button>
      </div>

      <h2 className="sub">Length</h2>
      <div className="lengths">
        {presets.map((n) => (
          <button key={n} className="ghost" aria-pressed={count === n} onClick={() => setCount(n)}>
            {n === bank.fullLength ? `Full length · ${n}` : `${n} questions`}
          </button>
        ))}
        <label className="custom">
          Custom
          <input
            type="number"
            min="1"
            max={available}
            value={count || ""}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 0)}
          />
        </label>
      </div>
      {count > available && available > 0 && (
        <p className="hint">Only {available} questions match your focus areas, so the exam will have {available}.</p>
      )}

      <h2 className="sub">Focus areas</h2>
      <div className="domains">
        {bank.domains.map((d) => (
          <label key={d.id} className="domain">
            <input type="checkbox" checked={domains.includes(d.id)} onChange={() => toggleDomain(d.id)} />
            <span>{d.name}</span>
            <small>{counts[d.id] || 0} in bank · blueprint {d.weight}</small>
          </label>
        ))}
      </div>

      <div className="summary">
        <div>
          <b>{size} question{size === 1 ? "" : "s"}</b>
          <span>{mode === "exam" ? ` · ${minutes}-minute clock` : " · untimed"}</span>
        </div>
        <button className="cta" disabled={size === 0} onClick={start}>
          Build my exam
        </button>
      </div>

      <p className="fine">
        You've seen {seenHere} of {bank.questions.length} questions in this bank on this device.
        {seenHere > 0 && (
          <>
            {" "}
            <button className="linkish" onClick={() => { clearSeen(bank.id); setSeen(new Set()); }}>
              Reset history
            </button>
          </>
        )}
      </p>
      <p className="fine">{bank.note}</p>
    </div>
  );
}

export default Setup;
