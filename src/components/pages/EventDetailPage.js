import React from "react";
import { useParams } from "react-router-dom";
import "../styles/EventDetailPage.css";

function EventDetailsPage({ eventsData }) {
  const { eventId } = useParams();

  // Ensure `eventsData` is available
  if (!eventsData) {
    return <p>No events data available.</p>;
  }

  // Find the specific event
  const event = eventsData.find((event) => event.id === parseInt(eventId));

  // Ensure the event exists
  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="event-detail-page">
      {event.image && (
        <div className="banner-container">
          <img src={event.image} alt={event.title} className="banner-image" />
        </div>
      )}
      <h1>{event.title}</h1>
      <div className="overview">
        <h2>Overview</h2>
        <p>{event.overview}</p>
      </div>
      <div className="description">
        <h2>Description</h2>
        {event.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="date-venue">
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        {event.venue && (
          <p>
            <strong>Venue:</strong> {event.venue}
          </p>
        )}
      </div>
      {event.rules && (
        <div className="rules">
          <h4>Rules:</h4>
          <ul>
            {event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      )}
      {event.prizes && (
        <div className="prizes">
          <h4>Prizes:</h4>
          <ul>
            {event.prizes.map((prize, index) => (
              <li key={index}>{prize}</li>
            ))}
          </ul>
        </div>
      )}
      {event.sponsors && (
        <div className="sponsors">
          <div className="sponsors-list">
            {event.sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-item">
                {sponsor.image && (
                  <img
                    src={sponsor.image}
                    alt={sponsor.sponsor || "Sponsor"}
                    className="sponsor-image"
                  />
                )}
                {sponsor.sponsor && (
                  <p className="sponsor-name">{sponsor.sponsor}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetailsPage;
