import { type AvailableTranslations, translations } from "./translations";
import { isLanguageSupported } from "./is-language-supported";
import { useLocation } from "react-router";

export function formatNumber({
	language,
	number,
	round,
}: {
	language: string;
	number: number;
	round?: boolean;
}) {
	let finalLanguage = language;

	if (!isLanguageSupported(language)) {
		finalLanguage = "de";
	}

	if (round) {
		return new Intl.NumberFormat(finalLanguage).format(Math.round(number));
	}

	return new Intl.NumberFormat(finalLanguage).format(number);
}

export function formatDate({
	language,
	date,
}: {
	language: string;
	date: Date;
}) {
	if (!isLanguageSupported(language)) {
		return date.toLocaleDateString("de", {
			dateStyle: "full",
		});
	}

	return date.toLocaleDateString(language, {
		dateStyle: "full",
	});
}

export function formatTemperature({
	language,
	temperature,
}: {
	language: string;
	temperature: number;
}) {
	if (language === "en") {
		return {
			value: Math.round(temperature * 1.8 + 32),
			unit: "°F",
		};
	}
	return {
		value: Math.round(temperature),
		unit: "°C",
	};
}

export function i18n(key: AvailableTranslations) {
	const location = useLocation();
	const language = location.pathname.split("/")[1];

	if (isLanguageSupported(language)) {
		return translations[language][key];
	}

	return translations["de"][key];
}
