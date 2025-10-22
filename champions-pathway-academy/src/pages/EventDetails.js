import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./EventDetails.css";

function EventDetails() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reveal sections on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".story-section");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const event = {
    title: "Tree Planting Initiative",
    date: "11th October 2025",
    location: "Kitise, Makueni County",
    hero: "/images/DSC_6429.jpg",
    paragraphs: [
      {
        text: "On the 11th of October 2025, Empower Champions Talent Academy launched its first major community event — the Tree Planting Initiative — aimed at turning Kitise, Makueni into a model for environmental awareness and youth involvement in sustainability.",
        image: "/images/DSC_6459.jpg",
        align: "left",
      },
      {
        text: "The event brought together students, teachers, parents, and community leaders in a day of collaboration and learning. Over 30 seedlings were planted across schools and community compounds, symbolizing growth, resilience, and the Academy’s dedication to environmental stewardship.",
        image: "/images/DSC_5855.jpg",
        align: "right",
      },
      {
        text: "Speakers highlighted the importance of conservation and collective responsibility. Young participants gained valuable hands-on experience, learning how small actions can make a lasting impact on their environment.",
        image: "/images/DSC_5521.jpg",
        align: "left",
      },
      {
        text: "The Academy’s leadership reaffirmed its vision of developing holistic champions — individuals excelling in both sports and social responsibility. The initiative also forged partnerships with local authorities to ensure continued follow-up and nurturing of the trees planted.",
        image: "/images/DSC_6324.jpg",
        align: "right",
      },
    ],
    stats: [
      { label: "Trees Planted", value: "30+" },
      { label: "Schools Involved", value: "27" },
      { label: "Participants", value: "300+" },
    ],
  };

  return (
    <main className="event-details-page">
      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${event.hero})` }}
        role="img"
        aria-label={`${event.title} hero image`}
      >
        <div className="hero-inner">
          <h1>{event.title}</h1>
          <p className="meta">
            <span>
              <strong>Date:</strong> {event.date}
            </span>
            <span className="dot" />
            <span>
              <strong>Location:</strong> {event.location}
            </span>
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="event-story">
        {event.paragraphs.map((block, i) => (
          <article
            key={i}
            className={`story-section ${
              block.align === "right" ? "reverse" : ""
            }`}
          >
            <div className="story-media">
              <img src={block.image} alt={`event-section-${i + 1}`} />
            </div>
            <div className="story-text">
              <p>{block.text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Stats / Impact */}
      <section className="impact">
        {event.stats.map((s, i) => (
          <div key={i} className="impact-item">
            <div className="value">{s.value}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </section>

      <div className="back-wrap">
        <Link to="/past-events" className="back-btn">
          ← Back to Past Events
        </Link>
      </div>
    </main>
  );
}

export default EventDetails;
