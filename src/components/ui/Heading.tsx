import { cn } from "@/components/lib/cn";

export function Heading({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  className?: string;
  children: React.ReactNode;
}) {
  const sizes = {
    xl: "text-5xl sm:text-6xl md:text-7xl",
    lg: "text-5xl sm:text-6xl md:text-7xl",
    md: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
  };
  return (
    <Tag
      className={cn(
        "font-Sora font-medium leading-[1.02] tracking-[-0.055em] text-foreground",
        sizes[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
