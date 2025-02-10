import React from "react";
import { buildLocalizedLink, i18n } from "~/i18n/i18n-utils";
import {
	howXhainContributesData,
	howToReachGoalsData,
	consequencesData,
} from "~/data";
import { LinkArrowIcon } from "../icon/link-arrow-icon";

interface DialogContentProps {
	id:
		| keyof typeof howXhainContributesData
		| keyof typeof howToReachGoalsData
		| keyof typeof consequencesData;
}

export const DialogContent: React.FC<DialogContentProps> = ({ id }) => {
	const title = i18n(`chart.${id}.title`);
	const subTitle = i18n(`chart.${id}.subtitle`);

	const description = i18n(`chart.${id}.infoDialog.description`);
	const sourceTitle = i18n(`chart.${id}.infoDialog.sourceTitle`);
	const sourceLabel = i18n(`chart.${id}.infoDialog.sourceLabel`);

	const learnMoreLabel = i18n(`chart.infoDialog.learnMoreLabel`);
	const learnMoreLink = i18n(`chart.${id}.infoDialog.learnMoreLink`);

	return (
		<div className="flex flex-col gap-y-5">
			<div className="flex flex-col">
				<h2 className="text-xl leading-7 font-bold">{title}</h2>
				<p className="text-xl leading-7 font-normal ">{subTitle}</p>
			</div>
			<div className="font-normal text-base leading-6 pr-2.5 overflow-hidden overflow-y-scroll sm:max-h-none max-h-[300px]">
				<div
					className="dialog-description"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</div>

			<div className="flex flex-row text-sm leading-5 gap-2.5">
				<p className="font-semibold">{sourceTitle}</p>
				<div
					className="*:underline"
					dangerouslySetInnerHTML={{ __html: sourceLabel }}
				/>
			</div>

			<div className="flex flex-row justify-between gap-x-5">
				<a
					href={buildLocalizedLink(learnMoreLink)}
					target="_blank"
					rel="noopener noreferrer"
					className="flex w-fit items-center leading-6 sm:text-base text-xs px-2.5 py-1 gap-x-2 border-2 border-xhain-blue-50 text-xhain-blue-50 rounded-full font-semibold 
                            hover:border-xhain-blue-80 hover:text-xhain-blue-80 focus:outline focus:outline-3 focus:outline-xhain-blue-80 focus:outline-offset-5"
				>
					{learnMoreLabel}
					<LinkArrowIcon />
				</a>
			</div>
		</div>
	);
};
