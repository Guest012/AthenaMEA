'use client';

import { useEffect, useState, useRef } from 'react';
import Footer from '@/components/Footer';

interface StatItem {
  label: string;
  value: string;
}

interface SubService {
  title: string;
  description: string;
  image: string;
  accent: string;
}

const CompetitiveIntelligencePage = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-observe]');
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      sections.forEach((section) => observerRef.current?.unobserve(section));
      observerRef.current?.disconnect();
    };
  }, []);

  const stats: StatItem[] = [
    { label: 'Competitor Profiles', value: '200+' },
    { label: 'Market Reports', value: '50+' },
    { label: 'Industries Tracked', value: '12+' },
  ];

  const subServices: SubService[] = [
    {
      title: 'Competitor Analysis',
      description: 'Detailed profiling of key competitors including strategy, strengths, and weaknesses to inform your market positioning.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Market Trends',
      description: 'Tracking emerging trends, consumer behavior shifts, and industry dynamics to keep you ahead of market changes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
      accent: 'from-rose-400 to-pink-500',
    },
    {
      title: 'SWOT Analysis',
      description: 'Comprehensive strength, weakness, opportunity, and threat mapping to guide strategic decision-making.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      accent: 'from-teal-400 to-emerald-500',
    },
    {
      title: 'Risk Assessment',
      description: 'Political, economic, and regulatory risk evaluation for market entry and expansion strategies.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
      accent: 'from-violet-400 to-purple-500',
    },
    {
      title: 'Opportunity Mapping',
      description: 'Identifying whitespace opportunities and untapped market segments for growth and competitive advantage.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80',
      accent: 'from-indigo-400 to-blue-500',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Market Research', description: 'Extensive research across public sources, industry reports, and proprietary databases.' },
    { step: '02', title: 'Competitive Profiling', description: 'Detailed competitor profiles analyzing strategies, capabilities, and performance.' },
    { step: '03', title: 'Strategic Analysis', description: 'SWOT analysis, market gaps, emerging opportunities, and potential threats.' },
    { step: '04', title: 'Insights & Recommendations', description: 'Actionable insights and strategic recommendations to help you win.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-midnight-900/85 to-indigo-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-1/3 left-1/3 w-[450px] h-[450px] rounded-full bg-violet-400/10 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <a href="/" className="hover:text-brand-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-brand-400 transition-colors">Services</a>
            <span>/</span>
            <span className="text-brand-400">Competitive Intelligence</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label">Market Intelligence</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Competitive Intelligence
            </h1>
            <p className="text-xl text-white/80 leading-relaxed drop-shadow">
              Deep market intelligence and competitor analysis to identify opportunities and mitigate risks in your target markets.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section data-observe id="overview" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${visibleSections.has('overview') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6">Stay Ahead of Your Competition</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                In fast-moving markets, understanding your competitive landscape is essential. Our intelligence services provide comprehensive insights into competitor strategies, market dynamics, and emerging opportunities.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From market entry analysis to ongoing competitive monitoring, we deliver the intelligence you need to make informed strategic decisions.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="group relative p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 hover:border-brand-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    <div className="font-display text-3xl font-bold bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`group transition-all duration-1000 ${visibleSections.has('overview') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Business intelligence analysis"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer — Image Cards */}
      <section data-observe id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-midnight-900 mb-4">What We Offer</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive competitive intelligence services to inform your strategy and decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((service, index) => (
              <div
                key={index}
                data-observe
                id={`service-${index}`}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${
                  visibleSections.has(`service-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${service.accent} text-white text-xs font-semibold tracking-wide uppercase mb-2`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className={`h-0.5 bg-gradient-to-r ${service.accent} transform origin-left transition-transform duration-500 ${hoveredCard === index ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — Horizontal Timeline */}
      <section data-observe id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-midnight-900 mb-4">Our Approach</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A systematic process to deliver deep market intelligence and competitive insights.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-400/20 via-brand-400 to-brand-400/20" />
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  data-observe
                  id={`process-${index}`}
                  className={`group relative transition-all duration-1000 ${visibleSections.has(`process-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-brand-400 flex items-center justify-center shadow-lg group-hover:bg-brand-400 group-hover:scale-110 transition-all duration-500">
                      <span className="font-display text-xl font-bold text-brand-400 group-hover:text-white transition-colors duration-500">{item.step}</span>
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white border border-slate-200 group-hover:border-brand-300 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="font-display text-lg font-bold text-midnight-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-observe id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6">Unlock Market Opportunities Today</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Get comprehensive competitive intelligence to drive strategic growth and informed decision-making.
          </p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompetitiveIntelligencePage;
