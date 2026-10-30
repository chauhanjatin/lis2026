import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyGrid } from "@/components/case-study/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Studies — Proven Impact & Client Stories",
  description:
    "Explore how Liberty Info Science unifies platforms, eliminates UX friction, and drives high-velocity growth for enterprise and startup leaders.",
  alternates: {
    canonical: "/case-studies/",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-24 sm:pt-28 md:pt-32">
        <CaseStudyGrid />
      </main>
      <Footer />
    </>
  );
}
