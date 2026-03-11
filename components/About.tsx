'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const proofPoints = [
    {
      title: 'Led by Experience',
      description: 'Our leadership brings hands-on expertise in cross-border expansion, talent strategy, and market intelligence across India and the Middle East.',
    },
    {
      title: 'Proven Track Record',
      description: 'Helped 200+ companies successfully establish operations and achieve their market expansion goals.',
    },
    {
      title: 'End-to-End Support',
      description: 'From initial strategy through full implementation, we remain your trusted partner every step of the way.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-midnight-900 via-midnight-950 to-black text-white overflow-hidden"
    >
      {/* Grid Pattern Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(248, 184, 48, 0.1) 25%, rgba(248, 184, 48, 0.1) 26%, transparent 27%, transparent 74%, rgba(248, 184, 48, 0.1) 75%, rgba(248, 184, 48, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(248, 184, 48, 0.1) 25%, rgba(248, 184, 48, 0.1) 26%, transparent 27%, transparent 74%, rgba(248, 184, 48, 0.1) 75%, rgba(248, 184, 48, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          background:
            'radial-gradient(800px 600px at 50% 0%, rgba(248, 184, 48, 0.3) 0%, transparent 60%), radial-gradient(600px 400px at 100% 100%, rgba(6, 182, 212, 0.2) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: CONTENT */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Section Label Pill (Dark Variant) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-brand-400 mb-6">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-400" />
              Why Athena
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Meet the Team Behind Your Market Expansion
            </h2>

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Hear directly from our leadership on how we guide multinational companies through the complexities of India and Middle East market entry — combining strategic vision, local expertise, and hands-on operational support.
            </p>

            {/* Proof Points */}
            <div className="space-y-6 mb-8">
              {proofPoints.map((point, idx) => (
                <div
                  key={point.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-400">
                      <i className="ri-check-line text-midnight-900 font-bold text-base" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const el = document.getElementById('consultation');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-brand-400 to-brand-500 px-8 py-4 text-midnight-900 font-semibold shadow-lg shadow-brand-400/30 hover:from-brand-300 hover:to-brand-400 transition-all duration-300 hover:shadow-lg hover:shadow-brand-400/40"
            >
              <span>Talk to Our Team</span>
              <i className="ri-arrow-right-line" />
            </button>
          </div>

          {/* RIGHT: VIDEO */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative group">
              {/* Video Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-brand-400/20">
                <video
                  className="w-full h-80 lg:h-[28rem] object-cover rounded-2xl"
                  controls
                  preload="metadata"
                  poster=""
                  playsInline
                  aria-label="ATHENA MEA company overview video"
                >
                  <source src="/about-video.mp4" type="video/mp4" />
                  <track kind="captions" src="" label="English" srcLang="en" default />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
              </div>

              {/* Stat Badge 1 - Bottom Left */}
              <div
                className={`absolute bottom-8 -left-4 z-10 bg-brand-400 text-midnight-900 rounded-xl px-5 py-3 shadow-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ animation: isVisible ? 'float 6s ease-in-out infinite' : 'none' }}
              >
                <div className="font-display font-bold text-lg">95%</div>
                <div className="text-sm font-medium">Success Rate</div>
              </div>

              {/* Stat Badge 2 - Top Right */}
              <div
                className={`absolute top-8 -right-4 z-10 bg-white text-midnight-900 rounded-xl px-5 py-3 shadow-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ animation: isVisible ? 'float 6s ease-in-out infinite 0.2s' : 'none' }}
              >
                <div className="font-display font-bold text-lg">10+</div>
                <div className="text-sm font-medium">Years in Business</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
