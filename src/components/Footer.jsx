import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ArrowRight, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          <div>
            <Link to="/" className="nav-logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <div className="nav-logo-icon">
                <Code2 size={22} />
              </div>
              <span>Team<span className="text-gradient">GRK</span></span>
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '320px', lineHeight: 1.6 }}>
              Engineering the next frontier of web, mobile, and cloud software. Built with obsessive craftsmanship, clean code, and resilient architectures.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Agency Pages</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link-item">Home</Link></li>
              <li><Link to="/about" className="footer-link-item">About Us</Link></li>
              <li><Link to="/services" className="footer-link-item">Services & Tech</Link></li>
              <li><Link to="/projects" className="footer-link-item">Projects Portfolio</Link></li>
              <li><Link to="/blog" className="footer-link-item">Engineering Blog</Link></li>
              <li><Link to="/careers" className="footer-link-item">Careers / Join Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Solutions</h4>
            <ul className="footer-links-list">
              <li><Link to="/services" className="footer-link-item">Full-Stack Web</Link></li>
              <li><Link to="/services" className="footer-link-item">Mobile App Development</Link></li>
              <li><Link to="/services" className="footer-link-item">Cloud & DevOps</Link></li>
              <li><Link to="/services" className="footer-link-item">AI Agents & RAG</Link></li>
              <li><Link to="/get-started" className="footer-link-item">Cost Estimator</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Direct Contact</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Have an RFP or project idea? Connect directly with our partners.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                <Mail size={16} color="var(--accent-cyan)" /> teamgrk.agency@gmail.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                <MapPin size={16} color="var(--accent-purple)" /> Dhaka & Global Remote
              </div>
            </div>
            <Link to="/get-started" className="btn btn-primary" style={{ padding: '0.65rem 1.2rem', fontSize: '0.85rem' }}>
              Start an Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Team GRK Software Agency. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
