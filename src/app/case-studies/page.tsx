import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { defaultCaseStudy } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: `${defaultCaseStudy.title} — Case Study`,
  description: defaultCaseStudy.projectDescription.lead,
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CaseStudyView data={defaultCaseStudy} />
      </main>
      <Footer />
    </>
  );
}
