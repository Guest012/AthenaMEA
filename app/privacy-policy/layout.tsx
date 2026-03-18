import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the ATHENA MEA privacy policy. Learn how we collect, use, and protect your personal data when you use our market entry advisory and executive search services.",
  alternates: {
    canonical: "https://www.athenamea.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — ATHENA MEA",
    description:
      "How ATHENA Market Entry Advisors collects, uses, and protects your personal data.",
    url: "https://www.athenamea.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
