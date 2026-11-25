import React from "react";
import Motif from "../Motif";
import eventsData from "../../data/eventsData";
import "../styles/Pages.css";

const pub = (f) => `${process.env.PUBLIC_URL}/${f}`;

function List({ title, items, i = 0 }) {
  if (!items || items.length === 0) return null;
  return (
    <section data-reveal style={{ "--i": i }}>
      <h3>{title}</h3>
      <ul className="o-list">
        {items.map((r) => (
          <li key={r}>
            <Motif className="bullet-o" />
            {r}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Event({ ev, i }) {
  const [intro, ...goals] = ev.description || [];
  const sponsorName = ev.sponsors?.find((s) => s.sponsor)?.sponsor;
  const sponsorLogo = ev.sponsors?.find((s) => s.image)?.image;
  const hasFacts = ev.results || ev.rules || ev.prizes || sponsorName || sponsorLogo;

  return (
    <article id={ev.slug} className={`event${i % 2 ? " event--flip" : ""}`}>
      <div className="event__top wrap">
        <figure className="event__media" data-reveal="scale">
          {ev.image ? (
            <img src={ev.image} alt="" width="1280" height="1280" loading={i === 0 ? "eager" : "lazy"} />
          ) : (
            <div className="plate">
              <img src={pub("hci-lab-logo.png")} alt="" width="600" height="433" />
            </div>
          )}
        </figure>
        <div className="event__intro">
          <p className="event__kind" data-reveal>
            {ev.kind}
          </p>
          <h2 data-reveal>{ev.title}</h2>
          <p className="event__when" data-reveal style={{ "--i": 1 }}>
            {ev.date}
            {ev.venue && <> · {ev.venue}</>}
          </p>
          <p className="event__overview" data-reveal style={{ "--i": 2 }}>
            {ev.overview}
          </p>
          {ev.url && (
            <a className="btn" href={ev.url} target="_blank" rel="noopener noreferrer" data-reveal style={{ "--i": 3 }}>
              {ev.linkLabel || "Read more"} <span className="arrow" aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>

      {(goals.length > 0 || hasFacts) && (
        <div className="event__body">
          {goals.length > 0 && (
            <section className="event__goals wrap" aria-labelledby={`goals-${ev.slug}`}>
              <h3 id={`goals-${ev.slug}`} data-reveal>
                What teams built
              </h3>
              <div>
                <p className="prose" data-reveal style={{ "--i": 1 }}>
                  {intro}
                </p>
                <ul className="o-list o-list--roomy">
                  {goals.map((g, gi) => {
                    const [head, ...rest] = g.split(":");
                    return (
                      <li key={gi}>
                        <Motif className="bullet-o" />
                        <span>
                          {rest.length ? (
                            <>
                              <strong>{head}.</strong> {rest.join(":").trim()}
                            </>
                          ) : (
                            g
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          )}

          {hasFacts && (
            <div className={`event__facts wrap${goals.length ? "" : " event__facts--first"}`}>
              <List title="Results" items={ev.results} />
              <List title="Rules" items={ev.rules} i={1} />
              <List title="Prizes" items={ev.prizes} i={2} />
              {(sponsorName || sponsorLogo) && (
                <section data-reveal style={{ "--i": 3 }}>
                  <h3>Supported by</h3>
                  {sponsorLogo && <img className="event__logo" src={sponsorLogo} alt="" width="200" height="123" />}
                  {sponsorName && <p>{sponsorName}</p>}
                </section>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function EventsPage() {
  return (
    <>
      <header className="page-head" data-stamp="Ɖ">
        <h1 data-reveal>Events and news</h1>
        <Motif />
        <p className="lead" data-reveal style={{ "--i": 1 }}>
          Hackathons, lectures and partnerships from the lab, newest first.
        </p>
      </header>

      <nav className="event-index wrap" aria-label="Events on this page">
        <ul>
          {eventsData.map((ev) => (
            <li key={ev.slug}>
              <a href={`#${ev.slug}`}>
                <span className="event-index__title">{ev.title}</span>
                <span className="event-index__date">{ev.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {eventsData.map((ev, i) => (
        <Event key={ev.slug} ev={ev} i={i} />
      ))}
    </>
  );
}

export default EventsPage;
