'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'ri-global-line',
      title: 'Market Entry Strategy',
      href: '/services/market-entry-strategy',
      description:
        'Comprehensive market analysis and entry strategies tailored for India and Middle East markets with regulatory compliance guidance.',
      image: '/market-entry-card.png',
      services: [
        'Feasibility Study',
        'Competitive Benchmarking',
        'Talent Topography',
        'Location Analysis',
        'Regulatory and Compliance Advisory',
      ],
      backBg: 'bg-gradient-to-br from-brand-400 to-brand-500',
      iconBg: 'bg-brand-100 text-brand-600',
      accentBar: 'bg-gradient-to-r from-brand-300 to-brand-400',
    },
    {
      icon: 'ri-team-line',
      title: 'Talent Discovery',
      href: '/services/talent-discovery',
      description:
        'Connect with top-tier professionals and build high-performing teams through our extensive network and recruitment expertise.',
      image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&q=80',
      services: [
        'Executive Search',
        'Team Building',
        'Cultural Integration',
        'Performance Management',
        'Retention Strategies',
      ],
      backBg: 'bg-gradient-to-br from-blue-400 to-blue-500',
      iconBg: 'bg-blue-100 text-blue-600',
      accentBar: 'bg-gradient-to-r from-blue-300 to-blue-400',
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Compensation Benchmarking',
      href: '/services/compensation-benchmarking',
      description:
        'Data-driven salary benchmarking and compensation structure analysis to ensure competitive positioning in local markets.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80',
      services: [
        'Salary Surveys',
        'Benefits Analysis',
        'Equity Compensation',
        'Performance Bonuses',
        'Market Positioning',
      ],
      backBg: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
      iconBg: 'bg-emerald-100 text-emerald-600',
      accentBar: 'bg-gradient-to-r from-emerald-300 to-emerald-400',
    },
    {
      icon: 'ri-search-line',
      title: 'Competitive Intelligence',
      href: '/services/competitive-intelligence',
      description:
        'Deep market intelligence and competitor analysis to identify opportunities and mitigate risks in your target markets.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80',
      services: [
        'Competitor Analysis',
        'Market Trends',
        'SWOT Analysis',
        'Risk Assessment',
        'Opportunity Mapping',
      ],
      backBg: 'bg-gradient-to-br from-violet-400 to-violet-500',
      iconBg: 'bg-violet-100 text-violet-600',
      accentBar: 'bg-gradient-to-r from-violet-300 to-violet-400',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'HR Due Diligence',
      href: '/services/hr-due-diligence',
      description:
        'Comprehensive HR assessments, compliance audits, and risk evaluation for mergers, acquisitions, and market expansions.',
      image: '/hr-due-diligence-card.png',
      services: [
        'Compliance Audits',
        'Risk Assessment',
        'Legal Review',
        'Policy Analysis',
        'Integration Planning',
      ],
      backBg: 'bg-gradient-to-br from-rose-400 to-rose-500',
      iconBg: 'bg-rose-100 text-rose-600',
      accentBar: 'bg-gradient-to-r from-rose-300 to-rose-400',
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Strategic Consulting',
      href: '/services/strategic-consulting',
      description:
        'End-to-end consulting services from market research to implementation, ensuring successful business establishment.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80',
      services: [
        'Strategic Planning',
        'Implementation Support',
        'Performance Monitoring',
        'Continuous Optimization',
        'Success Metrics',
      ],
      backBg: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
      iconBg: 'bg-cyan-100 text-cyan-600',
      accentBar: 'bg-gradient-to-r from-cyan-300 to-cyan-400',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white">
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          background:
            'radial-gradient(800px 400px at 20% 50%, #F8B830 0, transparent 60%), radial-gradient(600px 300px at 80% 30%, #06b6d4 0, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Label Pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-400" />
            What We Do
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-midnight-900 mb-4">
            Comprehensive Market Entry Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From strategy to execution, we provide end-to-end support for
            successful entry into India and the Middle East.
          </p>
        </div>

        {/* Grid of 3D Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={[
                'service-card group relative w-full',
                'h-[380px] sm:h-[400px] lg:h-[420px]',
                mounted ? 'animate-fadeUp' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="card-3d h-full w-full">
                {/* ────── FRONT FACE ────── */}
                <div className="card-face card-front bg-white border border-slate-200 rounded-2xl shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)] overflow-hidden">
                  {/* Accent Bar */}
                  <div className={`h-1 w-full ${s.accentBar}`} />

                  {/* Card Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${s.iconBg} ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i className={`${s.icon} text-lg`} />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-midnight-900">
                        {s.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                      {s.description}
                    </p>

                    <Link href={s.href} className="mt-5 inline-flex items-center gap-2 text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors">
                      Learn more
                      <i className="ri-arrow-right-line transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  {/* Hover sheen */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="absolute -top-1/2 left-0 h-[200%] w-1/3 rotate-45 bg-white/10 animate-sheen" />
                  </div>
                </div>

                {/* ────── BACK FACE ────── */}
                <div
                  className={`card-face card-back rounded-2xl overflow-hidden ${s.backBg} text-white`}
                >
                  <div className="relative h-full p-7 flex flex-col">
                    {/* Title */}
                    <h4 className="text-lg font-display font-semibold">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/85 line-clamp-3">
                      {s.description}
                    </p>

                    {/* Services list */}
                    <h5 className="mt-5 text-sm font-semibold tracking-wide uppercase text-white/90">
                      Our Services Include
                    </h5>
                    <ul className="mt-3 space-y-2.5">
                      {s.services.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                            <i className="ri-check-line text-[11px] text-white" />
                          </span>
                          <span className="text-white/95">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-auto pt-5">
                      <Link
                        href={s.href}
                        className="block w-full text-center rounded-xl bg-white text-slate-900 font-semibold py-3 hover:bg-white/90 transition-colors shadow-sm text-sm"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* 3D flip container */
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1200px;
          position: relative;
          height: 100%;
          width: 100%;
        }
        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .card-front {
          transform: rotateY(0deg);
        }
        .card-back {
          transform: rotateY(180deg);
        }
        .service-card:hover .card-front {
          transform: rotateY(-180deg);
        }
        .service-card:hover .card-back {
          transform: rotateY(0deg);
        }

        /* Staggered fade-up animation */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Sheen highlight */
        @keyframes sheen {
          0% {
            transform: translateX(-120%) skewX(-10deg);
          }
          100% {
            transform: translateX(220%) skewX(-10deg);
          }
        }
        .animate-sheen {
          animation: sheen 1.4s ease-in-out 0.2s both;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
