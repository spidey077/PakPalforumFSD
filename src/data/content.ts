import { domainsEn, domainsUr, type DomainId } from "./domains";
import { FAISALABAD_CONTACT, FAISALABAD_SOCIAL, MAIN_SITE_URL } from "./site";

export type Lang = "en" | "ur";

const navEn: Record<DomainId | "contact", string> = {
  awareness: "Awareness",
  protests: "Protests",
  relief: "Relief",
  adoption: "Adoption",
  social: "Social",
  students: "Students",
  boycott: "Boycott",
  contact: "Contact",
};

const navUr: Record<DomainId | "contact", string> = {
  awareness: "آگاہی",
  protests: "احتجاج",
  relief: "امداد",
  adoption: "اپنشن",
  social: "سوشل",
  students: "طلبہ",
  boycott: "بائیکاٹ",
  contact: "رابطہ",
};

const socialFaisalabadEn = [
  FAISALABAD_SOCIAL.instagram,
];

export const content = {
  en: {
    siteName: "Pak Palestine Forum",
    chapterName: "Faisalabad Chapter",
    chapterLocation: "Faisalabad, Pakistan",
    tagline: "Peaceful, Non-Violent Activism for Palestine — Faisalabad",
    swipeHint: "swipe",
    nav: navEn,
    navMainSite: "National PPF",
    cta: { join: "Join Us", volunteer: "Volunteer", donate: "Donate" },
    mainSite: {
      url: MAIN_SITE_URL,
      chapterLabel: "Faisalabad chapter · Part of Pak Palestine Forum",
      description:
        "This is the local chapter site. For nationwide chapters, national campaigns, and organisation-wide updates, visit the main Pak Palestine Forum website.",
      cta: "Visit main PPF website",
      footerLink: "Pak Palestine Forum (National)",
      cardTitle: "National headquarters",
      cardBody:
        "Volunteer nationally, explore all city chapters, and follow organisation-wide relief and campaigns on the main website.",
    },
    floatingBar: {
      contactBtn: "Contact us",
      contactTitle: "PPF Faisalabad",
      contactHint: "Reach the Pak Palestine Forum Faisalabad chapter team.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      phoneDisplay: FAISALABAD_CONTACT.phone,
      phoneWaDigits: FAISALABAD_CONTACT.phoneWaDigits,
      email: FAISALABAD_CONTACT.email,
      close: "Close",
      dismissOverlay: "Close dialog",
    },
    hero: {
      badge: "Official website · Faisalabad chapter",
      location: "Faisalabad, Pakistan",
    },
    heroSlides: [
      {
        tagline: "Peaceful Solidarity for Palestine",
        subtext: "The Pak Palestine Forum Faisalabad chapter — activism, relief, and awareness from our city.",
      },
      {
        tagline: "Youth-Led, City-Rooted, Nation-Connected",
        subtext: "Our chapter works across seven domains — aligned with the national PPF movement.",
      },
      {
        tagline: "Stand for Al-Aqsa and Palestine",
        subtext: "Join students, volunteers, and organisers across Faisalabad.",
      },
    ],
    domains: domainsEn.map((d) => ({
      ...d,
      navLabel: navEn[d.id],
    })),
    contact: {
      title: "Contact PPF Faisalabad",
      intro:
        "Volunteer with our chapter, donate through national relief channels, or connect on social media. For organisation-wide matters, visit the main PPF website.",
      volunteer: {
        title: "Join PPF Faisalabad",
        body: "Volunteer with our Faisalabad chapter — on campus, online, or on the ground. Sign up via the national volunteer form (shared across PPF).",
        cta: "Sign up to volunteer",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLScmKyTfY3oCA069IjnZRS-mL_RfHfXpHA2HfKkIoLAF0lw4Tg/viewform",
      },
      donate: {
        title: "Donate for Gaza (National Relief)",
        body: "Relief donations are coordinated nationally by PPF. Contact the national relief team or use official channels listed on the main website.",
        cta: "Main PPF website",
        ctaUrl: MAIN_SITE_URL,
        contactName: "Maria Paracha",
        contactRole: "Relief Head (National PPF)",
        contactPhone: "+92 340 4555542",
      },
      chapterPhone: {
        label: "Faisalabad chapter phone",
        value: FAISALABAD_CONTACT.phone,
      },
      form: {
        title: "Send a message",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        success: "Thanks for your message. We will reply soon.",
      },
      socialTitle: "Follow PPF Faisalabad",
      socialFaisalabad: socialFaisalabadEn,
      socialNationalTitle: "National PPF (all Pakistan)",
      socialNational: [
        { name: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029VaaBFEaDzgTFDQa5yn3u", label: "Pak-Palestine Forum" },
        { name: "Instagram", url: "https://www.instagram.com/pakpalforum2/", label: "@pakpalforum2" },
        { name: "Facebook", url: "https://www.facebook.com/share/18UtUumkQL/?mibextid=wwXIfr", label: "National PPF" },
        { name: "X (Twitter)", url: "https://x.com/pak_palforum?s=11", label: "@pak_palforum" },
        { name: "YouTube", url: "https://www.youtube.com/@pakpalforum2", label: "Pak Pal Forum" },
      ],
    },
    footer: {
      tagline: "Peaceful, Non-Violent Activism for Palestine",
      socialTitle: "Faisalabad chapter",
      rights: "Faisalabad chapter. Part of Pak Palestine Forum.",
    },
  },
  ur: {
    siteName: "پاک فلسطین فورم",
    chapterName: "فیصل آباد چیپٹر",
    chapterLocation: "فیصل آباد، پاکستان",
    tagline: "فلسطین کے لیے پرامن فعالیت — فیصل آباد",
    swipeHint: "سوائپ",
    nav: navUr,
    navMainSite: "قومی پی پی ایف",
    cta: { join: "شامل ہوں", volunteer: "رضاکار", donate: "عطیہ" },
    mainSite: {
      url: MAIN_SITE_URL,
      chapterLabel: "فیصل آباد چیپٹر · پاک فلسطین فورم کا حصہ",
      description:
        "یہ مقامی چیپٹر کی ویب سائٹ ہے۔ ملک بھر کے چیپٹرز، قومی مہمات اور تنظیمی اپڈیٹس کے لیے مرکزی پاک فلسطین فورم کی ویب سائٹ دیکھیں۔",
      cta: "مرکزی ویب سائٹ پر جائیں",
      footerLink: "پاک فلسطین فورم (قومی)",
      cardTitle: "قومی دفتر",
      cardBody:
        "قومی سطح پر رضاکار بنیں، تمام شہری چیپٹرز دیکھیں، اور مرکزی ویب سائٹ پر امداد و مہمات سے باخبر رہیں۔",
    },
    floatingBar: {
      contactBtn: "ہم سے رابطہ",
      contactTitle: "پی پی ایف فیصل آباد",
      contactHint: "پاک فلسطین فورم فیصل آباد چیپٹر کی ٹیم تک پہنچیں۔",
      whatsappLabel: "واٹس ایپ",
      emailLabel: "ای میل",
      phoneDisplay: FAISALABAD_CONTACT.phone,
      phoneWaDigits: FAISALABAD_CONTACT.phoneWaDigits,
      email: FAISALABAD_CONTACT.email,
      close: "بند کریں",
      dismissOverlay: "باکس بند کریں",
    },
    hero: {
      badge: "سرکاری ویب سائٹ · فیصل آباد چیپٹر",
      location: "فیصل آباد، پاکستان",
    },
    heroSlides: [
      {
        tagline: "فلسطین کے لیے پرامن یکجہتی",
        subtext: "پاک فلسطین فورم فیصل آباد چیپٹر — ہمارے شہر سے فعالیت، امداد اور آگاہی۔",
      },
      {
        tagline: "نوجوان قیادت، شہر سے جڑے، قوم سے جڑے",
        subtext: "سات شعبوں میں کام — قومی پی پی ایف تحریک کے ساتھ ہم آہنگ۔",
      },
      {
        tagline: "اقصیٰ اور فلسطین کے لیے کھڑے ہوں",
        subtext: "فیصل آباد کے طلبہ، رضاکاروں اور منتظمین میں شامل ہوں۔",
      },
    ],
    domains: domainsUr.map((d) => ({
      ...d,
      navLabel: navUr[d.id],
    })),
    contact: {
      title: "پی پی ایف فیصل آباد سے رابطہ",
      intro:
        "ہمارے چیپٹر میں رضاکار بنیں، قومی امدادی چینلز کے ذریعے عطیہ دیں، یا سوشل میڈیا پر جڑیں۔ تنظیمی معاملات کے لیے مرکزی ویب سائٹ دیکھیں۔",
      volunteer: {
        title: "پی پی ایف فیصل آباد میں شامل ہوں",
        body: "فیصل آباد چیپٹر میں رضاکار بنیں — کیمپس، آن لائن یا زمین پر۔ قومی رضاکار فارم استعمال کریں۔",
        cta: "رضاکار بننے کے لیے سائن اپ",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLScmKyTfY3oCA069IjnZRS-mL_RfHfXpHA2HfKkIoLAF0lw4Tg/viewform",
      },
      donate: {
        title: "غزہ کے لیے عطیہ (قومی امداد)",
        body: "امداد قومی پی پی ایف کے ذریعے منظم ہوتی ہے۔ مرکزی ویب سائٹ پر سرکاری چینلز دیکھیں۔",
        cta: "مرکزی ویب سائٹ",
        ctaUrl: MAIN_SITE_URL,
        contactName: "Maria Paracha",
        contactRole: "Relief Head (قومی پی پی ایف)",
        contactPhone: "+92 340 4555542",
      },
      chapterPhone: {
        label: "فیصل آباد چیپٹر فون",
        value: FAISALABAD_CONTACT.phone,
      },
      form: {
        title: "پیغام بھیجیں",
        name: "نام",
        email: "ای میل",
        message: "پیغام",
        send: "بھیجیں",
        success: "آپ کے پیغام کا شکریہ۔ ہم جلد جواب دیں گے۔",
      },
      socialTitle: "پی پی ایف فیصل آباد فالو کریں",
      socialFaisalabad: socialFaisalabadEn,
      socialNationalTitle: "قومی پی پی ایف (پورا پاکستان)",
      socialNational: [
        { name: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029VaaBFEaDzgTFDQa5yn3u", label: "Pak-Palestine Forum" },
        { name: "Instagram", url: "https://www.instagram.com/pakpalforum2/", label: "@pakpalforum2" },
        { name: "Facebook", url: "https://www.facebook.com/share/18UtUumkQL/?mibextid=wwXIfr", label: "قومی پی پی ایف" },
        { name: "X (Twitter)", url: "https://x.com/pak_palforum?s=11", label: "@pak_palforum" },
        { name: "YouTube", url: "https://www.youtube.com/@pakpalforum2", label: "Pak Pal Forum" },
      ],
    },
    footer: {
      tagline: "فلسطین کے لیے پرامن، غیر متشدد فعالیت",
      socialTitle: "فیصل آباد چیپٹر",
      rights: "فیصل آباد چیپٹر۔ پاک فلسطین فورم کا حصہ۔",
    },
  },
} as const;

export type SiteContent = (typeof content)[Lang];

export function getContent(lang: Lang): SiteContent {
  return content[lang];
}
