import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Client Success Stories",
  description:
    "Explore how ATHENA MEA has helped global brands like Grupo Bimbo, UnitedHealth Group, Sophos, and SYSTRA successfully enter the Indian and Middle Eastern markets.",
  alternates: {
    canonical: "https://www.athenamea.com/case-studies",
  },
  openGraph: {
    title: "Case Studies — ATHENA MEA Client Success Stories",
    description:
      "See how global companies have expanded into India and the Middle East with ATHENA MEA advisory.",
    url: "https://www.athenamea.com/case-studies",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
