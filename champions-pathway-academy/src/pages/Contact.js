import React, { useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState("contact");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  // ✅ New helper function for page refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <title>Empower Champions Talent Academy | Home</title>
        <meta
          name="description"
          content="Empower Champions Talent Academy is dedicated to nurturing young athletes in Makueni County through sports, education, and personal growth."
        />
        <meta
          name="keywords"
          content="Empower Champions Talent Academy, sports academy Kenya, youth empowerment, talent development, Makueni, football training, athletics"
        />
        <meta name="author" content="Empower Champions Talent Academy" />
        <meta property="og:title" content="Empower Champions Talent Academy" />
        <meta
          property="og:description"
          content="Empowering the next generation of champions through sports and mentorship."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/ecta.jpeg`}
        />
        <meta
          property="og:url"
          content="https://www.empowertalentacademy.org"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Empower Champions Talent Academy",
          "url": "https://www.empowertalentacademy.org",
          "logo": "${process.env.PUBLIC_URL}/images/ecta.jpeg",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61579454606277",
            "https://x.com/cpacademy24",
            "https://www.instagram.com/empowerchampionstalentacademy"
          ],
          "description": "Empower Champions Talent Academy develops holistic young athletes through sports, mentorship, and environmental action in Kenya."
        }
      `}
        </script>
      </Helmet>
      <div className="contact-container">
        <h1>Contact & Registration</h1>
        <p className="contact-intro">
          Whether you’d like to reach out, partner with us, or join our academy
          programs — we’d love to hear from you!
        </p>

        <div className="form-selector">
          <button
            className={formType === "contact" ? "active" : ""}
            onClick={() => setFormType("contact")}
          >
            Contact Us
          </button>
          <button
            className={formType === "partner" ? "active" : ""}
            onClick={() => setFormType("partner")}
          >
            Partner Registration
          </button>
          <button
            className={formType === "affiliate" ? "active" : ""}
            onClick={() => setFormType("affiliate")}
          >
            Affiliate Registration
          </button>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              <strong>Email:</strong> info@empowertalentacademy.org
            </p>
            <p>
              <strong>Phone:</strong> +254 798 634 630 / +254 721 921 261
            </p>
            <p>
              <strong>Location:</strong> Nairobi, Kenya
            </p>
          </div>

          <div className="form-wrapper">
            {submitted ? (
              <div className="success-message fade-in">
                <h2>🎉 Thank you!</h2>
                <p>
                  Your submission has been received. We’ll get back to you soon.
                </p>
                {/* ✅ New OK button to refresh page */}
                <button className="ok-button" onClick={handleRefresh}>
                  OK
                </button>
              </div>
            ) : (
              <>
                {/* Contact Form */}
                <form
                  style={{ display: formType === "contact" ? "block" : "none" }}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="contact-form fade-in"
                >
                  <input type="hidden" name="form-name" value="contact" />
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
                  <button type="submit">Submit</button>
                </form>

                {/* Partner Form */}
                <form
                  style={{ display: formType === "partner" ? "block" : "none" }}
                  name="partner"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="contact-form fade-in"
                >
                  <input type="hidden" name="form-name" value="partner" />
                  <div>
                    <label>Your Name:</label>
                    <input type="text" name="name" required />
                  </div>
                  <div>
                    <label>Your Email:</label>
                    <input type="email" name="email" required />
                  </div>
                  <div>
                    <label>Organization / Company Name:</label>
                    <input type="text" name="organization" required />
                  </div>
                  <div>
                    <label>How would you like to support us?</label>
                    <textarea
                      name="supportDetails"
                      placeholder="e.g., sponsorship, resources, mentorship..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit">Submit</button>
                </form>

                {/* Affiliate Form */}
                <form
                  style={{
                    display: formType === "affiliate" ? "block" : "none",
                  }}
                  name="affiliate"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="contact-form fade-in"
                >
                  <input type="hidden" name="form-name" value="affiliate" />
                  <div>
                    <label>Your Name:</label>
                    <input type="text" name="name" required />
                  </div>
                  <div>
                    <label>Your Email:</label>
                    <input type="email" name="email" required />
                  </div>
                  <div>
                    <label>Age Group / Category:</label>
                    <input
                      type="text"
                      name="ageGroup"
                      placeholder="e.g., Junior, Youth, Senior"
                      required
                    />
                  </div>
                  <div>
                    <label>Area of Interest:</label>
                    <textarea
                      name="interest"
                      placeholder="e.g., Football training, coaching, development programs..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
