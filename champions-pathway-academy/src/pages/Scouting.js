// src/pages/Scouting.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Scouting.css";

function Scouting() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="scouting-container">
      <header className="scouting-header" data-aos="fade-down">
        <h1>Talent Scouting</h1>
        <p>Discovering and developing the next generation of champions</p>
      </header>

      <section className="scouting-section" data-aos="fade-up">
        <div className="scouting-image">
          <img src="/images/scout.jpeg" alt="Scouting" />
        </div>
        <div className="scouting-text">
          <h2>Our Scouting Mission</h2>
          <p>
            We actively scout for talented youth across regions, focusing on raw
            potential, commitment, and character. Our scouts attend school
            games, local tournaments, and community events to identify
            exceptional talent early on.
          </p>
        </div>
      </section>

      <section className="scouting-section reverse" data-aos="fade-up">
        <div className="scouting-text">
          <h2>What We Offer</h2>
          <ul>
            <li>Expert assessment by certified coaches and scouts</li>
            <li>Structured training programs to refine skills</li>
            <li>Opportunities to join elite teams and showcases</li>
            <li>Academic and personal development guidance</li>
          </ul>
        </div>
        <div className="scouting-image">
          <img src="/images/assess.jpeg" alt="Assessment" />
        </div>
      </section>
    </div>
  );
}

export default Scouting;
