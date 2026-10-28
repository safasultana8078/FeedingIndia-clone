export const AboutUsPage = {
  render() {
    return `
    <div class="about-us-page animate-fade">

      <section class="subpage-hero">
        <div class="contain">
          <span class="section-label">Our Mission</span>
          <h1 class="subpage-title">About Feeding India</h1>
          <p class="subpage-subtitle">
            Laying the foundation of a thriving, hunger-free India by serving daily nutrition to the next generation.
          </p>
        </div>
      </section>

      <section class="story-section section-padding">
        <div class="contain details-grid">
          <div class="details-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2014, Feeding India started as a youth-led movement aimed at bridging the gap between food waste in corporate offices/weddings and classroom hunger.
            </p>
            <p>
              In 2019, Feeding India joined hands with <strong>Zomato</strong>, establishing itself as a dedicated non-profit giveback initiative. This partnership transformed our operations, allowing us to leverage Zomato's logistics, digital products, and auditing excellence.
            </p>
            <p>
              Today, we have evolved from a redistribution network into a systemic nutrition enabler, strengthening public daycare (Anganwadis) and formal school infrastructure to ensure consistent daily meals for over 1.4 Lakh children.
            </p>
          </div>
          <div class="details-image story-image-box">
            <div class="quote-text-bubble">
              <p>"Our vision is simple but bold: No child in India should study, play, or grow on an empty stomach."</p>
            </div>
          </div>
        </div>
      </section>

      <section class="beliefs-section section-padding bg-light">
        <div class="contain">
          <div class="section-header text-center">
            <span class="section-label">Our Philosophy</span>
            <h2>How We Drive Systemic Change</h2>
            <p class="section-subtitle">
              We operate under core principles designed to maximize efficiency, trust, and community impact.
            </p>
          </div>

          <div class="tech-features-grid">
            <div class="tech-card">
              <h3>Systemic Strengthening</h3>
              <p>
                We do not replace public infrastructure. Instead, we integrate with government schools and Anganwadi daycares, providing resources to make existing public welfare networks robust and successful.
              </p>
            </div>

            <div class="tech-card">
              <h3>Nutrition First</h3>
              <p>
                A meal is not just about calories; it is about nourishment. Our meal menus are scientifically formulated to combat vitamin and mineral deficiencies, promoting physical growth and sharp focus.
              </p>
            </div>

            <div class="tech-card">
              <h3>100% Giveback Model</h3>
              <p>
                Admin and overhead costs of Feeding India Foundation are supported by corporate patrons (including Zomato), meaning 100% of public donations go directly towards purchasing and distributing child nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="transparency-section section-padding">
        <div class="contain">
          <div class="details-grid">
            <div class="details-text">
              <span class="section-label">Financial Accountability</span>
              <h2>Absolute Transparency</h2>
              <p>
                In the non-profit sector, trust is built through open reporting. We hold ourselves to the highest standards of financial integrity. Our accounts are audited by top-tier independent agencies, and we publish detailed annual and project-level impact logs.
              </p>
              <p>
                Feel free to review our financial audits, tax exemption filings, and impact disclosures.
              </p>

              <div class="audit-downloads">
                <a href="#audit-report-24" class="audit-link">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Annual Report & Audit FY 2023-24 (PDF)
                </a>
                <a href="#audit-report-23" class="audit-link">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Annual Report & Audit FY 2022-23 (PDF)
                </a>
                <a href="#audit-report-22" class="audit-link">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  FCRA Filings & Disclosures (PDF)
                </a>
              </div>
            </div>

            <div class="details-image transparency-visual-box">
              <div class="transparency-card">
                <div class="circular-progress">
                  <div class="progress-value">100%</div>
                </div>
                <h4>Donation Utility</h4>
                <p>100% of your contributions buy child meals. Admin costs are fully covered by corporate partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom-cta-section section-padding text-center">
        <div class="contain">
          <span class="caveat-writing">Join the movement</span>
          <h2 class="cta-title">Help us build a nourished India</h2>
          <p class="cta-description">
            Your trust is our greatest asset. Partner with us, donate meals, or join as a volunteer to help end child hunger.
          </p>
          <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
            <a href="#/donate" class="btn btn-primary btn-lg">Donate now</a>
            <a href="#/partner-with-us" class="btn btn-secondary btn-lg">Partner with us</a>
          </div>
        </div>
      </section>

    </div>
    `;
  },
  mount() {},
  unmount() {},
};
