import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AvailableLanguages, translations } from "./translations";
import { isLanguageSupported } from "./is-language-supported";
import { useUrlState } from "../components/router/store";

interface I18NState {
	language: string;
	setLanguage: (language: string) => void;
	formatNumber: (number: number, round?: boolean) => string;
	formatDate: (date: Date) => string;
	formatTemperature: (temperature: number) => { value: number; unit: string };
	i18n: () => Record<string, string>;
}

export const useI18nStore = create<I18NState>()(
	persist(
		(set, get) => ({
			language: new URL(window.location.href).searchParams.get("lang") ?? "de",
			setLanguage: (language: string) => {
				useUrlState.getState().addSearchParam("lang", language);
				set({ language });
			},
			formatNumber: (number: number, round?: boolean) => {
				if (round) {
					return new Intl.NumberFormat(get().language).format(
						Math.round(number),
					);
				}
				return new Intl.NumberFormat(get().language).format(number);
			},
			formatDate: (date: Date) => {
				return date.toLocaleDateString(get().language, {
					dateStyle: "full",
				});
			},
			formatTemperature: (temperature: number) => {
				if (get().language === "en") {
					return {
						value: Math.round(temperature * 1.8 + 32),
						unit: "°F",
					};
				}
				return {
					value: Math.round(temperature),
					unit: "°C",
				};
			},
			i18n: () => {
				if (isLanguageSupported(get().language)) {
					return translations[get().language as AvailableLanguages];
				}

				return translations["de"];
			},
		}),
		{ name: "i18n-store" },
	),
);
