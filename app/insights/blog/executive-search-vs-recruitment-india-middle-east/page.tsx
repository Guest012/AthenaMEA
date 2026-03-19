'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function ExecutiveSearchVsRecruitment() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeTableOfContents, setActiveTableOfContents] = useState('introduction');

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTableOfContents(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', icon: 'ri-book-line' },
    { id: 'key-differences', title: 'Key Differences', icon: 'ri-contrast-line' },
    { id: 'when-executive-search', title: 'When to Use Executive Search', icon: 'ri-search-line' },
    { id: 'cross-border-challenges', title: 'Cross-Border Challenges', icon: 'ri-global-line' },
    { id: 'cost-analysis', title: 'Cost Analysis', icon: 'ri-money-line' },
    { id: 'india-middle-east', title: 'India & Middle East Specifics', icon: 'ri-map-line' },
    { id: 'choosing-partner', title: 'Choosing the Right Partner', icon: 'ri-handshake-line' },
    { id: 'conclusion', title: 'Conclusion', icon: 'ri-check-double-line' },
  ];

  const relatedArticles = [
    {
      title: 'How to Hire Senior Leaders in India & the Middle East',
      slug: 'hiring-leaders-india-middle-east',
      category: 'Leadership',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    },
    {
      title: 'Compensation Benchmarking in India & GCC 2025',
      slug: 'compensation-benchmarking-trends-2025',
      category: 'Research',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    },
    {
      title: 'Saudi Arabia Market Entry Guide 2026',
      slug: 'saudi-arabia-market-entry-guide-2026',
      category: 'Market Entry',
      readTime: '18 min',
      image: 'https://images.unsplash.com/photo-1586724237569-9c920a20da48?w=400&q=80',
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-400 via-indigo-500 to-violet-600 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/80 text-sm mb-8 font-medium">
              <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Blog</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-400">Executive Search vs Recruitment</span>
            </nav>

            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Executive Search vs Recruitment Agencies: What Global Companies Need for India & Middle East Expansion
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Why Traditional Recruitment Fails for Cross-Border Leadership Hiring
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ATHENA MEA Research</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Published Mar 19, 2026</span>
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

        {/* Content */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <article className="lg:col-span-3 prose prose-lg max-w-none">

                <section id="introduction" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6">
                    Introduction: The Leadership Gap in Cross-Border Expansion
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When a global company decides to enter India, the UAE, or Saudi Arabia, the single most important decision
                    after market strategy is: who will lead the operation? The Country Manager, Managing Director, or Regional
                    Head you hire will determine whether your market entry succeeds or fails. Research from McKinsey shows that
                    70% of failed international expansions cite &quot;wrong leadership hire&quot; as a primary factor.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Yet many companies approach this critical hire the same way they fill mid-level positions — through
                    traditional recruitment agencies. This is a fundamental mistake. Executive search and recruitment are
                    fundamentally different approaches, and understanding when to use each can save your expansion millions
                    of dollars and years of lost momentum.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At ATHENA MEA, we specialize in executive search for companies entering the India-Middle East corridor.
                    Over 200+ successful placements, we have seen firsthand how the right hiring approach transforms market
                    entry outcomes. This guide breaks down the differences, costs, and decision criteria to help you choose
                    the right talent acquisition partner.
                  </p>
                </section>

                <section id="key-differences" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Executive Search vs Recruitment: The Fundamental Differences
                  </h2>

                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-midnight-900 text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left">Dimension</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Executive Search</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Recruitment Agency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Approach</td>
                          <td className="border border-gray-200 px-4 py-3">Proactive headhunting — targets specific individuals</td>
                          <td className="border border-gray-200 px-4 py-3">Reactive — posts jobs, screens applicants</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Candidate pool</td>
                          <td className="border border-gray-200 px-4 py-3">Passive candidates (not actively looking)</td>
                          <td className="border border-gray-200 px-4 py-3">Active job seekers</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Seniority</td>
                          <td className="border border-gray-200 px-4 py-3">C-suite, VP, Director, Country Head</td>
                          <td className="border border-gray-200 px-4 py-3">Mid-level, specialist, operational roles</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Fee structure</td>
                          <td className="border border-gray-200 px-4 py-3">Retained (1/3 upfront, 1/3 shortlist, 1/3 placement)</td>
                          <td className="border border-gray-200 px-4 py-3">Contingency (fee only on successful hire)</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Fee range</td>
                          <td className="border border-gray-200 px-4 py-3">25-35% of first-year compensation</td>
                          <td className="border border-gray-200 px-4 py-3">15-25% of first-year compensation</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Research depth</td>
                          <td className="border border-gray-200 px-4 py-3">Full market mapping, 100-200 candidates evaluated</td>
                          <td className="border border-gray-200 px-4 py-3">Database search, 20-50 applicants screened</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Exclusivity</td>
                          <td className="border border-gray-200 px-4 py-3">Exclusive mandate (dedicated team)</td>
                          <td className="border border-gray-200 px-4 py-3">Non-exclusive (multiple agencies compete)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Timeline</td>
                          <td className="border border-gray-200 px-4 py-3">45-90 days</td>
                          <td className="border border-gray-200 px-4 py-3">15-45 days</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Guarantee</td>
                          <td className="border border-gray-200 px-4 py-3">6-12 month replacement guarantee</td>
                          <td className="border border-gray-200 px-4 py-3">30-90 day replacement guarantee</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Advisory component</td>
                          <td className="border border-gray-200 px-4 py-3">Compensation benchmarking, market intelligence, org design</td>
                          <td className="border border-gray-200 px-4 py-3">Limited — primarily transactional</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="when-executive-search" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    When Executive Search Is Non-Negotiable
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    For certain hiring scenarios, executive search is not a luxury — it is the only approach that works.
                    Based on ATHENA MEA&apos;s experience across 200+ cross-border placements, here are the situations where
                    executive search is essential:
                  </p>

                  <div className="space-y-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-400">
                      <h4 className="font-bold text-midnight-900 mb-2">1. First Hire in a New Market</h4>
                      <p className="text-gray-700 text-sm">Your first country leader sets the culture, builds the team, and determines market positioning. This person needs to be identified through research — they are likely succeeding in their current role and not looking at job boards. In India, 80% of qualified Country Manager candidates are passive talent.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-bold text-midnight-900 mb-2">2. Confidential Replacement</h4>
                      <p className="text-gray-700 text-sm">When replacing an incumbent leader, confidentiality is paramount. Executive search firms operate with strict NDAs and approach candidates discreetly. Recruitment agencies posting the role publicly can alert the current employee and destabilize the organization.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-bold text-midnight-900 mb-2">3. Niche Industry + Geography Combination</h4>
                      <p className="text-gray-700 text-sm">Finding a leader who understands both your industry AND the local market (e.g., a cybersecurity VP with India go-to-market experience, or a healthcare CEO with Saudi Arabia regulatory knowledge) requires targeted headhunting across a small, specific talent pool.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-bold text-midnight-900 mb-2">4. Compensation Intelligence Required</h4>
                      <p className="text-gray-700 text-sm">Cross-border hires involve complex compensation structuring — base salary, housing allowances, education benefits, equity participation, repatriation clauses. Executive search firms provide compensation benchmarking data to structure competitive packages. ATHENA MEA benchmarks against 500+ comparable roles.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-bold text-midnight-900 mb-2">5. Board or Advisory Appointments</h4>
                      <p className="text-gray-700 text-sm">Board members and advisors for market entry operations require deep local network connections, regulatory expertise, and industry credibility. These individuals do not apply for roles — they must be identified, approached, and persuaded by search professionals with existing relationships.</p>
                    </div>
                  </div>
                </section>

                <section id="cross-border-challenges" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Why Cross-Border Hiring Is Uniquely Difficult
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cross-border leadership hiring for market entry carries challenges that domestic hiring does not. Understanding
                    these challenges explains why specialized executive search consistently outperforms general recruitment:
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Cultural Calibration
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A leader who thrives in the direct, metrics-driven culture of a US tech company may struggle in India&apos;s
                    relationship-oriented business environment, or vice versa. In the UAE, business culture blends Western
                    corporate practices with Gulf Arab relationship customs. Saudi Arabia requires leaders who can navigate
                    both modern Vision 2030 institutions and traditional power structures. Executive search firms assess
                    cultural fit through behavioral interviews, reference checks with cross-cultural context, and psychometric
                    evaluation.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Regulatory Knowledge Gap
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your country leader must understand local employment law (India&apos;s labor codes, UAE&apos;s WPS system,
                    Saudi Arabia&apos;s Saudization requirements), tax implications, and compliance obligations. Generic
                    recruitment agencies cannot assess these competencies. Executive search consultants with local market
                    expertise evaluate regulatory knowledge as part of candidate assessment.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Compensation Complexity
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A Country Manager package in India might include base salary in INR, housing allowance, car allowance,
                    children&apos;s education, ESOP vesting, performance bonus (40-80% of base), and retirement benefits
                    (PF, gratuity). In the UAE, the package shifts to include housing allowance (30-40% of base), schooling
                    allowance, annual flights, and end-of-service gratuity with no income tax. In Saudi Arabia, GOSI
                    contributions and Saudization considerations add further layers. Without benchmarking data, companies
                    either overpay (wasting 20-40% on compensation) or underpay (losing top candidates to competitors).
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">ATHENA MEA Data Point</p>
                    <p className="text-gray-700">
                      Companies using executive search for their first India/Middle East leadership hire report 3.2x higher
                      retention at 24 months compared to those using recruitment agencies (87% vs 27%). The cost of a failed
                      leadership hire at the Country Manager level averages $850,000 in direct costs plus 12-18 months of
                      lost market entry momentum.
                    </p>
                  </div>
                </section>

                <section id="cost-analysis" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Cost Analysis: Executive Search vs Recruitment
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The upfront cost of executive search is higher than recruitment agency fees. However, when you factor in
                    the cost of a bad hire, the total cost of ownership changes dramatically:
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-midnight-900 text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left">Cost Factor</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Executive Search</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Recruitment Agency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Search fee (for $200K role)</td>
                          <td className="border border-gray-200 px-4 py-3">$60,000-70,000 (30-35%)</td>
                          <td className="border border-gray-200 px-4 py-3">$30,000-50,000 (15-25%)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Probability of 24-month retention</td>
                          <td className="border border-gray-200 px-4 py-3">87%</td>
                          <td className="border border-gray-200 px-4 py-3">27%</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Cost of failed hire</td>
                          <td className="border border-gray-200 px-4 py-3">$0 (replacement guarantee)</td>
                          <td className="border border-gray-200 px-4 py-3">$850,000+ (re-search + lost momentum)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Expected total cost</td>
                          <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">$69,100</td>
                          <td className="border border-gray-200 px-4 py-3 text-red-600 font-bold">$651,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
                    * Expected total cost = (fee) + (probability of failure x cost of failure). Executive search: $65K + (0.13 x $850K) = $175.5K.
                    Recruitment: $40K + (0.73 x $850K) = $660.5K. The 9.4x risk-adjusted cost difference makes executive search the clear
                    financial choice for leadership roles.
                  </p>
                </section>

                <section id="india-middle-east" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    India & Middle East: Market-Specific Hiring Dynamics
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    India
                  </h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong>Talent density vs. quality gap:</strong> India has a large professional workforce, but finding leaders with cross-border experience, MNC culture fit, AND local market knowledge is rare. Only ~3% of India&apos;s senior executive pool has led a market entry operation.</li>
                    <li><strong>Notice periods:</strong> Senior leaders in India typically serve 60-90 day notice periods (some up to 6 months). This requires proactive planning that contingency recruitment cannot accommodate.</li>
                    <li><strong>Counter-offer culture:</strong> 45% of India senior executive offers face counter-offers from current employers. Executive search firms manage candidate commitment throughout the process to minimize dropouts.</li>
                    <li><strong>Regional nuance:</strong> A leader effective in Mumbai may not succeed in Bangalore or Hyderabad. City-level talent mapping is essential for certain industries.</li>
                  </ul>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    UAE
                  </h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong>Expatriate-dominated market:</strong> ~90% of UAE&apos;s workforce is expatriate, creating a unique talent ecosystem. Leaders must manage multi-national teams across 40+ nationalities.</li>
                    <li><strong>Visa sponsorship complexity:</strong> Executive hires require careful visa structuring. Golden Visa eligibility (for $272K+ salary roles) provides 10-year residency — a significant retention tool.</li>
                    <li><strong>Free zone vs. mainland:</strong> Leaders need to understand the operational differences between DIFC, DMCC, JAFZA, and mainland entities, as each has different employment regulations.</li>
                    <li><strong>Relationship-driven market:</strong> In the UAE, business success depends heavily on wasta (connections). Leaders with existing government and business relationships are 5x more effective in the first 12 months.</li>
                  </ul>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Saudi Arabia
                  </h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong>Saudization impact:</strong> Leaders must build teams that meet Nitaqat requirements while maintaining performance. This requires HR strategic thinking alongside business leadership.</li>
                    <li><strong>Vision 2030 opportunity:</strong> The transformation creates demand for leaders who combine international best practices with ability to work within Saudi institutional frameworks.</li>
                    <li><strong>Riyadh HQ mandate:</strong> The regional headquarters requirement is drawing hundreds of leadership roles to Riyadh. Competition for qualified leaders is intensifying rapidly.</li>
                    <li><strong>Cultural intelligence:</strong> Saudi business culture is evolving fast. Leaders need cultural fluency to navigate both traditional business customs and the modernizing corporate environment.</li>
                  </ul>
                </section>

                <section id="choosing-partner" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    How to Choose the Right Executive Search Partner
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Not all executive search firms are created equal. When hiring leadership for India and Middle East
                    market entry, evaluate potential partners on these criteria:
                  </p>

                  <div className="space-y-4 my-8">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-1">Local market presence</h4>
                        <p className="text-gray-700 text-sm">Does the firm have offices and consultants on the ground in your target markets? Remote search misses 60% of qualified candidates. ATHENA MEA operates from Gurgaon, Bangalore, Mumbai, Dubai, and Riyadh.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-1">Market entry specialization</h4>
                        <p className="text-gray-700 text-sm">Hiring for an established operation is different from hiring for a greenfield entry. Choose a firm that has placed first-hires for market entry — not just expanded existing teams.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-1">Compensation benchmarking capability</h4>
                        <p className="text-gray-700 text-sm">Can the firm provide current, role-specific compensation data for your target market? This prevents both overpaying and losing candidates to competitors.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-1">Industry track record</h4>
                        <p className="text-gray-700 text-sm">Review placements in your specific industry. A firm that excels at placing FMCG leaders may not have the network for cybersecurity or fintech executives.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-1">Advisory integration</h4>
                        <p className="text-gray-700 text-sm">The best partners combine executive search with market entry advisory — helping you design the role, structure the team, benchmark compensation, and onboard the leader effectively.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="conclusion" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Conclusion: Invest in Leadership, Invest in Success
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The difference between a successful market entry and a failed one often comes down to the quality of your
                    first leadership hire. Executive search is not just a premium service — it is risk mitigation for what is
                    likely a multi-million dollar market entry investment.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    For India, UAE, and Saudi Arabia market entry specifically, the cultural complexity, regulatory requirements,
                    and compensation structures demand specialized expertise that general recruitment agencies cannot provide.
                    Choose an executive search partner with local presence, market entry experience, and compensation
                    benchmarking capability.
                  </p>

                  <div className="bg-midnight-900 text-white p-8 rounded-lg my-8">
                    <h3 className="font-display text-2xl font-bold mb-4">Need Leadership Talent for Your Market Entry?</h3>
                    <p className="text-white/80 mb-6">
                      ATHENA MEA specializes in executive search for companies entering India, UAE, and Saudi Arabia.
                      Average time-to-hire: 45 days. 95% engagement success rate. 200+ placements across 12 industries.
                    </p>
                    <Link
                      href="/"
                      className="inline-block bg-brand-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-500 transition-colors no-underline"
                    >
                      Schedule a Free Consultation
                    </Link>
                  </div>
                </section>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-display text-lg font-bold text-midnight-900 mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm py-2 px-3 rounded-lg transition-all duration-300 no-underline ${
                            activeTableOfContents === item.id
                              ? 'bg-brand-400/10 text-brand-400 font-semibold'
                              : 'text-gray-600 hover:text-midnight-900 hover:bg-gray-100'
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-display text-lg font-bold text-midnight-900 mb-4">Share This Guide</h3>
                    <div className="flex gap-3">
                      <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                        <Bookmark className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-midnight-900 rounded-xl p-6 text-white">
                    <h3 className="font-display text-lg font-bold mb-3">Hiring Leaders for India or Middle East?</h3>
                    <p className="text-white/70 text-sm mb-4">
                      200+ successful placements. 45-day average time-to-hire. 12+ industries covered.
                    </p>
                    <Link
                      href="/"
                      className="block text-center bg-brand-400 text-white py-3 rounded-lg font-semibold hover:bg-brand-500 transition-colors no-underline text-sm"
                    >
                      Free Consultation
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-midnight-900 mb-8">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/blog/${article.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 no-underline"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-brand-400 bg-brand-400/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-midnight-900 group-hover:text-brand-400 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
