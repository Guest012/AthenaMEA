'use client';

import React, { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  label: string;
  icon: string;
  description: string;
  image: string;
  accent: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    label: 'India Market Entry',
    icon: 'ri-india-line',
    description: 'Everything about setting up and scaling in India',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop&q=80',
    accent: 'from-amber-400 to-orange-500',
    items: [
      {
        id: 'in-1',
        question: 'What are the advantages of hiring a consulting firm for entering the Indian market?',
        answer: 'You get on-ground insights, vetted partner networks, regulatory guidance, faster GTM validation, and reduced execution risk—saving months of trial-and-error and hidden compliance costs. A consulting firm brings established relationships with local authorities, understanding of state-level nuances, and the ability to navigate India\'s complex bureaucratic landscape efficiently.',
      },
      {
        id: 'in-2',
        question: 'Which sectors do you primarily work with for India market entry?',
        answer: 'SaaS and enterprise tech, e-commerce enablement, healthcare and medtech, renewables, manufacturing support services, and consumer goods with omni-channel expansion goals. We also have deep experience in fintech, edtech, logistics, and professional services sectors that are seeing rapid growth in the Indian market.',
      },
      {
        id: 'in-3',
        question: 'How is market research conducted for the Indian business landscape?',
        answer: 'We combine secondary data with expert interviews, buyer persona mapping, competitor teardowns, pricing tests, and small pilot cohorts to validate demand and channels before scaling. Our research also includes regulatory landscape analysis, talent availability mapping, and infrastructure assessment across key cities and tier-2 markets.',
      },
      {
        id: 'in-4',
        question: 'What are the typical timelines for establishing operations in India?',
        answer: 'Company incorporation takes 2-4 weeks. Getting all licenses and registrations (GST, PAN, bank accounts, compliance registrations) typically takes 6-10 weeks. For a fully operational setup including office, team, and processes, expect 3-6 months from initiation to launch depending on complexity.',
      },
      {
        id: 'in-5',
        question: 'What are the most common legal structures for foreign companies entering India?',
        answer: 'The most common structures are: Wholly Owned Subsidiary (WOS) for full control, Joint Venture for shared risk and local partner access, Liaison Office for market research without revenue generation, Branch Office for limited operations, and Project Office for specific project-based work. The choice depends on your strategic goals, investment level, and operational needs.',
      },
      {
        id: 'in-6',
        question: 'Which Indian cities are best for setting up headquarters?',
        answer: 'Mumbai for finance and corporate presence, Bengaluru for tech and innovation, Delhi-NCR for government affairs and northern markets, Hyderabad for IT and pharma, Pune for manufacturing and engineering, and Chennai for automotive and heavy industries. We also help evaluate tier-2 cities like Ahmedabad, Jaipur, and Kochi for cost-effective expansion.',
      },
    ],
  },
  {
    label: 'UAE & MENA Entry',
    icon: 'ri-building-line',
    description: 'Setting up in the UAE and broader Middle East',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&q=80',
    accent: 'from-rose-400 to-pink-500',
    items: [
      {
        id: 'uae-1',
        question: 'What are the advantages of hiring a consulting firm for entering the MENA market?',
        answer: 'Localized strategy, introductions to key stakeholders, clarity on free zone vs. mainland options, cultural navigation, and help with licensing, visas, and banking to accelerate setup. The MENA region has unique business customs and relationship-driven decision-making that benefits greatly from local expertise.',
      },
      {
        id: 'uae-2',
        question: 'Which sectors are most attractive for foreign businesses in the UAE?',
        answer: 'Fintech, logistics, e-commerce, tourism & hospitality, professional services, clean energy, and AI-driven B2B solutions—supported by strong infrastructure and pro-business policies. The UAE\'s diversification strategy (beyond oil) creates opportunities in technology, healthcare, education, and sustainable development.',
      },
      {
        id: 'uae-3',
        question: 'How long does it take to establish a company in the UAE?',
        answer: 'Typically 1–3 weeks for standard free zone setups if documents are ready; more complex mainland or regulated activities can take 4–8 weeks depending on approvals. We handle trade license applications, visa processing, bank account setup, and office space procurement concurrently to compress timelines.',
      },
      {
        id: 'uae-4',
        question: 'What are the common business structures available for setting up in the UAE?',
        answer: 'Free Zone Company (100% foreign-owned), Mainland LLC, Branch Office, and Professional/Consultancy licenses; choice depends on target customers, visa needs, and regulatory scope. Each option has different implications for ownership, taxation, location flexibility, and client access.',
      },
      {
        id: 'uae-5',
        question: 'What is the difference between free zone and mainland company setup in the UAE?',
        answer: 'Free zones offer 100% foreign ownership, tax exemptions, and simplified setup, but restrict direct mainland trading. Mainland companies can trade freely across the UAE but traditionally required a local sponsor (though 100% foreign ownership is now allowed in many mainland activities). We help you evaluate both options based on your business model.',
      },
      {
        id: 'uae-6',
        question: 'What are the tax implications for businesses operating in the UAE?',
        answer: 'The UAE introduced a 9% corporate tax on profits exceeding AED 375,000 (effective June 2023). Free zone companies meeting qualifying conditions can still benefit from 0% rates. There\'s no personal income tax. VAT is 5% on most goods and services. We provide detailed tax planning guidance for optimal structuring.',
      },
    ],
  },
  {
    label: 'Talent & HR',
    icon: 'ri-team-line',
    description: 'Hiring, compliance, and workforce planning',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80',
    accent: 'from-teal-400 to-emerald-500',
    items: [
      {
        id: 'hr-1',
        question: 'How do you source senior leadership talent in India and the Middle East?',
        answer: 'Through our proprietary network of 10,000+ vetted professionals, executive referrals, industry-specific headhunting, and partnerships with local recruitment firms. We conduct thorough cultural fit assessments alongside technical evaluations to ensure leadership hires can navigate both global and local business environments.',
      },
      {
        id: 'hr-2',
        question: 'What is the average timeline for executive-level placements?',
        answer: 'Typically 4-8 weeks from brief to accepted offer for C-suite and VP-level roles. This includes 1 week for requirements alignment, 2-3 weeks for sourcing and shortlisting, and 1-2 weeks for interviews and offer negotiation. Our 30-day average fill time for senior roles is significantly faster than industry benchmarks.',
      },
      {
        id: 'hr-3',
        question: 'How do you ensure cultural fit when hiring across geographies?',
        answer: 'We use a proprietary cultural alignment framework that evaluates candidates across leadership style adaptability, communication preferences, decision-making approaches, and cross-cultural sensitivity. We also conduct reference checks specifically focused on the candidate\'s experience working across cultures.',
      },
      {
        id: 'hr-4',
        question: 'What HR compliance considerations should foreign companies be aware of?',
        answer: 'In India: labor laws vary by state, PF/ESI contributions are mandatory, gratuity and leave policies have legal minimums. In UAE: WPS (Wage Protection System) compliance, end-of-service gratuity rules, labor card requirements, and Emiratization quotas for certain industries. We provide comprehensive compliance audits and ongoing advisory.',
      },
      {
        id: 'hr-5',
        question: 'Do you help with compensation benchmarking for new markets?',
        answer: 'Yes, we provide detailed compensation benchmarking across roles, seniority levels, and industries for both India and Middle East markets. This includes base salary ranges, variable pay norms, benefits expectations, equity compensation structures, and total cost-to-company analysis to help you design competitive but sustainable packages.',
      },
    ],
  },
  {
    label: 'Working with ATHENA',
    icon: 'ri-handshake-line',
    description: 'Our process, pricing, and engagement models',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=80',
    accent: 'from-violet-400 to-purple-500',
    items: [
      {
        id: 'ath-1',
        question: 'How does a typical engagement with ATHENA begin?',
        answer: 'It starts with a no-obligation discovery call where we understand your goals, timelines, and constraints. We then provide a tailored proposal with scope, methodology, timeline, and investment. Once agreed, we kick off with a deep-dive workshop and assign a dedicated team lead for your project.',
      },
      {
        id: 'ath-2',
        question: 'What engagement models do you offer?',
        answer: 'We offer three models: Project-Based for defined scope and timeline, Retainer-Based for ongoing strategic guidance as you scale, and Hybrid combining project work with continuous advisory. Each model is flexible and can be adjusted as your needs evolve during the market entry journey.',
      },
      {
        id: 'ath-3',
        question: 'What industries have you worked with?',
        answer: 'Our portfolio spans technology (SaaS, AI/ML, cybersecurity), healthcare and life sciences, financial services, consumer goods, manufacturing, energy and renewables, professional services, and education. Each industry has unique market dynamics, and our sector-specific expertise ensures tailored, actionable strategies.',
      },
      {
        id: 'ath-4',
        question: 'How do you measure success?',
        answer: 'We define clear KPIs at project initiation aligned with your objectives—these may include time-to-market, cost savings vs. independent entry, talent acquisition metrics, compliance milestones, revenue ramp-up targets, and client satisfaction scores. Regular milestone reviews ensure we stay on track and course-correct proactively.',
      },
      {
        id: 'ath-5',
        question: 'Can you support companies that are already established but want to scale?',
        answer: 'Absolutely. Many of our clients engage us post-initial setup for scaling operations, expanding to new cities or countries within the region, optimizing compensation structures, building leadership teams, or conducting competitive intelligence. Our services are designed for every stage from entry to scale.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([categories[0].items[0].id]));
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => { revealRefs.current.forEach((el) => { if (el) observer.unobserve(el); }); };
  }, []);

  const addRef = (el: HTMLElement | null, index: number) => { revealRefs.current[index] = el; };

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Filter FAQs by search
  const allFaqs = categories.flatMap((c, ci) =>
    c.items.map((item) => ({ ...item, categoryIndex: ci, categoryLabel: c.label, accent: c.accent }))
  );
  const filteredFaqs = searchQuery.trim()
    ? allFaqs.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const totalFaqs = categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <main className="relative min-h-screen bg-white">
      {/* ── HERO BANNER ── */}
      <section className="relative py-32 overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-midnight-900/90 to-cyan-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-indigo-400/10 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="reveal" ref={(el) => addRef(el, 0)}>
            <span className="section-label-dark inline-block">FAQs</span>
          </div>
          <h1 className="reveal font-display text-5xl lg:text-6xl text-white" ref={(el) => addRef(el, 1)}>
            Frequently Asked Questions
          </h1>
          <p className="reveal text-lg text-white/60 max-w-2xl mx-auto" ref={(el) => addRef(el, 2)}>
            Everything you need to know about expanding into India and the Middle East
          </p>

          {/* Quick stats */}
          <div className="reveal flex items-center justify-center gap-8 pt-4" ref={(el) => addRef(el, 3)}>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-400">{totalFaqs}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Questions</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-400">{categories.length}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Categories</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-400">2</div>
              <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Regions</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="reveal max-w-xl mx-auto pt-4" ref={(el) => addRef(el, 4)}>
            <div className="relative group">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg group-focus-within:text-brand-400 transition-colors" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearching(e.target.value.length > 0);
                }}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand-400/50 focus:bg-white/15 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); setIsSearching(false); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  <i className="ri-close-line text-lg" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search results mode */}
          {isSearching && filteredFaqs ? (
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <i className="ri-search-line text-brand-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">
                    {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
                  </p>
                </div>
              </div>

              {filteredFaqs.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <i className="ri-question-line text-slate-400 text-3xl" />
                  </div>
                  <h3 className="font-display text-xl text-slate-900 mb-2">No results found</h3>
                  <p className="text-slate-500">Try a different search term or browse by category below.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => {
                    const isOpen = openIds.has(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="rounded-xl border border-slate-200/80 overflow-hidden transition-all duration-300 hover:border-brand-300 hover:shadow-md"
                      >
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full flex items-start gap-4 p-5 text-left"
                        >
                          <div className={`flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-r ${faq.accent} flex items-center justify-center`}>
                            <span className="text-white text-xs font-bold">{faq.categoryLabel.slice(0, 2).toUpperCase()}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-400 mb-1">{faq.categoryLabel}</p>
                            <h3 className="font-display text-base font-semibold text-slate-900">{faq.question}</h3>
                          </div>
                          <i className={`ri-arrow-down-s-line text-slate-400 text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                          <div className="px-5 pb-5 pl-[68px]">
                            <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Category browsing mode */
            <div className="grid lg:grid-cols-[280px_1fr] gap-12">
              {/* Left: Category nav */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <h3 className="font-display text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat, ci) => (
                    <button
                      key={ci}
                      onClick={() => setActiveCategory(ci)}
                      className={`group w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                        activeCategory === ci
                          ? 'bg-gradient-to-r from-brand-50 to-amber-50 border border-brand-200 shadow-sm'
                          : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      {/* Category image thumbnail */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={cat.image}
                          alt={cat.label}
                          className={`w-full h-full object-cover transition-transform duration-500 ${activeCategory === ci ? 'scale-110' : 'group-hover:scale-110'}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`block text-sm font-semibold transition-colors ${activeCategory === ci ? 'text-brand-600' : 'text-slate-700'}`}>
                          {cat.label}
                        </span>
                        <span className="block text-xs text-slate-400 mt-0.5">
                          {cat.items.length} questions
                        </span>
                      </div>
                      {/* Active indicator */}
                      <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${cat.accent} transition-all duration-300 ${activeCategory === ci ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: FAQ accordion */}
              <div>
                {/* Category header card */}
                <div className="group relative rounded-2xl overflow-hidden mb-8">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={categories[activeCategory].image}
                      alt={categories[activeCategory].label}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${categories[activeCategory].accent} text-white text-xs font-semibold tracking-wide uppercase mb-3`}>
                        {categories[activeCategory].items.length} Questions
                      </div>
                      <h2 className="font-display text-3xl font-bold text-white drop-shadow-lg">
                        {categories[activeCategory].label}
                      </h2>
                      <p className="text-white/70 text-sm mt-1">{categories[activeCategory].description}</p>
                    </div>
                  </div>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                  {categories[activeCategory].items.map((faq, fi) => {
                    const isOpen = openIds.has(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? 'border-brand-200 shadow-md bg-gradient-to-r from-brand-50/50 to-white'
                            : 'border-slate-200/80 hover:border-slate-300 hover:shadow-sm bg-white'
                        }`}
                        style={{ animationDelay: `${fi * 60}ms` }}
                      >
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full flex items-center gap-4 p-5 text-left group"
                        >
                          {/* Number badge */}
                          <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? `bg-gradient-to-r ${categories[activeCategory].accent} text-white shadow-sm`
                              : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                          }`}>
                            <span className="text-xs font-bold">{String(fi + 1).padStart(2, '0')}</span>
                          </div>

                          <h3 className={`flex-1 font-display text-base font-semibold transition-colors duration-200 ${
                            isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                          }`}>
                            {faq.question}
                          </h3>

                          {/* Animated chevron */}
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'bg-brand-100 text-brand-600 rotate-180' : 'bg-slate-100 text-slate-400'
                          }`}>
                            <i className="ri-arrow-down-s-line text-lg" />
                          </div>
                        </button>

                        {/* Answer with smooth expand */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-5 pb-5 pl-[68px]">
                            <div className="relative">
                              {/* Decorative left accent */}
                              <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b ${categories[activeCategory].accent}`} />
                              <p className="text-slate-600 leading-relaxed text-[15px] pl-4">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── QUICK ANSWERS HIGHLIGHT ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal" ref={(el) => addRef(el, 5)}>
            <h2 className="font-display text-3xl lg:text-4xl text-slate-900 mb-3">Quick Answers</h2>
            <p className="text-slate-600 max-w-xl mx-auto">The most common things clients ask before getting started</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={(el) => addRef(el, 6)}>
            {[
              {
                q: 'How quickly can we get started?',
                a: 'Within 1 week of signed agreement. Discovery call to kickoff typically takes 3-5 business days.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&q=80',
                accent: 'from-amber-400 to-orange-500',
              },
              {
                q: 'Do you work with startups or only enterprises?',
                a: 'Both. We\'ve helped Series A startups set up lean operations and Fortune 500 companies launch regional HQs. Our models flex to fit.',
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&q=80',
                accent: 'from-rose-400 to-pink-500',
              },
              {
                q: 'What makes ATHENA different from Big 4 firms?',
                a: 'We\'re hands-on operators, not just advisors. You get senior-level attention, faster execution, regional depth, and significantly lower costs.',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&q=80',
                accent: 'from-teal-400 to-emerald-500',
              },
              {
                q: 'Can you help with visas and immigration?',
                a: 'Yes. We handle visa strategy, work permit applications, and relocation support for expatriate staff moving to India or the Middle East.',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=400&h=250&fit=crop&q=80',
                accent: 'from-violet-400 to-purple-500',
              },
              {
                q: 'Do you offer post-setup support?',
                a: '85% of our clients continue with retainer engagements after initial setup. We support scaling, hiring, compliance, and strategic pivots.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop&q=80',
                accent: 'from-indigo-400 to-blue-500',
              },
              {
                q: 'What are your typical fees?',
                a: 'Project fees depend on scope and complexity. We offer transparent pricing with no hidden costs. Contact us for a tailored proposal.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&q=80',
                accent: 'from-cyan-400 to-sky-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-display text-base font-bold text-white drop-shadow-lg leading-snug">{item.q}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
                <div className={`h-0.5 bg-gradient-to-r ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-brand-400 to-amber-500 text-midnight-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 reveal" ref={(el) => addRef(el, 7)}>
          <h2 className="font-display text-3xl lg:text-4xl">Still have questions?</h2>
          <p className="text-lg text-midnight-900/80 max-w-xl mx-auto">
            Our team is ready to help you navigate your market entry journey. Reach out for a no-obligation consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 bg-midnight-900 text-white hover:bg-black">
              Book a free consultation
            </a>
            <a href="mailto:hello@athena.com" className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 border-2 border-midnight-900 bg-white/30 text-midnight-900 transition-all duration-300 hover:bg-white/50">
              Email us directly
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
