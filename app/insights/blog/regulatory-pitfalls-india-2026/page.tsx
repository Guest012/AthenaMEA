'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function RegulatoryPitfallsIndia2026() {
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
    { id: 'fdi-restrictions', title: 'FDI Restrictions', icon: 'ri-shield-line' },
    { id: 'fema-compliance', title: 'FEMA Compliance', icon: 'ri-government-line' },
    { id: 'state-level-rules', title: 'State-Level Rules', icon: 'ri-map-pin-line' },
    { id: 'gst-complexity', title: 'GST Complexity', icon: 'ri-calculator-line' },
    { id: 'data-protection', title: 'Data Protection', icon: 'ri-lock-line' },
    { id: 'conclusion', title: 'Conclusion', icon: 'ri-check-double-line' },
  ];

  const relatedArticles = [
    {
      title: 'UAE Free Zone vs Mainland: Which Is Right for Your Business in 2025?',
      slug: 'uae-free-zone-vs-mainland',
      category: 'Business Setup',
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80)',
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
              <span className="text-brand-400">Regulatory Pitfalls India 2026</span>
            </nav>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              5 Regulatory Pitfalls Foreign Companies Face When Entering India in 2026
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              How to Avoid Costly Mistakes and Regulatory Setbacks
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Bhavishya Sharma</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Published Mar 18, 2026</span>
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
                    Introduction: India's Regulatory Complexity
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India's economy is projected to reach $7.1 trillion by 2030, making it one of the world's most attractive
                    markets for foreign direct investment. However, the regulatory landscape that governs foreign entry has become
                    increasingly complex and stringent since 2022. What appears straightforward on the surface—registering a company,
                    hiring employees, collecting taxes—masks a labyrinth of sector-specific restrictions, state-level variations,
                    and compliance requirements that catch foreign enterprises off guard every day.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    At ATHENA MEA, we have advised over 150 international enterprises navigating India's regulatory environment.
                    In our experience, the difference between a smooth market entry and a costly regulatory entanglement comes down
                    to understanding five critical pitfalls that most companies encounter but few anticipate.
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Why This Matters</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Foreign entities face 4-6 month approval delays due to FDI classification issues</li>
                      <li>✓ FEMA violations carry penalties of up to 3x the contravention amount plus imprisonment</li>
                      <li>✓ State-level labor law variations create compliance blind spots for national strategies</li>
                      <li>✓ GST misclassification can trigger 10% penalties plus 18% interest assessments</li>
                      <li>✓ Data protection violations under DPDPA 2023 can result in up to ₹250 crore fines</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Each of these pitfalls requires proactive planning, sector-specific expertise, and state-level intelligence.
                    This guide walks you through all five—explaining the problem, translating regulatory jargon into practical
                    impact, and providing actionable advice to protect your market entry investment.
                  </p>
                </section>

                {/* FDI Restrictions Section */}
                <section id="fdi-restrictions" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Pitfall #1: FDI Approval Timelines and Sector Restrictions
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The Problem
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Foreign Direct Investment (FDI) in India is regulated through a complex sectoral classification system.
                    While India's stated policy is to attract foreign investment, certain sectors face outright prohibitions,
                    percentage caps, or automatic approval requirements that create unexpected delays. Many foreign companies
                    assume they can establish operations immediately—only to discover their sector is restricted or requires
                    special approval from the Department for Promotion of Industry and Internal Trade (DPIIT).
                  </p>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">Restricted and Prohibited Sectors (2026)</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span> <span><strong>Retail Trade:</strong> 100% FDI prohibited (with single-brand exceptions)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span> <span><strong>Aviation Sector:</strong> Limited to 49% FDI (beyond which requires government approval)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 font-bold">✗</span> <span><strong>Atomic Energy:</strong> 100% FDI prohibited</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-500 font-bold">⚠</span> <span><strong>Telecom:</strong> Limited to 26% FDI for infrastructure</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-500 font-bold">⚠</span> <span><strong>Insurance:</strong> Limited to 49% FDI</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-500 font-bold">⚠</span> <span><strong>Multi-Brand Retail:</strong> Limited to 74% FDI (requires 30% domestic sourcing)</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Even if your sector is not explicitly prohibited, FDI classifications require formal review and approval from DPIIT.
                    This process routinely takes 4-6 weeks, during which your business operations cannot commence. Delays multiply if
                    your business model doesn't fit standard classifications or if you're in a sensitive sector (defense, telecom, media).
                  </p>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Actionable Advice
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">1.</span>
                        <span><strong>Conduct FDI Sector Classification Review Early:</strong> Before incorporating your entity, engage a regulatory advisor to confirm that your sector and business structure qualify for FDI. This is not a DIY exercise—misclassification will stall your setup by months.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">2.</span>
                        <span><strong>Budget 4-6 Weeks for FDI Approval:</strong> Factor this timeline into your market entry plan. Do not assume you can commence operations immediately after company registration.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">3.</span>
                        <span><strong>Document Your Investment Source:</strong> FDI approvals require proof that funds originate from a foreign entity and are being invested in a new Indian entity (or expanding existing operations). Commingled funds or unclear investment structures trigger scrutiny.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">4.</span>
                        <span><strong>For Restricted Sectors:</strong> If your sector faces percentage caps (insurance, telecom, retail), structure your shareholder agreement to comply with limits. Some companies use tiered subsidiary structures to work within FDI percentage ceilings.</span>
                      </li>
                    </ol>
                  </div>
                </section>

                {/* FEMA Compliance Section */}
                <section id="fema-compliance" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Pitfall #2: FEMA Compliance and Repatriation
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The Problem
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Foreign Exchange Management Act (FEMA), administered by India's Reserve Bank (RBI), governs all cross-border
                    financial flows. What makes FEMA compliance especially dangerous for foreign companies is the severity of penalties
                    for violations: fines up to three times the contravention amount plus up to seven years imprisonment for responsible
                    officers. These are not administrative penalties—they are criminal charges.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Common FEMA violations include: transferring funds through incorrect channels, repatriating profits without proper
                    RBI documentation, failing to file mandatory forex transaction reports, or moving funds between affiliated entities
                    without following External Commercial Borrowing (ECB) or Liberalized Remittance Scheme (LRS) protocols. Foreign
                    companies often assume international wire transfers are straightforward—they are not. Every rupee in and out of
                    India must be documented through an Authorized Dealer (AD) bank and reported to the RBI.
                  </p>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">FEMA Violation Penalties (2026)</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monetary penalty: Up to 3x the contravention value (civil penalty)</li>
                      <li>• Criminal penalty: Up to 7 years imprisonment + fine (for willful violations)</li>
                      <li>• Company liability: Entity can be held responsible for officer violations</li>
                      <li>• No statute of limitations: RBI can investigate violations years after they occur</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Actionable Advice
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">1.</span>
                        <span><strong>Route All Forex Through an Authorized Dealer Bank:</strong> Do not move funds directly between your foreign parent and Indian subsidiary. All foreign exchange transactions must flow through an RBI-approved Authorized Dealer (typically a major bank like ICICI, HDFC, Axis, etc.).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">2.</span>
                        <span><strong>Use ECB for Parent Company Loans:</strong> If your parent company is lending to the Indian subsidiary, structure it as an External Commercial Borrowing (ECB). This requires registration with the RBI and documentation of the loan terms. Do not make informal transfers.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">3.</span>
                        <span><strong>Document All Fund Flows:</strong> Keep records of every foreign exchange transaction: wire confirmations, AD bank certificates, RBI registration documents (if applicable). Audits can request proof of FEMA compliance up to 7 years after the transaction.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">4.</span>
                        <span><strong>Report Repatriation on Tax Returns:</strong> Profit repatriation must be reported on your company's income tax return and supported by RBI documentation. Coordinate with your tax advisor to ensure Form 15CA (CA certificate for foreign remittance) is filed.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">5.</span>
                        <span><strong>Train Finance and Accounting Teams on FEMA Rules:</strong> Many violations occur because non-specialist staff process forex transactions without understanding RBI requirements. Conduct quarterly training with your finance team.</span>
                      </li>
                    </ol>
                  </div>
                </section>

                {/* State-Level Compliance Section */}
                <section id="state-level-rules" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Pitfall #3: State-Level Compliance Variations
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The Problem
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    India operates under a three-tier federal system: Union (central government), state, and municipal authorities.
                    While central laws like the Companies Act and labor codes provide a baseline, labor laws, industrial regulations,
                    and environmental compliance requirements vary significantly by state. A hiring practice that is compliant in
                    Maharashtra may violate rules in Tamil Nadu. A factory setup that requires State Industry Department approval in
                    one state may need separate environmental clearance in another.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Foreign companies often establish national HR policies or operational standards based on central law, then discover
                    they are non-compliant in specific states where they operate. The consequences range from labor disputes and strikes
                    to factory shutdowns and penalties. Additionally, if you operate in multiple states, you face different regulatory
                    requirements for each, multiplying your compliance burden and cost.
                  </p>

                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">State-Specific Labor Law Examples (2026)</p>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <p className="font-semibold text-midnight-900">Maharashtra:</p>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                          <li>Mandatory profit-sharing for factory workers (certain sectors)</li>
                          <li>Stricter industrial worker classification rules</li>
                          <li>Gratuity obligations more stringent than central law</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-midnight-900">Tamil Nadu:</p>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                          <li>Apprenticeship mandates for manufacturing (higher percentage than central rules)</li>
                          <li>Stricter compliance with state-level industrial policies</li>
                          <li>Labor department inspections more frequent</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-midnight-900">Kerala:</p>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                          <li>Strong union protections and collective bargaining requirements</li>
                          <li>Higher minimum wages than national floor</li>
                          <li>More stringent safety and working condition standards</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Actionable Advice
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">1.</span>
                        <span><strong>Conduct State-Specific Compliance Audits:</strong> Before hiring or commencing operations in a new state, engage a local regulatory or HR advisor to audit state-level labor laws, industrial regulations, and environmental requirements. This is non-negotiable.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">2.</span>
                        <span><strong>Create State-Customized HR Policies:</strong> Develop separate HR policy annexes for each state where you operate. Do not assume a national policy is sufficient. State-specific requirements must be explicitly addressed.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">3.</span>
                        <span><strong>Establish State-Level Compliance Tracking:</strong> Designate compliance owners for each state. Track regulatory changes, renewal dates for licenses, and labor law amendments specific to each state.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">4.</span>
                        <span><strong>Budget for Multiple Compliance Audits:</strong> If you operate in 3+ states, budget for separate annual compliance audits per state. Consolidated audits often miss state-specific variations.</span>
                      </li>
                    </ol>
                  </div>
                </section>

                {/* GST Complexity Section */}
                <section id="gst-complexity" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Pitfall #4: GST Complexity and Misclassification
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The Problem
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    India's Goods and Services Tax (GST) is a consumption tax that replaced 17 previous taxes. On the surface, it appears
                    simple: rates range from 0% to 28%, and you file monthly or quarterly returns. In practice, GST is a classification
                    nightmare. The same product or service can be taxed at 5%, 12%, 18%, or 28% depending on subtle differences in
                    category, supply type, or customer classification.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Foreign companies stumble particularly hard on GST because they:
                  </p>

                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Misclassify products or services during registration, leading to incorrect rate application</li>
                    <li>• Fail to register in states where they have taxable presence (even if no physical office)</li>
                    <li>• Overlook input tax credit eligibility, overpaying by treating non-eligible expenses as creditable</li>
                    <li>• Underestimate compliance burden: GST demands monthly/quarterly returns, reconciliation, and vendor documentation audits</li>
                  </ul>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">GST Penalties for Misclassification</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Penalty: 10% of tax due or ₹10,000 (whichever is higher)</li>
                      <li>• Interest: 18% per annum on unpaid tax amount</li>
                      <li>• Potential prosecution: For willful evasion, criminal charges possible</li>
                      <li>• Blockage of refunds: Misclassification triggers blocking of ITC (input tax credits)</li>
                    </ul>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Actionable Advice
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">1.</span>
                        <span><strong>Conduct a Detailed GST Classification Review:</strong> Before registration, work with a GST advisor to classify all products or services under the correct HSN (Harmonized System of Nomenclature) codes. Incorrect classification at registration is difficult and costly to correct later.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">2.</span>
                        <span><strong>Register in All States with Taxable Presence:</strong> Even if you have no physical office, if you supply goods or services in a state, you must register there. Taxable presence includes e-commerce sales, digital services, or contracts with local customers.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">3.</span>
                        <span><strong>Establish a Compliance Calendar:</strong> GST filings are monthly (GSTR-1, GSTR-3B) or quarterly (for certain taxpayers). Establish a non-negotiable compliance calendar with deadlines 3-5 days before due dates to account for system delays.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">4.</span>
                        <span><strong>Maintain Vendor Documentation:</strong> Keep detailed invoices and tax compliance proof for all vendors from whom you claim input tax credits (ITC). Audits routinely disallow ITC for non-documented or non-compliant vendor supplies.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">5.</span>
                        <span><strong>Build an ITC Tracking System:</strong> Input tax credit is precious—improper claims trigger refund denials and penalties. Implement a systematic ITC tracking process, reconciling monthly ITC claims to actual vendor invoices.</span>
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Data Protection Section */}
                <section id="data-protection" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Pitfall #5: Data Protection (DPDPA 2023) and Sector-Specific Regulations
                  </h2>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    The Problem
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    India's Digital Personal Data Protection Act (DPDPA), which became effective in August 2024, introduced the country's
                    first comprehensive data privacy law. Unlike predecessor frameworks (IT Act Section 72, various RBI guidelines), DPDPA
                    applies broadly across sectors and creates strict obligations for companies handling personal data of Indian residents.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The challenge for foreign companies: DPDPA compliance is mandatory but operates in parallel with sector-specific data
                    regulations. Financial services companies must comply with RBI guidelines on data localization. Telecom companies face
                    TRAI (Telecom Regulatory Authority of India) requirements. Insurance companies answer to IRDA. Health tech companies
                    must navigate Health Data Governance policies. Tech companies handling sensitive data face IT Act Section 69A surveillance
                    requirements.
                  </p>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                    <p className="font-semibold text-midnight-900 mb-3">DPDPA Key Compliance Requirements</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Appoint a Data Protection Officer (DPO) if you process personal data at scale</li>
                      <li>• Conduct Data Protection Impact Assessments (DPIA) for high-risk processing (automated decision-making, sensitive categories)</li>
                      <li>• Report data breaches to affected individuals within 72 hours</li>
                      <li>• Obtain explicit consent before processing personal data (with limited exceptions)</li>
                      <li>• Provide data deletion and portability rights to individuals on request</li>
                      <li>• Maintain detailed processing records and audit trails</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
                    <p className="font-semibold text-midnight-900 mb-3">Sector-Specific Regulations (Layered on Top of DPDPA)</p>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <p className="font-semibold text-midnight-900">Fintech & Banking:</p>
                        <p>RBI mandates data localization (all customer data must be stored in India). Cross-border data transfers require RBI approval.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-midnight-900">Telecom:</p>
                        <p>TRAI governs subscriber data. Telecom companies face stricter breach reporting (within 10 days) and must maintain government-accessible logs.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-midnight-900">Insurance:</p>
                        <p>IRDA requires data security certifications and audit trails for all policy data. Cross-border data transfer restrictions apply.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-midnight-900">Tech Companies & Surveillance:</p>
                        <p>IT Act Section 69A gives government power to block online content and demand user data for national security reasons. Companies must cooperate with these requests.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-midnight-900 mt-8 mb-4">
                    Actionable Advice
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">1.</span>
                        <span><strong>Conduct a Data Privacy Audit Before Operations Launch:</strong> Map all personal data you collect, process, and store. Identify data flows (especially cross-border). Assess compliance gaps against DPDPA and sector-specific rules. This audit is non-negotiable.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">2.</span>
                        <span><strong>Appoint a Data Protection Officer (DPO):</strong> If you process data at meaningful scale (employee, customer, or vendor data), appoint a DPO. This role can be internal (hire a dedicated officer) or external (engage a compliance consultancy). DPO must be independent and report to senior management.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">3.</span>
                        <span><strong>Identify Sector-Specific Obligations:</strong> Beyond DPDPA, determine which sector regulations apply (RBI for fintech, TRAI for telecom, IRDA for insurance, etc.). Compliance is cumulative—sector rules layer on top of DPDPA.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">4.</span>
                        <span><strong>Establish Data Localization Strategy:</strong> For regulated sectors (fintech, telecom, insurance), assume data localization is mandatory. Plan your data infrastructure (servers, databases) in India, not in regional cloud centers.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">5.</span>
                        <span><strong>Implement Breach Reporting Protocols:</strong> DPDPA requires 72-hour breach notification. Establish a crisis protocol: data incident detection → immediate notification to DPO → legal assessment → notification to affected individuals within 72 hours. Document everything.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold min-w-fit">6.</span>
                        <span><strong>Update Vendor Contracts:</strong> All vendors who handle personal data must be contractually bound to DPDPA compliance. Conduct vendor data security audits annually.</span>
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Conclusion: Prevention Over Remediation
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    India's regulatory environment rewards proactive, expert-led planning. The cost of prevention—hiring compliance advisors,
                    conducting audits, implementing proper systems—is a fraction of the cost of remediation. A single FEMA violation can
                    trigger an RBI investigation lasting years. A GST misclassification can result in blocked refunds and penalties. A
                    data breach can destroy customer trust and trigger government action.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Each of the five pitfalls outlined in this guide—FDI restrictions, FEMA compliance, state-level variations, GST
                    complexity, and data protection—requires specialized expertise. These are not areas where you can "figure it out as you go."
                    Foreign companies that successfully enter India do so with clear understanding of these requirements, expert guidance, and
                    documented compliance strategies for each area.
                  </p>

                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-8 rounded">
                    <p className="text-midnight-900 font-semibold mb-3">Key Takeaways</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ FDI approval timelines add 4-6 weeks to market entry—plan accordingly</li>
                      <li>✓ FEMA violations carry criminal penalties—every forex transaction must be documented</li>
                      <li>✓ State-level labor laws vary dramatically—develop state-specific compliance playbooks</li>
                      <li>✓ GST classification errors multiply: incorrect rates, disallowed credits, penalties—get it right at registration</li>
                      <li>✓ Data protection is now mandatory and sector-specific—conduct audits before operations launch</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    If you are planning to enter India or expand operations there, these five regulatory pitfalls should not be surprises—they
                    should be addressed through systematic due diligence, expert-led compliance audits, and documented strategies. At ATHENA MEA,
                    we have helped 150+ international enterprises navigate this exact regulatory landscape. We understand the nuances, timelines,
                    and sector-specific complexities that most advisors miss.
                  </p>

                  <p className="text-gray-700 leading-relaxed mt-6">
                    Your India market entry should not be a regulatory obstacle course. With proper planning, it can be smooth, efficient, and
                    compliant from day one.
                  </p>
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
                      <span>15 min read</span>
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
              {['India Compliance', 'Regulatory', 'FDI', 'FEMA', 'GST', 'Market Entry', 'Data Protection'].map((tag) => (
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
              Ready to Navigate India's Regulatory Landscape?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our India market specialists have guided 150+ international companies through FDI approval,
              FEMA compliance, state-level regulations, and data protection requirements. Let us help you
              avoid costly mistakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-midnight-900 hover:shadow-lg transition-shadow">
                Schedule India Compliance Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Regulatory Checklist
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '5 Regulatory Pitfalls Foreign Companies Face When Entering India in 2026',
            description:
              'Avoid costly mistakes when entering India. Learn about FDI restrictions, FEMA compliance, state-level regulations, GST complexity, and data protection laws that catch foreign companies off guard.',
            image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
            datePublished: '2026-03-18',
            dateModified: '2026-03-18',
            author: {
              '@type': 'Person',
              name: 'Bhavishya Sharma',
            },
            publisher: {
              '@type': 'Organization',
              name: 'ATHENA MEA',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.athenamea.com/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.athenamea.com/insights/regulatory-pitfalls-india-2026',
            },
          }),
        }}
      />
    </div>
  );
}
