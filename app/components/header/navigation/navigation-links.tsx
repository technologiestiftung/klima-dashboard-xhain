import React from "react";
import { Link, useLocation } from "react-router";
import { i18n, buildLocalizedLink, normalizePath } from "~/i18n/i18n-utils";
import type { AvailableTranslations } from "~/i18n/translations";
import { useMenuStore } from "./menu-store";

const navLinks: {
	path: string;
	labelKey: AvailableTranslations;
	className?: string;
}[] = [
	{
		path: "/",
		labelKey: "header.nav.dashboard",
		className: "lg:hidden",
	},
	{ path: "/climate-concepts/", labelKey: "header.nav.climateConcepts" },
	{ path: "/current-projects/", labelKey: "header.nav.currentProjects" },
	{ path: "/about/", labelKey: "header.nav.about" },
];

export const NavigationLinks: React.FC = () => {
	const { closeMenu } = useMenuStore();
	const location = useLocation();

	const normalizedPathname = normalizePath(location.pathname);

	return (
		<ul className="flex flex-col lg:flex-row gap-7 lg:gap-0 justify-center items-center h-full text-xhain-blue-100 font-bold text-2xl leading-8 lg:text-xl lg:leading-7">
			{/* navigation links */}
			{navLinks.map(({ path, labelKey, className }) => (
				<li key={path}>
					<Link
						to={buildLocalizedLink(path)}
						onClick={closeMenu}
						className={`
						inline-block hover:underline hover:underline-offset-8 hover:decoration-1 
						lg:p-6 lg:hover:no-underline lg:hover:bg-xhain-blue-20 lg:focus:bg-xhain-blue-20 
						focus-xhain-blue-80 
						${normalizedPathname === normalizePath(path) && "bg-xhain-blue-20"}
						${className}`}
					>
						{i18n(labelKey)}
					</Link>
				</li>
			))}

			{/* cta button */}
			<li>
				<Link
					to={buildLocalizedLink("/act-now")}
					onClick={closeMenu}
					className="inline-block items-center p-2.5 lg:p-6 mt-9 lg:mt-0 bg-xhain-blue-50 text-white hover:bg-xhain-blue-60 focus-xhain-blue-80"
				>
					{i18n("header.cta")}
				</Link>
			</li>
		</ul>
	);
};
