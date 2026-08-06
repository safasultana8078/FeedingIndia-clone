import React from 'react';
import { Link } from 'react-router-dom';

export default function Anganwadi() {
  return (
    <div className="anganwadi-page animate-fade">
      
      {/* Page Hero */}
      <section className="subpage-hero">
        <div className="contain">
          <span className="section-label">Initiative 2</span>
          <h1 className="subpage-title">The Anganwadi Program</h1>
          <p className="subpage-subtitle">
            Combating malnutrition where it starts. Transforming government daycares into safe, nourishing, and vibrant spaces for early growth.
          </p>
        </div>
      </section>

      {/* Program Context Section */}
      <section className="program-details-section section-padding">
        <div className="contain details-grid">
          <div className="details-text">
            <h2>Nourishing Early Childhood</h2>
            <p>
              The first 1,000 days of a child's life are critical for brain development, immunity, and lifelong physical health. Unfortunately, early childhood malnutrition is a silent crisis affecting millions of infants under six years of age.
            </p>
            <p>
              Rather than setting up parallel systems, Feeding India strengthens the existing government-backed **Anganwadi network** (government daycares). We partner with state authorities to fill resource gaps, upgrade facilities, and expand food diversity.
            </p>
            <p>
              Our program ensures toddlers, pregnant women, and lactating mothers receive nutritious breakfasts and lunches, safeguarding physical and cognitive development when it matters most.
            </p>
          </div>
          <div className="details-image">
            <img 
              src="https://cdn.feedingindia.org/fi-web/assets/MTc3OTM1MzM4MzgxMTIxMjYzMg.webp" 
              alt="Anganwadi classroom showing early learning elements and child nutrition kits" 
              className="details-img"
            />
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Section */}
      <section className="pillars-section section-padding bg-light">
        <div className="contain">
          <div className="section-header text-center">
            <span className="section-label">Our Approach</span>
            <h2>Three Pillars of Transformation</h2>
            <p className="section-subtitle">
              We look beyond basic feeding to implement holistic updates that create a sustainable community impact.
            </p>
          </div>

          <div className="tech-features-grid">
            {/* Pillar 1 */}
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
              </div>
              <h3>Nutritional Diversity</h3>
              <p>
                We enrich standard government rations by delivering diverse, nutrient-dense breakfast and hot meals. Our recipes include seasonal vegetables, whole grains, and protein supplements to fight micro-nutrient deficiencies.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>BaLA Infrastructure Revamp</h3>
              <p>
                Using the **Building as Learning Aid (BaLA)** design philosophy, we paint classrooms with educational murals, install clean sanitation blocks, supply child-safe furniture, and build secure playground corners.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Worker Capacity Building</h3>
              <p>
                We train local Anganwadi workers (Sevikas) in food hygiene, child psychology, and basic digital record-keeping, integrating their records into the central government *Poshan Tracker* for better tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varanasi & Noida Case Study Highlight */}
      <section className="case-study-section section-padding">
        <div className="contain case-grid">
          <div className="case-content">
            <span className="section-label">Impact Spotlight</span>
            <h2>The Varanasi Model</h2>
            <p>
              In Varanasi, Uttar Pradesh, Feeding India partnered with local administrations to overhaul over 50 rural Anganwadi daycares. By upgrading standard supplementary snacks to balanced, multi-course breakfasts and lunches, we saw attendance rates surge by 65%.
            </p>
            <p>
              Furthermore, using child-friendly murals and play-based tools, these daycares doubled their enrollment of local toddler groups, transforming daycares from mere distribution points to genuine early learning hubs.
            </p>
            <div className="case-metrics">
              <div className="case-metric-item">
                <span className="metric-val">+65%</span>
                <span className="metric-lbl">Attendance Increase</span>
              </div>
              <div className="case-metric-item">
                <span className="metric-val">50+</span>
                <span className="metric-lbl">Daycares Revamped</span>
              </div>
            </div>
          </div>
          <div className="case-visual">
            {/* Visual presentation block */}
            <div className="case-graphic-card">
              <h3>Empowering Caregivers</h3>
              <p>
                "With new play tools, clean running water, and reliable nutritious food delivery, mothers are happy to drop their kids off. The children learn while eating healthy."
              </p>
              <span className="quote-author">— Sunita Devi, Anganwadi Worker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bottom-cta-section section-padding text-center">
        <div className="contain">
          <span className="caveat-writing">Nourish early childhood</span>
          <h2 className="cta-title">Give toddlers a healthy start</h2>
          <p className="cta-description">
            Your support helps fund kitchen infrastructure, nutrition kits, and learning aids. Sponsor daycare center initiatives today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/donate" className="btn btn-primary btn-lg">
              Donate to Program
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
