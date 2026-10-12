import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { UniqLearnDetail } from "@/components/case-study/UniqLearnDetail";
import { LearnBudDetail } from "@/components/case-study/LearnBudDetail";
import { caseStudies, caseStudiesList, defaultCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudiesList.map((study) => ({ slug: study.slug }));
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

  if (slug !== "uniqlearn" && slug !== "learnbud-ai" && !caseStudies[slug]) {
    notFound();
  }

  const caseStudyData = caseStudies[slug] || {
    ...defaultCaseStudy,
    slug,
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
