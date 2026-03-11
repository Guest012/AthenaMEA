import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Get answers to common questions about market entry in India and the Middle East, executive search, consulting fees, timelines, and working with ATHENA MEA.",
  alternates: {
    canonical: "https://www.athenamea.com/faq",
  },
  openGraph: {
    title: "FAQ — ATHENA MEA Market Entry Advisory",
    description:
      "Answers to common questions about expanding your business into India, UAE, and the Middle East with ATHENA MEA.",
    url: "https://www.athenamea.com/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
