import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { serviceSlugs } from "@/data/serviceDetails";
import { caseStudiesList } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/company/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case-studies/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic service detail pages
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Dynamic work / case study detail pages
  const workRoutes: MetadataRoute.Sitemap = caseStudiesList.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
