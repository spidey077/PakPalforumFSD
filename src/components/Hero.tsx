"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { IMAGES } from "@/constants/images";
import { JOIN_US_FORM_URL, SECTION_IDS } from "@/constants/navigation";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/LanguageProvider";

const SLIDE_INTERVAL_MS = 6000;

export function Hero() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollToSection = useScrollToSection();
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>({ threshold: 0.08 });
  const slide = t.heroSlides[activeSlide];

  useEffect(() => {
    setActiveSlide(0);
  }, [t.heroSlides]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % t.heroSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [t.heroSlides.length]);

  return (
    <section
      id={SECTION_IDS.hero}
      ref={ref}
      className="relative flex h-[52svh] flex-col justify-end overflow-hidden sm:h-[100dvh]"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {IMAGES.heroSlides.map((src, index) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === activeSlide ? "opacity-100" : "opacity-0",
            )}
            style={{ willChange: "opacity" }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="w-full h-full object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="hero-overlay hero-overlay--strong absolute inset-0" />
      </div>

      <div
        className={cn(
          "hero-content wrap relative z-10 min-w-0 pb-[min(14vh,5.5rem)] pt-28 sm:pb-[20vh] sm:pt-32 lg:pt-44",
          "reveal-section",
          isVisible && "reveal-section--visible",
          "reveal-section--hero",
        )}
      >
        <div className="mb-5 flex flex-col gap-3 sm:mb-8 sm:gap-4">
          <span className="inline-flex w-fit max-w-full items-center rounded-full border-2 border-white/25 bg-[var(--color-cta)] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_24px_rgba(255,31,34,0.45)] sm:px-5 sm:py-2.5 sm:text-sm">
            {t.hero.badge}
          </span>

          <div>
            <p className="text-base font-medium text-white/80 sm:text-lg lg:text-xl">
              {t.siteName}
            </p>
          </div>

          <p className="inline-flex w-fit items-center gap-2 rounded-lg bg-black/35 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm sm:px-4 sm:py-2.5 sm:text-base lg:text-lg">
            <MapPin className="h-4 w-4 shrink-0 text-[var(--color-accent)] sm:h-5 sm:w-5" aria-hidden />
            {t.hero.location}
          </p>
        </div>

        <h1 className="font-display max-w-4xl text-balance text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {slide.tagline}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/92 sm:text-xl lg:text-2xl">
          {slide.subtext}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          <a
            href={JOIN_US_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-cta text-sm sm:text-base"
          >
            {t.cta.join}
          </a>
          <button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.contact)}
            className="btn-outline border-white/40 text-white hover:border-white hover:bg-white/10"
          >
            {t.nav.contact}
          </button>
        </div>

        <div className="mt-10 flex gap-2" role="tablist" aria-label="Hero slides">
          {t.heroSlides.map((_, index) => (
            <button
              key={`slide-${index}`}
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeSlide ? "w-8 bg-[var(--color-accent)]" : "w-3 bg-white/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
