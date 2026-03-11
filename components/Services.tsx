'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

/* ─────────────────────── Service Detail Data ─────────────────────── */
interface ServiceDetail {
  icon: string;
  title: string;
  href: string;
  description: string;
  image: string;
  services: string[];
  backBg: string;
  iconBg: string;
  accentBar: string;
  accentSolid: string;
  accent: string;
  longDescription: string;
  whoItsFor: string[];
  process: { step: string; detail: string }[];
  deliverables: string[];
  relatedCaseStudy?: { company: string; snippet: string };
}

const services: ServiceDetail[] = [
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
    accentSolid: '#F8B830',
    accent: 'from-brand-400 to-amber-500',
    longDescription:
      'We help global businesses navigate the complexities of entering India and the Middle East by combining on-the-ground intelligence with rigorous strategic frameworks. From feasibility assessment to regulatory mapping, our approach de-risks your entry and accelerates time-to-market.',
    whoItsFor: [
      'Multinational corporations planning first-time entry into India or the Middle East',
      'Private equity firms evaluating cross-border acquisition targets',
      'Growth-stage companies seeking to expand their global footprint',
      'Organizations exploring GCC or South Asian markets for operational centers',
    ],
    process: [
      { step: 'Discovery & Scoping', detail: 'We align on your strategic objectives, timeline, target geography, and key success criteria.' },
      { step: 'Market Intelligence', detail: 'Deep research into market size, competitive landscape, regulatory environment, talent availability, and cost structures.' },
      { step: 'Strategy Design', detail: 'We build a tailored entry blueprint covering entity structure, location selection, go-to-market approach, and risk mitigation.' },
      { step: 'Execution Roadmap', detail: 'Detailed implementation plan with milestones, resource requirements, and partner recommendations to take you from strategy to operations.' },
    ],
    deliverables: [
      'Market Entry Feasibility Report',
      'Competitive Landscape Analysis',
      'Location Comparison Matrix',
      'Regulatory & Compliance Playbook',
      'Implementation Roadmap with Timelines',
    ],
    relatedCaseStudy: { company: 'UnitedHealth Group', snippet: 'Guided India market entry including leadership build and strategic location advisory across multiple cities.' },
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
    accentSolid: '#3b82f6',
    accent: 'from-blue-400 to-blue-500',
    longDescription:
      'Finding the right leadership is the single most critical factor in market entry success. Our talent discovery practice combines deep regional networks with rigorous assessment methodologies to identify, attract, and place executives who can build and lead your operations from day one.',
    whoItsFor: [
      'Companies building leadership teams for new market operations',
      'Organizations scaling teams rapidly across India or the Middle East',
      'Businesses looking to replace or upgrade senior leadership in-region',
      'PE-backed companies needing operating talent for portfolio companies',
    ],
    process: [
      { step: 'Role Architecture', detail: 'We work with you to define the ideal candidate profile, competencies, cultural fit criteria, and compensation framework.' },
      { step: 'Market Mapping', detail: 'Systematic identification of qualified candidates through our proprietary network, referrals, and targeted research across relevant industries.' },
      { step: 'Assessment & Shortlisting', detail: 'Rigorous multi-stage evaluation covering leadership capabilities, cultural alignment, and domain expertise.' },
      { step: 'Placement & Onboarding', detail: 'End-to-end support through offer negotiation, transition planning, and 90-day onboarding assurance.' },
    ],
    deliverables: [
      'Candidate Market Map & Availability Report',
      'Shortlisted Candidate Profiles with Assessments',
      'Compensation Benchmarking for Target Roles',
      'Offer Strategy & Negotiation Support',
      '90-Day Onboarding Success Framework',
    ],
    relatedCaseStudy: { company: 'Grupo Bimbo', snippet: 'Built the complete India leadership team including MD, CFO, and functional heads across sales, HR, marketing, and finance.' },
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
    accentSolid: '#10b981',
    accent: 'from-emerald-400 to-emerald-500',
    longDescription:
      'Accurate compensation data is essential for attracting top talent while maintaining cost discipline. We provide real-time, region-specific benchmarking across roles, industries, and seniority levels in India and the Middle East — going beyond generic salary surveys to deliver actionable pay structures.',
    whoItsFor: [
      'Companies establishing compensation frameworks for new markets',
      'HR teams evaluating pay equity and market competitiveness',
      'Organizations undergoing compensation restructuring post-M&A',
      'Businesses looking to reduce attrition through competitive pay design',
    ],
    process: [
      { step: 'Scope Definition', detail: 'Identify target roles, geographies, industries, and company-size peers for precise benchmarking.' },
      { step: 'Data Collection', detail: 'Aggregate data from proprietary databases, industry surveys, and real-time market intelligence.' },
      { step: 'Analysis & Structuring', detail: 'Build compensation bands covering base pay, variable incentives, benefits, ESOPs, and total rewards.' },
      { step: 'Recommendations', detail: 'Deliver positioning recommendations (25th/50th/75th percentile) with implementation guidance.' },
    ],
    deliverables: [
      'Role-wise Compensation Benchmark Report',
      'Total Rewards Comparison Matrix',
      'Benefits & Perquisites Market Analysis',
      'Pay Band Structuring Recommendations',
      'Annual Increment & Bonus Trend Analysis',
    ],
    relatedCaseStudy: { company: 'Sophos', snippet: 'Provided benchmarking data across 650+ engineering roles to support India operations scaling.' },
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
    accentSolid: '#8b5cf6',
    accent: 'from-violet-400 to-violet-500',
    longDescription:
      'Entering a new market without understanding who you are up against is a recipe for costly missteps. Our competitive intelligence practice delivers actionable, evidence-based insights on competitors, market dynamics, and emerging opportunities — giving you the strategic edge to position confidently.',
    whoItsFor: [
      'Companies entering markets with established local or global competitors',
      'Strategy teams evaluating competitive positioning before launch',
      'Business development teams looking for whitespace opportunities',
      'Boards and investors requiring market due diligence',
    ],
    process: [
      { step: 'Landscape Mapping', detail: 'Identify direct and indirect competitors, market share distribution, and key differentiators.' },
      { step: 'Deep-Dive Analysis', detail: 'Analyze competitor strategies, pricing, talent, partnerships, customer base, and growth trajectories.' },
      { step: 'SWOT & Gap Analysis', detail: 'Assess strengths, weaknesses, opportunities, and threats specific to your competitive context.' },
      { step: 'Strategic Positioning', detail: 'Deliver recommendations on differentiation, pricing, and go-to-market approach.' },
    ],
    deliverables: [
      'Competitive Landscape Report',
      'Competitor Profile Deep-Dives',
      'Market SWOT Analysis',
      'Pricing & Positioning Intelligence',
      'Opportunity & Risk Heat Map',
    ],
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
    accentSolid: '#f43f5e',
    accent: 'from-rose-400 to-rose-500',
    longDescription:
      'HR due diligence is a critical but often underestimated dimension of cross-border M&A and market entry. We evaluate the people, policies, compliance posture, and cultural dynamics of target entities — surfacing risks and integration challenges before they become costly surprises.',
    whoItsFor: [
      'Companies acquiring businesses in India or the Middle East',
      'PE firms conducting due diligence on portfolio targets',
      'Organizations integrating acquired teams post-close',
      'Businesses undergoing restructuring or leadership transitions',
    ],
    process: [
      { step: 'Preliminary Assessment', detail: 'Review organizational structure, headcount, contracts, and key personnel risk.' },
      { step: 'Compliance & Policy Audit', detail: 'Evaluate labor law adherence, statutory compliance, HR policies, and benefit structures.' },
      { step: 'Cultural & Talent Analysis', detail: 'Assess leadership capability, cultural alignment, retention risk, and team dynamics.' },
      { step: 'Risk Report & Integration Plan', detail: 'Deliver findings with prioritized risks, cost implications, and a post-close integration roadmap.' },
    ],
    deliverables: [
      'HR Due Diligence Report',
      'Compliance & Statutory Risk Assessment',
      'Key Personnel Analysis & Retention Risk Matrix',
      'Compensation & Benefits Liability Review',
      'Post-Acquisition Integration Blueprint',
    ],
    relatedCaseStudy: { company: 'SYSTRA', snippet: 'Post-acquisition restructuring support including leadership build and governance alignment for India operations.' },
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
    accentSolid: '#06b6d4',
    accent: 'from-cyan-400 to-cyan-500',
    longDescription:
      'Market entry is not a one-time event — it is a sustained journey that requires ongoing strategic guidance. Our consulting practice works alongside your leadership to navigate operational challenges, optimize performance, and ensure your India or Middle East operations deliver on their strategic promise.',
    whoItsFor: [
      'Organizations seeking ongoing strategic advisory for regional operations',
      'Companies facing operational challenges in India or the Middle East',
      'Leadership teams needing thought partnership on growth strategy',
      'Businesses looking to optimize or restructure existing regional setups',
    ],
    process: [
      { step: 'Strategic Diagnostic', detail: 'Assess current state, identify gaps, and define strategic priorities for the engagement.' },
      { step: 'Roadmap Development', detail: 'Co-create an actionable strategic plan with measurable KPIs and clear milestones.' },
      { step: 'Execution Support', detail: 'Work embedded with your teams to implement initiatives, resolve blockers, and drive progress.' },
      { step: 'Review & Optimize', detail: 'Regular cadence reviews to measure outcomes, refine approach, and accelerate results.' },
    ],
    deliverables: [
      'Strategic Assessment & Diagnostic Report',
      'Growth Roadmap with KPIs & Milestones',
      'Operational Playbooks & Frameworks',
      'Quarterly Business Review Decks',
      'Performance Dashboard & Metrics Tracking',
    ],
    relatedCaseStudy: { company: 'ByteDance', snippet: 'Designed and executed talent channel strategy enabling 175+ monetization hires in year one of India operations.' },
  },
];

/* ─────────────────────── Service Detail Panel ─────────────────────── */
function ServiceDetailPanel({ service, onClose }: { service: ServiceDetail; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div
        ref={containerRef}
        className="relative z-10 ml-auto w-full max-w-2xl bg-white overflow-y-auto shadow-2xl"
        style={{ animation: 'slideInRight 0.35s cubic-bezier(.16,1,.3,1)' }}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-100">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${service.iconBg}`}>
                <i className={`${service.icon} text-lg`} />
              </span>
              <span className="font-display font-bold text-slate-900 text-[15px]">{service.title}</span>
            </div>
            <button
              onClick={onClose}
              className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all hover:bg-slate-50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero banner */}
        <div className="relative h-48 overflow-hidden">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${service.accentSolid}cc, ${service.accentSolid}88)` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="font-display text-3xl font-bold text-white drop-shadow-lg">{service.title}</h2>
          </div>
        </div>

        {/* Overview */}
        <div className="px-8 py-8 border-b border-slate-100">
          <p className="text-slate-600 leading-relaxed text-[15px]">{service.longDescription}</p>
        </div>

        {/* Who It's For */}
        <div className="px-8 py-8 border-b border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">Who This Is For</h3>
          <div className="space-y-3">
            {service.whoItsFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full flex items-center justify-center" style={{ background: `${service.accentSolid}15` }}>
                  <svg className="w-3 h-3" style={{ color: service.accentSolid }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="px-8 py-8 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-6">Our Process</h3>
          <div className="space-y-0">
            {service.process.map((p, i) => (
              <div key={i} className="relative flex gap-5">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ background: `linear-gradient(135deg, ${service.accentSolid}, ${service.accentSolid}cc)` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="w-px flex-1 min-h-[24px] bg-slate-200 my-1" />
                  )}
                </div>
                <div className="pb-6 flex-1">
                  <h4 className="font-display font-bold text-slate-900 text-[15px] mb-1">{p.step}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="px-8 py-8 border-b border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">Key Deliverables</h3>
          <div className="grid grid-cols-1 gap-2.5">
            {service.deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: service.accentSolid }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span className="text-slate-700 text-sm font-medium">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Study */}
        {service.relatedCaseStudy && (
          <div className="px-8 py-8 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">Related Success Story</h3>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-midnight-900 to-slate-900 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-brand-400" />
                <span className="text-sm font-semibold text-brand-400">{service.relatedCaseStudy.company}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{service.relatedCaseStudy.snippet}</p>
              <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 mt-4 transition-colors">
                View case studies
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* CTA Footer */}
        <div className="px-8 py-8 bg-slate-50">
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-5">Ready to get started with {service.title}?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#consultation"
                className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl bg-midnight-900 text-white hover:bg-black"
              >
                Book a Consultation
              </Link>
              <Link
                href={service.href}
                className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 border-2 border-slate-200 text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-white"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────── Main Services Component ─────────────────────── */
export default function Services() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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

                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveService(i); }}
                      className="mt-5 inline-flex items-center gap-2 text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors cursor-pointer"
                    >
                      Learn more
                      <i className="ri-arrow-right-line transition-transform group-hover:translate-x-0.5" />
                    </button>
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
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveService(i); }}
                        className="block w-full text-center rounded-xl bg-white text-slate-900 font-semibold py-3 hover:bg-white/90 transition-colors shadow-sm text-sm cursor-pointer"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-in Detail Panel */}
      {activeService !== null && (
        <ServiceDetailPanel
          service={services[activeService]}
          onClose={() => setActiveService(null)}
        />
      )}

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
