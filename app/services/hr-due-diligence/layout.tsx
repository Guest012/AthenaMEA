import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "HR Due Diligence — M&A People Assessment India & Middle East",
  description:
    "HR due diligence services for mergers, acquisitions, and joint ventures in India, UAE, and the Middle East. Workforce assessment, culture audits, compliance reviews, and integration planning.",
  alternates: {
    canonical: "https://www.athenamea.com/services/hr-due-diligence",
  },
  openGraph: {
    title: "HR Due Diligence — ATHENA MEA",
    description:
      "Comprehensive HR due diligence for M&A in India and the Middle East — workforce assessment, culture audits, and integration planning.",
    url: "https://www.athenamea.com/services/hr-due-diligence",
  },
};

export default function HRDueDiligenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="HR Due Diligence"
        description="HR due diligence services for mergers, acquisitions, and joint ventures in India, UAE, and the Middle East. Workforce assessment, culture audits, compliance reviews, and integration planning."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.athenamea.com" },
          { name: "Services", url: "https://www.athenamea.com/#services" },
          { name: "HR Due Diligence", url: "https://www.athenamea.com/services/hr-due-diligence" },
        ]}
      />
      {children}
    </>
  );
}
