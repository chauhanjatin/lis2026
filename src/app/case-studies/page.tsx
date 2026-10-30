import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CaseStudyGrid } from "@/components/case-study/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Studies — Proven Impact & Client Stories",
  description:
    "Explore how Liberty Info Science unifies digital platforms, eliminates UX friction, and drives high-velocity growth for enterprise and startup leaders.",
  alternates: {
    canonical: "/case-studies/",
  },
  openGraph: {
    title: "Case Studies — Proven Impact & Client Stories | Liberty Info Science",
    description:
      "Explore how Liberty Info Science unifies digital platforms, eliminates UX friction, and drives high-velocity growth for enterprise and startup leaders.",
    url: "/case-studies/",
    type: "website",
    images: [
      {
        url: "/hero-uxdesign.png",
        width: 1200,
        height: 630,
        alt: "Liberty Info Science Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Proven Impact & Client Stories | Liberty Info Science",
    description:
      "Explore how Liberty Info Science unifies digital platforms, eliminates UX friction, and drives high-velocity growth for enterprise and startup leaders.",
    images: ["/hero-uxdesign.png"],
  },
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
