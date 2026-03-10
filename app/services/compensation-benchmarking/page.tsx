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

const CompensationBenchmarkingPage = () => {
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
    { label: 'Roles Benchmarked', value: '1000+' },
    { label: 'Industries Covered', value: '15+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const subServices: SubService[] = [
    {
      title: 'Salary Surveys',
      description: 'Comprehensive salary data collection across industries, roles, and regions to provide you with accurate market intelligence.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Benefits Analysis',
      description: 'Benchmarking employee benefits packages against market standards to ensure competitive total rewards offerings.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&q=80',
      accent: 'from-rose-400 to-pink-500',
    },
    {
      title: 'Equity Compensation',
      description: 'ESOP design, stock option structuring, and long-term incentive planning to attract and retain top talent.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80',
      accent: 'from-teal-400 to-emerald-500',
    },
    {
      title: 'Performance Bonuses',
      description: 'Variable pay design, incentive structures, and bonus frameworks aligned with business objectives.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      accent: 'from-violet-400 to-purple-500',
    },
    {
      title: 'Market Positioning',
      description: 'Compensation positioning strategy relative to market percentiles to optimize talent acquisition and retention.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
      accent: 'from-indigo-400 to-blue-500',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Data Collection', description: 'Gather comprehensive compensation data from industry sources, peer companies, and market surveys.' },
    { step: '02', title: 'Analysis & Benchmarking', description: 'Benchmark your compensation structure against market data and identify gaps.' },
    { step: '03', title: 'Strategy Development', description: 'Develop tailored compensation strategies aligned with your business goals.' },
    { step: '04', title: 'Implementation & Support', description: 'Guide implementation and provide ongoing support for program rollout.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-midnight-900/85 to-emerald-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-emerald-400/10 blur-[100px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-400/8 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <a href="/" className="hover:text-brand-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-brand-400 transition-colors">Services</a>
            <span>/</span>
            <span className="text-brand-400">Compensation Benchmarking</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label">Compensation Strategy</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Compensation Benchmarking
            </h1>
            <p className="text-xl text-white/80 leading-relaxed drop-shadow">
              Data-driven salary benchmarking and compensation structure analysis to ensure competitive positioning in local markets.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section data-observe id="overview" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.has('overview') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6">
                Why Compensation Benchmarking Matters
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                In today&apos;s competitive talent market, getting compensation right is crucial. Our benchmarking services help you understand where you stand relative to your competition and industry peers.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine quantitative data analysis with market insights to provide actionable recommendations that balance competitiveness with financial sustainability.
              </p>

              {/* Animated Stats */}
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

            <div
              className={`group transition-all duration-1000 ${
                visibleSections.has('overview') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-adf4ee868e4d?w=600&h=400&fit=crop"
                  alt="Analytics dashboard"
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
              Comprehensive compensation benchmarking services tailored to your organization&apos;s needs.
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
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]"
                  />
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
              A structured methodology to deliver comprehensive compensation insights.
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
                  className={`group relative transition-all duration-1000 ${
                    visibleSections.has(`process-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
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
          <h2 className="font-display text-4xl font-bold text-midnight-900 mb-6">
            Ready to Benchmark Your Compensation?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Get a clear understanding of your market position and optimize your compensation strategy.
          </p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompensationBenchmarkingPage;
