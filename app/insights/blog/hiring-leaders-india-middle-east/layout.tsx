import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiring Leaders in India & the Middle East — Executive Search Guide",
  description:
    "How to hire senior leadership for India and the Middle East. Covers executive search strategy, compensation expectations, cultural nuances, and talent pipeline building.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/hiring-leaders-india-middle-east",
  },
  openGraph: {
    title: "Hiring Leaders in India & the Middle East — ATHENA MEA",
    description:
      "Expert guide to executive search and leadership hiring in India and the Middle East.",
    url: "https://www.athenamea.com/insights/blog/hiring-leaders-india-middle-east",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
