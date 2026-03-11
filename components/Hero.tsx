'use client';

import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  {
    image: '/hero-india.webp',
    alt: 'Modern India skyline at night with light trails',
    label: 'India',
    subtitle: 'Navigate the world\'s fastest-growing major economy',
  },
  {
    image: '/hero-dubai.webp',
    alt: 'Dubai futuristic skyline at golden hour',
    label: 'Middle East',
    subtitle: 'Unlock opportunities across the Gulf\'s dynamic markets',
  },
];

const INTERVAL_MS = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  const goTo = useCallback((idx: number) => setCurrent(idx), []);

  // Auto-cycle slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ─── Slideshow Background ─── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          className="absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out"
            style={{
              transform: i === current ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      {/* Subtle brand glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(248,184,48,0.12) 0%, transparent 50%)',
        }}
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mb-8"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
          }}
        >
          <span className="inline-block w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-white">
            India & Middle East Specialists
          </span>
        </div>

        {/* Heading */}
        <div
          className="mb-6 max-w-3xl"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
          }}
        >
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Navigate New Markets
            <br />
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
              With Certainty.
            </span>
          </h1>
        </div>

        {/* Animated slide-specific subtitle */}
        <div className="h-8 mb-8 overflow-hidden">
          {SLIDES.map((slide, i) => (
            <p
              key={slide.label}
              className="text-xl text-white/80 max-w-xl leading-relaxed transition-all duration-700"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'translateY(0)' : 'translateY(12px)',
                position: i === current ? 'relative' : 'absolute',
              }}
            >
              {slide.subtitle}
            </p>
          ))}
        </div>

        {/* Subheading */}
        <p
          className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none',
          }}
        >
          Strategic advisory for global businesses. From market entry to
          leadership hiring, we make expansion seamless.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
          }}
        >
          <button
            onClick={() => scrollToSection('consultation')}
            className="px-8 py-4 rounded-full bg-brand-400 hover:bg-brand-500 text-slate-900 font-semibold text-base transition-all duration-300 shadow-glow-amber hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Book a Strategy Call
          </button>
          <button
            onClick={() => (window.location.href = '/case-studies')}
            className="px-8 py-4 rounded-full border-2 border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-base backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:scale-105 active:scale-95"
          >
            View Case Studies
          </button>
        </div>
      </div>

      {/* ─── Slide Indicators ─── */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4"
        style={{
          animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.5s both' : 'none',
        }}
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => goTo(i)}
            className="group flex items-center gap-2 transition-all duration-500"
            aria-label={`Go to ${slide.label} slide`}
          >
            {/* Progress bar indicator */}
            <div className="relative h-1 overflow-hidden rounded-full bg-white/25 transition-all duration-500"
              style={{ width: i === current ? '64px' : '24px' }}
            >
              {i === current && (
                <div
                  className="absolute inset-y-0 left-0 bg-brand-400 rounded-full"
                  style={{
                    animation: `progressFill ${INTERVAL_MS}ms linear both`,
                  }}
                />
              )}
              {i !== current && (
                <div className="absolute inset-0 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors" />
              )}
            </div>
            <span
              className="text-xs font-semibold tracking-wider uppercase transition-all duration-500"
              style={{
                color: i === current ? 'rgba(248,184,48,1)' : 'rgba(255,255,255,0.5)',
              }}
            >
              {slide.label}
            </span>
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        style={{
          animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none',
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
