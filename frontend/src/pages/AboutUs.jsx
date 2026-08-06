import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="about-us-page animate-fade">
      
      {/* Page Hero */}
      <section className="subpage-hero">
        <div className="contain">
          <span className="section-label">Our Mission</span>
          <h1 className="subpage-title">About Feeding India</h1>
          <p className="subpage-subtitle">
            Laying the foundation of a thriving, hunger-free India by serving daily nutrition to the next generation.
          </p>
        </div>
      </section>

      {/* 1. Our Story Section */}
      <section className="story-section section-padding">
        <div className="contain details-grid">
          <div className="details-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2014, Feeding India started as a youth-led movement aimed at bridging the gap between food waste in corporate offices/weddings and classroom hunger. 
            </p>
            <p>
              In 2019, Feeding India joined hands with <strong>Zomato</strong>, establishing itself as a dedicated non-profit giveback initiative. This partnership transformed our operations, allowing us to leverage Zomato’s logistics, digital products, and auditing excellence.
            </p>
            <p>
              Today, we have evolved from a redistribution network into a systemic nutrition enabler, strengthening public daycare (Anganwadis) and formal school infrastructure to ensure consistent daily meals for over 1.4 Lakh children.
            </p>
          </div>
          <div className="details-image story-image-box">
            <div className="quote-text-bubble">
              <p>"Our vision is simple but bold: No child in India should study, play, or grow on an empty stomach."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Beliefs Section */}
      <section className="beliefs-section section-padding bg-light">
        <div className="contain">
          <div className="section-header text-center">
            <span className="section-label">Our Philosophy</span>
            <h2>How We Drive Systemic Change</h2>
            <p className="section-subtitle">
              We operate under core principles designed to maximize efficiency, trust, and community impact.
            </p>
          </div>

          <div className="tech-features-grid">
            <div className="tech-card">
              <h3>Systemic Strengthening</h3>
              <p>
                We do not replace public infrastructure. Instead, we integrate with government schools and Anganwadi daycares, providing resources to make existing public welfare networks robust and successful.
              </p>
            </div>

            <div className="tech-card">
              <h3>Nutrition First</h3>
              <p>
                A meal is not just about calories; it is about nourishment. Our meal menus are scientifically formulated to combat vitamin and mineral deficiencies, promoting physical growth and sharp focus.
              </p>
            </div>

            <div className="tech-card">
              <h3>100% Giveback Model</h3>
              <p>
                Admin and overhead costs of Feeding India Foundation are supported by corporate patrons (including Zomato), meaning 100% of public donations go directly towards purchasing and distributing child nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Audits and Financial Transparency */}
      <section className="transparency-section section-padding">
        <div className="contain">
          <div className="details-grid">
            <div className="details-text">
              <span className="section-label">Financial Accountability</span>
              <h2>Absolute Transparency</h2>
              <p>
                In the non-profit sector, trust is built through open reporting. We hold ourselves to the highest standards of financial integrity. Our accounts are audited by top-tier independent agencies, and we publish detailed annual and project-level impact logs.
              </p>
              <p>
                Feel free to review our financial audits, tax exemption filings, and impact disclosures.
              </p>
              
              <div className="audit-downloads">
                <a href="#audit-report-24" className="audit-link">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Annual Report & Audit FY 2023-24 (PDF)
                </a>
                <a href="#audit-report-23" className="audit-link">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Annual Report & Audit FY 2022-23 (PDF)
                </a>
                <a href="#audit-report-22" className="audit-link">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  FCRA Filings & Disclosures (PDF)
                </a>
              </div>
            </div>
            
            <div className="details-image transparency-visual-box">
              <div className="transparency-card">
                <div className="circular-progress">
                  <div className="progress-value">100%</div>
                </div>
                <h4>Donation Utility</h4>
                <p>100% of your contributions buy child meals. Admin costs are fully covered by corporate partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bottom-cta-section section-padding text-center">
        <div className="contain">
          <span className="caveat-writing">Join the movement</span>
          <h2 className="cta-title">Help us build a nourished India</h2>
          <p className="cta-description">
            Your trust is our greatest asset. Partner with us, donate meals, or join as a volunteer to help end child hunger.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/donate" className="btn btn-primary btn-lg">
              Donate now
            </Link>
            <Link to="/partner-with-us" className="btn btn-secondary btn-lg">
              Partner with us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
