import React from "react";
import Motif from "../Motif";
import teamData from "../../data/teamData";
import "../styles/Pages.css";

const clean = (s) => s.replace(/^-\s*/, "");
const hasPhoto = (src) => !/\/$/.test(src);

function Person({ member, i, big }) {
  return (
    <li className={`person${big ? " person--big" : ""}`} data-reveal style={{ "--i": i % 2 }}>
      {hasPhoto(member.image) ? (
        <img src={member.image} alt="" className="person__pic pic-r" width="160" height="160" loading="lazy" />
      ) : (
        <span className="person__pic person__pic--none" aria-hidden="true">
          <img src={`${process.env.PUBLIC_URL}/hci-lab-crest.png`} alt="" width="64" height="72" />
        </span>
      )}
      <div>
        <h3 className="person__name">{member.name}</h3>
        <p className="person__title">{member.title}</p>
        {member.expertise && <p className="person__desc">{member.expertise}</p>}
      </div>
    </li>
  );
}

function TeamPage() {
  const { team, staffs } = teamData;
  const current = team.filter((m) => m.status === "current");
  const past = team.filter((m) => m.status === "past");

  return (
    <>
      <header className="page-head" data-stamp="Ŋ">
        <h1 data-reveal>The people in the lab</h1>
        <Motif />
        <p className="lead" data-reveal style={{ "--i": 1 }}>
          {staffs.length} faculty members and {current.length} current researchers in the Department of Computer
          Science, University of Ghana.
        </p>
      </header>

      <section className="staff" aria-label="Faculty">
        {staffs.map((s, i) => (
          <article key={s.name} className={`staff__row${i % 2 ? " staff__row--flip" : ""}`}>
            <img
              src={s.image}
              alt={`Portrait of ${s.name}`}
              className="staff__pic pic-r"
              width="560"
              height="560"
              loading={i === 0 ? "eager" : "lazy"}
              data-reveal="scale"
            />
            <div className="staff__text">
              <h2 data-reveal>{s.name}</h2>
              <p className="staff__title" data-reveal style={{ "--i": 1 }}>
                {s.title}
              </p>
              <ul className="o-list" data-reveal style={{ "--i": 2 }}>
                {s.description.map((d) => (
                  <li key={d}>
                    <Motif className="bullet-o" />
                    {clean(d)}
                  </li>
                ))}
              </ul>
              <div className="staff__links" data-reveal style={{ "--i": 3 }}>
                {s.email && (
                  <a className="btn" href={`mailto:${s.email}`}>
                    Email Prof. {s.name.split(" ").pop()}
                  </a>
                )}
                {s.scholar && (
                  <a className="text-link" href={s.scholar} target="_blank" rel="noopener noreferrer">
                    Google Scholar profile
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="people wrap" aria-labelledby="current-h">
        <div className="people__head" data-reveal>
          <h2 id="current-h">Current researchers</h2>
          <span>{current.length} people</span>
        </div>
        <ul className="people__grid">
          {current.map((m, i) => (
            <Person key={m.name} member={m} i={i} big />
          ))}
        </ul>
      </section>

      <section className="people people--past wrap" aria-labelledby="past-h">
        <div className="people__head" data-reveal>
          <h2 id="past-h">Past researchers</h2>
          <span>{past.length} people</span>
        </div>
        <ul className="people__grid">
          {past.map((m, i) => (
            <Person key={m.name} member={m} i={i} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default TeamPage;
