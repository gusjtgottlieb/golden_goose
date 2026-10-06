import { CERTS, VENDORS } from "../data/catalog";

function Home() {
  const totalQuestions = CERTS.reduce((n, c) => n + c.bankSize, 0);

  return (
    <div className="wrap">
      <header className="site-head">
        <span className="mark">Golden Goose <span>Practice Tests</span></span>
      </header>

      <section className="hero">
        <h1>Full-length IT certification practice exams. Free.</h1>
        <p>
          Pick a certification, choose how you want to practice, and get a fresh exam drawn from
          the question bank, balanced to the published blueprint. Every question explains why the
          right answer is right and what each distractor is trying to catch.
        </p>
      </section>

      <div className="meta">
        <div><b>{CERTS.length}</b><small>certifications</small></div>
        <div><b>{totalQuestions}</b><small>questions</small></div>
        <div><b>{VENDORS.length}</b><small>vendors</small></div>
        <div><b>$0</b><small>always</small></div>
      </div>

      {VENDORS.map((v) => (
        <section key={v.name} className="vendor">
          <h2>{v.name}</h2>
          <p className="vendor-blurb">{v.blurb}</p>
          <div className="cards">
            {CERTS.filter((c) => c.vendor === v.name).map((c) => (
              <a key={c.id} className="card" href={`#/cert/${c.id}`}>
                <span className="chip">{c.code}</span>
                <b>{c.name}</b>
                <small>{c.bankSize}-question bank · full exam {c.fullLength} questions in {c.minutes} min</small>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
