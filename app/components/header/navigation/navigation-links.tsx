import React from "react";
import { Link } from "react-router";
import { i18n } from "~/i18n/i18n-utils";
import { useLanguage } from "~/hooks/use-language";
import { buildLocalizedLink } from "~/utils/build-localized-link";
import type { AvailableTranslations } from "~/i18n/translations";

interface NavigationLinksProps {
	closeMenu: () => void;
}

const navLinks: {
	path: string;
	labelKey: AvailableTranslations;
	className?: string;
}[] = [
	{ path: "/", labelKey: "header.nav.dashboard", className: "lg:hidden" },
	{ path: "/climate-concepts/", labelKey: "header.nav.climateConcepts" },
	{ path: "/current-projects/", labelKey: "header.nav.currentProjects" },
	{ path: "/about/", labelKey: "header.nav.about" },
];

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
	closeMenu,
}) => {
	const currentLanguage = useLanguage();

	return (
		<ul className="flex flex-col lg:flex-row gap-7 lg:gap-0 justify-center items-center lg:items-start h-full text-xhain-blue-100 font-bold text-2xl leading-8 lg:text-xl lg:leading-7">
			{/* navigation links */}
			{navLinks.map(({ path, labelKey, className }) => (
				<li
					key={path}
					className={`lg:py-7 lg:px-6 hover:underline hover:underline-offset-8 hover:decoration-1 lg:hover:no-underline lg:hover:bg-xhain-blue-20 lg:focus:bg-xhain-blue-20 focus-xhain-blue-80 ${className ?? ""}`}
				>
					<Link
						to={buildLocalizedLink(path, currentLanguage)}
						onClick={closeMenu}
					>
						{i18n(labelKey)}
					</Link>
				</li>
			))}

			{/* cta button */}
			<li className="w-fit flex items-center p-[10px] lg:py-7 lg:px-6 mt-9 lg:mt-0 bg-xhain-blue-50 text-white hover:bg-xhain-blue-60 focus-xhain-blue-80">
				<Link
					to={buildLocalizedLink("/act-now", currentLanguage)}
					onClick={closeMenu}
				>
					{i18n("header.cta")}
				</Link>
			</li>
		</ul>
	);
};
