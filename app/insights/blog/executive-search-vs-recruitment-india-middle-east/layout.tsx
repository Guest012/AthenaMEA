import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Search vs Recruitment Agencies: Hiring Leaders for India & Middle East Expansion",
  description:
    "Understand the critical differences between executive search firms and recruitment agencies when hiring C-suite and senior leaders for India, UAE, and Saudi Arabia market entry. Data-driven comparison with cost analysis.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/executive-search-vs-recruitment-india-middle-east",
  },
  openGraph: {
    title: "Executive Search vs Recruitment: Hiring Leaders for India & Middle East — ATHENA MEA",
    description:
      "Why traditional recruitment fails for cross-border leadership hiring, and how executive search firms deliver transformational talent for market entry.",
    url: "https://www.athenamea.com/insights/blog/executive-search-vs-recruitment-india-middle-east",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Executive Search vs Recruitment Agencies: Hiring Leaders for India & Middle East Expansion",
  "description": "Understand the critical differences between executive search firms and recruitment agencies when hiring C-suite and senior leaders for India, UAE, and Saudi Arabia market entry.",
  "author": { "@type": "Organization", "name": "ATHENA MEA", "url": "https://www.athenamea.com" },
  "publisher": { "@type": "Organization", "name": "ATHENA MEA", "logo": { "@type": "ImageObject", "url": "https://www.athenamea.com/athena-logo-full.webp" } },
  "datePublished": "2026-03-19",
  "dateModified": "2026-03-19",
  "mainEntityOfPage": "https://www.athenamea.com/insights/blog/executive-search-vs-recruitment-india-middle-east",
  "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80",
  "keywords": ["executive search India", "recruitment agency India", "executive search vs recruitment", "hiring leaders India", "executive search UAE", "executive search Middle East", "cross-border hiring"],
  "articleSection": "Leadership & Talent",
  "wordCount": 3800,
  "inLanguage": "en-US"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {children}
    </>
  );
}
