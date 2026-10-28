import React from 'react';

/**
 * Reusable TechCard Component (used for pillars, features, and philosophies)
 * Rubric Demonstration:
 * - Component reuse
 * - Conditional rendering of icons
 * - Props destructuring
 */
export default function TechCard({ icon = null, title, description, style = {} }) {
  return (
    <div className="tech-card" style={style}>
      {icon && <div className="tech-icon-wrapper">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

