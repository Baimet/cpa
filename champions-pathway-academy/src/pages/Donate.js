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

      <section className="donate-impact">
        <div className="impact-card">
          <h3>100+</h3>
          <p>Young people engaged</p>
        </div>
        <div className="impact-card">
          <h3>10+</h3>
          <p>Talent pathways offered</p>
        </div>
        <div className="impact-card">
          <h3>4</h3>
          <p>Donation options available</p>
        </div>
        <div className="impact-card">
          <h3>1</h3>
          <p>Shared mission to uplift communities</p>
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

      <section className="donation-impact-section">
        <div className="donation-impact-header">
          <h2>Your Donation Makes This Possible</h2>
          <p>
            Every contribution directly supports programmes that nurture talent,
            build confidence, and create opportunity for children and young
            people.
          </p>
        </div>

        <div className="donation-impact-grid">
          <div className="donation-impact-card">
            <h3>Adopt a Child</h3>
            <p>
              Helps provide structured training, mentorship, and support for one
              child’s development journey each term.
            </p>
          </div>

          <div className="donation-impact-card">
            <h3>Training Programmes</h3>
            <p>
              Sustains coaching sessions, training spaces, logistics, and
              programme delivery for young athletes.
            </p>
          </div>

          <div className="donation-impact-card">
            <h3>Sporting Equipment</h3>
            <p>
              Supports the purchase of essential equipment so children can train
              safely and competitively.
            </p>
          </div>

          <div className="donation-impact-card">
            <h3>Creative Arts Development</h3>
            <p>
              Opens pathways for expression, creativity, and confidence through
              arts-based growth opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="donation-transparency-section">
        <div className="donation-transparency-content">
          <h2>Transparency Matters</h2>
          <p>
            We are committed to using donations responsibly and purposefully to
            support youth development through sports, mentorship, equipment,
            training, and creative arts.
          </p>

          <div className="transparency-points">
            <div className="transparency-point">
              <h3>Clear Purpose</h3>
              <p>
                Each donation tier is tied to a specific area of impact, making
                it easier for supporters to give with confidence.
              </p>
            </div>

            <div className="transparency-point">
              <h3>Community Impact</h3>
              <p>
                Donations support programmes that benefit children, families,
                schools, and the wider community.
              </p>
            </div>

            <div className="transparency-point">
              <h3>Long-Term Growth</h3>
              <p>
                Our focus is not only on short-term support, but on building
                lasting pathways for talent, discipline, and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-faq-section">
        <div className="donation-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Here are a few quick answers to help you give with confidence.</p>
        </div>

        <div className="donation-faq-list">
          <div className="donation-faq-item">
            <h3>Can I donate from outside Kenya?</h3>
            <p>
              Yes. Our payment options support secure online donations,
              including international card payments.
            </p>
          </div>

          <div className="donation-faq-item">
            <h3>Can I donate more than one tier?</h3>
            <p>
              Yes. You may support more than one cause depending on the impact
              you would like to make.
            </p>
          </div>

          <div className="donation-faq-item">
            <h3>Are payments secure?</h3>
            <p>
              Yes. Donations are processed through secure payment infrastructure
              to protect your information and payment details.
            </p>
          </div>

          <div className="donation-faq-item">
            <h3>Can I donate any amount?</h3>
            <p>
              Yes. In addition to the listed tiers, you can choose the flexible
              donation option and give any amount you wish.
            </p>
          </div>
        </div>
      </section>

      <section className="donation-final-cta">
        <div className="donation-final-cta-box">
          <h2>Every Gift Creates Opportunity</h2>
          <p>
            Your support helps us nurture talent, expand opportunity, and build
            a stronger future for children and young people in our community.
          </p>
          <a
            href={customDonation.donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="donate-btn-link"
          >
            <button className="donate-btn">Donate Today</button>
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
