'use client';

import React, { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const capabilities = [
    {
      title: 'Market Entry Strategy',
      description: 'Practical, region-specific plans that get you operational fast and positioned for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=350&fit=crop&q=80',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Leadership Hiring',
      description: 'CXO and senior leaders who can deliver results from day one and drive your market expansion.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=350&fit=crop&q=80',
      accent: 'from-rose-400 to-pink-500',
    },
    {
      title: 'Operations Setup',
      description: 'GCCs, R&D hubs, manufacturing units, or retail networks — we\'ve done it all with precision.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop&q=80',
      accent: 'from-teal-400 to-emerald-500',
    },
    {
      title: 'Market Intelligence',
      description: 'Clear, actionable data on talent pools, competition, and pay benchmarks for informed decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&q=80',
      accent: 'from-violet-400 to-purple-500',
    },
  ];

  const values = [
    {
      title: 'Regional Expertise',
      description: 'Deep understanding of India and Middle East markets, regulations, and business culture.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop&q=80',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Trusted Partnerships',
      description: 'Building lasting relationships from boardrooms in New York to innovation hubs in Dubai and Bengaluru.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&q=80',
      accent: 'from-rose-400 to-pink-500',
    },
    {
      title: 'Results-Driven',
      description: 'We don\'t just help you arrive — we ensure you arrive ready to thrive and scale.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80',
      accent: 'from-teal-400 to-emerald-500',
    },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      {/* ── HERO BANNER ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-midnight-900/90 to-brand-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-brand-400/12 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <div className="reveal" ref={(el) => addRef(el, 0)}>
              <span className="section-label-dark">About Us</span>
            </div>
            <h1 className="reveal font-display text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg" ref={(el) => addRef(el, 1)}>
              Opening Doors to India &amp; the Middle East
            </h1>
            <p className="reveal text-white/80 text-lg lg:text-xl max-w-2xl mx-auto drop-shadow" ref={(el) => addRef(el, 2)}>
              For over a decade, we&apos;ve been the go-to partner for global businesses looking to set up and scale in India and the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-left group" ref={(el) => addRef(el, 3)}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Global market entry strategy"
                  className="w-full object-cover aspect-square transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="reveal reveal-right space-y-8" ref={(el) => addRef(el, 4)}>
              <div>
                <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To help businesses enter and scale in India and the Middle East with confidence, by delivering strategic market entry, top-tier leadership talent, and long-term growth support.
                </p>
              </div>

              {/* Values — Image mini-cards instead of icon blocks */}
              <div className="space-y-4" ref={(el) => addRef(el, 5)}>
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="group/val flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-md">
                      <img
                        src={v.image}
                        alt={v.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/val:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-slate-900 group-hover/val:text-brand-600 transition-colors">{v.title}</h3>
                      <p className="text-slate-600 text-sm mt-0.5">{v.description}</p>
                    </div>
                    {/* Animated accent line */}
                    <div className={`w-1 h-0 group-hover/val:h-10 rounded-full bg-gradient-to-b ${v.accent} transition-all duration-500`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO BEST — Image Cards ── */}
      <section className="relative py-24 bg-slate-50">
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 6)}>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">What We Do Best</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions that combine sharp market insights with hands-on, results-driven execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={(el) => addRef(el, 7)}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image with zoom */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className={`inline-block px-2.5 py-0.5 rounded-full bg-gradient-to-r ${cap.accent} text-white text-[10px] font-semibold tracking-wide uppercase mb-1.5`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white drop-shadow-lg">
                      {cap.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{cap.description}</p>
                </div>

                <div className={`h-0.5 bg-gradient-to-r ${cap.accent} transform origin-left transition-transform duration-500 ${hoveredCard === i ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-16 bg-midnight-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 reveal" ref={(el) => addRef(el, 8)}>
          <h2 className="font-display text-4xl lg:text-5xl">Ready to explore your next market?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Let&apos;s design an entry plan you can execute in the next 100 days.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">Book an intro call</a>
            <a href="mailto:hello@athena.com" className="btn-ghost">Email us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
