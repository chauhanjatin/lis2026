import type { NextConfig } from "next";

// basePath is configured for cPanel subpath: https://libertyinfoscience.com/projects/newlis2026
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/projects/newlis2026" : "");

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
