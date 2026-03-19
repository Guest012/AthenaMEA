import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono, Pacifico } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "../components/Navbar";
import GoogleAnalytics from "../components/GoogleAnalytics";

const GTM_ID = "GTM-PGMLKJBM";

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
        <link rel="llms-full" href="/llms-full.txt" />
        {/* Organization + WebSite JSON-LD for rich results and AI citations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.athenamea.com/#organization",
                  "name": "ATHENA MEA",
                  "alternateName": "ATHENA Market Entry Advisors",
                  "url": "https://www.athenamea.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.athenamea.com/athena-logo-full.webp",
                    "width": 600,
                    "height": 120
                  },
                  "image": "https://www.athenamea.com/og-image.png",
                  "description": "ATHENA MEA is the specialist advisory firm for global businesses expanding into India, UAE, and the Middle East. We provide market entry strategy, executive search, compensation benchmarking, competitive intelligence, HR due diligence, and strategic consulting.",
                  "foundingDate": "2020",
                  "numberOfEmployees": {
                    "@type": "QuantitativeValue",
                    "minValue": 10,
                    "maxValue": 50
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "Saudi Arabia" },
                    { "@type": "Country", "name": "Oman" },
                    { "@type": "Country", "name": "Bahrain" },
                    { "@type": "Country", "name": "Kuwait" },
                    { "@type": "Country", "name": "Qatar" }
                  ],
                  "address": [
                    {
                      "@type": "PostalAddress",
                      "streetAddress": "Unit 407, 4th Floor, Tapasya One, Golf Course Road, Sector 53",
                      "addressLocality": "Gurugram",
                      "addressRegion": "Haryana",
                      "postalCode": "122003",
                      "addressCountry": "IN"
                    },
                    {
                      "@type": "PostalAddress",
                      "addressLocality": "Dubai",
                      "addressCountry": "AE"
                    }
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-9810268983",
                      "contactType": "sales",
                      "areaServed": "IN",
                      "availableLanguage": ["English", "Hindi"]
                    },
                    {
                      "@type": "ContactPoint",
                      "telephone": "+971-556447099",
                      "contactType": "sales",
                      "areaServed": "AE",
                      "availableLanguage": ["English"]
                    }
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/company/athena-market-entry-advisors/",
                    "https://www.facebook.com/profile.php?id=61582308998462",
                    "https://www.instagram.com/athenamea.co",
                    "https://x.com/AthenameaInfo",
                    "https://www.youtube.com/@AthenaMEA"
                  ],
                  "knowsAbout": [
                    "Market Entry Strategy",
                    "Executive Search",
                    "Compensation Benchmarking",
                    "Competitive Intelligence",
                    "HR Due Diligence",
                    "India Business Setup",
                    "UAE Free Zone",
                    "Saudi Arabia MISA Licensing",
                    "Cross-Border Business Expansion",
                    "Talent Acquisition India Middle East"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "ATHENA MEA Advisory Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Market Entry Strategy",
                          "description": "End-to-end market entry planning for India, UAE, Saudi Arabia, and the GCC. Includes market sizing, feasibility studies, regulatory analysis, entity structuring, and go-to-market roadmaps.",
                          "url": "https://www.athenamea.com/services/market-entry-strategy"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Executive Search & Talent Discovery",
                          "description": "C-suite and senior leadership hiring across India, UAE, and Saudi Arabia. Specializing in Country Managers, Managing Directors, VPs, and functional heads for market entry.",
                          "url": "https://www.athenamea.com/services/talent-discovery"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Compensation Benchmarking",
                          "description": "Data-driven salary benchmarking and total compensation analysis for India, UAE, and Saudi Arabia covering 500+ roles across 12 industries.",
                          "url": "https://www.athenamea.com/services/compensation-benchmarking"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Competitive Intelligence",
                          "description": "Market intelligence, competitor analysis, SWOT analysis, and opportunity mapping across 12+ industries in India and the Middle East.",
                          "url": "https://www.athenamea.com/services/competitive-intelligence"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "HR Due Diligence",
                          "description": "People-focused due diligence for M&A and JVs in India and the Middle East, covering workforce assessment, culture audits, and post-merger integration.",
                          "url": "https://www.athenamea.com/services/hr-due-diligence"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Strategic Consulting",
                          "description": "Operational advisory for cross-border expansion including partnership facilitation, office setup, compliance, and ongoing strategic advisory.",
                          "url": "https://www.athenamea.com/services/strategic-consulting"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.athenamea.com/#website",
                  "url": "https://www.athenamea.com",
                  "name": "ATHENA MEA",
                  "description": "Market entry advisory, executive search and consulting for India, UAE and the Middle East",
                  "publisher": { "@id": "https://www.athenamea.com/#organization" },
                  "inLanguage": "en-US"
                }
              ]
            })
          }}
        />
        <GoogleAnalytics />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${pacifico.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            className="hidden invisible"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
