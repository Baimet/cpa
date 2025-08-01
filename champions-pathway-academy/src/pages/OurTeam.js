// src/pages/OurTeam.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurTeam.css";

const teamMembers = [
  {
    name: "Irene Nyatichi",
    title: "Director Administration",
    image: "/images/team1.jpeg",
    bio: "With over 15 years of experience, Coach Daniel has guided numerous youth to national-level success through disciplined training and mentorship.",
  },
  {
    name: "Edith Wamalwa",
    title: "Finance Director",
    image: "/images/FD.jpeg",
    bio: "Edith ensures financial sustainability and strategic planning, keeping the academy’s operations smooth and transparent.",
  },
  {
    name: "Walter Omwenga",
    title: "Programs Manager",
    image: "/images/Dep CEO.jpeg",
    bio: "Sarah leads all youth programs and workshops, ensuring every athlete has the resources to thrive on and off the field.",
  },
  {
    name: "Stephen Ndege",
    title: "Scouting Lead",
    image: "/images/team3.jpeg",
    bio: "Kevin heads our talent identification process, traveling across regions to find the next generation of athletes.",
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
