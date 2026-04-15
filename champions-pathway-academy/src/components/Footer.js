import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* --- Footer Nav Links --- */}
        <ul className="footer-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className={location.pathname === "/blog" ? "active" : ""}
            >
              Blog
            </Link>
          </li>

          {/* ✅ Events Dropdown-style in Footer */}
          <li className="footer-dropdown">
            <span
              className={`dropdown-title ${
                location.pathname === "/events" ||
                location.pathname === "/past-events"
                  ? "active"
                  : ""
              }`}
            >
              Events ▾
            </span>
            <ul className="footer-dropdown-menu">
              <li>
                <Link
                  to="/events"
                  className={location.pathname === "/events" ? "active" : ""}
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/past-events"
                  className={
                    location.pathname === "/past-events" ? "active" : ""
                  }
                >
                  Past Events
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/team"
              className={location.pathname === "/team" ? "active" : ""}
            >
              Our Team
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              className={location.pathname === "/gallery" ? "active" : ""}
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              to="/donate"
              className={location.pathname === "/donate" ? "active" : ""}
            >
              Donate
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* --- Social Media --- */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=61579454606277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/cpacademy24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/empowerchampionstalentacademy?igsh=MXdxam4xOXV6b3ozbw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* --- Copyright --- */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Empower Champions Talent Academy. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
