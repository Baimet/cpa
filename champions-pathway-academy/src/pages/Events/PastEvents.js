import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Events.css";

function PastEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pastEvents = [
    {
      title: "Tree Planting Initiative",
      date: "11th October 2025",
      location: "Kitise, Makueni County",
      image: "/images/DSC_6429.jpg",
      summary:
        "A beautiful day dedicated to greening Makueni and inspiring youth to care for the environment. Over 200 seedlings were planted!",
      link: "/events/tree-planting",
    },
    {
      title: "Community Mentorship Day",
      date: "25th August 2025",
      location: "Wote Resource Centre",
      image: "/images/DSC_6246.jpg",
      summary:
        "Bringing together athletes and mentors to guide the next generation on leadership, discipline, and purpose through sports.",
      link: "/events/community-mentorship",
    },
  ];

  return (
    <div className="events-page">
      {/* Hero Banner */}
      <section
        className="events-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/DSC_6298.jpg)`,
        }}
      >
        <div className="hero-overlay">
          <h1>Past Events</h1>
          <p>
            Relive some of our proudest moments — events that have shaped
            Empower Champions Talent Academy’s story of growth and impact.
          </p>
        </div>
      </section>

      {/* Past Event List */}
      <section className="events-list">
        {pastEvents.map((event, index) => (
          <div key={index} className="event-card fade-in">
            <img
              src={process.env.PUBLIC_URL + event.image}
              alt={event.title}
              className="event-image"
            />
            <div className="event-content">
              <h2>{event.title}</h2>
              <p className="event-meta">
                <strong>Date:</strong> <span>{event.date}</span>
              </p>
              <p className="event-meta">
                <strong>Location:</strong> <span>{event.location}</span>
              </p>
              <p className="event-description">{event.summary}</p>
              <Link to={event.link} className="details-btn">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PastEvents;
