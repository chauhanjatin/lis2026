import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { serviceSlugs } from "@/data/serviceDetails";
import { caseStudiesList } from "@/data/caseStudies";

export const dynamic = "force-static";

const siteOrigin = `${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH || ""}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteOrigin}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteOrigin}/company/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteOrigin}/services/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteOrigin}/case-studies/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteOrigin}/projects/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteOrigin}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic service detail pages
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${siteOrigin}/services/${slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Dynamic work / case study detail pages
  const workRoutes: MetadataRoute.Sitemap = caseStudiesList.map((study) => ({
    url: `${siteOrigin}/work/${study.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
