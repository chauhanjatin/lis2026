import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Image } from "@/components/ui/Image";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <>
      {/* ============ WORK — START ============ */}
      <Section id="work">
        <Eyebrow>Selected work</Eyebrow>
        <Heading size="lg" className="max-w-2xl">
          Products we&apos;ve taken from research to launch.
        </Heading>
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="overflow-hidden bg-surface border border-border">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {project.category}
              </p>
              <h3 className="mt-2 font-sans font-medium text-lg text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {project.summary}
              </p>
            </a>
          ))}
        </div>
      </Section>
      {/* ============ WORK — END ============ */}
    </>
  );
}