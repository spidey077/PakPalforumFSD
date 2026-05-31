"use client";

import type { ReactNode } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { cn } from "@/lib/cn";

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
};

export function RevealItem({
  children,
  className,
  delayMs = 0,
  threshold = 0.12,
  rootMargin,
}: RevealItemProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      style={{ ["--reveal-delay" as never]: `${delayMs}ms` }}
      className={cn("reveal-item", isVisible && "reveal-item--visible", className)}
    >
      {children}
    </div>
  );
}