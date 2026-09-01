import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ContactSection } from "@/components/sections/ContactSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Container } from "@/components/ui/Container";
import type { PageSlug } from "@/data/navigation";

const openings = [
  {
    title: "Senior Product Designer",
    type: "Full-time · Remote",
    description:
      "Lead discovery and design for client products from research through high-fidelity UI.",
  },
  {
    title: "Frontend Engineer",
    type: "Full-time · Hybrid",
    description:
      "Build performant, accessible interfaces with React and modern tooling.",
  },
  {
    title: "UX Researcher",
    type: "Contract · Remote",
    description:
      "Plan and run studies that turn user insights into actionable product direction.",
  },
] as const;

export function PageContent({ slug }: { slug: PageSlug }) {
  switch (slug) {
    case "company":
      return <About hideHeader />;
    case "services":
      return <Services hideHeader />;
    case "career":
      return (
        <Container className="pb-16 md:pb-20">
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openings.map((role) => (
              <li
                key={role.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h2 className="font-Sora text-xl font-medium tracking-[-0.03em] text-[#151618]">
                  {role.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-[#0D4FB8]">
                  {role.type}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#606468]">
                  {role.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <a
              href="mailto:careers@designstudio.com"
              className="inline-flex rounded-full bg-[#101116] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Send your CV
            </a>
          </div>
        </Container>
      );
    case "contact":
      return <ContactSection />;
    case "projects":
      return <PortfolioSection />;
  }
}