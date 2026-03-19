'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ChevronRight, Share2, Bookmark, Clock, User, Eye } from 'lucide-react';

export default function TopMistakesEnteringIndianMarket() {
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
    { id: 'mistake-1', title: '#1: Wrong Entity Structure', icon: 'ri-building-line' },
    { id: 'mistake-2', title: '#2: One-Size-Fits-All Strategy', icon: 'ri-layout-line' },
    { id: 'mistake-3', title: '#3: Underestimating Compliance', icon: 'ri-shield-line' },
    { id: 'mistake-4', title: '#4: Wrong First Hire', icon: 'ri-user-line' },
    { id: 'mistake-5', title: '#5: Ignoring State-Level Differences', icon: 'ri-map-line' },
    { id: 'mistake-6', title: '#6: Mispricing for India', icon: 'ri-money-line' },
    { id: 'mistake-7', title: '#7: No Local Partners', icon: 'ri-handshake-line' },
    { id: 'mistake-8', title: '#8: Underinvesting in Brand', icon: 'ri-star-line' },
    { id: 'mistake-9', title: '#9: Unrealistic Timelines', icon: 'ri-time-line' },
    { id: 'mistake-10', title: '#10: Going It Alone', icon: 'ri-team-line' },
    { id: 'conclusion', title: 'Conclusion', icon: 'ri-check-double-line' },
  ];

  const relatedArticles = [
    {
      title: '5 Regulatory Pitfalls Foreign Companies Face When Entering India in 2026',
      slug: 'regulatory-pitfalls-india-2026',
      category: 'Compliance',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80',
    },
    {
      title: 'India Market Entry Guide 2025',
      slug: 'india-market-entry-guide-2025',
      category: 'Market Entry',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&q=80',
    },
    {
      title: 'Executive Search vs Recruitment for India & Middle East',
      slug: 'executive-search-vs-recruitment-india-middle-east',
      category: 'Leadership',
      readTime: '14 min',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80',
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1600&q=80)',
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
              <span className="text-brand-400">Top 10 Market Entry Mistakes</span>
            </nav>

            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Top 10 Mistakes Companies Make When Entering the Indian Market
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Lessons from 200+ Market Entry Projects — And How to Avoid Them
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Bhavishya Sharma</span>
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
                    Introduction: Why 60% of India Market Entries Underperform
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India is the world&apos;s fastest-growing major economy, projected to become the third-largest by 2028.
                    Every global company has India on its expansion roadmap. Yet research consistently shows that 60% of
                    foreign market entries into India fail to meet their first-year revenue targets, and 25% exit within
                    three years.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The reasons are not mysterious. At ATHENA MEA, having advised over 200 international companies on
                    India market entry, we see the same mistakes repeated across industries, company sizes, and geographies.
                    These are not strategic blunders — they are practical, avoidable errors that stem from applying
                    assumptions from other markets to India&apos;s unique business environment.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This guide documents the 10 most common and costly mistakes, drawn from real client engagements,
                    with specific guidance on how to avoid each one.
                  </p>
                </section>

                <section id="mistake-1" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #1: Choosing the Wrong Entity Structure
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: 6-12 months delay + $50,000-200,000 in restructuring</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India offers multiple entity structures for foreign companies: Wholly Owned Subsidiary (WOS), Joint Venture (JV),
                    Liaison Office (LO), Branch Office (BO), and Project Office. Each has fundamentally different tax implications,
                    operational permissions, and compliance obligations. Many companies default to the wrong structure based on
                    advice from their home-country lawyers who lack India-specific expertise.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Common error:</strong> A European SaaS company set up a Liaison Office to &quot;test the market,&quot;
                    only to discover that LOs cannot generate revenue in India. They spent 8 months converting to a WOS,
                    losing their first-mover advantage while competitors established direct sales operations.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Engage an India market entry advisor before entity selection. The right structure depends on your revenue model, FDI sector classification, transfer pricing strategy, and growth timeline. ATHENA MEA provides entity structuring advisory as part of our market entry service.</p>
                  </div>
                </section>

                <section id="mistake-2" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #2: Treating India as One Market
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: 40-60% lower market penetration in first 2 years</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India is not a single market — it is 28 states and 8 union territories, each with different languages,
                    consumer preferences, regulatory environments, and business cultures. Mumbai operates differently from
                    Bangalore. Delhi-NCR is a different ecosystem from Chennai. A go-to-market strategy designed for
                    &quot;India&quot; will underperform in every region.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Common error:</strong> An American consumer goods company launched nationally with English-language
                    packaging and Mumbai pricing. They achieved strong sales in Tier 1 cities but zero traction in Tier 2/3
                    markets, which represent 65% of India&apos;s consumer spending.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Start with 1-2 beachhead cities aligned to your industry. Technology companies typically start in Bangalore or Hyderabad. Manufacturing in Gujarat or Tamil Nadu. FMCG in Mumbai or Delhi-NCR. Build regional playbooks before national expansion.</p>
                  </div>
                </section>

                <section id="mistake-3" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #3: Underestimating Compliance Complexity
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: Penalties up to 3x violation amount + criminal liability for directors</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India has one of the most complex regulatory environments in the world. A single company must comply with
                    the Companies Act, FEMA, GST (4 different rates), state-level labor laws (varying by state), professional
                    tax, provident fund, ESIC, shops and establishment acts, and sector-specific regulations. Total compliance
                    touchpoints for a mid-size operation: 200+ per year.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Common error:</strong> A UK consulting firm operated for 14 months without FEMA-compliant pricing
                    for their cross-border services. They faced a penalty notice of INR 4.2 crore (~$500,000) and their
                    directors were personally liable. Resolution took 9 months and $180,000 in legal fees.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Budget for compliance infrastructure from day one. Hire a qualified Company Secretary, engage a GST consultant, and set up FEMA-compliant banking. ATHENA MEA&apos;s market entry advisory includes a compliance checklist covering all 200+ annual touchpoints.</p>
                  </div>
                </section>

                <section id="mistake-4" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #4: Hiring the Wrong First Leader
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: $850,000+ (re-hiring + 12-18 months lost momentum)</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your first hire — typically a Country Manager or Managing Director — sets the culture, builds the team,
                    and determines whether your market entry gains traction. Many companies use their global recruitment
                    agency or hire through LinkedIn, treating this critical appointment like a regular hire.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Common error:</strong> A German industrial company hired a well-credentialed VP from a large Indian
                    conglomerate. He had impressive experience but zero startup mentality. He built a 40-person team and
                    $3M overhead before generating a single dollar of revenue. He was replaced at month 14, and the
                    company wrote off $4.8M in first-year India investment.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Use a specialized executive search firm with market entry experience. Your first leader needs entrepreneurial drive, local market knowledge, AND the ability to operate within your corporate culture. ATHENA MEA&apos;s talent discovery service maps the full market of potential candidates and assesses cross-cultural fit.</p>
                  </div>
                </section>

                <section id="mistake-5" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #5: Ignoring State-Level Regulatory Differences
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: $100,000-500,000 in fines + operational disruption</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While GST unified indirect taxation, labor laws, shop and establishment acts, professional tax, and
                    industry-specific regulations still vary dramatically by state. Karnataka has different labor compliance
                    requirements than Maharashtra. Tamil Nadu&apos;s factory regulations differ from Gujarat&apos;s.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Common error:</strong> A US technology company set up employment contracts based on Delhi labor
                    law for their Bangalore team. Karnataka&apos;s Shops and Commercial Establishments Act has different
                    working hours, leave policies, and overtime rules. They faced an inspection penalty and had to rewrite
                    all 85 employment contracts.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Work with advisors who have state-level expertise. Ensure your employment contracts, policies, and compliance procedures are customized for each state where you operate.</p>
                  </div>
                </section>

                <section id="mistake-6" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #6: Mispricing Products and Services
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: 50-80% lower conversion rates vs. properly priced competitors</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India is a price-sensitive market, but it is NOT a low-value market. The mistake is not just overpricing
                    — it is applying global pricing without understanding India&apos;s value perception, competitive pricing
                    landscape, and willingness-to-pay segments.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Common error:</strong> A European SaaS company launched in India with their US pricing
                    ($99/month/user). Indian competitors charged $15-25/month/user. They reduced to $49 — still too
                    high. Eventually they created an India-specific tier at $19/month with 80% of features, which
                    achieved product-market fit. They lost 18 months of growth to pricing iteration.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Conduct competitive pricing analysis before launch. Create India-specific pricing tiers. Consider PPP (purchasing power parity) adjustments. Our competitive intelligence service provides detailed pricing benchmarks across your industry in India.</p>
                  </div>
                </section>

                <section id="mistake-7" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #7: Not Building Local Partnerships
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: 2-3x longer sales cycles, 40% lower win rates on deals</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India is a relationship-driven market. Cold outreach and digital marketing alone will not build a
                    pipeline. Introductions from trusted local partners, industry bodies (CII, FICCI, NASSCOM), and
                    advisory firms accelerate customer acquisition dramatically.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Common error:</strong> A French engineering firm invested $1.2M in digital marketing and an
                    inside sales team. After 12 months, they had 3 qualified leads. They then hired an industry-connected
                    Country Manager (through ATHENA MEA) who generated 22 qualified leads in his first 90 days through
                    his existing network.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Identify and cultivate local partnerships before operational launch. Channel partners, distribution agreements, and industry association memberships are force multipliers. ATHENA MEA&apos;s strategic consulting includes partner identification and facilitation.</p>
                  </div>
                </section>

                <section id="mistake-8" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #8: Underinvesting in Local Brand Building
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: Invisible brand in a market with 10,000+ competitors per category</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Global brand recognition does not automatically transfer to India. Indian buyers research extensively,
                    rely on peer recommendations, and favor brands with visible local presence. A global Fortune 500
                    reputation helps at the enterprise level but means little in mid-market and SMB segments.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Allocate 15-20% of first-year India budget to local brand building: industry events, thought leadership content in Indian publications, case studies with India clients, LinkedIn presence with India-focused content, and PR in local business media.</p>
                  </div>
                </section>

                <section id="mistake-9" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #9: Unrealistic Revenue Timelines
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: Premature exit when patience would have yielded returns</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Many companies set aggressive 12-month revenue targets for India based on their experience in developed
                    markets. India&apos;s sales cycles are 30-50% longer than the US/Europe, particularly for enterprise
                    sales. The Indian financial year (April-March) affects budget timing. Decision-making involves more
                    stakeholders and relationship-building.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Realistic timeline:</strong> Plan for 6-9 months to first revenue for B2B services, 9-15 months
                    for enterprise software, and 3-6 months for consumer products with existing distribution. Budget for
                    18-24 months to breakeven.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Set 24-month milestones, not 12-month revenue targets. Measure leading indicators (pipeline growth, customer meetings, partnership agreements) in months 1-12, and revenue conversion in months 12-24.</p>
                  </div>
                </section>

                <section id="mistake-10" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-3xl font-bold text-midnight-900 mb-6 mt-12">
                    Mistake #10: Trying to Do Everything Internally
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded">
                    <p className="text-red-800 font-semibold">Cost of this mistake: 2-3x longer time-to-market + higher risk of critical errors</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The final and most pervasive mistake: attempting to navigate India market entry without local advisory
                    support. Companies send a global VP on quarterly trips, hire a junior local team, and expect to figure
                    out entity setup, compliance, hiring, and go-to-market internally. This works in markets similar to the
                    home market. India is not similar to any other market.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>The economics:</strong> A comprehensive market entry advisory engagement costs $50,000-150,000.
                    The average cost of a failed India market entry (entity restructuring, rehiring, compliance penalties,
                    lost revenue) is $1.5-3 million. Advisory fees represent 3-10% of the cost of failure.
                  </p>
                  <div className="bg-brand-400/10 border-l-4 border-brand-400 p-6 my-6 rounded">
                    <p className="text-midnight-900 font-semibold mb-2">How to avoid it:</p>
                    <p className="text-gray-700">Partner with a specialized India market entry advisory firm from the start. The right advisor pays for themselves many times over by preventing costly mistakes, accelerating timelines, and providing the on-the-ground intelligence that remote management cannot.</p>
                  </div>
                </section>

                <section id="conclusion" className="scroll-mt-32 mb-12">
                  <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6 mt-12">
                    Conclusion: Learn from Others&apos; Mistakes
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India&apos;s $3.7 trillion economy offers extraordinary opportunities for global companies. The path to
                    capturing those opportunities is well-understood — but it requires respecting the complexity of the
                    market, investing in local expertise, and planning with realistic timelines.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Every one of these 10 mistakes is avoidable. Companies that invest in proper market assessment,
                    hire the right first leader, build compliant operations, and partner with experienced local advisors
                    consistently outperform those that take shortcuts.
                  </p>

                  <div className="bg-midnight-900 text-white p-8 rounded-lg my-8">
                    <h3 className="font-display text-2xl font-bold mb-4">Planning Your India Market Entry?</h3>
                    <p className="text-white/80 mb-6">
                      ATHENA MEA has guided 200+ companies through India market entry. From entity structuring to executive
                      search to operational setup, we provide the end-to-end advisory that prevents these costly mistakes.
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
                    <h3 className="font-display text-lg font-bold mb-3">Avoid These Mistakes</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Get expert guidance from a team that has seen every market entry scenario. 200+ projects across 12 industries.
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
