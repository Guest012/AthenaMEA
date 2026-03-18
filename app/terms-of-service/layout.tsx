import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the ATHENA MEA terms of service. Understand your rights and obligations when using our market entry advisory and executive search services.",
  alternates: {
    canonical: "https://www.athenamea.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service — ATHENA MEA",
    description:
      "Terms governing the use of ATHENA Market Entry Advisors website and services.",
    url: "https://www.athenamea.com/terms-of-service",
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
