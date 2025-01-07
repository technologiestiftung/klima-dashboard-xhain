import { en } from "./translations/en";
import { de } from "./translations/de";

export type AvailableLanguages = keyof typeof translations;

export type AvailableTranslations = keyof (typeof translations)["de"];

export const translations = {
	en,
	de,
};
