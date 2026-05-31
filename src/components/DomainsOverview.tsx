"use client";

import {
  BookOpen,
  GraduationCap,
  HandHeart,
  Heart,
  Megaphone,
  Share2,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { DomainId } from "@/data/domains";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useLanguage } from "@/context/LanguageProvider";

const DOMAIN_ICONS: Record<DomainId, LucideIcon> = {
  awareness: BookOpen,
  protests: Megaphone,
  relief: Heart,
  adoption: HandHeart,
  social: Share2,
  students: GraduationCap,
  boycott: ShoppingBag,
};

export function DomainsOverview() {
  const { lang, t } = useLanguage();
  const overview =
    lang === "en"
      ? {
          label: "Our work",
          title: "Seven ways Faisalabad acts for Palestine",
          intro:
            "From awareness and relief to students, boycott work, and social campaigns, these are the chapter's core focus areas.",
          youthNote: "Youth-led across the city · part of Pak Palestine Forum Faisalabad",
        }
      : {
          label: "ہمارا کام",
          title: "فلسطین کے لیے فیصل آباد کے سات شعبے",
          intro:
            "آگاہی، امداد، طلبہ، بائیکاٹ اور سوشل مہمات — یہی چیپٹر کے بنیادی شعبے ہیں۔",
          youthNote: "شہر بھر میں نوجوانوں کی قیادت · پاک فلسطین فورم فیصل آباد کا حصہ",
        };
  const scrollToSection = useScrollToSection();

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-12 sm:py-16">
      <div className="wrap">
        <div className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            {overview.label}
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
            {overview.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--color-text-muted)] sm:text-base">
            {overview.intro}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.domains.map((domain) => {
            const Icon = DOMAIN_ICONS[domain.id];
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => scrollToSection(domain.id)}
                className="group flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-left transition hover:border-[var(--color-accent)] hover:bg-[var(--color-card)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 text-sm font-semibold leading-snug text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
                  {domain.navLabel}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[var(--color-text-muted)]">
          <Users className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
          {overview.youthNote}
        </p>
      </div>
    </section>
  );
}
