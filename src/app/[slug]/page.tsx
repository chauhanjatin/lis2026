import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SitePage } from "@/components/layout/SitePage";
import { PageContent } from "@/components/pages/PageContent";
import {
  pageMeta,
  pageSlugs,
  type PageSlug,
} from "@/data/navigation";

export function generateStaticParams() {
  return pageSlugs
    .filter((slug) => slug !== "projects")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = pageMeta[slug as PageSlug];
  if (!meta) return {};

  const pageUrl = `/${slug}/`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: "/hero-uxdesign.png",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/hero-uxdesign.png"],
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!pageSlugs.includes(slug as PageSlug) || slug === "projects") {
    notFound();
  }

  return (
    <SitePage
      slug={slug as PageSlug}
      hideHero={slug === "contact" || slug === "services"}
    >
      <PageContent slug={slug as PageSlug} />
    </SitePage>
  );
}