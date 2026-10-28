import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable ProgramCard Component
 * Rubric Demonstration:
 * - Component reuse across pages
 * - Props destructuring with default parameters
 * - React Router navigation via Link
 */
export default function ProgramCard({
  title,
  description,
  image,
  alt = '',
  link,
  linkText = 'Learn more',
}) {
  return (
    <div className="program-card">
      <div className="program-image-wrapper">
        <img src={image} alt={alt || title} className="program-img" loading="lazy" />
      </div>
      <div className="program-content">
        <h3 className="program-name">{title}</h3>
        <p className="program-description">{description}</p>
        <Link to={link} className="btn btn-secondary">
          {linkText}
        </Link>
      </div>
    </div>
  );
}

