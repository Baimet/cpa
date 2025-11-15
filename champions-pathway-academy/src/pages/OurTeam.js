// src/pages/OurTeam.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurTeam.css";
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    name: "Beth Wamalwa",
    title: "Patron",
    image: "/images/patty.jpeg",
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
    image: "/images/mj.jpeg",
    bio: "Mercy Yatich oversees the overall direction of the academy with a strong focus on growth, impact, and excellence. Her leadership ensures that every program aligns with the academy’s goal of nurturing disciplined, well-rounded athletes both on and off the field.",
  },
  {
    name: "Walter Omwenga",
    title: "Dep. CEO/Chairman Strategic Planning",
    image: "/images/wally.jpeg",
    bio: "Walter Omwenga supports the executive leadership in implementing key programs and expanding partnerships. His hands-on approach and commitment to youth empowerment make him a vital force in driving the academy’s vision forward.",
  },

  {
    name: "Isaac Baimet",
    title: "Director General & Digital Operations",
    image: "/images/do.jpg",
    bio: "Isaac Baimet leads the academy’s operational planning and event execution. With a focus on logistics, coordination, and athlete support systems, he ensures that every program and training session runs with precision and purpose.",
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
    name: "Damaris Okok",
    title: "Director Human Resource",
    image: "/images/eddah.jpeg",
    bio: "Damaris is dedicated to nurturing talent and fostering a positive team culture at CPA. She ensures our people remain motivated and aligned with the academy’s vision of empowering youth through sports.",
  },

  {
    name: "Daniel Ndirangu",
    title: "Director Technical",
    image: "/images/didi.jpeg",
    bio: "With vast technical expertise, Dan Ndirangu shapes the academy’s training standards and athletic development plans. He works closely with coaches and players to ensure each athlete receives the guidance and mentorship needed to excel.",
  },

  {
    name: "Abraham Kipleting",
    title: "Administrative Secretary",
    image: "/images/abu.jpeg",
    bio: "Abraham plays a key role in ensuring the academy’s day-to-day operations run seamlessly. With strong organizational skills, he provides vital administrative support that keeps programs and communications well-coordinated",
  },

  {
    name: "Mike Mulure",
    title: "Media Incharge & Branding",
    image: "/images/mike.jpeg",
    bio: "Mike Mulure leads media and branding efforts at Empower Champions Talent Academy. He manages communications, digital presence and storytelling to showcase the academy’s impact and strengthen its visibility in the community.",
  },
];

function OurTeam() {
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
      <div className="team-container">
        <header className="team-header" data-aos="fade-down">
          <h1>Meet Our Team</h1>
          <p>The driving force behind Empower Champions Talent Academy</p>
        </header>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index} data-aos="fade-up">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h3>{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurTeam;
