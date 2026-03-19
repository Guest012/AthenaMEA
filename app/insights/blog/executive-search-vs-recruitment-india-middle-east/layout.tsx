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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
