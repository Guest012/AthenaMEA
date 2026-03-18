import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Strategic Consulting — Business Advisory India & Middle East",
  description:
    "Strategic consulting for businesses expanding into India, UAE, and the Middle East. Operational advisory, partnership facilitation, growth strategy, and cross-border business development.",
  alternates: {
    canonical: "https://www.athenamea.com/services/strategic-consulting",
  },
  openGraph: {
    title: "Strategic Consulting — ATHENA MEA",
    description:
      "Strategic business consulting for India and the Middle East — operations advisory, growth strategy, and cross-border expansion support.",
    url: "https://www.athenamea.com/services/strategic-consulting",
  },
};

export default function StrategicConsultingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Strategic Consulting"
        description="Strategic consulting for businesses expanding into India, UAE, and the Middle East. Operational advisory, partnership facilitation, growth strategy, and cross-border business development."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.athenamea.com" },
          { name: "Services", url: "https://www.athenamea.com/#services" },
          { name: "Strategic Consulting", url: "https://www.athenamea.com/services/strategic-consulting" },
        ]}
      />
      {children}
    </>
  );
}
