import React from "react";
import { type Location, useLocation } from "react-router";

export const LanguageToggle: React.FC = () => {
	const location = useLocation();
	const language = location.pathname.split("/")[1];

	const nonActiveLanguage = language === "en" ? "de" : "en";

	const href = getHref({ location, language });

	return (
		<a href={href}>
			<p className="font-semibold hover:underline text-lg">
				{nonActiveLanguage.toUpperCase()}
			</p>
		</a>
	);
};

function getHref({
	location,
	language,
}: {
	location: Location;
	language: string;
}) {
	const currentHref = location.pathname;

	if (language === "en") {
		return `${currentHref.replace("/en", "")}`;
	}

	return `/en${currentHref}`;
}
