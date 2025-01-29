import React from "react";
import Markdown from "react-markdown";
import { i18n } from "~/i18n/i18n-utils";
import { howXhainContributesData, consequencesData } from "~/data";
import { LinkArrowIcon } from "../icon/link-arrow-icon";

interface DialogContentProps {
	id: keyof typeof howXhainContributesData | keyof typeof consequencesData;
}

export const DialogContent: React.FC<DialogContentProps> = ({ id }) => {
	const title = i18n(`chart.${id}.title`);
	const subTitle = i18n(`chart.${id}.subtitle`);

	const description = i18n(`chart.infoDialog.${id}.description`);
	const sourceTitle = i18n(`chart.infoDialog.${id}.sourceTitle`);
	const sourceLabel = i18n(`chart.infoDialog.${id}.sourceLabel`);

	const learnMoreLabel = i18n(`chart.infoDialog.learnMoreLabel`);
	const learnMoreLink = i18n(`chart.infoDialog.${id}.learnMoreLink`);

	return (
		<div className="flex flex-col gap-y-5">
			<div className="flex flex-col">
				<h2 className="text-xl leading-7 font-bold">{title}</h2>
				<p className="text-xl leading-7 font-normal ">{subTitle}</p>
			</div>

			<p className="font-normal text-base leading-6 overflow-y-scroll max-h-[312px] dialog-scrollbar pr-2.5">
				<Markdown className="markdown-container">{description}</Markdown>
			</p>

			<div className="flex flex-row text-sm leading-5 gap-2.5">
				<p className="font-semibold">{sourceTitle}</p>
				<Markdown className="markdown-container">{sourceLabel}</Markdown>
			</div>

			<div className="flex flex-row justify-between gap-x-5">
				<a
					href={learnMoreLink}
					className="flex w-fit items-center leading-6 text-base px-2.5 py-1 gap-x-2 border-2 border-xhain-blue-50 text-xhain-blue-50 rounded-full font-semibold 
                            hover:border-xhain-blue-80 hover:text-xhain-blue-80 focus:outline focus:outline-3 focus:outline-xhain-blue-80 focus:outline-offset-5"
				>
					{learnMoreLabel}
					<LinkArrowIcon />
				</a>
			</div>
		</div>
	);
};
