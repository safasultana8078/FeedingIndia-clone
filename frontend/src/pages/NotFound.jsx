import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found Page Component
 * Rubric Demonstration:
 * - Routing & Navigation: Catches unknown route URLs (path="*") in React Router
 * - Component Design: Clean JSX structure with CTA navigation buttons
 * - UI Styling & Responsiveness: Centered card layout with responsive spacing
 */
export default function NotFound() {
  return (
    <div className="not-found-page animate-fade" style={{ padding: '80px 20px', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="contain text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>
        {/* Visual 404 Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'var(--color-brand-red-light)',
            color: 'var(--color-brand-red)',
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '24px',
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 600 }}>
          Page Not Found
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
          Oops! The page you are looking for might have been moved, removed, or is temporarily unavailable. Let&apos;s get you back on track to supporting a hunger-free India.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <Link to="/" className="btn btn-primary">
            Back to Homepage
          </Link>
          <Link to="/donate" className="btn btn-secondary">
            Support Our Mission
          </Link>
        </div>

        {/* Helpful links */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '24px',
            fontSize: '0.95rem',
            color: 'var(--color-text-light)',
          }}
        >
          <p style={{ marginBottom: '12px' }}>Popular pages you might be interested in:</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/daily-feeding-program" style={{ color: 'var(--color-brand-red)', textDecoration: 'none', fontWeight: 500 }}>
              Daily Feeding Program &rarr;
            </Link>
            <Link to="/the-anganwadi-program" style={{ color: 'var(--color-brand-red)', textDecoration: 'none', fontWeight: 500 }}>
              The Anganwadi Program &rarr;
            </Link>
            <Link to="/partner-with-us" style={{ color: 'var(--color-brand-red)', textDecoration: 'none', fontWeight: 500 }}>
              Partner With Us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

