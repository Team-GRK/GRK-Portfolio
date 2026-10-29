import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles,
  ArrowRight,
  ChevronRight,
  Layers,
  Briefcase,
  Users,
  BookOpen,
  PhoneCall
} from 'lucide-react';

export function Navbar({ theme, onToggleTheme, onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Work' },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`modern-nav-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-container-inner">
          <div className="modern-nav-bar">
            {/* Agency Brand Name - Functions as Home link */}
            <Link 
              to="/" 
              className="agency-brand"
              onClick={handleLinkClick}
              title="Team GRK - Home"
            >
              <div className="brand-text-group">
                <span className="brand-name">Team<span className="text-gradient">GRK</span></span>
              </div>
            </Link>

            {/* Desktop Navigation Capsule */}
            <nav className="desktop-nav-menu" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`desktop-nav-link ${isActive ? 'is-active' : ''}`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="active-glow-pill" />}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Elements */}
            <div className="nav-actions-group">
              {/* Theme Toggle Button */}
              <button
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="theme-toggle-btn"
              >
                {theme === 'dark' ? (
                  <Sun size={17} className="theme-sun-icon" />
                ) : (
                  <Moon size={17} className="theme-moon-icon" />
                )}
              </button>

              {/* Primary CTA Button */}
              <Link
                to="/get-started"
                className="nav-cta-btn"
              >
                <Sparkles size={15} />
                <span className="cta-label">Get Started</span>
              </Link>

              {/* Mobile Hamburger / Close Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
                className={`mobile-menu-trigger ${mobileMenuOpen ? 'open' : ''}`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Fullscreen Mobile Drawer */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-header">
            <Link 
              to="/" 
              className="agency-brand"
              onClick={handleLinkClick}
              title="Team GRK - Home"
            >
              <span className="brand-name">Team<span className="text-gradient">GRK</span></span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-drawer-close"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-drawer-content">
            <span className="mobile-drawer-subtitle">Navigation</span>
            <div className="mobile-links-list">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={17} className="mobile-link-arrow" />
                  </Link>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-theme-row">
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Appearance</span>
                <button
                  onClick={onToggleTheme}
                  className="mobile-theme-switch"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </div>

              <Link
                to="/get-started"
                onClick={handleLinkClick}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}
              >
                <Sparkles size={17} /> Launch Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
