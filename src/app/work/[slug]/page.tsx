import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { caseStudies, caseStudiesList } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudiesList.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return {
      title: "Case Study",
    };
  }

  const pageUrl = `/work/${slug}/`;
  const image = study.image || "/hero-uxdesign.png";
  const desc =
    study.projectDescription?.lead ||
    `${study.cardTitle} — UX/UI research and product engineering case study by Liberty Info Science.`;

  return {
    title: `${study.title} — Case Study`,
    description: desc,
    keywords: [
      study.title,
      ...(study.tags || []),
      "Case Study",
      "UI/UX Design",
      "Product Design",
      "Liberty Info Science",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${study.title} — Case Study | Liberty Info Science`,
      description: desc,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: study.cardTitle || study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Case Study | Liberty Info Science`,
      description: desc,
      images: [image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudyData = caseStudies[slug];

  if (!caseStudyData) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${caseStudyData.title} — Digital Product Case Study`,
    description:
      caseStudyData.projectDescription?.lead || caseStudyData.cardTitle,
    image: caseStudyData.image
      ? `https://libertyinfoscience.com${caseStudyData.image}`
      : "https://libertyinfoscience.com/hero-uxdesign.png",
    author: {
      "@type": "Organization",
      name: "Liberty Info Science",
      url: "https://libertyinfoscience.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Liberty Info Science",
      logo: {
        "@type": "ImageObject",
        url: "https://libertyinfoscience.com/lis-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://libertyinfoscience.com/work/${slug}/`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <Header />
      <main id="main">
        <CaseStudyView data={caseStudyData} />
      </main>
      <Footer />
    </>
  );
}
