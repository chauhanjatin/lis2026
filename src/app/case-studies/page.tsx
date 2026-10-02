import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyGrid } from "@/components/case-study/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Studies — Proven Impact & Client Stories",
  description:
    "Explore how our design studio unifies platforms, eliminates compliance violations, and drives high-velocity growth for enterprise and startup leaders.",
};

export default function CaseStudiesListingPage() {
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
