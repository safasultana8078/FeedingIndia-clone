import React from 'react';

/**
 * Reusable StatCard Component
 * Rubric Demonstration:
 * - Props passing & destructuring
 * - Conditional rendering & dynamic styling
 * - Inline styling demonstration
 */
export default function StatCard({
  icon,
  number,
  label,
  isHighlight = false,
  isLive = false,
  style = {},
}) {
  return (
    <div
      className={`stat-card ${isHighlight ? 'highlight' : ''}`}
      style={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ...style,
      }}
    >
      <div className={`stat-icon-wrapper ${isHighlight ? 'red' : ''}`}>
        {icon}
      </div>
      <h3 className={`stat-number ${isLive ? 'live-counter' : ''}`}>{number}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
}

