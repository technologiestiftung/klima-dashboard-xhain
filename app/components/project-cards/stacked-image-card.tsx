import { SmallTooltip } from "~/components/tooltip/small-tooltip";
import { i18n } from "~/i18n/i18n-utils";

export const StackedImageCard = () => {
	const dimensions = {
		base: "w-[293px] h-[187px]",
		lg: "lg:w-[503px] lg:h-[322px]",
	};

	return (
		<div className="absolute xl:top-44">
			<div
				className={`relative rounded-10px lg:rounded-15px rotate-[3.332deg] ${dimensions.base} ${dimensions.lg} bg-xhain-blue-40`}
			/>
			<div
				className={`absolute top-6 -left-6 lg:top-10 lg:-left-10 rounded-10px lg:rounded-15px ${dimensions.base} ${dimensions.lg} bg-xhain-blue-80 z-10`}
			>
				<img
					src="/images/project-images/RZ_Headerbild_Desktop_klein.webp"
					className="relative rounded-10px"
					alt={i18n("currentProjects.featureImageAltText")}
				/>
				<div className="absolute top-5 left-5 lg:top-6 lg:left-6">
					<SmallTooltip isDark>
						<span className="text-xhain-blue-80">
							{i18n("currentProjects.featureImageSource")}
						</span>
					</SmallTooltip>
				</div>
			</div>
		</div>
	);
};
