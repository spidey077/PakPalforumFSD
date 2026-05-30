export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
