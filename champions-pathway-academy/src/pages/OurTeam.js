// src/pages/OurTeam.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurTeam.css";

const teamMembers = [
  {
    name: "Beth Wamalwa",
    title: "Patron",
    image: "/images/patron.jpeg",
    bio: "Beth Wamalwa serves as the esteemed Patron of Empower Champions Talent Academy, offering invaluable guidance and inspiration to the academy’s vision and mission. Her leadership and dedication embody the academy’s commitment to excellence.",
  },
  {
    name: "Edith Mary",
    title: "Co-Patron",
    image: "/images/ed.jpeg",
    bio: "As Co-Patron, Edith Mary provides visionary leadership and unwavering support to the academy’s mission. With a passion for youth development, she plays a key role in shaping strategic initiatives that empower the next generation of champions.",
  },
  {
    name: "Mercy Yatich",
    title: "CEO",
    image: "/images/team2.jpeg",
    bio: "Mercy Yatich oversees the overall direction of the academy with a strong focus on growth, impact, and excellence. Her leadership ensures that every program aligns with the academy’s goal of nurturing disciplined, well-rounded athletes both on and off the field.",
  },
  {
    name: "Walter Omwenga",
    title: "Dep. CEO/Chairman Strategic Planning",
    image: "/images/wally.jpeg",
    bio: "Walter Omwenga supports the executive leadership in implementing key programs and expanding partnerships. His hands-on approach and commitment to youth empowerment make him a vital force in driving the academy’s vision forward.",
  },

  {
    name: "Irene Nyatichi",
    title: "Director Administration",
    image: "/images/team1.jpeg",
    bio: "Irene Nyatichi ensures that all administrative operations run efficiently and professionally. Her attention to detail and strong organizational skills contribute to the smooth delivery of the academy’s day-to-day activities and long-term goals.",
  },
  {
    name: "Ezna Sarah",
    title: "Director Finance",
    image: "/images/favour.jpeg",
    bio: "As the Director of Finance, Ezna Sarah brings expertise, precision, and transparency to the academy’s financial operations. Ezna helps lay a strong financial foundation for the academy’s long-term sustainability.",
  },

  {
    name: "Isaac Baimet",
    title: "Director General & Digital Operations",
    image: "/images/do.jpg",
    bio: "Isaac Baimet leads the academy’s operational planning and event execution. With a focus on logistics, coordination, and athlete support systems, he ensures that every program and training session runs with precision and purpose.",
  },
  {
    name: "Daniel Ndirangu",
    title: "Director Technical",
    image: "/images/didi.jpeg",
    bio: "With vast technical expertise, Dan Ndirangu shapes the academy’s training standards and athletic development plans. He works closely with coaches and players to ensure each athlete receives the guidance and mentorship needed to excel.",
  },
];

function OurTeam() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="team-container">
      <header className="team-header" data-aos="fade-down">
        <h1>Meet Our Team</h1>
        <p>The driving force behind Champions Pathway Sports Academy</p>
      </header>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos="fade-up">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
