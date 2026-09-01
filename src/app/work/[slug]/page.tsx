import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHero } from "@/components/ui/SectionHero";
import { Image } from "@/components/ui/Image";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main id="main">
        {/* ============ CASE-STUDY — START ============ */}
        <Section id="case-study" divider={false} className="pt-32 md:pt-40">
          <SectionHero eyebrow={project.category} align="left">
            {project.title}
          </SectionHero>
          <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            {project.summary}
          </p>
          <div className="mt-10 overflow-hidden bg-surface border border-border">
            <Image
              src={project.image}
              alt={project.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Section>
        {/* ============ CASE-STUDY — END ============ */}
      </main>
      <Footer />
    </>
  );
}
