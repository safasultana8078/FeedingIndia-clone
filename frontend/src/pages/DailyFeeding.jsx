import React from 'react';
import { Link } from 'react-router-dom';
import TechCard from '../components/TechCard';

/**
 * Daily Feeding Program Page Component
 * Rubric Demonstration:
 * - Component creation & reuse (TechCard)
 * - JSX syntax & structured layouts
 * - Navigation links to /donate
 */
export default function DailyFeeding() {
  const techFeatures = [
    {
      title: 'Facial Recognition & Attendance',
      description:
        'To ensure meals reach intended beneficiaries, our team uses the FRAT application. Attendance and food distribution counts are logged in real-time.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
    },
    {
      title: 'Kitchen Audits & Food Safety',
      description:
        'Centralized kitchens follow strict FSSAI hygiene guidelines. Routine microbiologic sampling of cooked food and drinking water is conducted every month.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Nutritional Balancing',
      description:
        'Menus are designed by certified dietitians to deliver at least 450 calories and 15-20g of protein per meal, fulfilling essential micro-nutrient quotas.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="daily-feeding-page animate-fade">
      {/* 1. Subpage Hero */}
      <section className="subpage-hero">
        <div className="contain">
          <span className="section-label">Initiative 1</span>
          <h1 className="subpage-title">Daily Feeding Program</h1>
          <p className="subpage-subtitle">
            Ensuring classroom hunger never stands in the way of a child's education, health, and aspirations.
          </p>
        </div>
      </section>

      {/* 2. Program Details Grid */}
      <section className="program-details-section section-padding">
        <div className="contain details-grid">
          <div className="details-text">
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
          <div className="details-image">
            <img
              src="https://cdn.feedingindia.org/fi-web/assets/MTc3NzkyODY4NDI2MzY1MDU4Mw.webp"
              alt="Happy children receiving daily hot nutritious lunches in their school classroom"
              className="details-img"
            />
          </div>
        </div>
      </section>

      {/* 3. Numbers Banner */}
      <section className="numbers-banner section-padding bg-light">
        <div className="contain text-center">
          <h2 className="section-title">Program Reach & Impact</h2>
          <div className="numbers-grid">
            <div className="number-item">
              <span className="number-value">1,000+</span>
              <span className="number-label">Schools & Centers Supported</span>
            </div>
            <div className="number-item">
              <span className="number-value">140,000+</span>
              <span className="number-label">Daily Nourished Students</span>
            </div>
            <div className="number-item">
              <span className="number-value">160+</span>
              <span className="number-label">Cities & Villages Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tech Features (Using Reusable TechCard) */}
      <section className="tech-section section-padding">
        <div className="contain">
          <div className="section-header text-center">
            <span className="section-label">Operational Excellence</span>
            <h2>Technology-Backed Transparency</h2>
            <p className="section-subtitle">
              We leverage digital reporting systems to guarantee that every meal funded is a meal delivered.
            </p>
          </div>

          <div className="tech-features-grid">
            {techFeatures.map((item, index) => (
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

      {/* 5. Subpage Bottom CTA */}
      <section className="subpage-cta section-padding text-center">
        <div className="contain">
          <h2>Support a Child's Education Today</h2>
          <p>It costs just &#8377;10 to sponsor a wholesome meal that keeps a child in school.</p>
          <Link to="/donate" className="btn btn-primary" style={{ marginTop: '20px' }}>
            Donate to this program
          </Link>
        </div>
      </section>
    </div>
  );
}

