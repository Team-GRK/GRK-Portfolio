export const agencyData = {
  name: "Team GRK",
  tagline: "Architects of Next-Generation Digital Experiences",
  shortDesc: "We build high-performance web applications, scalable cloud microservices, mobile apps, and custom AI systems for ambitious startups and enterprises worldwide.",
  stats: [
    { label: "Successful Projects", value: "85+", suffix: "" },
    { label: "Client Satisfaction", value: "99.4", suffix: "%" },
    { label: "Uptime & Reliability", value: "99.9", suffix: "%" },
    { label: "Engineers & Designers", value: "15+", suffix: "" }
  ],
  services: [
    {
      id: "fullstack",
      title: "Full-Stack Web Engineering",
      badge: "Flagship",
      description: "Modern, reactive web applications built with React, Next.js, Node.js, and high-performance databases tailored for speed and SEO.",
      icon: "Code2",
      features: ["Next.js & React 19 Architectures", "Type-safe APIs (GraphQL & REST)", "Edge Deployment & Ultra-low Latency", "Headless CMS Integration"],
      startingPrice: "$2,499",
      deliverables: ["Production-ready Git Repo", "Automated Testing Suite", "Responsive Design System", "Full SEO & Lighthouse 95+"]
    },
    {
      id: "mobile",
      title: "Cross-Platform Mobile Apps",
      badge: "Popular",
      description: "Native-grade iOS & Android applications engineered with React Native and Flutter with buttery smooth 60fps animations.",
      icon: "Smartphone",
      features: ["Offline-first Architecture", "Push Notifications & Realtime Sync", "App Store & Play Store Publishing", "Biometric Authentication"],
      startingPrice: "$3,199",
      deliverables: ["iOS TestFlight & App Store Builds", "Android AAB & Play Console", "Push Notification Setup", "Deep Linking & Analytics"]
    },
    {
      id: "cloud-devops",
      title: "Cloud Infrastructure & DevOps",
      badge: "Enterprise",
      description: "Automated CI/CD pipelines, Dockerized microservices, Kubernetes clusters, and zero-downtime serverless environments.",
      icon: "CloudLightning",
      features: ["AWS, GCP & Azure Architecture", "Kubernetes & Docker Orchestration", "Terraform Infrastructure as Code", "Security Hardening & Monitoring"],
      startingPrice: "$1,899",
      deliverables: ["Terraform Scripts", "GitHub Actions CI/CD Pipeline", "Grafana & Prometheus Dashboards", "Disaster Recovery Playbook"]
    },
    {
      id: "ai-solutions",
      title: "AI Integration & Automation",
      badge: "Trending",
      description: "Custom LLM integrations, retrieval-augmented generation (RAG), intelligent workflow agents, and smart automated chatbots.",
      icon: "Cpu",
      features: ["Custom LLM & OpenAI Agent Setup", "Semantic Search & Vector DBs", "Workflow & Robotic Automation", "Automated Analytics Insights"],
      startingPrice: "$2,999",
      deliverables: ["Fine-tuned Model or RAG Pipeline", "Vector DB (Pinecone/Milvus)", "Admin Evaluation Playground", "Automated API Fallbacks"]
    },
    {
      id: "uiux-design",
      title: "UI/UX & Product Design",
      badge: "Creative",
      description: "High-fidelity Figma prototypes, design systems, user journeys, micro-interactions, and conversion-optimized interfaces.",
      icon: "Palette",
      features: ["Interactive Figma Prototypes", "Scalable Design System Tokens", "Accessibility (WCAG 2.1)", "User Testing & Wireframing"],
      startingPrice: "$1,499",
      deliverables: ["Component Design System Tokens", "High-fidelity Interactive Prototype", "UX Audit & Journey Maps", "Developer Handoff Guide"]
    },
    {
      id: "cybersecurity",
      title: "Security & Code Auditing",
      badge: "Essential",
      description: "Vulnerability scanning, penetration audits, compliance reviews, and database encryption to safeguard critical business assets.",
      icon: "ShieldCheck",
      features: ["End-to-End OWASP Security Audits", "Data Encryption & Tokenization", "API Rate-limiting & DDoS Shield", "Compliance Readiness (GDPR/HIPAA)"],
      startingPrice: "$1,699",
      deliverables: ["Vulnerability Severity Report", "Code Remediation PRs", "Penetration Test Proof", "Security Best-practices Certificate"]
    }
  ],
  projects: [
    {
      id: "fintech-pro",
      title: "NovaPay - Global Fintech Core",
      category: "Full-Stack",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
      description: "Enterprise multi-currency payment processing platform with automated fraud detection and sub-second settlement.",
      client: "Nova Financial Corp, UK",
      impact: "+320% Transaction throughput",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe API", "Docker"]
    },
    {
      id: "health-ai",
      title: "VitalPulse - Clinical Telehealth AI",
      category: "AI & Cloud",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      description: "HIPAA-compliant telemedicine suite featuring real-time diagnostic synthesis and patient telemetry monitoring.",
      client: "MedHealth Global, USA",
      impact: "Reduced diagnostic wait time by 65%",
      tags: ["Python", "FastAPI", "React", "WebRTC", "OpenAI"]
    },
    {
      id: "ecommerce-luxe",
      title: "Aura Haute - Next-Gen E-Commerce",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      description: "Ultra-fast headless eCommerce flagship with 3D product visualizer and dynamic custom checkout experience.",
      client: "Aura Apparel, France",
      impact: "Conversion rate increased to 4.8%",
      tags: ["Next.js", "TailwindCSS", "Shopify Storefront API", "Three.js"]
    },
    {
      id: "logistics-hub",
      title: "CargoPulse - Real-time Fleet Tracking",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
      description: "Cross-platform mobile application managing 5,000+ logistics trucks with offline GPS tracking and geo-fencing.",
      client: "Titan Logistics, Canada",
      impact: "Cut fuel wastage by $240,000/yr",
      tags: ["React Native", "Mapbox", "Go (Golang)", "Kafka"]
    },
    {
      id: "saas-analytics",
      title: "MetricFlow - B2B Business Intelligence",
      category: "Full-Stack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      description: "High-volume data visualization dashboard processing 100M+ monthly events with custom report builder.",
      client: "CloudScale Analytics, Germany",
      impact: "Processed 12B data points reliably",
      tags: ["React", "TypeScript", "ClickHouse", "GraphQL"]
    },
    {
      id: "crypto-vault",
      title: "Zenith - Non-Custodial Multi-Chain Wallet",
      category: "AI & Cloud",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
      description: "Secure, audited multi-chain crypto asset management portal with biometric hardware authorization.",
      client: "Zenith Labs, Singapore",
      impact: "$45M+ Assets safely secured",
      tags: ["Web3.js", "React", "Rust", "Solidity"]
    }
  ],
  team: [
    {
      name: "RK Saykot",
      role: "Lead Architect & Full-Stack Engineer",
      image: "/images/RK Saykot.png",
      fallbackImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
      bio: "Expert in distributed systems, high-scale React/Node.js architecture, and cloud deployment pipelines with 6+ years of building production applications.",
      skills: ["React / Next.js", "Node.js & Python", "System Architecture", "Cloud Infrastructure"],
      portfolio: "https://rksaykot.pro.bd",
      social: {
        github: "https://github.com/rksaykot",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "GR Golam Rabbi",
      role: "Mobile Lead & DevOps Engineer",
      image: "/images/GR.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
      bio: "Specialist in high-velocity mobile engineering across React Native and Flutter, combined with robust CI/CD and Kubernetes container orchestration.",
      skills: ["React Native", "DevOps & CI/CD", "Docker / K8s", "Database Optimization"],
      portfolio: null,
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    }
  ],
  blogPosts: [
    {
      id: "react-19-server-actions",
      title: "Architecting Ultra-Fast Enterprise Web Apps with React 19 & Next.js",
      category: "Engineering",
      date: "October 2026",
      readTime: "6 min read",
      author: "RK Saykot",
      summary: "Explore how compiler optimizations, streaming SSR, and server actions drastically diminish bundle payloads and latency.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "ai-agents-production",
      title: "Building Production-Grade AI Agents with Retrieval Augmented Generation (RAG)",
      category: "AI & ML",
      date: "September 2026",
      readTime: "8 min read",
      author: "Team GRK",
      summary: "A practical guide to avoiding hallucinations, optimizing vector database chunking strategies, and securing client enterprise data.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "micro-interactions-ux",
      title: "The Psychology of Micro-Interactions: Transforming Boring SaaS into Addictive Tools",
      category: "Design",
      date: "August 2026",
      readTime: "5 min read",
      author: "Shawon",
      summary: "How subtle haptics, spring curves, and visual responsiveness elevate brand authority and reduce perceived user friction.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "zero-downtime-k8s",
      title: "Zero-Downtime Deployments with Docker, Kubernetes, and Canary Releases",
      category: "DevOps",
      date: "July 2026",
      readTime: "7 min read",
      author: "GR",
      summary: "Step-by-step blueprint for automating container rolling updates and blue-green traffic switching without dropping a single active websocket.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop"
    }
  ],
  careers: [
    {
      id: "senior-fullstack-dev",
      title: "Senior Full-Stack Engineer (React / Node / Go)",
      department: "Engineering",
      type: "Full-Time (Remote)",
      location: "Worldwide",
      experience: "4+ years",
      description: "Join our core squad delivering top-tier web applications for funded startups. You'll architect APIs, write idiomatic TypeScript, and mentor team members.",
      perks: ["Competitive Global Salary", "Flexible Remote Hours", "Annual Learning & Tech Budget", "Paid Team Offsites"]
    },
    {
      id: "senior-uiux-designer",
      title: "Product Designer & UI/UX Specialist",
      department: "Design",
      type: "Full-Time (Remote)",
      location: "Worldwide",
      experience: "3+ years",
      description: "Drive the visual language and interaction paradigms across our web and mobile client engagements with Figma, motion specs, and design systems.",
      perks: ["Top-of-the-line Hardware Stipend", "Flexible Vacation Policy", "Creative Freedom", "Health & Wellness Allowance"]
    },
    {
      id: "cloud-devops-architect",
      title: "DevOps & Cloud Infrastructure Engineer",
      department: "Cloud Operations",
      type: "Full-Time or Contract",
      location: "Worldwide",
      experience: "3+ years",
      description: "Lead AWS/GCP architecture, Kubernetes clusters, and automated CI/CD pipelines ensuring high-availability and military-grade security.",
      perks: ["Cloud Certifications Sponsored", "Remote-first culture", "Performance Bonuses", "Stock Options in Incubated Products"]
    }
  ],
  pricingTiers: [
    {
      id: "startup",
      name: "Starter MVP",
      price: "$2,499",
      period: "per project",
      popular: false,
      description: "Perfect for early-stage founders and small businesses looking to launch a polished digital product rapidly.",
      features: [
        "Full Responsive Web App (5-7 Pages)",
        "React + Modern Tailwind / CSS Architecture",
        "Contact & Lead Generation Integration",
        "SEO Optimization & Social Metadata",
        "Performance Auditing (95+ Lighthouse)",
        "2 Weeks of Dedicated Post-Launch Support"
      ]
    },
    {
      id: "scale",
      name: "Growth Agency",
      price: "$4,999",
      period: "per project",
      popular: true,
      description: "Our most requested comprehensive package for scaling startups and modern enterprise products.",
      features: [
        "Full-Stack Web App or Cross-Platform Mobile",
        "Custom Backend API & Database Design",
        "Interactive Animations & Micro-Interactions",
        "Payment & Authentication Gateway Integration",
        "CMS or Admin Dashboard Panel",
        "Automated CI/CD Deployment Pipeline",
        "45 Days Premium SLA Support"
      ]
    },
    {
      id: "enterprise",
      name: "Custom Enterprise",
      price: "$8,999+",
      period: "custom scope",
      popular: false,
      description: "Dedicated full-cycle software engineering squad delivering high-security, custom AI and high-load systems.",
      features: [
        "Dedicated Multi-Disciplinary Agile Team",
        "AI Agents, LLM Fine-Tuning & Vector Search",
        "Microservices Architecture & Kubernetes",
        "Comprehensive OWASP Security & Pen-testing",
        "24/7 Priority Emergency Support & SLA",
        "Complete IP Ownership & Source Repositories"
      ]
    }
  ],
  testimonials: [
    {
      quote: "Team GRK transformed our legacy portal into an ultra-fast, modern web application. Our customer onboarding conversions jumped by 140% in just two weeks.",
      author: "Marcus Vance",
      company: "CTO, NextSphere Cloud",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
      stars: 5
    },
    {
      quote: "The visual quality, attention to detail, and micro-interactions they engineered blew our board of directors away. Truly top-tier engineering talent.",
      author: "Elena Rostova",
      company: "Founder & CEO, Horizon BioTech",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      stars: 5
    },
    {
      quote: "Delivered on time, on budget, and with zero downtime during deployment. Team GRK is our go-to partner for all major development initiatives.",
      author: "David Chen",
      company: "VP Product, FinEdge Systems",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
      stars: 5
    }
  ],
  faqs: [
    {
      q: "How long does a typical software project take with Team GRK?",
      a: "Our typical MVP delivery timeframe is 2 to 4 weeks. Larger custom enterprise platforms generally span 6 to 12 weeks. We follow strict agile sprints with weekly live demo milestones."
    },
    {
      q: "Do we retain full ownership of the source code and assets?",
      a: "Yes, 100%. Upon project completion, all intellectual property, source code, repository rights, and design assets are fully transferred to your company."
    },
    {
      q: "Can you assist with maintenance and post-launch feature rollouts?",
      a: "Absolutely. We offer dedicated SLA retainer options covering 24/7 uptime monitoring, security patching, cloud optimization, and ongoing feature iterations."
    },
    {
      q: "What tech stack do you recommend for our project?",
      a: "We tailor tech stacks to your specific scalability needs. Typically, we recommend React/Next.js and TypeScript on the frontend, with Node.js/Go/Python backends and PostgreSQL/Redis for data layers."
    }
  ]
};
