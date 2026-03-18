import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Compensation Benchmarking — Salary Data India & Middle East",
  description:
    "Accurate compensation benchmarking and salary surveys for India, UAE, and the Middle East. Compare executive pay, benefits, and incentive structures across industries and regions.",
  alternates: {
    canonical: "https://www.athenamea.com/services/compensation-benchmarking",
  },
  openGraph: {
    title: "Compensation Benchmarking — ATHENA MEA",
    description:
      "Data-driven compensation benchmarking for India and the Middle East. Salary surveys, benefits analysis, and pay structure advisory.",
    url: "https://www.athenamea.com/services/compensation-benchmarking",
  },
};

export default function CompensationBenchmarkingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Compensation Benchmarking"
        description="Accurate compensation benchmarking and salary surveys for India, UAE, and the Middle East. Compare executive pay, benefits, and incentive structures across industries and regions."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.athenamea.com" },
          { name: "Services", url: "https://www.athenamea.com/#services" },
          { name: "Compensation Benchmarking", url: "https://www.athenamea.com/services/compensation-benchmarking" },
        ]}
      />
      {children}
    </>
  );
}
