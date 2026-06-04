import { Globe2 } from "lucide-react";
import { cn } from "@/lib/cn";

type SocialLink = {
  name: string;
  url: string;
  label?: string;
};

type SocialLinkChipsProps = {
  links: readonly SocialLink[];
  variant?: "chapter" | "national";
  mode?: "chips" | "icons";
};

type IconProps = {
  className?: string;
};

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 22v-8h2.8l.4-3h-3.2V9.1c0-.9.2-1.6 1.6-1.6h1.7V4.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h2.8v8h3.7Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.8 3H22l-7 8.1L23 21h-6.8l-5.3-6.7L5.1 21H2l7.6-8.8L1.1 3H8l4.9 6.2L18.8 3Zm-1.2 16h1.8L7 4.9H5.1L17.6 19Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M21.8 8.2c-.2-1.1-1-2-2.1-2.2C17.9 5.7 12 5.7 12 5.7s-5.9 0-7.7.3c-1.1.2-1.9 1.1-2.1 2.2C2 9.3 2 12 2 12s0 2.7.2 3.8c.2 1.1 1 2 2.1 2.2 1.8.3 7.7.3 7.7.3s5.9 0 7.7-.3c1.1-.2 1.9-1.1 2.1-2.2.2-1.1.2-3.8.2-3.8s0-2.7-.2-3.8ZM10.1 15.1V8.9L15.5 12l-5.4 3.1Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a9.9 9.9 0 0 0-8.4 15.1L2 22l4.9-1.5A9.9 9.9 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1 1 12 20Zm4.5-6.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1l-.8 1c-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.8-1a6.8 6.8 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.1-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3H8.8c-.2 0-.4.1-.5.2-.2.2-.8.8-.8 1.9 0 1.1.8 2.1.9 2.2.1.1 1.6 2.6 4 3.6.6.2 1 .4 1.3.5.6.2 1.2.2 1.6.1.5-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function DefaultSocialIcon({ className }: IconProps) {
  return <Globe2 className={className} aria-hidden />;
}

function getSocialIcon(name: string) {
  const normalized = name.toLowerCase();

  if (normalized.includes("instagram")) {
    return InstagramIcon;
  }

  if (normalized.includes("facebook")) {
    return FacebookIcon;
  }

  if (normalized.includes("youtube")) {
    return YoutubeIcon;
  }

  if (normalized.includes("x") || normalized.includes("twitter")) {
    return XIcon;
  }

  if (normalized.includes("whatsapp") || normalized.includes("message")) {
    return WhatsAppIcon;
  }

  return DefaultSocialIcon;
}

export function SocialLinkChips({ links, variant = "national", mode = "chips" }: SocialLinkChipsProps) {
  const isChapter = variant === "chapter";

  if (mode === "icons") {
    return (
      <div className="flex items-center gap-3">
        {links.map((link) => {
          const Icon = getSocialIcon(link.name);

          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className={cn(
                "inline-flex items-center justify-center h-10 w-10 rounded-full transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
                isChapter
                  ? "bg-[var(--color-accent)]/10 text-[var(--color-text)] hover:scale-105 hover:bg-[var(--color-accent)]/15"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:scale-105 hover:text-[var(--color-text)]",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium transition",
            isChapter
              ? "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-text)] hover:border-[var(--color-accent)]"
              : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]",
          )}
        >
          {(() => {
            const Icon = getSocialIcon(link.name);

            return <Icon className="h-3.5 w-3.5 shrink-0" />;
          })()}
          {link.label ? `${link.name} · ${link.label}` : link.name}
        </a>
      ))}
    </div>
  );
}
