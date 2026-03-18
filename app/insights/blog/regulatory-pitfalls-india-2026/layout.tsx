import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulatory Pitfalls When Entering the Indian Market in 2026",
  description:
    "Avoid costly regulatory mistakes when expanding into India. Learn about FEMA compliance, GST registration, entity structuring, labour law, and data protection requirements for 2026.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/regulatory-pitfalls-india-2026",
  },
  openGraph: {
    title: "Regulatory Pitfalls When Entering India (2026) — ATHENA MEA",
    description:
      "Common regulatory mistakes companies make when entering the Indian market, and how to avoid them.",
    url: "https://www.athenamea.com/insights/blog/regulatory-pitfalls-india-2026",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
