import { en } from "./translations/en.ts";
import { de } from "./translations/de.ts";

export type AvailableLanguages = keyof typeof translations;

export type AvailableTranslations = keyof (typeof translations)["de"];

export const translations = {
	en,
	de,
};
