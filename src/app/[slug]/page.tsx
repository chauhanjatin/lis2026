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
  return { title: meta.title, description: meta.description };
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
    <SitePage slug={slug as PageSlug} hideHero={slug === "contact"}>
      <PageContent slug={slug as PageSlug} />
    </SitePage>
  );
}
