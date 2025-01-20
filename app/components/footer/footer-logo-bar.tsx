import React from "react";
import { i18n } from "~/i18n/i18n-utils";

export const FooterLogoBar: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center lg:flex-row py-10 md:py-12 lg:py-8 gap-12 lg:gap-[60px] bg-xhain-blue-10">
			<div>
				<a
					href="https://citylab-berlin.org/de/start/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://logos.citylab-berlin.org/logo-citylab-color.svg"
						alt={i18n("footer.cityLABLogoAltText")}
						className="w-60"
					/>
				</a>
			</div>
			<div className="flex flex-col gap-y-4 sm:gap-y-3">
				<h4 className="text-sm leading-5 font-normal">
					{i18n("footer.projectOwnerLabel")}
				</h4>
				<a
					href="https://www.technologiestiftung-berlin.de/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg"
						alt={i18n("footer.tSBLogoAltText")}
						className="w-40"
					/>
				</a>
			</div>
			<div className="flex flex-col gap-y-4 sm:gap-y-3">
				<h4 className="text-sm leading-5 font-normal">
					{i18n("footer.projectExecutionerLabel")}
				</h4>
				<a
					href="https://www.berlin.de/rbmskzl/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://logos.citylab-berlin.org/logo-senatskanzlei-buergermeister-horizontal.svg"
						alt={i18n("footer.footerSentatskanzleiLogoAltText")}
						className="w-[250px]"
					/>
				</a>
			</div>
		</div>
	);
};
