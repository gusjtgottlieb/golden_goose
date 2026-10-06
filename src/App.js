import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import CertPage from "./components/CertPage";
import { findCert } from "./data/catalog";

// Hash-based routing keeps deep links working on GitHub Pages, which has no
// server-side fallback for client routes.
function parseRoute() {
  const m = window.location.hash.match(/^#\/cert\/([\w-]+)/);
  return m ? { page: "cert", certId: m[1] } : { page: "home" };
}

function App() {
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const cert = route.page === "cert" ? findCert(route.certId) : null;

  return (
    <>
      {cert ? <CertPage key={cert.id} cert={cert} /> : <Home />}
      <footer className="foot">
        <div className="wrap">
          Independent practice material, free to use. Not affiliated with or endorsed by
          ServiceNow or Microsoft; all trademarks belong to their respective owners.
        </div>
      </footer>
    </>
  );
}

export default App;
