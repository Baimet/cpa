import React, { useEffect } from "react";
import "../Events.css";

function UpcomingEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      title: "Launch of Empower Champions Talent Academy",
      date: "13th December 2025",
      time: "8:00 AM",
      location: "Kitise Primary School Grounds, Makueni",
      image: "/images/scout.jpeg",
      description:
        "Join us as we officially unveil Empower Champions Talent Academy — a center for nurturing talent and developing future champions. Expect games, mentorship sessions and community fun!",
      cta: "All are invited!",
    },
  ];

  return (
    <div className="events-page">
      {/* Hero Banner */}
      <section
        className="events-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/DSC_6390.jpg)`,
        }}
      >
        <div className="hero-overlay">
          <h1>Upcoming Events</h1>
          <p>
            Stay updated with our latest initiatives and upcoming programs.
            Every event is an opportunity to connect, grow, and empower.
          </p>
        </div>
      </section>

      {/* Event Cards */}
      <section className="events-list">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="event-card fade-in">
            <img src={event.image} alt={event.title} />
            <div className="event-content">
              <h2>{event.title}</h2>
              <p className="event-meta">
                <strong>Date:</strong> <span>{event.date}</span> |{" "}
                <strong>Time:</strong> <span>{event.time}</span>
              </p>
              <p className="event-meta">
                <strong>Location:</strong> <span>{event.location}</span>
              </p>
              <p className="event-description">{event.description}</p>
              <p className="event-cta">{event.cta}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default UpcomingEvents;
