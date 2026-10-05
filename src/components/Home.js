import { EXAMS, VENDORS } from "../data/catalog";

function Home() {
  const totalQuestions = EXAMS.reduce((n, e) => n + e.questions, 0);

  return (
    <div className="wrap">
      <header className="site-head">
        <span className="mark">Golden Goose <span>Practice Tests</span></span>
      </header>

      <section className="hero">
        <h1>Full-length IT certification practice exams. Free.</h1>
        <p>
          Timed, exam-length practice tests written to each certification's published blueprint.
          Every question explains why the right answer is right and what each distractor is trying
          to catch.
        </p>
      </section>

      <div className="meta">
        <div><b>{EXAMS.length}</b><small>practice exams</small></div>
        <div><b>{totalQuestions}</b><small>questions</small></div>
        <div><b>{VENDORS.length}</b><small>vendors</small></div>
        <div><b>$0</b><small>always</small></div>
      </div>

      {VENDORS.map((v) => (
        <section key={v.name} className="vendor">
          <h2>{v.name}</h2>
          <p className="vendor-blurb">{v.blurb}</p>
          <div className="cards">
            {EXAMS.filter((e) => e.vendor === v.name).map((e) => (
              <a key={e.id} className="card" href={`#/exam/${e.id}`}>
                <span className="chip">{e.code}</span>
                <b>{e.name}</b>
                <span className="card-title">{e.title}</span>
                <small>{e.questions} questions · {e.minutes} minutes</small>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
