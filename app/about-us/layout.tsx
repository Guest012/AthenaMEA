import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Mission & Capabilities",
  description:
    "Learn about ATHENA MEA, our mission to bridge global businesses with India and the Middle East, and our core capabilities in market entry, executive search, and consulting.",
  alternates: {
    canonical: "https://www.athenamea.com/about-us",
  },
  openGraph: {
    title: "About ATHENA MEA — Market Entry Advisors",
    description:
      "Learn about ATHENA MEA and our capabilities in market entry strategy, executive search, and operational consulting for India, UAE, and the Middle East.",
    url: "https://www.athenamea.com/about-us",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
