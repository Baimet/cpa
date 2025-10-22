import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home-container">
      <section className="hero-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          className="hero-swiper"
        >
          {["/images/tenny.png", "/images/footy.png", "/images/rugi.png"].map(
            (img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="hero-slide"
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>

        <div className="hero-overlay">
          <h1>Welcome to Empower Champions Talent Academy</h1>
          <p>
            <i>"Where Excellence Thrives and Legends Rise"</i>
          </p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>

      <section className="about-section" data-aos="fade-right">
        <div className="about-image-text">
          <img
            src="/images/kwambata.jpeg"
            alt="About Empower Champions Talent Academy"
            className="section-img"
          />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At Empower Champions Talent Academy we believe in every talented
              person in sports and creative arts. We believe in their potential
              to advance to higher levels. ECTA works to revolutionize the
              landscape of youth development by offering a comprehensive
              platform for athletic excellence, mentorship, basic life skills,
              academic excellence and character building. Rooted in a commitment
              to holistic growth, Empower Champions Talent Academy aims to
              empower young individuals to thrive not only on the field but also
              in other aspects of their lives.
              <br />
              <Link to="/about" className="more-link">
                More About Us →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="programs-preview" data-aos="fade-up">
        <h2>Our Programs</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {[
            {
              title: "Football",
              image: "/images/footy.png",
              desc: "Develop technical skills, game intelligence, and sportsmanship through structured training and regular matches.",
            },
            {
              title: "Scrabble",
              image: "/images/puzzle.png",
              desc: "Sharpen vocabulary, critical thinking, and cognitive agility with engaging scrabble competitions and training.",
            },
            {
              title: "Chess",
              image: "/images/chessy.png",
              desc: "Master strategy, patience, and problem-solving skills through guided mentorship and tournament play.",
            },
            {
              title: "Swimming",
              image: "/images/swimmer.png",
              desc: "Boost endurance, technique, and water safety from beginner to competitive levels with professional coaching.",
            },
            {
              title: "Rugby",
              image: "/images/rugi.png",
              desc: "Elite training and competitive exposure in a high-impact sport.",
            },
            {
              title: "Tennis",
              image: "/images/tenny.png",
              desc: "Improve agility, technique, and mental toughness through expert coaching.",
            },
            {
              title: "Basketball",
              image: "/images/basket.png",
              desc: "Train for speed, teamwork, and shooting accuracy in a dynamic environment.",
            },
            {
              title: "Athletics",
              image: "/images/mkale.png",
              desc: "Track and field programs focused on strength, endurance, and discipline.",
            },
            {
              title: "Cricket",
              image: "/images/crick.png",
              desc: "Track and field programs focused on strength, endurance, and discipline.",
            },
            {
              title: "Volleyball",
              image: "/images/volleyball.png",
              desc: "Track and field programs focused on strength, endurance, and discipline.",
            },
          ].map((program, index) => (
            <SwiperSlide key={index}>
              <div className="program-slide">
                <img src={program.image} alt={program.title} />
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
        <h2>Join the Empower Champions Talent Academy Today</h2>
        <Link to="/contact" className="cta-button-link">
          <button className="cta-button">Contact Us</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
