import React, { useMemo } from "react";
import "../styles/PublicationsPage.css";
import publicationsData from "../../data/publicationsData";

const PublicationsPage = () => {
  const { journals, conferences, book_chapters } = publicationsData;

  // Function to highlight specified author names
  const highlightAuthors = (citation) => {
    const authorsToHighlight = ["Wiafe, I."];
    let highlightedCitation = citation;

    authorsToHighlight.forEach((author) => {
      const authorRegex = new RegExp(author.replace(".", "\\."), "g");
      highlightedCitation = highlightedCitation.replace(
        authorRegex,
        `<strong>${author}</strong>`
      );
    });

    return highlightedCitation;
  };

  // Filter and group journals by year, starting from 2010
  const journalsByYear = useMemo(() => {
    const filteredJournals = journals.filter((journal) => {
      const publicationYear = new Date(journal.year).getFullYear();
      return publicationYear >= 2010;
    });

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

  // Filter and group conferences by year, starting from 2010
  const conferencesByYear = useMemo(() => {
    const filteredConferences = conferences.filter((conf) => {
      const publicationYear = new Date(conf.year).getFullYear();
      return publicationYear >= 2010;
    });

    return filteredConferences.reduce((acc, conf) => {
      const publicationYear = new Date(conf.year).getFullYear();
      if (!acc[publicationYear]) {
        acc[publicationYear] = [];
      }
      acc[publicationYear].push({
        ...conf,
        highlightedCitation: highlightAuthors(conf.citation),
      });
      return acc;
    }, {});
  }, [conferences]);

  return (
    <div style={{ padding: "20px" }}>
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
        <h2>Books</h2>
        <ul>
          {book_chapters.map((book, index) => (
            <li key={index}>
              <p
                dangerouslySetInnerHTML={{
                  __html: highlightAuthors(book.citation),
                }}
              />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Conferences</h2>
        {Object.keys(conferencesByYear)
          .sort((a, b) => b - a) // Sort years in descending order
          .map((year) => (
            <div key={year}>
              <h3>{year}</h3>
              <ul>
                {conferencesByYear[year].map((conf, index) => (
                  <li key={index}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: conf.highlightedCitation,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
    </div>
  );
};

export default PublicationsPage;
