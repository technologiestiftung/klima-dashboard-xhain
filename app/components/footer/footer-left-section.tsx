import React from "react";
import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
import { Link } from "react-router";
const xhainLogo = "/images/xhain-logo-negative.svg";

export const FooterLeftSection: React.FC = () => {
	return (
		<div className="flex flex-col gap-[60px] md:gap-20 items-center lg:items-start pt-40 lg:pt-0">
			<img
				src={xhainLogo}
				alt={i18n("footer.bezirksamtXhainAltText")}
				className="w-[150px] md:w-44 lg:w-52"
			/>
			<div className="flex flex-col gap-5 md:gap-4 items-center lg:items-start text-white text-xl leading-7 md:text-2xl md:leading-8 lg:text-xl lg:leading-7 font-semibold">
				<Link
					to={buildLocalizedLink("/imprint/")}
					className="w-fit hover:underline hover:underline-offset-8 hover:decoration-1 focus-white"
				>
					{i18n("footer.imprint")}
				</Link>
				<Link
					to={buildLocalizedLink("/privacy/")}
					className="w-fit hover:underline hover:underline-offset-8 hover:decoration-1 focus-white"
				>
					{i18n("footer.privacyPolicy")}
				</Link>
			</div>
		</div>
	);
};
