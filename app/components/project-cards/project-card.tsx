import React from "react";
import { SmallTooltip } from "../tooltip/small-tooltip";
import { Link } from "react-router";
import { i18n } from "~/i18n/i18n-utils";

type ProjectCardProps = {
	title: string;
	description: string;
	imageDesktop: string;
	imageMobile: string;
	imageAltText: string;
	imageSourceText: string;
	projectLink: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageDesktop,
	imageMobile,
	imageAltText,
	imageSourceText,
	projectLink,
}) => {
	return (
		<div className="flex flex-col-reverse lg:flex-row max-w-[650px] mx-auto items-stretch">
			{/* Left Section */}
			<div className="w-full lg:w-1/2 flex flex-col p-4 lg:p-7 bg-xhain-blue-10 rounded-b-4xl lg:rounded-l-4xl lg:rounded-br-none">
				<h2 className="mb-3 lg:mb-4 text-2xl leading-8 font-bold break-words hyphens-auto">
					{title}
				</h2>
				<p className="mb-7 lg:mb-4 text-base leading-6 font-normal">
					{description}
				</p>
				<Link
					to={projectLink}
					target="_blank"
					rel="noopener noreferrer"
					className="w-fit rounded-full py-2 px-3.5 text-lg leading-7 font-bold text-white bg-xhain-blue-50 focus-xhain-blue-80 hover:bg-xhain-blue-60"
				>
					{i18n("currentProjects.projectCardCtaLabel")}
				</Link>
			</div>

			{/* Right Section */}
			<div className="w-full lg:w-1/2 relative overflow-hidden h-[200px] lg:h-full rounded-t-4xl rounded-b-none lg:rounded-r-4xl lg:rounded-tl-none">
				<picture>
					{/* Large image for desktops */}
					<source srcSet={imageDesktop} media="(min-width: 1024px)" />
					{/* Small image for mobile */}
					<img
						src={imageMobile}
						alt={imageAltText}
						className="w-full h-full object-cover"
					/>
				</picture>
				{imageSourceText && (
					<div className="absolute top-6 left-6">
						<SmallTooltip isDark>
							<span className="text-xhain-blue-80">{imageSourceText}</span>
						</SmallTooltip>
					</div>
				)}
			</div>
		</div>
	);
};
