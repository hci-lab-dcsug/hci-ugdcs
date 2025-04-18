import React from "react";
import eventsData from "../../data/eventsData";
import "../styles/EventsPage.css";
import EventCard from "../EventsCard";
import "../styles/EventsCard.css";

function EventsPage() {
  return (
    <div className="events-page">
      <div className="events-header">
        <h1>EVENTS</h1>
        <div className="filter-bar">
          <select className="filter-select">
            <option value="all">All Events</option>
            <option value="past">Past Events</option>
            <option value="upcoming">Upcoming Events</option>
          </select>
          <button className="filter-button">Filter</button>
        </div>
      </div>

      <div className="events-content">
        <div className="events-list">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
