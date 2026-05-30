import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

type HighlightListProps = {
  items: string[];
  variant?: "default" | "impact";
};

export function HighlightList({ items, variant = "default" }: HighlightListProps) {
  const isImpact = variant === "impact";

  return (
    <ul
      className={cn(
        "flex flex-col gap-3.5 sm:gap-4",
        isImpact && "relative mx-auto max-w-3xl px-2",
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3",
            isImpact ? "text-sm leading-relaxed text-white/80 sm:text-base" : "text-left",
          )}
        >
          <Check
            className={cn(
              "shrink-0",
              isImpact
                ? "mt-0.5 h-4 w-4 text-[var(--color-label-red)]"
                : "mt-0.5 h-5 w-5 text-[var(--color-accent)]",
            )}
            aria-hidden
          />
          {isImpact ? (
            <span>{item}</span>
          ) : (
            <p className="min-w-0 flex-1 text-pretty text-sm text-[var(--color-text-muted)] sm:text-base">
              {item}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
