"use client";

import { Camera, ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import {
  FEATURED_INSTAGRAM_POSTS,
  INSTAGRAM_PROFILE,
  instagramThumbnail,
  type InstagramPost,
} from "@/data/instagram-posts";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/LanguageProvider";

type InstagramPostSliderProps = {
  posts?: InstagramPost[];
  className?: string;
};

function PostCard({
  post,
  title,
  caption,
}: {
  post: InstagramPost;
  title: string;
  caption: string;
}) {
  const [imgError, setImgError] = useState(false);
  const thumb = instagramThumbnail(post, "m");

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full min-w-0 shrink-0 snap-start snap-always flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-card transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-[0_18px_45px_rgba(255,71,74,0.14)]"
      aria-label={`Open Instagram ${post.type}: ${title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            style={{
              objectPosition:
                post.shortcode === "DLknQCPIlIN" || post.shortcode === "DYXbqpkCnhU"
                  ? "center 60%"
                  : undefined,
            }}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#833AB4]/35 via-[#FD1D1D]/20 to-[#F77737]/35 p-6 text-center">
            <Camera className="h-10 w-10 text-white/85" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
              Add your image here
            </span>
          </div>
        )}
        {post.type === "reel" && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
            <Play className="h-4 w-4 fill-current" aria-hidden />
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-4 pb-4 pt-10">
          <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
            <Camera className="h-3 w-3" aria-hidden />
            {post.type === "reel" ? "Reel" : "Post"}
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <p className="font-display text-lg font-semibold leading-tight text-[var(--color-text)] sm:text-xl">
          {title}
        </p>
        <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
          {caption}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
          View on Instagram
          <ExternalLink className="h-3 w-3" aria-hidden />
        </span>
      </div>
    </a>
  );
}

export function InstagramPostSlider({
  posts = FEATURED_INSTAGRAM_POSTS,
  className,
}: InstagramPostSliderProps) {
  const { lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll("a"));
    if (!cards.length) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const cardWidth = cards[0]?.clientWidth ?? 288;
    const step = cardWidth + gap;
    const maxIndex = cards.length - 1;
    const currentIndex = Math.max(0, Math.round(track.scrollLeft / step));
    const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex > maxIndex) {
      cards[0]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      return;
    }

    if (nextIndex < 0) {
      cards[maxIndex]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      return;
    }

    cards[nextIndex]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            {lang === "en" ? "Featured on Instagram" : "انسٹاگرام پر نمایاں"}
          </p>
        </div>
        <a
          href={INSTAGRAM_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)]"
        >
          <Camera className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden />
          {INSTAGRAM_PROFILE.label}
          <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
        </a>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("prev")}
          className="absolute -left-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/95 text-[var(--color-text)] shadow-md transition hover:border-[var(--color-accent)] sm:flex"
          aria-label={lang === "en" ? "Previous posts" : "پچھلی پوسٹس"}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          className="absolute -right-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/95 text-[var(--color-text)] shadow-md transition hover:border-[var(--color-accent)] sm:flex"
          aria-label={lang === "en" ? "Next posts" : "اگلی پوسٹس"}
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>

        <div
          ref={trackRef}
          className="grid grid-flow-col auto-cols-[100%] gap-5 overflow-x-auto pb-3 pt-1 scroll-smooth snap-x snap-mandatory md:auto-cols-[calc((100%-1.25rem)/2)] xl:auto-cols-[calc((100%-2.5rem)/3)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post) => (
            <PostCard
              key={post.shortcode}
              post={post}
              title={lang === "en" ? post.titleEn : post.titleUr}
              caption={lang === "en" ? post.captionEn : post.captionUr}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
