import React, { useState } from 'react';
import { 
  Rocket, 
  Sparkles, 
  CheckCircle, 
  Calculator, 
  Zap, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { agencyData } from '../data/agencyData';

export function GetStartedPage({ onOpenConsultation }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="section-tag animate-pulse-glow">
            <Rocket size={14} /> Launchpad & Onboarding
          </span>
          <h1 className="section-title">
            Kickstart Your Project with <span className="text-gradient">Team GRK</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Calculate budget requirements, select standard packages, or book an architecture discovery session to get started.
          </p>
        </div>
      </section>

      {/* Interactive Estimator Section */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Step 1: Estimate Scope</span>
            <h2 className="section-title">Interactive Project Configurator</h2>
          </div>

          <ProjectEstimator onBookConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* Fixed Packages Section */}
      <section className="section" style={{ background: 'rgba(10, 13, 20, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Step 2: Or Select a Package</span>
            <h2 className="section-title">Standardized Delivery Plans</h2>
          </div>

          <div className="pricing-grid">
            {agencyData.pricingTiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`pricing-card-modern ${tier.popular ? 'popular' : ''}`}
              >
                {tier.popular && <div className="popular-badge">Most Popular Choice</div>}
                
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{tier.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', minHeight: '44px' }}>
                    {tier.description}
                  </p>

                  <div className="pricing-price">
                    {tier.price} <span className="pricing-period">/ {tier.period}</span>
                  </div>

                  <div style={{ 
                    borderTop: '1px solid var(--border-subtle)', 
                    paddingTop: '1.75rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.85rem',
                    marginBottom: '2.5rem'
                  }}>
                    {tier.features.map((f, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem' }}>
                        <CheckCircle size={17} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: 'var(--text-main)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation({ serviceInterest: `${tier.name} Plan` })}
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', padding: '0.95rem' }}
                >
                  Select {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="section-header">
            <span className="section-tag">
              <HelpCircle size={14} /> Clear Answers
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {agencyData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: 'var(--text-main)',
                      fontSize: '1.05rem',
                      fontWeight: 600
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--accent-cyan)" /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.75rem 1.5rem 1.75rem', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
