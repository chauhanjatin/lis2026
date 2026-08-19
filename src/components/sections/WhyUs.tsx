import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

const reasons = [
  {
    title: "Research before pixels",
    description:
      "Every engagement starts with understanding your users, not a template. Decisions trace back to evidence, not taste.",
  },
  {
    title: "One team, full stack",
    description:
      "Design, frontend, and backend under one roof means no handoff gaps and no finger-pointing when something needs to change.",
  },
  {
    title: "Built from scratch, built to last",
    description:
      "We take products from zero to launch — architecture and design decisions made for where you're headed, not just where you are.",
  },
];

export function WhyUs() {
  return (
    <>
      {/* ============ WHY-US — START ============ */}
      <Section id="why-us">
        <Eyebrow>Why teams choose us</Eyebrow>
        <Heading size="lg" className="max-w-2xl">
          Conversion- and user-centric, by design.
        </Heading>
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-sans font-medium text-lg text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
      {/* ============ WHY-US — END ============ */}
    </>
  );
}
