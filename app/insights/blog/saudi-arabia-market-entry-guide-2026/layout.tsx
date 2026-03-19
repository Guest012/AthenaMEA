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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
