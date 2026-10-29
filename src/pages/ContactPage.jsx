import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  PhoneCall, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="section-tag">
            <Mail size={14} /> Direct Technical Contact
          </span>
          <h1 className="section-title">
            Let's Talk <span className="text-gradient">Engineering & Growth</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
            Have a project in mind, an existing codebase audit, or need dedicated software engineering bandwidth? Reach our partner team directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 26, 42, 0.85), rgba(10, 13, 22, 0.95))',
            border: '1px solid var(--border-highlight)',
            borderRadius: '28px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
              <div>
                <span className="section-tag" style={{ marginBottom: '1rem' }}>
                  <Sparkles size={14} /> Rapid Response Guarantee
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, margin: '0.75rem 0 1.5rem 0' }}>
                  We Respond in Under <span className="text-gradient">24 Hours</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  When you contact Team GRK, you won't get caught in endless sales reps. You speak directly with lead architects and engineering directors who can evaluate scope on call #1.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Direct Email</span>
                      <strong style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>teamgrk.agency@gmail.com</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Global Operating Base</span>
                      <strong style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>Dhaka, Bangladesh & Distributed Teams</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Operating Coverage</span>
                      <strong style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>US, European & APAC Timezone Friendly</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <div style={{ width: '65px', height: '65px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--accent-emerald)' }}>
                      <CheckCircle size={36} />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Message Dispatched!</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      Thank you, <strong>{formData.name || 'there'}</strong>! Your message is in our inbox. An engineering partner will reply to {formData.email} promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah Connor"
                          className="form-input"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@enterprise.com"
                          className="form-input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Scope / Subject</label>
                      <input
                        type="text"
                        placeholder="e.g. Next.js SaaS MVP or Mobile App"
                        className="form-input"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message Details</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your requirements, deadlines, technical constraints, or budget..."
                        className="form-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                      Send Inquiry Directly <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
