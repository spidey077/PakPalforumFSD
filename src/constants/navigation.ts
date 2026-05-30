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
