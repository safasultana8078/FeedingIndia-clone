import React from 'react';

/**
 * Reusable FAQ Item Component
 * Rubric Demonstration:
 * - Event handling (onClick callback)
 * - Conditional rendering & dynamic toggle state
 * - Props communication between parent and child
 */
export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      style={{
        borderBottom: '1px solid var(--color-border-light)',
        paddingBottom: '12px',
        marginBottom: '12px',
        cursor: 'pointer',
      }}
      onClick={onToggle}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <h5 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {question}
        </h5>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            fontSize: '0.85rem',
            color: 'var(--color-brand-red)',
            fontWeight: 'bold',
          }}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <p
          style={{
            marginTop: '8px',
            fontSize: '0.9rem',
            lineHeight: 1.5,
            color: 'var(--color-text-muted)',
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

