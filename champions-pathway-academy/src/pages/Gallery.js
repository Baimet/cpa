import React, { useEffect } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      src: "/images/assess.jpeg",
      title: "Sharing our Vision",
      desc: "Early engagement with the school around our proposed vision ",
    },
    {
      src: "/images/kwambata.jpeg",
      title: "Resource Distribution",
      desc: "Distributing sports equipment to Kwambata School ",
    },
    {
      src: "/images/mutua.jpeg",
      title: "County Government Engagement",
      desc: "Signing MOU with County Government ",
    },
    {
      src: "/images/measure1.jpeg",
      title: "Field Assessment",
      desc: "Inspection and Measurements of the fields ",
    },
    {
      src: "/images/measure4.jpeg",
      title: "Our Volunteers",
      desc: "Empowering local volunteers to lead change.",
    },
    {
      src: "/images/k9.jpeg",
      title: "Progress Update Trip",
      desc: "Planned engagements on project progress updates",
    },

    {
      src: "/images/k14.jpeg",
      title: "Physio and Nutrition",
      desc: "At KMTC Mbuvo for physio and nutrition awareness for the community",
    },
    {
      src: "/images/k3.jpeg",
      title: "Grounds Inspection",
      desc: "Assessing developments on the fields",
    },
    {
      src: "/images/DSC_5576.jpg",
      title: "Tree Planting Event",
      desc: "ECTA Patron addressing the gathering",
    },
    {
      src: "/images/DSC_5544.jpg",
      title: "Tree Planting Event",
      desc: "ECTA Co-Patron addressing the gathering",
    },
    {
      src: "/images/DSC_5903.jpg",
      title: "Tree Planting Event",
      desc: "ECTA CEO following proceedings",
    },
    {
      src: "/images/DSC_6548.jpg",
      title: "A Greener Vision",
      desc: "Dep. CEO steering the journey towards sustainability.",
    },
    {
      src: "/images/DSC_6246.jpg",
      title: "Mentorship in Action",
      desc: "Coaches guiding students in a game of chess",
    },

    {
      src: "/images/DSC_6324.jpg",
      title: "Nurturing Growth",
      desc: "Students lining up for a showcase football match",
    },
    {
      src: "/images/DSC_5855.jpg",
      title: "Community Outreach",
      desc: "Bringing unity through environmental awareness.",
    },
    {
      src: "/images/DSC_6429.jpg",
      title: "Teamwork",
      desc: "Working hand in hand for a better tomorrow.",
    },
    {
      src: "/images/DSC_6794.jpg",
      title: "Celebrating Efforts",
      desc: "Joy and excitement after a successful day.",
    },
    {
      src: "/images/DSC_6491.jpg",
      title: "Hope in Action",
      desc: "Inspiring change through the tree planting initiative.",
    },
    {
      src: "/images/DSC_6634.jpg",
      title: "Talent Showcase",
      desc: "Young talents exhibiting their acrobatic skills",
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
      <section
        className="gallery-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/DSC_6429.jpg)`,
        }}
      >
        <div className="gallery-hero-overlay">
          <h1>Our Journey in Pictures</h1>
          <p>
            A visual story of our efforts to empower, inspire, and transform
            lives through sports, mentorship, and environmental stewardship.
          </p>
        </div>
      </section>
      <div className="gallery-wrapper">
        {/* Gallery Grid */}
        <section className="gallery-section">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-card">
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
