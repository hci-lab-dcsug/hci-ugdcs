import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Motif from "../Motif";
import projectsData, { LANGUAGES } from "../../data/projectsData";
import researchFocus from "../../data/researchFocus";
import teamData from "../../data/teamData";
import publicationsData from "../../data/publicationsData";
import eventsData from "../../data/eventsData";
import "../styles/HomePage.css";

const pub = (f) => `${process.env.PUBLIC_URL}/${f}`;

const PUB_COUNT =
  publicationsData.journals.length +
  publicationsData.conferences.length +
  publicationsData.book_chapters.length +
  (publicationsData.preprints || []).length;
const PEOPLE_COUNT = teamData.staffs.length + teamData.team.filter((m) => m.status === "current").length;
const CURRENT = projectsData.filter((p) => p.status === "current");

/* The directory: the lab's "rooms" as comb-ruled squares, each a working link. */
const ROOMS = [
  { to: "/projects", name: "Projects", count: projectsData.length, preview: `Now: ${CURRENT[0].shortTitle}` },
  { to: "/?lang=Akan#languages", name: "Languages", count: LANGUAGES.length, preview: LANGUAGES.join(", ") },
  { to: "/team", name: "People", count: PEOPLE_COUNT, preview: "Led by Prof. Isaac Wiafe" },
  { to: "/publications", name: "Publications", count: PUB_COUNT, preview: "Searchable, 2010 to today" },
  { to: "/events-info", name: "Events", count: eventsData.length, preview: eventsData[0].title },
  { to: "/contact", name: "Join the lab", count: "→", preview: "Students, researchers and partners" },
];

function Directory() {
  return (
    <nav className="dir" aria-label="Lab directory">
      <ul className="dir__grid">
        {ROOMS.map((r, i) => (
          <li key={r.name} className="sq" style={{ "--i": i }}>
            <Link to={r.to} className="dir__room">
              <span className="dir__name">{r.name}</span>
              <span className="stamp dir__count" aria-hidden={r.count === "→" ? true : undefined}>
                {r.count}
              </span>
              <span className="dir__preview">{r.preview}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* The letters ordinary software cannot handle, and the languages that use them. */
const LETTERS = [
  { ch: "Ɛ", pair: "Ɛ ɛ", langs: "Akan · Ewe · Ga · Dagbani", lang: "Akan", tone: "" },
  { ch: "Ɔ", pair: "Ɔ ɔ", langs: "as in Ɔbaa Panin", lang: "Akan", tone: "stamp--red" },
  { ch: "Ŋ", pair: "Ŋ ŋ", langs: "Ewe · Ga · Dagbani", lang: "Ga", tone: "stamp--navy" },
  { ch: "Ɖ", pair: "Ɖ ɖ", langs: "Ewe", lang: "Ewe", tone: "" },
];

/* One distinctive letter per language, for stamping project cards. */
const LETTER_FOR = { Akan: "Ɔ", Ewe: "Ɖ", Ga: "Ŋ", Dagbani: "Ŋ" };

/* First viewport: the stamped cloth. */
function StampedCloth() {
  const [a, b, c, d] = LETTERS;
  const Letter = ({ l, i }) => (
    <Link to={`/?lang=${l.lang}#languages`} className="sq cloth__letter" style={{ "--i": i }}>
      <span className={`stamp cloth__stamp ${l.tone}`} aria-hidden="true">
        {l.ch}
      </span>
      <span className="cloth__cap">
        <b>{l.pair}</b>
        <span>{l.langs}</span>
      </span>
      <span className="visually-hidden">The letter {l.pair}: see projects in {l.lang}</span>
    </Link>
  );
  return (
    <section className="cloth" aria-labelledby="cloth-h">
      <div className="strip" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="cloth__grid">
        <div className="sq cloth__head" style={{ "--i": 0 }}>
          <div>
            <h1 id="cloth-h">
              We teach computers <em>Ghana’s languages</em>
            </h1>
            <p className="cloth__sub">
              Speech, language and behaviour-change technology from room CS6, Department of Computer Science,
              University of Ghana.
            </p>
          </div>
          <div className="cloth__actions">
            <Link to="/projects" className="btn">
              See our projects <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/team" className="text-link">
              Meet the team
            </Link>
          </div>
        </div>
        <Letter l={a} i={1} />
        <Letter l={b} i={2} />
        <Letter l={c} i={3} />
        <Link to="/publications" className="sq cloth__count" style={{ "--i": 4 }}>
          <span className="stamp cloth__num stamp--navy">{PUB_COUNT}</span>
          <span className="cloth__cap">
            <b>Publications</b>
            <span>2010 – 2026</span>
          </span>
        </Link>
        <figure className="sq cloth__photo" style={{ "--i": 5 }}>
          <img src={pub("lab.jpg")} alt="Members of the lab with collaborators in Accra" width="1600" height="1204" />
        </figure>
        <Letter l={d} i={6} />
      </div>
    </section>
  );
}

/* The live thing: pick a language, see the lab's work in it. */
function LanguagePicker() {
  const [params] = useSearchParams();
  const wanted = params.get("lang");
  const [lang, setLang] = useState(LANGUAGES.includes(wanted) ? wanted : "Akan");
  useEffect(() => {
    if (LANGUAGES.includes(wanted)) setLang(wanted);
  }, [wanted]);
  const matches = useMemo(() => projectsData.filter((p) => p.languages.includes(lang)), [lang]);

  return (
    <section className="langs" id="languages" aria-labelledby="langs-h">
      <div className="langs__intro">
        <h2 id="langs-h" data-reveal>
          Pick a language
        </h2>
        <p data-reveal style={{ "--i": 1 }}>
          Most of our work is in Ghanaian languages that mainstream speech and language software does not cover.
        </p>
        <img
          src={pub("img/market-women-in-ghana.jpg")}
          alt="Traders at a market in Ghana"
          className="langs__photo"
          width="900"
          height="675"
          loading="lazy"
          data-reveal="scale"
        />
        <p className="note">Photo: “Market Women in Ghana” by SandisterTei, CC BY-SA 3.0</p>
      </div>

      <div className="langs__side">
        <div
          className="langs__tabs"
          role="tablist"
          aria-label="Languages"
          onKeyDown={(e) => {
            const i = LANGUAGES.indexOf(lang);
            const next = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: LANGUAGES.length - 1 }[e.key];
            if (next === undefined) return;
            e.preventDefault();
            const n = (next + LANGUAGES.length) % LANGUAGES.length;
            setLang(LANGUAGES[n]);
            e.currentTarget.querySelectorAll('[role="tab"]')[n].focus();
          }}
        >
          {LANGUAGES.map((l) => {
            const n = projectsData.filter((p) => p.languages.includes(l)).length;
            return (
              <button
                key={l}
                type="button"
                role="tab"
                aria-selected={l === lang}
                aria-controls="langs-panel"
                tabIndex={l === lang ? 0 : -1}
                className="langs__tab"
                onClick={() => setLang(l)}
              >
                <span className="langs__tab-name">{l}</span>
                <span className="langs__tab-n">{n}</span>
              </button>
            );
          })}
        </div>

        <div id="langs-panel" role="tabpanel" className="langs__panel" aria-live="polite">
          <p className="langs__count" key={`count-${lang}`}>
            {lang}: {matches.length} {matches.length === 1 ? "project" : "projects"}
          </p>
          <ul className="langs__list" key={lang}>
            {matches.map((p, i) => (
              <li key={p.slug} style={{ "--i": i }}>
                <Link to={`/projects#${p.slug}`}>
                  <span>{p.shortTitle}</span>
                  <span className="langs__years">{p.years}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const director = teamData.staffs[0];
  const researchers = teamData.team.filter((m) => m.status === "current");

  return (
    <>
      <StampedCloth />

      {/* Inside room CS6: who we are, and the directory into the site */}
      <section className="door">
        <div className="door__left">
          <h2 className="door__h" data-reveal>
            Inside room CS6
          </h2>
          <p className="door__sub" data-reveal style={{ "--i": 1 }}>
            The Human-Computer Interaction Lab builds speech, language and behaviour-change technology at the
            Department of Computer Science, University of Ghana, Legon. Every square is a way in.
          </p>
        </div>
        <Directory />
      </section>

      {/* Statement with inline pictures */}
      <section className="statement wrap" aria-label="What the lab does">
        <p data-reveal>
          Our open dataset helped bring Akan voice search to Google. Now we build for mothers, people who stammer
          and classrooms.
        </p>
      </section>

      {/* Projects: staggered tiles */}
      <section className="tiles wrap" aria-labelledby="tiles-h">
        <div className="tiles__head">
          <h2 id="tiles-h" data-reveal>
            Projects
          </h2>
          <Link to="/projects" className="text-link" data-reveal style={{ "--i": 1 }}>
            All {projectsData.length} projects
          </Link>
        </div>
        {projectsData.map((p, i) => (
          <Link
            to={`/projects#${p.slug}`}
            key={p.slug}
            className={`tile${p.image ? "" : " tile--text"}`}
            data-reveal
            style={{ "--i": i % 2 }}
          >
            {p.image ? (
              <div className="tile__media">
                <img src={p.image} alt="" loading="lazy" width="800" height="600" />
              </div>
            ) : (
              <>
                <p className="tile__langs">{p.languages.length ? p.languages.join(" · ") : p.area}</p>
                <span className="stamp stamp--gold tile__stamp" aria-hidden="true">
                  {LETTER_FOR[p.languages[0]] || "Ɛ"}
                </span>
              </>
            )}
            <div className="tile__cap">
              <span className="tile__name">{p.shortTitle}</span>
              <span className="tile__meta">
                {p.years} · {p.area}
              </span>
            </div>
          </Link>
        ))}
      </section>

      <LanguagePicker />

      {/* The director */}
      <section className="about" aria-labelledby="about-h">
        <div className="about__panel">
          <img
            className="about__portrait"
            src={director.image}
            alt="Professor Isaac Wiafe"
            width="477"
            height="713"
            loading="lazy"
            data-reveal="scale"
          />
          <div className="about__text">
            <h2 id="about-h" data-reveal>
              Led by Prof. Isaac Wiafe
            </h2>
            <p data-reveal style={{ "--i": 1 }}>
              Professor of Information Technology. His research looks at how technology changes behaviour:
              persuasive systems, virtual reality and language models that help people live, learn and stay healthy.
            </p>
            <div className="about__actions" data-reveal style={{ "--i": 2 }}>
              <a href="mailto:iwiafe@ug.edu.gh" className="btn">
                Email Prof. Wiafe <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href={director.scholar} className="text-link" target="_blank" rel="noopener noreferrer">
                Google Scholar profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* People and research areas */}
      <section className="menu wrap" aria-label="People and research areas">
        <div className="menu__cat">
          <div className="menu__head" data-reveal>
            <h2>Researchers</h2>
            <span>{researchers.length} people</span>
          </div>
          <ul className="menu__items">
            {researchers.map((m, i) => (
              <li key={m.name} className="menu__item" data-reveal style={{ "--i": i % 2 }}>
                <img src={m.image} alt="" className="menu__pic pic-r" width="72" height="72" loading="lazy" />
                <div>
                  <p className="menu__name">{m.name}</p>
                  <p className="menu__desc">{m.title}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="menu__more" data-reveal>
            <Link to="/team" className="text-link">
              The whole team, past and present
            </Link>
          </p>
        </div>

        <div className="menu__cat">
          <div className="menu__head" data-reveal>
            <h2>Research areas</h2>
            <span>{researchFocus.length} areas</span>
          </div>
          <ul className="menu__items">
            {researchFocus.map((r, i) => (
              <li key={r.title} className="menu__item" data-reveal style={{ "--i": i % 2 }}>
                <Motif className="menu__bar" />
                <div>
                  <p className="menu__name">{r.title}</p>
                  <p className="menu__desc">{r.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners: who the lab works with, and what each did */}
      <section className="partners wrap" aria-labelledby="partners-h">
        <h2 id="partners-h" data-reveal>
          Working with
        </h2>
        <ul className="partners__list">
          <li data-reveal>
            <p className="partners__name">Google</p>
            <p>Funded the collection of the lab’s open speech data in five Ghanaian languages.</p>
          </li>
          <li data-reveal style={{ "--i": 1 }}>
            <p className="partners__name">GDI Hub, University College London</p>
            <p>Partnered on the 2025 Tɛkyerɛma Pa Hackathon and its mentoring.</p>
          </li>
          <li data-reveal style={{ "--i": 2 }}>
            <p className="partners__name">MTN Ghana</p>
            <p>Sponsored the 2026 hackathon; partnership signed with the University in September 2026.</p>
          </li>
        </ul>
        <p className="partners__more" data-reveal>
          <Link to="/contact#partner" className="text-link">
            Partner with the lab
          </Link>
        </p>
      </section>

      {/* The words are the button */}
      <Link to="/contact" className="cta">
        <span className="cta__line">Students, researchers and partners: tell us what you would like to work on.</span>
        <svg className="cta__arrow" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M12 36 L36 12 M16 12 H36 V32" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <span className="cta__word">Join us</span>
      </Link>
    </>
  );
}

export default HomePage;
