import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { agencyData } from '../data/agencyData';

export function ProjectsPage({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? agencyData.projects
    : agencyData.projects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="section-tag">
            <Zap size={14} /> Case Studies & Proven Software
          </span>
          <h1 className="section-title">
            Engineered for <span className="text-gradient">Real-World Scale</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Explore client platforms, web apps, AI systems, and mobile applications deployed by Team GRK.
          </p>

          {/* Filter Bar */}
          <div className="projects-filter-bar" style={{ marginTop: '2.5rem', marginBottom: '0' }}>
            {['All', 'Full-Stack', 'Mobile', 'AI & Cloud', 'UI/UX'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-chip ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card-featured">
                <div className="project-preview">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-badge-pill">{project.category}</span>
                </div>

                <div className="project-content">
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.client}
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', flexGrow: 1, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  <div className="tech-tag-group">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    padding: '0.85rem 1.15rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Business Outcome:</span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)' }}>{project.impact}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '5rem',
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.8))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '24px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>
              Have an Ambitious Project In Mind?
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 2rem auto' }}>
              Let's build an impressive digital product that sets new industry standards for your company.
            </p>
            <Link to="/get-started" className="btn btn-primary btn-glow" style={{ padding: '0.95rem 2.2rem' }}>
              Request Project Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
