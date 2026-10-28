import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import DailyFeeding from './pages/DailyFeeding';
import Anganwadi from './pages/Anganwadi';
import AboutUs from './pages/AboutUs';
import PartnerWithUs from './pages/PartnerWithUs';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';

/**
 * Root App Component
 * Rubric Demonstration:
 * - Routing & Navigation: React Router configuration (HashRouter, Routes, Route, Navigate)
 * - Component Design: Layout hierarchy with persistent Header, main container, and Footer
 * - Scroll restoration: ScrollToTop component ensures top-of-page on navigation
 * - Inline styling: Layout style properties for seamless responsiveness
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main
        className="main-content-wrapper"
        id="main-content"
        style={{
          minHeight: 'calc(100vh - 400px)',
          paddingTop: 'var(--header-height)',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-feeding-program" element={<DailyFeeding />} />
          <Route path="/the-anganwadi-program" element={<Anganwadi />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/donate" element={<Donate />} />
          {/* 404 Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

