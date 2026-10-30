import type { Metadata } from "next";
import { SitePage } from "@/components/layout/SitePage";
import { PageContent } from "@/components/pages/PageContent";
import { pageMeta } from "@/data/navigation";

export const metadata: Metadata = {
  title: pageMeta.projects.title,
  description: pageMeta.projects.description,
  alternates: {
    canonical: "/projects/",
  },
  openGraph: {
    title: pageMeta.projects.title,
    description: pageMeta.projects.description,
    url: "/projects/",
    type: "website",
    images: [
      {
        url: "/hero-uxdesign.png",
        width: 1200,
        height: 630,
        alt: pageMeta.projects.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.projects.title,
    description: pageMeta.projects.description,
    images: ["/hero-uxdesign.png"],
  },
};

export default function ProjectsPage() {
  return (
    <SitePage slug="projects">
      <PageContent slug="projects" />
    </SitePage>
  );
}
