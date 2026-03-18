import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Market Entry Strategy — India & Middle East Expansion Advisory",
  description:
    "End-to-end market entry strategy for global businesses expanding into India, UAE, and the Middle East. Feasibility studies, go-to-market plans, regulatory guidance, and entity setup.",
  alternates: {
    canonical: "https://www.athenamea.com/services/market-entry-strategy",
  },
  openGraph: {
    title: "Market Entry Strategy — ATHENA MEA",
    description:
      "Strategic market entry advisory for India, UAE, and the Middle East — feasibility studies, GTM plans, regulatory navigation, and entity setup.",
    url: "https://www.athenamea.com/services/market-entry-strategy",
  },
};

export default function MarketEntryStrategyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Market Entry Strategy"
        description="End-to-end market entry strategy for global businesses expanding into India, UAE, and the Middle East. Feasibility studies, go-to-market plans, regulatory guidance, and entity setup."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.athenamea.com" },
          { name: "Services", url: "https://www.athenamea.com/#services" },
          { name: "Market Entry Strategy", url: "https://www.athenamea.com/services/market-entry-strategy" },
        ]}
      />
      {children}
    </>
  );
}
