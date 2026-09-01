import { cn } from "@/components/lib/cn";

type SectionHeroProps = {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
};

export function SectionHero({
  eyebrow,
  children,
  className,
  align = "center",
  as: Tag = "h1",
}: SectionHeroProps) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]"
        />
        {eyebrow}
      </p>
      <Tag className="mt-7 font-Sora text-balance text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-[#151618] sm:text-6xl md:text-7xl">
        {children}
      </Tag>
    </div>
  );
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
      {children}
    </span>
  );
}
