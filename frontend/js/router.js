import { HomePage } from './pages/home.js';
import { DailyFeedingPage } from './pages/dailyFeeding.js';
import { AnganwadiPage } from './pages/anganwadi.js';
import { AboutUsPage } from './pages/aboutUs.js';
import { PartnerWithUsPage } from './pages/partnerWithUs.js';
import { DonatePage } from './pages/donate.js';

const routes = {
  '/': HomePage,
  '/daily-feeding-program': DailyFeedingPage,
  '/the-anganwadi-program': AnganwadiPage,
  '/about-us': AboutUsPage,
  '/partner-with-us': PartnerWithUsPage,
  '/donate': DonatePage,
};

let currentPage = null;
let mainEl = null;

function getPath() {
  const hash = location.hash || '#/';
  // strip leading '#'
  let path = hash.slice(1);
  if (!path) path = '/';
  return path;
}

function renderRoute() {
  const path = getPath();
  const page = routes[path] || HomePage; // Fallback to Home, matching the original catch-all route

  if (currentPage && typeof currentPage.unmount === 'function') {
    currentPage.unmount();
  }

  mainEl.innerHTML = page.render();
  currentPage = page;

  if (typeof page.mount === 'function') {
    page.mount();
  }

  // Scroll to top on every route change, mirroring <ScrollToTop />
  window.scrollTo(0, 0);
}

export function initRouter(mainContentEl) {
  mainEl = mainContentEl;

  if (!location.hash) {
    location.hash = '#/';
  }

  window.addEventListener('hashchange', renderRoute);
  renderRoute();
}
