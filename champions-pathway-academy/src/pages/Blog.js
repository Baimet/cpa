import React, { useEffect } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Empower Champions Talent Academy Launch – A New Era",
      date: "April 11, 2026",
      author: "ECTA",
      image: "/images/scout.jpeg",
      excerpt:
        "We are thrilled to announce the official launch of Empower Champions Talent Academy — a home for nurturing athletic and academic excellence. Learn about the launch day and what lies ahead.",
      link: "/blog/academy-launch",
    },
    {
      title: "Tree Planting Initiative – Making Makueni Green",
      date: "October 11, 2025",
      author: "ECTA",
      image: "/images/DSC_6429.jpg",
      excerpt:
        "Our recent tree planting event in Kitise marked a significant step towards our sustainability goals. The event united students, teachers and community leaders for a common purpose — making Makueni greener.",
      link: "/blog/tree-planting-initiative",
    },
    {
      title: "Field Assessment Visit – Kwambata Primary School",
      date: "August 14, 2025",
      author: "ECTA",
      image: "/images/measure2.jpeg",
      excerpt:
        "Our team visited Kwambata Primary School to inspect and measure the fields ahead of upcoming sports programs. Planning for field upgrades and standardization is underway!",
      link: "/blog/kwambata-field-inspection",
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
      <div className="blog-page">
        {/* Hero Section */}
        <section
          className="blog-hero"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/DSC_6459.jpg)`,
          }}
        >
          <div className="hero-overlay">
            <h1>Our Blog</h1>
            <p>
              Stay updated with inspiring stories, academy news and upcoming
              initiatives shaping the next generation of champions.
            </p>
          </div>
        </section>

        {/* Blog List */}
        <section className="blog-list">
          <h2 className="section-title">Latest Stories</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <img src={post.image} alt={post.title} />
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p className="blog-meta">
                    {post.date} • By {post.author}
                  </p>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={post.link} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;
