// PublicationsPage.jsx
import React, { useMemo } from 'react';
import '../styles/PublicationsPage.css';
import publicationsData from '../../data/publicationsData';

const PublicationsPage = () => {
  const { journals, conferences } = publicationsData;

  // Function to highlight specified author names
  const highlightAuthors = (citation) => {
    const authorsToHighlight = ['Abdulai, J.-D.', 'Wiafe, I.'];
    let highlightedCitation = citation;

    authorsToHighlight.forEach((author) => {
      const authorRegex = new RegExp(author.replace('.', '\\.'), 'g');
      highlightedCitation = highlightedCitation.replace(
        authorRegex,
        `<strong>${author}</strong>`
      );
    });

    return highlightedCitation;
  };

  // Memoize the highlighted citations for performance optimization
  const highlightedJournals = useMemo(
    () =>
      journals.map((journal) => ({
        ...journal,
        highlightedCitation: highlightAuthors(journal.citation),
      })),
    [journals]
  );

  const highlightedConferences = useMemo(
    () =>
      conferences.map((conf) => ({
        ...conf,
        highlightedCitation: highlightAuthors(conf.citation),
      })),
    [conferences]
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Publications</h1>
      <section>
        <h2>Journals</h2>
        <ul>
          {highlightedJournals.map((journal, index) => (
            <li key={index}>
              <p
                dangerouslySetInnerHTML={{
                  __html: journal.highlightedCitation,
                }}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Conferences</h2>
        <ul>
          {highlightedConferences.map((conf, index) => (
            <li key={index}>
              <p
                dangerouslySetInnerHTML={{
                  __html: conf.highlightedCitation,
                }}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PublicationsPage;
