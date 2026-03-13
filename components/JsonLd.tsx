export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.athenamea.com/#organization",
    name: "ATHENA Market Entry Advisors",
    alternateName: "ATHENA MEA",
    url: "https://www.athenamea.com",
    logo: "https://www.athenamea.com/athena-logo-full.png",
    image: "https://www.athenamea.com/og-image.png",
    description:
      "Strategic market entry advisory, executive search and consulting for global businesses expanding into India, UAE and the Middle East.",
    email: "info@athenamea.com",
    telephone: ["+91-9810268983", "+971-556447099"],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    serviceType: [
      "Market Entry Advisors",
      "Executive Search",
      "HR Due Diligence",
      "Business Operations Setup",
      "Market Intelligence",
      "Sales Enablement",
    ],
    sameAs: [
      "https://www.linkedin.com/company/athena-market-entry-advisors/",
      "https://www.facebook.com/profile.php?id=61582308998462",
      "https://www.instagram.com/info.athenamea",
      "https://x.com/AthenameaInfo",
      "https://www.youtube.com/@AthenaMEA",
    ],
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: [
      "Market Entry Strategy",
      "India Business Expansion",
      "UAE Business Expansion",
      "Middle East Market Entry",
      "Executive Recruitment",
      "Cross-border Consulting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.athenamea.com/#website",
    name: "ATHENA MEA",
    url: "https://www.athenamea.com",
    publisher: {
      "@id": "https://www.athenamea.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.athenamea.com/faq?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQPageJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@id": "https://www.athenamea.com/#organization",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
