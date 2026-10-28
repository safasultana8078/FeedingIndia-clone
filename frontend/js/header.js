import { Logo } from './logo.js';

/**
 * Renders the sticky site header + mobile drawer, and wires up all of its
 * interactive behaviour (scroll shadow, dropdowns, hamburger menu, active
 * link highlighting). Mirrors the original React <Header /> component.
 */
export function renderHeader(root) {
  root.innerHTML = `
    <header class="main-header" id="main-header">
      <div class="contain header-container">
        <a href="#/" class="logo-link" aria-label="Feeding India homepage">
          ${Logo(160, 38, 'header-logo')}
        </a>

        <nav class="desktop-nav" aria-label="Main Navigation">
          <div class="nav-item-dropdown" data-dropdown="work">
            <button type="button" class="nav-link" data-nav="program" aria-expanded="false">
              Our work
              <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu">
              <a href="#/daily-feeding-program" class="dropdown-item">Daily Feeding Program</a>
              <a href="#/the-anganwadi-program" class="dropdown-item">The Anganwadi Program</a>
            </div>
          </div>

          <a href="#/about-us" class="nav-link" data-nav="/about-us">About us</a>

          <div class="nav-item-dropdown" data-dropdown="partner">
            <button type="button" class="nav-link" data-nav="partner|event" aria-expanded="false">
              Partnerships
              <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu">
              <a href="#/partner-with-us" class="dropdown-item">Partner with us</a>
              <a href="#community-events" class="dropdown-item">Community events</a>
            </div>
          </div>
        </nav>

        <div class="header-cta">
          <a href="#/donate" class="btn btn-primary btn-header-donate">Donate now</a>

          <button class="mobile-toggle-btn" id="mobile-toggle-btn" aria-label="Toggle navigation menu" type="button">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-menu-drawer" id="mobile-menu-drawer">
      <nav class="mobile-nav">
        <div class="mobile-nav-group">
          <div class="mobile-nav-header">Our work</div>
          <a href="#/daily-feeding-program" class="mobile-nav-sublink">Daily Feeding Program</a>
          <a href="#/the-anganwadi-program" class="mobile-nav-sublink">The Anganwadi Program</a>
        </div>

        <a href="#/about-us" class="mobile-nav-link">About us</a>

        <div class="mobile-nav-group">
          <div class="mobile-nav-header">Partnerships</div>
          <a href="#/partner-with-us" class="mobile-nav-sublink">Partner with us</a>
          <a href="#community-events" class="mobile-nav-sublink">Community events</a>
        </div>

        <div class="mobile-drawer-cta">
          <a href="#/donate" class="btn btn-primary w-full">Donate now</a>
        </div>
      </nav>
    </div>

    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay" hidden></div>
  `;

  const headerEl = document.getElementById('main-header');
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileOverlay = document.getElementById('mobile-drawer-overlay');

  // --- Scroll shadow behaviour ---
  const handleScroll = () => {
    headerEl.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // --- Desktop dropdowns (hover in/out) ---
  root.querySelectorAll('.nav-item-dropdown').forEach((item) => {
    const btn = item.querySelector('.nav-link');
    const menu = item.querySelector('.dropdown-menu');
    const open = () => {
      menu.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    };
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
  });

  // --- Mobile hamburger toggle ---
  const closeMobileMenu = () => {
    mobileToggleBtn.classList.remove('open');
    mobileDrawer.classList.remove('open');
    mobileOverlay.hidden = true;
  };
  const toggleMobileMenu = () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    mobileToggleBtn.classList.toggle('open', isOpen);
    mobileOverlay.hidden = !isOpen;
  };
  mobileToggleBtn.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
  root.querySelectorAll('.mobile-nav a').forEach((a) => {
    a.addEventListener('click', closeMobileMenu);
  });

  // Close everything whenever the route changes
  window.addEventListener('hashchange', () => {
    closeMobileMenu();
    setActiveNav();
  });

  // --- Active link highlighting ---
  function setActiveNav() {
    const path = (location.hash || '#/').slice(1) || '/';
    root.querySelectorAll('.nav-link[data-nav]').forEach((el) => {
      const keys = el.dataset.nav.split('|');
      const isActive = keys.some((k) => path.includes(k)) || (el.getAttribute('href') === `#${path}`);
      el.classList.toggle('active', isActive);
    });
  }
  setActiveNav();
}
