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
        `Over 30 seedlings were planted, contributing to a greener and more climate-resilient community.`,
        `Environmental conservation is a core component of building holistic champions — those who value and protect their communities.`,
      ],
    },

    "kwambata-field-inspection": {
      title: "Field Assessment Visit – Kwambata Primary School",
      date: "August 14, 2025",
      author: "Empower Champions Team",
      hero: "/images/measure1.jpeg",
      content: [
        `April 11th, 2026 will mark a major milestone for the youth of the entire Makueni County as Empower Champions Talent Academy officially launches its operations. The academy will welcome young athletes eager to elevate their skills while growing in character and leadership.`,

        `The launch event is expected to bring together students, parents, coaches, educational partners and community leaders — all united by one powerful mission: empowering talent and shaping future champions.`,

        `This official launch represents the beginning of a long-term investment in holistic development — combining sports, mentorship, education, and life skills to transform young people's futures.`,

        `From football and athletics to basketball, volleyball, chess and more — the academy will serve as a hub of opportunity, bringing access to professional coaching and structured talent pathways previously unavailable to many youths.`,
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
