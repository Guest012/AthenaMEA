import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Mistakes Companies Make When Entering the Indian Market (And How to Avoid Them)",
  description:
    "Common mistakes foreign companies make during India market entry: wrong entity structure, underestimating compliance, hiring failures, cultural missteps, and more. Practical guidance from 200+ market entry projects.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/top-mistakes-entering-indian-market",
  },
  openGraph: {
    title: "Top 10 India Market Entry Mistakes — ATHENA MEA",
    description:
      "Avoid the most common and costly mistakes when entering the Indian market. Based on 200+ real market entry projects.",
    url: "https://www.athenamea.com/insights/blog/top-mistakes-entering-indian-market",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top 10 Mistakes Companies Make When Entering the Indian Market",
  "description": "Common mistakes foreign companies make during India market entry and how to avoid them. Based on 200+ real market entry projects.",
  "author": { "@type": "Organization", "name": "ATHENA MEA", "url": "https://www.athenamea.com" },
  "publisher": { "@type": "Organization", "name": "ATHENA MEA", "logo": { "@type": "ImageObject", "url": "https://www.athenamea.com/athena-logo-full.webp" } },
  "datePublished": "2026-03-19",
  "dateModified": "2026-03-19",
  "mainEntityOfPage": "https://www.athenamea.com/insights/blog/top-mistakes-entering-indian-market",
  "image": "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1600&q=80",
  "keywords": ["India market entry mistakes", "India expansion guide", "foreign company India", "India business setup mistakes", "India market entry consulting", "India market entry strategy"],
  "articleSection": "Market Entry",
  "wordCount": 3600,
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
