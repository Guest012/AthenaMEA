import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Competitive Intelligence — Market Analysis India & Middle East",
  description:
    "Competitive intelligence and market analysis for businesses entering India, UAE, and the Middle East. Competitor profiling, SWOT analysis, risk assessment, and opportunity mapping.",
  alternates: {
    canonical: "https://www.athenamea.com/services/competitive-intelligence",
  },
  openGraph: {
    title: "Competitive Intelligence — ATHENA MEA",
    description:
      "Deep competitive intelligence for India and the Middle East — competitor analysis, market trends, SWOT, and strategic recommendations.",
    url: "https://www.athenamea.com/services/competitive-intelligence",
  },
};

export default function CompetitiveIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Competitive Intelligence"
        description="Competitive intelligence and market analysis for businesses entering India, UAE, and the Middle East. Competitor profiling, SWOT analysis, risk assessment, and opportunity mapping."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.athenamea.com" },
          { name: "Services", url: "https://www.athenamea.com/#services" },
          { name: "Competitive Intelligence", url: "https://www.athenamea.com/services/competitive-intelligence" },
        ]}
      />
      {children}
    </>
  );
}
