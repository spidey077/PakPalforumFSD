type SectionHeadingProps = {
  badge: string;
  title: string;
  intro?: string;
  badgeColor?: "accent" | "red";
  dark?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  badge,
  title,
  intro,
  badgeColor = "accent",
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  const lineColor =
    badgeColor === "red" ? "bg-[var(--color-label-red)]/75" : "bg-[var(--color-accent)]";
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      <div
        className={`mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <span className={`h-px w-6 sm:w-8 ${lineColor}`} />
        <span
          className={`font-display text-xs font-semibold uppercase tracking-[0.25em] ${
            badgeColor === "red"
              ? "text-[var(--color-label-red)]"
              : "text-[var(--color-accent)]"
          }`}
        >
          {badge}
        </span>
        <span className={`h-px w-6 sm:w-8 ${lineColor}`} />
      </div>
      <h2
        className={`font-display text-balance text-3xl font-semibold md:text-4xl ${
          dark ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-3 max-w-2xl text-pretty text-base sm:text-lg ${
            centered ? "mx-auto px-1 sm:px-0" : ""
          } ${dark ? "text-white/70" : "text-[var(--color-text-muted)]"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
