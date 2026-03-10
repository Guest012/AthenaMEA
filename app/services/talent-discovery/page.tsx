'use client';

import React, { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer';

export default function TalentDiscoveryPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      revealRefs.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const addRef = (el: HTMLElement | null, index: number) => {
    revealRefs.current[index] = el;
  };

  const offerings = [
    {
      title: 'Executive Search',
      description: 'C-suite and senior leadership hiring across India and Middle East with deep industry expertise and network reach.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop&q=80',
      bullets: ['CEO, CTO, CFO, and senior leader placements', 'Sector-specific expertise and network access', 'Confidential and discreet recruitment', 'Executive assessment and fit analysis'],
      accent: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Team Building',
      description: 'End-to-end team structuring from organizational design to onboarding and functional alignment.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80',
      bullets: ['Organizational design and structure', 'Role definition and skill mapping', 'Onboarding and integration programs', 'Team dynamics frameworks'],
      accent: 'from-rose-400 to-pink-500',
    },
    {
      title: 'Cultural Integration',
      description: 'Cross-cultural training and integration programs for diverse teams across geographies.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&q=80',
      bullets: ['Cross-cultural awareness training', 'Expatriate integration and adaptation', 'Mentoring and cultural coaching', 'Team cohesion activities'],
      accent: 'from-teal-400 to-emerald-500',
    },
    {
      title: 'Performance Management',
      description: 'KPI frameworks, review systems, and performance optimization to drive results and accountability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
      bullets: ['KPI development and goal setting', 'Performance review system design', 'Feedback and coaching frameworks', 'Optimization strategies'],
      accent: 'from-violet-400 to-purple-500',
    },
    {
      title: 'Retention Strategies',
      description: 'Comprehensive retention programs including compensation design, engagement initiatives, and career pathing.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=80',
      bullets: ['Competitive compensation benchmarking', 'Employee engagement surveys', 'Career development pathways', 'Leadership development programs', 'Succession planning frameworks'],
      accent: 'from-indigo-400 to-blue-500',
    },
  ];

  const stats = [
    { value: '500+', label: 'Placements' },
    { value: '92%', label: 'Retention Rate' },
    { value: '30-Day', label: 'Avg Fill Time' },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      {/* ── HERO BANNER ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-midnight-900/90 to-amber-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-1/3 right-1/3 w-[450px] h-[450px] rounded-full bg-rose-400/10 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <div className="reveal" ref={(el) => addRef(el, 0)}>
              <span className="section-label-dark">Services</span>
            </div>
            <h1 className="reveal font-display text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg" ref={(el) => addRef(el, 1)}>
              Talent Discovery
            </h1>
            <p className="reveal text-white/80 text-lg lg:text-xl max-w-2xl mx-auto drop-shadow" ref={(el) => addRef(el, 2)}>
              Connect with top-tier professionals and build high-performing teams through our extensive network and recruitment expertise.
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
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Diverse professionals in modern office"
                  className="w-full object-cover aspect-square transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="reveal reveal-right space-y-8" ref={(el) => addRef(el, 4)}>
              <div>
                <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">Build Your Dream Team</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The right talent is your competitive edge. Our Talent Discovery service connects you with exceptional professionals across India and the Middle East, ensuring you secure leaders and teams that drive growth, innovation, and results.
                </p>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4" ref={(el) => addRef(el, 5)}>
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="group/stat relative p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 hover:border-brand-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-amber-400 transform origin-left scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-700" />
                    <div className="font-display text-3xl font-bold bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-slate-600 text-sm mt-1">{stat.label}</p>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive talent solutions that cover everything from executive search to retention and performance management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={(el) => addRef(el, 7)}>
            {offerings.map((item, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white text-xs font-semibold tracking-wide uppercase mb-2`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2.5 text-sm text-slate-700 transition-all duration-300"
                        style={{
                          opacity: hoveredCard === i ? 1 : 0.7,
                          transform: hoveredCard === i ? 'translateX(0)' : 'translateX(-4px)',
                          transitionDelay: `${bi * 60}ms`,
                        }}
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.accent} flex-shrink-0`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`h-0.5 bg-gradient-to-r ${item.accent} transform origin-left transition-transform duration-500 ${hoveredCard === i ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE DELIVER — Timeline ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 8)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">How We Deliver</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven methodology that matches exceptional talent with the right opportunities and organizations.
            </p>
          </div>

          <div className="relative" ref={(el) => addRef(el, 9)}>
            <div className="hidden lg:block absolute top-[60px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-400/20 via-brand-400 to-brand-400/20" />

            <div className="grid lg:grid-cols-5 gap-6">
              {[
                { num: '01', title: 'Requirements Definition', desc: 'Deep collaboration on role requirements, culture fit, and expectations.', tag: '1 week' },
                { num: '02', title: 'Active Sourcing', desc: 'Targeted sourcing through our network to identify pre-qualified candidates.', tag: '2-3 weeks' },
                { num: '03', title: 'Assessment', desc: 'Comprehensive evaluations and competency interviews for alignment.', tag: '1-2 weeks' },
                { num: '04', title: 'Placement', desc: 'Offer facilitation, negotiation, and onboarding support.', tag: '1-2 weeks' },
                { num: '05', title: 'Success Monitoring', desc: 'Ongoing relationship management and retention support.', tag: 'Ongoing' },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-brand-400 flex items-center justify-center shadow-lg group-hover:bg-brand-400 group-hover:scale-110 transition-all duration-500">
                      <span className="font-display text-xl font-bold text-brand-400 group-hover:text-white transition-colors duration-500">{step.num}</span>
                    </div>
                  </div>
                  <div className="text-center p-5 rounded-xl bg-white border border-slate-200 group-hover:border-brand-300 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="font-display text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{step.desc}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold">{step.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-16 bg-gradient-to-r from-brand-400 to-amber-500 text-midnight-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 reveal" ref={(el) => addRef(el, 10)}>
          <h2 className="font-display text-4xl lg:text-5xl">Ready to build your dream team?</h2>
          <p className="text-lg text-midnight-900/80 max-w-2xl mx-auto">
            Let&apos;s connect you with top-tier talent across India and the Middle East.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 bg-midnight-900 text-white hover:bg-black">
              Schedule a discovery call
            </a>
            <a href="mailto:hello@athena.com" className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 border-2 border-midnight-900 bg-white/30 text-midnight-900 transition-all duration-300 hover:bg-white/50">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
