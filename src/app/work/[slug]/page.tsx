import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { projects } from "@/data/projects";
import { caseStudies, defaultCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies[slug] || defaultCaseStudy;

  if (!project && !caseStudies[slug]) {
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
  const project = projects.find((p) => p.slug === slug);

  if (!project && !caseStudies[slug]) {
    notFound();
  }

  const caseStudyData = caseStudies[slug] || {
    ...defaultCaseStudy,
    slug,
    title: project ? project.title : defaultCaseStudy.title,
    eyebrow: project ? project.category.toUpperCase() : defaultCaseStudy.eyebrow,
  };

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

