import React, { useEffect } from "react";
import "./Blog.css";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Tree Planting Initiative – Making Makueni Green",
      date: "October 15, 2025",
      author: "Empower Champions Team",
      image: "/images/DSC_6429.jpg",
      excerpt:
        "Our recent tree planting event in Kitise marked a significant step towards our sustainability goals. The event united students, teachers, and community leaders for a common purpose — making Makueni greener.",
      link: "/blog/tree-planting-initiative",
    },
    {
      title: "Empower Champions Talent Academy Launch – A New Era",
      date: "December 13, 2025",
      author: "Admin",
      image: "/images/scout.jpeg",
      excerpt:
        "We are thrilled to announce the official launch of Empower Champions Talent Academy — a home for nurturing athletic and academic excellence. Learn about the launch day and what lies ahead.",
      link: "/blog/academy-launch",
    },
    {
      title: "Sports and Sustainability – The Perfect Partnership",
      date: "November 28, 2025",
      author: "Editorial Team",
      image: "/images/DSC_6321.jpg",
      excerpt:
        "How Empower Champions Talent Academy is combining sports development with environmental stewardship to build holistic champions.",
      link: "/blog/sports-sustainability",
    },
  ];

  return (
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
            Stay updated with inspiring stories, academy news, and upcoming
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
                <a href={post.link} className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
