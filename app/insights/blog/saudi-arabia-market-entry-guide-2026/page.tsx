'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function SaudiArabiaMarketEntryGuide2026() {
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
    { id: 'vision-2030', title: 'Vision 2030 Opportunities', icon: 'ri-rocket-line' },
    { id: 'misa-licensing', title: 'MISA Licensing', icon: 'ri-government-line' },
    { id: 'entity-types', title: 'Entity Types', icon: 'ri-building-line' },
    { id: 'saudization', title: 'Saudization (Nitaqat)', icon: 'ri-team-line' },
    { id: 'free-zones', title: 'Special Economic Zones', icon: 'ri-map-pin-line' },
    { id: 'tax-regime', title: 'Tax & Zakat', icon: 'ri-calculator-line' },
    { id: 'step-by-step', title: 'Step-by-Step Setup', icon: 'ri-list-check-line' },
    { id: 'conclusion', title: 'Conclusion', icon: 'ri-check-double-line' },
  ];

  const relatedArticles = [
    {
      title: 'UAE Free Zone vs Mainland: Which Is Right for Your Business in 2026?',
      slug: 'uae-free-zone-vs-mainland-2026',
      category: 'Business Setup',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80',
    },
    {
      title: '5 Regulatory Pitfalls Foreign Companies Face When Entering India in 2026',
      slug: 'regulatory-pitfalls-india-2026',
      category: 'Compliance',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80',
    },
    {
      title: 'How to Hire Senior Leaders in India & the Middle East',
      slug: 'hiring-leaders-india-middle-east',
      category: 'Leadership',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-400 via-green-500 to-emerald-600 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1586724237569-9c920a20da48?w=1600&q=80)',
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
              <span className="text-brand-400">Saudi Arabia Market Entry Guide 2026</span>
            </nav>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Saudi Arabia Market Entry Guide 2026: Everything You Need to Know
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vision 2030, MISA Licensing, Saudization, and Step-by-Step Business Setup for Foreign Companies
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>18 min read</span>
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

        {/* Content Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Article Content */}
              <article className="lg:col-span-3 prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6">
                    Introduction: Saudi Arabia as the Next Frontier
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saudi Arabia is undergoing the most ambitious economic transformation in the Middle East. Under Vision 2030,
                    the Kingdom is diversifying its economy beyond oil, opening new sectors to foreign investment, and fast-tracking
                    regulatory reforms to attract global businesses. By 2026, the country has attracted over $120 billion in FDI
                    commitments, with the non-oil GDP growing at 4.8% annually.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    At ATHENA MEA, we have guided over 40 international companies through Saudi Arabia market entry since 2020.
                    From MISA licensing to Saudization compliance, entity structuring to talent acquisition, this guide compiles
                    the practical, ground-level intelligence that foreign companies need to establish operations in the Kingdom
                    successfully.
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Saudi Arabia at a Glance (2026)</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>Population: 36.4 million (32% under 30)</li>
                      <li>GDP: $1.1 trillion (2025), growing at 4.2% in 2026</li>
                      <li>Non-oil GDP share: 52% (up from 42% in 2020)</li>
                      <li>Ease of Doing Business rank: 63rd globally (improving)</li>
                      <li>100% foreign ownership now allowed in most sectors</li>
                      <li>Regional HQ mandate: 200+ multinationals relocated to Riyadh</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Whether you are a technology company establishing a regional hub, a manufacturing firm setting up production,
                    or a professional services firm entering the GCC market, this guide covers every step from initial market
                    assessment through operational launch.
                  </p>
                </section>

                {/* Vision 2030 */}
                <section id="vision-2030" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Vision 2030: Where the Opportunities Are
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Vision 2030 is the strategic framework driving Saudi Arabia&apos;s transformation. For foreign companies, it
                    identifies the exact sectors where the Kingdom is actively seeking international expertise and investment.
                    Understanding these priority sectors is the first step in a successful market entry strategy.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Priority Sectors for Foreign Investment
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Technology & Digital Economy</h4>
                      <p className="text-gray-700 text-sm">Cloud computing, AI, cybersecurity, fintech, e-commerce. Target: $13.3 billion digital economy by 2030. NEOM and SDAIA are driving AI adoption. Foreign tech firms can access the $6.4 billion government IT spending.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Healthcare & Life Sciences</h4>
                      <p className="text-gray-700 text-sm">Hospital management, medical devices, pharmaceuticals, biotech. $85 billion healthcare market by 2030. Privatization of government hospitals creating partnerships for international hospital groups.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Tourism & Entertainment</h4>
                      <p className="text-gray-700 text-sm">Hotels, theme parks, event management, F&B. Target: 150 million visits by 2030. $810 billion tourism investment pipeline. Red Sea Global and AMAALA creating luxury destinations.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Renewable Energy & Sustainability</h4>
                      <p className="text-gray-700 text-sm">Solar, wind, green hydrogen, carbon capture. Target: 50% renewable energy by 2030. $50 billion renewable energy investment committed. ACWA Power leading regional clean energy development.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Manufacturing & Industry 4.0</h4>
                      <p className="text-gray-700 text-sm">Automotive, defense, industrial equipment. National Industrial Development Program targeting $267 billion industrial output. Special Economic Zones offering 50-year tax holidays.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Education & EdTech</h4>
                      <p className="text-gray-700 text-sm">International schools, vocational training, e-learning platforms. $51 billion education budget. Growing demand for STEM and vocational education. KAUST and KFUPM partnerships expanding.</p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Mega Projects Creating Entry Points
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saudi Arabia&apos;s giga-projects represent some of the largest construction and development programs in history.
                    Each project requires thousands of international suppliers, contractors, and service providers:
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong>NEOM:</strong> $500 billion futuristic city including THE LINE, Trojena ski resort, and Oxagon industrial port. Spans 26,500 km2.</li>
                    <li><strong>Red Sea Global:</strong> Luxury tourism destination across 90+ islands with regenerative sustainability mandate.</li>
                    <li><strong>Diriyah Gate:</strong> $20 billion heritage and cultural district in Riyadh, creating a world-class tourist destination.</li>
                    <li><strong>Qiddiya:</strong> $8 billion entertainment city south of Riyadh, including Six Flags theme park and motorsport circuits.</li>
                    <li><strong>The Rig:</strong> Offshore entertainment platform converted from oil rig, the world&apos;s first of its kind.</li>
                  </ul>
                </section>

                {/* MISA Licensing */}
                <section id="misa-licensing" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    MISA Licensing: Your Gateway to Saudi Arabia
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Ministry of Investment of Saudi Arabia (MISA, formerly SAGIA) is the primary regulatory body for foreign
                    investment. Every foreign company must obtain a MISA license before conducting business in the Kingdom.
                    Understanding the licensing process, requirements, and timelines is critical for planning your market entry.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Types of MISA Licenses
                  </h3>

                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-midnight-900 text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left">License Type</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Purpose</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Min. Capital</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Industrial</td>
                          <td className="border border-gray-200 px-4 py-3">Manufacturing, production</td>
                          <td className="border border-gray-200 px-4 py-3">SAR 5 million</td>
                          <td className="border border-gray-200 px-4 py-3">30-45 days</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Services</td>
                          <td className="border border-gray-200 px-4 py-3">Consulting, IT, professional services</td>
                          <td className="border border-gray-200 px-4 py-3">SAR 500,000</td>
                          <td className="border border-gray-200 px-4 py-3">15-30 days</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Trading</td>
                          <td className="border border-gray-200 px-4 py-3">Import/export, wholesale, retail</td>
                          <td className="border border-gray-200 px-4 py-3">SAR 30 million</td>
                          <td className="border border-gray-200 px-4 py-3">30-60 days</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Regional HQ</td>
                          <td className="border border-gray-200 px-4 py-3">Regional headquarters (mandatory from 2024)</td>
                          <td className="border border-gray-200 px-4 py-3">No minimum</td>
                          <td className="border border-gray-200 px-4 py-3">15-20 days</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Real Estate</td>
                          <td className="border border-gray-200 px-4 py-3">Property development, investment</td>
                          <td className="border border-gray-200 px-4 py-3">SAR 30 million</td>
                          <td className="border border-gray-200 px-4 py-3">30-45 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Key Requirements
                  </h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong>Certified company documents:</strong> Certificate of incorporation, memorandum and articles of association, board resolution, audited financial statements (last 3 years)</li>
                    <li><strong>Business plan:</strong> Detailed 5-year business plan including market analysis, investment timeline, job creation projections, and localization strategy</li>
                    <li><strong>No negative list:</strong> Confirm your activity is not on the Negative List (activities restricted to Saudi/GCC nationals)</li>
                    <li><strong>Financial solvency:</strong> Evidence of financial capacity to meet minimum capital requirements</li>
                    <li><strong>Saudization commitment:</strong> Preliminary workforce plan showing Saudi nationalization targets</li>
                  </ul>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">ATHENA MEA Insight</p>
                    <p className="text-gray-700">
                      The MISA application process has been significantly digitized since 2023. However, companies that submit
                      applications with incomplete Saudization plans or inadequate business plans face rejection rates of 35%.
                      Our advisory team pre-audits every submission to ensure first-attempt approval. Average client approval
                      time: 18 days vs. industry average of 38 days.
                    </p>
                  </div>
                </section>

                {/* Entity Types */}
                <section id="entity-types" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Entity Types: Choosing Your Corporate Structure
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saudi Arabia&apos;s new Companies Law (2023) modernized corporate structuring options for foreign investors.
                    Choosing the right entity type impacts your tax obligations, liability exposure, Saudization quotas, and
                    ability to bid on government contracts.
                  </p>

                  <div className="space-y-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-400">
                      <h4 className="font-bold text-midnight-900 mb-2">Limited Liability Company (LLC)</h4>
                      <p className="text-gray-700 text-sm mb-2">The most common structure for foreign companies. 100% foreign ownership permitted. Minimum 1 shareholder, no maximum. Directors can be non-Saudi. Suitable for SMEs and mid-size operations.</p>
                      <p className="text-brand-600 text-sm font-semibold">Best for: Professional services, IT, consulting, mid-size trading</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-bold text-midnight-900 mb-2">Joint Stock Company (JSC)</h4>
                      <p className="text-gray-700 text-sm mb-2">For large-scale operations planning eventual IPO on Tadawul. Minimum SAR 500,000 capital. Requires 5+ founding shareholders. Board governance requirements apply.</p>
                      <p className="text-blue-600 text-sm font-semibold">Best for: Large enterprises, companies planning public listing</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-bold text-midnight-900 mb-2">Branch Office</h4>
                      <p className="text-gray-700 text-sm mb-2">Extension of the parent company. No separate legal personality. Can only perform activities identical to the parent. Often used for government contracts requiring local presence.</p>
                      <p className="text-green-600 text-sm font-semibold">Best for: Government contract execution, project-based operations</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-bold text-midnight-900 mb-2">Regional Headquarters (RHQ)</h4>
                      <p className="text-gray-700 text-sm mb-2">Mandatory from 2024 for multinationals wanting government contracts. Incentives include 30-year corporate tax exemption, withholding tax relief, and priority access to government procurement.</p>
                      <p className="text-purple-600 text-sm font-semibold">Best for: Multinationals seeking government contracts, regional coordination</p>
                    </div>
                  </div>
                </section>

                {/* Saudization */}
                <section id="saudization" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Saudization (Nitaqat): Workforce Nationalization Requirements
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Nitaqat system is Saudi Arabia&apos;s workforce nationalization program, requiring companies to employ a
                    minimum percentage of Saudi nationals. This is one of the most impactful regulatory considerations for
                    foreign companies and directly affects your hiring strategy, compensation budgets, and operational planning.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Nitaqat Classification Bands
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Companies are classified into color bands based on their Saudization percentage relative to sector benchmarks:
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong className="text-green-600">Platinum:</strong> Exceeds requirements. Full access to all visa and work permit services. Priority treatment.</li>
                    <li><strong className="text-green-500">Green (High/Mid/Low):</strong> Meets requirements. Standard access to services. Good standing.</li>
                    <li><strong className="text-yellow-600">Yellow:</strong> Below requirements. Restricted access to new visas. 6-month correction period.</li>
                    <li><strong className="text-red-600">Red:</strong> Significantly below requirements. Cannot issue new visas, transfer sponsorships, or open new branches. Subject to penalties.</li>
                  </ul>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Sector-Specific Requirements (2026)
                  </h3>
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-midnight-900 text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left">Sector</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Min. Saudization %</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Key Roles Reserved</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3">IT & Technology</td>
                          <td className="border border-gray-200 px-4 py-3">25-30%</td>
                          <td className="border border-gray-200 px-4 py-3">IT support, data entry, cybersecurity</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3">Professional Services</td>
                          <td className="border border-gray-200 px-4 py-3">30-35%</td>
                          <td className="border border-gray-200 px-4 py-3">HR, accounting, procurement</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3">Manufacturing</td>
                          <td className="border border-gray-200 px-4 py-3">20-25%</td>
                          <td className="border border-gray-200 px-4 py-3">Quality control, safety officers</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3">Retail</td>
                          <td className="border border-gray-200 px-4 py-3">70%+</td>
                          <td className="border border-gray-200 px-4 py-3">All customer-facing roles</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-200 px-4 py-3">Healthcare</td>
                          <td className="border border-gray-200 px-4 py-3">20-30%</td>
                          <td className="border border-gray-200 px-4 py-3">Admin, pharmacy assistants</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">ATHENA MEA Insight</p>
                    <p className="text-gray-700">
                      Saudization is the number one operational challenge for foreign companies entering Saudi Arabia. Our talent
                      discovery team specializes in identifying qualified Saudi nationals for leadership and specialist roles,
                      ensuring companies meet Nitaqat requirements while maintaining performance standards. We have placed over
                      200 Saudi professionals in multinational companies since 2021.
                    </p>
                  </div>
                </section>

                {/* Free Zones */}
                <section id="free-zones" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Special Economic Zones (SEZs)
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saudi Arabia launched its Special Economic Zones framework in 2023 to compete with UAE free zones. These
                    zones offer significant incentives that can dramatically reduce your cost of market entry and ongoing operations.
                  </p>

                  <div className="space-y-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">King Abdullah Economic City (KAEC)</h4>
                      <p className="text-gray-700 text-sm">Located on the Red Sea coast. Focus: logistics, pharma, FMCG manufacturing. 0% corporate tax for 50 years. 0% personal income tax. No customs duties on imports/exports within the zone.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Ras Al-Khair SEZ</h4>
                      <p className="text-gray-700 text-sm">Eastern Province. Focus: mining, metals, shipbuilding. Connected to Saudi Arabia&apos;s mineral resources. Tax incentives similar to KAEC. Proximity to industrial clusters.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Jazan SEZ</h4>
                      <p className="text-gray-700 text-sm">Southern Region. Focus: agriculture processing, energy-intensive industries. Strategic location near Yemen and East Africa trade routes. Significant energy cost advantages.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-midnight-900 mb-3">Cloud Computing SEZ (Riyadh)</h4>
                      <p className="text-gray-700 text-sm">Riyadh-based digital zone. Focus: cloud services, data centers, AI. Relaxed data localization requirements. Fast-track licensing for tech companies. Partnership with major hyperscalers.</p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    SEZ Incentives Summary
                  </h3>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>0% corporate income tax for up to 50 years</li>
                    <li>0% personal income tax</li>
                    <li>0% customs duties on imports and re-exports</li>
                    <li>100% foreign ownership</li>
                    <li>Relaxed Saudization requirements (reduced quotas)</li>
                    <li>Flexible labor regulations</li>
                    <li>Streamlined licensing (single-window clearance)</li>
                    <li>Full profit and capital repatriation</li>
                  </ul>
                </section>

                {/* Tax Regime */}
                <section id="tax-regime" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Tax & Zakat: Understanding Saudi Arabia&apos;s Fiscal Framework
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saudi Arabia&apos;s tax system differs fundamentally from most markets. There is no personal income tax, but
                    corporate taxation and Zakat create distinct obligations for foreign and Saudi-owned entities respectively.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Key Tax Rates (2026)
                  </h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong>Corporate Income Tax:</strong> 20% on foreign-owned entities (flat rate on net profit)</li>
                    <li><strong>Zakat:</strong> 2.5% on Saudi/GCC-owned entities (on net worth/equity base)</li>
                    <li><strong>Withholding Tax:</strong> 5-20% on payments to non-residents (varies by payment type)</li>
                    <li><strong>VAT:</strong> 15% (standard rate, introduced at 5% in 2018, raised in 2020)</li>
                    <li><strong>Transfer Pricing:</strong> OECD-aligned rules enforced since 2019. Documentation requirements apply for related-party transactions exceeding SAR 6 million</li>
                    <li><strong>Personal Income Tax:</strong> 0% (no personal income tax in Saudi Arabia)</li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Important: Regional HQ Tax Benefits</p>
                    <p className="text-gray-700">
                      Companies establishing Regional Headquarters in Riyadh under the RHQ program receive a 30-year exemption
                      from corporate income tax on regional management activities, plus withholding tax relief on repatriated
                      profits. This makes the effective tax rate near 0% for qualifying activities.
                    </p>
                  </div>
                </section>

                {/* Step by Step */}
                <section id="step-by-step" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Step-by-Step: Setting Up Your Business in Saudi Arabia
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Here is the practical, sequential process for establishing a foreign company in Saudi Arabia, based on
                    ATHENA MEA&apos;s experience supporting over 40 market entry projects:
                  </p>

                  <div className="space-y-8 my-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-2">Market Assessment & Feasibility (4-6 weeks)</h4>
                        <p className="text-gray-700 text-sm">Conduct market sizing, competitive analysis, regulatory mapping, and financial modeling. Identify target sectors, customers, and geographic focus (Riyadh, Jeddah, Eastern Province). Assess Saudization feasibility for your industry.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-2">Entity Structure Decision (1-2 weeks)</h4>
                        <p className="text-gray-700 text-sm">Choose between LLC, JSC, Branch Office, or RHQ based on your business model, capital availability, and government contract requirements. Consult with legal counsel on Negative List screening.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-2">MISA License Application (2-6 weeks)</h4>
                        <p className="text-gray-700 text-sm">Prepare and submit MISA application with all required documents: business plan, financial statements, board resolution, Saudization plan. Apply through the MISA Invest Saudi portal.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-2">Commercial Registration (1-2 weeks)</h4>
                        <p className="text-gray-700 text-sm">Register with the Ministry of Commerce (MoC). Obtain Commercial Registration (CR) number. Open corporate bank account (Saudi banks require CR and MISA license). Register for GOSI (social insurance).</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold">5</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-2">Tax Registration & VAT (1-2 weeks)</h4>
                        <p className="text-gray-700 text-sm">Register with ZATCA (Zakat, Tax and Customs Authority). Obtain tax identification number. Register for VAT if annual revenue exceeds SAR 375,000. Set up e-invoicing system (FATOORA).</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold">6</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-2">Office Setup & Workforce (2-4 weeks)</h4>
                        <p className="text-gray-700 text-sm">Secure office space (Riyadh, Jeddah, or SEZ). Register on Qiwa labor platform. Begin recruitment with Saudization targets. Apply for work visas through Muqeem system. Register for GOSI contributions.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold">7</div>
                      <div>
                        <h4 className="font-bold text-midnight-900 mb-2">Operational Launch (2-4 weeks)</h4>
                        <p className="text-gray-700 text-sm">Activate operations, onboard team, establish vendor relationships. Register on government procurement platforms (Etimad) if targeting public sector contracts. Begin compliance reporting.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Total Timeline: 12-20 Weeks</p>
                    <p className="text-gray-700">
                      With ATHENA MEA&apos;s end-to-end market entry advisory, most clients are operational in Saudi Arabia within
                      12-16 weeks. Our team handles MISA applications, entity registration, talent recruitment (including
                      Saudization-compliant hiring), and operational setup simultaneously to compress timelines.
                      <Link href="/" className="text-brand-400 hover:text-brand-500 font-semibold ml-1">
                        Contact ATHENA MEA for a free consultation &rarr;
                      </Link>
                    </p>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Conclusion: Why 2026 Is the Year to Enter Saudi Arabia
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saudi Arabia in 2026 represents one of the most compelling market entry opportunities globally. Vision 2030
                    reforms have created a regulatory environment that is more transparent, more accessible, and more welcoming
                    to foreign investment than at any point in the Kingdom&apos;s history. The Regional HQ mandate, SEZ incentives,
                    and mega-project pipeline create natural entry points for companies across every sector.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    However, success requires careful navigation of MISA licensing, Saudization requirements, and a business
                    culture that rewards relationship-building and long-term commitment. Companies that invest in proper market
                    assessment, build compliant workforce plans, and partner with experienced local advisors consistently
                    outperform those that attempt to replicate strategies from other markets.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    ATHENA MEA is the specialist advisory firm for the India-Middle East corridor. With offices in Gurgaon,
                    Dubai, and operational presence in Riyadh, we provide end-to-end market entry advisory that combines
                    strategic consulting with executive search and talent acquisition.
                  </p>

                  <div className="bg-midnight-900 text-white p-8 rounded-lg my-8">
                    <h3 className="font-display text-2xl font-bold mb-4">Ready to Enter Saudi Arabia?</h3>
                    <p className="text-white/80 mb-6">
                      ATHENA MEA provides end-to-end market entry advisory for Saudi Arabia, including MISA licensing,
                      entity setup, Saudization-compliant hiring, and operational launch support.
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
                  {/* Table of Contents */}
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

                  {/* Share */}
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

                  {/* CTA */}
                  <div className="bg-midnight-900 rounded-xl p-6 text-white">
                    <h3 className="font-display text-lg font-bold mb-3">Need Help with Saudi Arabia Market Entry?</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Our team has guided 40+ companies into the Kingdom. Get expert advisory on MISA licensing, entity setup, and talent acquisition.
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
