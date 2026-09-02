import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SkipLink } from "@/components/ui/SkipLink";
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <SkipLink />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}