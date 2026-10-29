import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  Code2, 
  Smartphone, 
  CloudLightning, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  CheckCircle, 
  Star, 
  Zap, 
  Layers 
} from 'lucide-react';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { agencyData } from '../data/agencyData';

const ICON_MAP = {
  Code2,
  Smartphone,
  CloudLightning,
  Cpu,
  Palette,
  ShieldCheck
};

export function HomePage({ onOpenConsultation }) {
  const [projectFilter, setProjectFilter] = useState('All');

  const filteredProjects = projectFilter === 'All' 
    ? agencyData.projects.slice(0, 4) 
    : agencyData.projects.filter(p => p.category.toLowerCase().includes(projectFilter.toLowerCase())).slice(0, 4);

  return (
    <div>
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '8.5rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            
            <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
              <span className="section-tag animate-pulse-glow">
                <Sparkles size={14} /> Premier Next-Gen Software Engineering Studio
              </span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.75rem, 5.5vw, 4.6rem)', 
              fontWeight: 800, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em', 
              marginTop: '1.25rem',
              marginBottom: '1.5rem' 
            }}>
              We Engineer <span className="text-gradient">Mission-Critical</span> Software & Digital Platforms.
            </h1>

            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
              color: 'var(--text-muted)', 
              maxWidth: '740px', 
              margin: '0 auto 2.5rem auto' 
            }}>
              {agencyData.shortDesc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4.5rem' }}>
              <Link 
                to="/get-started"
                className="btn btn-primary btn-glow"
                style={{ fontSize: '1.05rem', padding: '1rem 2.2rem' }}
              >
                Launch Your Project <ArrowRight size={18} />
              </Link>

              <Link 
                to="/projects"
                className="btn btn-secondary"
                style={{ fontSize: '1.05rem', padding: '1rem 2.2rem' }}
              >
                View Case Studies
              </Link>
            </div>

            {/* Live Metrics Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '1.5rem',
              maxWidth: '920px',
              margin: '0 auto'
            }}>
              {agencyData.stats.map((stat, i) => (
                <div key={i} className="hero-metric-card">
                  <div className="hero-metric-number">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="hero-metric-label">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES PREVIEW
          ========================================================================= */}
      <section className="section" style={{ background: 'rgba(10, 13, 20, 0.4)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-tag">
              <Layers size={14} /> Full-Stack Engineering Capabilities
            </span>
            <h2 className="section-title">
              Engineered for <span className="text-gradient">Speed & Elastic Scale</span>
            </h2>
            <p className="section-subtitle">
              We build maintainable, battle-tested software designed to adapt as your users scale from hundreds to millions.
            </p>
          </div>

          <div className="services-grid">
            {agencyData.services.slice(0, 6).map((service) => {
              const ServiceIcon = ICON_MAP[service.icon] || Code2;
              return (
                <div key={service.id} className="service-card-modern">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div className="service-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.12)', color: 'var(--accent-cyan)' }}>
                        <ServiceIcon size={28} />
                      </div>
                      <span className="service-badge">{service.badge}</span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                      {service.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                      {service.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          <CheckCircle size={15} color="var(--accent-emerald)" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ 
                    borderTop: '1px solid var(--border-subtle)', 
                    paddingTop: '1.25rem',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Starting from</span>
                      <strong style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                        {service.startingPrice}
                      </strong>
                    </div>

                    <Link
                      to="/services"
                      className="btn btn-secondary"
                      style={{ padding: '0.45rem 1rem', fontSize: '0.825rem' }}
                    >
                      Explore Scope <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn btn-secondary" style={{ padding: '0.9rem 2rem' }}>
              View All Technical Capabilities & SLA Guarantees <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTED CASE STUDIES
          ========================================================================= */}
      <section className="section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-tag">
              <Zap size={14} /> Proven Production Track Record
            </span>
            <h2 className="section-title">
              Crafted with <span className="text-gradient">Precision & Speed</span>
            </h2>
            <p className="section-subtitle">
              Take a look through our production platforms, web apps, and enterprise architectures delivering measurable ROI.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="projects-filter-bar">
            {['All', 'Full-Stack', 'Mobile', 'AI & Cloud', 'UI/UX'].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`filter-chip ${projectFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
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
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', flexGrow: 1 }}>
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
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Outcome:</span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)' }}>{project.impact}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/projects" className="btn btn-primary btn-glow" style={{ padding: '0.9rem 2.2rem' }}>
              Explore All 85+ Client Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE COST ESTIMATOR CALCULATOR
          ========================================================================= */}
      <section className="section" style={{ background: 'rgba(15, 21, 35, 0.4)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> Instant Scoping Engine
            </span>
            <h2 className="section-title">
              Plan Your Budget with <span className="text-gradient">Zero Surprises</span>
            </h2>
            <p className="section-subtitle">
              Configure parameters, add-ons, and timelines to forecast your investment.
            </p>
          </div>

          <ProjectEstimator onBookConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* =========================================================================
          CLIENT REVIEWS
          ========================================================================= */}
      <section className="section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-tag">
              <Star size={14} /> Client Trust
            </span>
            <h2 className="section-title">
              Trusted by <span className="text-gradient">Innovators & Founders</span>
            </h2>
            <p className="section-subtitle">
              Hear directly from leaders who scaled their product operations and revenues with Team GRK.
            </p>
          </div>

          <div className="testimonials-grid">
            {agencyData.testimonials.map((t, i) => (
              <div key={i} className="testimonial-card-modern">
                <div>
                  <div className="star-rating">
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} size={18} fill="#fbbf24" stroke="none" />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src={t.avatar} 
                    alt={t.author} 
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-main)' }}>{t.author}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
