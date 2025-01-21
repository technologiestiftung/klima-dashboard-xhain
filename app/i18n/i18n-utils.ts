import { type AvailableTranslations, translations } from "./translations";
import { isLanguageSupported } from "./is-language-supported";
import { useLocation } from "react-router";

export function formatNumber(number: number, options?: { toFixed?: number }) {
	const { toFixed } = options ? options : { toFixed: 0 };

	const language = getLanguage();

	if (toFixed === undefined) {
		return new Intl.NumberFormat(language).format(number);
	}

	return new Intl.NumberFormat(language).format(
		Number(number.toFixed(toFixed)),
	);
}

export function formatPercentage(percentage: number) {
	const language = getLanguage();

	return new Intl.NumberFormat(language, {
		style: "percent",
		maximumFractionDigits: 0,
	}).format(percentage);
}

export function formatDate(date: Date) {
	const language = getLanguage();

	return date.toLocaleDateString(language, {
		dateStyle: "full",
	});
}

export function formatTemperature(temperature: number) {
	const language = getLanguage();

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
	const language = getLanguage();

	return translations[language][key];
}

export function getLanguage() {
	const location = useLocation();
	const language = location.pathname.split("/")[1];

	if (isLanguageSupported(language)) {
		return language;
	}

	return "de";
}
