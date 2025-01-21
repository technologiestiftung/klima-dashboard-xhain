import { useLocation } from "react-router";
import { isLanguageSupported } from "../i18n/is-language-supported";

export function useLanguage() {
	const location = useLocation();

	const language = location.pathname.split("/")[1];

	if (isLanguageSupported(language)) {
		return language;
	}

	return "de";
}
