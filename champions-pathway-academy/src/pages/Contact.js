import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        We'd love to hear from you. Reach out for any inquiries or partnerships!
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            <strong>Email:</strong> info@championspathway.ac.ke
          </p>
          <p>
            <strong>Phone:</strong> +254 712 345678
          </p>
          <p>
            <strong>Location:</strong> Nairobi, Kenya
          </p>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
