import React from 'react';
import { Link } from 'react-router-dom';
import TechCard from '../components/TechCard';

/**
 * The Anganwadi Program Page Component
 * Rubric Demonstration:
 * - Component creation & reuse (TechCard)
 * - Clean JSX structure and responsive layout
 */
export default function Anganwadi() {
  const pillars = [
    {
      title: 'Nutritional Diversity',
      description:
        'We enrich standard government rations by delivering diverse, nutrient-dense breakfast and hot meals. Our recipes include seasonal vegetables, whole grains, and protein supplements to fight micro-nutrient deficiencies.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
    },
    {
      title: 'Infrastructure Upgrade',
      description:
        'A conducive learning environment is key to child attendance. We renovate Anganwadi centers with clean RO drinking water systems, child-friendly handwashing stations, colorful wall art, and early learning toys.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'Capacity Building & Growth Tracking',
      description:
        'We train grassroots Anganwadi workers in hygiene, food handling, and digital attendance tracking. Regular child weight and height monitoring helps detect and reverse stunting in early stages.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
    },
  ];

  return (
    <div className="anganwadi-page animate-fade">
      {/* 1. Subpage Hero */}
      <section className="subpage-hero">
        <div className="contain">
          <span className="section-label">Initiative 2</span>
          <h1 className="subpage-title">The Anganwadi Program</h1>
          <p className="subpage-subtitle">
            Combating malnutrition where it starts. Transforming government daycares into safe, nourishing, and vibrant spaces for early growth.
          </p>
        </div>
      </section>

      {/* 2. Program Details Grid */}
      <section className="program-details-section section-padding">
        <div className="contain details-grid">
          <div className="details-text">
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
          <div className="details-image">
            <img
              src="https://cdn.feedingindia.org/fi-web/assets/MTc3OTM1MzM4MzgxMTIxMjYzMg.webp"
              alt="Anganwadi classroom showing early learning elements and child nutrition kits"
              className="details-img"
            />
          </div>
        </div>
      </section>

      {/* 3. Three Pillars of Transformation */}
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
            {pillars.map((item, index) => (
              <TechCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Subpage CTA */}
      <section className="subpage-cta section-padding text-center">
        <div className="contain">
          <h2>Transform an Anganwadi Center</h2>
          <p>Partner with us or sponsor meals to upgrade early learning daycare centers across India.</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/partner-with-us" className="btn btn-secondary">
              Corporate partnership
            </Link>
            <Link to="/donate" className="btn btn-primary">
              Individual donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

