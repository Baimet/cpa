import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 📝 Blog Database
  const blogs = {
    "academy-launch": {
      title: "Empower Champions Talent Academy Launch – A New Era",
      date: "April 11, 2025",
      author: "Admin",
      hero: "/images/scout.jpeg",
      content: [
        `December 13, 2025 marked a new milestone for the youth in Kitise and the entire Makueni County. Empower Champions Talent Academy officially opened its doors, welcoming young athletes dedicated to growing in both sports and character.`,
        `The launch event featured mentorship talks, games, cultural performances, and special guests from education and sports development sectors.`,
        `This day symbolizes a long-term investment in young champions who will shape Kenya's future through sports, education, and community impact.`,
      ],
    },

    "tree-planting-initiative": {
      title: "Tree Planting Initiative – Making Makueni Green",
      date: "October 11, 2025",
      author: "Empower Champions Team",
      hero: "/images/DSC_6429.jpg",
      content: [
        `As part of our sustainability mission, students, teachers, parents, and local leaders united to plant trees that will nourish our environment for decades.`,
        `Over 200 seedlings were planted, contributing to a greener and more climate-resilient community.`,
        `Environmental conservation is a core component of building holistic champions — those who value and protect their communities.`,
      ],
    },

    "kwambata-field-inspection": {
      title: "Field Assessment Visit – Kwambata Primary School",
      date: "August 14, 2025",
      author: "Empower Champions Team",
      hero: "/images/measure1.jpeg",
      content: [
        `To ensure our upcoming sports programs run on professionally prepared facilities, our academy visited Kwambata Primary School for an official field assessment.`,

        `Our technical team carefully measured the playing grounds, taking into account size, surface quality, and environmental factors. A layout plan was created to guide the grading and leveling processes that will soon begin.`,

        `We also engaged the school administration to align on timelines, sustainability practices, and shared usage of the improved grounds. These facilities will not only support our programs, but also benefit students and the wider Kitise community.`,

        `The field upgrade initiative reflects our mission — providing young athletes with proper sporting infrastructure to nurture their talents while uplifting the community.`,
      ],
    },
  };

  const post = blogs[id];

  if (!post) {
    return (
      <div className="blog-details not-found">
        <h2>Blog Not Found</h2>
        <Link to="/blog" className="back-btn">
          ← Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-details-page">
      {/* Hero Banner */}
      <section
        className="blog-details-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${post.hero})`,
        }}
      >
        <div className="hero-overlay">
          <h1>{post.title}</h1>
          <p className="meta">
            {post.date} • By {post.author}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="blog-content">
        {post.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </section>

      <Link to="/blog" className="back-btn">
        ← Back to Blog
      </Link>
    </div>
  );
}

export default BlogDetails;
