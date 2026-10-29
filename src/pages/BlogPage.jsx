import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { agencyData } from '../data/agencyData';

export function BlogPage() {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="section-tag">
            <BookOpen size={14} /> Engineering Insights & Articles
          </span>
          <h1 className="section-title">
            The <span className="text-gradient">Team GRK</span> Tech Dispatch
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Practical engineering blueprints, architecture breakdowns, UI/UX psychology, and lessons learned building scalable digital products.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section" style={{ background: 'rgba(10, 13, 20, 0.4)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {agencyData.blogPosts.map((post) => (
              <article key={post.id} className="project-card-featured" style={{ cursor: 'pointer' }}>
                <div className="project-preview" style={{ height: '220px' }}>
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="project-badge-pill">{post.category}</span>
                </div>

                <div className="project-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.85rem', lineHeight: 1.35 }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65, flexGrow: 1, marginBottom: '1.5rem' }}>
                    {post.summary}
                  </p>

                  <div style={{ 
                    borderTop: '1px solid var(--border-subtle)', 
                    paddingTop: '1rem',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <User size={15} color="var(--accent-cyan)" /> By {post.author}
                    </span>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
