import type { Metadata } from "next";
import { DM_Sans, Outfit, Plus_Jakarta_Sans, Syne } from "next/font/google";
import { HtmlLangDir } from "@/components/HtmlLangDir";
import { LanguageProvider } from "@/context/LanguageProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pak Palestine Forum — Faisalabad Chapter",
  description:
    "Pak Palestine Forum Faisalabad — local chapter for peaceful Palestine solidarity: awareness, protests, relief, student activation, and boycott.",
  keywords: [
    "Pak Palestine Forum",
    "PPF Faisalabad",
    "Palestine solidarity Faisalabad",
    "Gaza",
    "Al-Aqsa",
    "Faisalabad activism",
  ],
  themeColor: "#111111",
  openGraph: {
    type: "website",
    title: "Pak Palestine Forum — Faisalabad Chapter",
    description:
      "Official Faisalabad chapter of Pak Palestine Forum. Peaceful activism for Palestine.",
    images: [{ url: "/images/ppf logo transparent.webp", alt: "Pak Palestine Forum Faisalabad" }],
  },
  icons: {
    icon: [
      { url: "/images/PPF-logo-icon.webp", type: "image/webp" },
      { url: "/images/ppf logo transparent.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${syne.variable} ${dmSans.variable} ${outfit.variable} antialiased`}
      >
        <LanguageProvider>
          <HtmlLangDir />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
