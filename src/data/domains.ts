export type DomainId =
  | "awareness"
  | "protests"
  | "relief"
  | "adoption"
  | "social"
  | "students"
  | "boycott";

export type DomainContent = {
  id: DomainId;
  navLabel?: string;
  badge: string;
  title: string;
  intro: string;
  highlights: string[];
  image: string | readonly string[];
  imageAlt: string;
  layout:
    | "editorial-split"
    | "cinematic"
    | "hero-cards"
    | "relief"
    | "timeline"
    | "social-feed"
    | "bento"
    | "manifesto";
};

export const domainOrder: DomainId[] = [
  "awareness",
  "protests",
  "relief",
  "adoption",
  "social",
  "students",
  "boycott",
];

export const domainsEn: DomainContent[] = [
  {
    id: "awareness",
    badge: "01",
    title: "Awareness and Narrative Building",
    intro:
      "In Faisalabad, we build understanding of Palestine through campus talks, community sessions, and digital content — keeping Al-Aqsa and Gaza present in local conversation.",
    highlights: [
      "Awareness sessions at universities, colleges, and community venues across Faisalabad",
      "Talks and panels with local speakers, students, and guest mentors from the national PPF network",
      "Distribution of boycott guides and educational material in the city",
      "Countering misinformation through chapter-led media and on-ground outreach",
      "Coordinated with nationwide PPF narrative campaigns while rooted in Faisalabad",
    ],
    image: "/images/instagram/Awareness and Narrative Building.png",
    imageAlt: "PPF Faisalabad awareness work",
    layout: "editorial-split",
  },
  {
    id: "protests",
    badge: "02",
    title: "Protests and Public Engagements",
    intro:
      "Peaceful, organised solidarity in the streets of Faisalabad — marches, rallies, and public presence that amplify Palestine alongside the national movement.",
    highlights: [
      "City-wide protests, vigils, and solidarity gatherings in Faisalabad",
      "Public engagements mobilising students, professionals, and families",
      "Participation in national PPF campaigns and coordinated action days",
      "Visible solidarity that connects Faisalabad to the wider Pakistan effort",
      "Non-violent, principled activism aligned with PPF's national standards",
    ],
    image: "/images/impact.webp",
    imageAlt: "PPF Faisalabad protests",
    layout: "cinematic",
  },
  {
    id: "relief",
    badge: "03",
    title: "Relief Work in Gaza",
    intro:
      "When Gaza needs food, medicine, and essentials, Faisalabad answers — collecting locally and delivering through PPF's national relief pipeline so aid is real, routed, and accountable.",
    highlights: [
      "Neighbourhood donation points and Friday collections across Faisalabad",
      "Ramadan drives and emergency appeals for food packs, medical aid, and daily essentials",
      "Every rupee and parcel goes through PPF's national relief desk — no informal or unverified handoffs",
      "Donors told clearly how funds move and which partner organisations deliver inside Gaza",
      "City-wide generosity converted into sustenance for families living under siege",
    ],
    image: "/images/instagram/Relief Work in Gaza.jpeg",
    imageAlt: "PPF Faisalabad relief for Gaza",
    layout: "editorial-split",
  },
  {
    id: "adoption",
    badge: "04",
    title: "Virtual Adoption Program",
    intro:
      "One family. One commitment. Monthly Kafalah through PPF's national Virtual Adoption Program — standing with a household in Gaza month after month, not just when the news cycle peaks.",
    highlights: [
      "Adopters pledge monthly Kafalah — ongoing care for one matched family, not a one-time transfer",
      "National program handles matching; our chapter guides you from sign-up through your first payment",
      "Updates on the household you sponsor — children, elders, and dependents you are responsible for",
      "Individuals, wedding redirects, and friend groups can pool monthly support for one family",
      "Relief feeds people today; adoption carries them through tomorrow when emergency appeals quieten",
    ],
    image: "",
    imageAlt: "",
    layout: "timeline",
  },
  {
    id: "social",
    badge: "05",
    title: "Social Media Campaigns",
    intro:
      "What happens on Faisalabad's streets should reach every screen the same day — our digital team turns protests, relief drives, and boycott pushes into content people actually share.",
    highlights: [
    ],
    image: "/images/hero-3.jfif",
    imageAlt: "PPF Faisalabad social media",
    layout: "social-feed",
  },
  {
    id: "students",
    badge: "06",
    title: "Students Activation in Unis, Masajid and Madaris",
    intro:
      "Roughly nine in ten volunteers here are students — Faisalabad's chapter runs through campuses on weekdays, masajid on Jumu'ah, and madaris after class.",
    highlights: [
      "~90% of PPF Faisalabad volunteers are under 30 — youth aren't helpers, they run the chapter",
      "Faisalabad Medical University and partner campuses: ambassador tables, talks, and sign-up drives",
      "Jumu'ah khutbah tie-ins and post-prayer briefings at partner masajid across the city",
      "Madaris study circles — age-appropriate sessions so younger students learn before they lead",
      "A trained pipeline: today's stall volunteers become tomorrow's march leads and mentors",
    ],
    image: [
      "/images/University Session.jfif",
      "/images/University Session 2.jfif",
      "/images/University Session 3.jfif",
      "/images/Faisalabad Medical University.jfif",
    ],
    imageAlt: "Student activation in Faisalabad",
    layout: "bento",
  },
  {
    id: "boycott",
    badge: "07",
    title: "Boycott Movement",
    intro:
      "Occupation is funded at the checkout counter — we put alternatives in people's hands, name the brands to avoid, and shift what Faisalabad buys week by week.",
    highlights: [
      "Printed boycott guides at Ghulam Muhammad Abad markets, D-Ground stalls, and campus gates",
      "National PPF name-and-avoid lists — which products, why they matter, and what to buy instead",
      "Shopkeeper conversations at the counter: polite, informed, changing demand without confrontation",
      "Campus teams run week-long pushes when a franchise linked to occupation opens nearby",
      "Your weekly grocery run is a choice — we help the city spend without funding complicity",
    ],
    image: "/images/Boycott Movement.jpeg",
    imageAlt: "Boycott movement in Faisalabad",
    layout: "manifesto",
  },
];

export const domainsUr: DomainContent[] = [
  {
    id: "awareness",
    badge: "۰۱",
    title: "آگاہی اور بیانیہ سازی",
    intro:
      "فیصل آباد میں کیمپس، کمیونٹی سیشنز اور ڈیجیٹل مواد کے ذریعے فلسطین کی سمجھ بنا رہے ہیں — بیت المقدس اور غزہ کو مقامی گفتگو میں زندہ رکھنا۔",
    highlights: [
      "یونیورسٹیوں، کالجوں اور کمیونٹی مقامات پر آگاہی سیشن",
      "مقامی مقررین، طلبہ اور قومی پی پی ایف نیٹ ورک کے مہمانوں کے ساتھ تقریریں",
      "شہر میں بائیکاٹ گائیڈز اور تعلیمی مواد کی تقسیم",
      "غلط معلومات کے خلاف چیپٹر کی میڈیا اور زمینی کوشش",
      "قومی پی پی ایف مہمات کے ساتھ ہم آہنگ، فیصل آباد میں جڑی ہوئی",
    ],
    image: "/images/instagram/Awareness and Narrative Building.png",
    imageAlt: "پی پی ایف فیصل آباد آگاہی",
    layout: "editorial-split",
  },
  {
    id: "protests",
    badge: "۰۲",
    title: "احتجاج اور عوامی مشغولیت",
    intro:
      "فیصل آباد کی سڑکوں پر پرامن یکجہتی — مارچ، ریلی اور عوامی موجودگی جو قومی تحریک کے ساتھ فلسطین کو بلند کرتی ہے۔",
    highlights: [
      "فیصل آباد میں احتجاج، ویجل اور یکجہتی اجتماعات",
      "طلبہ، پیشہ ور افراد اور خاندانوں کی عوامی مشغولیت",
      "قومی پی پی ایف مہمات میں شرکت",
      "فیصل آباد کو پاکستان کی وسیع کوشش سے جوڑنا",
      "غیر متشدد، اصول پسند فعالیت",
    ],
    image: "/images/impact.webp",
    imageAlt: "پی پی ایف فیصل آباد احتجاج",
    layout: "cinematic",
  },
  {
    id: "relief",
    badge: "۰۳",
    title: "غزہ میں امدادی کام",
    intro:
      "جب غزہ کو کھانا، دوا اور ضروریات چاہئیں تو فیصل آباد جواب دیتا ہے — مقامی جمع اور قومی پی پی ایف امدادی نظام کے ذریعے، تاکہ مدد حقیقی، منظم اور قابلِ اعتماد ہو۔",
    highlights: [
      "فیصل آباد بھر میں محلوں میں عطیہ پوائنٹس اور جمعہ کے دن جمع",
      "رمضان مہمات اور ایمرجنسی اپیلز — فوڈ پیک، طبی امداد اور روزمرہ ضروریات",
      "ہر روپیہ اور پارسل قومی پی پی ایف امدادی ڈیسک سے — غیر رسمی یا غیر تصدیق شدہ راستے نہیں",
      "عطیہ دہندگان کو واضح بتایا جاتا ہے کہ فنڈز کہاں جاتے ہیں اور غزہ میں کون پہنچاتا ہے",
      "شہر کی سخاوت محاصرے میں خاندانوں کے لیے روزی میں بدل جاتی ہے",
    ],
    image: "/images/instagram/Relief Work in Gaza.jpeg",
    imageAlt: "غزہ امداد فیصل آباد",
    layout: "editorial-split",
  },
  {
    id: "adoption",
    badge: "۰۴",
    title: "ورچوئل اپنشن پروگرام",
    intro:
      "ایک خاندان۔ ایک عہد۔ قومی ورچوئل اپنشن پروگرام کے ذریعے ماہانہ کفالت — غزہ کے ایک گھر کے ساتھ مہینہ در مہینہ، صرف خبروں کے چرچے میں نہیں۔",
    highlights: [
      "اپنٹر ماہانہ کفالت کا عہد — ایک منسلک خاندان کی مسلسل ذمہ داری، ایک بار کی رقم نہیں",
      "قومی پروگرام میچنگ کرتا ہے؛ چیپٹر سائن اپ سے پہلی ادائیگی تک رہنمائی کرتا ہے",
      "آپ کے سپانسر خاندان کی اپڈیٹس — بچے، بزرگ اور ان افراد جن کی ذمہ داری آپ نے لی",
      "انفرادی، شادی کے تحائف سے کفالت، یا دوستوں کا گروپ ایک خاندان کے لیے ماہانہ جمع",
      "امداد آج کھلاتی ہے؛ اپنشن کل بھی سہارا دیتی ہے جب ایمرجنسی اپیلیں تھم جائیں",
    ],
    image: "",
    imageAlt: "",
    layout: "timeline",
  },
  {
    id: "social",
    badge: "۰۵",
    title: "سوشل میڈیا مہمات",
    intro:
      "فیصل آباد کی سڑکوں پر جو ہو وہ اسی دن ہر اسکرین تک — ڈیجیٹل ٹیم احتجاج، امداد اور بائیکاٹ کو ایسا مواد بناتی ہے جو لوگ واقعی شیئر کریں۔",
    highlights: [
    ],
    image: "/images/hero-3.jfif",
    imageAlt: "سوشل میڈیا فیصل آباد",
    layout: "social-feed",
  },
  {
    id: "students",
    badge: "۰۶",
    title: "یونیورسٹیوں، مساجد اور مدارس میں طلبہ کی متحرکی",
    intro:
      "تقریباً نو میں سے دس رضاکار طلبہ ہیں — ہفتے میں کیمپس، جمعہ کو مساجد، اور کلاس کے بعد مدارس میں چیپٹر چلتا ہے۔",
    highlights: [
      "~90% رضاکار 30 سے کم — نوجوان مددگار نہیں، چیپٹر چلاتے ہیں",
      "فیصل آباد میڈیکل یونیورسٹی اور شریک کیمپس: ایمبیسیڈر ٹیبل، تقریریں، سائن اپ",
      "شریک مساجد میں جمعہ خطبے اور نماز کے بعد مختصر بریفنگ",
      "مدارس میں مطالعہ حلقے — چھوٹے طلبہ سیکھتے ہیں پھر قیادت کرتے ہیں",
      "تربیت یافتہ سلسلہ: آج کے اسٹال رضاکار کل کے مارچ لیڈ اور سرپرست بنتے ہیں",
    ],
    image: [
      "/images/University Session.jfif",
      "/images/University Session 2.jfif",
      "/images/University Session 3.jfif",
      "/images/Faisalabad Medical University.jfif",
    ],
    imageAlt: "طلبہ متحرکی فیصل آباد",
    layout: "bento",
  },
  {
    id: "boycott",
    badge: "۰۷",
    title: "بائیکاٹ تحریک",
    intro:
      "قبضہ کاؤنٹر پر فنڈ ہوتا ہے — ہم متبادل ہاتھ میں دیتے ہیں، بچنے والے برانڈز بتاتے ہیں، اور فیصل آباد کی ہفتہ وار خریداری بدلتے ہیں۔",
    highlights: [
      "غلام محمد آباد بازاروں، ڈی گراؤنڈ اسٹالز اور کیمپس گیٹس پر چھپے ہوئے بائیکاٹ گائیڈز",
      "قومی پی پی ایف فہرست — کون سے مصنوعات، کیوں، اور کیا خریدیں اس کے بجائے",
      "دکاندار سے مؤدبانہ گفتگو — تنازعہ نہیں، کاؤنٹر پر طلب بدلنا",
      "کیمپس ٹیمیں جب قبضے سے منسلک فرنچائز کھلے تو ہفتہ بھر کی مہم چلاتی ہیں",
      "ہفتہ وار گروسری ایک انتخاب ہے — ہم شہر کو قبضے کی حمایت کیے بغیر خرچ کرنے میں مدد کرتے ہیں",
    ],
    image: "/images/Boycott Movement.jpeg",
    imageAlt: "بائیکاٹ فیصل آباد",
    layout: "manifesto",
  },
];
