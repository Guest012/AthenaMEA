'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Footer from '../../../../components/Footer';
import type { Spotlight } from '../../../../lib/spotlights';

export default function SpotlightDetail({ spotlight }: { spotlight: Spotlight }) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.08 }
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [spotlight.slug]);

  const addRef = (el: HTMLElement | null, i: number) => {
    sectionRefs.current[i] = el;
  };

  return (
    <main className="w-full bg-white">
      {/* ━━━━━━━━━━ HERO ━━━━━━━━━━ */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-slate-900 to-midnight-900" />
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-400/8 blur-[120px] animate-pulse" />
        <div aria-hidden className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-400/5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-10"
          >
            <i className="ri-arrow-left-line" />
            Back to Insights
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div
                className="h-32 w-32 lg:h-40 lg:w-40 rounded-full bg-center bg-cover border-[3px] border-brand-400 ring-4 ring-brand-400/20 ring-offset-4 ring-offset-midnight-900 shadow-2xl"
                style={{ backgroundImage: `url(${spotlight.avatar})` }}
                aria-hidden
              />
            </div>

            {/* Name & Title */}
            <div className="flex-1">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-brand-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                  HR Leadership Spotlight
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                {spotlight.name}
              </h1>
              <p className="text-xl text-white/70 mb-1">{spotlight.title}</p>
              <p className="text-lg text-brand-400 font-medium">{spotlight.company}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ CONTENT ━━━━━━━━━━ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-10">
          {/* Overview */}
          <div
            ref={(el) => addRef(el, 0)}
            className="reveal bg-slate-50 rounded-2xl p-8 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-6 w-1 rounded-full bg-brand-400" />
              <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wider">Overview</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">{spotlight.summary}</p>
          </div>

          {/* Perspective / Narrative */}
          {spotlight.narrative && (
            <div
              ref={(el) => addRef(el, 1)}
              className="reveal bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block h-6 w-1 rounded-full bg-brand-400" />
                <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wider">Perspective</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{spotlight.narrative}</p>
            </div>
          )}

          {/* Quote */}
          <div
            ref={(el) => addRef(el, 2)}
            className="reveal relative bg-gradient-to-br from-midnight-900 to-slate-800 rounded-2xl p-8 lg:p-10 overflow-hidden"
          >
            <div aria-hidden className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-400/5 blur-[80px]" />
            <i className="ri-double-quotes-l text-5xl text-brand-400/30 mb-4 block" />
            <blockquote className="relative z-10 text-xl lg:text-2xl text-white/90 leading-relaxed font-medium italic">
              &ldquo;{spotlight.quote}&rdquo;
            </blockquote>
            <p className="relative z-10 mt-6 text-brand-400 font-semibold">— {spotlight.name}</p>
          </div>

          {/* Key Themes */}
          <div
            ref={(el) => addRef(el, 3)}
            className="reveal bg-slate-50 rounded-2xl p-8 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-6 w-1 rounded-full bg-brand-400" />
              <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wider">Key Themes</h2>
            </div>
            <div className="space-y-3">
              {spotlight.themes.map((theme, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{theme}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advice */}
          {spotlight.advice && spotlight.advice.length > 0 && (
            <div
              ref={(el) => addRef(el, 4)}
              className="reveal bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block h-6 w-1 rounded-full bg-brand-400" />
                <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wider">Advice for Professionals</h2>
              </div>
              <div className="space-y-4">
                {spotlight.advice.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                    <span className="flex-shrink-0 h-7 w-7 rounded-full bg-brand-400/10 text-brand-600 flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How They Unwind */}
          {spotlight.winddown && (
            <div
              ref={(el) => addRef(el, 5)}
              className="reveal bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block h-6 w-1 rounded-full bg-brand-400" />
                <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wider">How They Unwind</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{spotlight.winddown}</p>
            </div>
          )}

          {/* Back CTA */}
          <div
            ref={(el) => addRef(el, 6)}
            className="reveal pt-4"
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-8 py-3.5 text-midnight-900 font-semibold shadow-lg hover:bg-brand-500 transition-colors"
            >
              <i className="ri-arrow-left-line" />
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
