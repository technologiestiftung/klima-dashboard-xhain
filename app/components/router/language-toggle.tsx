import React, { useState, useEffect } from "react";
import { useLanguage } from "~/hooks/use-language";
import { LanguageToggleButton } from "../language-toggle-button/language-toggle-button";
import { isLanguageSupported } from "~/i18n/is-language-supported";

export const LanguageToggle: React.FC = () => {
	const currentLanguage = useLanguage();
	const [language, setLanguage] = useState(currentLanguage);

	const toggleLanguage = language === "en" ? "de" : "en";

	const handleLanguageChange = () => {
		const newPath = getHref({ location, language: toggleLanguage });
		window.location.href = newPath;
	};

	useEffect(() => {
		setLanguage(currentLanguage);
	}, [currentLanguage]);

	return (
		<div className="flex mr-5 lg:mr-20 my-2">
			<LanguageToggleButton
				currentLanguage={currentLanguage}
				onLanguageChange={handleLanguageChange}
			/>
		</div>
	);
};

function getHref({
	location,
	language,
}: {
	location: Location;
	language: string;
}) {
	const pathSegments = location.pathname.split("/").filter(Boolean);
	if (isLanguageSupported(pathSegments[0])) pathSegments.shift(); // Remove current language prefix if it exists

	// Add "en" prefix if the target language is "en"
	if (language === "en") pathSegments.unshift("en");

	return `/${pathSegments.join("/")}`;
}
