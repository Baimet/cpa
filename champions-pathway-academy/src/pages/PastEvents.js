import React from "react";
import { Link } from "react-router-dom";
import "./PastEvents.css";

function PastEvents() {
  const events = [
    {
      id: 1,
      title: "Tree Planting Initiative",
      date: "11th October 2025",
      location: "Kitise, Makueni County",
      image: "/images/DSC_6429.jpg",
      summary:
        "A milestone in our commitment to make Makueni greener. The Empower Champions Talent Academy led a successful tree-planting event that united students, community leaders, and environmental advocates for a cause that matters.",
    },
  ];

  return (
    <div className="past-events-container fade-in">
      <h1 className="page-title">Past Events</h1>
      <p className="intro-text">
        Relive the defining moments that continue to inspire our vision for
        sustainability, talent development, and community growth.
      </p>

      <div className="past-events-grid">
        {events.map((event) => (
          <div key={event.id} className="past-event-card">
            <img src={event.image} alt={event.title} className="event-thumb" />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p>{event.summary}</p>
              <p className="event-meta">
                <strong>Date:</strong> {event.date} | <strong>Location:</strong>{" "}
                {event.location}
              </p>
              <Link to={`/past-events/${event.id}`} className="view-btn">
                View Full Story →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastEvents;
