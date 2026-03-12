import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono, Pacifico } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import GoogleAnalytics from "../components/GoogleAnalytics";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const siteUrl = "https://www.athenamea.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATHENA MEA — Market Entry Advisors for India & Middle East",
    template: "%s | ATHENA MEA",
  },
  description: "Market entry advisory, executive search and consulting for global businesses expanding into India, UAE and the Middle East.",
  keywords: ["market entry advisory", "India market entry", "UAE market entry", "Middle East consulting", "executive search India", "executive search UAE", "business expansion India", "business expansion Middle East", "ATHENA MEA", "market entry strategy"],
  authors: [{ name: "ATHENA Market Entry Advisors" }],
  creator: "ATHENA Market Entry Advisors",
  publisher: "ATHENA Market Entry Advisors",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ATHENA MEA",
    title: "ATHENA MEA — Market Entry Advisors for India & Middle East",
    description: "Strategic market entry advisory, executive search and consulting for global businesses expanding into India, UAE and the Middle East.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ATHENA MEA — Market Entry Advisors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATHENA MEA — Market Entry Advisors for India & Middle East",
    description: "Strategic market entry advisory, executive search and consulting for global businesses expanding into India, UAE and the Middle East.",
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "llms": "/llms.txt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="llms" href="/llms.txt" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${pacifico.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-brand-400 focus:text-midnight-900 focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold">
          Skip to main content
        </a>
        <header role="banner">
          <Navbar />
        </header>
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
