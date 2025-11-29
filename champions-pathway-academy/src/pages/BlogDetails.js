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
        `April 11th, 2026 will mark a major milestone for the youth of Kitise and the entire Makueni County as Empower Champions Talent Academy officially launches its operations. The academy will welcome young athletes eager to elevate their skills while growing in character and leadership.`,

        `The launch event is expected to bring together students, parents, coaches, educational partners, and community leaders — all united by one powerful mission: empowering talent and shaping future champions.`,

        `This official launch represents the beginning of a long-term investment in holistic development — combining sports, mentorship, education, and life skills to transform young people's futures.`,

        `From football and athletics to chess, scrabble, swimming and more — the academy will serve as a hub of opportunity, bringing access to professional coaching and structured talent pathways previously unavailable to many youths.`,
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
