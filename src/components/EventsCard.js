// EventCard.jsx
import React from "react";
import "./styles/EventsCard.css";

function EventCard({ event }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="event-card-link"
    >
      <div className="event-card">
        <h2 className="event-title">{event.title}</h2>
        <p className="event-date">
          <i className="far fa-calendar-alt"></i> {event.date} | {event.time}
        </p>
        <p className="event-description">{event.overview}</p>
      </div>
    </a>
  );
}

export default EventCard;
