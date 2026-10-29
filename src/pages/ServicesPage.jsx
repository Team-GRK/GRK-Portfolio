import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Code2, 
  Smartphone, 
  CloudLightning, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  PackageCheck 
} from 'lucide-react';
import { agencyData } from '../data/agencyData';

const ICON_MAP = {
  Code2,
  Smartphone,
  CloudLightning,
  Cpu,
  Palette,
  ShieldCheck
};

export function ServicesPage({ onOpenConsultation }) {
  const steps = [
    { num: "01", title: "Discovery & Blueprint", desc: "We map out system architecture, database schema, user journeys, and technical feasibility before touching a line of code." },
    { num: "02", title: "Agile Sprint Delivery", desc: "Bi-weekly sprints with live preview environments, transparent GitHub commit feeds, and rapid feature iterations." },
    { num: "03", title: "Rigorous QA & Security", desc: "Automated end-to-end tests, OWASP vulnerability scans, load stress-testing, and multi-device verification." },
    { num: "04", title: "Global Launch & Handoff", desc: "Zero-downtime deployment, domain configuration, automated backups, full source handover, and post-launch SLA monitoring." }
  ];

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Services Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="section-tag">
            <Layers size={14} /> Comprehensive Engineering Solutions
          </span>
          <h1 className="section-title">
            Enterprise-Grade <span className="text-gradient">Services & Tech Stacks</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            We provide full-lifecycle digital software engineering from concept to continuous deployment.
          </p>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="section" style={{ background: 'rgba(10, 13, 20, 0.4)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {agencyData.services.map((service, index) => {
              const ServiceIcon = ICON_MAP[service.icon] || Code2;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id}
                  className="glass-panel"
                  style={{ 
                    padding: '3rem', 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: '2.5rem',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div className="service-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-cyan)', margin: 0 }}>
                        <ServiceIcon size={28} />
                      </div>
                      <div>
                        <span className="service-badge" style={{ position: 'static' }}>{service.badge}</span>
                        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginTop: '0.25rem' }}>{service.title}</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                      {service.description}
                    </p>

                    <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.85rem' }}>
                      Key Capabilities Included:
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                      {service.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                          <CheckCircle size={16} color="var(--accent-emerald)" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(15, 21, 35, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '20px',
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Scope & Investment</span>
                        <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                          Starting {service.startingPrice}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <PackageCheck size={18} color="var(--accent-emerald)" /> Standard Deliverables:
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to="/get-started" 
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '0.85rem' }}
                    >
                      Commission this Service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Process Roadmap */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Zap size={14} /> The Delivery Framework
            </span>
            <h2 className="section-title">How We Turn Ideas into Code</h2>
            <p className="section-subtitle">
              A transparent, battle-tested 4-step delivery pipeline engineered to guarantee zero surprises and fast launches.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {steps.map((step, sIdx) => (
              <div key={sIdx} className="glass-panel" style={{ padding: '2.5rem 2rem', position: 'relative' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  color: 'rgba(99, 102, 241, 0.25)',
                  lineHeight: 1,
                  marginBottom: '1rem'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
