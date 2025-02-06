import { i18n } from "~/i18n/i18n-utils";
import { LinkArrowIcon } from "~/components/icon/link-arrow-icon";

export const ProjectActionCard = () => {
	return (
		<div className="flex flex-col gap-8 lg:gap-7 rounded-4xl pl-5 pr-8 py-11 lg:p-10 bg-xhain-green-50">
			<div className="flex flex-col gap-3 lg:gap-4">
				<h2 className="text-2xl leading-8 lg:text-3xl lg:leading-9 font-bold">
					{i18n("currentProjects.greenCardTitle")}
				</h2>
				<p className="text-base leading-6 font-normal lg:text-xl lg:leading-7">
					{i18n("currentProjects.greenCardDescription")}
				</p>
			</div>
			<div className="flex flex-row justify-between gap-x-5">
				<a
					href="/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex w-fit items-center leading-6 text-base px-2.5 py-1 gap-x-2 border-2 border-xhain-blue-80 text-xhain-blue-80 rounded-full font-semibold hover:bg-xhain-green-60 focus-xhain-blue-80"
				>
					{i18n("currentProjects.greenCardCtaLabel")}
					<LinkArrowIcon />
				</a>
			</div>
		</div>
	);
};
