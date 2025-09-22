import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);

    // Post to Netlify
    fetch("/", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

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
            <strong>Email:</strong> info.empowertalentacademy@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +254 785 839 001
          </p>
          <p>
            <strong>Location:</strong> Nairobi, Kenya
          </p>
        </div>

        {submitted ? (
          <div className="success-message">
            <h2>🎉 Thank you!</h2>
            <p>Your message has been received. We'll get back to you soon.</p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />

            <p hidden>
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label>Your Name:</label>
              <input type="text" name="name" required />
            </div>

            <div>
              <label>Your Email:</label>
              <input type="email" name="email" required />
            </div>

            <div>
              <label>Your Message:</label>
              <textarea name="message" required></textarea>
            </div>

            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
