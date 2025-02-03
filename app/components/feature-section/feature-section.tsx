import React from "react";
import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
import { Link } from "react-router";
const arrowForward = "/images/arrow-forward.svg";

export const FeatureSection: React.FC = () => {
	const path = "/current-projects/";
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10 mb-60">
			<div className="rounded-4xl overflow-hidden">
				<img
					src="/images/project-images/project-image1.png"
					alt={i18n("featureSection.imageAltText")}
					className="w-full h-full"
				/>
			</div>
			<div>
				<h2 className="text-2xl leading-8 font-bold lg:text-5xl lg:leading-non/">
					{i18n("featureSection.title")}
				</h2>
				<p className="text-xl leading-7 font-normal mt-3 mb-7 lg:my-7">
					{i18n("featureSection.description")}
				</p>
				<Link
					to={buildLocalizedLink(path)}
					className="flex justify-center items-center gap-2 w-fit py-2 px-3.5 rounded-full text-lg leading-7 font-bold text-white bg-xhain-blue-50 hover:bg-xhain-blue-60 focus-xhain-blue-80"
				>
					{i18n("featureSection.cta")}
					<img src={arrowForward} alt="" className="w-6 h-6" />
				</Link>
			</div>
		</div>
	);
};
