import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { serviceDetails, serviceSlugs } from "@/data/serviceDetails";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return {};

  const pageUrl = `/services/${slug}/`;
  const image = service.heroImage || "/hero-uxdesign.png";

  return {
    title: `${service.title} Services`,
    description: service.subtitle,
    keywords: [
      service.title,
      ...service.tags,
      "Liberty Info Science",
      "Digital Product Agency",
      "Custom Software Development",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${service.title} Services | Liberty Info Science`,
      description: service.subtitle,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: service.heroImageAlt || service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services | Liberty Info Science`,
      description: service.subtitle,
      images: [image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.subtitle,
    provider: {
      "@type": "ProfessionalService",
      name: "Liberty Info Science",
      url: "https://libertyinfoscience.com",
    },
    serviceType: service.title,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.whatsIncludedTitle || "What's Included",
      itemListElement: service.whatsIncluded?.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <Header />
      <main id="main">
        <ServiceDetailPage service={service} />
      </main>
      <Footer />
    </>
  );
}
