import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog — Market Entry Intelligence",
  description:
    "Read expert insights on India and Middle East market entry strategy, executive hiring trends, regulatory updates, and leadership perspectives from ATHENA MEA.",
  alternates: {
    canonical: "https://www.athenamea.com/insights",
  },
  openGraph: {
    title: "Insights & Blog — ATHENA MEA Market Intelligence",
    description:
      "Expert analysis on India and Middle East business expansion, executive search trends, and market entry strategy.",
    url: "https://www.athenamea.com/insights",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
