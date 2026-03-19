import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saudi Arabia Market Entry Guide 2026: Vision 2030, MISA Licensing & Business Setup",
  description:
    "Complete guide to entering the Saudi Arabian market in 2026. Covers Vision 2030 opportunities, MISA licensing, entity types, Saudization requirements, free zones, and step-by-step business setup for foreign companies.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/saudi-arabia-market-entry-guide-2026",
  },
  openGraph: {
    title: "Saudi Arabia Market Entry Guide 2026 — ATHENA MEA",
    description:
      "Everything foreign companies need to know about entering Saudi Arabia in 2026: Vision 2030, MISA licensing, Saudization, and business setup.",
    url: "https://www.athenamea.com/insights/blog/saudi-arabia-market-entry-guide-2026",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Saudi Arabia Market Entry Guide 2026: Vision 2030, MISA Licensing & Business Setup",
  "description": "Complete guide to entering the Saudi Arabian market in 2026. Covers Vision 2030 opportunities, MISA licensing, entity types, Saudization requirements, free zones, and step-by-step business setup for foreign companies.",
  "author": { "@type": "Organization", "name": "ATHENA MEA", "url": "https://www.athenamea.com" },
  "publisher": { "@type": "Organization", "name": "ATHENA MEA", "logo": { "@type": "ImageObject", "url": "https://www.athenamea.com/athena-logo-full.webp" } },
  "datePublished": "2026-03-19",
  "dateModified": "2026-03-19",
  "mainEntityOfPage": "https://www.athenamea.com/insights/blog/saudi-arabia-market-entry-guide-2026",
  "image": "https://images.unsplash.com/photo-1586724237569-9c920a20da48?w=1600&q=80",
  "keywords": ["Saudi Arabia market entry", "MISA licensing", "Vision 2030", "Saudization", "business setup Saudi Arabia", "Saudi Arabia free zones", "foreign investment Saudi Arabia"],
  "articleSection": "Market Entry",
  "wordCount": 4200,
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
