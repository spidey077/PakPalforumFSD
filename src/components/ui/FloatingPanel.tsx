import { X } from "lucide-react";
import type { ReactNode } from "react";

type FloatingPanelProps = {
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export function FloatingPanel({
  title,
  closeLabel,
  onClose,
  children,
  className = "w-[min(calc(100vw-2rem),20rem)]",
}: FloatingPanelProps) {
  return (
    <div
      className={`fixed bottom-24 right-4 z-[40] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-card sm:right-6 ${className}`}
      role="dialog"
      aria-labelledby="floating-panel-title"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 id="floating-panel-title" className="font-semibold text-[var(--color-text)]">
          {title}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1 text-[var(--color-text-muted)] hover:bg-white/5"
          aria-label={closeLabel}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      {children}
    </div>
  );
}
