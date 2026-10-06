import { useEffect, useState } from "react";
import Setup from "./Setup";
import Exam from "./Exam";

// Loads a certification's question bank, then moves between building an exam
// (Setup) and taking it (Exam).
function CertPage({ cert }) {
  const [bank, setBank] = useState(null);
  const [error, setError] = useState(null);
  const [session, setSession] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    cert
      .load()
      .then((mod) => setBank(mod.default))
      .catch(() => setError("This question bank couldn't be loaded. Check your connection and refresh."));
  }, [cert]);

  const bar = (
    <div className="bar">
      <div className="bar-in">
        <a className="mark" href="#/">{cert.code} <span>{cert.name}</span></a>
      </div>
    </div>
  );

  if (error || !bank) {
    return (
      <>
        {bar}
        <div className="wrap"><p className="hero loading">{error || "Loading question bank…"}</p></div>
      </>
    );
  }

  if (session) {
    return (
      <Exam
        key={attempt}
        bank={bank}
        {...session}
        onRetake={() => setAttempt((a) => a + 1)}
        onNew={() => {
          setSession(null);
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  return (
    <>
      {bar}
      <Setup
        bank={bank}
        onStart={(s) => {
          setSession(s);
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
}

export default CertPage;
