import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const siteOrigin = `${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH || ""}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
