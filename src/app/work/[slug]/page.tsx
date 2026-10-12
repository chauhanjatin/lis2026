import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { UniqLearnDetail } from "@/components/case-study/UniqLearnDetail";
import { LearnBudDetail } from "@/components/case-study/LearnBudDetail";
import { projects } from "@/data/projects";
import { caseStudies, caseStudiesList, defaultCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  const projectSlugs = projects.map((project) => project.slug);
  const caseStudySlugs = caseStudiesList.map((study) => study.slug);
  const allSlugs = Array.from(new Set([...projectSlugs, ...caseStudySlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "uniqlearn") {
    return {
      title: "UniqLearn — Case Study | Design Studio",
      description: "UniqLearn is a web-based classroom management platform connecting teachers and students.",
    };
  }
  if (slug === "learnbud-ai") {
    return {
      title: "LearnBud AI — Case Study | Design Studio",
      description: "LearnBud AI is a mobile learning companion that connects students with live, AI-powered tutors.",
    };
  }
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

  if (slug !== "uniqlearn" && slug !== "learnbud-ai" && !project && !caseStudies[slug]) {
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
        {slug === "uniqlearn" ? (
          <UniqLearnDetail />
        ) : slug === "learnbud-ai" ? (
          <LearnBudDetail />
        ) : (
          <CaseStudyView data={caseStudyData} />
        )}
      </main>
      <Footer />
    </>
  );
}
