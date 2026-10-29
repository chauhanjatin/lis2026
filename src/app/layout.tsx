import type { Metadata } from "next";
import { Suspense } from "react";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SkipLink } from "@/components/ui/SkipLink";
import { PageLoader } from "@/components/ui/PageLoader";
import { fontVariables } from "./fonts";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Studio — UI/UX, Frontend & Backend Development",
  description:
    "A design & development studio helping startups and companies build products, SaaS, and web apps from scratch — grounded in UX research, with a conversion- and user-centric approach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
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
