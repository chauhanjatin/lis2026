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
      title: "Case Study — Design Studio",
    };
  }

  return {
    title: `${study.title} — Case Study`,
    description: study.projectDescription.lead,
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
