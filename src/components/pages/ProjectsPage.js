import React from "react";
import Motif from "../Motif";
import projectsData from "../../data/projectsData";
import "../styles/Pages.css";

function Project({ p, i }) {
  return (
    <article id={p.slug} className={`proj${i % 2 ? " proj--flip" : ""}`}>
      <figure className="proj__media" data-reveal="scale">
        {p.image ? (
          <img src={p.image} alt="" loading="lazy" width="1200" height="900" />
        ) : (
          <div className="plate">
            <img src={`${process.env.PUBLIC_URL}/hci-lab-logo.png`} alt="" width="600" height="433" />
          </div>
        )}
        {p.imageCredit && <figcaption className="note">Photo: {p.imageCredit}</figcaption>}
      </figure>
      <div className="proj__text">
        <h3 data-reveal>{p.shortTitle}</h3>
        <p className="proj__full" data-reveal style={{ "--i": 1 }}>
          {p.title}
        </p>
        <dl className="proj__facts" data-reveal style={{ "--i": 1 }}>
          <div>
            <dt>Dates</dt>
            <dd>{p.timeline}</dd>
          </div>
          <div>
            <dt>Area</dt>
            <dd>{p.area}</dd>
          </div>
          {p.languages.length > 0 && (
            <div>
              <dt>Languages</dt>
              <dd>{p.languages.join(", ")}</dd>
            </div>
          )}
        </dl>
        <p className="proj__desc" data-reveal style={{ "--i": 2 }}>
          {p.description}
        </p>
      </div>
    </article>
  );
}

function ProjectsPage() {
  const current = projectsData.filter((p) => p.status === "current");
  const past = projectsData.filter((p) => p.status === "past");

  return (
    <>
      <header className="page-head" data-stamp={projectsData.length}>
        <h1 data-reveal>Research projects</h1>
        <Motif />
        <p className="lead" data-reveal style={{ "--i": 1 }}>
          {current.length} running now, {past.length} finished. Most work in Ghanaian languages, from Akan to Dagaare.
        </p>
      </header>

      <section className="projs" aria-labelledby="cur-h">
        <h2 id="cur-h" className="projs__h wrap" data-reveal>
          Current
        </h2>
        {current.map((p, i) => (
          <Project key={p.slug} p={p} i={i} />
        ))}
      </section>

      <section className="projs projs--past" aria-labelledby="past-h">
        <h2 id="past-h" className="projs__h wrap" data-reveal>
          Finished
        </h2>
        {past.map((p, i) => (
          <Project key={p.slug} p={p} i={i + current.length} />
        ))}
      </section>
    </>
  );
}

export default ProjectsPage;
