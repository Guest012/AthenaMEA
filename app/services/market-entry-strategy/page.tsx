'use client';

import React, { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer';

export default function MarketEntryStrategyPage() {
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
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      revealRefs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const addRef = (el: HTMLElement | null, index: number) => {
    revealRefs.current[index] = el;
  };

  const offerings = [
    {
      title: 'Feasibility Study',
      description: 'In-depth analysis of market viability, demand assessment, and entry barriers to ensure your market choice is sound.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      bullets: ['Market size and growth projections', 'Customer demand and willingness to pay', 'Entry barriers and risk assessment'],
      accent: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Competitive Benchmarking',
      description: 'Detailed competitor landscape mapping, pricing analysis, and positioning strategy to help you stand out.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
      bullets: ['Competitor identification and profiling', 'Pricing and margin benchmarking', 'Differentiation and positioning strategy'],
      accent: 'from-rose-400 to-pink-500',
    },
    {
      title: 'Talent Topography',
      description: 'Mapping available talent pools, skill availability, and hiring landscape to build your local workforce.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80',
      bullets: ['Talent availability and skill mapping', 'Salary benchmarking and compensation ranges', 'Hiring strategy and recruitment roadmap'],
      accent: 'from-teal-400 to-emerald-500',
    },
    {
      title: 'Location Analysis',
      description: 'Strategic evaluation of optimal business locations, infrastructure, and costs for your operations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80',
      bullets: ['Site selection criteria and assessment', 'Infrastructure and logistics evaluation', 'Cost structure and rent benchmarking'],
      accent: 'from-violet-400 to-purple-500',
    },
    {
      title: 'Regulatory & Compliance Advisory',
      description: 'Navigate complex regulatory frameworks across India and the Middle East with confidence and clarity.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
      bullets: ['Company registration and licensing', 'Tax and accounting frameworks', 'Labor laws and employment rules', 'Intellectual property protection', 'Import/export compliance'],
      accent: 'from-indigo-400 to-blue-500',
    },
  ];

  const stats = [
    { value: '20+', label: 'Markets Analyzed', suffix: '' },
    { value: '95%', label: 'Success Rate', suffix: '' },
    { value: '100+', label: 'Entry Strategies Delivered', suffix: '' },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      {/* ── SECTION 1: HERO BANNER ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-midnight-900/85 to-purple-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-400/10 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <div className="reveal" ref={(el) => addRef(el, 0)}>
              <span className="section-label-dark">Services</span>
            </div>
            <h1 className="reveal font-display text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg" ref={(el) => addRef(el, 1)}>
              Market Entry Strategy
            </h1>
            <p className="reveal text-white/80 text-lg lg:text-xl max-w-2xl mx-auto drop-shadow" ref={(el) => addRef(el, 2)}>
              Comprehensive market analysis and entry strategies tailored for India and Middle East markets with regulatory compliance guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with parallax hover */}
            <div className="reveal reveal-left group" ref={(el) => addRef(el, 3)}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Market analysis and business districts"
                  className="w-full object-cover aspect-square transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="reveal reveal-right space-y-8" ref={(el) => addRef(el, 4)}>
              <div>
                <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">Strategic Market Entry</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Entering new markets requires more than enthusiasm — it demands precision, data-backed insights, and a clear roadmap. Our Market Entry Strategy service equips you with everything needed to establish operations, navigate regulatory frameworks, and position for sustainable growth in India and the Middle East.
                </p>
              </div>

              {/* Animated Stats Bar */}
              <div className="grid grid-cols-3 gap-4" ref={(el) => addRef(el, 5)}>
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="group/stat relative p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 hover:border-brand-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                  >
                    {/* Animated gradient accent */}
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

      {/* ── SECTION 3: WHAT WE OFFER — Image Cards with Zoom ── */}
      <section className="relative py-24 bg-slate-50">
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 6)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">What We Offer</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our comprehensive service covers every dimension of market entry, from initial analysis to execution readiness.
            </p>
          </div>

          {/* Image-based offering cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={(el) => addRef(el, 7)}>
            {offerings.map((item, i) => (
              <div
                key={i}
                className={`svc-card group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image with zoom */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />
                  {/* Floating title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white text-xs font-semibold tracking-wide uppercase mb-2`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Animated bullet reveal */}
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

                {/* Bottom accent bar that animates on hover */}
                <div className={`h-0.5 bg-gradient-to-r ${item.accent} transform origin-left transition-transform duration-500 ${hoveredCard === i ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW WE DELIVER — Interactive Timeline ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 8)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">How We Deliver</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our proven methodology ensures comprehensive analysis and actionable strategies in every engagement.
            </p>
          </div>

          {/* Process Steps — Horizontal timeline */}
          <div className="relative" ref={(el) => addRef(el, 9)}>
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-400/20 via-brand-400 to-brand-400/20" />

            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Market Research & Analysis', desc: 'Thorough primary and secondary research, stakeholder interviews, and competitive dynamics assessment.', tag: '2-3 weeks' },
                { num: '02', title: 'Strategy Development', desc: 'Synthesize findings into a comprehensive entry strategy with market positioning and risk mitigation.', tag: '2-3 weeks' },
                { num: '03', title: 'Regulatory Roadmap', desc: 'Complete regulatory journey mapping with timelines, documentation, and compliance checkpoints.', tag: 'Ongoing' },
                { num: '04', title: 'Execution & Support', desc: 'Implementation playbooks, timeline recommendations, and ongoing advisory during the launch phase.', tag: '3-6 months' },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  {/* Circle node */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-brand-400 flex items-center justify-center shadow-lg group-hover:bg-brand-400 group-hover:scale-110 transition-all duration-500">
                      <span className="font-display text-xl font-bold text-brand-400 group-hover:text-white transition-colors duration-500">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="text-center p-6 rounded-xl bg-white border border-slate-200 group-hover:border-brand-300 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{step.desc}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold">
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CTA BANNER ── */}
      <section className="relative py-16 bg-gradient-to-r from-brand-400 to-amber-500 text-midnight-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 reveal" ref={(el) => addRef(el, 10)}>
          <h2 className="font-display text-4xl lg:text-5xl">Ready to enter your next market?</h2>
          <p className="text-lg text-midnight-900/80 max-w-2xl mx-auto">
            Let&apos;s design a tailored market entry strategy and get you operational with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 bg-midnight-900 text-white hover:bg-black">
              Book a consultation
            </a>
            <a href="mailto:hello@athena.com" className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 border-2 border-midnight-900 bg-white/30 text-midnight-900 transition-all duration-300 hover:bg-white/50">
              Email us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
