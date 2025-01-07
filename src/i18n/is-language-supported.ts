import { AvailableLanguages, translations } from "./translations.ts";

export function isLanguageSupported(
	language: string,
): language is AvailableLanguages {
	return language in translations;
}
