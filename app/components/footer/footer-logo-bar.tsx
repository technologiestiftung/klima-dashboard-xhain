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
			<div className="flex flex-col justify-center items-center lg:items-start lg:flex-row gap-12 lg:gap-[60px]">
				<div className="flex flex-col gap-y-4 sm:gap-y-3 items-center lg:items-start">
					<p className="text-sm leading-5 font-normal">
						{i18n("footer.projectOwnerLabel")}
					</p>
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
				<div className="flex flex-col gap-y-4 sm:gap-y-3 items-center lg:items-start">
					<p className="text-sm leading-5 font-normal">
						{i18n("footer.projectSupporter")}
					</p>
					<a
						href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/artikel.1408194.php"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={"/images/xhain-logo.svg"}
							alt={i18n("footer.xhainLogoAltText")}
							className="w-24"
						/>
					</a>
				</div>
				<div className="flex flex-col gap-y-4 sm:gap-y-3 items-center lg:items-start">
					<p className="text-sm leading-5 font-normal">
						{i18n("footer.projectExecutionerLabel")}
					</p>
					<a
						href="https://www.berlin.de/rbmskzl/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://logos.citylab-berlin.org/logo-senatskanzlei-buergermeister-horizontal.svg"
							alt={i18n("footer.footerSenatskanzleiLogoAltText")}
							className="w-[250px]"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};
