import type { Metadata } from "next";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SkipLink } from "@/components/ui/SkipLink";
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
        <SmoothScroll>
          <SkipLink />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
