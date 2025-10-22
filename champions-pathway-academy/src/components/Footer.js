import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/about">About Us</a>
          <a href="/scouting">Scouting</a>
          <a href="/team">Our Team</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>

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

        <p className="footer-copy">
          © {new Date().getFullYear()} Empower Champions Talent Academy. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
