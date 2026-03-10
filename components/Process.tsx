'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import AssessmentModal from './AssessmentModal';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Visibility detection for auto-cycle
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

  // Auto-cycle every 3 seconds when visible
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Process steps data
  const steps = useMemo(
    () => [
      {
        number: '01',
        title: 'Market Assessment',
        description: 'Comprehensive analysis of target markets, competitive landscape, regulatory requirements, and market sizing.',
        icon: 'ri-search-2-line',
        color: 'from-blue-400 to-blue-500',
        iconBg: 'bg-blue-100 text-blue-600',
      },
      {
        number: '02',
        title: 'Strategy Development',
        description: 'Create custom market entry strategy with clear timelines, milestones, resource allocation, and success metrics.',
        icon: 'ri-lightbulb-line',
        color: 'from-purple-400 to-purple-500',
        iconBg: 'bg-purple-100 text-purple-600',
      },
      {
        number: '03',
        title: 'Talent Acquisition',
        description: 'Identify and recruit key personnel with deep local market knowledge, networks, and industry expertise.',
        icon: 'ri-team-line',
        color: 'from-amber-400 to-amber-500',
        iconBg: 'bg-amber-100 text-amber-600',
      },
      {
        number: '04',
        title: 'Implementation',
        description: 'Execute market entry plan with ongoing support, real-time adjustments, and comprehensive performance monitoring.',
        icon: 'ri-rocket-line',
        color: 'from-emerald-400 to-emerald-500',
        iconBg: 'bg-emerald-100 text-emerald-600',
      },
    ],
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white"
    >
      {/* Subtle section glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background:
            'radial-gradient(900px 500px at 50% 50%, #F8B830 0%, transparent 60%), radial-gradient(700px 400px at 0% 100%, #06b6d4 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 mb-6">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-400" />
            How We Work
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-midnight-900 mb-4">
            Our Proven 4-Step Process
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A systematic approach to ensure successful market entry with minimal risk and maximum impact.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop: Horizontal connecting line */}
          <div className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 pointer-events-none">
            {/* Background line */}
            <div className="absolute inset-0 bg-slate-100 rounded-full" />

            {/* Active progress line */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-purple-400 via-amber-400 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
            />
          </div>

          {/* Mobile: Vertical line on left */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-1 bg-slate-100 rounded-full pointer-events-none">
            <div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-blue-400 via-purple-400 via-amber-400 to-emerald-400 rounded-full transition-all duration-500"
              style={{ height: `${((activeStep + 1) / 4) * 100}%` }}
            />
          </div>

          {/* Grid of Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isComplete = activeStep > idx;

              return (
                <div
                  key={step.number}
                  className="group relative"
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Step Node - Desktop */}
                  <div className="absolute hidden lg:flex left-1/2 -top-12 -translate-x-1/2 z-20">
                    <div
                      className={`
                        flex h-14 w-14 items-center justify-center rounded-full font-display font-bold text-base
                        border-2 shadow-lg transition-all duration-300
                        ${
                          isActive
                            ? 'border-brand-400 bg-white text-midnight-900 scale-110'
                            : isComplete
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                              : 'border-slate-200 bg-white text-slate-500'
                        }
                      `}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Step Node - Mobile */}
                  <div className="absolute lg:hidden left-0 top-6 -translate-x-1/2">
                    <span
                      className={`
                        block h-4 w-4 rounded-full ring-2 ring-white transition-all duration-300
                        ${
                          isActive
                            ? 'bg-brand-400 scale-110'
                            : isComplete
                              ? 'bg-emerald-500'
                              : 'bg-slate-300'
                        }
                      `}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      relative h-full rounded-2xl border-2 bg-white p-6 lg:p-7 shadow-card
                      transition-all duration-300 hover:shadow-card-hover
                      flex flex-col
                      ${
                        isActive
                          ? 'border-brand-400 shadow-card-hover scale-[1.02]'
                          : 'border-slate-100 hover:border-brand-300'
                      }
                    `}
                  >
                    {/* Step Label */}
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                      Step {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${step.iconBg} mb-4`}>
                      <i className={`${step.icon} text-xl`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg lg:text-xl font-semibold text-midnight-900 mb-3 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Hover wash background */}
                    <div
                      className={`
                        pointer-events-none absolute inset-0 rounded-2xl
                        bg-gradient-to-br ${step.color}
                        opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300
                      `}
                    />
                  </div>

                  {/* Arrow between cards - Desktop only */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex pointer-events-none absolute right-[-20px] top-1/2 -translate-y-1/2">
                      <svg
                        className="h-5 w-5 text-slate-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5l8 7-8 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Ready to start your market expansion journey?</p>
          <button
            onClick={() => setAssessmentOpen(true)}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-brand-400 to-brand-500 px-8 py-4 text-midnight-900 font-semibold shadow-lg shadow-brand-400/30 hover:from-brand-300 hover:to-brand-400 transition-all duration-300"
          >
            <span>Begin Your Assessment</span>
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>

      {/* Assessment Modal */}
      <AssessmentModal open={assessmentOpen} onClose={() => setAssessmentOpen(false)} />

      <style jsx>{`
        .group {
          animation: fadeUp 0.6s ease-out both;
        }
        .group:nth-child(1) {
          animation-delay: 0.1s;
        }
        .group:nth-child(2) {
          animation-delay: 0.2s;
        }
        .group:nth-child(3) {
          animation-delay: 0.3s;
        }
        .group:nth-child(4) {
          animation-delay: 0.4s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
