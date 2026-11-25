import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Motif from "../Motif";
import publicationsData from "../../data/publicationsData";
import "../styles/Pages.css";

const HIGHLIGHT = "Wiafe, I.";
const MIN_YEAR = 2010;

const TYPES = [
  { id: "all", label: "All" },
  { id: "journal", label: "Journals" },
  { id: "conference", label: "Conferences" },
  { id: "book", label: "Books & chapters" },
  { id: "preprint", label: "Preprints" },
];

const TYPE_NAME = {
  journal: "Journal article",
  conference: "Conference paper",
  book: "Book or chapter",
  preprint: "Preprint",
};

const ALL = [
  ...publicationsData.journals.map((p) => ({ ...p, type: "journal" })),
  ...publicationsData.conferences.map((p) => ({ ...p, type: "conference" })),
  ...publicationsData.book_chapters.map((p) => ({ ...p, type: "book" })),
  ...(publicationsData.preprints || []).map((p) => ({ ...p, type: "preprint" })),
]
  .map((p) => ({ ...p, yearNum: parseInt(String(p.year).trim(), 10) }))
  .filter((p) => p.yearNum >= MIN_YEAR);

function Citation({ text }) {
  const parts = text.split(HIGHLIGHT);
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && <strong>{HIGHLIGHT}</strong>}
          {part}
        </React.Fragment>
      ))}
    </>
  );
}

function PublicationsPage() {
  const [params, setParams] = useSearchParams();
  const type = TYPES.some((t) => t.id === params.get("type")) ? params.get("type") : "all";
  const query = params.get("q") || "";
  const update = (next) => {
    const merged = { type, q: query, ...next };
    const out = {};
    if (merged.type && merged.type !== "all") out.type = merged.type;
    if (merged.q) out.q = merged.q;
    setParams(out, { replace: true });
  };
  const setType = (t) => update({ type: t });
  const setQuery = (q) => update({ q });

  const counts = useMemo(() => {
    const c = { all: ALL.length };
    ALL.forEach((p) => (c[p.type] = (c[p.type] || 0) + 1));
    return c;
  }, []);

  const byYear = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = ALL.filter(
      (p) => (type === "all" || p.type === type) && (!q || p.citation.toLowerCase().includes(q))
    );
    const groups = {};
    list.forEach((p) => {
      (groups[p.yearNum] = groups[p.yearNum] || []).push(p);
    });
    return Object.keys(groups)
      .sort((a, b) => b - a)
      .map((y) => ({ year: y, items: groups[y] }));
  }, [type, query]);

  const shown = byYear.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <header className="page-head" data-stamp={ALL.length}>
        <h1 data-reveal>Publications</h1>
        <Motif />
        <p className="lead" data-reveal style={{ "--i": 1 }}>
          {ALL.length} papers, chapters and books since {MIN_YEAR}, on persuasive design, speech and language technology,
          and learning.
        </p>
      </header>

      <section className="pubs wrap" aria-label="Publication list">
        <div className="pubs__tools">
          <label className="pubs__search">
            <span className="visually-hidden">Search publications</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by author, title or journal"
              autoComplete="off"
            />
          </label>
          <div className="pubs__types" role="group" aria-label="Type of publication">
            {TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                className="chip"
                aria-pressed={type === t.id}
                onClick={() => setType(t.id)}
              >
                {t.label} <span className="chip__n">{counts[t.id] || 0}</span>
              </button>
            ))}
          </div>
          <p className="pubs__status" aria-live="polite">
            Showing {shown} of {ALL.length}
          </p>
        </div>

        {byYear.length === 0 ? (
          <div className="pubs__empty">
            <p className="lead">Nothing matches “{query}”.</p>
            <button type="button" className="btn btn--ink" onClick={() => update({ q: "", type: "all" })}>
              Clear the search
            </button>
          </div>
        ) : (
          byYear.map((g) => (
            <div className="pubs__year" key={g.year}>
              <h2 className="pubs__y">{g.year}</h2>
              <ol className="pubs__list">
                {g.items.map((p, i) => (
                  <li key={`${p.type}-${i}`} className="pub">
                    <p className="pub__cite">
                      <Citation text={p.citation} />
                    </p>
                    <p className="pub__type">{TYPE_NAME[p.type]}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export default PublicationsPage;
