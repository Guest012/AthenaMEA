'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function HiringLeadersIndiaMiddleEast() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeTableOfContents, setActiveTableOfContents] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tableOfContents = [
    { id: 'overview', title: 'The Leadership Gap', icon: 'ri-alert-line' },
    { id: 'key-roles', title: 'Key Roles Needed', icon: 'ri-team-line' },
    { id: 'india-market', title: 'India Talent Market', icon: 'ri-map-pin-line' },
    { id: 'mena-market', title: 'Middle East Market', icon: 'ri-globe-line' },
    { id: 'compensation', title: 'Compensation Expectations', icon: 'ri-wallet-line' },
    { id: 'cultural', title: 'Cultural Considerations', icon: 'ri-handshake-line' },
    { id: 'retention', title: 'Retention Strategies', icon: 'ri-star-line' },
  ];

  const relatedArticles = [
    {
      title: 'India Market Entry Guide 2025: Strategy, Regulations & Playbook',
      slug: 'india-market-entry-guide-2025',
      category: 'Market Entry',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80',
    },
    {
      title: 'UAE Free Zone vs Mainland: Which Is Right for Your Business?',
      slug: 'uae-free-zone-vs-mainland',
      category: 'Regulatory',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80',
    },
    {
      title: 'Compensation Benchmarking in India & GCC 2025',
      slug: 'compensation-benchmarking-trends-2025',
      category: 'Research',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    },
  ];

  const cSuiteRoles = [
    {
      role: 'Country Head / Managing Director',
      importance: 'CRITICAL - Month 1',
      description:
        'Your on-ground leader who sets culture, manages regulatory relationships, makes strategic decisions, and represents the company',
      responsibilities: [
        'Market entry execution & regulatory compliance',
        'Stakeholder management (government, partners, investors)',
        'Strategic planning & P&L accountability',
        'Team building & organizational development',
        'Represent company in media & industry forums',
      ],
      salaryRange: 'INR 60-150L (India) | AED 250K-500K (UAE/Saudi)',
      searchDuration: '10-12 weeks',
      criticality: 'Hire first - everything depends on this hire',
    },
    {
      role: 'Chief Financial Officer (CFO)',
      importance: 'CRITICAL - Month 1-2',
      description:
        'Owns financial infrastructure, compliance, fundraising, and financial controls for the new entity',
      responsibilities: [
        'Financial planning & budgeting',
        'Entity setup & regulatory compliance (RBI, GST, etc.)',
        'Banking relationships & credit management',
        'Audit & financial reporting',
        'Tax strategy & optimization',
      ],
      salaryRange: 'INR 50-120L (India) | AED 200K-400K (UAE/Saudi)',
      searchDuration: '8-10 weeks',
      criticality: 'Hire in parallel with Country Head; enables fund inflows',
    },
    {
      role: 'Chief Human Resources Officer (CHRO)',
      importance: 'HIGH - Month 1-2',
      description:
        'Builds HR systems, manages talent acquisition, ensures compliance, shapes company culture',
      responsibilities: [
        'Recruitment & talent acquisition',
        'HR policies & compliance (labor law, payroll)',
        'Company culture & employee experience',
        'Compensation & benefits architecture',
        'Succession planning',
      ],
      salaryRange: 'INR 40-90L (India) | AED 180K-350K (UAE/Saudi)',
      searchDuration: '6-8 weeks',
      criticality: 'Hire before major team building; sets foundation',
    },
    {
      role: 'Chief Sales / Revenue Officer',
      importance: 'HIGH - Month 2-3',
      description:
        'Drives customer acquisition, builds sales infrastructure, manages go-to-market strategy',
      responsibilities: [
        'Sales strategy & GTM execution',
        'Team building & hiring',
        'Customer acquisition & partnerships',
        'Revenue forecasting & pipeline management',
        'Channel development',
      ],
      salaryRange: 'INR 45-110L (India) | AED 200K-400K (UAE/Saudi)',
      searchDuration: '6-8 weeks',
      criticality: 'Hire after country head & CFO; drives early revenue',
    },
  ];

  const faqItems = [
    {
      question: 'How far in advance should I start executive search?',
      answer:
        'Start your search 10-12 weeks before your intended start date. Country Head and CFO roles take 10-12 weeks due to global search networks and rigorous vetting. Starting after incorporation is too late for quality candidates.',
    },
    {
      question: 'Should I hire local or expatriate leaders?',
      answer:
        'Local talent has market knowledge, regulatory relationships, and cultural understanding. Expatriates bring parent company experience and international best practices. The optimal approach is a mix: an expatriate Country Head with strong local regional talent in functional roles (CFO, CHRO, Sales Head).',
    },
    {
      question: 'What is the counter-offer risk in India and Middle East?',
      answer:
        'India: 35-50% of accepted candidates receive counter-offers (higher than global average). Retention clauses in offers are essential. Middle East: 15-25% counter-offer rate (lower than India). Both regions have high attrition in first 2 years; retention strategies crucial.',
    },
    {
      question: 'Can I start building team before Country Head hire?',
      answer:
        'Partially. You can begin mid-level recruitment (Sales Head, Finance Manager) in parallel, but major hiring decisions should wait for Country Head approval. Country Head will have different preferences on team structure, compensation, and culture.',
    },
    {
      question: 'What are common deal-breaker negotiation points?',
      answer:
        'India: Notice period negotiations, housing allowance, school fees reimbursement, and variable bonus structure. Middle East: Accommodation, car allowance, flight tickets home, and equity/ESOP terms. Both regions: Tax equalization, relocation costs, and signing bonuses are standard.',
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-400 via-blue-500 to-purple-600 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/80 text-sm mb-8 font-medium">
              <span>Insights</span>
              <ChevronRight className="w-4 h-4" />
              <span>Blog</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-400">Hiring Senior Leaders</span>
            </nav>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              How to Hire Senior Leaders
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Executive Search Playbook for India & the Middle East
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ATHENA MEA Research Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Published March 9, 2025</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
              <span className="text-xs font-medium">Scroll to explore</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Article Content */}
              <article className="lg:col-span-3 prose prose-lg max-w-none">
                {/* Overview Section */}
                <section id="overview" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6">
                    The Executive Leadership Gap in Market Entry
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When a global company enters India or the Middle East, the most critical success factor is not the business
                    plan, product, or capital—it's the leadership team. Companies that fail at market entry often point to a
                    single root cause: hiring the wrong Country Head or building a weak leadership team.
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Critical Reality:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>70% of failed market entries</strong> cite leadership as primary factor (Booz & Co study)
                      </li>
                      <li>
                        <strong>4-6 months</strong> is typical time to fill Country Head role; many companies start late
                      </li>
                      <li>
                        <strong>45% of new executives</strong> in emerging markets leave within 2 years (high attrition)
                      </li>
                      <li>
                        <strong>Budget for recruitment:</strong> 15-20% of first-year salary for search & onboarding
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    This guide walks you through the exact process of finding, evaluating, and hiring the senior leaders your
                    market entry needs—and keeping them. Success requires understanding both the India and Middle East talent
                    markets, which have radically different characteristics, expectations, and cultural dynamics.
                  </p>
                </section>

                {/* Key Roles Section */}
                <section id="key-roles" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    The Four Critical C-Suite Roles to Hire First
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Not all roles are equally urgent. Here's the hiring sequence that maximizes your market entry success:
                  </p>

                  <div className="space-y-8">
                    {cSuiteRoles.map((role, idx) => (
                      <div key={idx} className="border-l-4 border-brand-400 bg-slate-50 p-8 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-display text-2xl font-bold text-midnight-900">{role.role}</h3>
                            <p className="text-gray-600 mt-1">{role.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block bg-brand-400 text-white px-4 py-2 rounded-full text-xs font-semibold mb-2">
                              {role.importance}
                            </span>
                            <div className="text-sm text-gray-600">
                              <p className="font-semibold text-midnight-900">{role.salaryRange}</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="font-semibold text-midnight-900 mb-3">Key Responsibilities:</p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              {role.responsibilities.map((resp, ridx) => (
                                <li key={ridx} className="flex gap-2">
                                  <i className="ri-check-line text-brand-400 flex-shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-midnight-900 mb-3">Hiring Details:</p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li className="flex gap-2">
                                <i className="ri-time-line text-gray-600 flex-shrink-0" />
                                <span>
                                  <strong>Search Duration:</strong> {role.searchDuration}
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <i className="ri-alert-line text-yellow-600 flex-shrink-0" />
                                <span>
                                  <strong>Criticality:</strong> {role.criticality}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-midnight-900 mb-2">Hiring Sequence Recommendation:</p>
                    <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                      <li>Start Country Head & CFO search immediately (parallel)</li>
                      <li>Hire Country Head first; they shape all subsequent hiring</li>
                      <li>Hire CFO within 2 weeks of Country Head</li>
                      <li>Hire CHRO within 4 weeks (before major team building)</li>
                      <li>Hire Sales Head within 6-8 weeks (after team foundation is set)</li>
                    </ol>
                  </div>
                </section>

                {/* India Talent Market */}
                <section id="india-market" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    India Talent Market: Characteristics & Hiring Strategy
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The India Talent Advantage
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    India's talent landscape is deep, educated, and globally-minded. The challenge is not finding talent—it's
                    identifying the right candidate from an abundance of options.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <p className="font-semibold text-midnight-900 mb-3">Why India Talent Is Attractive:</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>✓ IIT/IIM graduate pedigree (global recognition)</li>
                        <li>✓ Deep startup ecosystem experience (Bangalore)</li>
                        <li>✓ Cost-efficient vs Western talent (40-50% less)</li>
                        <li>✓ Multilingual proficiency (English, regional languages)</li>
                        <li>✓ Entrepreneurial mindset (high PM quotient)</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                      <p className="font-semibold text-midnight-900 mb-3">Unique Challenges in India Market:</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>⚠ High counter-offer risk (40-50%)</li>
                        <li>⚠ 30-90 day notice periods (vs 2 weeks in West)</li>
                        <li>⚠ Salary inflation expectations (15-20% annually)</li>
                        <li>⚠ 20-25% attrition in first 2 years</li>
                        <li>⚠ Preference for immediate large increases vs long-term equity</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    How to Hire in India: Practical Approach
                  </h3>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">1. Search Strategy</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Executive search firms (Korn Ferry, Egon Zehnder, etc.) cost 25-35% of base salary but provide vetted
                        candidates. Alternatively, internal networks + LinkedIn recruiters work for mid-level roles. For Country
                        Head, always use professional search firms—quality matters more than cost.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Pro Tip:</strong> Use 2-3 concurrent search partners; quality increases significantly.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">2. Candidate Evaluation</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Key assessment areas: Market knowledge (India-specific), Track record (similar company stage), Cultural
                        fit (company values), Global mindset (international experience), Stakeholder management skills.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Red Flag:</strong> Candidates from much larger companies often struggle with startup-like
                        environment. Those from hyper-growth startups may lack operational maturity.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">3. Offer Structure</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        India salary structure: Fixed base (50-60%) + Annual variable/bonus (15-25%) + Benefits (5-15%) + Housing
                        allowance (15-25%) + Stock options/ESOP (5-10%).
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Negotiation Points:</strong> Housing allowance is negotiable (Bangalore vs Mumbai = different
                        expectations). Variable bonus should be aggressive (20%+ of base). ESOP/equity impact on tax planning.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">4. Sealing the Deal</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Counter-offer risk is real. Once you've made an offer and candidate accepts, move fast: get board
                        approval (if needed), send formal offer, and negotiate notice period. Offer can include signing bonus
                        (1-2 months base) to encourage immediate transition.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Reality:</strong> Plan for 15-20% of candidates receiving counter-offers and staying with current
                        employer. This is normal market behavior.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Middle East Talent Market */}
                <section id="mena-market" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Middle East Talent Market: Unique Dynamics
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The Expat-Heavy Market
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The UAE, Saudi Arabia, and Qatar have unique talent markets shaped by Emiratization/Saudization policies and
                    expat-heavy workforces. Unlike India where 95% of talent is local, Middle East markets are 30-40% local
                    nationals and 60-70% expats (largely from South Asia, Philippines, Egypt, and Western countries).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <p className="font-semibold text-midnight-900 mb-3">Local National Leaders:</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>✓ Government relationship access</li>
                        <li>✓ Regulatory navigation expertise</li>
                        <li>✓ Local market knowledge</li>
                        <li>✓ Emiratization/Saudization compliance</li>
                        <li>✗ Higher salary expectations</li>
                        <li>✗ May lack international experience</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <p className="font-semibold text-midnight-900 mb-3">Expat Leaders:</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>✓ Global experience & best practices</li>
                        <li>✓ More flexible on salary (visa dependent)</li>
                        <li>✓ Easier cultural fit with HQ</li>
                        <li>✗ Limited government relationships</li>
                        <li>✗ May need visa sponsorship</li>
                        <li>✗ Less local market knowledge</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    How to Hire in Middle East: The Blended Approach
                  </h3>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">Recommended Structure</h4>
                      <p className="text-gray-700 text-sm mb-4">
                        Best approach: Hire an experienced expat Country Head (or local national with international experience) +
                        local nationals in functional roles (CFO, HR, Sales). This balances global best practices with local
                        market expertise.
                      </p>
                      <div className="bg-slate-100 p-4 rounded text-sm text-gray-700">
                        <strong>Example Team for UAE:</strong>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          <li>Country Head: British/American expat (10+ years MENA experience)</li>
                          <li>CFO: UAE national with Big 4 background</li>
                          <li>HR Head: Expat (India/Philippines) with Gulf experience</li>
                          <li>Sales Head: Local + expat mix based on market</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">Search Timeline & Sources</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Executive search in Middle East: 6-8 weeks (faster than India). Key search sources: Global executive search
                        firms (Korn Ferry), LinkedIn, MENA-specific recruitment agencies (Hudson), industry networks.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Tip:</strong> Many executives in Middle East network through clubs, industry associations
                        (emirates association of HR professionals, etc.). Personal referrals are highly valued.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">Salary & Benefits Structure</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Middle East compensation: Base salary (60-70%) + Housing allowance (15-25%) + Car allowance (5-10%) +
                        Flight tickets home (annual) + ESOP/equity (3-5%) + Gratuity/end of service benefits.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Key Difference from India:</strong> Housing is critical in Middle East (AED 8K-15K/month for
                        executive housing). Car allowances are expected. Flight tickets home (India/Philippines) are standard
                        retention tool.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">Visa & Golden Visa Strategy</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        UAE now offers 10-year golden visas for senior executives. Saudi Arabia offers similar long-term visas.
                        These are powerful retention tools—offer them to your top talent. Candidates are increasingly evaluating
                        visa stability as part of compensation.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Strategic Value:</strong> Golden visa = candidate stability = reduced turnover. Worth negotiating
                        from salary budget perspective.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Compensation Section */}
                <section id="compensation" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Compensation Expectations by Role & Region
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Salary expectations vary dramatically by role, experience level, and region. Here's what you should budget
                    for:
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-midnight-900 bg-slate-50">
                          <th className="text-left p-4 font-semibold text-midnight-900">Role</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">India (Annual)</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">UAE (Annual)</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Saudi Arabia (Annual)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Country Head</td>
                          <td className="p-4">INR 100-150L</td>
                          <td className="p-4">AED 400K-600K</td>
                          <td className="p-4">SAR 300K-500K</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">CFO</td>
                          <td className="p-4">INR 80-120L</td>
                          <td className="p-4">AED 300K-450K</td>
                          <td className="p-4">SAR 250K-400K</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">CHRO</td>
                          <td className="p-4">INR 60-90L</td>
                          <td className="p-4">AED 250K-400K</td>
                          <td className="p-4">SAR 200K-350K</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Sales Head</td>
                          <td className="p-4">INR 70-110L</td>
                          <td className="p-4">AED 300K-450K</td>
                          <td className="p-4">SAR 250K-400K</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 text-sm italic">
                    * Includes base + fixed allowances. Variable/bonus excluded. SAR = Saudi Riyal (1 SAR ≈ 20 INR ≈ 0.27 USD)
                  </p>
                </section>

                {/* Cultural Considerations */}
                <section id="cultural" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Cultural & Behavioral Considerations in Selection
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    What Makes a Successful Leader in India vs Middle East
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 text-lg mb-4">India Success Profile</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Startup-like Thinking</p>
                          <p className="text-gray-600 text-sm">
                            India market rewards rapid innovation, pivoting, and scrappy problem-solving. Candidates from
                            structured corporates may move too slowly.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Relationship Building</p>
                          <p className="text-gray-600 text-sm">
                            Government relationships, partner networks, and supplier ecosystems are critical. Candidates with
                            established networks have huge advantage.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Frugality & Unit Economics</p>
                          <p className="text-gray-600 text-sm">
                            India market is price-sensitive and margin-conscious. Leaders who understand low-cost models and
                            operational efficiency excel.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Comfort with Ambiguity</p>
                          <p className="text-gray-600 text-sm">
                            Regulatory ambiguity, market shifts, and supply chain chaos are daily realities. Leaders must be
                            adaptable.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 text-lg mb-4">Middle East Success Profile</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Government Relations Expertise</p>
                          <p className="text-gray-600 text-sm">
                            Government is largest employer and customer. Leaders must navigate bureaucracy, understand policy,
                            and build official relationships.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Multi-Country Operations</p>
                          <p className="text-gray-600 text-sm">
                            Most companies operate across UAE, Saudi, Qatar. Leaders need experience managing cross-border
                            operations and regulations.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Cultural Sensitivity & Expat Management</p>
                          <p className="text-gray-600 text-sm">
                            Managing expat-heavy teams (Indians, Filipinos, Western expats) requires cultural dexterity and
                            inclusive leadership.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Premium Quality Expectations</p>
                          <p className="text-gray-600 text-sm">
                            Middle East market values quality, luxury, and premium positioning. Cost-cutting mindset can hurt
                            brand perception.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Retention Section */}
                <section id="retention" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Retention Strategies for New Market Leaders
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Hiring is only half the battle. Retaining top talent in new markets is harder because:
                  </p>

                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">→</span>
                      <span>
                        Lonely role: Country Head has no peer in organization; can feel isolated
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">→</span>
                      <span>
                        High visibility: Failures are magnified; successes take longer to materialize
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">→</span>
                      <span>
                        Market timing: If market entry struggles, blame often falls on leader
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">→</span>
                      <span>
                        Talent poaching: Successful leaders become attractive to competitors
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Proven Retention Strategies
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-midnight-900 mb-3">1. Equity/ESOP Participation</h4>
                      <p className="text-gray-700 mb-3">
                        Offer meaningful equity (0.5-2% for Country Head, 0.1-0.5% for other roles) with 3-4 year vesting. Ties
                        long-term incentives to company success, not just salary. Much more powerful retention tool in India
                        than Middle East.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Tax Consideration:</strong> In India, ESOP taxation is favorable if structured correctly. Middle
                        East has less established ESOP frameworks; use cash bonuses instead.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-midnight-900 mb-3">2. Regular Board Exposure & Clear Career Path</h4>
                      <p className="text-gray-700 mb-3">
                        Country Head should report directly to CEO or Managing Director, not buried under Regional VP. Quarterly
                        board meetings (or monthly leadership sync) keeps leader engaged and informed. Clear path to expanded
                        role (VP of APAC, etc.) signals advancement opportunity.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-midnight-900 mb-3">3. Peer Community & Executive Coaching</h4>
                      <p className="text-gray-700 mb-3">
                        New Country Heads report feeling isolated. Create peer forums (quarterly sync with other Country Heads),
                        executive coaching (professional coach, 12 sessions/year), and mentorship from senior leaders. These
                        combat burnout and provide perspective.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-midnight-900 mb-3">4. Flexibility & Work-Life Balance</h4>
                      <p className="text-gray-700 mb-3">
                        Market entry is intense (80+ hour weeks common). After 18-24 months, offer flexible work arrangements,
                        sabbatical options, or relocation back to headquarters for special projects. Preventing burnout preserves
                        your best talent.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-midnight-900 mb-3">5. Retention Bonus & Long-Term Incentives</h4>
                      <p className="text-gray-700">
                        Consider retention bonuses at key milestones (e.g., 1-year and 2-year anniversaries if hitting revenue
                        targets). Multi-year bonus structures aligned to market milestones encourage leaders to stay through the
                        difficult early phases.
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-6">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h3 className="font-semibold text-midnight-900 mb-3 text-lg">
                          <span className="text-brand-400 mr-2">Q:</span>
                          {item.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="text-brand-400 font-semibold mr-2">A:</span>
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-20 bg-slate-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-display font-bold text-midnight-900 mb-4 text-sm uppercase tracking-wider">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setActiveTableOfContents(item.id)}
                        className={`block py-2 px-3 rounded text-sm transition-colors ${
                          activeTableOfContents === item.id
                            ? 'bg-brand-400 text-white'
                            : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <i className={`${item.icon} mr-2`} />
                        {item.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>9 min read</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 btn-primary py-2 px-3 text-xs flex items-center justify-center gap-1 rounded">
                        <Share2 className="w-3 h-3" />
                        Share
                      </button>
                      <button className="flex-1 border border-brand-400 text-brand-400 py-2 px-3 text-xs flex items-center justify-center gap-1 rounded hover:bg-brand-400/10">
                        <Bookmark className="w-3 h-3" />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Tags */}
        <section className="bg-slate-50 py-8 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-semibold text-gray-600">Tags:</span>
              {['Executive Hiring', 'Leadership', 'India Talent', 'Middle East', 'Recruitment'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-400 hover:text-brand-400 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-midnight-900 mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <Link key={article.slug} href={`/insights/blog/${article.slug}`}>
                  <div className="h-full rounded-lg overflow-hidden border border-gray-200 hover:border-brand-400 transition-all hover:shadow-lg cursor-pointer">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="p-6">
                      <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="font-display font-bold text-midnight-900 mt-2 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <ChevronRight className="w-4 h-4 text-brand-400" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-midnight-900 via-midnight-800 to-midnight-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              style={{
                background:
                  'radial-gradient(circle at 20% 50%, rgba(248, 184, 48, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(248, 184, 48, 0.2), transparent 50%)',
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Need Help Building Your Leadership Team?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              ATHENA MEA specializes in C-suite searches across India and the Middle East. We've placed 150+ executives in
              market-entry roles. Let's find your next Country Head.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-midnight-900 hover:shadow-lg transition-shadow">
                Start Executive Search
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Hiring Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
