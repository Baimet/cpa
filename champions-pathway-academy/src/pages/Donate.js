import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./Donate.css";

function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const donationTiers = [
    {
      title: "Tier 1 — Adopt a Child",
      amountKes: "Ksh 14,000",
      amountUsd: "USD 120",
      frequency: "per child per term",
      description:
        "Support a child’s growth through access to structured training, mentorship, and a nurturing development environment.",
      donateLink: "https://paystack.shop/pay/dxc9mqzth5",
    },
    {
      title: "Tier 2 — Support Training Programmes",
      amountKes: "Ksh 500,000",
      amountUsd: "USD 4,000",
      frequency: "per month",
      description:
        "Help sustain our monthly sports training programmes by supporting coaching, logistics, facilities, and athlete development.",
      donateLink: "https://paystack.shop/pay/hwqr4lhkf8",
    },
    {
      title: "Tier 3 — Buy Sporting Equipment",
      amountKes: "Ksh 500,000",
      amountUsd: "USD 4,000",
      frequency: "per sport",
      description:
        "Equip young athletes with the tools they need by funding quality sporting equipment for a specific discipline.",
      donateLink: "https://paystack.shop/pay/iwxevsc31k",
    },
    {
      title: "Tier 4 — Support Creative Arts Development",
      amountKes: "Ksh 200,000",
      amountUsd: "USD 1,600",
      frequency: "per child",
      description:
        "Empower creativity and expression by supporting young people pursuing creative arts alongside personal growth and mentorship.",
      donateLink: "https://paystack.shop/pay/e-crghdca5",
    },
  ];

  const customDonation = {
    title: "Donate Any Amount",
    amountKes: "Any Amount",
    amountUsd: "Flexible",
    frequency: "one-time donation",
    description:
      "Support our mission with any amount you choose. Every contribution helps us empower children and young people through sports, mentorship, education, and creative arts.",
    donateLink: "https://paystack.shop/pay/8cmovmu2q-",
  };

  return (
    <>
      <Helmet>
        <title>Donate | Empower Champions Talent Academy</title>
        <meta
          name="description"
          content="Support Empower Champions Talent Academy through our donation tiers and help us nurture young talent in sports and creative arts."
        />
      </Helmet>

      <section
        className="donate-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/DSC_6756.jpg)`,
        }}
      >
        <div className="donate-hero-overlay">
          <h1>Support a Champion’s Journey</h1>
          <p>
            Your donation helps us empower children and young people through
            sports, mentorship, training programmes, equipment and creative arts
            development.
          </p>
          <p className="donate-trust">
            100% of donations go directly into empowering youth and community
            programmes.
          </p>
        </div>
      </section>

      <section className="donation-tiers-section">
        <div className="donation-tiers-header">
          <h2>Choose Where to Make Impact</h2>
          <p>
            Support a cause that speaks to you and help us empower children and
            young people through sports, education, mentorship, and creativity.
          </p>
        </div>

        <div className="donation-tiers-grid">
          {donationTiers.map((tier, index) => (
            <article className="donation-tier-card" key={index}>
              <div className="tier-top">
                <span className="tier-badge">Tier {index + 1}</span>
                <h3>{tier.title.replace(`Tier ${index + 1} — `, "")}</h3>
              </div>

              <div className="tier-pricing">
                <div className="price-chip kes">{tier.amountKes}</div>
                <div className="price-chip usd">{tier.amountUsd}</div>
              </div>

              <p className="tier-frequency">{tier.frequency}</p>

              <div className="tier-description-box">
                <p>{tier.description}</p>
              </div>

              <a
                href={tier.donateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="donate-btn-link"
              >
                <button className="donate-btn">Donate Now</button>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="custom-donation-section">
        <div className="custom-donation-card">
          <span className="custom-badge">Flexible Giving</span>
          <h2>{customDonation.title}</h2>
          <p className="custom-donation-text">{customDonation.description}</p>

          <div className="custom-pricing">
            <span className="custom-price-chip">
              {customDonation.amountKes}
            </span>
            <span className="custom-price-chip">
              {customDonation.amountUsd}
            </span>
          </div>

          <p className="custom-frequency">{customDonation.frequency}</p>

          <a
            href={customDonation.donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="donate-btn-link"
          >
            <button className="donate-btn">Donate Any Amount</button>
          </a>
        </div>
      </section>

      <section className="secure-payments-note">
        <p>
          Secure payments powered by <strong>Paystack</strong>. You can donate
          using card or other available secure payment options at checkout.
        </p>
      </section>

      <section className="donate-note">
        <h2>Giving with Purpose</h2>
        <p>
          We are committed to creating real impact through transparent,
          meaningful programmes that uplift children, families, and the wider
          community.
        </p>
      </section>
    </>
  );
}

export default Donate;
