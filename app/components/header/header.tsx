import React from "react";
import { Link } from "react-router";
import { i18n } from "~/i18n/i18n-utils";
import { Navigation } from "./navigation/navigation";
import { buildLocalizedLink } from "~/utils/build-localized-link";
import { useLanguage } from "~/hooks/use-language";

const xhainLogo = "/images/xhain-logo.svg";

export const Header: React.FC = () => {
	const currentLanguage = useLanguage();
	return (
		<header className="relative lg:static flex justify-between items-center pl-20">
			<Link to={buildLocalizedLink("/", currentLanguage)}>
				<img
					src={xhainLogo}
					alt={i18n("header.bezirksamtXhainAltText")}
					className="w-28 lg:w-32 py-[15px]"
				/>
			</Link>
			<Navigation />
		</header>
	);
};
