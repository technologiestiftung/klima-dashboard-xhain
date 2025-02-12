import React from "react";
import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
const arrowForward = "/images/arrow-forward.svg";
import { SmallTooltip } from "~/components/tooltip/small-tooltip.tsx";

export const FeatureSection: React.FC = () => {
	const path = "/current-projects/";
	return (
		<div className="grid grid-cols-1 desktop:grid-cols-2 items-center gap-8 lg:gap-10 mb-60">
			<div className="relative rounded-4xl overflow-hidden">
				<img
					src="/images/project-images/project-image1.png"
					alt={i18n("featureSection.imageAltText")}
					className="w-full h-full"
				/>
				<div className="absolute top-6 left-6">
					<SmallTooltip isDark>
						<span className="text-xhain-blue-80">
							{i18n("featureSection.imageSource")}
						</span>
					</SmallTooltip>
				</div>
			</div>
			<div>
				<h2 className="text-2xl leading-8 font-bold md:text-5xl md:leading-none">
					{i18n("featureSection.title")}
				</h2>
				<p className="text-xl leading-7 font-normal mt-3 mb-7 md:my-7">
					{i18n("featureSection.description")}
				</p>
				<a
					href={buildLocalizedLink(path)}
					className="flex justify-center items-center gap-2 w-fit py-2 px-3.5 rounded-full text-lg leading-7 font-bold text-white bg-xhain-blue-50 hover:bg-xhain-blue-60 focus-xhain-blue-80"
				>
					{i18n("featureSection.cta")}
					<img src={arrowForward} alt="" className="w-6 h-6" />
				</a>
			</div>
		</div>
	);
};
