import React from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-tag">
            <Lock size={14} /> Security & Data
          </span>
          <h1 className="section-title">Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Last updated: October 2026. Team GRK values client privacy and transparency above all.
          </p>

          <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                1. Information We Collect
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                We collect personal identifiers (such as name, email address, company name, and phone number) only when voluntarily provided via our contact forms, interactive project calculators, or job applications.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                2. How We Use Your Information
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                The data collected is utilized solely to prepare technical proposals, communicate regarding project deliverables, provide architectural feedback, and fulfill contractual software engineering obligations. We never sell, lease, or monetize client contact data.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                3. Confidentiality & Non-Disclosure (NDA)
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                All proprietary concepts, business logic, customer databases, and software roadmaps shared with Team GRK are treated as strictly confidential under industry-standard mutual Non-Disclosure Agreements (NDAs).
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                4. Data Security Standards
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                We employ TLS 1.3 encryption in transit, strict RBAC permissions, encrypted cloud drives, and multi-factor authentication across all agency tools and production repositories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function TermsPage() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-tag">
            <FileText size={14} /> Legal Terms & Engagement
          </span>
          <h1 className="section-title">Terms of Service</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Last updated: October 2026. Standard terms of engagement for Team GRK software clients.
          </p>

          <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                1. Intellectual Property (IP) Ownership
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Upon settlement of agreed invoice milestones, 100% of all custom source code, documentation, designs, and architectural assets created for your project are assigned irrevocably to your organization. Team GRK claims zero residual ownership on client custom IP.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                2. Sprints & Scope of Work
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Engineering work is conducted according to agreed Statements of Work (SOW) and agile sprints. Changes in scope are documented, estimated, and approved mutually prior to implementation.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                3. Warranty & Bug-Free Guarantee
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Every deliverable includes a 30-day post-launch warranty period during which any defects or bugs deviating from technical acceptance criteria are remediated at zero additional cost.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                4. Liability & Jurisdiction
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Agreements are executed with mutual limitation of liability standard for professional IT consulting services and governed under applicable corporate jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
