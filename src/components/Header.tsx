"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useState, type MouseEvent } from "react";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
import { IMAGES } from "@/constants/images";
import { NAV_ITEMS, SECTION_IDS } from "@/constants/navigation";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/LanguageProvider";

const desktopNavButtonClass =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-sm font-semibold leading-none transition-all duration-300 hover:-translate-y-px hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

const mobileNavButtonClass =
  "rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-3 py-3.5 text-left text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-px hover:border-[var(--color-accent)] hover:bg-white/[0.06]";

export function Header() {
  const { t, lang, toggleLang, dir } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useHeaderScroll();
  const scrollToSection = useScrollToSection();

  const navigateToSection = useCallback(
    (sectionId: string) => {
      setMenuOpen(false);
      scrollToSection(sectionId);
    },
    [scrollToSection],
  );

  const handleLogoClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigateToSection(SECTION_IDS.hero);
    },
    [navigateToSection],
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-[var(--color-bg)]/92 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/65 via-black/30 to-transparent",
      )}
    >
      <div
        className={cn(
          "grid min-h-[3.5rem] w-full items-center gap-y-3 px-3 py-2 transition-all duration-500 sm:px-4 lg:grid-cols-[minmax(15rem,1.1fr)_minmax(0,2.5fr)_minmax(13rem,1fr)] lg:gap-x-8 lg:px-6 lg:py-3 xl:grid-cols-[minmax(16rem,1fr)_minmax(0,2.8fr)_minmax(13.5rem,1fr)] xl:gap-x-12 xl:px-8",
        )}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3 lg:justify-self-start"
          onClick={handleLogoClick}
        >
          <Image
            src={IMAGES.logoTransparent}
            alt={t.siteName}
            width={120}
            height={40}
            className="h-9 w-auto shrink-0 object-contain transition-transform duration-300 sm:h-10 hover:scale-[1.02]"
            priority
          />
          <span
            className={cn(
              "hidden min-w-0 flex-col leading-tight md:flex",
              scrolled ? "text-[var(--color-text)]" : "text-white",
            )}
          >
            <span className="truncate text-[10px] font-medium uppercase tracking-wider opacity-80">
              {t.siteName}
            </span>
            <span className="truncate text-sm font-bold text-[var(--color-accent)]">
              {t.chapterName}
            </span>
          </span>
        </Link>

        <nav
          className="nav-scroll hidden min-w-0 items-center justify-center gap-2 overflow-x-auto pb-1 lg:flex lg:justify-self-center lg:gap-2.5 xl:gap-3"
          aria-label="Main"
        >
          {NAV_ITEMS.map(({ id, key }) => (
            <button
              key={id}
              type="button"
              onClick={() => navigateToSection(id)}
              className={cn(
                desktopNavButtonClass,
                scrolled
                  ? "text-[var(--color-text)] hover:bg-white/[0.04]"
                  : "text-white hover:bg-white/10",
              )}
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2 lg:justify-self-end">
          <ExternalAnchor
            href={t.contact.volunteer.formUrl}
            className={cn(
              "hidden min-w-[7rem] justify-center px-4 py-2.5 text-sm shadow-sm transition-all duration-300 hover:-translate-y-px sm:inline-flex",
              scrolled
                ? "border-[var(--color-label-red)] bg-[var(--color-label-red)] text-white hover:bg-[var(--color-cta)] hover:border-[var(--color-cta)]"
                : "border-[var(--color-label-red)] bg-[var(--color-label-red)] text-white shadow-[0_10px_24px_rgba(255,31,34,0.28)] hover:bg-[var(--color-cta)] hover:border-[var(--color-cta)]",
            )}
            showIcon={false}
          >
            {t.cta.join}
          </ExternalAnchor>
          <button
            type="button"
            className={cn(
              "inline-flex shrink-0 rounded-full border p-2.5 transition-all duration-300 hover:-translate-y-px lg:hidden",
              scrolled
                ? "border-[var(--color-border-soft)] bg-white/[0.03] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:bg-white/[0.06]"
                : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
            )}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[3.75rem] z-40 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-black/35 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        />
        <div
          id="mobile-nav"
          dir={dir}
          className={cn(
            "absolute inset-x-0 top-0 max-h-[calc(100dvh-3.75rem)] overflow-y-auto border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.32)] transition-all duration-300 ease-out",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          )}
        >
          <p className="mb-3 text-center text-sm font-bold text-[var(--color-accent)]">
            {t.chapterName}
          </p>
          <div className="mx-auto grid w-full min-w-0 max-w-lg grid-cols-2 gap-3">
            {NAV_ITEMS.map(({ id, key }) => (
              <button
                key={id}
                type="button"
                onClick={() => navigateToSection(id)}
                className={mobileNavButtonClass}
              >
                {t.nav[key]}
              </button>
            ))}
          </div>
          <div className="mx-auto mt-4 flex w-full min-w-0 max-w-lg flex-col items-center gap-3 border-t border-[var(--color-border)] pt-4">
            <div className="flex w-full justify-center gap-3">
              <button type="button" onClick={toggleLang} className="btn-outline text-base font-semibold">
                {lang === "en" ? "اردو" : "EN"}
              </button>
              <ExternalAnchor href={t.contact.volunteer.formUrl} className="btn-cta text-base" showIcon={false}>
                {t.cta.join}
              </ExternalAnchor>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
