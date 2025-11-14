import React from "react";
import "./SocialSidebar.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a
        href="https://www.facebook.com/profile.php?id=61579454606277"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://x.com/cpacademy24"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.instagram.com/empowerchampionstalentacademy?igsh=MXdxam4xOXV6b3ozbw%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialSidebar;
