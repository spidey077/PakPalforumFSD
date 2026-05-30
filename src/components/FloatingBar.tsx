"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useCallback, useState } from "react";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLanguage } from "@/context/LanguageProvider";
import { FloatingPanel } from "@/components/ui/FloatingPanel";

export function FloatingBar() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);

  const floatingBar = t.floatingBar;
  const whatsappUrl = `https://wa.me/${floatingBar.phoneWaDigits}`;
  const mailUrl = `mailto:${floatingBar.email}`;

  const closeAll = useCallback(() => {
    setContactOpen(false);
  }, []);

  useEscapeKey(contactOpen, closeAll);

  return (
    <>
      {contactOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[35] bg-black/35 backdrop-blur-[1px]"
          aria-label={floatingBar.dismissOverlay}
          onClick={closeAll}
        />
      )}

      {contactOpen && (
        <FloatingPanel
          title={floatingBar.contactTitle}
          closeLabel={floatingBar.close}
          onClose={() => setContactOpen(false)}
        >
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">{floatingBar.contactHint}</p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#25D366]/15 px-3 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-[#25D366]/25"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden />
              {floatingBar.whatsappLabel} · {floatingBar.phoneDisplay}
            </a>
            <a
              href={mailUrl}
              className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
              {floatingBar.emailLabel} · {floatingBar.email}
            </a>
          </div>
        </FloatingPanel>
      )}

      <div className="fixed bottom-4 right-4 z-[30] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => {
            setContactOpen((open) => !open);
          }}
          className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2.5 text-xs font-semibold text-[var(--color-text)] shadow-lg backdrop-blur hover:border-[var(--color-accent)] sm:text-sm"
        >
          {floatingBar.contactBtn}
        </button>
      </div>
    </>
  );
}
