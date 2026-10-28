export const AnganwadiPage = {
  render() {
    return `
    <div class="anganwadi-page animate-fade">

      <section class="subpage-hero">
        <div class="contain">
          <span class="section-label">Initiative 2</span>
          <h1 class="subpage-title">The Anganwadi Program</h1>
          <p class="subpage-subtitle">
            Combating malnutrition where it starts. Transforming government daycares into safe, nourishing, and vibrant spaces for early growth.
          </p>
        </div>
      </section>

      <section class="program-details-section section-padding">
        <div class="contain details-grid">
          <div class="details-text">
            <h2>Nourishing Early Childhood</h2>
            <p>
              The first 1,000 days of a child's life are critical for brain development, immunity, and lifelong physical health. Unfortunately, early childhood malnutrition is a silent crisis affecting millions of infants under six years of age.
            </p>
            <p>
              Rather than setting up parallel systems, Feeding India strengthens the existing government-backed <strong>Anganwadi network</strong> (government daycares). We partner with state authorities to fill resource gaps, upgrade facilities, and expand food diversity.
            </p>
            <p>
              Our program ensures toddlers, pregnant women, and lactating mothers receive nutritious breakfasts and lunches, safeguarding physical and cognitive development when it matters most.
            </p>
          </div>
          <div class="details-image">
            <img src="https://cdn.feedingindia.org/fi-web/assets/MTc3OTM1MzM4MzgxMTIxMjYzMg.webp" alt="Anganwadi classroom showing early learning elements and child nutrition kits" class="details-img" />
          </div>
        </div>
      </section>

      <section class="pillars-section section-padding bg-light">
        <div class="contain">
          <div class="section-header text-center">
            <span class="section-label">Our Approach</span>
            <h2>Three Pillars of Transformation</h2>
            <p class="section-subtitle">
              We look beyond basic feeding to implement holistic updates that create a sustainable community impact.
            </p>
          </div>

          <div class="tech-features-grid">
            <div class="tech-card">
              <div class="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
              </div>
              <h3>Nutritional Diversity</h3>
              <p>
                We enrich standard government rations by delivering diverse, nutrient-dense breakfast and hot meals. Our recipes include seasonal vegetables, whole grains, and protein supplements to fight micro-nutrient deficiencies.
              </p>
            </div>

            <div class="tech-card">
              <div class="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>BaLA Infrastructure Revamp</h3>
              <p>
                Using the <strong>Building as Learning Aid (BaLA)</strong> design philosophy, we paint classrooms with educational murals, install clean sanitation blocks, supply child-safe furniture, and build secure playground corners.
              </p>
            </div>

            <div class="tech-card">
              <div class="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Worker Capacity Building</h3>
              <p>
                We train local Anganwadi workers (Sevikas) in food hygiene, child psychology, and basic digital record-keeping, integrating their records into the central government <em>Poshan Tracker</em> for better tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="case-study-section section-padding">
        <div class="contain case-grid">
          <div class="case-content">
            <span class="section-label">Impact Spotlight</span>
            <h2>The Varanasi Model</h2>
            <p>
              In Varanasi, Uttar Pradesh, Feeding India partnered with local administrations to overhaul over 50 rural Anganwadi daycares. By upgrading standard supplementary snacks to balanced, multi-course breakfasts and lunches, we saw attendance rates surge by 65%.
            </p>
            <p>
              Furthermore, using child-friendly murals and play-based tools, these daycares doubled their enrollment of local toddler groups, transforming daycares from mere distribution points to genuine early learning hubs.
            </p>
            <div class="case-metrics">
              <div class="case-metric-item">
                <span class="metric-val">+65%</span>
                <span class="metric-lbl">Attendance Increase</span>
              </div>
              <div class="case-metric-item">
                <span class="metric-val">50+</span>
                <span class="metric-lbl">Daycares Revamped</span>
              </div>
            </div>
          </div>
          <div class="case-visual">
            <div class="case-graphic-card">
              <h3>Empowering Caregivers</h3>
              <p>
                "With new play tools, clean running water, and reliable nutritious food delivery, mothers are happy to drop their kids off. The children learn while eating healthy."
              </p>
              <span class="quote-author">— Sunita Devi, Anganwadi Worker</span>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom-cta-section section-padding text-center">
        <div class="contain">
          <span class="caveat-writing">Nourish early childhood</span>
          <h2 class="cta-title">Give toddlers a healthy start</h2>
          <p class="cta-description">
            Your support helps fund kitchen infrastructure, nutrition kits, and learning aids. Sponsor daycare center initiatives today.
          </p>
          <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
            <a href="#/donate" class="btn btn-primary btn-lg">Donate to Program</a>
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
