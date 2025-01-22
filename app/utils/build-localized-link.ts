/**
 * Utility function to build localized URLs based on the current language.
 *
 * @function
 * @param {string} path - The base path of the link (e.g., `/about/`).
 * @param {string} currentLanguage - The current language code (e.g., `"de"`, `"en"`).
 * @returns {string} - The localized URL. For German (`"de"`), it returns the base path.
 *                     For other languages, it prefixes the path with the language code (e.g., `"/en/about/"`).
 *
 * @example
 * // Example Usage
 * const localizedLink = buildLocalizedLink("/about/", "en");
 * console.log(localizedLink); // Output: "/en/about/"
 *
 * const localizedLinkDE = buildLocalizedLink("/about/", "de");
 * console.log(localizedLinkDE); // Output: "/about/"
 */
export const buildLocalizedLink = (path: string, currentLanguage: string) => {
	return currentLanguage === "de" ? path : `/${currentLanguage}${path}`;
};
