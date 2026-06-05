"use client";

import { SECTION_IDS } from "@/constants/navigation";
import { toTelHref } from "@/lib/phone";
import { useLanguage } from "@/context/LanguageProvider";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
import { SocialLinkChips } from "@/components/ui/SocialLinkChips";
import { SectionHeading } from "./SectionHeading";
import { RevealItem } from "@/components/ui/RevealItem";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.contact} className="overflow-hidden bg-[var(--color-bg)] py-16 sm:py-20 md:py-24">
      <div className="wrap overflow-hidden">
        <RevealItem>
          <SectionHeading badge={t.nav.contact} title={t.contact.title} intro={t.contact.intro} />
        </RevealItem>

        <RevealItem delayMs={120} className="mt-10 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-5 sm:p-6 text-center sm:text-left">
          <h3 className="font-semibold text-[var(--color-text)]">{t.mainSite.cardTitle}</h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.mainSite.cardBody}</p>
          <ExternalAnchor href={t.mainSite.url} className="btn-cta mt-4 text-sm">
            {t.mainSite.cta}
          </ExternalAnchor>
        </RevealItem>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] mx-auto w-full max-w-5xl">
          {/* Donate card */}
          <RevealItem delayMs={180} className="min-w-0 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center sm:text-left break-words">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              {t.contact.donate.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t.contact.donate.body}
            </p>
            <div className="mt-5 flex justify-center sm:justify-start">
              <ExternalAnchor href={t.contact.donate.ctaUrl} className="btn-outline text-sm">
                {t.contact.donate.cta}
              </ExternalAnchor>
            </div>
            <div className="mt-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-4 text-sm">
              <p className="font-semibold text-[var(--color-text)]">{t.contact.donate.contactName}</p>
              <p className="mt-1 text-[var(--color-text-muted)]">{t.contact.donate.contactRole}</p>
              <a
                href={toTelHref(t.contact.donate.contactPhone)}
                className="mt-2 inline-flex text-[var(--color-accent)] hover:underline"
              >
                {t.contact.donate.contactPhone}
              </a>
            </div>
          </RevealItem>

          {/* Right column - phone, socials */}
          <div className="min-w-0 space-y-6 text-center sm:text-left break-words">
            <RevealItem delayMs={240} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-sm text-[var(--color-text-muted)]">{t.contact.chapterPhone.label}</p>
              <a
                href={toTelHref(t.contact.chapterPhone.value)}
                className="mt-1 block text-lg font-semibold text-[var(--color-accent)] hover:underline"
              >
                {t.contact.chapterPhone.value}
              </a>
              <p className="mt-2 text-xs text-[var(--color-text-muted)]">{t.chapterLocation}</p>
            </RevealItem>

            <RevealItem delayMs={300} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="mb-3 text-sm font-semibold text-[var(--color-text)]">
                {t.contact.socialTitle}
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <SocialLinkChips links={t.contact.socialFaisalabad} variant="chapter" mode="icons" />
              </div>
            </RevealItem>

            <RevealItem delayMs={360} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="mb-3 text-sm font-semibold text-[var(--color-text-muted)]">
                {t.contact.socialNationalTitle}
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <SocialLinkChips links={t.contact.socialNational} variant="national" mode="icons" />
              </div>
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  );
}
