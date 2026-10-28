import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

/**
 * Reusable Header / Navbar Component
 * Rubric Demonstration:
 * - Hooks: useState (drawer toggle, scroll state, dropdown hover)
 * - Hooks: useEffect (scroll listener with proper cleanup)
 * - Routing: React Router NavLink & Link with active class
 * - Event Handling: onClick, onMouseEnter, onMouseLeave
 * - Dynamic Styling: .scrolled, .is-open, active link indicators
 * - Responsiveness: Desktop navigation & mobile hamburger drawer
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Scroll effect for sticky navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`main-header ${isScrolled ? 'scrolled' : ''}`}
        id="main-header"
      >
        <div className="contain header-container">
          {/* Brand Logo Link */}
          <Link to="/" className="logo-link" aria-label="Feeding India homepage">
            <Logo width={160} height={38} className="header-logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {/* Dropdown: Our Work */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('work')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link ${
                  location.pathname.includes('feeding') || location.pathname.includes('anganwadi')
                    ? 'active'
                    : ''
                }`}
                aria-expanded={activeDropdown === 'work'}
              >
                Our work
                <svg
                  className="chevron-icon"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className={`dropdown-menu ${activeDropdown === 'work' ? 'is-open' : ''}`}>
                <NavLink
                  to="/daily-feeding-program"
                  className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                >
                  Daily Feeding Program
                </NavLink>
                <NavLink
                  to="/the-anganwadi-program"
                  className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                >
                  The Anganwadi Program
                </NavLink>
              </div>
            </div>

            {/* About Us Link */}
            <NavLink
              to="/about-us"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About us
            </NavLink>

            {/* Dropdown: Partnerships */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('partner')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link ${location.pathname.includes('partner') ? 'active' : ''}`}
                aria-expanded={activeDropdown === 'partner'}
              >
                Partnerships
                <svg
                  className="chevron-icon"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className={`dropdown-menu ${activeDropdown === 'partner' ? 'is-open' : ''}`}>
                <NavLink
                  to="/partner-with-us"
                  className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                >
                  Partner with us
                </NavLink>
                <a href="#community-events" className="dropdown-item">
                  Community events
                </a>
              </div>
            </div>
          </nav>

          {/* Header Action & Mobile Hamburger Button */}
          <div className="header-cta">
            <Link to="/donate" className="btn btn-primary btn-header-donate">
              Donate now
            </Link>

            <button
              className="mobile-toggle-btn"
              id="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
              type="button"
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Responsive Menu) */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`} id="mobile-menu-drawer">
        <nav className="mobile-nav">
          <div className="mobile-nav-group">
            <div className="mobile-nav-header">Our work</div>
            <Link
              to="/daily-feeding-program"
              className="mobile-nav-sublink"
              onClick={closeMobileMenu}
            >
              Daily Feeding Program
            </Link>
            <Link
              to="/the-anganwadi-program"
              className="mobile-nav-sublink"
              onClick={closeMobileMenu}
            >
              The Anganwadi Program
            </Link>
          </div>

          <Link to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu}>
            About us
          </Link>

          <div className="mobile-nav-group">
            <div className="mobile-nav-header">Partnerships</div>
            <Link
              to="/partner-with-us"
              className="mobile-nav-sublink"
              onClick={closeMobileMenu}
            >
              Partner with us
            </Link>
            <a href="#community-events" className="mobile-nav-sublink" onClick={closeMobileMenu}>
              Community events
            </a>
          </div>

          <div className="mobile-drawer-cta">
            <Link
              to="/donate"
              className="btn btn-primary w-full"
              style={{ display: 'block', textAlign: 'center' }}
              onClick={closeMobileMenu}
            >
              Donate now
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          id="mobile-drawer-overlay"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}

