'use client';

import React, { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer';

export default function StrategicConsultingPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => { revealRefs.current.forEach((el) => { if (el) observer.unobserve(el); }); };
  }, []);

  const addRef = (el: HTMLElement | null, index: number) => { revealRefs.current[index] = el; };

  const subServices = [
    {
      title: 'Strategic Planning',
      description: 'Long-term business strategy development tailored to local market dynamics, competitive landscape, and regulatory environment.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on support from entity setup to operational launch, ensuring every milestone is met on schedule.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80',
      accent: 'from-rose-400 to-pink-500',
    },
    {
      title: 'Performance Monitoring',
      description: 'KPI tracking, milestone reviews, and course correction frameworks to keep your expansion on target.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
      accent: 'from-teal-400 to-emerald-500',
    },
    {
      title: 'Continuous Optimization',
      description: 'Ongoing advisory for scaling operations, improving efficiency, and capitalizing on market opportunities.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&q=80',
      accent: 'from-violet-400 to-purple-500',
    },
    {
      title: 'Success Metrics',
      description: 'Defining and measuring success criteria for market entry initiatives aligned with your business objectives.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
      accent: 'from-indigo-400 to-blue-500',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Market Analysis', description: 'Deep research into market dynamics, competition, regulation, and growth.' },
    { number: '02', title: 'Strategy Development', description: 'Tailored entry strategy with clear timelines and milestones.' },
    { number: '03', title: 'Entity & Ops Setup', description: 'Registration, compliance setup, and infrastructure launch.' },
    { number: '04', title: 'Go-to-Market', description: 'Team hiring, partnerships, and initial customer engagement.' },
    { number: '05', title: 'Scale & Optimize', description: 'Performance analysis and strategic pivots for growth.' },
  ];

  const stats = [
    { value: '150+', label: 'Consulting Engagements' },
    { value: '10+', label: 'Years Experience' },
    { value: '85%', label: 'Clients Return' },
  ];

  const benefits = [
    { title: 'Deep Market Knowledge', description: 'Decade of experience across India and Middle East markets with proven track records.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&q=80', accent: 'from-amber-400 to-orange-500' },
    { title: 'Hands-On Execution', description: 'Not just advisors — we work alongside your team to ensure successful implementation.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80', accent: 'from-rose-400 to-pink-500' },
    { title: 'Multi-Domain Expertise', description: 'Coverage across HR, compliance, operations, talent, and market intelligence.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80', accent: 'from-teal-400 to-emerald-500' },
    { title: 'End-to-End Support', description: 'From strategy through scaling, we support every phase of your expansion journey.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80', accent: 'from-violet-400 to-purple-500' },
    { title: 'Proven Results', description: '85% of clients engage us for additional projects, reflecting the value we deliver.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80', accent: 'from-indigo-400 to-blue-500' },
    { title: 'Local + Global Perspective', description: 'Understanding of global business practices combined with local market nuances.', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop&q=80', accent: 'from-cyan-400 to-sky-500' },
  ];

  const engagementModels = [
    {
      title: 'Project-Based',
      description: 'Defined scope and timeline for specific market entry or expansion initiatives.',
      features: ['Fixed timeline', 'Clear deliverables', 'Defined budget'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&q=80',
      accent: 'from-brand-400 to-amber-500',
    },
    {
      title: 'Retainer-Based',
      description: 'Ongoing strategic guidance and support as you scale operations.',
      features: ['Monthly advisory', 'Flexible scope', 'Ongoing support'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&q=80',
      accent: 'from-violet-400 to-purple-500',
    },
    {
      title: 'Hybrid',
      description: 'Combination of project work and ongoing advisory for complete support.',
      features: ['Strategic planning', 'Execution support', 'Continuous optimization'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
      accent: 'from-teal-400 to-emerald-500',
    },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      {/* ── HERO BANNER ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-midnight-900/85 to-indigo-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <div className="reveal" ref={(el) => addRef(el, 0)}>
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href="/services" className="hover:text-white transition-colors">Services</a>
                <span>/</span>
                <span className="text-white">Strategic Consulting</span>
              </nav>
              <span className="section-label-dark">Consulting Services</span>
            </div>
            <h1 className="reveal font-display text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg" ref={(el) => addRef(el, 1)}>Strategic Consulting</h1>
            <p className="reveal text-white/80 text-lg lg:text-xl max-w-2xl mx-auto drop-shadow" ref={(el) => addRef(el, 2)}>
              End-to-end consulting services from market research to implementation, ensuring successful business establishment.
            </p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-left group" ref={(el) => addRef(el, 3)}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Strategic Consulting" className="w-full object-cover aspect-square transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="reveal reveal-right space-y-8" ref={(el) => addRef(el, 4)}>
              <div>
                <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">Market Entry Done Right</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Market entry is complex. It requires deep market knowledge, flawless execution, and adaptive strategy. Our Strategic Consulting service guides you through every step — from initial market assessment through scaling operations — ensuring you establish a strong, sustainable presence in new markets.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4" ref={(el) => addRef(el, 5)}>
                {stats.map((stat, i) => (
                  <div key={i} className="group/stat relative p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 hover:border-brand-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-amber-400 transform origin-left scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-700" />
                    <div className="font-display text-3xl font-bold bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">{stat.value}</div>
                    <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER — Image Cards ── */}
      <section className="relative py-24 bg-slate-50">
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 6)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">What We Offer</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive consulting covering strategy, implementation, monitoring, optimization, and success metrics.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={(el) => addRef(el, 7)}>
            {subServices.map((service, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${service.accent} text-white text-xs font-semibold tracking-wide uppercase mb-2`}>{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className={`h-0.5 bg-gradient-to-r ${service.accent} transform origin-left transition-transform duration-500 ${hoveredCard === i ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — Timeline ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 8)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">Our Approach</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A five-stage consulting framework that guides your organization from strategy through scaled operations.</p>
          </div>
          <div className="relative" ref={(el) => addRef(el, 9)}>
            <div className="hidden lg:block absolute top-[60px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-400/20 via-brand-400 to-brand-400/20" />
            <div className="grid lg:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="group relative">
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-brand-400 flex items-center justify-center shadow-lg group-hover:bg-brand-400 group-hover:scale-110 transition-all duration-500">
                      <span className="font-display text-xl font-bold text-brand-400 group-hover:text-white transition-colors duration-500">{step.number}</span>
                    </div>
                  </div>
                  <div className="text-center p-5 rounded-xl bg-white border border-slate-200 group-hover:border-brand-300 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="font-display text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ATHENA — Image Cards ── */}
      <section className="relative py-24 bg-gradient-to-br from-brand-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 10)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">Why Choose ATHENA</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our unique blend of expertise, experience, and hands-on approach sets us apart.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={(el) => addRef(el, 11)}>
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                onMouseEnter={() => setHoveredBenefit(i)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="relative h-36 overflow-hidden">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-5">
                    <h3 className="font-display text-lg font-bold text-white drop-shadow-lg">{benefit.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
                <div className={`h-0.5 bg-gradient-to-r ${benefit.accent} transform origin-left transition-transform duration-500 ${hoveredBenefit === i ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS — Image Cards ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 12)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">Flexible Engagement Models</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We work with your timeline and budget to deliver the right consulting solution.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8" ref={(el) => addRef(el, 13)}>
            {engagementModels.map((model, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <img src={model.image} alt={model.title} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">{model.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-5">{model.description}</p>
                  <ul className="space-y-2.5">
                    {model.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.accent}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-0.5 bg-gradient-to-r ${model.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-16 bg-midnight-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 reveal" ref={(el) => addRef(el, 14)}>
          <h2 className="font-display text-4xl lg:text-5xl">Ready to Expand into New Markets?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Let&apos;s design a strategic plan that gets you established and growing in India or the Middle East.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">Book a consultation</a>
            <a href="mailto:hello@athena.com" className="btn-ghost">Email us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
