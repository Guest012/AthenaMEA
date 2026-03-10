'use client';

import { useEffect, useRef, useState } from 'react';
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
  tagline: string;
  tags: { label: string; color: string }[];
  industry: string;
  accent: string;
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
    logo: '/client-grupobimbo.jpeg',
    tagline: "World's largest baking company — India market entry via acquisition & leadership build",
    tags: [
      { label: 'Integration', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
      { label: 'Leadership Build', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
      { label: 'Due Diligence', color: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
    ],
    industry: 'FMCG / Food & Beverage',
    accent: 'from-brand-400 to-amber-500',
    overview: 'Grupo Bimbo, founded in 1945 and headquartered in Mexico City, is the world\'s largest baking company with operations in over 33 countries across the Americas, Europe, Asia, and Africa. The company runs more than 200 bakeries and 1,500 sales centers, employing approximately 150,000 people. Grupo Bimbo produces over 9,000 products across a portfolio of more than 100 brands, including household names like Bimbo, Marinela, Barcel, and Sara Lee. With one of the largest global distribution networks, spanning over 58,000 direct routes, it reaches more than 3 million retail points worldwide.',
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
    logo: '/client-unitedhealthgroup.png',
    tagline: 'Global healthcare leader — India market entry with leadership build & location advisory',
    tags: [
      { label: 'Market Entry', color: 'bg-sky-400/10 text-sky-400 border-sky-400/20' },
      { label: 'Leadership Build', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
      { label: 'Location Advisory', color: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
    ],
    industry: 'Healthcare / Insurance',
    accent: 'from-sky-400 to-blue-500',
    overview: 'UnitedHealth Group, founded in 1977 and headquartered in Minnesota, is a global healthcare leader with over 400,000 employees and over 400 billion dollars in annual revenue in 2024. It operates through UnitedHealthcare for insurance and Optum for health services, technology, and pharmacy. Known for its vertically integrated model, UnitedHealth combines insurance, care delivery, and analytics to improve outcomes and reduce costs. Operating in more than 130 countries, it is a major force in value-based healthcare.',
    scenario: 'UnitedHealthcare was entering India and needed to build a strong leadership team. They also lacked clarity on the best city for operations based on talent availability. They sought a partner who could support both executive hiring and provide strategic advice on location feasibility.',
    contributions: [
      'Built the core leadership team in India, including CFO, COO, CSO, Chief Delivery Officer, and multiple delivery heads',
      'Provided strategic advisory on location selection based on talent availability across regions',
      'Developed and introduced a new Market Entry Advisory practice, offering services like location feasibility and talent topography',
      'Acted as a trusted partner in both execution (hiring) and strategic insight (market intelligence) during their India entry',
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
    quote: "Athena's dual expertise in both strategic advisory and execution made them the perfect partner for our India entry. They didn't just help us hire—they helped us make the right strategic decisions.",
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
    logo: '/client-sophos.jpeg',
    tagline: 'Global cybersecurity leader — Engineering operations consolidation into India',
    tags: [
      { label: 'Engineering Scale', color: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' },
      { label: 'Relocation', color: 'bg-violet-400/10 text-violet-400 border-violet-400/20' },
      { label: 'Talent Build', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Cybersecurity / Technology',
    accent: 'from-cyan-400 to-teal-500',
    overview: 'Sophos is a global cybersecurity leader based in the UK, founded in 1985 and headquartered in Abingdon, Oxfordshire. Renowned for its cloud-native platform Sophos Central, it provides integrated endpoint, network, email, and cloud security solutions, anchored by AI-powered threat intelligence. Sophos protects over 500,000 organizations and more than 100 million users across 150+ countries. Acquired by Thoma Bravo in 2020 and bolstered by the acquisition of Secureworks in 2025, Sophos continues to expand its global footprint.',
    scenario: 'Sophos initially partnered with us to hire a Head of HR in the U.K. As Sophos scaled globally, they decided to consolidate their engineering operations into India to improve efficiency and access deep talent pools.',
    contributions: [
      'Initially hired Sophos\'s Head of HR in the U.K.',
      'Built and executed a relocation strategy to transfer engineering roles into India',
      'Recruited across multiple engineering verticals: software, QA, site reliability, product, and support',
      'Provided benchmarking data and cultural-transition support to ensure minimal operational disruption',
    ],
    challenges: [
      'Needed to relocate and integrate engineering teams from the U.S., U.K., and Poland into India',
      'Required seamless hiring for a large volume — initially 150 roles, scaling to 650 within three years',
      'Needed to maintain high-quality talent standards across diverse global functions',
      'Required cultural alignment and consistency with global processes during consolidation',
    ],
    impacts: [
      'Successfully relocated and ramped up engineering operations in India, scaling from 150 to 650 roles within three years',
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
    logo: '/client-systra.jpeg',
    tagline: 'Global French engineering firm — India post-acquisition restructuring & leadership build',
    tags: [
      { label: 'Post-Acquisition', color: 'bg-orange-400/10 text-orange-400 border-orange-400/20' },
      { label: 'Restructuring', color: 'bg-rose-400/10 text-rose-400 border-rose-400/20' },
      { label: 'Leadership Build', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
    ],
    industry: 'Engineering / Infrastructure',
    accent: 'from-orange-400 to-red-500',
    overview: 'SYSTRA is a global French engineering and consulting group specializing in mobility infrastructure and public transport systems. Founded in 1957 and headquartered in Paris, the firm offers end-to-end services across rail, metro, tram, bridge, and tunnel projects. With a workforce of over 11,000 professionals, SYSTRA delivers integrated infrastructure solutions in more than 80 countries. Their portfolio includes iconic transit projects such as Dubai Metro, Mumbai Metro, London Crossrail, and high-speed rail systems.',
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
    quote: "Athena's deep understanding of both global standards and local market dynamics was instrumental in helping us professionalize our India operations. They delivered exactly what we needed.",
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
    logo: '',
    tagline: "Italy's largest fashion retailer — India market entry with MD & HR leadership placement",
    tags: [
      { label: 'Market Entry', color: 'bg-pink-400/10 text-pink-400 border-pink-400/20' },
      { label: 'Retail Leadership', color: 'bg-violet-400/10 text-violet-400 border-violet-400/20' },
      { label: 'Governance', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Fashion / Retail',
    accent: 'from-pink-400 to-rose-500',
    overview: 'OVS S.p.A. (formerly Oviesse), founded in 1972 in Venice, is Italy\'s largest and most recognizable fashion retailer. The company operates over 2,200 stores worldwide under brands like OVS, Upim, Blukids, Stefanel, Piombo, and Les Copains. With full vertical integration across design, sourcing, and distribution, OVS blends Italian style and quality with value-driven collections. In 2024, the group recorded approximately €1.63 billion in sales and an adjusted EBITDA of €195 million.',
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
    quote: "Athena's deep understanding of retail operations and their ability to find leaders who truly understand our brand was invaluable. They helped us establish a strong foundation for our India entry.",
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
    logo: '/client-bytedance.png',
    tagline: 'Global tech giant — India monetization team build at massive scale (175+ hires in year one)',
    tags: [
      { label: 'Scale Hiring', color: 'bg-red-400/10 text-red-400 border-red-400/20' },
      { label: 'Monetization', color: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
      { label: 'Talent Strategy', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Technology / Social Media',
    accent: 'from-red-400 to-rose-500',
    overview: 'ByteDance Ltd. is a Chinese digital technology company founded in 2012, headquartered in Beijing. It is the developer of globally popular content platforms including TikTok, Douyin, Toutiao, CapCut, and Lark, reaching users across more than 150 countries and serving over 2.5 billion people. The company employs approximately 150,000 professionals globally. ByteDance is known for its advanced AI-driven recommendation algorithms, which power highly engaging personalized content experiences.',
    scenario: 'ByteDance entered India aggressively around 2017–2018, launching TikTok and other apps. As the Monetization & Operations team scaled, they needed a right-sized strategy to build and optimize their growing organizational capability — particularly the monetization function where early hires shaped major revenue drivers.',
    contributions: [
      'Designed and implemented a talent channel strategy optimized for India\'s unique job market',
      'Executed 175+ leadership and core-team hires in the monetization function during the first year',
      'Provided continuous market insights to shape recruitment, location, compensation, and candidate pipeline',
    ],
    challenges: [
      'Lacked established hiring and channel strategies in their new, emerging market (~300M users)',
      'Urgent need for 175+ monetization roles within the first year, across operations and strategy',
      'Needed to define optimal sourcing channels in a multicultural, multilingual market',
      'Required speed, scale, and precision hiring simultaneously under global governance',
    ],
    impacts: [
      'Established a high-capacity monetization team with over 175 professionals in year one',
      'Positioned ByteDance to scale monetization operations efficiently in India',
      'Enabled seamless alignment between global product strategy and local execution',
      'Built out critical foundational team enabling rapid market monetization readiness',
    ],
    benefits: [
      'Established high-capacity monetization team with 175+ professionals in year one',
      'Positioned ByteDance to scale monetization operations efficiently in India',
      'Enabled seamless alignment between global product strategy and local execution',
      'Built critical foundational team enabling rapid market monetization readiness',
    ],
    quote: "Athena's ability to execute at scale while maintaining quality was exceptional. They helped us build a world-class monetization team that became the backbone of our India operations.",
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
    logo: '',
    tagline: 'UK fintech — India tech hub build for white-label BNPL platform',
    tags: [
      { label: 'Tech Hub', color: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20' },
      { label: 'Engineering', color: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' },
      { label: 'Site Leadership', color: 'bg-brand-400/10 text-brand-400 border-brand-400/20' },
    ],
    industry: 'Fintech / Payments',
    accent: 'from-indigo-400 to-blue-500',
    overview: 'Divido is a London-based fintech platform founded in 2014 that enabled banks, retailers, and payment partners to offer white-label Buy Now, Pay Later (BNPL) financing at checkout. Operating in over 10 markets and serving more than 1,000 clients, Divido provided seamlessly integrated, multi-lender retail finance across online, in-store, and mobile channels. In 2021, Divido raised a $30 million Series B round led by HSBC and ING, bringing its total funding to approximately $45 million.',
    scenario: 'Divido had successfully raised a Series B round and was looking to scale its engineering capabilities. The company sought to establish a product and technology center in India to drive global innovation, support its growing client base, and optimize development costs.',
    contributions: [
      'Identified and placed the India Site Leader with deep fintech and scale-up experience',
      'Built the core tech team across frontend, backend, QA, DevOps, and product management',
      'Provided market insights on compensation, tech landscape, and organizational structuring',
      'Ensured a smooth cross-border onboarding and integration process',
    ],
    challenges: [
      'Needed to build a high-performance tech team from scratch in India',
      'Required a strong India site leader capable of aligning with UK headquarters and scaling teams rapidly',
      'Tight timelines to hire niche fintech talent across product, engineering, and data functions',
      'Needed to ensure alignment with agile, fast-paced product roadmap and European compliance standards',
    ],
    impacts: [
      'Successfully established India tech hub, enabling faster product iteration and global scalability',
      'Enabled the client to operate a cost-effective, high-output engineering center',
      'Strengthened cross-functional collaboration between UK and India teams',
      'Positioned India as a strategic delivery and innovation center within global operating model',
    ],
    benefits: [
      'Successfully established India tech hub for faster product iteration',
      'Enabled cost-effective, high-output engineering center',
      'Strengthened cross-functional collaboration between UK and India teams',
      'Positioned India as strategic delivery and innovation center',
    ],
    quote: "Athena's expertise in building tech teams in India was exactly what we needed. They helped us establish a world-class engineering center that became integral to our global operations.",
    quoteAuthor: 'CTO, Divido',
    stats: [
      { value: '$45M', label: 'Total Funding' },
      { value: '1,000+', label: 'Clients' },
      { value: '10+', label: 'Markets' },
      { value: 'Full Stack', label: 'Team Built' },
    ],
  },
];

/* ─────────────────────── Main Page ─────────────────────── */
export default function CaseStudiesPage() {
  const [activeStudy, setActiveStudy] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'scenario' | 'contribution' | 'impact'>('scenario');
  const detailRef = useRef<HTMLDivElement>(null);

  const activeCase = CASE_STUDIES.find((cs) => cs.id === activeStudy);

  // Scroll to detail when a case study is selected
  useEffect(() => {
    if (activeStudy && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeStudy]);

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
        <div aria-hidden className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-400/8 blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />

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


      {/* ━━━━━━━━━━━━━━━━━ CASE STUDY CARDS GRID ━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="section-label">Our Work</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mt-4">
              Select a Case Study to Explore
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Click on any company below to see the full story — from challenge to impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => {
                  setActiveStudy(activeStudy === cs.id ? null : cs.id);
                  setActiveTab('scenario');
                }}
                className={`group relative text-left rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                  activeStudy === cs.id
                    ? 'border-brand-400 shadow-lg shadow-brand-400/15 bg-white ring-2 ring-brand-400/20'
                    : 'border-slate-200 bg-white hover:border-brand-300 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Active indicator */}
                {activeStudy === cs.id && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-amber-400" />
                )}

                <div className="p-6">
                  {/* Logo + company */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br ${cs.accent} flex items-center justify-center overflow-hidden`}>
                      {cs.logo ? (
                        <img src={cs.logo} alt={cs.company} className="h-full w-full object-cover rounded-xl" />
                      ) : (
                        <span className="text-white font-display font-bold text-lg">{cs.company.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                        {cs.company}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">{cs.industry}</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{cs.tagline}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span key={tag.label} className={`px-3 py-1 rounded-full border text-xs font-semibold ${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━ EXPANDED DETAIL ━━━━━━━━━━━━━━━━━ */}
      {activeCase && (
        <section ref={detailRef} className="scroll-mt-24 border-t-4 border-brand-400">
          {/* Detail Header */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-midnight-900 py-16 overflow-hidden relative">
            <div aria-hidden className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className={`flex-shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br ${activeCase.accent} flex items-center justify-center overflow-hidden shadow-xl`}>
                    {activeCase.logo ? (
                      <img src={activeCase.logo} alt={activeCase.company} className="h-full w-full object-cover rounded-2xl" />
                    ) : (
                      <span className="text-white font-display font-bold text-3xl">{activeCase.company.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{activeCase.company}</h2>
                    <p className="text-white/50 text-lg mt-1">{activeCase.industry}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveStudy(null)}
                  className="self-start lg:self-center px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-all"
                >
                  <i className="ri-close-line mr-1" /> Close Case Study
                </button>
              </div>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {activeCase.stats.map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-white/40 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <span className="section-label">Company Overview</span>
                  <p className="text-slate-600 leading-relaxed mt-4">{activeCase.overview}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {activeCase.tags.map((tag) => (
                      <span key={tag.label} className={`px-4 py-2 rounded-full border text-sm font-semibold ${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Content: Scenario / Contribution / Impact */}
          <div className="bg-slate-50">
            {/* Tab nav */}
            <div className="border-b border-slate-200 bg-white sticky top-[81px] z-20">
              <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <nav className="flex gap-1 -mb-px">
                  {([
                    { id: 'scenario' as const, label: 'The Scenario', icon: 'ri-focus-3-line' },
                    { id: 'contribution' as const, label: 'Our Contribution', icon: 'ri-service-line' },
                    { id: 'impact' as const, label: 'Impact & Results', icon: 'ri-bar-chart-grouped-line' },
                  ]).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'border-brand-400 text-brand-700'
                          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <i className={tab.icon} />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab content */}
            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14">

              {/* SCENARIO TAB */}
              {activeTab === 'scenario' && (
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">The Scenario</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">{activeCase.scenario}</p>

                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-600 mb-4">Key Challenges</h4>
                    <div className="space-y-3">
                      {activeCase.challenges.map((c, i) => (
                        <div key={i} className="flex gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                          <span className="flex-shrink-0 h-7 w-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                          <p className="text-slate-600 text-sm leading-relaxed">{c}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote on right */}
                  <div className="flex items-center">
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-midnight-900 to-slate-900 text-white">
                      <i className="ri-double-quotes-l text-5xl text-brand-400/20 absolute top-4 left-4" />
                      <blockquote className="relative z-10 text-lg text-white/80 leading-relaxed italic mb-6 pl-2">
                        &ldquo;{activeCase.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3 pl-2">
                        <div className="h-10 w-10 rounded-full bg-brand-400 flex items-center justify-center">
                          <i className="ri-user-line text-midnight-900" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{activeCase.quoteAuthor.split(',')[0]}</div>
                          <div className="text-xs text-white/50">{activeCase.quoteAuthor.split(',').slice(1).join(',').trim()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CONTRIBUTION TAB */}
              {activeTab === 'contribution' && (
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-8">Our Contribution</h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    {activeCase.contributions.map((item, i) => {
                      const colors = ['text-brand-400', 'text-cyan-500', 'text-emerald-500', 'text-violet-500'];
                      const icons = ['ri-shield-check-line', 'ri-user-star-line', 'ri-team-line', 'ri-bar-chart-box-line'];
                      return (
                        <div key={i} className="flex gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center">
                            <i className={`${icons[i % 4]} text-xl ${colors[i % 4]}`} />
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* IMPACT TAB */}
              {activeTab === 'impact' && (
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-8">Impact & Results</h3>

                  {/* Impact cards */}
                  <div className="grid md:grid-cols-2 gap-5 mb-12">
                    {activeCase.impacts.map((item, i) => {
                      const borderColors = ['border-l-brand-400', 'border-l-cyan-400', 'border-l-emerald-400', 'border-l-violet-400'];
                      return (
                        <div key={i} className={`p-5 border border-slate-100 border-l-4 ${borderColors[i % 4]} rounded-xl bg-white shadow-sm`}>
                          <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Key Benefits */}
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-midnight-900 text-white">
                    <h4 className="font-display text-xl font-bold mb-6">Key Benefits</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeCase.benefits.map((b, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-brand-400 flex items-center justify-center">
                            <i className="ri-check-line text-midnight-900 text-sm font-bold" />
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">{b}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <blockquote className="text-white/60 italic leading-relaxed">
                        &ldquo;{activeCase.quote}&rdquo;
                      </blockquote>
                      <div className="text-sm text-brand-400 font-semibold mt-3">— {activeCase.quoteAuthor}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}


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
    </main>
  );
}
