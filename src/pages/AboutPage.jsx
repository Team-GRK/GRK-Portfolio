import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Terminal, 
  CheckCircle, 
  Award, 
  Target, 
  HeartHandshake, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  ArrowRight,
  ExternalLink,
  Globe
} from 'lucide-react';
import { agencyData } from '../data/agencyData';

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export function AboutPage({ onOpenConsultation }) {
  const values = [
    {
      title: "Obsessive Craftsmanship",
      desc: "We write clean, documented, type-safe code that scales gracefully. No cutting corners, no fragile hacky fixes.",
      icon: Terminal
    },
    {
      title: "Client Transparency & True IP",
      desc: "Complete repository access from day one. You own 100% of your source code, assets, and infrastructure keys.",
      icon: ShieldCheck
    },
    {
      title: "Speed with Architectural Rigor",
      desc: "We ship functional MVPs in weeks, not quarters, while adhering strictly to high-availability design patterns.",
      icon: Zap
    },
    {
      title: "Human-Centered Design",
      desc: "Technology is useless if people dread using it. We infuse fluid micro-animations and intuitive workflows into every screen.",
      icon: HeartHandshake
    }
  ];

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Hero Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="section-tag">
            <Users size={14} /> Who We Are & What We Believe
          </span>
          <h1 className="section-title">
            Engineering Tomorrow's Platforms with <span className="text-gradient">Relentless Execution</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Team GRK was founded by hands-on engineers and product strategists frustrated by the slow, bloated delivery cycles of legacy tech consultancies. We combine agile velocity with enterprise stability.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: 'rgba(10, 13, 20, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Principles</span>
            <h2 className="section-title">The Foundation of Our Agency</h2>
            <p className="section-subtitle">
              The internal values guiding how we engineer software, communicate with partners, and deliver results.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <div key={i} className="glass-panel" style={{ padding: '2.5rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <VIcon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Squad */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engineering Leadership</span>
            <h2 className="section-title">Meet the Core Team</h2>
            <p className="section-subtitle">
              Direct access to senior talent. When you work with Team GRK, you collaborate directly with seasoned technical leaders.
            </p>
          </div>

          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 420px))', justifyContent: 'center' }}>
            {agencyData.team.map((member, i) => (
              <div key={i} className="team-card-modern">
                <div className="team-avatar-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-avatar-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = member.fallbackImage;
                    }}
                  />
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {member.name}
                </h3>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {member.bio}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: member.portfolio ? '1.25rem' : '0' }}>
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag" style={{ fontSize: '0.725rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {member.portfolio && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ 
                        fontSize: '0.825rem', 
                        padding: '0.5rem 1.1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        borderColor: 'rgba(56, 189, 248, 0.4)',
                        background: 'rgba(56, 189, 248, 0.08)',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      <Globe size={15} /> Visit Personal Portfolio <ExternalLink size={13} />
                    </a>
                  </div>
                )}

                <div className="team-socials">
                  <a href={member.social.github} target="_blank" rel="noreferrer" className="team-social-btn" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="team-social-btn" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noreferrer" className="team-social-btn" aria-label="Twitter">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '5rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(56, 189, 248, 0.05))',
            border: '1px solid var(--border-highlight)',
            borderRadius: '24px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>
              Want to Build Something Extraordinary Together?
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 2rem auto' }}>
              Whether you need to launch a high-velocity startup MVP or modernize complex enterprise architecture, our squad is ready.
            </p>
            <Link to="/get-started" className="btn btn-primary btn-glow" style={{ padding: '0.95rem 2.2rem' }}>
              Schedule Technical Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
