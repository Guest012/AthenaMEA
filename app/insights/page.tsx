'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

/* ─── Blog Article Data ─── */
const BLOG_ARTICLES = [
  {
    slug: 'india-market-entry-guide-2025',
    title: 'India Market Entry Guide 2025: Strategy, Regulations & Practical Playbook',
    category: 'Market Entry',
    excerpt:
      'A comprehensive guide covering entity structures, regulatory bodies like RBI and SEBI, sector-specific FDI limits, and a 6-month market entry roadmap for India.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    readTime: '12 min read',
    date: 'Feb 18, 2025',
    featured: true,
  },
  {
    slug: 'uae-free-zone-vs-mainland',
    title: 'UAE Free Zone vs Mainland Company: Which Is Right for Your Business in 2025?',
    category: 'Regulatory',
    excerpt:
      'Compare DIFC, DMCC, JAFZA, ADGM & RAKEZ free zones against mainland setup — with cost tables, visa rules, and a decision framework.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    readTime: '10 min read',
    date: 'Jan 24, 2025',
    featured: false,
  },
  {
    slug: 'hiring-leaders-india-middle-east',
    title: 'How to Hire Senior Leaders in India & the Middle East: Executive Search Playbook',
    category: 'Leadership',
    excerpt:
      'Which C-suite roles to hire first, how to navigate India\'s 90-day notice periods, Emiratization rules, and retention strategies that work.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    readTime: '9 min read',
    date: 'Mar 5, 2025',
    featured: false,
  },
  {
    slug: 'compensation-benchmarking-trends-2025',
    title: 'Compensation Benchmarking in India & GCC 2025: Salary Trends, ESOPs & Benefits',
    category: 'Research',
    excerpt:
      'Latest salary benchmarks for tech, sales, and finance roles across Mumbai, Bangalore, Dubai, and Riyadh — plus ESOP taxation frameworks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    readTime: '11 min read',
    date: 'Jan 10, 2025',
    featured: false,
  },
];

/* ─── Insight Card Data ─── */
const INSIGHTS = [
  {
    title: 'The Complete Guide to India Market Entry',
    category: 'Market Entry',
    excerpt: 'Everything you need to know about entering the Indian market strategically.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
  },
  {
    title: 'UAE Free Zone vs Mainland: Making the Right Choice',
    category: 'Regulatory',
    excerpt: 'Compare free zones and mainland operations to optimize your UAE expansion.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  },
  {
    title: 'Compensation Trends Across India & GCC 2025',
    category: 'Research',
    excerpt: 'Latest salary benchmarks and compensation trends for executive talent.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    title: 'Building High-Performance Teams in Emerging Markets',
    category: 'Leadership',
    excerpt: 'Best practices for recruiting and developing leaders in new markets.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  },
  {
    title: '5 Common Mistakes in Middle East Expansion',
    category: 'Strategy',
    excerpt: 'Learn from common pitfalls and accelerate your market entry success.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  },
  {
    title: 'Digital Transformation Opportunities in India',
    category: 'Technology',
    excerpt: 'Leverage digital innovation to gain competitive advantage in India.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
];

/* ─── HR Leadership Spotlight Data ─── */
const LEADERSHIP_SPOTLIGHTS = [
  {
    slug: 'sudeep-luthra',
    name: 'Sudeep Luthra',
    title: 'Sr. HR Leader (ex-Head HR)',
    company: 'Orange Business India',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHkvefK75n7lw/profile-displayphoto-shrink_800_800/B56ZPS',
    quote: 'We put people at the center of every transformation—growth follows when teams feel trusted, informed, and empowered.',
    tags: ['Org Design', 'Agile Change', 'People-First'],
  },
  {
    slug: 'prashant-srivastava',
    name: 'Prashant Srivastava',
    title: 'VP Human Resources',
    company: 'MEA Assist',
    avatar: 'https://mediassist.in/assets/images/team/prashant-shrivastava.png',
    quote: 'Our edge is a ready-now pipeline. When demand spikes, talent moves quickly because readiness was planned months earlier.',
    tags: ['HR Tech', 'Talent Pipeline', 'Strategic HR'],
  },
  {
    slug: 'sudhir-mishra',
    name: 'Sudhir Mishra',
    title: 'VP & Head HR - India',
    company: 'IDEMA',
    avatar: 'https://media.licdn.com/dms/image/v2/C5103AQESvLtJzJBbAg/profile-displayphoto-shrink_800_800/profil',
    quote: 'A fulfilling job is one that allows me to make a meaningful impact and drive improvement.',
    tags: ['M&A', 'Culture Alignment', 'Purpose-Led'],
  },
  {
    slug: 'monika-srivastava',
    name: 'Monika Srivastava',
    title: 'Head - Leadership & Sales Hiring',
    company: 'Quest Global',
    avatar: 'https://media.licdn.com/dms/image/v2/C5603AQHDBP_Sb8ZwfQ/profile-displayphoto-shrink_800_800/profil',
    quote: 'Ambition and impact go together—stay aspirational, map talent proactively, and keep the human touch.',
    tags: ['Talent Mapping', 'Strategic Hiring', 'AI in HR'],
  },
  {
    slug: 'rajat-bhatia',
    name: 'Rajat Bhatia',
    title: 'SVP & Head – People & Culture',
    company: 'Fareportal',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQE76zG9_lVqhw/profile-displayphoto-shrink_800_800/profil',
    quote: 'Always stay in touch with the ground-level realities.',
    tags: ['Innovation', 'Collaboration', 'Transformation'],
  },
  {
    slug: 'anil-gaur',
    name: 'Anil Gaur',
    title: 'Group Chief People Officer',
    company: 'Akums Drugs & Pharmaceuticals Ltd.',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQHI9eN74mJVeg/profile-displayphoto-shrink_800_800/profil',
    quote: 'True engagement comes when people enjoy what they do—that brings motivation aligned with business purpose.',
    tags: ['HHRD', 'Engagement', 'Purpose Alignment'],
  },
  {
    slug: 'priyanka-shetty',
    name: 'Priyanka Shetty',
    title: 'Senior Director – People Solutions',
    company: 'Indegene',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQHuVHvsSTsRtw/profile-displayphoto-shrink_800_800/profil',
    quote: 'We have a high-trust relationship and I know that whatever tasks and outcomes we are set to do, we will deliver together.',
    tags: ['Women in HR', 'Mentorship', 'Empowerment'],
  },
  {
    slug: 'arun-paul',
    name: 'Arun Paul',
    title: 'Head of Human Resources – APAC',
    company: 'Orion Innovation',
    avatar: 'https://media.licdn.com/dms/image/v2/C5103AQFFEi6jSYPtpQ/profile-displayphoto-shrink_800_800/profil',
    quote: 'It is essential to cultivate a culture that values data and insights.',
    tags: ['Data-Driven HR', 'Coaching', 'APAC'],
  },
  {
    slug: 'manish-kotwani',
    name: 'Manish Kotwani',
    title: 'Head of HR & Admin',
    company: 'Course5i',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQHoqSKG7hlmDQ/profile-displayphoto-shrink_800_800/profil',
    quote: 'The chance to build organizations while nurturing careers is something I love—Human Capital is the career I have invested in!',
    tags: ['Org Building', 'Human Capital', 'Learning Culture'],
  },
  {
    slug: 'sanjay-mathur',
    name: 'Sanjay Mathur',
    title: 'HR Development Director',
    company: 'SYSTRA',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQG-Nq-4DRNLcg/profile-displayphoto-shrink_800_800/B4DZeZ',
    quote: 'When you stand by your employees, when you empathize and support them, they reciprocate.',
    tags: ['Empathy', 'HR Evolution', 'Domain Expertise'],
  },
  {
    slug: 'tejinderpal-miglani',
    name: 'TejinderPal Miglani',
    title: 'Advisor & Mentor · Co-founder',
    company: 'Incedo Inc.',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHHiyYXYzG1MA/profile-displayphoto-shrink_800_800/profil',
    quote: 'Entrepreneurs should prioritize understanding and solving customer problems over developing and selling a specific product.',
    tags: ['Entrepreneurship', 'Product-Market Fit', 'Climate Tech'],
  },
  {
    slug: 'rishi-mehta',
    name: 'Rishi Mehta',
    title: 'President & CEO',
    company: 'WAISL Limited',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGRTTCOpqVgRA/profile-displayphoto-shrink_800_800/profil',
    quote: 'The real growth happens when we step out of our comfort zones. What doesn\'t break us, eventually builds us.',
    tags: ['Resilience', 'Entrepreneurship', 'Growth Mindset'],
  },
];

const SPOTLIGHT_TAG_COLORS: Record<string, string> = {
  'Org Design': 'bg-brand-50 text-brand-600 border-brand-200',
  'Agile Change': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'People-First': 'bg-amber-50 text-amber-600 border-amber-200',
  'HR Tech': 'bg-cyan-50 text-cyan-600 border-cyan-200',
  'Talent Pipeline': 'bg-violet-50 text-violet-600 border-violet-200',
  'Strategic HR': 'bg-indigo-50 text-indigo-600 border-indigo-200',
  'M&A': 'bg-rose-50 text-rose-600 border-rose-200',
  'Culture Alignment': 'bg-pink-50 text-pink-600 border-pink-200',
  'Purpose-Led': 'bg-amber-50 text-amber-600 border-amber-200',
  'Talent Mapping': 'bg-purple-50 text-purple-600 border-purple-200',
  'Strategic Hiring': 'bg-blue-50 text-blue-600 border-blue-200',
  'AI in HR': 'bg-teal-50 text-teal-600 border-teal-200',
  Innovation: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Collaboration: 'bg-sky-50 text-sky-600 border-sky-200',
  Transformation: 'bg-violet-50 text-violet-600 border-violet-200',
  HHRD: 'bg-orange-50 text-orange-600 border-orange-200',
  Engagement: 'bg-brand-50 text-brand-600 border-brand-200',
  'Purpose Alignment': 'bg-amber-50 text-amber-600 border-amber-200',
  'Women in HR': 'bg-pink-50 text-pink-600 border-pink-200',
  Mentorship: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  Empowerment: 'bg-rose-50 text-rose-600 border-rose-200',
  'Data-Driven HR': 'bg-cyan-50 text-cyan-600 border-cyan-200',
  Coaching: 'bg-teal-50 text-teal-600 border-teal-200',
  APAC: 'bg-sky-50 text-sky-600 border-sky-200',
  'Org Building': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'Human Capital': 'bg-purple-50 text-purple-600 border-purple-200',
  'Learning Culture': 'bg-blue-50 text-blue-600 border-blue-200',
  Empathy: 'bg-rose-50 text-rose-600 border-rose-200',
  'HR Evolution': 'bg-indigo-50 text-indigo-600 border-indigo-200',
  'Domain Expertise': 'bg-amber-50 text-amber-600 border-amber-200',
  Entrepreneurship: 'bg-orange-50 text-orange-600 border-orange-200',
  'Product-Market Fit': 'bg-teal-50 text-teal-600 border-teal-200',
  'Climate Tech': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Resilience: 'bg-violet-50 text-violet-600 border-violet-200',
  'Growth Mindset': 'bg-brand-50 text-brand-600 border-brand-200',
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  'Market Entry': { bg: 'bg-brand-50', text: 'text-brand-700', dot: 'bg-brand-400' },
  Regulatory: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-400' },
  Research: { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-400' },
  Leadership: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-400' },
  Strategy: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-400' },
  Technology: { bg: 'bg-cyan-50', text: 'text-cyan-700', dot: 'bg-cyan-400' },
};

function catColor(cat: string) {
  return CATEGORY_COLORS[cat] || { bg: 'bg-slate-50', text: 'text-slate-700', dot: 'bg-slate-400' };
}

/* ─── Page Component ─── */
export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'insights' | 'spotlight'>('all');
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null, i: number) => { revealRefs.current[i] = el; };

  const featured = BLOG_ARTICLES[0];

  return (
    <main className="w-full bg-white">

      {/* ━━━━━━━━━━ HERO ━━━━━━━━━━ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Thematic background image */}
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-midnight-900/90 to-violet-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Animated accent orbs */}
        <div aria-hidden className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-400/10 blur-[120px] animate-pulse" />
        <div aria-hidden className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-400/8 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-brand-400">
              <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
              Knowledge Hub
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Insights &{' '}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Practical playbooks, hiring research, market intelligence, and in-depth articles from our advisory team.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━ TAB NAVIGATION ━━━━━━━━━━ */}
      <div className="sticky top-[81px] z-30 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <nav className="flex gap-1 -mb-px" aria-label="Content tabs">
            {[
              { id: 'all' as const, label: 'All Content' },
              { id: 'blog' as const, label: 'Blog' },
              { id: 'insights' as const, label: 'Insights' },
              { id: 'spotlight' as const, label: 'Leadership Spotlight' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-300',
                  activeTab === tab.id
                    ? 'border-brand-400 text-brand-700'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ━━━━━━━━━━ FEATURED BLOG ARTICLE ━━━━━━━━━━ */}
      {(activeTab === 'all' || activeTab === 'blog') && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-block h-8 w-1 rounded-full bg-brand-400" />
              <h2 className="font-display text-2xl font-bold text-slate-900">Featured Article</h2>
            </div>

            <Link
              href={`/insights/blog/${featured.slug}`}
              ref={(el) => addRef(el, 0)}
              className="reveal group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-elevated hover:shadow-dramatic transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${catColor(featured.category).bg} ${catColor(featured.category).text}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${catColor(featured.category).dot}`} />
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                  <span>{featured.date}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>{featured.readTime}</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read full article
                  <i className="ri-arrow-right-line" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━ BLOG ARTICLES GRID ━━━━━━━━━━ */}
      {(activeTab === 'all' || activeTab === 'blog') && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <span className="inline-block h-8 w-1 rounded-full bg-brand-400" />
                <h2 className="font-display text-2xl font-bold text-slate-900">Blog</h2>
                <span className="text-sm text-slate-400 font-medium">In-depth articles & playbooks</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_ARTICLES.slice(1).map((article, idx) => {
                const c = catColor(article.category);
                return (
                  <Link
                    key={article.slug}
                    href={`/insights/blog/${article.slug}`}
                    ref={(el) => addRef(el, idx + 1)}
                    className="reveal group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm bg-white/90 ${c.text}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs text-slate-400 mb-3">{article.date}</div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2 mb-4">{article.excerpt}</p>
                      <div className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm">
                        Read article <i className="ri-arrow-right-s-line transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━ INSIGHTS / SHORT-FORM GRID ━━━━━━━━━━ */}
      {(activeTab === 'all' || activeTab === 'insights') && (
        <section className={`py-20 ${activeTab === 'all' ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-block h-8 w-1 rounded-full bg-brand-400" />
              <h2 className="font-display text-2xl font-bold text-slate-900">Insights</h2>
              <span className="text-sm text-slate-400 font-medium">Quick reads & market intelligence</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSIGHTS.map((article, idx) => {
                const c = catColor(article.category);
                return (
                  <div
                    key={article.title}
                    ref={(el) => addRef(el, idx + 5)}
                    className="reveal group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-3 ${c.bg} ${c.text}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                        {article.category}
                      </span>
                      <h3 className="font-display text-base font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━ LEADERSHIP SPOTLIGHT ━━━━━━━━━━ */}
      {(activeTab === 'all' || activeTab === 'spotlight') && (
        <section className={`py-20 ${activeTab === 'all' ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-8 w-1 rounded-full bg-brand-400" />
              <h2 className="font-display text-2xl font-bold text-slate-900">HR Leadership Spotlight</h2>
            </div>
            <p className="text-slate-500 mb-10 ml-5">
              Perspectives from executives and HR leaders who&apos;ve navigated cross-border expansion firsthand.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEADERSHIP_SPOTLIGHTS.map((leader, idx) => (
                <Link
                  key={leader.slug}
                  href={`/insights/spotlight/${leader.slug}`}
                  ref={(el) => addRef(el, idx + 12)}
                  className="reveal group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Header with avatar */}
                  <div className="relative bg-gradient-to-br from-midnight-900 to-slate-800 p-6 pb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="h-16 w-16 rounded-full bg-center bg-cover border-2 border-brand-400 ring-2 ring-brand-400/30 ring-offset-2 ring-offset-midnight-900 flex-shrink-0"
                        style={{ backgroundImage: `url(${leader.avatar})` }}
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-bold text-white truncate">{leader.name}</h3>
                        <p className="text-sm text-white/70 truncate">{leader.title}</p>
                        <p className="text-xs text-brand-400 font-medium">{leader.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <i className="ri-double-quotes-l text-2xl text-brand-400/40" />
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mt-1">
                        {leader.quote}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {leader.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${
                            SPOTLIGHT_TAG_COLORS[tag] || 'bg-slate-50 text-slate-600 border-slate-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Read spotlight <i className="ri-arrow-right-s-line transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━ NEWSLETTER CTA ━━━━━━━━━━ */}
      <section className="relative py-20 bg-gradient-to-br from-midnight-900 to-black overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-10" />
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-400/5 blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <i className="ri-mail-send-line text-4xl text-brand-400 mb-4 block" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay ahead of the curve
          </h2>
          <p className="text-white/50 mb-8 text-lg max-w-xl mx-auto">
            Get monthly insights on market entry, hiring trends, and growth strategies delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400/30 transition"
            />
            <button type="submit" className="btn-primary !rounded-xl !px-6 font-semibold">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-white/30 mt-4">No spam, unsubscribe anytime. Read by 2,500+ executives.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
