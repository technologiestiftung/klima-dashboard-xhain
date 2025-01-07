import { type AvailableLanguages, translations } from "./translations";

export function isLanguageSupported(
	language: string,
): language is AvailableLanguages {
	return language in translations;
}
