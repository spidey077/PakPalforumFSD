import { domainOrder, type DomainId } from "@/data/domains";

export type NavSectionId = DomainId | "contact";

export const NAV_ITEMS: { id: NavSectionId; key: NavSectionId }[] = [
  ...domainOrder.map((id) => ({ id, key: id })),
  { id: "contact", key: "contact" },
];

export const SECTION_IDS = {
  hero: "hero",
  awareness: "awareness",
  contact: "contact",
} as const;

export const JOIN_US_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScmKyTfY3oCA069IjnZRS-mL_RfHfXpHA2HfKkIoLAF0lw4Tg/viewform";
