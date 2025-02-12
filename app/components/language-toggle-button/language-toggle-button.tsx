import React from "react";
import { Link, useLocation } from "react-router";
import { getLanguage, i18n } from "~/i18n/i18n-utils";
import { isLanguageSupported } from "~/i18n/is-language-supported";
import { trackInteraction } from "../../analytics/matomo";

export const LanguageToggleButton: React.FC = () => {
	const currentLanguage = getLanguage();
	const location = useLocation();

	return (
		<div className="flex mr-5 lg:mr-20 my-2">
			<div className="relative flex items-center h-8 w-[86px] rounded-full p-[2px] bg-xhain-blue-20">
				<div className="flex gap-0.5 h-7 w-20 items-center justify-center">
					{/* DE Button */}
					<Link
						to={getHref(location.pathname, "de")}
						className={`absolute flex items-center justify-center left-0.5 w-10 h-7 rounded-full text-sm font-semibold leading-5 z-10 ${
							currentLanguage === "de"
								? "text-white"
								: "text-xhain-blue-100 hover:bg-xhain-blue-30"
						}`}
						aria-label={i18n("languageToggleButton.ariaLabelDeLink")}
						onClick={() =>
							trackInteraction({
								eventAction: "switch-language",
								eventName: `from en to de`,
							})
						}
					>
						DE
					</Link>
					{/* EN Button */}
					<Link
						to={getHref(location.pathname, "en")}
						className={`absolute flex items-center justify-center right-0.5 w-10 h-7 rounded-full text-sm font-semibold leading-5 z-10 ${
							currentLanguage === "en"
								? "text-white"
								: "text-xhain-blue-100 hover:bg-xhain-blue-30"
						}`}
						aria-label={i18n("languageToggleButton.ariaLabelEnLink")}
						onClick={() =>
							trackInteraction({
								eventAction: "switch-language",
								eventName: `from de to en`,
							})
						}
					>
						EN
					</Link>
				</div>
				{/* Slider */}
				<div
					className={`absolute w-[39px] h-7 bg-xhain-blue-50 rounded-full transition-transform ${
						currentLanguage === "de" ? "translate-x-0" : "translate-x-[43px]"
					}`}
				/>
			</div>
		</div>
	);
};

// Generates the href for a specific language based on the current path.
const getHref = (pathname: string, language: string): string => {
	const pathSegments = pathname.split("/").filter(Boolean);

	// Remove current language prefix if it exists
	if (isLanguageSupported(pathSegments[0])) {
		pathSegments.shift();
	}

	// Add "en" prefix for English
	if (language === "en") {
		pathSegments.unshift("en");
	}

	return `/${pathSegments.join("/")}`;
};
