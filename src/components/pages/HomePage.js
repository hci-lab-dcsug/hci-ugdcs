import React from "react";
import { Link } from "react-router-dom";
import Motif from "../Motif";
import projectsData, { LANGUAGES } from "../../data/projectsData";
import researchFocus from "../../data/researchFocus";
import teamData from "../../data/teamData";
import publicationsData from "../../data/publicationsData";
import "../styles/HomePage.css";

const pub = (f) => `${process.env.PUBLIC_URL}/${f}`;

const PUB_COUNT =
  publicationsData.journals.length +
  publicationsData.conferences.length +
  publicationsData.book_chapters.length +
  (publicationsData.preprints || []).length;
const SPEECH_DATA_URL = "https://hci-lab-ugspeechdata.github.io/speech_data_ghana_ug";
const IMPAIRED_DATA_URL = "https://data.mendeley.com/datasets/vc84vdw8tb";

/* The first screen's squares: real figures from the lab's work, each pressed like a stamp and each a link. */
const FACTS = [
  {
    href: SPEECH_DATA_URL,
    num: "5,000",
    label: "hours of speech",
    detail: "Recorded in Akan, Ewe, Dagbani, Dagaare and Ikposo. Open data, 2025.",
    tone: "",
    long: true,
  },
  {
    href: IMPAIRED_DATA_URL,
    num: "50",
    label: "hours of impaired speech",
    detail: "Akan speakers who stammer, or have cerebral palsy, cleft palate or a stroke.",
    tone: "stamp--red",
  },
  {
    to: "/projects",
    num: LANGUAGES.length,
    label: "languages",
    detail: "Ghanaian and West African languages in our projects.",
    tone: "stamp--navy",
  },
  {
    to: "/publications",
    num: PUB_COUNT,
    label: "publications",
    detail: "Papers, chapters and preprints since 2010.",
    tone: "stamp--navy",
  },
  {
    to: "/events-info#tekyerema-pa-2026",
    num: "550",
    label: "hackathon participants",
    detail: "131 teams at Tɛkyerɛma Pa 2026, building inclusive tools in Ghanaian languages.",
    tone: "",
  },
];

function Fact({ f, i }) {
  const body = (
    <>
      <span className={`stamp cloth__num ${f.long ? "cloth__num--long" : ""} ${f.tone}`}>{f.num}</span>
      <span className="cloth__cap">
        <b>{f.label}</b>
        <span>{f.detail}</span>
      </span>
    </>
  );
  return f.href ? (
    <a href={f.href} className="sq cloth__count" style={{ "--i": i }} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <Link to={f.to} className="sq cloth__count" style={{ "--i": i }}>
      {body}
    </Link>
  );
}

/* First viewport: the stamped cloth. */
function StampedCloth() {
  const [hours, impaired, langs, pubs, hacks] = FACTS;
  return (
    <section className="cloth" aria-labelledby="cloth-h">
      <div className="strip" aria-hidden="true" data-reveal="strip">
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} style={{ "--i": i }} />
        ))}
      </div>
      <div className="cloth__grid">
        <div className="sq cloth__head" style={{ "--i": 0 }}>
          <div>
            <h1 id="cloth-h">
              Language technology for <em>Ghana</em>
            </h1>
            <p className="cloth__sub">
              We record open speech data in Ghanaian languages, build speech recognition and language models, and
              study how software can help people change behaviour. Department of Computer Science, University of Ghana.
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
        <Fact f={hours} i={1} />
        <Fact f={impaired} i={2} />
        <Fact f={langs} i={3} />
        <Fact f={pubs} i={4} />
        <figure className="sq cloth__photo" style={{ "--i": 5 }}>
          <img src={pub("lab.jpg")} alt="Members of the lab with collaborators in Accra" width="1600" height="1204" />
        </figure>
        <Fact f={hacks} i={6} />
      </div>
    </section>
  );
}

function HomePage() {
  const director = teamData.staffs[0];
  const featured = projectsData.filter((p) => p.status === "current").slice(0, 3);

  return (
    <>
      <StampedCloth />

      {/* What the lab works on: the six areas, and who leads it */}
      <section className="menu wrap" aria-labelledby="areas-h">
        <div className="menu__head ruled" data-reveal="rule">
          <h2 id="areas-h" data-reveal>
            What we work on
          </h2>
          <Link to="/team" className="text-link" data-reveal style={{ "--i": 1 }}>
            Led by Prof. {director.name.replace(/^Prof\.?\s*/, "")}
          </Link>
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
      </section>

      {/* Open data: the lab's two public speech datasets */}
      <section className="statement wrap" aria-labelledby="data-h">
        <h2 id="data-h" className="ruled" data-reveal>
          Open speech data
        </h2>
        <div className="statement__cols">
          <div data-reveal>
            <h3>UGSpeechData</h3>
            <p>
              About 5,000 hours of speech in Akan, Ewe, Dagbani, Dagaare and Ikposo: 1,000 hours per language,
              recorded by native speakers describing culturally familiar pictures, with transcriptions for part of
              each. Published in <i>Data in Brief</i> in 2025 and free for research.
            </p>
            <a className="text-link" href={SPEECH_DATA_URL} target="_blank" rel="noopener noreferrer">
              Get the dataset
            </a>
          </div>
          <div data-reveal style={{ "--i": 1 }}>
            <h3>UGAkan Impaired Speech</h3>
            <p>
              About 50 hours of transcribed Akan speech from people who stammer or who have cerebral palsy, cleft
              palate or a stroke-related speech disorder. It is for speech recognition that understands them, and was
              collected with funding from Google Research.
            </p>
            <a className="text-link" href={IMPAIRED_DATA_URL} target="_blank" rel="noopener noreferrer">
              Get the dataset
            </a>
          </div>
        </div>
      </section>

      {/* Projects: staggered tiles */}
      <section className="tiles wrap" aria-labelledby="tiles-h">
        <div className="tiles__head ruled" data-reveal="rule">
          <h2 id="tiles-h" data-reveal>
            Current projects
          </h2>
          <Link to="/projects" className="text-link" data-reveal style={{ "--i": 1 }}>
            All {projectsData.length} projects
          </Link>
        </div>
        {featured.map((p, i) => (
          <Link
            to={`/projects#${p.slug}`}
            key={p.slug}
            className={`tile${p.image ? "" : " tile--text"}`}
            data-reveal
            style={{ "--i": i }}
          >
            {p.image ? (
              <div className="tile__media">
                <img src={p.image} alt="" loading="lazy" width="800" height="600" />
              </div>
            ) : (
                <p className="tile__langs">{p.languages.length ? p.languages.join(" · ") : p.area}</p>
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

      {/* Partners: who the lab works with, and what each did */}
      <section className="partners wrap" aria-labelledby="partners-h">
        <h2 id="partners-h" className="ruled" data-reveal>
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
