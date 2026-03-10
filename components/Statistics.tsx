'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = {
  number: number;
  label: string;
  accentColor: string;
};

const STATS: Stat[] = [
  { number: 20, label: 'Countries Covered', accentColor: 'brand-400' },
  { number: 150, label: 'Successful Projects', accentColor: 'emerald-500' },
  { number: 15, label: 'Years of Expertise', accentColor: 'blue-500' },
  { number: 12, label: 'Industries Served', accentColor: 'violet-500' },
];

const accentStyles: Record<string, { line: string; text: string }> = {
  'brand-400': { line: 'bg-brand-400', text: 'text-brand-500' },
  'emerald-500': { line: 'bg-emerald-500', text: 'text-emerald-600' },
  'blue-500': { line: 'bg-blue-500', text: 'text-blue-600' },
  'violet-500': { line: 'bg-violet-500', text: 'text-violet-600' },
};

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [visible]);

  // Counter animation
  useEffect(() => {
    if (!visible) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts(STATS.map((stat) => Math.floor(stat.number * progress)));

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="trust-metrics"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Soft glow accents */}
      <div
        className="absolute top-0 left-10 w-96 h-96 rounded-full pointer-events-none -z-10 opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(248,184,48,0.4) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-20 w-96 h-96 rounded-full pointer-events-none -z-10 opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Asymmetric layout: Left heading, Right stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left side - Large heading */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Trusted by global leaders expanding into emerging markets
            </h2>
          </div>

          {/* Right side - 2x2 Stats Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STATS.map((stat, index) => {
              const styles = accentStyles[stat.accentColor];
              return (
                <div
                  key={stat.label}
                  className={`group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100 hover:border-slate-200 ${
                    visible ? 'animate-fadeIn' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 h-1 ${styles.line} rounded-full`}
                    style={{
                      width: '3rem',
                      animation: visible ? `lineGrow 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) ${index * 100}ms both` : 'none',
                    }}
                  />

                  {/* Animated number */}
                  <div className="font-display text-5xl font-bold text-slate-900 mb-2">
                    {counts[index]}
                    <span className="text-brand-400">+</span>
                  </div>

                  {/* Label */}
                  <p className="text-slate-600 text-base">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
