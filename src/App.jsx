import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';

// Scroll to top automatically when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleOpenConsultation = (data = null) => {
    setModalInitialData(data);
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Dynamic Multi-layered Background Lighting */}
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
        <div className="bg-grid-cyber"></div>

        {/* Global Navigation */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Multi-Page Route Views */}
        <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/projects" element={<ProjectsPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-started" element={<GetStartedPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Consultation / Booking Modal */}
        <ConsultationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={modalInitialData}
        />
      </div>
    </BrowserRouter>
  );
}
