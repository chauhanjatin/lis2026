import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { caseStudies, caseStudiesList, defaultCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  const allSlugs = Array.from(new Set([...caseStudiesList.map((study) => study.slug), "wifter", "ai-scheduling"]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug] || defaultCaseStudy;
  return {
    title: `${study.title} — Case Study`,
    description: study.projectDescription.lead,
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
