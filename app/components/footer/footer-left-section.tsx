import React from "react";
import { i18n } from "~/i18n/i18n-utils";
const xhainLogo = "/images/xhain-logo.svg";

export const FooterLeftSection: React.FC = () => {
	return (
		<div className="flex flex-col gap-[60px] md:gap-20 items-center lg:items-start pt-40 lg:pt-0">
			<img
				src={xhainLogo}
				alt={i18n("footer.bezirksamtXhainAltText")}
				className="w-[150px] md:w-44 lg:w-52"
			/>
			<div className="flex flex-col gap-5 md:gap-4 items-center lg:items-start text-white text-xl leading-7 md:text-2xl md:leading-8 lg:text-xl lg:leading-7 font-semibold">
				<a
					href="https://www.technologiestiftung-berlin.de/impressum"
					className="w-fit border-b-[1px] border-transparent hover:border-white focus:ring-2 focus:ring-white focus:px-2 focus:border-transparent"
				>
					{i18n("footer.imprint")}
				</a>
				<a
					href="https://www.technologiestiftung-berlin.de/datenschutz"
					className="w-fit border-b-[1px] border-transparent hover:border-white focus:ring-2 focus:ring-white focus:px-2 focus:border-transparent"
				>
					{i18n("footer.privacyPolicy")}
				</a>
			</div>
		</div>
	);
};
