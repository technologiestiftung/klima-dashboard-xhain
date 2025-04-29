import React from "react";
import { i18n } from "~/i18n/i18n-utils";

export const FooterLeftSection: React.FC = () => {
	return (
		<div className="flex flex-col gap-[60px] md:gap-20 items-center lg:items-start pt-40 lg:pt-0">
			<span className="hidden md:flex md:h-[30px]" />
			<div className="flex flex-col gap-5 md:gap-4 items-center lg:items-start text-white text-xl leading-7 md:text-2xl md:leading-8 lg:text-xl lg:leading-7 font-semibold">
				<a
					href="https://www.technologiestiftung-berlin.de/impressum"
					className="w-fit hover:underline hover:underline-offset-8 hover:decoration-1 focus-white"
				>
					{i18n("footer.imprint")}
				</a>
				<a
					href="https://www.technologiestiftung-berlin.de/datenschutz"
					className="w-fit hover:underline hover:underline-offset-8 hover:decoration-1 focus-white"
				>
					{i18n("footer.privacy")}
				</a>
				<a
					href="https://www.technologiestiftung-berlin.de/erklaerung-zur-barrierefreiheit"
					className="w-fit hover:underline hover:underline-offset-8 hover:decoration-1 focus-white"
				>
					{i18n("footer.accessibility")}
				</a>
				<a
					href={i18n("footer.feedbackLink")}
					className="w-fit hover:underline hover:underline-offset-8 hover:decoration-1 focus-white"
					target="_blank"
					rel="noopener noreferrer"
				>
					{i18n("footer.feedback")}
				</a>
			</div>
		</div>
	);
};
