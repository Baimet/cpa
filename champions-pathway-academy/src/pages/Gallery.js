import React, { useEffect } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      src: "/images/DSC_6246.jpg",
      title: "Tree Planting at Kitise",
      desc: "Youth and community working together to make Makueni greener.",
    },
    {
      src: "/images/DSC_6298.jpg",
      title: "Mentorship in Action",
      desc: "Coaches guiding students on discipline and teamwork.",
    },
    {
      src: "/images/DSC_6321.jpg",
      title: "Our Volunteers",
      desc: "Empowering local volunteers to lead change.",
    },
    {
      src: "/images/DSC_6324.jpg",
      title: "Nurturing Growth",
      desc: "Students planting seedlings under the academy’s sustainability drive.",
    },
    {
      src: "/images/DSC_6390.jpg",
      title: "Community Outreach",
      desc: "Bringing unity through environmental awareness.",
    },
    {
      src: "/images/DSC_6429.jpg",
      title: "Teamwork",
      desc: "Working hand in hand for a better tomorrow.",
    },
    {
      src: "/images/DSC_6459.jpg",
      title: "Celebrating Efforts",
      desc: "Joy and excitement after a successful day.",
    },
    {
      src: "/images/DSC_6491.jpg",
      title: "Hope in Action",
      desc: "Inspiring change through meaningful activities.",
    },
    {
      src: "/images/DSC_6548.jpg",
      title: "A Greener Vision",
      desc: "Our journey towards sustainability continues.",
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
