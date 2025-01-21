export const buildLocalizedLink = (path: string, currentLanguage: string) => {
	return currentLanguage === "de" ? path : `/${currentLanguage}${path}`;
};
