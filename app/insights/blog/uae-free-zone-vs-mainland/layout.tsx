import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Free Zone vs Mainland — Which Is Right for Your Business?",
  description:
    "A practical guide to choosing between UAE free zone and mainland company formation. Covers licensing, foreign ownership, visa allocation, and operational flexibility.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/uae-free-zone-vs-mainland",
  },
  openGraph: {
    title: "UAE Free Zone vs Mainland Setup — ATHENA MEA",
    description:
      "Pros and cons of free zone vs mainland company setup in the UAE for foreign businesses.",
    url: "https://www.athenamea.com/insights/blog/uae-free-zone-vs-mainland",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
