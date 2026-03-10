'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function UAEFreeZoneVsMainland() {
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
    { id: 'overview', title: 'Overview', icon: 'ri-globe-line' },
    { id: 'free-zones', title: 'Free Zone Benefits', icon: 'ri-shield-line' },
    { id: 'mainland', title: 'Mainland Advantages', icon: 'ri-building-line' },
    { id: 'comparison', title: 'Cost Comparison', icon: 'ri-bar-chart-line' },
    { id: 'visa-employment', title: 'Visa & Employment', icon: 'ri-id-card-line' },
    { id: 'faq', title: 'FAQ', icon: 'ri-question-line' },
    { id: 'decision', title: 'Decision Matrix', icon: 'ri-checklist-line' },
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
  ];

  const faqItems = [
    {
      question: 'Can I trade internationally from a UAE free zone?',
      answer:
        'Yes, free zone companies have unlimited trading rights. You can import, export, and trade goods globally. However, domestic trade within UAE mainland is restricted. To access the UAE mainland market, you would need a mainland agent or sponsor (typically required in certain sectors).',
    },
    {
      question: 'What is the minimum capital required for free zone vs mainland?',
      answer:
        'Free zones: AED 100,000-AED 500,000+ depending on the zone. Mainland: AED 100,000-AED 1 million depending on sector. Some sectors like insurance or banking require significantly higher capital. The specific amount varies by business type, sector, and zone.',
    },
    {
      question: 'How long does company setup take in free zones vs mainland?',
      answer:
        'Free zones: 5-10 working days (faster processing). Mainland: 10-15 working days plus additional approvals from sector regulators. Free zones offer streamlined processes and dedicated support, while mainland requires navigation through multiple government departments.',
    },
    {
      question: 'Can a free zone company have 100% foreign ownership?',
      answer:
        'Yes, free zones allow 100% foreign ownership without requiring a local sponsor or partner. This is one of the major attractions for international businesses. Mainland companies traditionally required local ownership stakes, though recent reforms have relaxed this in select sectors.',
    },
    {
      question: 'What are the tax implications of free zone vs mainland?',
      answer:
        'Free zones: 0% corporate income tax for operations within the zone, customs duties exemptions, and 0% personal income tax. Mainland: Corporate tax rate is 0% for UAE nationals and residents in most cases, but some regulations apply. Free zones offer more comprehensive tax exemptions and customs benefits.',
    },
  ];

  const freeZones = [
    {
      name: 'DIFC (Dubai International Financial Centre)',
      sector: 'Financial Services, Legal, Consulting',
      benefits: [
        'International common law jurisdiction',
        'DFSA regulation (world-class standards)',
        'Access to Dubai financial markets',
        'Premium talent pool (international professionals)',
      ],
      setup: 'USD 8,000-15,000',
      ideal: 'Financial institutions, funds, fintech, professional services',
    },
    {
      name: 'DMCC (Dubai Multi Commodities Centre)',
      sector: 'Trading, Commodities, Diamonds, Precious Metals',
      benefits: [
        '100% free ownership',
        'Global commodities trading hub',
        'Low annual fees (from AED 2,000)',
        'Streamlined clearance for goods',
      ],
      setup: 'AED 4,500-15,000',
      ideal: 'Trading firms, commodities dealers, distributors, import-export',
    },
    {
      name: 'JAFZA (Jebel Ali Free Zone)',
      sector: 'Manufacturing, Logistics, Trading, General Commerce',
      benefits: [
        'Largest free zone by area',
        'Port facilities & logistics',
        'Competitive rental rates',
        'Diverse business sectors welcome',
      ],
      setup: 'AED 3,000-20,000',
      ideal: 'Manufacturing, warehousing, trading, logistics, distribution',
    },
    {
      name: 'ADGM (Abu Dhabi Global Market)',
      sector: 'Financial Services, Insurance, Legal, Tech',
      benefits: [
        'English law jurisdiction',
        'ADGM Authority regulation',
        'Premium financial center',
        'Government investment incentives',
      ],
      setup: 'USD 6,000-12,000',
      ideal: 'Financial services, insurance, fintech, international businesses',
    },
    {
      name: 'RAKEZ (Ras Al Khaimah Economic Zone)',
      sector: 'General Business, Manufacturing, Tech, Trading',
      benefits: [
        'Most cost-effective option',
        'Flexible business structures',
        'Modern infrastructure',
        'Pro-business government support',
      ],
      setup: 'AED 2,000-8,000',
      ideal: 'Startups, SMEs, tech companies, manufacturers, traders',
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80)',
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
              <span className="text-brand-400">UAE Free Zone vs Mainland</span>
            </nav>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              UAE Free Zone vs Mainland
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Which Is Right for Your Business in 2025?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
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
                    Understanding the UAE Business Landscape
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The UAE has become a global business hub attracting companies from every sector. In 2024-2025, over
                    15,000 foreign companies chose the UAE for regional operations, driven by stable governance, world-class
                    infrastructure, and strategic geographic location. Your first critical decision is whether to establish
                    your operations in a free zone or on the mainland—a choice that will shape your tax liability, market
                    access, operational flexibility, and long-term growth trajectory.
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Key 2025 Market Metrics</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ UAE non-oil economy growing at 3.5-4% annually</li>
                      <li>✓ Free zones host 45,000+ companies (30% of UAE businesses)</li>
                      <li>✓ Mainland businesses: 105,000+ registered entities</li>
                      <li>✓ FDI inflows to UAE: $20+ billion annually</li>
                      <li>✓ New business registrations: 18,000+ per quarter</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    This guide breaks down the trade-offs, costs, regulatory requirements, and strategic implications of each
                    option, helping you make an informed decision based on your specific business model, growth plans, and
                    market access needs.
                  </p>
                </section>

                {/* Free Zones Section */}
                <section id="free-zones" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Understanding UAE Free Zones
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Free zones are designated geographic areas offering tax incentives and regulatory autonomy to businesses.
                    Think of them as "special economic zones" where international business rules apply rather than UAE domestic
                    rules. There are 44+ free zones across the UAE, each specializing in specific sectors.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Core Advantages of Free Zones
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-percent-line text-green-500" />
                        Tax Benefits
                      </h4>
                      <p className="text-gray-700">
                        0% corporate income tax on profits, 0% personal income tax, 0% customs duties on imports/exports, VAT
                        exemptions on certain goods. This is fundamentally different from mainland operations.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-shield-line text-blue-500" />
                        100% Foreign Ownership
                      </h4>
                      <p className="text-gray-700">
                        No requirement for a UAE citizen sponsor or partner. Majority of free zones allow complete foreign
                        control, unlike mainland where local partnerships are traditionally required.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-global-line text-purple-500" />
                        Unlimited Trading Rights
                      </h4>
                      <p className="text-gray-700">
                        Free zone companies can trade globally with any country without restrictions. Import and export rights
                        are unrestricted.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-time-line text-orange-500" />
                        Fast Setup
                      </h4>
                      <p className="text-gray-700">
                        5-10 working days from application to license. Dedicated zone authorities handle all approvals,
                        eliminating multiple government departments.
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-building-line text-red-500" />
                        Flexible Space Options
                      </h4>
                      <p className="text-gray-700">
                        Lease office space, warehouses, or manufacturing facilities at competitive rates with flexible
                        contract terms.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Key Free Zones & Specializations
                  </h3>

                  <div className="space-y-6">
                    {freeZones.map((zone, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-brand-400 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h4 className="font-display font-bold text-midnight-900 text-lg">{zone.name}</h4>
                            <p className="text-sm text-brand-400 font-semibold mt-1">{zone.sector}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-600 mb-1">Setup Cost</p>
                            <p className="font-semibold text-midnight-900">{zone.setup}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-2">Key Benefits:</p>
                            <ul className="space-y-1 text-sm text-gray-700">
                              {zone.benefits.map((benefit, bidx) => (
                                <li key={bidx} className="flex gap-2">
                                  <i className="ri-check-line text-brand-400 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-2">Ideal For:</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{zone.ideal}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Free Zone Limitations You Must Understand
                  </h3>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 space-y-3">
                    <div>
                      <p className="font-semibold text-midnight-900 mb-2">
                        <i className="ri-alert-line text-yellow-600 mr-2" />
                        Domestic Trade Restrictions
                      </p>
                      <p className="text-gray-700">
                        Free zone companies cannot trade in the UAE mainland market without a local sponsor or agent. This
                        is a significant limitation if you want to serve UAE customers directly.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-900 mb-2">
                        <i className="ri-alert-line text-yellow-600 mr-2" />
                        Government Contracts Restrictions
                      </p>
                      <p className="text-gray-700">
                        Free zone companies have limited access to UAE government contracts and tenders. Mainland companies
                        have preferential access.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-900 mb-2">
                        <i className="ri-alert-line text-yellow-600 mr-2" />
                        Annual Renewal Requirements
                      </p>
                      <p className="text-gray-700">
                        Free zone licenses require annual renewal with associated fees (AED 2,000-15,000 depending on zone).
                        Non-renewal leads to business closure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Mainland Section */}
                <section id="mainland" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Mainland Business Setup: The Local Option
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mainland businesses operate under UAE federal law and have access to the entire UAE market. Recent
                    regulatory reforms (2020 onwards) have significantly liberalized mainland business setup, making it more
                    attractive for international companies.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Core Advantages of Mainland Setup
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-globe-line text-green-500" />
                        Unlimited Market Access
                      </h4>
                      <p className="text-gray-700">
                        Full access to UAE mainland market (365+ million people in MENA region). Direct customer access
                        without intermediaries.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-building-2-line text-blue-500" />
                        Government Contract Access
                      </h4>
                      <p className="text-gray-700">
                        Eligible to bid on UAE government tenders and contracts. Significant revenue opportunity in public
                        sector procurement.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-bank-line text-purple-500" />
                        Banking & Financing Access
                      </h4>
                      <p className="text-gray-700">
                        Easier access to bank financing and credit facilities. Banks view mainland companies as lower risk.
                        More favorable loan terms.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-refresh-line text-orange-500" />
                        No Annual Renewal Requirements
                      </h4>
                      <p className="text-gray-700">
                        License is permanent (unless revoked for cause). No annual fees for license renewal. More stable
                        long-term setup.
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-semibold text-midnight-900 mb-2 flex items-center gap-2">
                        <i className="ri-team-line text-red-500" />
                        Unified Jurisdiction
                      </h4>
                      <p className="text-gray-700">
                        Operates under UAE federal law and local emirate laws. More consistent, predictable regulatory
                        environment.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Recent Regulatory Reforms (2020-2025)
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The UAE government has significantly liberalized mainland business setup to compete with free zones:
                  </p>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>100% Foreign Ownership Allowed:</strong> Since 2021, foreign investors can own 100% of
                        mainland companies in most sectors (previously required 51% local ownership)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>No Sponsorship Requirement:</strong> Many sectors no longer require a local sponsor,
                        reducing third-party dependency
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Streamlined Setup:</strong> New smart government initiatives reduced setup time from 30 days
                        to 10-15 days
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Digital Processes:</strong> Most approvals now online through UAE Pass; reduced paperwork and
                        in-person visits
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Competitive Fees:</strong> Annual business license fees reduced (now from AED 500-5,000 for
                        service businesses)
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Mainland Considerations
                  </h3>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 space-y-3">
                    <div>
                      <p className="font-semibold text-midnight-900 mb-2">
                        <i className="ri-alert-line text-yellow-600 mr-2" />
                        Corporate Taxation
                      </p>
                      <p className="text-gray-700">
                        0% corporate tax for UAE citizens and residents. Foreign companies subject to 0% tax on domestic
                        income earned before 2023. From 2023: 15% tax on profits exceeding AED 375,000. However, most sectors
                        benefit from exemptions or deductions.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-900 mb-2">
                        <i className="ri-alert-line text-yellow-600 mr-2" />
                        VAT Compliance
                      </p>
                      <p className="text-gray-700">
                        5% VAT applies to most goods and services. Mandatory registration if revenue exceeds AED 375,000.
                        Quarterly VAT compliance required.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-900 mb-2">
                        <i className="ri-alert-line text-yellow-600 mr-2" />
                        Sector-Specific Regulations
                      </p>
                      <p className="text-gray-700">
                        Some sectors require sector regulator approval (banking, insurance, telecom). This adds 2-4 weeks to
                        setup timeline.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Comparison Section */}
                <section id="comparison" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Cost Comparison Table
                  </h2>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-midnight-900 bg-slate-50">
                          <th className="text-left p-4 font-semibold text-midnight-900">Expense Item</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Free Zone (Annual)</th>
                          <th className="text-left p-4 font-semibold text-midnight-900">Mainland (Annual)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4">Company Registration</td>
                          <td className="p-4">AED 2,000-5,000 (one-time)</td>
                          <td className="p-4">AED 500-2,000 (one-time)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4">License Renewal / Annual Fee</td>
                          <td className="p-4">AED 5,000-15,000</td>
                          <td className="p-4">AED 500-5,000</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4">Office Space (per 100 sqm/month)</td>
                          <td className="p-4">AED 2,000-4,000</td>
                          <td className="p-4">AED 3,000-8,000</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4">Visa Sponsorship (20 employees)</td>
                          <td className="p-4">AED 2,500-5,000</td>
                          <td className="p-4">AED 3,000-6,000</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4">Corporate Taxation (15% on profit)</td>
                          <td className="p-4">0%</td>
                          <td className="p-4">0-15% (depends on profit level)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4">VAT Compliance</td>
                          <td className="p-4">Exempted (if free zone operations only)</td>
                          <td className="p-4">5% + quarterly compliance</td>
                        </tr>
                        <tr className="bg-brand-400/10">
                          <td className="p-4 font-semibold">Total Year 1 Approx (minimal staffing)</td>
                          <td className="p-4 font-semibold">AED 25,000-35,000</td>
                          <td className="p-4 font-semibold">AED 30,000-50,000+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 font-semibold mb-2">Important Note:</p>
                    <p className="text-gray-700">
                      These are approximate ranges. Actual costs vary significantly based on the specific free zone,
                      emirate, business size, and sector. High-rent areas (Dubai, Abu Dhabi) have higher space costs. Smaller
                      zones (Ras Al Khaimah, Ajman) are significantly cheaper.
                    </p>
                  </div>
                </section>

                {/* Visa & Employment Section */}
                <section id="visa-employment" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Visa, Employment & Talent Implications
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Visa Sponsorship Capabilities
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-4 flex items-center gap-2">
                        <i className="ri-building-line text-brand-400" />
                        Free Zone Companies
                      </h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex gap-2">
                          <i className="ri-check-line text-green-500 flex-shrink-0" />
                          <span>Can sponsor visas for employees</span>
                        </li>
                        <li className="flex gap-2">
                          <i className="ri-check-line text-green-500 flex-shrink-0" />
                          <span>Can sponsor family (spouse, children)</span>
                        </li>
                        <li className="flex gap-2">
                          <i className="ri-alert-line text-yellow-600 flex-shrink-0" />
                          <span>Visa tied to company; employee cannot work for mainland company</span>
                        </li>
                        <li className="flex gap-2">
                          <i className="ri-check-line text-green-500 flex-shrink-0" />
                          <span>Golden visa available (5-10 years) for certain roles</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-midnight-900 mb-4 flex items-center gap-2">
                        <i className="ri-building-line text-blue-500" />
                        Mainland Companies
                      </h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex gap-2">
                          <i className="ri-check-line text-green-500 flex-shrink-0" />
                          <span>Can sponsor visas for employees</span>
                        </li>
                        <li className="flex gap-2">
                          <i className="ri-check-line text-green-500 flex-shrink-0" />
                          <span>Can sponsor family (spouse, children)</span>
                        </li>
                        <li className="flex gap-2">
                          <i className="ri-check-line text-green-500 flex-shrink-0" />
                          <span>Employee can work for multiple companies (with restrictions)</span>
                        </li>
                        <li className="flex gap-2">
                          <i className="ri-check-line text-green-500 flex-shrink-0" />
                          <span>Golden visa available (10-20 years) for specialized talent</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Emiratization & Saudization Requirements
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The UAE government encourages hiring of UAE nationals through Emiratization initiatives. While not
                    mandatory for all business types, it affects salary budgets and hiring timelines:
                  </p>

                  <div className="bg-slate-50 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <strong>Free Zones:</strong> Emiratization targets are more flexible. Minimum requirements vary by zone
                      (typically 2-10% depending on business type).
                    </p>
                    <p className="text-gray-700">
                      <strong>Mainland:</strong> Stronger Emiratization targets. Certain sectors (banking, insurance, retail)
                      have minimum percentage requirements (10-30% depending on sector).
                    </p>
                    <p className="text-gray-700">
                      <strong>Salary Expectation:</strong> UAE national salaries are typically 30-50% higher than expat salaries
                      for equivalent roles due to government incentives and labor market dynamics.
                    </p>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Talent Recruitment Timeline
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The UAE talent market is highly competitive with shorter decision cycles than Western markets:
                  </p>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Senior roles (GM, CFO):</strong> 6-8 weeks (international candidates may need visa sponsorship
                        sponsorship
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Mid-management:</strong> 4-6 weeks (local and regional talent pool)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-400 font-bold">→</span>
                      <span>
                        <strong>Operational staff:</strong> 2-4 weeks (abundant supply in Dubai/Abu Dhabi; longer in other
                        emirates)
                      </span>
                    </li>
                  </ul>
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

                {/* Decision Matrix Section */}
                <section id="decision" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Decision Matrix: Which Option Is Right for You?
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    Use this framework to determine whether free zone or mainland setup aligns with your business goals:
                  </p>

                  <div className="space-y-6">
                    <div className="border-2 border-brand-400 rounded-lg p-6 bg-brand-400/5">
                      <h3 className="font-semibold text-midnight-900 mb-4 text-lg flex items-center gap-2">
                        <i className="ri-check-circle-line text-brand-400" />
                        Choose FREE ZONE if:
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex gap-2">
                          <span className="text-brand-400">✓</span> You want to minimize taxes and annual compliance costs
                        </li>
                        <li className="flex gap-2">
                          <span className="text-brand-400">✓</span> Your business model is global/regional (trading, import-export,
                          services to international clients)
                        </li>
                        <li className="flex gap-2">
                          <span className="text-brand-400">✓</span> You need rapid setup (under 2 weeks)
                        </li>
                        <li className="flex gap-2">
                          <span className="text-brand-400">✓</span> You're a startup with limited initial capital
                        </li>
                        <li className="flex gap-2">
                          <span className="text-brand-400">✓</span> You want 100% foreign ownership without local partnerships
                        </li>
                        <li className="flex gap-2">
                          <span className="text-brand-400">✓</span> Your supply chain is primarily import/export
                        </li>
                      </ul>
                    </div>

                    <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50/30">
                      <h3 className="font-semibold text-midnight-900 mb-4 text-lg flex items-center gap-2">
                        <i className="ri-check-circle-line text-blue-500" />
                        Choose MAINLAND if:
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex gap-2">
                          <span className="text-blue-500">✓</span> Your primary market is UAE and GCC countries
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500">✓</span> You plan to bid on government tenders/contracts
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500">✓</span> You need long-term stability (permanent license)
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500">✓</span> You want unlimited domestic market access
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500">✓</span> You need bank financing (easier credit access)
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500">✓</span> You're a established multinational entering UAE market
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <p className="font-semibold text-midnight-900 mb-2">Pro Tip: Hybrid Approach</p>
                    <p className="text-gray-700 leading-relaxed">
                      Many companies establish both a free zone entity (for global/regional operations) and a mainland entity
                      (for local market presence). This requires more setup effort but provides maximum flexibility. Costs are
                      roughly 1.5x of a single entity. Consult ATHENA MEA to evaluate if this approach fits your strategy.
                    </p>
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
                      <span>10 min read</span>
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
              {['UAE Free Zone', 'Mainland Business', 'Company Setup', 'Dubai', 'Business Licensing'].map((tag) => (
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
              Unsure Which Structure Is Right for You?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our UAE market specialists have guided 500+ companies through free zone vs mainland decisions. Get expert
              guidance tailored to your business model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-midnight-900 hover:shadow-lg transition-shadow">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Comparison Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
