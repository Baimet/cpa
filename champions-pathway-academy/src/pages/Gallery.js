import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      src: "/images/DSC_6499.jpg",
      title: "Study Equipment Distribution",
      desc: "Dance session",
      category: "Education",
    },
    {
      src: "/images/DSC_6390 (2).jpg",
      title: "Study Equipment Distribution",
      desc: "Prayer session",
      category: "Education",
    },
    {
      src: "/images/DSC_6540.jpg",
      title: "Study Equipment Distribution",
      desc: "Books in hand, dreams in motion",
      category: "Education",
    },
    {
      src: "/images/DSC_6403 (2).jpg",
      title: "Study Equipment Distribution",
      desc: "Champions in attendance",
      category: "Education",
    },
    {
      src: "/images/DSC_6420.jpg",
      title: "Study Equipment Distribution",
      desc: "Director HR giving a speech",
      category: "Education",
    },
    {
      src: "/images/DSC_6652.jpg",
      title: "Study Equipment Distribution",
      desc: "Equipment distribution",
      category: "Education",
    },
    {
      src: "/images/DSC_6670.jpg",
      title: "Study Equipment Distribution",
      desc: "Books in hand, dreams in motion",
      category: "Education",
    },
    {
      src: "/images/DSC_6751.jpg",
      title: "Study Equipment Distribution",
      desc: "Equipment distribution",
      category: "Education",
    },
    {
      src: "/images/_MG_6558.jpg",
      title: "Study Equipment Distribution",
      desc: "Group photo",
      category: "Education",
    },
    {
      src: "/images/DSC_6457.jpg",
      title: "Study Equipment Distribution",
      desc: "Dep. CEO giving a speech",
      category: "Education",
    },
    {
      src: "/images/DSC_6506.jpg",
      title: "Study Equipment Distribution",
      desc: "Patron addressing the audience",
      category: "Education",
    },
    {
      src: "/images/DSC_6428.jpg",
      title: "Study Equipment Distribution",
      desc: "CEO giving a speech",
      category: "Education",
    },
    {
      src: "/images/DSC_6431.jpg",
      title: "Study Equipment Distribution",
      desc: "Administration dept. at work",
      category: "Education",
    },
    {
      src: "/images/DSC_6737.jpg",
      title: "Study Equipment Distribution",
      desc: "Books in hand, dreams in motion",
      category: "Education",
    },
    {
      src: "/images/DSC_6585.jpg",
      title: "Study Equipment Distribution",
      desc: "Books in hand, dreams in motion",
      category: "Education",
    },
    {
      src: "/images/DSC_6526.jpg",
      title: "Study Equipment Distribution",
      desc: "Champions in attendance",
      category: "Education",
    },

    {
      src: "/images/DSC_5576.jpg",
      title: "Tree Planting Event",
      desc: "ECTA Patron addressing the gathering",
      category: "Tree Planting",
    },
    {
      src: "/images/DSC_5544.jpg",
      title: "Tree Planting Event",
      desc: "ECTA Co-Patron addressing the gathering",
      category: "Tree Planting",
    },
    {
      src: "/images/DSC_5903.jpg",
      title: "Tree Planting Event",
      desc: "ECTA CEO following proceedings",
      category: "Tree Planting",
    },
    {
      src: "/images/DSC_6548.jpg",
      title: "A Greener Vision",
      desc: "Dep. CEO steering the journey towards sustainability.",
      category: "Tree Planting",
    },
    {
      src: "/images/DSC_5855.jpg",
      title: "Community Outreach",
      desc: "Bringing unity through environmental awareness.",
      category: "Tree Planting",
    },
    {
      src: "/images/DSC_6429.jpg",
      title: "Teamwork",
      desc: "Working hand in hand for a better tomorrow.",
      category: "Tree Planting",
    },
    {
      src: "/images/DSC_6794.jpg",
      title: "Celebrating Efforts",
      desc: "Joy and excitement after a successful day.",
      category: "Tree Planting",
    },
    {
      src: "/images/DSC_6491.jpg",
      title: "Hope in Action",
      desc: "Inspiring change through the tree planting initiative.",
      category: "Tree Planting",
    },

    {
      src: "/images/DSC_6324.jpg",
      title: "Nurturing Growth",
      desc: "Students lining up for a showcase football match",
      category: "Sports",
    },
    {
      src: "/images/DSC_6246.jpg",
      title: "Mentorship in Action",
      desc: "Coaches guiding students in a game of chess",
      category: "Sports",
    },
    {
      src: "/images/DSC_6634.jpg",
      title: "Talent Showcase",
      desc: "An ongoing Acrobatic Session",
      category: "Sports",
    },
    {
      src: "/images/DSC_6638.jpg",
      title: "Acrobatic Session",
      desc: "Two young talents exhibiting their acrobatic skills",
      category: "Sports",
    },
    {
      src: "/images/DSC_6403.jpg",
      title: "Volleyball",
      desc: "An ongoing volleyball match",
      category: "Sports",
    },
    {
      src: "/images/DSC_6306.jpg",
      title: "Football",
      desc: "An ongoing football match",
      category: "Sports",
    },

    {
      src: "/images/kwambata.jpeg",
      title: "Resource Distribution",
      desc: "Distributing sports equipment to Kwambata School",
      category: "Community",
    },
    {
      src: "/images/measure1.jpeg",
      title: "Field Assessment",
      desc: "Inspection and measurements of the fields",
      category: "Community",
    },
    {
      src: "/images/measure4.jpeg",
      title: "Our Volunteers",
      desc: "Empowering local volunteers to lead change.",
      category: "Community",
    },
    {
      src: "/images/k9.jpeg",
      title: "Progress Update Trip",
      desc: "Planned engagements on project progress updates",
      category: "Community",
    },
    {
      src: "/images/k3.jpeg",
      title: "Grounds Inspection",
      desc: "Assessing developments on the fields",
      category: "Community",
    },
    {
      src: "/images/k14.jpeg",
      title: "Physio and Nutrition",
      desc: "At KMTC Mbuvo for physio and nutrition awareness for the community",
      category: "Community",
    },
    {
      src: "/images/mutua.jpeg",
      title: "County Government Engagement",
      desc: "Signing MOU with County Government",
      category: "Community",
    },
    {
      src: "/images/assess.jpeg",
      title: "Sharing our Vision",
      desc: "Early engagement with the school around our proposed vision",
      category: "Community",
    },
  ];

  const categories = [
    "All",
    "Education",
    "Tree Planting",
    "Sports",
    "Community",
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | Empower Champions Talent Academy</title>
      </Helmet>

      <section
        className="gallery-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/k8.jpeg)`,
        }}
      >
        <div className="gallery-hero-overlay">
          <h1>Our Journey in Pictures</h1>
          <p>
            A visual story of our efforts to empower, inspire, and transform
            lives through sports, mentorship and environmental stewardship.
          </p>
        </div>
      </section>

      <div className="gallery-wrapper">
        <section className="gallery-section">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
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

      <section className="bulletin-section">
        <h2>Academy Bulletin</h2>
        <p className="bulletin-subtitle">
          Watch our latest updates, news highlights, and community stories.
        </p>

        <div className="bulletin-grid">
          <div className="bulletin-card">
            <video
              className="bulletin-video"
              controls
              poster="/images/DSC_5521.jpg"
            >
              <source src="/videos/bulletin1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p className="bulletin-caption">Tree Planting Day Highlights</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
