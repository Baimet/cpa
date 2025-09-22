import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img
          src="/images/ecta.jpeg"
          alt="Champions Pathway Logo"
          className="logo-img"
        />
        <span>Empower Champions Talent Academy</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
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
            to="/scouting"
            className={location.pathname === "/scouting" ? "active" : ""}
          >
            Scouting
          </Link>
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
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
