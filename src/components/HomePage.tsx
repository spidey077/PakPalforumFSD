"use client";

import { ContactSection } from "@/components/ContactSection";
import { DomainSection } from "@/components/DomainSection";
import { FloatingBar } from "@/components/FloatingBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainSiteBanner } from "@/components/MainSiteBanner";
import { useLanguage } from "@/context/LanguageProvider";

export function HomePage() {
  const { dir, lang, t } = useLanguage();

  return (
    <div dir={dir} lang={lang} className="page-enter">
      <Header />
      <main>
        <Hero />
        <MainSiteBanner />
        {t.domains.map((domain) => (
          <DomainSection key={domain.id} domain={domain} />
        ))}
        <ContactSection />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
