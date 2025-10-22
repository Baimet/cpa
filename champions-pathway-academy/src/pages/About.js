import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero" data-aos="fade-down">
        <h1>About Empower Champions Talent Academy</h1>
        <p>Nurturing Champions. Shaping Leaders. Empowering Futures.</p>
      </section>

      <section className="about-journey" data-aos="fade-right">
        <div className="journey-content">
          <div className="journey-text">
            <h2>Our Journey</h2>
            <p>
              Empower Champions Talent Academy (ECTA) was born out of a vision
              to transform the lives of youth through structured sports, life
              skills, mentorship, and education. From humble beginnings, ECTA
              has grown into a platform where dreams are nurtured, talent is
              refined, and champions are made.
            </p>
          </div>
          <img
            src="/images/journey.jpeg"
            alt="ECTA Journey"
            className="about-img"
          />
        </div>
      </section>

      <section className="about-vision" data-aos="fade-left">
        <div className="vision-content">
          <img
            src="/images/vision.jpg"
            alt="ECTA Vision"
            className="about-img"
          />
          <div className="vision-text">
            <h2>Our Long-Term Vision</h2>

            <p>
              ECTA envisions becoming a leading youth development academy not
              only in Kenya but across Africa. Our goal is to establish holistic
              programs that foster athletic excellence, academic achievement,
              and character-building. We are committed to grooming future
              leaders, professionals, and global citizens.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values" data-aos="fade-up">
        <h2>Our Core Beliefs</h2>
        <ul>
          <li>Empowering youth through structured sports programs</li>
          <li>Promoting gender equality and inclusion in all our activities</li>
          <li>Instilling discipline, leadership, and integrity</li>
          <li>
            Creating opportunities for international exposure and scholarship
          </li>
        </ul>
      </section>

      <section className="about-mou" data-aos="zoom-in">
        <h2>Inking a Historic Milestone</h2>
        <div className="mou-content">
          <img
            src="/images/mutua.jpeg"
            alt="MOU Signing with Makueni County"
            className="about-img"
          />
          <p>
            In a landmark moment, ECTA signed a Memorandum of Understanding with
            Makueni County Government, led by Governor Mutula Kilonzo Jr. The
            partnership will see the development of a world-class sports academy
            in Makueni. The facility will feature modern training infrastructure
            and mentorship programs, equipping youth with leadership, life
            skills, and global sporting opportunities.
          </p>
          <p>
            Governor Mutula emphasized that this partnership is about more than
            sports—it is about creating a new generation of leaders. ECTA Deputy
            CEO Walter Omwenga reiterated their commitment to youth empowerment
            and cultural exchange.
          </p>
        </div>
      </section>

      <section className="about-cta" data-aos="fade-up">
        <h2>Be Part of the Journey</h2>
        <p>
          Join us as we raise a generation of champions—on and off the field.
        </p>
        <Link to="/contact" className="cta-button-link">
          <button className="cta-button">Get Involved</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
