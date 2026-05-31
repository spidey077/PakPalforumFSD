"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
import { RevealItem } from "@/components/ui/RevealItem";

export function MainSiteBanner() {
  const { t } = useLanguage();

  return (
    <section className="hidden sm:block border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="wrap flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:py-5">
        <RevealItem className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            {t.mainSite.chapterLabel}
          </p>
          <p className="mt-1 max-w-xl text-sm text-[var(--color-text-muted)]">
            {t.mainSite.description}
          </p>
        </RevealItem>
        <RevealItem delayMs={140}>
          <ExternalAnchor href={t.mainSite.url} className="btn-outline shrink-0 text-sm">
            {t.mainSite.cta}
          </ExternalAnchor>
        </RevealItem>
      </div>
    </section>
  );
}
