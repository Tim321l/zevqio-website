import content from "./project-promotion.json";
import type { Locale } from "./locales";
export const getPromotion = (slug: string, locale: Locale) =>
  content[slug as keyof typeof content]?.[locale];
