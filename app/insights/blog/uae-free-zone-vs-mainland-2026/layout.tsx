import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Free Zone vs Mainland Company Setup — 2026 Guide",
  description:
    "Compare UAE free zone and mainland company structures for 2026. Ownership rules, visa quotas, tax implications, and which setup suits your business expansion strategy.",
  alternates: {
    canonical: "https://www.athenamea.com/insights/blog/uae-free-zone-vs-mainland-2026",
  },
  openGraph: {
    title: "UAE Free Zone vs Mainland (2026 Guide) — ATHENA MEA",
    description:
      "Comprehensive comparison of UAE free zone and mainland company setup options for foreign businesses in 2026.",
    url: "https://www.athenamea.com/insights/blog/uae-free-zone-vs-mainland-2026",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
