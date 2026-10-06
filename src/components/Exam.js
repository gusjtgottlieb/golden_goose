import { useCallback, useEffect, useMemo, useState } from "react";
import { markSeen } from "../lib/history";

const LETTERS = "ABCDEFGH";

const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));

function Explanation({ q }) {
  return (
    <div className="expl">
      <h4>Correct: {q.answer.map((i) => LETTERS[i]).join(" and ")}</h4>
      {q.explanation.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
      {q.verify && (
        <div className="verify">
          Release-sensitive: confirm exact table and label names in your own instance.
        </div>
      )}
    </div>
  );
}

function Context({ group }) {
  if (!group) return null;
  return (
    <details className="context" open>
      <summary>{group.title}</summary>
      <p>{group.body}</p>
    </details>
  );
}

// One sitting of a generated exam: answering, then results.
function Exam({ bank, questions: Q, mode, minutes, onRetake, onNew }) {
  const [phase, setPhase] = useState("exam"); // exam | results
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState(() => Q.map(() => []));
  const [flags, setFlags] = useState(() => Q.map(() => false));
  const [checked, setChecked] = useState(() => Q.map(() => false));
  const [secs, setSecs] = useState(minutes * 60);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const isRight = useCallback(
    (n) => answers[n].length > 0 && sameSet(answers[n], Q[n].answer),
    [answers, Q]
  );

  const finish = useCallback(() => {
    markSeen(bank.id, Q.map((q) => q.id));
    setPaletteOpen(false);
    setPhase("results");
    window.scrollTo(0, 0);
  }, [bank.id, Q]);

  // Exam-mode clock.
  useEffect(() => {
    if (phase !== "exam" || mode !== "exam") return;
    const t = setInterval(() => setSecs((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [phase, mode]);
  useEffect(() => {
    if (phase === "exam" && mode === "exam" && secs <= 0) finish();
  }, [secs, phase, mode, finish]);

  const go = useCallback(
    (n) => {
      if (n < 0 || n >= Q.length) return;
      setI(n);
      window.scrollTo(0, 0);
    },
    [Q.length]
  );

  const choose = useCallback(
    (idx) => {
      if (mode === "study" && checked[i]) return;
      const need = Q[i].answer.length;
      setAnswers((prev) => {
        const next = [...prev];
        const cur = prev[i];
        if (need === 1) next[i] = [idx];
        else if (cur.includes(idx)) next[i] = cur.filter((x) => x !== idx);
        else if (cur.length < need) next[i] = [...cur, idx];
        else next[i] = [...cur.slice(1), idx];
        return next;
      });
    },
    [mode, checked, i, Q]
  );

  const submit = () => {
    const blank = answers.filter((a) => a.length === 0).length;
    if (blank && !window.confirm(`${blank} question${blank > 1 ? "s are" : " is"} unanswered. Submit anyway?`)) return;
    finish();
  };

  const next = () => (i === Q.length - 1 ? submit() : go(i + 1));

  // Keyboard: letters pick options, arrows move between questions.
  useEffect(() => {
    if (phase !== "exam") return;
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const idx = LETTERS.indexOf(e.key.toUpperCase());
      if (idx > -1 && idx < Q[i].options.length) {
        choose(idx);
        e.preventDefault();
      } else if (e.key === "ArrowRight") go(i + 1);
      else if (e.key === "ArrowLeft") go(i - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [phase, i, Q, choose, go]);

  const score = useMemo(() => {
    if (phase !== "results") return null;
    const right = Q.filter((_, n) => isRight(n)).length;
    return { right, pct: Math.round((right / Q.length) * 100) };
  }, [phase, Q, isRight]);

  const domainName = Object.fromEntries(bank.domains.map((d) => [d.id, d.name]));

  const bar = (
    <div className="bar">
      <div className="bar-in">
        <a className="mark" href="#/">
          {bank.code} <span>{mode === "exam" ? "Exam" : "Study"} · {Q.length} questions</span>
        </a>
        {phase === "exam" && (
          <div className="bar-right">
            <button className="ghost" onClick={() => setPaletteOpen((o) => !o)}>Questions</button>
            <div className={"clock" + (mode === "exam" && secs < 300 ? " low" : "")}>
              {mode === "exam"
                ? `${Math.floor(Math.max(secs, 0) / 60)}:${String(Math.max(secs, 0) % 60).padStart(2, "0")}`
                : "Study"}
            </div>
            <button className="ghost" onClick={submit}>Submit</button>
          </div>
        )}
        {phase === "results" && score && (
          <div className="bar-right"><div className="clock">{score.right}/{Q.length}</div></div>
        )}
      </div>
      {phase === "exam" && (
        <div className="progress"><i style={{ width: `${((i + 1) / Q.length) * 100}%` }} /></div>
      )}
    </div>
  );

  /* ---------- RESULTS ---------- */
  if (phase === "results") {
    const { right, pct } = score;
    const verdict =
      pct >= bank.readinessPercent
        ? "Comfortably above the readiness bar. Work the misses and book the exam."
        : pct >= bank.passPercent
          ? "Around the likely cut score. Close the weakest section before booking."
          : "Below the bar. Treat the section breakdown as your study plan.";
    const rows = Q.map((q, n) => ({ q, n })).filter(({ n }) =>
      filter === "all" ? true : filter === "missed" ? !isRight(n) : flags[n]
    );
    const present = bank.domains.filter((d) => Q.some((q) => q.domain === d.id));

    return (
      <>
        {bar}
        <div className="wrap">
          <div className="score">{pct}%</div>
          <div className="verdict">{right} of {Q.length}. {verdict}</div>

          <div className="filters">
            <button className="cta" onClick={onNew}>Build a new exam</button>
            <button className="ghost" onClick={onRetake}>Retake these questions</button>
          </div>

          <h2 className="sub">By section</h2>
          {present.map((d) => {
            const idx = Q.map((q, n) => (q.domain === d.id ? n : -1)).filter((n) => n > -1);
            const hit = idx.filter(isRight).length;
            const p = Math.round((hit / idx.length) * 100);
            return (
              <div className="dom" key={d.id}>
                <div className="dom-top"><span>{d.name}</span><span>{hit}/{idx.length} · {p}%</span></div>
                <div className="track"><i className={p < bank.passPercent ? "weak" : ""} style={{ width: `${p}%` }} /></div>
              </div>
            );
          })}

          <div className="filters">
            {[["all", `All ${Q.length}`], ["missed", "Missed only"], ["flagged", "Flagged"]].map(([f, label]) => (
              <button key={f} className="ghost" aria-pressed={filter === f} onClick={() => setFilter(f)}>{label}</button>
            ))}
          </div>

          {rows.length === 0 && <div className="rev"><p className="muted">Nothing here. Good sign.</p></div>}
          {rows.map(({ q, n }) => {
            const ok = isRight(n);
            const fmt = (list) => [...list].sort().map((x) => `${LETTERS[x]}. ${q.options[x]}`).join(" | ");
            return (
              <div className="rev" key={q.id}>
                <div className="tagline">
                  Question {n + 1} · {domainName[q.domain]} · <b className={ok ? "hit" : "miss"}>{ok ? "Correct" : "Missed"}</b>
                  {flags[n] && " · Flagged"}
                </div>
                {q.group && <p className="rev-context">{bank.groups[q.group].title}</p>}
                <h3>{q.stem}</h3>
                <div className={"ansline " + (ok ? "g" : "r")}>
                  Your answer: {answers[n].length ? fmt(answers[n]) : "No answer given"}
                </div>
                {!ok && <div className="ansline g">Correct: {fmt(q.answer)}</div>}
                <Explanation q={q} />
              </div>
            );
          })}
        </div>
      </>
    );
  }

  /* ---------- QUESTION ---------- */
  const q = Q[i];
  const multi = q.answer.length > 1;
  const revealed = mode === "study" && checked[i];

  return (
    <>
      {bar}
      <div className="wrap">
        {paletteOpen && (
          <div className="palette">
            {Q.map((_, n) => (
              <button
                key={n}
                className={["pbtn", answers[n].length ? "answered" : "", flags[n] ? "flagged" : "", n === i ? "here" : ""].join(" ")}
                onClick={() => go(n)}
              >
                {n + 1}
              </button>
            ))}
          </div>
        )}

        <div className="qhead">
          <span className="qnum">Question {i + 1} of {Q.length}</span>
          <span className="chip">{domainName[q.domain]}</span>
          {multi && <span className="chip multi">Choose {q.answer.length}</span>}
        </div>

        <Context group={q.group && bank.groups[q.group]} />

        <p className="stem">{q.stem}</p>
        <div className="opts">
          {q.options.map((text, idx) => {
            let cls = "opt";
            if (revealed && q.answer.includes(idx)) cls += " correct";
            else if (revealed && answers[i].includes(idx)) cls += " wrong";
            return (
              <button
                key={idx}
                className={cls}
                aria-pressed={answers[i].includes(idx)}
                disabled={revealed}
                onClick={() => choose(idx)}
              >
                <span className="key">{LETTERS[idx]}</span>
                <span>{text}</span>
              </button>
            );
          })}
        </div>

        {revealed && <Explanation q={q} />}

        <div className="nav">
          <button className="ghost" disabled={i === 0} onClick={() => go(i - 1)}>Previous</button>
          <button
            className="ghost flagbtn"
            aria-pressed={flags[i]}
            onClick={() => setFlags((f) => f.map((v, n) => (n === i ? !v : v)))}
          >
            {flags[i] ? "Flagged" : "Flag for review"}
          </button>
          <div className="spacer" />
          {mode === "study" && !revealed && (
            <button
              className="ghost"
              disabled={answers[i].length === 0}
              onClick={() => setChecked((c) => c.map((v, n) => (n === i ? true : v)))}
            >
              Check answer
            </button>
          )}
          <button className="cta" onClick={next}>{i === Q.length - 1 ? "Finish" : "Next"}</button>
        </div>
      </div>
    </>
  );
}

export default Exam;
