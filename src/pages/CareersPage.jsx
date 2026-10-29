import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Send 
} from 'lucide-react';
import { agencyData } from '../data/agencyData';
import confetti from 'canvas-confetti';

export function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applied, setApplied] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setApplied(true);
  };

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="section-tag">
            <Briefcase size={14} /> Join The Engineering Squad
          </span>
          <h1 className="section-title">
            Build Software that Matters at <span className="text-gradient">Team GRK</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            We are looking for self-directed builders, designers, and systems architects who take pride in writing elegant code and creating jaw-dropping digital products.
          </p>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="section" style={{ background: 'rgba(10, 13, 20, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Agency Culture</span>
            <h2 className="section-title">Why Build With Team GRK?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: "Remote-First Flexibility", desc: "Work from anywhere in the world. We evaluate outputs, code cleanliness, and impact, not hours logged in a chair." },
              { title: "Modern Tech Stacks Only", desc: "Zero legacy spaghetti code. We work with React 19, TypeScript, Next.js, Go, Docker, AI Agents, and cutting-edge tools." },
              { title: "Learning & Conference Budget", desc: "Annual stipends for courses, technical books, certifications, and international developer conferences." },
              { title: "High-Caliber Teammates", desc: "Collaborate with talented engineers and designers who care about craft, mentoring, and continuous growth." }
            ].map((p, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-cyan)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-header">
            <span className="section-tag">Open Roles</span>
            <h2 className="section-title">Current Opportunities</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {agencyData.careers.map((career) => (
              <div 
                key={career.id} 
                className="glass-panel" 
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                      {career.department}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.35rem' }}>{career.title}</h3>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedRole(career.title);
                      setApplied(false);
                      const el = document.getElementById('career-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-primary"
                    style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem' }}
                  >
                    Apply for Role <ArrowRight size={15} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-dim)', fontSize: '0.875rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={16} color="var(--accent-indigo)" /> {career.type}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={16} color="var(--accent-indigo)" /> {career.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Briefcase size={16} color="var(--accent-indigo)" /> {career.experience}
                  </span>
                </div>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {career.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
                  {career.perks.map((perk, pIdx) => (
                    <span key={pIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <CheckCircle size={14} color="var(--accent-emerald)" /> {perk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Application Form */}
          <div id="career-form" style={{ 
            marginTop: '4.5rem',
            background: 'linear-gradient(135deg, rgba(20, 26, 42, 0.9), rgba(10, 13, 22, 0.95))',
            border: '1px solid var(--border-highlight)',
            borderRadius: '24px',
            padding: '3rem'
          }}>
            {applied ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--accent-emerald)' }}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Application Submitted!</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto' }}>
                  Thank you! Our hiring team will review your portfolio and reach out via email for an introductory technical conversation.
                </p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Submit Your Candidate Profile
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  Applying for: <strong style={{ color: 'var(--accent-cyan)' }}>{selectedRole || 'General Engineering Application'}</strong>
                </p>

                <form onSubmit={handleApply}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" required placeholder="Alex Mercer" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" required placeholder="alex@domain.com" className="form-input" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">GitHub or Portfolio URL *</label>
                      <input type="url" required placeholder="https://github.com/..." className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">LinkedIn Profile</label>
                      <input type="url" placeholder="https://linkedin.com/in/..." className="form-input" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tell Us About Something Cool You Built</label>
                    <textarea rows={3} placeholder="Highlights, hard technical problems you solved, favorite libraries..." className="form-textarea" />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}>
                    Send Application to Team GRK <Send size={16} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
