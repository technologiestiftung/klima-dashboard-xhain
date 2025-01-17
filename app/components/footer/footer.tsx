import React from "react";
import { i18n } from "~/i18n/i18n-utils";
const xhainLogo = "/images/xhain-logo.svg";
import { FooterLogoBar } from "./footer-logo-bar";

export const Footer: React.FC = () => {
	return (
		<footer>
			<div className="bg-xhain-blue-50 px-20 py-10">
				<div className="relative container h-max">
					{/* Card Section */}
					<div className="absolute right-0 -top-1/2 rounded-4xl lg:w-1/2 p-5 md:p-11 bg-xhain-blue-10 flex flex-col justify-center gap-12">
						<div className="text-xl md:text-2xl lg:text-3xl leading-7 md:leading-8 lg:leading-9 text-xhain-blue-80">
							<div className="font-bold">{i18n("footer.cardHeading")}</div>
							<br />
							<p className="font-normal">{i18n("footer.cardSubHeading")}</p>
						</div>
						<a
							href={`mailto:${i18n("footer.cardCtaButtonText")}`}
							className="rounded-full bg-xhain-green-50 px-3 py-2.5 w-fit text-xl md:text-2xl leading-7 md:leading-8 font-bold hover:bg-xhain-green-60 focus:outline-none focus:ring-3 focus:ring-xhain-blue-80 focus:ring-offset-4 focus:ring-offset-white"
						>
							{i18n("footer.cardCtaButtonText")}
						</a>
					</div>
					{/* Left Section */}
					<div className="flex flex-col gap-[60px] md:gap-20 items-center lg:items-start pt-40 lg:pt-0">
						<img
							src={xhainLogo}
							alt={i18n("footer.bezirkamtXhainAltText")}
							className="w-[150px] md:w-44 lg:w-52"
						/>

						{/* Left Links */}
						<div className="flex flex-col gap-5 md:gap-4 text-center lg:text-start text-white text-xl leading-7 md:text-2xl md:leading-8 lg:text-xl lg:leading-7 font-semibold">
							<a
								href="https://www.technologiestiftung-berlin.de/impressum"
								className="border-b-[1px] border-transparent hover:border-white focus:ring-2 focus:ring-white focus:px-2 focus:border-transparent"
							>
								{i18n("footer.imprint")}
							</a>
							<a
								href="https://www.technologiestiftung-berlin.de/datenschutz"
								className="border-b-[1px] border-transparent hover:border-white focus:ring-2 focus:ring-white focus:px-2 focus:border-transparent"
							>
								{i18n("footer.pricavyPolicy")}
							</a>
						</div>
					</div>
				</div>
			</div>
			<FooterLogoBar />
		</footer>
	);
};
