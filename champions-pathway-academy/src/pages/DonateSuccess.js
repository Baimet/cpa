import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./DonateSuccess.css";

function DonateSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="donate-success-page">
      <div className="donate-success-box">
        <span className="success-badge">Thank You</span>
        <h1>Your support means a lot</h1>
        <p>
          Thank you for supporting Empower Champions Talent Academy. Your
          donation helps us create opportunity, nurture talent and build a
          stronger future for children and young people in our community.
        </p>

        <p className="success-note">
          A payment confirmation will be sent through your payment provider
          after a successful transaction.
        </p>

        <div className="success-actions">
          <Link to="/donate" className="success-btn secondary">
            Back to Donate
          </Link>
          <Link to="/" className="success-btn primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DonateSuccess;
