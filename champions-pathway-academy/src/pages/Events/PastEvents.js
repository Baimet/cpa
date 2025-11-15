import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Events.css";
import { Helmet } from "react-helmet-async";

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
  ];

  return (
    <>
      <Helmet>
        <title>Empower Champions Talent Academy | Home</title>
        <meta
          name="description"
          content="Empower Champions Talent Academy is dedicated to nurturing young athletes in Makueni County through sports, education, and personal growth."
        />
        <meta
          name="keywords"
          content="Empower Champions Talent Academy, sports academy Kenya, youth empowerment, talent development, Makueni, football training, athletics"
        />
        <meta name="author" content="Empower Champions Talent Academy" />
        <meta property="og:title" content="Empower Champions Talent Academy" />
        <meta
          property="og:description"
          content="Empowering the next generation of champions through sports and mentorship."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/ecta.jpeg`}
        />
        <meta
          property="og:url"
          content="https://www.empowertalentacademy.org"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Empower Champions Talent Academy",
          "url": "https://www.empowertalentacademy.org",
          "logo": "${process.env.PUBLIC_URL}/images/ecta.jpeg",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61579454606277",
            "https://x.com/cpacademy24",
            "https://www.instagram.com/empowerchampionstalentacademy"
          ],
          "description": "Empower Champions Talent Academy develops holistic young athletes through sports, mentorship, and environmental action in Kenya."
        }
      `}
        </script>
      </Helmet>
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
    </>
  );
}

export default PastEvents;
