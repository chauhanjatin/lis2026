import type { NextConfig } from "next";

// basePath is configured for cPanel subpath when running scripts/export.js.
// On Vercel, Netlify, or default root hosting, basePath must be empty ("") so the root domain does not 404.
const isVercel = Boolean(process.env.VERCEL);
const basePath = isVercel ? "" : (process.env.NEXT_PUBLIC_BASE_PATH || "");

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  trailingSlash: true,
  output: isExport ? "export" : undefined,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons", "lenis"],
  },
};

export default nextConfig;
