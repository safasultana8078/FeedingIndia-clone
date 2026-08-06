import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkDropdownOpen(false);
    setPartnerDropdownOpen(false);
  }, [location]);

  return (
    <>
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="contain header-container">
          <Link to="/" className="logo-link" aria-label="Feeding India homepage">
            <Logo width={160} height={38} className="header-logo" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button 
                type="button" 
                className={`nav-link ${location.pathname.includes('program') ? 'active' : ''}`}
                aria-expanded={workDropdownOpen}
              >
                Our work
                <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              
              {workDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/daily-feeding-program" className="dropdown-item">
                    Daily Feeding Program
                  </Link>
                  <Link to="/the-anganwadi-program" className="dropdown-item">
                    The Anganwadi Program
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about-us" 
              className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
            >
              About us
            </Link>

            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setPartnerDropdownOpen(true)}
              onMouseLeave={() => setPartnerDropdownOpen(false)}
            >
              <button 
                type="button" 
                className={`nav-link ${location.pathname.includes('partner') || location.pathname.includes('event') ? 'active' : ''}`}
                aria-expanded={partnerDropdownOpen}
              >
                Partnerships
                <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              
              {partnerDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/partner-with-us" className="dropdown-item">
                    Partner with us
                  </Link>
                  <a href="#community-events" className="dropdown-item">
                    Community events
                  </a>
                </div>
              )}
            </div>
          </nav>

          <div className="header-cta">
            <Link to="/donate" className="btn btn-primary btn-header-donate">
              Donate now
            </Link>
            
            {/* Mobile Hamburger Toggle */}
            <button 
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              type="button"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <div className="mobile-nav-group">
            <div className="mobile-nav-header">Our work</div>
            <Link to="/daily-feeding-program" className="mobile-nav-sublink">
              Daily Feeding Program
            </Link>
            <Link to="/the-anganwadi-program" className="mobile-nav-sublink">
              The Anganwadi Program
            </Link>
          </div>

          <Link to="/about-us" className="mobile-nav-link">
            About us
          </Link>

          <div className="mobile-nav-group">
            <div className="mobile-nav-header">Partnerships</div>
            <Link to="/partner-with-us" className="mobile-nav-sublink">
              Partner with us
            </Link>
            <a href="#community-events" className="mobile-nav-sublink">
              Community events
            </a>
          </div>

          <div className="mobile-drawer-cta">
            <Link to="/donate" className="btn btn-primary w-full">
              Donate now
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay to dim page when mobile menu is active */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-overlay" 
          onClick={() => setMobileMenuOpen(false)}
          role="presentation"
        />
      )}
    </>
  );
}
