export const DailyFeedingPage = {
  render() {
    return `
    <div class="daily-feeding-page animate-fade">

      <section class="subpage-hero">
        <div class="contain">
          <span class="section-label">Initiative 1</span>
          <h1 class="subpage-title">Daily Feeding Program</h1>
          <p class="subpage-subtitle">
            Ensuring classroom hunger never stands in the way of a child's education, health, and aspirations.
          </p>
        </div>
      </section>

      <section class="program-details-section section-padding">
        <div class="contain details-grid">
          <div class="details-text">
            <h2>Eradicating Classroom Hunger</h2>
            <p>
              Classroom hunger is one of the biggest reasons for high school dropout rates among underprivileged children in India. When parents have to struggle for daily food, education becomes a secondary concern.
            </p>
            <p>
              Our flagship <strong>Daily Feeding Program</strong> provides free, fresh, and nutritious meals every day at schools, sports academies, music academies, special-needs centers, and informal education shelters.
            </p>
            <p>
              By resolving the immediate concern of food security, we incentivize parents to send their children to school consistently, paving the way for improved cognitive performance, health, and social mobility.
            </p>
          </div>
          <div class="details-image">
            <img src="https://cdn.feedingindia.org/fi-web/assets/MTc3NzkyODY4NDI2MzY1MDU4Mw.webp" alt="Happy children receiving daily hot nutritious lunches in their school classroom" class="details-img" />
          </div>
        </div>
      </section>

      <section class="numbers-banner section-padding bg-light">
        <div class="contain text-center">
          <h2 class="section-title">Program Reach & Impact</h2>
          <div class="numbers-grid">
            <div class="number-item">
              <span class="number-value">1,000+</span>
              <span class="number-label">Schools & Centers Supported</span>
            </div>
            <div class="number-item">
              <span class="number-value">140,000+</span>
              <span class="number-label">Daily Nourished Students</span>
            </div>
            <div class="number-item">
              <span class="number-value">160+</span>
              <span class="number-label">Cities & Villages Covered</span>
            </div>
          </div>
        </div>
      </section>

      <section class="tech-section section-padding">
        <div class="contain">
          <div class="section-header text-center">
            <span class="section-label">Operational Excellence</span>
            <h2>Technology-Backed Transparency</h2>
            <p class="section-subtitle">
              We leverage digital solutions to track every single meal, ensuring zero leakage and absolute accountability.
            </p>
          </div>

          <div class="tech-features-grid">
            <div class="tech-card">
              <div class="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h3>Digital Attendance Tracking</h3>
              <p>
                Every partner center is equipped with digital tablets. Teachers log meal distribution records daily, capturing attendance metrics that are uploaded directly to our cloud database.
              </p>
            </div>

            <div class="tech-card">
              <div class="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
              <h3>FRAT Image Verification</h3>
              <p>
                Using our custom Facial Recognition Attendance Tracker (FRAT), partners upload verification photos during distribution. This ensures meals reach the correct beneficiaries in real-time.
              </p>
            </div>

            <div class="tech-card">
              <div class="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Regular Audits & Checks</h3>
              <p>
                We conduct frequent, unannounced physical audits at distribution kitchens and center classrooms. Meal samples are tested in third-party labs to ensure food safety and nutritional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="centers-section section-padding bg-light">
        <div class="contain">
          <div class="section-header text-center">
            <h2>Nourishing Beyond Conventional Classrooms</h2>
            <p class="section-subtitle">
              We understand that learning and growth happen in diverse environments.
            </p>
          </div>

          <div class="centers-grid">
            <div class="center-item">
              <h4>Formal & Informal Schools</h4>
              <p>Providing daily nutrition to children in primary, secondary, and bridge-education schools.</p>
            </div>
            <div class="center-item">
              <h4>Orphanages & Shelters</h4>
              <p>Ensuring 100% food security for children living in orphanages and protection shelters.</p>
            </div>
            <div class="center-item">
              <h4>Special Needs Centers</h4>
              <p>Tailored meal plans supporting growth, mobility, and recovery in specialized care institutions.</p>
            </div>
            <div class="center-item">
              <h4>Youth Sports & Arts Hubs</h4>
              <p>Fueling children enrolled in sports development complexes and community music/art programs.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom-cta-section section-padding text-center">
        <div class="contain">
          <span class="caveat-writing">Sponsor a school today</span>
          <h2 class="cta-title">Help us feed more classrooms</h2>
          <p class="cta-description">
            It costs less than you think to support a child's meals for an entire academic year. Join our mission and sponsor meals.
          </p>
          <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
            <a href="#/donate" class="btn btn-primary btn-lg">Donate to Program</a>
            <a href="#/partner-with-us" class="btn btn-secondary btn-lg">Partner as Corporate</a>
          </div>
        </div>
      </section>

    </div>
    `;
  },
  mount() {},
  unmount() {},
};
