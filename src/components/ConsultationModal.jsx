import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ConsultationModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'Full-Stack Web Engineering',
    budget: '$3,000 - $7,000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 900);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0d121f',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '24px',
          maxWidth: '620px',
          width: '100%',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)'
          }}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: 'var(--accent-emerald)'
            }}>
              <CheckCircle2 size={40} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Consultation Request Received!
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, <strong>{formData.name || 'there'}</strong>! Our lead engineering architect will review your project requirements and email you back within <strong>24 business hours</strong> with a tailored proposal & discovery call invite.
            </p>
            <button
              onClick={onClose}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="section-tag">
                <Sparkles size={14} /> Discovery & Architecture
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.5rem' }}>
                Start Your Project with <span className="text-gradient">Team GRK</span>
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Tell us about your project vision. We'll assemble the right stack, roadmap, and pricing.
              </p>
            </div>

            {initialData && initialData.estimatedTotal && (
              <div style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '12px',
                padding: '0.85rem 1.25rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Selected Configuration Estimate:
                </span>
                <span style={{ fontWeight: 800, color: 'var(--accent-cyan)', fontSize: '1.15rem' }}>
                  ${initialData.estimatedTotal.toLocaleString()}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
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
                    placeholder="alex@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Service Focus</label>
                  <select
                    className="form-select"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  >
                    <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                    <option value="Mobile App Development">Mobile App (iOS/Android)</option>
                    <option value="Cloud & DevOps Architecture">Cloud & DevOps Architecture</option>
                    <option value="AI Integration & Automation">AI Integration & Automation</option>
                    <option value="UI/UX Product Redesign">UI/UX Product Redesign</option>
                    <option value="Security & Code Audit">Security & Code Audit</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Estimated Budget Range</label>
                  <select
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="Under $3,000">&lt; $3,000</option>
                    <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                    <option value="$7,000 - $15,000">$7,000 - $15,000</option>
                    <option value="$15,000+">$15,000+ (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details / Goals</label>
                <textarea
                  rows={4}
                  className="form-textarea"
                  placeholder="Share details about what you want to build, existing systems, deadlines, or desired features..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
              >
                {loading ? 'Submitting Application...' : 'Submit Consultation Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
