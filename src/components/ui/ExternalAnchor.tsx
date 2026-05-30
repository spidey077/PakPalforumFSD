import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ExternalAnchorProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function ExternalAnchor({
  href,
  children,
  className,
  showIcon = true,
}: ExternalAnchorProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-1.5", className)}
    >
      {children}
      {showIcon && <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />}
    </a>
  );
}
