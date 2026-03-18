import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Market Entry Guide 2025 — Strategy for Global Businesses",
  description:
    "Complete guide to entering the Indian market in 2025. Covers entity setup, regulatory landscape, talent acquisition, market sizing, and go-to-market strategy for foreign companies.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/india-market-entry-guide-2025",
  },
  openGraph: {
    title: "India Market Entry Guide 2025 — ATHENA MEA",
    description:
      "Everything global businesses need to know about entering the Indian market in 2025.",
    url: "https://www.athenamea.com/insights/blog/india-market-entry-guide-2025",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
