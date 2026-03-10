'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function IndiaMarketEntryGuide() {
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
    { id: 'overview', title: 'Market Overview', icon: 'ri-globe-line' },
    { id: 'entity-structures', title: 'Entity Structures', icon: 'ri-building-line' },
    { id: 'regulatory-framework', title: 'Regulatory Framework', icon: 'ri-file-list-line' },
    { id: 'sector-focus', title: 'Sector Roadmap', icon: 'ri-map-pin-line' },
    { id: 'talent-landscape', title: 'Talent Market', icon: 'ri-user-search-line' },
    { id: 'faq', title: 'FAQ', icon: 'ri-question-line' },
    { id: 'timeline', title: 'Entry Timeline', icon: 'ri-time-line' },
  ];

  const relatedArticles = [
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
      question: 'What is the minimum capital requirement for starting a business in India?',
      answer:
        'The minimum capital requirement in India varies by business type and entity structure. For a Wholly Owned Subsidiary (WOS), foreign companies must typically invest ₹10 lakhs (USD ~12,000) or more depending on the sector. However, several sectors have specific FDI limits and minimum capitalization requirements. It\'s advisable to consult with your legal advisor for sector-specific requirements.',
    },
    {
      question: 'How long does it take to incorporate a company in India?',
      answer:
        'The standard incorporation timeline is 5-7 working days after submitting all required documents to the Ministry of Corporate Affairs (MCA). However, the entire process including PAN registration, bank account opening, and GST registration can take 6-8 weeks. Advanced planning is essential for a smooth market entry within your target 6-month roadmap.',
    },
    {
      question: 'Which city should I establish my headquarters in?',
      answer:
        'Your choice depends on your industry. Mumbai dominates financial services and trading; Bangalore leads in technology and startups; Hyderabad is ideal for pharmaceuticals and IT services; Gurugram (Delhi NCR) is prime for FMCG and consumer goods; and Chennai is strong for manufacturing and automotive. Each city offers different regulatory incentives, talent pools, and infrastructure.',
    },
    {
      question: 'What are the FDI restrictions in India?',
      answer:
        'India maintains sector-specific FDI limits. For example, retail FDI is 100% for single-brand goods and 51% for multi-brand; insurance is capped at 49%; defense production is 49% in most segments; and some sectors require government approval through the Foreign Investment Promotion Board (FIPB). Always verify sector-specific rules before finalizing your investment structure.',
    },
    {
      question: 'Do I need a local partner to enter India?',
      answer:
        'Not necessarily. A Wholly Owned Subsidiary (WOS) allows 100% foreign ownership in most sectors without a local partner requirement. However, a Joint Venture can provide faster market entry, local relationships, and operational knowledge. The choice depends on your capital availability, sector, and strategic goals.',
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
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-white/80 text-sm mb-8 font-medium">
              <span>Insights</span>
              <ChevronRight className="w-4 h-4" />
              <span>Blog</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-400">India Market Entry Guide 2025</span>
            </nav>

            {/* Title */}
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              India Market Entry Guide 2025
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Strategy, Regulations & Practical Playbook for Global Companies
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
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

          {/* Scroll Indicator */}
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
                    Why India in 2025: Market Fundamentals
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India represents one of the world's most compelling market entry opportunities in 2025, driven by
                    structural economic tailwinds and digital transformation. The Indian economy is projected to grow at
                    6-7% CAGR through 2027, making it the fastest-growing major economy globally. With a population of
                    1.4+ billion people, India has emerged as the world's second-largest digital ecosystem by user base,
                    with over 850 million internet users and a rapidly expanding middle class.
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">Key Market Metrics (2025)</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>GDP Growth:</strong> 6.8% projected (IMF estimate)
                      </li>
                      <li>
                        <strong>Digital Market Size:</strong> $180+ billion (fastest-growing in APAC)
                      </li>
                      <li>
                        <strong>E-commerce TAM:</strong> $330 billion by 2025
                      </li>
                      <li>
                        <strong>Tech Talent Pool:</strong> 5+ million software developers
                      </li>
                      <li>
                        <strong>FDI Inflows (2024):</strong> $84+ billion (7th largest globally)
                      </li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Consumer Market Expansion
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India's consumer market is undergoing a structural shift. The middle class is projected to reach 250
                    million by 2027 (from 160 million today), driving consumption growth in sectors like e-commerce,
                    fintech, healthtech, and EdTech. Urban penetration is increasing rapidly, with tier-2 and tier-3
                    cities becoming primary growth engines. This creates unprecedented opportunities for B2B2C and
                    direct-to-consumer strategies.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Digital Infrastructure & Regulations
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    India's digital infrastructure has matured significantly. UPI (Unified Payments Interface) processes
                    over 8 billion transactions monthly, creating seamless payment ecosystems. New regulations like the
                    Digital Personal Data Protection Act, 2023, and amended Foreign Contribution Regulation Act (FCRA)
                    provide clearer compliance frameworks. The government's focus on "Make in India" and PLI (Production
                    Linked Incentive) scheme opens manufacturing opportunities across 14 sectors.
                  </p>
                </section>

                {/* Entity Structures Section */}
                <section id="entity-structures" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Legal Entity Structures in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Selecting the correct business entity is foundational to your market entry. Each structure carries
                    different implications for taxation, liability, regulatory compliance, and operational flexibility.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    1. Wholly Owned Subsidiary (WOS)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A WOS is a company incorporated in India where 100% shares are held by the foreign parent company.
                    This is the most straightforward structure for international companies and offers maximum operational
                    control.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Advantages:</p>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Full operational and strategic control</li>
                      <li>Access to all sectors (subject to FDI limits)</li>
                      <li>Easier fund repatriation (subject to RBI guidelines)</li>
                      <li>Clearer governance structure for international standards</li>
                      <li>Limited liability protection for parent company</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Considerations:</p>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Higher compliance and audit requirements</li>
                      <li>Transfer pricing regulations apply</li>
                      <li>Mandatory statutory compliance (DIN, DSC holders)</li>
                      <li>Board composition requirements</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    2. Joint Venture (JV)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A JV involves partnership with Indian entities (companies, individuals, or trusts). Foreign partners
                    can hold 26-99% equity depending on sector regulations.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Strategic Benefits:</p>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Faster market access and local relationships</li>
                      <li>Knowledge of regulatory landscape and distribution networks</li>
                      <li>Shared capital and operational costs</li>
                      <li>Access to local talent and supply chains</li>
                      <li>Reduced market-entry risk through local expertise</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    3. Limited Liability Partnership (LLP)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    LLPs are hybrid entities combining limited liability of companies with partnership flexibility. They
                    are increasingly popular for professional services, consulting, and tech startups.
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Ideal for:</strong> Consulting firms, professional services, tech startups, and service-based
                      businesses
                    </p>
                    <p>
                      <strong>Key features:</strong> Lower compliance burden, flexible profit-sharing, pass-through taxation
                      for Indian tax purposes, simplified accounting
                    </p>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    4. Branch Office or Representative Office
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A branch office is an extension of the foreign parent company, not a separate legal entity. It's
                    suitable for liaison, research, or servicing parent company activities.
                  </p>
                  <div className="mt-4 bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Limitation:</strong> Branch offices cannot undertake independent business activities or generate
                      revenue in India. They are restricted to support functions only.
                    </p>
                  </div>
                </section>

                {/* Regulatory Framework Section */}
                <section id="regulatory-framework" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Regulatory Framework & Key Bodies
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding India's regulatory landscape is critical. Multiple agencies oversee different aspects of
                    business operations, each with distinct requirements and timelines.
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-brand-400 p-6 bg-slate-50 rounded">
                      <h3 className="font-semibold text-midnight-900 mb-3">
                        <i className="ri-building-line mr-2 text-brand-400" />
                        Ministry of Corporate Affairs (MCA)
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Governs company incorporation, director identification (DIN), and company compliance
                      </p>
                      <p className="text-sm text-gray-600">
                        Timeline: DIN issuance (2-3 days), Company incorporation (5-7 days)
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 p-6 bg-slate-50 rounded">
                      <h3 className="font-semibold text-midnight-900 mb-3">
                        <i className="ri-shield-line mr-2 text-blue-500" />
                        Reserve Bank of India (RBI)
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Regulates foreign exchange management, repatriation, and banking sector regulations
                      </p>
                      <p className="text-sm text-gray-600">
                        Key regulation: Foreign Exchange Management Act (FEMA), 1999
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 p-6 bg-slate-50 rounded">
                      <h3 className="font-semibold text-midnight-900 mb-3">
                        <i className="ri-file-list-line mr-2 text-green-500" />
                        Goods & Services Tax (GST) Authority
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Handles registration, compliance, and tax collection for indirect taxation
                      </p>
                      <p className="text-sm text-gray-600">
                        Timeline: GST registration (5-7 days post-incorporation). Tax rates: 0%, 5%, 12%, 18%, 28%
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 p-6 bg-slate-50 rounded">
                      <h3 className="font-semibold text-midnight-900 mb-3">
                        <i className="ri-government-line mr-2 text-purple-500" />
                        Department for Promotion of Industry & Internal Trade (DPIIT)
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Approves foreign investment above certain thresholds via Foreign Investment Promotion Board (FIPB)
                      </p>
                      <p className="text-sm text-gray-600">
                        Sectors requiring approval: Defense, multi-brand retail, insurance (beyond 49%), telecom
                      </p>
                    </div>

                    <div className="border-l-4 border-orange-500 p-6 bg-slate-50 rounded">
                      <h3 className="font-semibold text-midnight-900 mb-3">
                        <i className="ri-line-chart-line mr-2 text-orange-500" />
                        Securities & Exchange Board of India (SEBI)
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Regulates capital markets, IPO procedures, and foreign portfolio investment
                      </p>
                      <p className="text-sm text-gray-600">
                        Relevant for companies planning capital raises or public listings
                      </p>
                    </div>
                  </div>
                </section>

                {/* Sector Focus Section */}
                <section id="sector-focus" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Sector-Specific Roadmap by City
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    India's geography creates natural clusters for different industries. Your location choice impacts
                    talent access, regulatory environment, and operational efficiency.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Mumbai (Financial Services & Trading)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>India's financial capital</strong> hosts BSE, NSE, and NSEL. Banks, insurance, trading firms,
                    and fintech companies concentrate here. Gateway city for international businesses entering India.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Industry Strengths:</p>
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                      <li>✓ Financial services (banking, insurance, securities)</li>
                      <li>✓ Trading & commodities</li>
                      <li>✓ Private equity & venture capital</li>
                      <li>✓ Media & entertainment</li>
                      <li>✓ Import/export operations</li>
                      <li>✓ Logistics hubs</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Bangalore (Technology & Startups)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Silicon Valley of India</strong> hosts 1,800+ tech companies including global majors (Google,
                    Amazon, Microsoft, Cisco). Largest tech talent concentration globally. Ideal for software development,
                    R&D, and digital innovation.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Industry Strengths:</p>
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                      <li>✓ Software development & services (IT-ITeS)</li>
                      <li>✓ Product engineering & startups</li>
                      <li>✓ AI/ML research centers</li>
                      <li>✓ Digital platforms</li>
                      <li>✓ Cloud & cybersecurity</li>
                      <li>✓ EdTech & FinTech</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Hyderabad (Pharmaceuticals & IT Services)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Global pharma and biotech hub</strong> with 1,500+ pharma companies producing 50% of India's
                    generic drugs. HITECH City concentrates IT and business process outsourcing. Emerging biotech
                    innovation center.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Industry Strengths:</p>
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                      <li>✓ Pharmaceuticals & generics</li>
                      <li>✓ Biotech & clinical research</li>
                      <li>✓ Business process outsourcing</li>
                      <li>✓ IT services</li>
                      <li>✓ Life sciences R&D</li>
                      <li>✓ Medical devices</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Gurugram (FMCG, Consumer Goods & Retail)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>FMCG and retail headquarters</strong> of India with 500+ multinational regional offices.
                    Proximity to Delhi (national capital) and NCR region (largest consumer base). Hub for consumer research,
                    sales operations, and distribution management.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Industry Strengths:</p>
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                      <li>✓ FMCG & consumer goods</li>
                      <li>✓ Retail & e-commerce operations</li>
                      <li>✓ Sales & marketing hubs</li>
                      <li>✓ Distribution networks</li>
                      <li>✓ Corporate headquarters</li>
                      <li>✓ Real estate & construction</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Chennai (Manufacturing & Automotive)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>India's manufacturing hub</strong> with major automotive OEMs (Hyundai, Ford, BMW, Ford),
                    auto component manufacturers, and heavy equipment producers. Strong logistics and port connectivity.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Industry Strengths:</p>
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                      <li>✓ Automotive manufacturing</li>
                      <li>✓ Auto components & ancillaries</li>
                      <li>✓ Heavy engineering</li>
                      <li>✓ Textile & apparel</li>
                      <li>✓ Petrochemicals</li>
                      <li>✓ Port-based logistics</li>
                    </ul>
                  </div>
                </section>

                {/* Talent Landscape Section */}
                <section id="talent-landscape" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    India's Talent Landscape & Market Entry Implications
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    India's workforce presents unique advantages and challenges. Understanding the talent market is crucial
                    for building an effective team during market entry.
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Talent Pool Characteristics
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-4">
                      <span className="text-brand-400 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Scale & Education:</strong> 5+ million software developers, 3+ million engineering graduates
                        annually, premium talent from IIT/IIM with global recognition
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-brand-400 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Cost Advantage:</strong> Senior engineering talent costs 30-50% less than US/Western Europe,
                        enabling larger teams with same budgets
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-brand-400 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Notice Periods:</strong> 30-90 days typical (vs. 2 weeks in Western markets); counter-offer
                        risk is 30-50% higher
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-brand-400 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>English Proficiency:</strong> 80%+ of corporate talent is fluent in English; no language
                        barrier for MNC operations
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-brand-400 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Attrition Rates:</strong> 15-25% annually in IT/tech (higher than global average of 10-12%);
                        retention strategies essential
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Recruitment Timeline for Market Entry
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For a complete entry team (Country Head, CFO, HR Head, Sales Head, operations):
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Executive search (Country Head, CFO):</strong> 8-12 weeks (high-touch, global search networks)
                    </p>
                    <p>
                      <strong>Mid-management roles (Sales Head, HR Head):</strong> 6-8 weeks (direct sourcing, recruiter networks)
                    </p>
                    <p>
                      <strong>Operational team:</strong> 4-6 weeks (local recruitment, high supply)
                    </p>
                    <p>
                      <strong>Total: Plan for 3-4 months concurrent recruitment</strong> starting simultaneously across levels
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

                {/* Timeline Section */}
                <section id="timeline" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    6-Month Market Entry Roadmap
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A realistic timeline for market entry in India typically spans 6 months from planning to operational
                    launch:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        month: 'Month 1 (Weeks 1-4)',
                        tasks: [
                          'Legal structure finalization & entity registration',
                          'RBI approval for foreign investment (if required)',
                          'Company incorporation with MCA',
                          'PAN & GST registration initiation',
                          'Bank account opening process started',
                          'Concurrent: Executive search begins (Country Head/CFO)',
                        ],
                      },
                      {
                        month: 'Month 2-3 (Weeks 5-12)',
                        tasks: [
                          'GST registration completion',
                          'Bank account setup & fund transfers',
                          'Office space acquisition & setup',
                          'Payroll & compliance infrastructure setup',
                          'Key hires: Country Head, CFO, HR Head',
                          'Government registrations: Labour/ESI/PF clearances',
                          'Insurance & benefits enrollment',
                        ],
                      },
                      {
                        month: 'Month 4 (Weeks 13-16)',
                        tasks: [
                          'Operations team recruitment (5-10 initial staff)',
                          'Compliance audit & readiness review',
                          'Customer acquisition strategy finalization',
                          'Partner/distributor identification (if B2B)',
                          'Marketing & brand launch preparation',
                        ],
                      },
                      {
                        month: 'Month 5-6 (Weeks 17-26)',
                        tasks: [
                          'Full operational team in place',
                          'Soft launch with beta customers/partners',
                          'Process optimization & compliance validation',
                          'Public launch & market activation',
                          'Post-launch monitoring & adjustments',
                        ],
                      },
                    ].map((phase, idx) => (
                      <div key={idx} className="border-l-4 border-brand-400 p-6 bg-slate-50 rounded">
                        <h3 className="font-semibold text-midnight-900 mb-3 text-lg">{phase.month}</h3>
                        <ul className="space-y-2 text-gray-700">
                          {phase.tasks.map((task, taskIdx) => (
                            <li key={taskIdx} className="flex gap-3">
                              <i className="ri-check-line text-brand-400 font-bold flex-shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Pro Tip:</strong> These timelines assume no external delays. Sector-specific approvals (FIPB,
                      SEBI) can add 2-4 weeks. Start regulatory processes parallel to operations planning for efficiency.
                      Engage ATHENA MEA early to streamline entity selection and compliance from day one.
                    </p>
                  </div>
                </section>
              </article>

              {/* Sidebar - Table of Contents */}
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

                  {/* Article Metadata */}
                  <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>12 min read</span>
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

        {/* Tags & Categories */}
        <section className="bg-slate-50 py-8 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-semibold text-gray-600">Tags:</span>
              {['India Market Entry', 'Regulatory Compliance', 'Business Setup', 'Entity Structure', 'FDI'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-400 hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
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
              Ready to Enter India Successfully?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our market entry experts have guided 200+ companies through India's regulatory landscape. Get a personalized
              playbook for your expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-midnight-900 hover:shadow-lg transition-shadow">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Entry Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
