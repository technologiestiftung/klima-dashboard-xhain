import React from "react";
import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
import { Navigation } from "./navigation/navigation";
import { useScrollDirection } from "~/hooks/use-scroll-direction";

const xhainLogo = "/images/xhain-logo.svg";

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
			<a href={buildLocalizedLink("/")}>
				<img
					src={xhainLogo}
					alt={i18n("header.bezirksamtXhainAltText")}
					className="w-24 lg:w-32 py-3"
				/>
			</a>
			<Navigation />
		</header>
	);
};
