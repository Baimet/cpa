import React from "react";
import "./Programs.css";

const programs = [
  {
    title: "Athletics",
    description:
      "Track and field training for all levels focusing on speed, endurance, and technique.",
    image: "/images/athletics.jpg",
  },
  {
    title: "Football",
    description:
      "Skill development, tactical play, and physical conditioning for young footballers.",
    image: "/images/football.jpg",
  },
  {
    title: "Basketball",
    description:
      "Comprehensive basketball coaching including shooting, dribbling, and game IQ.",
    image: "/images/basketball.jpg",
  },
  {
    title: "Swimming",
    description:
      "Professional swim coaching with a focus on technique, safety, and stamina.",
    image: "/images/swimming.jpg",
  },
];

function Programs() {
  return (
    <div className="programs-page">
      <section className="programs-header">
        <h1>Our Programs</h1>
        <p>
          Explore the sports programs we offer to develop future champions on
          and off the field.
        </p>
      </section>

      <section className="programs-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </section>

      <section className="programs-cta">
        <h2>Ready to Join?</h2>
        <p>
          Contact us today to enroll your child in a program that inspires
          growth and excellence.
        </p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
}

export default Programs;
