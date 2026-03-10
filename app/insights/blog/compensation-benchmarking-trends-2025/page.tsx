'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function CompensationBenchmarkingTrends() {
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
    { id: 'overview', title: 'Why Benchmarking Matters', icon: 'ri-lightbulb-line' },
    { id: 'india-trends', title: 'India Salary Trends', icon: 'ri-india-line' },
    { id: 'gcc-trends', title: 'GCC Trends', icon: 'ri-global-line' },
    { id: 'esop-equity', title: 'ESOP & Equity', icon: 'ri-stock-line' },
    { id: 'benefits', title: 'Benefits & Packages', icon: 'ri-gift-line' },
    { id: 'visualization', title: 'Data Visualization', icon: 'ri-bar-chart-line' },
    { id: 'faq', title: 'FAQ', icon: 'ri-question-line' },
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
      title: 'How to Hire Senior Leaders in India & the Middle East',
      slug: 'hiring-leaders-india-middle-east',
      category: 'Leadership',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    },
  ];

  const faqItems = [
    {
      question: 'What is the most reliable source for salary benchmarking?',
      answer:
        'Top sources include Mercer Compensation Database, LinkedIn Salary Tool, Payscale, and India-specific platforms like AonHewitt and Korn Ferry. For accuracy, use 2-3 sources and average the data. Government salary surveys and industry associations (NASSCOM for IT) also provide sector-specific data.',
    },
    {
      question: 'How does cost of living affect salary requirements?',
      answer:
        'Cost of living is critical. Mumbai and Delhi salaries are 15-25% higher than Bangalore, Hyderabad. Dubai salaries are 30-50% higher than India on absolute terms but often lower in purchasing power (housing cost is higher). Always adjust benchmarks for city and cost of living inflation.',
    },
    {
      question: 'What percentage should be fixed vs variable compensation?',
      answer:
        'Typical split: 50-70% fixed base, 10-30% variable/bonus, 5-15% benefits, 5-25% allowances. For sales roles, variable can be 40-60%. For corporate/support roles, fixed is 70-80%. Market structure varies by function; sales roles have higher variable components.',
    },
    {
      question: 'How should I value ESOPs in total compensation?',
      answer:
        'In India, value ESOP at 20-30% of annual salary for startup roles, 10-15% for established companies. In Middle East, use cash bonus instead (ESOP frameworks less developed). Consider vesting schedule: 4-year vest with 1-year cliff is standard. Year 1 value = annual allocation ÷ 4.',
    },
    {
      question: 'Are salary increases in 2025 higher than historical trends?',
      answer:
        'India: 8-12% salary increase expected (up from 6-8% in 2023-24) due to talent shortage in tech/finance. Middle East: 3-5% increases expected (slower growth). Premium talent in hot sectors (AI, fintech, cybersecurity) seeing 15-20% increases. Market tightness varies significantly by sector.',
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)',
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
              <span className="text-brand-400">Compensation Benchmarking 2025</span>
            </nav>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Compensation Benchmarking 2025
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Salary Trends, ESOPs & Benefits in India & GCC
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
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
                    Why Compensation Benchmarking Matters for Market Entry
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When entering India or GCC markets, compensation strategy is a critical business decision—not just an HR
                    function. Getting it wrong leads to talent gaps, high turnover, and operational failure. Getting it right
                    attracts top talent, enables rapid execution, and delivers ROI on market expansion.
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Three Critical Benchmarking Errors:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>1. Under-pricing talent:</strong> Offering 30% below market leads to inability to hire quality
                        candidates; attracts only desperate/underperforming talent
                      </li>
                      <li>
                        <strong>2. Over-pricing locally:</strong> Paying 30% above market creates internal equity issues, budget
                        overruns, and breeds resentment
                      </li>
                      <li>
                        <strong>3. Missing market trends:</strong> Not tracking salary inflation (8-12% in India, 3-5% in GCC)
                        leads to compensation becoming uncompetitive mid-year
                      </li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The Benchmarking Framework
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sound compensation strategy requires three overlapping analyses: (1) Market benchmarks (50th percentile, 75th
                    for competitive roles), (2) Internal equity (junior vs senior, function vs function), and (3) Company-specific
                    positioning (startup premium, market entry premium, profitability stage).
                  </p>
                </section>

                {/* India Trends Section */}
                <section id="india-trends" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    India Salary Trends 2025: By Function & City
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Technology & Engineering (Highest Growth)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tech talent commands premium in India due to global competition and startup ecosystem. AI/ML engineers
                    earning 25-35% premiums over standard engineers.
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-midnight-900 bg-slate-50">
                          <th className="text-left p-4 font-semibold text-midnight-900">Role</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Bangalore</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Mumbai</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Delhi-NCR</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">2025 Growth</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Senior Software Engineer (5-8 yrs)</td>
                          <td className="p-4">INR 20-28L</td>
                          <td className="p-4">INR 22-30L</td>
                          <td className="p-4">INR 18-26L</td>
                          <td className="p-4">+12-15%</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Engineering Manager</td>
                          <td className="p-4">INR 28-40L</td>
                          <td className="p-4">INR 30-42L</td>
                          <td className="p-4">INR 26-38L</td>
                          <td className="p-4">+10-13%</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">VP Engineering / Tech Lead</td>
                          <td className="p-4">INR 50-80L</td>
                          <td className="p-4">INR 55-85L</td>
                          <td className="p-4">INR 48-78L</td>
                          <td className="p-4">+8-12%</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">AI/ML Engineer (Senior)</td>
                          <td className="p-4">INR 28-45L</td>
                          <td className="p-4">INR 30-48L</td>
                          <td className="p-4">INR 26-42L</td>
                          <td className="p-4">+20-25%</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Product Manager (3-5 yrs)</td>
                          <td className="p-4">INR 18-28L</td>
                          <td className="p-4">INR 20-30L</td>
                          <td className="p-4">INR 16-26L</td>
                          <td className="p-4">+12-16%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Sales & Revenue Functions
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sales compensation is 40-60% variable (base + commission/bonus). Market entry companies often pay 10-15%
                    premiums to attract established sales leaders.
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-midnight-900 bg-slate-50">
                          <th className="text-left p-4 font-semibold text-midnight-900">Role</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Base Salary</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Variable (Commission/Bonus)</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Total On-Target Earnings</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Enterprise Sales Executive</td>
                          <td className="p-4">INR 12-16L</td>
                          <td className="p-4">INR 8-14L</td>
                          <td className="p-4">INR 20-30L</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Sales Manager (Team of 5-10)</td>
                          <td className="p-4">INR 16-22L</td>
                          <td className="p-4">INR 10-18L</td>
                          <td className="p-4">INR 26-40L</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">VP Sales / Chief Revenue Officer</td>
                          <td className="p-4">INR 40-60L</td>
                          <td className="p-4">INR 15-40L</td>
                          <td className="p-4">INR 55-100L</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Business Development Manager</td>
                          <td className="p-4">INR 10-14L</td>
                          <td className="p-4">INR 5-10L</td>
                          <td className="p-4">INR 15-24L</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Finance & Operations
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Finance roles are mostly fixed salary with discretionary bonus (10-15%). CFO and Controller roles command
                    significant premiums for market-entry companies needing setup expertise.
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-midnight-900 bg-slate-50">
                          <th className="text-left p-4 font-semibold text-midnight-900">Role</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Salary Range</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">CFO / Chief Financial Officer</td>
                          <td className="p-4">INR 70-120L</td>
                          <td className="p-4">+15-25% premium for market entry expertise</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Controller / Finance Manager</td>
                          <td className="p-4">INR 18-28L</td>
                          <td className="p-4">Regulatory knowledge valued</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Operations Manager</td>
                          <td className="p-4">INR 12-18L</td>
                          <td className="p-4">Growing market (logistics focus)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">HR Business Partner</td>
                          <td className="p-4">INR 14-22L</td>
                          <td className="p-4">High attrition (5-year specialist valued)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Key India Salary Trends for 2025
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Salary inflation 8-12% expected:</strong> Faster than CPI (5-6%) due to talent shortage in tech
                        and startups. Premium sectors (AI, fintech, biotech) seeing 15-20% raises.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>ESOP/Equity gains value:</strong> Rising startup valuations make ESOP meaningful again. Employees
                        demanding equity as part of compensation. Companies without ESOP struggling to compete.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Benefits arms race:</strong> Wellness (mental health, fitness), learning (courses, conferences),
                        and flexible work becoming non-negotiable. Base salary differentials narrowing; benefits widening.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Attrition cost awareness:</strong> Companies budgeting 40-50% higher for market entry salaries
                        to reduce early-stage turnover. Retention is expensive after hire.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* GCC Trends Section */}
                <section id="gcc-trends" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    GCC Compensation Trends: UAE, Saudi Arabia & Qatar
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    GCC markets are fundamentally different from India. Expat-dominated workforces, high cost of living,
                    government-heavy economies, and Emiratization/Saudization policies create unique compensation dynamics.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    UAE Compensation Overview (Dubai & Abu Dhabi)
                  </h3>

                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">UAE Compensation Components:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>1. Base Salary:</strong> 60-70% of total compensation (paid monthly, no income tax)
                      </li>
                      <li>
                        <strong>2. Housing Allowance:</strong> 15-25% of salary (very flexible; sometimes provided as villa)
                      </li>
                      <li>
                        <strong>3. Car Allowance:</strong> 5-10% or AED 5,000-10,000/month (luxury market norms)
                      </li>
                      <li>
                        <strong>4. Flight Tickets Home:</strong> Annual air ticket for employee (+ family depends on role)
                      </li>
                      <li>
                        <strong>5. Health Insurance:</strong> Comprehensive family coverage (employer paid)
                      </li>
                      <li>
                        <strong>6. Gratuity (End of Service):</strong> 30 days pay × service years (2-3 weeks per year worked)
                      </li>
                      <li>
                        <strong>7. Annual Bonus:</strong> 1-3 months (discretionary, linked to performance)
                      </li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Salary Bands: UAE 2025
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-midnight-900 bg-slate-50">
                          <th className="text-left p-4 font-semibold text-midnight-900">Role (Senior Level)</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Base Salary</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">With Allowances (Total)</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Market 2025</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Country Head / MD</td>
                          <td className="p-4">AED 200K-300K</td>
                          <td className="p-4">AED 400K-600K</td>
                          <td className="p-4">↑ 3-5% growth</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">CFO / Finance Director</td>
                          <td className="p-4">AED 150K-220K</td>
                          <td className="p-4">AED 300K-450K</td>
                          <td className="p-4">↑ 2-4% growth</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Sales Director</td>
                          <td className="p-4">AED 150K-200K</td>
                          <td className="p-4">AED 300K-420K</td>
                          <td className="p-4">↑ 5-8% (variable driven)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Operations Manager</td>
                          <td className="p-4">AED 80K-120K</td>
                          <td className="p-4">AED 150K-250K</td>
                          <td className="p-4">↑ 3-5% growth</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">Senior Software Engineer</td>
                          <td className="p-4">AED 100K-150K</td>
                          <td className="p-4">AED 180K-300K</td>
                          <td className="p-4">↑ 8-12% (talent shortage)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Saudi Arabia Market (Emerging Growth)
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saudi Arabia is experiencing rapid business growth (Vision 2030 initiatives). Salaries are 10-15% lower than
                    UAE but cost of living is also lower. Rapidly Saudizing workforce—local national salaries 30-50% higher than
                    expats.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Saudi Arabia Salary Ranges (Annual, Total):</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>Country Head: SAR 400K-600K (USD 110K-160K)</li>
                      <li>CFO/Senior Finance: SAR 250K-400K (USD 65K-110K)</li>
                      <li>Sales Director: SAR 250K-400K (USD 65K-110K)</li>
                      <li>Senior Engineer: SAR 200K-300K (USD 55K-80K)</li>
                    </ul>
                    <p className="text-gray-600 text-xs mt-3">
                      Note: Add Saudization premium 30-50% for Saudi national hires. Rapidly tightening market.
                    </p>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Key GCC Compensation Trends 2025
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Modest growth (3-5%):</strong> Much slower than India. Economic growth moderate; talent
                        competition less fierce.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Emiratization pressure:</strong> UAE mandating percentage of Emirati staff. Salaries for
                        nationals increasing faster (8-12%).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Golden visa effect:</strong> Long-term visas are now part of negotiation. Candidates valuing
                        stability; companies using as benefit.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Housing costs rising:</strong> Real estate inflation (15-20% annually) making housing allowances
                        inadequate in some areas.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* ESOP & Equity Section */}
                <section id="esop-equity" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    ESOP & Equity Compensation: India & GCC Framework
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    India: ESOP Frameworks & Taxation
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Indian startups and growing companies increasingly use Employee Stock Option Plans (ESOPs) to attract talent
                    while conserving cash. The regulatory framework has become more favorable in recent years.
                  </p>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">ESOP Grant Structure (Typical)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>Startup roles (early employees):</strong> 0.5-2% of company equity, 4-year vest (1-year cliff)
                        </li>
                        <li>
                          <strong>Mid-stage growth company:</strong> 0.1-0.5% per employee, 3-4 year vest
                        </li>
                        <li>
                          <strong>Mature company:</strong> 0.01-0.1% per employee, 3-year vest (faster vesting)
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">ESOP Valuation & Tax Treatment</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Exercise Price:</strong> Typically set at Fair Market Value (FMV) at grant date. If below FMV,
                        difference is taxable income.
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Tax on Grant:</strong> No tax at grant (if at FMV). If below FMV, difference taxed as salary income
                        + 12% contribution to gratuity fund.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Tax on Sale:</strong> Long-term capital gains (hold &gt;1 year) at 20% after indexation benefit.
                        Short-term (held &lt;1 year) at slab rate (up to 42.94% including surcharge).
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3">Valuation Approach</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Most Indian companies use annual valuation by independent valuers. Factors: Revenue run-rate, growth
                        trajectory, funding round valuations, comparable company multiples.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Market Norms:</strong> Pre-revenue startups value at INR 10-100 Cr. Series A companies at 10-50x
                        revenue multiples depending on sector.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Employee Value Calculation: How to Present ESOP Offers
                  </h3>

                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-4">Example: CFO Being Offered ESOP</p>
                    <div className="space-y-3 text-gray-700 text-sm">
                      <p>
                        <strong>Offer:</strong> INR 80L base salary + 0.5% ESOP (4-year vest, 1-year cliff)
                      </p>
                      <p>
                        <strong>Company valuation:</strong> INR 500 Cr (assume current round)
                      </p>
                      <p>
                        <strong>ESOP value calculation:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li>0.5% of INR 500 Cr = INR 2.5 Cr total</li>
                        <li>4-year vest = INR 62.5 L per year</li>
                        <li>As % of salary: (INR 62.5 L / INR 80 L) = 78% salary premium annually</li>
                      </ul>
                      <p>
                        <strong>Presentation:</strong> "Your annual salary is INR 80L + ~INR 62.5L in annual ESOP vesting =
                        effective total comp of INR 142.5L"
                      </p>
                      <p className="text-gray-600">
                        <em>
                          Note: This assumes company grows; in downside scenario, ESOP could be worthless. Candidates discount
                          ESOP value 30-50%.
                        </em>
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Middle East: ESOP Challenges & Alternatives
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    ESOP frameworks are less developed in GCC. Most companies avoid ESOP complexity and use cash-based incentives
                    instead:
                  </p>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="font-semibold text-midnight-900 mb-3">Why ESOP is Uncommon in GCC:</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✗ Ownership by non-nationals is restricted in some sectors</li>
                      <li>✗ Islamic financing rules restrict certain equity structures</li>
                      <li>✗ Visa sponsorship tied to employment; ESOP complicates visa separation</li>
                      <li>✗ Expats leaving Gulf frequently; vesting/clawback complicates exit</li>
                      <li>✓ Instead: Cash bonuses (1-3 months annually), profit-sharing (5-10%), retention bonuses</li>
                    </ul>
                  </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Benefits That Matter: Differentiating Your Compensation Package
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    India: The Rising Importance of Non-Salary Benefits
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3 text-lg">Critical Benefits (Must-Have)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>
                          <strong>Health Insurance:</strong> Family coverage (self + spouse + 2 children), INR 20-50 L coverage
                        </li>
                        <li>
                          <strong>Retirement/Gratuity:</strong> Gratuity fund (5 years minimum), pension contributions 10-15%
                        </li>
                        <li>
                          <strong>Housing Allowance:</strong> 15-25% of salary (negotiable by city)
                        </li>
                        <li>
                          <strong>Performance Bonus:</strong> 10-30% of salary (variable by role)
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-3 text-lg">Differentiation Benefits (Nice-to-Have)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>
                          <strong>Mental Health:</strong> Therapy/counseling stipend, meditation apps (ZETL pulse)
                        </li>
                        <li>
                          <strong>Wellness:</strong> Gym membership, nutrition counseling, fitness tracking
                        </li>
                        <li>
                          <strong>Learning & Development:</strong> Annual training budget (INR 1-5L), conference attendance
                        </li>
                        <li>
                          <strong>Flexible Work:</strong> WFH 2-3 days/week, flexible hours (increasingly expected)
                        </li>
                        <li>
                          <strong>Child Education:</strong> School fee reimbursement (INR 2-5L annually, executive level)
                        </li>
                        <li>
                          <strong>Travel Benefits:</strong> Annual flight ticket home (for expats), business class for long
                          journeys
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    GCC: Benefits as Primary Differentiator
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    In GCC markets, all companies compete on cash; differentiation comes through benefits and lifestyle
                    enhancements. Critical benefits:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <p className="font-semibold text-midnight-900 mb-2">Housing</p>
                      <p className="text-gray-700 text-sm">
                        Either provide furnished villa/apartment OR significant housing allowance (AED 8K-15K/month for
                        executives). Direct provision preferred (reduces tax-planning complexity).
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <p className="font-semibold text-midnight-900 mb-2">Car Allowance or Company Vehicle</p>
                      <p className="text-gray-700 text-sm">
                        AED 5K-15K monthly OR full car provision (lease). luxury cars (BMW, Mercedes) are status symbols; offer
                        meaningful here.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <p className="font-semibold text-midnight-900 mb-2">Annual Flight Tickets Home</p>
                      <p className="text-gray-700 text-sm">
                        Economy ticket to home country (India, Philippines, Egypt, etc.). Powerful retention tool; candidates
                        value staying connected to family.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <p className="font-semibold text-midnight-900 mb-2">Health Insurance</p>
                      <p className="text-gray-700 text-sm">
                        Comprehensive family coverage. Expat health insurance crucial (medical tourism expensive). BUPA, AXA,
                        Allianz are popular.
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                      <p className="font-semibold text-midnight-900 mb-2">End of Service Gratuity</p>
                      <p className="text-gray-700 text-sm">
                        Legally required (30 days × years worked). Often offered above minimum (45 days, etc.) for retention.
                        Critical to expat planning.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Data Visualization Section */}
                <section id="visualization" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Salary Comparison Visualization: India vs GCC
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The absolute salaries look similar, but purchasing power tells a very different story:
                  </p>

                  <div className="bg-slate-50 p-8 rounded-lg mb-8">
                    <p className="font-semibold text-midnight-900 mb-6">CFO Compensation Comparison</p>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">India (Bangalore) - INR 100L Annual</p>
                        <div className="flex items-end gap-2 h-24 mb-2">
                          <div className="flex-1 bg-brand-400 rounded" style={{ height: '100%' }} />
                          <span className="text-xs text-gray-600">100%</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          After tax (30%) + housing costs (25%): ~INR 45L disposable = USD ~5,400/month
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">UAE (Dubai) - AED 350K Annual</p>
                        <div className="flex items-end gap-2 h-24 mb-2">
                          <div className="flex-1 bg-blue-500 rounded" style={{ height: '100%' }} />
                          <span className="text-xs text-gray-600">100%</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          No income tax + housing provided: ~AED 270K disposable = USD ~7,400/month
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Saudi Arabia - SAR 600K Annual</p>
                        <div className="flex items-end gap-2 h-24 mb-2">
                          <div className="flex-1 bg-green-500 rounded" style={{ height: '80%' }} />
                          <span className="text-xs text-gray-600">80%</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          Minimal tax + housing: ~SAR 540K disposable = USD ~6,200/month
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-midnight-900 mb-2">Key Insight:</p>
                    <p className="text-gray-700 text-sm">
                      Nominal salary differences mask huge purchasing power gaps. UAE offers 35-40% better take-home than
                      India for equivalent nominal roles. This is why top talent migrates from India to GCC, and why GCC
                      companies attract global talent despite less stable markets.
                    </p>
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
                      <span>11 min read</span>
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
              {['Salary Benchmarking', 'Compensation', 'ESOP', 'Benefits', 'India Market', 'GCC'].map((tag) => (
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
              Need Customized Salary Benchmarks for Your Entry?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              ATHENA MEA conducts custom benchmarking studies aligned to your business model, locations, and roles. Get
              market-competitive, defensible compensation data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-midnight-900 hover:shadow-lg transition-shadow">
                Request Benchmarking Study
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Salary Data (PDF)
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
