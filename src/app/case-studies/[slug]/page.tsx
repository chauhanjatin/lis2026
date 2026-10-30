import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import {
  caseStudies,
  caseStudiesList,
  defaultCaseStudy,
} from "@/data/caseStudies";

export function generateStaticParams() {
  const allSlugs = Array.from(
    new Set([
      ...caseStudiesList.map((study) => study.slug),
      "wifter",
      "ai-scheduling",
    ]),
  );
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug] || defaultCaseStudy;
  const canonicalUrl = `/work/${slug}/`;
  const image = study.image || "/hero-uxdesign.png";
  const desc =
    study.projectDescription?.lead ||
    `${study.cardTitle} — UX/UI research and product engineering case study by Liberty Info Science.`;

  return {
    title: `${study.title} — Case Study`,
    description: desc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${study.title} — Case Study | Liberty Info Science`,
      description: desc,
      url: canonicalUrl,
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

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!caseStudies[slug]) {
    notFound();
  }

  const caseStudyData = caseStudies[slug];

  return (
    <>
      <Header />
      <main id="main">
        <CaseStudyView data={caseStudyData} />
      </main>
      <Footer />
    </>
  );
}
