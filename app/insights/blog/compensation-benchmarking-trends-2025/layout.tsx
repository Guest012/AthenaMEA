import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compensation Benchmarking Trends 2025 — India & Middle East",
  description:
    "Latest compensation benchmarking trends for India, UAE, and the Middle East in 2025. Salary data, executive pay trends, benefits analysis, and retention incentive strategies.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/compensation-benchmarking-trends-2025",
  },
  openGraph: {
    title: "Compensation Benchmarking Trends 2025 — ATHENA MEA",
    description:
      "2025 compensation trends, salary data, and benefits analysis for India and the Middle East.",
    url: "https://www.athenamea.com/insights/blog/compensation-benchmarking-trends-2025",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
