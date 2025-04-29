import React from "react";
import { buildLocalizedLink, i18n } from "~/i18n/i18n-utils";
import { Navigation } from "./navigation/navigation";
import { useScrollDirection } from "~/hooks/use-scroll-direction";

export const Header: React.FC = () => {
	const scrollDirection = useScrollDirection();
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
	const isHeaderVisible = !isMobile || scrollDirection === "up";

	return (
		<header
			className={`
        sticky top-0 flex justify-between items-center pl-5 lg:pl-20 z-50 bg-white
        transition-transform duration-500
        ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}
      `}
		>
			<a
				className="font-bold text-2xl leading-8 xl:text-3xl lg:leading-7 py-4 lg:py-6 flex self-end"
				href={buildLocalizedLink("/")}
			>
				{i18n("header.climateDashboard.title")}
			</a>
			<Navigation />
		</header>
	);
};
