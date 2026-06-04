"use client";

import Image from "next/image";
import type { DomainContent } from "@/data/domains";
import { cn } from "@/lib/cn";
import { Heart, Share2 } from "lucide-react";
import { InstagramPostSlider } from "@/components/ui/InstagramPostSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealItem } from "@/components/ui/RevealItem";

type LayoutProps = {
  domain: DomainContent;
};

const BENTO_ACCENTS = [
  "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10",
  "border-[var(--color-border)] bg-[var(--color-surface)]",
  "border-emerald-500/30 bg-emerald-500/10",
  "border-amber-500/30 bg-amber-500/10",
  "border-sky-500/30 bg-sky-500/10",
];

/** 03 — Relief pipeline cards without a hero image */
export function ReliefLayout({ domain }: LayoutProps) {
  const [first, second, ...rest] = domain.highlights;

  return (
    <section
      id={domain.id}
      className="relative overflow-hidden bg-[var(--color-bg-elevated)] py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255,31,34,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(255,71,74,0.12), transparent 28%)",
        }}
      />

      <div className="wrap relative">
        <RevealItem className="max-w-3xl">
          <SectionHeading
            badge={domain.badge}
            title={domain.title}
            intro={domain.intro}
            badgeColor="red"
            align="left"
          />
        </RevealItem>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <RevealItem delayMs={120} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="min-w-0">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Relief workflow
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-[var(--color-text)] sm:text-xl">
                {first}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                { label: "Collect", value: "Neighbourhood drives and Friday collections" },
                { label: "Route", value: "Verified national relief pipeline" },
                { label: "Deliver", value: "Partner-led on-ground distribution" },
              ].map((item, index) => (
                <RevealItem
                  key={item.label}
                  delayMs={180 + index * 70}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/55 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-label-red)]/12 text-sm font-bold text-[var(--color-label-red)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{item.value}</p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </RevealItem>

          <div className="grid gap-4 sm:grid-cols-2">
            <RevealItem delayMs={120} className="reveal-item relative">
              <div className="relative mx-auto inline-block overflow-hidden rounded-2xl border-2 border-[var(--color-accent)]/30 shadow-[0_24px_80px_rgba(255,71,74,0.15)]">
                <img
                  src={Array.isArray(domain.image) ? domain.image[0] : domain.image}
                  alt={domain.imageAlt}
                  className="block max-w-full h-auto object-contain bg-[var(--color-bg)]"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div
                className="pointer-events-none absolute -left-4 top-8 hidden h-24 w-24 rounded-full border border-[var(--color-accent)]/20 lg:block"
                aria-hidden
              />
            </RevealItem>

            {[second, ...rest].map((item, i) => (
              <RevealItem
                key={item}
                delayMs={180 + i * 70}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 shadow-card transition hover:border-[var(--color-accent)]/55 hover:bg-[var(--color-bg-elevated)]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-label-red)]/12 text-xs font-bold text-[var(--color-label-red)]">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                  {item}
                </p>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** 01 — Left editorial copy + overlapping portrait image + highlight cards */
export function EditorialSplitLayout({ domain }: LayoutProps) {
  return (
    <section id={domain.id} className="relative overflow-hidden bg-[var(--color-bg)] py-16 sm:py-24">
      <div className="wrap wrap--impact-wide">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 xl:gap-14">
          <div className="lg:pt-4">
            <RevealItem className="max-w-3xl">
              <SectionHeading
                badge={domain.badge}
                title={domain.title}
                intro={domain.intro}
                align="left"
              />
            </RevealItem>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {domain.highlights.map((item, i) => (
                <RevealItem
                  key={item}
                  delayMs={120 + i * 70}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-card"
                >
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item}</p>
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-widest text-[var(--color-accent)]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </RevealItem>
              ))}
            </div>
          </div>
          <RevealItem delayMs={180} className="relative">
            <div className="relative mx-auto inline-block overflow-hidden rounded-2xl border-2 border-[var(--color-accent)]/30 shadow-[0_24px_80px_rgba(255,71,74,0.15)]">
              <img
                src={Array.isArray(domain.image) ? domain.image[0] : domain.image}
                alt={domain.imageAlt}
                className="block max-w-full h-auto object-contain bg-[var(--color-bg)]"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div
              className="pointer-events-none absolute -left-4 top-8 hidden h-24 w-24 rounded-full border border-[var(--color-accent)]/20 lg:block"
              aria-hidden
            />
          </RevealItem>
        </div>
      </div>
    </section>
  );
}

/** 02 — Full-bleed cinematic with staggered highlight grid */
export function CinematicLayout({ domain }: LayoutProps) {
  return (
    <section id={domain.id} className="relative overflow-hidden py-20 sm:py-28 md:py-36">
      <div className="absolute inset-0 z-0">
        <Image
          src={Array.isArray(domain.image) ? domain.image[0] : domain.image}
          alt={domain.imageAlt}
          fill
          className="object-cover object-center scale-105"
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-[var(--color-label-red)]/10 mix-blend-multiply" />
      </div>
      <div className="wrap wrap--impact-wide relative z-10">
        <RevealItem className="max-w-3xl">
          <SectionHeading
            badge={domain.badge}
            title={domain.title}
            intro={domain.intro}
            badgeColor="red"
            dark
            align="left"
          />
        </RevealItem>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {domain.highlights.map((item, i) => (
            <RevealItem
              key={item}
              delayMs={120 + i * 80}
              className={cn(
                "rounded-xl border border-white/15 bg-black/45 p-5 backdrop-blur-md",
                i === 0 && "sm:col-span-2 lg:col-span-1 lg:row-span-1",
              )}
            >
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">{item}</p>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 03 — Wide image band + card grid below */
export function HeroCardsLayout({ domain }: LayoutProps) {
  const hasImage = Boolean(domain.image);

  return (
    <section
      id={domain.id}
      className="relative overflow-hidden bg-[var(--color-bg)]"
    >
      <div className="absolute inset-0">
        {hasImage ? (
          <Image
            src={Array.isArray(domain.image) ? domain.image[0] : domain.image}
            alt={domain.imageAlt}
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[var(--color-bg-elevated)] via-[var(--color-bg)] to-[var(--color-surface)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/58 to-[var(--color-bg)]/96" />
      </div>
      <div className="wrap relative py-16 sm:py-20 lg:py-24">
        <RevealItem className="max-w-3xl">
          <SectionHeading
            badge={domain.badge}
            title={domain.title}
            intro={domain.intro}
            badgeColor="red"
            dark
            align="left"
          />
        </RevealItem>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domain.highlights.map((item, i) => (
            <RevealItem
              key={item}
              delayMs={120 + i * 80}
              className={cn(
                "rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-md transition hover:border-[var(--color-accent)]/50 hover:bg-black/45",
                i === domain.highlights.length - 1 && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <Heart
                className="mb-3 h-5 w-5 fill-[var(--color-accent)]/20 text-[var(--color-accent)]"
                aria-hidden
              />
              <p className="text-sm leading-relaxed text-white/88 sm:text-base">{item}</p>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 04 — Vertical numbered timeline (no hero image) */
export function TimelineLayout({ domain }: LayoutProps) {
  return (
    <section id={domain.id} className="bg-[var(--color-bg)] py-16 sm:py-24">
      <div className="wrap max-w-3xl">
        {domain.image && (
          <RevealItem className="mb-8 flex justify-center">
            <div className="inline-block overflow-hidden rounded-3xl border-2 border-[var(--color-accent)]/20 shadow-lg bg-[var(--color-surface)]">
              <img
                src={Array.isArray(domain.image) ? domain.image[0] : domain.image}
                alt={domain.imageAlt}
                className="block w-full h-auto max-h-[42rem] object-contain"
                style={{ display: "block" }}
                loading="lazy"
              />
            </div>
          </RevealItem>
        )}
        <RevealItem>
          <SectionHeading badge={domain.badge} title={domain.title} intro={domain.intro} />
        </RevealItem>
        <ol className="relative mt-10 space-y-0 sm:mt-12">
          <div
            className="absolute bottom-4 left-[1.125rem] top-4 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent sm:left-5"
            aria-hidden
          />
          {domain.highlights.map((item, i) => (
            <RevealItem key={item} delayMs={100 + i * 80} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] text-xs font-bold text-[var(--color-accent)] sm:h-10 sm:w-10">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                  {item}
                </p>
              </div>
            </RevealItem>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** 05 — Instagram featured-post slider + chapter highlights */
export function SocialFeedLayout({ domain }: LayoutProps) {
  return (
    <section
      id={domain.id}
      className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(225,48,108,0.15), transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(64,93,230,0.12), transparent 45%)",
        }}
        aria-hidden
      />
      <div className="wrap relative">
        <RevealItem>
          <SectionHeading badge={domain.badge} title={domain.title} intro={domain.intro} />
        </RevealItem>

        <RevealItem delayMs={120} className="mt-10">
          <InstagramPostSlider />
        </RevealItem>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {domain.highlights.map((item) => (
            <RevealItem
              key={item}
              delayMs={120}
              className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/80 p-4"
            >
              <Share2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item}</p>
            </RevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 06 — Youth activation grid (no hero image) */
export function BentoLayout({ domain }: LayoutProps) {
  const [featured, ...rest] = domain.highlights;
  return (
    <section id={domain.id} className="bg-[var(--color-bg)] py-16 sm:py-24">
      <div className="wrap">
        <RevealItem>
          <SectionHeading
            badge={domain.badge}
            title={domain.title}
            intro={domain.intro}
            align="left"
          />
        </RevealItem>

        {domain.image && (
          <RevealItem delayMs={120} className="mt-6">
            {(() => {
              const images = (Array.isArray(domain.image) ? domain.image : [domain.image]).slice(0, 6);
              return (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {images.map((src) => (
                    <div
                      key={src}
                      className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm h-64 sm:h-72 md:h-80"
                    >
                      <img
                        src={src}
                        alt={domain.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover block transform-gpu transition-transform duration-300 hover:scale-110 hover:z-10"
                      />
                    </div>
                  ))}
                </div>
              );
            })()}
          </RevealItem>
        )}

        {featured && (
          <RevealItem delayMs={120} className="mt-10 rounded-2xl border border-[var(--color-accent)]/35 bg-gradient-to-br from-[var(--color-accent)]/15 via-[var(--color-surface)] to-[var(--color-bg)] p-6 sm:p-8">
            <div className="min-w-0">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Youth-led · Faisalabad
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-[var(--color-text)] sm:text-xl">
                {featured}
              </p>
            </div>
          </RevealItem>
        )}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {rest.map((item, i) => {
            return (
              <RevealItem
                key={item}
                delayMs={120 + i * 70}
                className={cn(
                  "flex gap-4 rounded-2xl border p-5 sm:p-6",
                  BENTO_ACCENTS[(i + 1) % BENTO_ACCENTS.length],
                  i === rest.length - 1 && rest.length % 2 === 1 && "sm:col-span-2 sm:max-w-xl",
                )}
              >
                <span className="font-display text-3xl font-bold leading-none text-[var(--color-accent)]/50">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                    {item}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** 07 — Bold manifesto: diagonal stripe image + left-border list */
export function ManifestoLayout({ domain }: LayoutProps) {
  return (
    <section
      id={domain.id}
      className="relative overflow-hidden bg-[var(--color-bg-elevated)] py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 h-full w-1/2 skew-x-[-12deg] bg-[var(--color-label-red)]/8"
        aria-hidden
      />
      <div className="wrap relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="mb-6 h-1 w-16 bg-[var(--color-label-red)]" aria-hidden />
            <RevealItem>
              <SectionHeading
                badge={domain.badge}
                title={domain.title}
                intro={domain.intro}
                badgeColor="red"
                align="left"
              />
            </RevealItem>
            <ul className="mt-10 space-y-0">
              {domain.highlights.map((item, i) => (
                <RevealItem
                  key={item}
                  delayMs={100 + i * 80}
                  className="border-l-4 border-[var(--color-label-red)] py-4 pl-5 transition hover:border-[var(--color-accent)] hover:bg-white/[0.02]"
                >
                    <div className="mb-1">
                      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-label-red)]">
                        Action {i + 1}
                      </span>
                    </div>
                  <p className="text-base font-medium leading-relaxed text-[var(--color-text)] sm:text-lg">
                    {item}
                  </p>
                </RevealItem>
              ))}
            </ul>
          </div>
          <RevealItem delayMs={180} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-none border-l-8 border-[var(--color-label-red)] shadow-[20px_20px_0_rgba(255,31,34,0.15)] sm:aspect-[4/5]">
              <Image
                src={Array.isArray(domain.image) ? domain.image[0] : domain.image}
                alt={domain.imageAlt}
                fill
                className="object-cover grayscale-[30%] contrast-110"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-[var(--color-label-red)]/15 mix-blend-multiply" />
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
