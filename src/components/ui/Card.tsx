import { cn } from "@/components/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group bg-surface border border-border p-6 transition-colors hover:border-primary/50",
        className
      )}
    >
      {children}
    </div>
  );
}
