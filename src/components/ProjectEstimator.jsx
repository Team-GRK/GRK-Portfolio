import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Calculator, 
  Zap, 
  Clock, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ProjectEstimator({ onBookConsultation }) {
  const [platform, setPlatform] = useState('web');
  const [designLevel, setDesignLevel] = useState('premium');
  const [backendScope, setBackendScope] = useState('api');
  const [timeline, setTimeline] = useState('standard');
  const [aiFeatures, setAiFeatures] = useState(false);
  const [authAndPayments, setAuthAndPayments] = useState(true);

  // Calculate pricing estimates dynamically
  const platformRates = { web: 2000, mobile: 2800, both: 4200 };
  const designRates = { standard: 600, premium: 1200, custom3d: 2200 };
  const backendRates = { none: 0, api: 1000, enterprise: 2500 };
  const timelineMultipliers = { standard: 1.0, express: 1.25 };

  let total = (
    platformRates[platform] +
    designRates[designLevel] +
    backendRates[backendScope] +
    (aiFeatures ? 1500 : 0) +
    (authAndPayments ? 800 : 0)
  ) * timelineMultipliers[timeline];

  const handleLaunchEstimate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onBookConsultation) {
      onBookConsultation({
        platform,
        designLevel,
        backendScope,
        timeline,
        aiFeatures,
        authAndPayments,
        estimatedTotal: Math.round(total)
      });
    }
  };

  return (
    <div className="calculator-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div style={{ 
          background: 'rgba(56, 189, 248, 0.15)', 
          padding: '0.6rem', 
          borderRadius: '12px',
          color: 'var(--accent-cyan)'
        }}>
          <Calculator size={28} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Interactive Project Cost Estimator</h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)' }}>
            Configure your technical requirements to receive an instant transparent scope and investment forecast.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {/* Left Side: Configuration Options */}
        <div>
          {/* Target Platform */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              1. Primary Platform
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
              {[
                { id: 'web', label: 'Web App' },
                { id: 'mobile', label: 'Mobile (iOS/Android)' },
                { id: 'both', label: 'Web + Mobile' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPlatform(opt.id)}
                  className={`calc-option-box ${platform === opt.id ? 'selected' : ''}`}
                  style={{ fontSize: '0.85rem', fontWeight: 600, padding: '0.85rem 0.5rem' }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Design & UX Fidelity */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              2. Design System & UX Tier
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
              {[
                { id: 'standard', label: 'Clean Standard' },
                { id: 'premium', label: 'Agency Bespoke' },
                { id: 'custom3d', label: 'Ultra 3D / Motion' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setDesignLevel(opt.id)}
                  className={`calc-option-box ${designLevel === opt.id ? 'selected' : ''}`}
                  style={{ fontSize: '0.85rem', fontWeight: 600, padding: '0.85rem 0.5rem' }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Backend & API Complexity */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              3. Backend Architecture
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
              {[
                { id: 'none', label: 'Static / Headless' },
                { id: 'api', label: 'Custom API + DB' },
                { id: 'enterprise', label: 'Cloud Microservices' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setBackendScope(opt.id)}
                  className={`calc-option-box ${backendScope === opt.id ? 'selected' : ''}`}
                  style={{ fontSize: '0.85rem', fontWeight: 600, padding: '0.85rem 0.5rem' }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons Checkboxes */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              4. Advanced Add-Ons
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  cursor: 'pointer',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px'
                }}
              >
                <input 
                  type="checkbox" 
                  checked={aiFeatures} 
                  onChange={(e) => setAiFeatures(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#38bdf8' }}
                />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  Custom AI Agent / OpenAI Integration (+$1,500)
                </span>
              </label>

              <label 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  cursor: 'pointer',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px'
                }}
              >
                <input 
                  type="checkbox" 
                  checked={authAndPayments} 
                  onChange={(e) => setAuthAndPayments(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#38bdf8' }}
                />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  User Authentication + Stripe Payment Gateway (+$800)
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Side: Instant Real-Time Result Card */}
        <div style={{
          background: 'rgba(15, 21, 35, 0.8)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '18px',
          padding: '2.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                Estimated Investment
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 600 }}>
                Transparent Pricing
              </span>
            </div>

            <div style={{ margin: '1.5rem 0' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1 }}>
                ${Math.round(total).toLocaleString()}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Estimated delivery: <strong>{timeline === 'express' ? '2 - 3 Weeks (Express)' : '3 - 5 Weeks'}</strong>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Check size={16} color="var(--accent-emerald)" /> Full Intellectual Property & Source Code
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Check size={16} color="var(--accent-emerald)" /> 100% Responsive & Cross-Browser Tested
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Check size={16} color="var(--accent-emerald)" /> Automated CI/CD Pipeline & Live Staging
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Check size={16} color="var(--accent-emerald)" /> 30-Day Bug Free Guarantee & Free Support
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button
              onClick={handleLaunchEstimate}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '1rem', padding: '1rem' }}
            >
              <Zap size={18} /> Book Free Architecture Consultation
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.775rem', color: 'var(--text-dim)', marginTop: '0.75rem' }}>
              No credit card required. Receive a formal Statement of Work within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
