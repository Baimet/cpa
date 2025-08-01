import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section" data-aos="fade-down">
        <h1>Welcome to Champions Pathway Academy</h1>
        <p>
          <i>"Where Excellence Thrives and Legend Rise"</i>
        </p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="about-section" data-aos="fade-right">
        <div className="about-image-text">
          <img
            src="/images/kwambata.jpeg"
            alt="About Champions Pathway Academy"
            className="section-img"
          />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              The Champions Pathway Sports Academy believes in every young
              sports person and their potential to advance to higher levels and
              is poised to revolutionize the landscape of youth development by
              offering a comprehensive platform for athletic excellence,
              mentorship, basic life skills, academic excellence and character
              building. Rooted in a commitment to holistic growth, Champions
              Pathway Sports Academy aims to empower young individuals to thrive
              not only on the field but also in other aspects of their lives.
            </p>
          </div>
        </div>
      </section>

      <section className="programs-preview" data-aos="fade-up">
        <h2>Our Programs</h2>
        <div className="program-cards">
          <div className="program-card" data-aos="zoom-in">
            <img src="/images/football.jpg" alt="Football Program" />
            <h3>Football</h3>
            <p>
              Develop technical skills, game intelligence, and sportsmanship
              through structured training and regular matches.
            </p>
          </div>
          <div className="program-card" data-aos="zoom-in" data-aos-delay="200">
            <img src="/images/scrabble.jpg" alt="Academics Program" />
            <h3>Scrabble</h3>
            <p>
              Sharpen vocabulary, critical thinking, and cognitive agility with
              engaging scrabble competitions and training.
            </p>
          </div>
          <div className="program-card" data-aos="zoom-in" data-aos-delay="400">
            <img src="/images/chess.jpg" alt="Life Skills Program" />
            <h3>Chess</h3>
            <p>Empowering youth with personal and social skills</p>
          </div>
          <div className="program-card" data-aos="zoom-in">
            <img src="/images/swimming.jpg" alt="Football Program" />
            <h3>Swimming</h3>
            <p>
              Master strategy, patience, and problem-solving skills through
              guided mentorship and tournament play.
            </p>
          </div>
          <div className="program-card" data-aos="zoom-in">
            <img src="/images/rugby.jpg" alt="Football Program" />
            <h3>Rugby</h3>
            <p>Elite training and competitive exposure</p>
          </div>
          <div className="program-card" data-aos="zoom-in">
            <img src="/images/tennis.jpg" alt="Football Program" />
            <h3>Tennis</h3>
            <p>Elite training and competitive exposure</p>
          </div>
          <div className="program-card" data-aos="zoom-in">
            <img src="/images/basketball.jpg" alt="Football Program" />
            <h3>Basketball</h3>
            <p>Elite training and competitive exposure</p>
          </div>
          <div className="program-card" data-aos="zoom-in">
            <img src="/images/athletics.jpg" alt="Football Program" />
            <h3>Athletics</h3>
            <p>Elite training and competitive exposure</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us" data-aos="fade-left">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Dedicated Talent Scouting</li>
          <li>Experienced Coaches & Mentors</li>
          <li>All-Rounded Facilities</li>
          <li>Supportive Learning Environment</li>
        </ul>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <h2>Join the Champions Pathway Today</h2>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
}

export default Home;
