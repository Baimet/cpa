import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
                only in Kenya but across the globe. Our goal is to establish
                holistic programs that foster athletic excellence, academic
                achievement, and character-building. We are committed to
                grooming future leaders, professionals, and global citizens.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values" data-aos="fade-up">
          <h2>Our Core Beliefs</h2>
          <ul>
            <li>
              Empowering youth through structured sports programs and creative
              sports
            </li>
            <li>
              Promoting gender equality and inclusion in all our activities
            </li>
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
              In a landmark moment, ECTA signed a Memorandum of Understanding
              with Makueni County Government, led by Governor Mutula Kilonzo Jr.
              The partnership will see the development of a world-class sports
              academy in Makueni. The facility will feature modern training
              infrastructure and mentorship programs, equipping youth with
              leadership, life skills, and global sporting opportunities.
            </p>
            <p>
              Governor Mutula emphasized that this partnership is about more
              than sports—it is about creating a new generation of leaders. ECTA
              Deputy CEO Walter Omwenga reiterated their commitment to youth
              empowerment and cultural exchange.
            </p>
          </div>
        </section>

        <section className="about-cta" data-aos="fade-up">
          <h2>Be Part of the Journey</h2>
          <p>
            Join us as we raise a generation of champions—on and off the field.
          </p>
          <Link to="/contact" className="cta-button-link">
            <button className="cta-btn">Get Involved</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default About;
