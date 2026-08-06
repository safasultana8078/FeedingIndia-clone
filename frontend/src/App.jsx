import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import DailyFeeding from './pages/DailyFeeding';
import Anganwadi from './pages/Anganwadi';
import AboutUs from './pages/AboutUs';
import PartnerWithUs from './pages/PartnerWithUs';
import Donate from './pages/Donate';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Global Navigation Header */}
      <Header />
      
      {/* Route Content Area */}
      <main className="main-content-wrapper" style={{ minHeight: 'calc(100vh - 400px)', paddingTop: 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-feeding-program" element={<DailyFeeding />} />
          <Route path="/the-anganwadi-program" element={<Anganwadi />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/donate" element={<Donate />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </Router>
  );
}
