import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🧩 Define all past events here (for now)
  const events = {
    "tree-planting": {
      title: "Tree Planting Initiative",
      date: "11th October 2025",
      location: "Kitise, Makueni County",
      hero: "/images/DSC_6429.jpg",
      story: [
        {
          text: `On the 11th of October 2025, Empower Champions Talent Academy launched its first major community event — the Tree Planting Initiative. This event marked a historic milestone as it merged our commitment to environmental sustainability with our vision of youth empowerment.`,
          image: "/images/DSC_6246.jpg",
        },
        {
          text: `The day began with an inspiring address from the Academy’s leadership, emphasizing that true champions nurture not just their talents but also their communities. Students, parents, and local leaders came together in unity to make Kitise greener and more resilient.`,
          image: "/images/DSC_6298.jpg",
        },
        {
          text: `Over 200 seedlings were planted across community spaces and school grounds. Every young participant learned practical tree-planting techniques, fostering a sense of ownership and environmental consciousness.`,
          image: "/images/DSC_6324.jpg",
        },
        {
          text: `As laughter and teamwork filled the air, the event embodied the Academy’s broader goal — developing holistic champions who excel both on and off the field. The community partnerships formed on this day will continue to nurture the trees and the values they represent.`,
          image: "/images/DSC_6390.jpg",
        },
      ],
    },

    "community-mentorship": {
      title: "Community Mentorship Day",
      date: "25th August 2025",
      location: "Wote Resource Centre",
      hero: "/images/DSC_6246.jpg",
      story: [
        {
          text: `The Community Mentorship Day brought together athletes, coaches, and community leaders to inspire young people on leadership, discipline, and teamwork.`,
          image: "/images/DSC_6298.jpg",
        },
        {
          text: `Speakers shared personal stories of resilience, sportsmanship, and the importance of character building beyond the pitch.`,
          image: "/images/DSC_6321.jpg",
        },
        {
          text: `Interactive sessions and games made learning fun and impactful, leaving participants energized and motivated to achieve their dreams.`,
          image: "/images/DSC_6324.jpg",
        },
      ],
    },
  };

  const event = events[id];

  // 🚨 If ID doesn’t exist, show a fallback
  if (!event) {
    return (
      <div className="event-details-page not-found">
        <h1>Event Not Found</h1>
        <p>
          Sorry, the event you’re looking for doesn’t exist or has been removed.
        </p>
        <Link to="/past-events" className="back-btn">
          ← Back to Past Events
        </Link>
      </div>
    );
  }

  return (
    <div className="event-details-page">
      {/* Hero Section */}
      <section
        className="event-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${event.hero})`,
        }}
      >
        <div className="hero-overlay">
          <h1>{event.title}</h1>
          <p className="event-meta">
            <strong>Date:</strong> {event.date} | <strong>Location:</strong>{" "}
            {event.location}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="event-story">
        {event.story.map((section, index) => (
          <div
            key={index}
            className={`story-block ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="story-text">
              <p>{section.text}</p>
            </div>
            <div className="story-image">
              <img
                src={process.env.PUBLIC_URL + section.image}
                alt={`section-${index}`}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Back Button */}
      <div className="back-wrapper">
        <Link to="/past-events" className="back-btn">
          ← Back to Past Events
        </Link>
      </div>
    </div>
  );
}

export default EventDetails;
