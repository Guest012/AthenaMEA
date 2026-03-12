'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  flag: string; // URL to flag image
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Athena's market entry strategy helped us establish our presence in India within 6 months. Their deep understanding of local regulations and business culture was invaluable.",
    name: 'Araceli L',
    title: 'Global VP',
    company: 'Grupo Bimbo',
    flag: 'https://flagcdn.com/w640/es.png',
  },
  {
    quote:
      "The team's expertise in talent acquisition and cultural integration made our expansion to the Middle East seamless. We couldn't have done it without their guidance.",
    name: 'Clarissa P',
    title: 'CHRO',
    company: 'Sophos',
    flag: 'https://flagcdn.com/w640/us.png',
  },
  {
    quote:
      "Athena's comprehensive approach to market research and competitive analysis gave us the insights we needed to make informed decisions about our expansion strategy.",
    name: 'Neha M',
    title: 'COO',
    company: 'Divido',
    flag: 'https://flagcdn.com/w640/gb.png',
  },
  {
    quote:
      'Their HR due diligence process identified critical gaps before our acquisition, saving us time and costly surprises.',
    name: 'Antonio P',
    title: 'VP International HR',
    company: 'OVS',
    flag: 'https://flagcdn.com/w640/it.png',
  },
  {
    quote:
      'The Athena team acted like an extension of our leadership, orchestrating every step of our Asia Pacific launch flawlessly.',
    name: 'Laurent B',
    title: 'MD Asia Pacific',
    company: 'Novacel',
    flag: 'https://flagcdn.com/w640/fr.png',
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 2 cards per page on desktop
  const cardsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((page: number) => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
  }, [totalPages]);

  const currentCards = testimonials.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-2 text-sm font-semibold text-brand-600 mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
            CLIENTS TESTIMONIAL
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">
            What our{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              Clients
            </span>{' '}
            say
          </h2>
          <p className="text-slate-500 text-lg mt-4">
            Trusted by leading companies across industries
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentCards.map((t, idx) => (
              <div
                key={`${currentPage}-${idx}`}
                className="rounded-2xl border border-slate-100 shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl"
                style={{ animation: 'fadeSlideIn 0.5s ease-out forwards', animationDelay: `${idx * 100}ms`, height: '380px' }}
              >
                <div className="flex flex-col h-full">
                  {/* Top section — quote on clean white background (compact) */}
                  <div className="px-8 pt-6 pb-4 bg-white shrink-0">
                    <div className="text-brand-400 text-3xl font-serif leading-none mb-2">&ldquo;</div>
                    <blockquote className="text-slate-700 text-sm leading-relaxed font-medium line-clamp-4">
                      {t.quote}
                    </blockquote>
                  </div>

                  {/* Bottom section — flag background with client details (dominant) */}
                  <div className="relative overflow-hidden flex-1 min-h-0">
                    {/* Flag background */}
                    <div className="absolute inset-0">
                      <img
                        src={t.flag}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/90 via-midnight-900/70 to-midnight-900/50" />
                    </div>

                    {/* Client details — pushed to bottom */}
                    <div className="relative z-10 px-8 py-6 flex items-end h-full">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 h-14 w-14 rounded-full bg-white/15 border-2 border-white/25 flex items-center justify-center overflow-hidden shadow-lg">
                          <img
                            src={t.flag}
                            alt=""
                            aria-hidden="true"
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-display text-lg font-bold text-white">{t.name}</div>
                          <div className="text-sm font-semibold text-white/80">{t.title}</div>
                          <div className="text-sm text-white/60">{t.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Left arrow */}
            <button
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 0}
              className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                currentPage === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-500 hover:border-brand-400 hover:text-brand-500 hover:shadow-md'
              }`}
              aria-label="Previous testimonials"
            >
              <i className="ri-arrow-left-s-line text-xl" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? 'w-8 bg-brand-400'
                      : 'w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-brand-400 text-brand-500 hover:bg-brand-50 hover:shadow-md'
              }`}
              aria-label="Next testimonials"
            >
              <i className="ri-arrow-right-s-line text-xl" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
