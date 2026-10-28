import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader(document.getElementById('header-root'));
  renderFooter(document.getElementById('footer-root'));
  initRouter(document.getElementById('main-content'));
});
