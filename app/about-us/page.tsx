'use client';

import React, { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer';

/* ─── Animated Counter ─── */
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startTime) / 2000, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

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

  const milestones = [
    { year: '2010', title: 'Founded in India', description: 'Established as a pioneering executive search practice in Gurugram, with a vision to transform how global companies find leadership talent in emerging markets.' },
    { year: '2014', title: 'Expanded to the Middle East', description: 'Opened our Dubai office to serve the growing demand from global businesses entering the UAE, Saudi Arabia, and the wider GCC region.' },
    { year: '2017', title: 'Global Network Partnership', description: 'Joined a leading international network of executive search firms spanning 45+ countries, extending our reach across APAC, EMEA, and the Americas.' },
    { year: '2020', title: '500+ Engagements Milestone', description: 'Crossed 500 successful engagements across executive search, market entry advisory, and consulting — serving Fortune 100 companies to PE-backed ventures.' },
    { year: '2023', title: 'ATHENA MEA Launched', description: 'Formalized our market entry advisory practice as ATHENA MEA — a dedicated offering built on 13+ years of placing leaders and advising businesses expanding into India and the Middle East.' },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      {/* ── HERO BANNER ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-midnight-900/90 to-brand-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div aria-hidden className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-brand-400/12 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <div className="reveal" ref={(el) => addRef(el, 0)}>
              <span className="section-label-dark">About Us</span>
            </div>
            <h1 className="reveal font-display text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg" ref={(el) => addRef(el, 1)}>
              15+ Years of Opening Doors to India &amp; the Middle East
            </h1>
            <p className="reveal text-white/80 text-lg lg:text-xl max-w-2xl mx-auto drop-shadow" ref={(el) => addRef(el, 2)}>
              Born from a pioneering executive search practice, built on real results for global businesses entering high-growth markets.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-left group" ref={(el) => addRef(el, 3)}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="ATHENA MEA team in strategy session"
                  className="w-full object-cover aspect-square transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="reveal reveal-right space-y-6" ref={(el) => addRef(el, 4)}>
              <div>
                <span className="section-label">Our Story</span>
                <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mt-4 mb-6">Built on a Legacy of Executive Excellence</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    ATHENA MEA didn&apos;t start as a consulting brand on a whiteboard. It grew organically from over a decade of placing C-suite leaders and building leadership teams for global companies entering India and the Middle East.
                  </p>
                  <p>
                    Founded in 2010, our practice began with a bold vision: to bring world-class executive search to emerging markets with the rigour, ethics, and depth that the world&apos;s best companies expect. Over the years, as we placed hundreds of senior leaders — CFOs, COOs, MDs, CHROs — for companies expanding into India and the UAE, a pattern emerged.
                  </p>
                  <p>
                    Our clients didn&apos;t just need talent. They needed market intelligence, location advisory, compensation benchmarking, operational setup support, and a trusted partner who understood both the global boardroom and the local landscape. ATHENA MEA was born from that need.
                  </p>
                  <p className="text-slate-900 font-semibold">
                    Today, we combine 15+ years of executive search expertise with hands-on market entry advisory — helping global businesses not just arrive, but arrive ready to lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS ── */}
      <section className="relative py-20 bg-gradient-to-br from-midnight-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-400/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal" ref={(el) => addRef(el, 5)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-brand-400 mb-4">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              Our Track Record
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">Numbers That Speak</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10" ref={(el) => addRef(el, 6)}>
            {[
              { value: 15, suffix: '+', label: 'Years of Experience', sublabel: 'Since 2010' },
              { value: 650, suffix: '+', label: 'Successful Engagements', sublabel: 'Executive Search & Advisory' },
              { value: 200, suffix: '+', label: 'Clients Served', sublabel: 'Fortune 100 to PE-backed' },
              { value: 45, suffix: '+', label: 'Countries Covered', sublabel: 'Via global network' },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm font-semibold text-white/70">{s.label}</div>
                <div className="text-xs text-white/40 mt-1">{s.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Search-specific stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" ref={(el) => addRef(el, 7)}>
            {[
              { value: '98%', label: 'Mandate Completion Rate', sublabel: 'Executive Search' },
              { value: '85%', label: 'C-Suite & C-1 Level', sublabel: 'Of search assignments' },
              { value: '<30 days', label: 'Avg. Senior Delivery', sublabel: 'C-suite placements' },
              { value: '70%', label: 'Repeat Client Rate', sublabel: 'New engagements from existing clients' },
            ].map((s, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="font-display text-2xl font-bold text-brand-400">{s.value}</div>
                <div className="text-xs font-medium text-white/60 mt-1">{s.label}</div>
                <div className="text-[11px] text-white/30 mt-0.5">{s.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 8)}>
            <span className="section-label">Our Journey</span>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mt-4">Key Milestones</h2>
          </div>

          <div className="relative max-w-3xl mx-auto" ref={(el) => addRef(el, 9)}>
            {/* Centered vertical timeline line */}
            <div className="absolute left-5 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px] bg-slate-200" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex items-start">
                  {/* Dot on the line */}
                  <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 z-10 mt-6">
                    <div className="h-3.5 w-3.5 rounded-full bg-brand-400 ring-4 ring-white shadow-sm" />
                  </div>

                  {/* Card — alternates left/right on desktop */}
                  <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-28px)] ${i % 2 === 0 ? 'lg:mr-auto lg:pr-0' : 'lg:ml-auto lg:pl-0'}`}>
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <span className="inline-block text-xs font-bold text-brand-500 tracking-wider mb-1.5">{m.year}</span>
                      <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{m.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 10)}>
            <span className="section-label">Leadership</span>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mt-4">The People Behind ATHENA MEA</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Our leadership brings together deep market knowledge, global networks, and a hands-on approach to every engagement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto" ref={(el) => addRef(el, 11)}>
            <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Photo */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <div className="aspect-[3/4] md:h-full bg-slate-100">
                    <img
                      src="/bhavishya-sharma.webp"
                      alt="Bhavishya Sharma — Founder & Managing Director"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-slate-900">Bhavishya Sharma</h3>
                  <p className="text-brand-600 font-semibold text-sm mt-1 mb-4">Founder &amp; Managing Director</p>

                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <p>
                      Bhavishya founded the Athena practice in 2010 with a vision to transform how global companies build leadership teams in India and the Middle East. With over 15 years of experience in executive search, market entry advisory, and strategic consulting, he has personally led engagements for some of the world&apos;s largest organisations.
                    </p>
                    <p>
                      His expertise spans C-suite hiring, post-acquisition integration, compensation benchmarking, and operational setup advisory — working across industries including technology, healthcare, FMCG, fintech, infrastructure, and retail.
                    </p>
                    <p>
                      Bhavishya operates across offices in Gurugram and Dubai, and leads a global network of consultants serving clients in 45+ countries.
                    </p>
                  </div>

                  {/* Social */}
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/bhavishyasharma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-slate-100 hover:bg-brand-50 hover:text-brand-600 flex items-center justify-center text-slate-500 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a
                      href="mailto:info@athenamea.com"
                      className="h-10 w-10 rounded-full bg-slate-100 hover:bg-brand-50 hover:text-brand-600 flex items-center justify-center text-slate-500 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO BEST — Image Cards ── */}
      <section className="relative py-24 bg-white">
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 12)}>
            <span className="section-label">Our Capabilities</span>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mt-4 mb-4">What We Do Best</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions that combine sharp market insights with hands-on, results-driven execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={(el) => addRef(el, 13)}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
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

      {/* ── OFFICES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal" ref={(el) => addRef(el, 14)}>
            <span className="section-label">Our Offices</span>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mt-4">Where We Operate</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              With teams on the ground in India and the UAE, we&apos;re embedded in the markets we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" ref={(el) => addRef(el, 15)}>
            {/* Gurugram Office */}
            <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80"
                  alt="Gurugram, India"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <img src="https://flagcdn.com/w40/in.png" alt="" className="h-5 rounded shadow-md mb-2" />
                  <h3 className="font-display text-xl font-bold text-white">India &mdash; Headquarters</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unit 407, 4th Floor, Tapasya One, Golf Course Road, Sector 53, Gurugram, Haryana 122003
                </p>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
                  alt="Dubai, UAE"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <img src="https://flagcdn.com/w40/ae.png" alt="" className="h-5 rounded shadow-md mb-2" />
                  <h3 className="font-display text-xl font-bold text-white">Dubai &mdash; Middle East</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Building A1, Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-20 bg-gradient-to-br from-midnight-900 to-black overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-10" />
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-400/5 blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 reveal" ref={(el) => addRef(el, 16)}>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">Ready to explore your next market?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Let&apos;s design an entry plan you can execute in the next 100 days — backed by 15 years of market expertise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#consultation" className="btn-primary !rounded-full !px-8 !py-4 font-semibold shadow-lg">Book a Strategy Call</a>
            <a href="/case-studies" className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all">View Case Studies</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
