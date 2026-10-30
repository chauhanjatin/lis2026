export const SITE_URL = "https://libertyinfoscience.com";

export const siteMetadata = {
  title: {
    default: "Liberty Info Science — Digital Product Design & Engineering Studio",
    template: "%s | Liberty Info Science",
  },
  description:
    "Liberty Info Science is an elite digital product studio specializing in UI/UX design, custom web development, mobile applications, and enterprise digital transformation for ambitious brands and startups worldwide.",
  siteUrl: SITE_URL,
  keywords: [
    "Liberty Info Science",
    "UI/UX Design Studio",
    "Product Design Agency",
    "Web Development Company",
    "Mobile App Development",
    "React Next.js Developers",
    "Figma UI/UX Designers",
    "Design Systems",
    "SaaS Product Design",
    "Digital Transformation",
    "Enterprise Web Apps",
    "Frontend Engineering",
    "Backend Development",
    "Surat Design Agency",
    "Gujarat Web Developers",
  ],
  author: {
    name: "Liberty Info Science",
    url: SITE_URL,
  },
  publisher: "Liberty Info Science",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/libertyinfoscience/",
    dribbble: "https://dribbble.com/libertyinfoscience",
    behance: "https://www.behance.net/lisliberty",
    instagram: "https://www.instagram.com/libertyinfoscience/",
    facebook: "https://www.facebook.com/service.libertyinfoscience",
  },
  contact: {
    email: "info@libertyinfoscience.com",
    phone: "+917096364801",
    streetAddress: "424, Sumerru Business Corner, B/H Rajhans Multiplex, Pal Gam",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395009",
    addressCountry: "IN",
    latitude: 21.1895,
    longitude: 72.7844,
  },
  ogImage: `${SITE_URL}/hero-uxdesign.png`,
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Liberty Info Science",
      description: siteMetadata.description,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Liberty Info Science",
      alternateName: ["LIS", "Liberty Info Science Studio"],
      url: SITE_URL,
      logo: `${SITE_URL}/lis-logo.svg`,
      image: siteMetadata.ogImage,
      description: siteMetadata.description,
      email: siteMetadata.contact.email,
      telephone: siteMetadata.contact.phone,
      priceRange: "$$$",
      currenciesAccepted: "USD, EUR, GBP, INR",
      paymentAccepted: "Credit Card, Wire Transfer, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteMetadata.contact.streetAddress,
        addressLocality: siteMetadata.contact.addressLocality,
        addressRegion: siteMetadata.contact.addressRegion,
        postalCode: siteMetadata.contact.postalCode,
        addressCountry: siteMetadata.contact.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteMetadata.contact.latitude,
        longitude: siteMetadata.contact.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:30",
          closes: "18:30",
        },
      ],
      sameAs: [
        siteMetadata.socialLinks.linkedin,
        siteMetadata.socialLinks.dribbble,
        siteMetadata.socialLinks.behance,
        siteMetadata.socialLinks.instagram,
        siteMetadata.socialLinks.facebook,
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "82",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Design & Engineering Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description:
                "User research, wireframing, high-fidelity Figma prototyping, micro-interactions, and design systems.",
              url: `${SITE_URL}/services/ui-ux-design/`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description:
                "High-performance Next.js and React web applications, scalable headless CMS architectures, and responsive web systems.",
              url: `${SITE_URL}/services/web-development/`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile Development",
              description:
                "Cross-platform iOS and Android mobile applications built with React Native and modern native modules.",
              url: `${SITE_URL}/services/mobile-development/`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Services",
              description:
                "Digital product strategy, workflow automation, architectural consulting, and technology modernisation.",
              url: `${SITE_URL}/services/business-services/`,
            },
          },
        ],
      },
    },
  ],
};
