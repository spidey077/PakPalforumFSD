"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Globe2, MapPin } from "lucide-react";
import { SECTION_IDS } from "@/constants/navigation";
import { useLanguage } from "@/context/LanguageProvider";
import { SocialLinkChips } from "@/components/ui/SocialLinkChips";
import { IMAGES } from "@/constants/images";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.awareness, href: `#${SECTION_IDS.awareness}` },
    { label: t.nav.protests, href: "#protests" },
    { label: t.nav.relief, href: "#relief" },
    { label: t.nav.social, href: "#social" },
    { label: t.nav.students, href: "#students" },
    { label: t.nav.boycott, href: "#boycott" },
    { label: t.nav.contact, href: `#${SECTION_IDS.contact}` },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/60 to-transparent" />
      <div className="wrap space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-sm">
                <Image
                  src={IMAGES.logo}
                  alt={t.siteName}
                  width={64}
                  height={23}
                  className="object-contain"
                  style={{ width: "auto", height: "23px" }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">{t.siteName}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{t.chapterName}</p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
              {t.footer.tagline} We coordinate awareness, relief, student work, and city-level
              solidarity from Faisalabad.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={t.mainSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/15"
              >
                <Globe2 className="h-4 w-4" aria-hidden />
                {t.mainSite.footerLink}
              </Link>
              <Link
                href={`#${SECTION_IDS.contact}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Contact chapter
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Quick links
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              {t.footer.socialTitle}
            </p>
            <SocialLinkChips links={t.contact.socialFaisalabad} variant="chapter" />
            <p className="max-w-sm text-sm leading-6 text-[var(--color-text-muted)]">
              Follow the chapter for updates, field photos, and campaign announcements.
            </p>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                <MapPin className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
                {t.chapterLocation}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.footer.rights}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.siteName}. {t.footer.rights}
          </p>
          <Link
            href={t.mainSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--color-accent)] hover:underline"
          >
            Explore other chapters
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  );
}
