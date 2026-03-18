import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Talent Discovery — Executive Search India & Middle East",
  description:
    "Executive search and talent acquisition for companies expanding into India and the Middle East. CXO hiring, leadership recruitment, and niche talent mapping across key industries.",
  alternates: {
    canonical: "https://www.athenamea.com/services/talent-discovery",
  },
  openGraph: {
    title: "Talent Discovery & Executive Search — ATHENA MEA",
    description:
      "Find top leadership talent in India and the Middle East. CXO hiring, executive search, and talent mapping for market entry success.",
    url: "https://www.athenamea.com/services/talent-discovery",
  },
};

export default function TalentDiscoveryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Talent Discovery & Executive Search"
        description="Executive search and talent acquisition for companies expanding into India and the Middle East. CXO hiring, leadership recruitment, and niche talent mapping across key industries."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.athenamea.com" },
          { name: "Services", url: "https://www.athenamea.com/#services" },
          { name: "Talent Discovery", url: "https://www.athenamea.com/services/talent-discovery" },
        ]}
      />
      {children}
    </>
  );
}
