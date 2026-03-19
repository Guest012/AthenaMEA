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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
