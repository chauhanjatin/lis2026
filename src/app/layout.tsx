import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SkipLink } from "@/components/ui/SkipLink";
import { PageLoader } from "@/components/ui/PageLoader";
import { SITE_URL, siteMetadata, organizationJsonLd } from "@/lib/seo";
import { fontVariables } from "./fonts";
import "lenis/dist/lenis.css";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0D4FB8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author.name, url: siteMetadata.author.url }],
  creator: siteMetadata.publisher,
  publisher: siteMetadata.publisher,
  applicationName: "Liberty Info Science",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    url: SITE_URL,
    siteName: "Liberty Info Science",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Liberty Info Science — Digital Product Design & Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        <SmoothScroll>
          <SkipLink />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
