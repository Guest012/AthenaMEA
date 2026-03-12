'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

/* ─────────────────────── Animated Counter ─────────────────────── */
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

/* ─────────────────────── Case Study Data ─────────────────────── */
interface CaseStudy {
  id: string;
  company: string;
  logo: string;
  industryImage: string;
  tagline: string;
  tags: { label: string; color: string }[];
  industry: string;
  accent: string;
  accentSolid: string;
  overview: string;
  scenario: string;
  contributions: string[];
  challenges: string[];
  impacts: string[];
  benefits: string[];
  quote: string;
  quoteAuthor: string;
  stats: { value: string; label: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'grupo-bimbo',
    company: 'Grupo Bimbo',
    logo: '/client-grupobimbo.webp',
    industryImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    tagline: "World's largest baking company — India market entry via acquisition & leadership build",
    tags: [
      { label: 'Integration', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
      { label: 'Leadership Build', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
      { label: 'Due Diligence', color: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
    ],
    industry: 'FMCG / Food & Beverage',
    accent: 'from-brand-400 to-amber-500',
    accentSolid: '#F8B830',
    overview: 'Grupo Bimbo, founded in 1945 and headquartered in Mexico City, is the world\'s largest baking company with operations in over 33 countries across the Americas, Europe, Asia, and Africa. The company runs more than 200 bakeries and 1,500 sales centers, employing approximately 150,000 people.',
    scenario: 'Grupo Bimbo entered India through acquisitions of Modern Foods (2016) and later Kitty Bread (2021). They needed support for due diligence and to build leadership for India operations to integrate local assets and accelerate growth.',
    contributions: [
      'Supported strategic due diligence for both acquisitions',
      'Placed an Interim CFO to lead financial transition and reporting',
      'Built the India leadership team, including Managing Director, and Heads of Sales, HR, Marketing, and Finance',
      'Provided market insights on team structuring, compensation benchmarking, and local talent landscape',
    ],
    challenges: [
      'Complex integration of acquired entities with different operational models',
      'Building leadership team from scratch in a new market',
      'Aligning local operations with global standards and best practices',
      'Managing cultural and regulatory differences in the Indian market',
    ],
    impacts: [
      'Enabled smooth integration of acquired entities into global operations',
      'Professionalized India leadership aligned with international best practices',
      'Strengthened capabilities across commercial, financial, and operational functions',
      'Established a scalable leadership foundation to support long-term business growth in India',
    ],
    benefits: [
      'Seamless integration of acquired entities into global operations',
      'Professionalized leadership aligned with international best practices',
      'Strengthened capabilities across commercial, financial, and operational functions',
      'Established scalable leadership foundation for long-term growth',
    ],
    quote: 'The Athena team acted like an extension of our leadership, orchestrating every step of our India launch flawlessly.',
    quoteAuthor: 'Managing Director, Grupo Bimbo India',
    stats: [
      { value: '33+', label: 'Countries' },
      { value: '200+', label: 'Bakeries' },
      { value: '150K', label: 'Employees' },
      { value: '9,000+', label: 'Products' },
    ],
  },
  {
    id: 'unitedhealth',
    company: 'UnitedHealth Group',
    logo: '/client-unitedhealthgroup.webp',
    industryImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    tagline: 'Global healthcare leader — India market entry with leadership build & location advisory',
    tags: [
      { label: 'Market Entry', color: 'bg-sky-400/10 text-sky-400 border-sky-400/20' },
      { label: 'Leadership Build', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
      { label: 'Location Advisory', color: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
    ],
    industry: 'Healthcare / Insurance',
    accent: 'from-sky-400 to-blue-500',
    accentSolid: '#38bdf8',
    overview: 'UnitedHealth Group, founded in 1977 and headquartered in Minnesota, is a global healthcare leader with over 400,000 employees and over 400 billion dollars in annual revenue in 2024. It operates through UnitedHealthcare for insurance and Optum for health services, technology, and pharmacy.',
    scenario: 'UnitedHealthcare was entering India and needed to build a strong leadership team. They also lacked clarity on the best city for operations based on talent availability. They sought a partner who could support both executive hiring and provide strategic advice on location feasibility.',
    contributions: [
      'Built the core leadership team in India, including CFO, COO, CSO, Chief Delivery Officer, and multiple delivery heads',
      'Provided strategic advisory on location selection based on talent availability across regions',
      'Developed and introduced a new Market Entry Advisory practice',
      'Acted as a trusted partner in both execution and strategic insight during their India entry',
    ],
    challenges: [
      'Needed to establish a senior leadership team from scratch during India market entry',
      'Lacked insight into the local talent landscape and optimal location for operations',
      'Required strategic support beyond hiring to make informed setup decisions',
    ],
    impacts: [
      'Successfully enabled India market entry by building a strong leadership foundation',
      'Helped the client recognize the importance of aligning location strategy with talent availability',
      'Led to the creation of Athena\'s Market Entry Advisory practice, now a core service offering',
      'Established a long-term partnership rooted in both strategic advisory and execution excellence',
    ],
    benefits: [
      'Successfully enabled market entry with strong leadership foundation',
      'Aligned location strategy with talent availability insights',
      'Led to creation of Market Entry Advisory practice',
      'Established long-term strategic and execution partnership',
    ],
    quote: "Athena's dual expertise in both strategic advisory and execution made them the perfect partner for our India entry.",
    quoteAuthor: 'VP of International Operations, UnitedHealthcare',
    stats: [
      { value: '400K+', label: 'Employees' },
      { value: '$400B+', label: 'Revenue' },
      { value: '130+', label: 'Countries' },
      { value: 'C-Suite', label: 'Roles Filled' },
    ],
  },
  {
    id: 'sophos',
    company: 'Sophos',
    logo: '/client-sophos.webp',
    industryImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tagline: 'Global cybersecurity leader — Engineering operations consolidation into India',
    tags: [
      { label: 'Engineering Scale', color: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' },
      { label: 'Relocation', color: 'bg-violet-400/10 text-violet-400 border-violet-400/20' },
      { label: 'Talent Build', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Cybersecurity / Technology',
    accent: 'from-cyan-400 to-teal-500',
    accentSolid: '#22d3ee',
    overview: 'Sophos is a global cybersecurity leader based in the UK, founded in 1985. Renowned for its cloud-native platform Sophos Central, it protects over 500,000 organizations and more than 100 million users across 150+ countries.',
    scenario: 'Sophos initially partnered with us to hire a Head of HR in the U.K. As Sophos scaled globally, they decided to consolidate their engineering operations into India to improve efficiency and access deep talent pools.',
    contributions: [
      'Initially hired Sophos\'s Head of HR in the U.K.',
      'Built and executed a relocation strategy to transfer engineering roles into India',
      'Recruited across multiple engineering verticals: software, QA, site reliability, product, and support',
      'Provided benchmarking data and cultural-transition support to ensure minimal operational disruption',
    ],
    challenges: [
      'Needed to relocate and integrate engineering teams from the U.S., U.K., and Poland into India',
      'Required seamless hiring for 150 roles, scaling to 650 within three years',
      'Needed to maintain high-quality talent standards across diverse global functions',
      'Required cultural alignment and consistency with global processes during consolidation',
    ],
    impacts: [
      'Successfully scaled engineering operations from 150 to 650 roles within three years',
      'Enabled consolidation of global engineering talent into a high-capability India hub',
      'Achieved substantial cost and operational efficiencies while maintaining global standards',
      'Strengthened global delivery model and future scalability',
    ],
    benefits: [
      'Scaled engineering operations from 150 to 650 roles in three years',
      'Consolidated global engineering talent into high-capability India hub',
      'Achieved substantial cost and operational efficiencies',
      'Strengthened global delivery model and future scalability',
    ],
    quote: "Athena understood our need to move fast without compromising quality. They delivered a relocation and hiring strategy that scaled with our ambitions.",
    quoteAuthor: 'CHRO, Sophos',
    stats: [
      { value: '500K+', label: 'Orgs Protected' },
      { value: '150→650', label: 'Roles Scaled' },
      { value: '150+', label: 'Countries' },
      { value: '3 yrs', label: 'Scale Timeline' },
    ],
  },
  {
    id: 'systra',
    company: 'SYSTRA',
    logo: '/client-systra.webp',
    industryImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    tagline: 'Global French engineering firm — India post-acquisition restructuring & leadership build',
    tags: [
      { label: 'Post-Acquisition', color: 'bg-orange-400/10 text-orange-400 border-orange-400/20' },
      { label: 'Restructuring', color: 'bg-rose-400/10 text-rose-400 border-rose-400/20' },
      { label: 'Leadership Build', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
    ],
    industry: 'Engineering / Infrastructure',
    accent: 'from-orange-400 to-red-500',
    accentSolid: '#fb923c',
    overview: 'SYSTRA is a global French engineering and consulting group specializing in mobility infrastructure and public transport systems. Founded in 1957, with over 11,000 professionals delivering integrated infrastructure solutions in more than 80 countries.',
    scenario: 'SYSTRA entered the Indian market through the acquisition of a local company. Post-acquisition, they sought to professionalize and restructure their India operations to align with global standards and support future growth.',
    contributions: [
      'Partnered closely with global and regional leadership to define the India org structure',
      'Hired key roles including CFO, COO, Head of HR, and other leadership positions',
      'Provided market intelligence to support compensation structuring and talent calibration',
      'Ensured alignment of new hires with both global expectations and local market realities',
    ],
    challenges: [
      'Acquired entity lacked professional leadership and scalable operational structure',
      'Need to integrate Indian operations with global systems and culture',
      'Urgent requirement for leadership talent across finance, operations, and HR',
      'Limited visibility into India\'s senior talent pool within engineering and infrastructure',
    ],
    impacts: [
      'Strengthened India leadership bench, enabling smoother post-acquisition integration',
      'Improved governance, financial control, and operational efficiency across India operations',
      'Facilitated cultural alignment and long-term capability building',
      'Positioned the India business as a key delivery hub in global portfolio',
    ],
    benefits: [
      'Strengthened leadership bench for smoother post-acquisition integration',
      'Improved governance, financial control, and operational efficiency',
      'Facilitated cultural alignment and long-term capability building',
      'Positioned India as key delivery hub in global portfolio',
    ],
    quote: "Athena's deep understanding of both global standards and local market dynamics was instrumental in helping us professionalize our India operations.",
    quoteAuthor: 'Regional Director, SYSTRA Asia',
    stats: [
      { value: '80+', label: 'Countries' },
      { value: '11K+', label: 'Professionals' },
      { value: 'C-Suite', label: 'Roles Placed' },
      { value: '1957', label: 'Founded' },
    ],
  },
  {
    id: 'ovs',
    company: 'OVS',
    logo: '/client-ovs.webp',
    industryImage: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80',
    tagline: "Italy's largest fashion retailer — India market entry with MD & HR leadership placement",
    tags: [
      { label: 'Market Entry', color: 'bg-pink-400/10 text-pink-400 border-pink-400/20' },
      { label: 'Retail Leadership', color: 'bg-violet-400/10 text-violet-400 border-violet-400/20' },
      { label: 'Governance', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Fashion / Retail',
    accent: 'from-pink-400 to-rose-500',
    accentSolid: '#f472b6',
    overview: 'OVS S.p.A., founded in 1972 in Venice, is Italy\'s largest fashion retailer. The company operates over 2,200 stores worldwide. In 2024, the group recorded approximately €1.63 billion in sales.',
    scenario: 'OVS engaged us to set up their India operations. They required senior leadership to establish governance, align with global practices, and spearhead market entry.',
    contributions: [
      'Placed a Managing Director to lead India operation and ensure strategic alignment',
      'Appointed a Head of HR to develop policies, talent systems, and people processes',
      'Provided insights on pay structure, leadership competencies, and local HR ecosystem',
    ],
    challenges: [
      'Entering a competitive retail sector without a local leadership structure',
      'Needed experienced executives aligned with global retail strategy and brand ethos',
      'Required rapid build-out of governance, HR, and commercial operations in a new geography',
    ],
    impacts: [
      'Established a solid leadership foundation to launch and scale in India',
      'Brought global retail expertise into the India team, enabling smoother operations',
      'Positioned OVS India for sustainable growth with proper governance and leadership alignment',
    ],
    benefits: [
      'Established solid leadership foundation to launch and scale in India',
      'Brought global retail expertise into the India team',
      'Enabled smoother operations with proper governance',
      'Positioned OVS India for sustainable growth',
    ],
    quote: "Athena's deep understanding of retail operations and their ability to find leaders who truly understand our brand was invaluable.",
    quoteAuthor: 'International Expansion Director, OVS',
    stats: [
      { value: '2,200+', label: 'Stores' },
      { value: '€1.63B', label: 'Revenue' },
      { value: '1972', label: 'Founded' },
      { value: 'MD+HR', label: 'Roles Placed' },
    ],
  },
  {
    id: 'bytedance',
    company: 'ByteDance',
    logo: '/client-bytedance.webp',
    industryImage: '/bytedance-tiktok-tile.webp',
    tagline: 'Global tech giant — India monetization team build at massive scale (175+ hires in year one)',
    tags: [
      { label: 'Scale Hiring', color: 'bg-red-400/10 text-red-400 border-red-400/20' },
      { label: 'Monetization', color: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
      { label: 'Talent Strategy', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Technology / Social Media',
    accent: 'from-red-400 to-rose-500',
    accentSolid: '#f87171',
    overview: 'ByteDance is a Chinese digital technology company founded in 2012. Developer of TikTok, Douyin, Toutiao, CapCut, and Lark, reaching over 2.5 billion people across 150+ countries with approximately 150,000 employees globally.',
    scenario: 'ByteDance entered India aggressively around 2017–2018, launching TikTok and other apps. As the Monetization & Operations team scaled, they needed a right-sized strategy to build the monetization function where early hires shaped major revenue drivers.',
    contributions: [
      'Designed and implemented a talent channel strategy optimized for India\'s unique job market',
      'Executed 175+ leadership and core-team hires in the monetization function during the first year',
      'Provided continuous market insights to shape recruitment, location, compensation, and candidate pipeline',
    ],
    challenges: [
      'Lacked established hiring and channel strategies in their new, emerging market (~300M users)',
      'Urgent need for 175+ monetization roles within the first year',
      'Needed to define optimal sourcing channels in a multicultural, multilingual market',
      'Required speed, scale, and precision hiring simultaneously under global governance',
    ],
    impacts: [
      'Established a high-capacity monetization team with over 175 professionals in year one',
      'Positioned ByteDance to scale monetization operations efficiently in India',
      'Enabled seamless alignment between global product strategy and local execution',
      'Built critical foundational team enabling rapid market monetization readiness',
    ],
    benefits: [
      'Established high-capacity monetization team with 175+ professionals in year one',
      'Positioned ByteDance to scale monetization operations efficiently in India',
      'Enabled seamless alignment between global product strategy and local execution',
      'Built critical foundational team enabling rapid market monetization readiness',
    ],
    quote: "Athena's ability to execute at scale while maintaining quality was exceptional.",
    quoteAuthor: 'VP of Monetization & Operations, ByteDance India',
    stats: [
      { value: '175+', label: 'Year 1 Hires' },
      { value: '2.5B+', label: 'Users Globally' },
      { value: '150+', label: 'Countries' },
      { value: '300M', label: 'India Users' },
    ],
  },
  {
    id: 'divido',
    company: 'Divido',
    logo: '/client-divido.webp',
    industryImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
    tagline: 'UK fintech — India tech hub build for white-label BNPL platform',
    tags: [
      { label: 'Tech Hub', color: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20' },
      { label: 'Engineering', color: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' },
      { label: 'Site Leadership', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Fintech / Payments',
    accent: 'from-indigo-400 to-blue-500',
    accentSolid: '#818cf8',
    overview: 'Divido is a London-based fintech platform founded in 2014 that enabled banks, retailers, and payment partners to offer white-label BNPL financing at checkout. Operating in over 10 markets, serving more than 1,000 clients with approximately $45 million in total funding.',
    scenario: 'Divido had successfully raised a Series B round and was looking to scale its engineering capabilities. The company sought to establish a product and technology center in India to drive global innovation.',
    contributions: [
      'Identified and placed the India Site Leader with deep fintech and scale-up experience',
      'Built the core tech team across frontend, backend, QA, DevOps, and product management',
      'Provided market insights on compensation, tech landscape, and organizational structuring',
      'Ensured a smooth cross-border onboarding and integration process',
    ],
    challenges: [
      'Needed to build a high-performance tech team from scratch in India',
      'Required a strong India site leader capable of aligning with UK headquarters',
      'Tight timelines to hire niche fintech talent across product, engineering, and data functions',
      'Needed alignment with agile product roadmap and European compliance standards',
    ],
    impacts: [
      'Successfully established India tech hub, enabling faster product iteration and global scalability',
      'Enabled a cost-effective, high-output engineering center',
      'Strengthened cross-functional collaboration between UK and India teams',
      'Positioned India as a strategic delivery and innovation center within global operating model',
    ],
    benefits: [
      'Successfully established India tech hub for faster product iteration',
      'Enabled cost-effective, high-output engineering center',
      'Strengthened cross-functional collaboration between UK and India teams',
      'Positioned India as strategic delivery and innovation center',
    ],
    quote: "Athena's expertise in building tech teams in India was exactly what we needed.",
    quoteAuthor: 'CTO, Divido',
    stats: [
      { value: '$45M', label: 'Total Funding' },
      { value: '1,000+', label: 'Clients' },
      { value: '10+', label: 'Markets' },
      { value: 'Full Stack', label: 'Team Built' },
    ],
  },
];

/* ─────────────────────── Carousel Card ─────────────────────── */
function CarouselCard({ cs, index, isActive, onClick }: {
  cs: CaseStudy; index: number; isActive: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex-shrink-0 w-[320px] md:w-[360px] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
        ${isActive
          ? 'ring-2 ring-brand-400 shadow-2xl shadow-brand-400/25 scale-[1.02]'
          : 'hover:shadow-2xl hover:-translate-y-1.5 shadow-lg'
        }`}
      style={{ minHeight: '480px' }}
    >
      {/* Background industry image */}
      <img
        src={cs.industryImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {/* Accent tint on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to top, ${cs.accentSolid}20, transparent 60%)` }} />

      {/* Top bar: Case study number + Industry badge */}
      <div className="absolute top-0 left-0 right-0 p-5 flex items-center justify-between z-10">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 drop-shadow">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-[10px] font-medium text-white/90 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {cs.industry}
        </span>
      </div>

      {/* Bottom content anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {/* Logo */}
        <div className="h-14 w-14 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center overflow-hidden mb-4 shadow-xl p-1.5 border border-white/20">
          {cs.logo ? (
            <img src={cs.logo} alt={cs.company} className="max-h-full max-w-full object-contain" />
          ) : (
            <span className="text-midnight-900 font-display font-bold text-xl">{cs.company.charAt(0)}</span>
          )}
        </div>

        {/* Company name */}
        <h3 className="font-display text-2xl font-bold text-white mb-2 drop-shadow-lg">
          {cs.company}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-2 drop-shadow">{cs.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {cs.tags.slice(0, 3).map((tag) => (
            <span key={tag.label} className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[11px] font-medium text-white/80">
              {tag.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:text-brand-300 transition-colors drop-shadow">
          <span>Read full story</span>
          <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </button>
  );
}

/* ─────────────────────── Full Case Study View ─────────────────────── */
function CaseStudyFull({ cs, onClose, onPrev, onNext, currentIndex, total }: {
  cs: CaseStudy; onClose: () => void; onPrev: () => void; onNext: () => void;
  currentIndex: number; total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape, navigate with arrows
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') onNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') onPrev();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  // Scroll wheel to navigate
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelAccum = useRef(0);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 2;
    const atTop = el.scrollTop < 2;

    if (atBottom && e.deltaY > 0) {
      wheelAccum.current += e.deltaY;
      if (wheelAccum.current > 150) { onNext(); wheelAccum.current = 0; }
    } else if (atTop && e.deltaY < 0) {
      wheelAccum.current += Math.abs(e.deltaY);
      if (wheelAccum.current > 150) { onPrev(); wheelAccum.current = 0; }
    } else {
      wheelAccum.current = 0;
    }

    if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(() => { wheelAccum.current = 0; }, 300);
  }, [onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Content panel */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        className="relative z-10 ml-auto w-full max-w-4xl bg-white overflow-y-auto animate-slideInRight"
        style={{ animation: 'slideInRight 0.4s cubic-bezier(.16,1,.3,1)' }}
      >
        {/* Sticky navigation bar */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100">
          <div className="flex items-center justify-between px-6 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-slate-200`}>
                {cs.logo ? (
                  <img src={cs.logo} alt="" className="h-6 w-6 object-contain" />
                ) : (
                  <span className="text-white font-bold text-xs">{cs.company.charAt(0)}</span>
                )}
              </div>
              <span className="font-display font-bold text-slate-900 text-sm">{cs.company}</span>
              <span className="text-xs text-slate-400 hidden sm:inline">·  {cs.industry}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Prev / Next */}
              <button onClick={onPrev} disabled={currentIndex === 0}
                className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="text-xs text-slate-400 font-medium w-12 text-center">{currentIndex + 1} / {total}</span>
              <button onClick={onNext} disabled={currentIndex === total - 1}
                className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
              {/* Close */}
              <button onClick={onClose}
                className="ml-2 h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="relative py-16 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #0f172a 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 50%, ${cs.accentSolid}10, transparent 70%)` }} />

          <div className="relative z-10 px-6 lg:px-10">
            <div className="flex items-start gap-5 mb-8">
              <div className={`flex-shrink-0 h-20 w-20 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-2xl ring-4 ring-white/10 p-2`}>
                {cs.logo ? (
                  <img src={cs.logo} alt={cs.company} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="text-white font-display font-bold text-3xl">{cs.company.charAt(0)}</span>
                )}
              </div>
              <div>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-white">{cs.company}</h1>
                <p className="text-white/40 text-lg mt-1">{cs.industry}</p>
              </div>
            </div>

            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-8">{cs.tagline}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {cs.tags.map((tag) => (
                <span key={tag.label} className={`px-4 py-1.5 rounded-full border text-xs font-semibold ${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cs.stats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/40 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="px-6 lg:px-10 py-10 border-b border-slate-100">
          <span className="section-label">Company Overview</span>
          <p className="text-slate-600 leading-relaxed mt-4 text-[15px]">{cs.overview}</p>
        </div>

        {/* The Scenario */}
        <div className="px-6 lg:px-10 py-10 border-b border-slate-100">
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">The Scenario</h3>
          <p className="text-slate-600 leading-relaxed mb-8 text-[15px]">{cs.scenario}</p>

          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-600 mb-4">Key Challenges</h4>
          <div className="space-y-3">
            {cs.challenges.map((c, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100/50">
                <span className="flex-shrink-0 h-7 w-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <p className="text-slate-600 text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Contribution */}
        <div className="px-6 lg:px-10 py-10 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">Our Contribution</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {cs.contributions.map((item, i) => {
              const colors = ['text-brand-400', 'text-cyan-500', 'text-emerald-500', 'text-violet-500'];
              const icons = ['ri-shield-check-line', 'ri-user-star-line', 'ri-team-line', 'ri-bar-chart-box-line'];
              return (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-slate-50 flex items-center justify-center">
                    <i className={`${icons[i % 4]} text-lg ${colors[i % 4]}`} />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact & Results */}
        <div className="px-6 lg:px-10 py-10 border-b border-slate-100">
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">Impact & Results</h3>
          <div className="space-y-3 mb-10">
            {cs.impacts.map((item, i) => {
              const borderColors = ['border-l-brand-400', 'border-l-cyan-400', 'border-l-emerald-400', 'border-l-violet-400'];
              return (
                <div key={i} className={`p-4 border border-slate-100 border-l-4 ${borderColors[i % 4]} rounded-xl bg-white`}>
                  <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-midnight-900 to-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-4 left-4 text-5xl text-brand-400/15 font-serif">&ldquo;</div>
            <blockquote className="relative z-10 text-lg text-white/80 leading-relaxed italic mb-5 pl-2">
              &ldquo;{cs.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pl-2">
              <div className="h-10 w-10 rounded-full bg-brand-400 flex items-center justify-center">
                <i className="ri-user-line text-midnight-900" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{cs.quoteAuthor.split(',')[0]}</div>
                <div className="text-xs text-white/50">{cs.quoteAuthor.split(',').slice(1).join(',').trim()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation footer */}
        <div className="px-6 lg:px-10 py-8 flex items-center justify-between bg-slate-50">
          <button onClick={onPrev} disabled={currentIndex === 0}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Previous
          </button>
          <Link href="/#consultation" className="btn-primary !rounded-full !px-6 !py-3 text-sm font-semibold">
            Book a Strategy Call
          </Link>
          <button onClick={onNext} disabled={currentIndex === total - 1}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            Next
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
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

/* ─────────────────────── Main Page ─────────────────────── */
export default function CaseStudiesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <main className="w-full bg-white">

      {/* ━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-midnight-900/90 to-teal-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div aria-hidden className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-400/10 blur-[120px] animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-brand-400">
              <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
              Case Studies
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
            Real Results,{' '}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed drop-shadow">
            Deep-dive into how we&apos;ve helped global companies establish, grow, and lead in India and the Middle East.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 95, suffix: '%', label: 'Client Success Rate' },
              { value: 200, suffix: '+', label: 'Clients Served' },
              { value: 33, suffix: '+', label: 'Countries Covered' },
              { value: 7, suffix: '', label: 'Featured Case Studies' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-white/40 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━ CAROUSEL SECTION ━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="section-label">Our Work</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mt-4">
                  Explore Our Case Studies
                </h2>
                <p className="text-slate-500 mt-3 max-w-lg">
                  Scroll through to explore, or click any card to read the full story.
                </p>
              </div>

              {/* Scroll controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="h-11 w-11 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="h-11 w-11 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal scroll carousel */}
          <div className="relative">
            {/* Left fade */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            )}
            {/* Right fade */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            )}

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 px-6 lg:px-12 scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {CASE_STUDIES.map((cs, idx) => (
                <div key={cs.id} style={{ scrollSnapAlign: 'start' }}>
                  <CarouselCard
                    cs={cs}
                    index={idx}
                    isActive={activeIndex === idx}
                    onClick={() => setActiveIndex(idx)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8">
            {CASE_STUDIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  // Also scroll the carousel to show this card
                  const el = scrollRef.current;
                  if (el) el.scrollTo({ left: idx * 380, behavior: 'smooth' });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-brand-400' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━ CTA ━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-24 bg-gradient-to-br from-midnight-900 to-black overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-10" />
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-400/5 blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Want to be our next{' '}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">success story</span>?
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            Let us show you how strategic advisory can accelerate your market entry into India and the Middle East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#consultation" className="btn-primary !rounded-full !px-8 !py-4 font-semibold shadow-lg">
              Book a Strategy Call
            </Link>
            <Link href="/services/market-entry-strategy"
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* ━━━━━━━━━━━━━━━━━ FULL CASE STUDY OVERLAY ━━━━━━━━━━━━━━━━━ */}
      {activeIndex !== null && (
        <CaseStudyFull
          cs={CASE_STUDIES[activeIndex]}
          currentIndex={activeIndex}
          total={CASE_STUDIES.length}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex((prev) => Math.max(0, (prev ?? 0) - 1))}
          onNext={() => setActiveIndex((prev) => Math.min(CASE_STUDIES.length - 1, (prev ?? 0) + 1))}
        />
      )}

      {/* Hide scrollbar for carousel */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
