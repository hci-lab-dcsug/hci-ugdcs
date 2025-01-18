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

  // Filter and group journals by year, starting from 2018
  const journalsByYear = useMemo(() => {
    // Filter journals from 2018 onwards
    const filteredJournals = journals.filter((journal) => {
      const publicationYear = new Date(journal.year).getFullYear();
      return publicationYear >= 2017;
    });

    // Group filtered journals by year
    return filteredJournals.reduce((acc, journal) => {
      const publicationYear = new Date(journal.year).getFullYear();
      if (!acc[publicationYear]) {
        acc[publicationYear] = [];
      }
      acc[publicationYear].push({
        ...journal,
        highlightedCitation: highlightAuthors(journal.citation),
      });
      return acc;
    }, {});
  }, [journals]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Publications</h1>
      <section>
        <h2>Journals</h2>
        {Object.keys(journalsByYear)
          .sort((a, b) => b - a) // Sort years in descending order
          .map((year) => (
            <div key={year}>
              <h3>{year}</h3>
              <ul>
                {journalsByYear[year].map((journal, index) => (
                  <li key={index}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: journal.highlightedCitation,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      <section>
        <h2>Conferences</h2>
        <ul>
          {conferences.map((conf, index) => (
            <li key={index}>
              <p
                dangerouslySetInnerHTML={{
                  __html: highlightAuthors(conf.citation),
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
