import React from "react";
import { Link } from "react-router-dom";
import "./styles/EventsCard.css";

function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="event-card-link">
      <div className="event-card">
        <h2 className="event-title">{event.title}</h2>
        <p className="event-date">
          <i className="far fa-calendar-alt"></i> {event.date} | {event.time}
        </p>
        <p className="event-description">{event.overview}</p>
      </div>
    </Link>
  );
}

export default EventCard;
