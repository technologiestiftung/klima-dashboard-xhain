import React from "react";
import { buildLocalizedLink, i18n } from "~/i18n/i18n-utils";
import { LinkArrowIcon } from "../icon/link-arrow-icon";

export const DialogContentHBI: React.FC = () => {
	const hbiFactors = [
		{
			title: i18n(`chart.HBI.infoDialog.factors.exposition`),
			content: [i18n(`chart.HBI.infoDialog.factors.exposition`)],
		},
		{
			title: i18n(`chart.HBI.infoDialog.factors.humanSensitivity`),
			content: [
				i18n(`chart.HBI.infoDialog.factors.humanSensitivity.denisty`),
				i18n(`chart.HBI.infoDialog.factors.humanSensitivity.inhabitansYoung`),
				i18n(`chart.HBI.infoDialog.factors.humanSensitivity.inhabitansOld`),
				i18n(`chart.HBI.infoDialog.factors.humanSensitivity.workers`),
				i18n(`chart.HBI.infoDialog.factors.humanSensitivity.socialIndex`),
			],
		},
		{
			title: "Umwelt Sensitivität",
			content: ["Grünvolumen", "Versiegelung"],
		},
	];

	return (
		<div className="flex flex-col gap-y-3 sm:gap-y-5">
			<h2 className="text-xl leading-7 font-bold">{i18n(`chart.HBI.title`)}</h2>

			<div className="font-normal text-base leading-6">
				{i18n(`chart.HBI.infoDialog.description`)}
			</div>

			<div className="flex flex-col items-center gap-2 w-full">
				<div className="flex justify-center items-center gap-2 px-1 bg-xhain-blue-30 font-bold leading-6">
					{i18n(`chart.HBI.infoDialog.factors.title`)}
				</div>
				<div className="h-2 sm:h-4 w-full border-x-xhain-blue-80 border-t-xhain-blue-80 border-x border-t" />
				<div className="flex flex-col sm:flex-row justify-between items-start w-full px-3 gap-2 sm:gap-0">
					{hbiFactors.map((section, index) => (
						<div
							key={index}
							className={`flex flex-col items-start px-2 sm:last:pr-0 border-l border-l-xhain-blue-80 gap-2 sm:gap-10 w-full sm:w-auto
								${index === 1 ? "grow" : "shrink"}`}
						>
							<div className="flex justify-center items-center gap-2 px-1 w-full bg-xhain-blue-30 font-bold leading-6">
								{section.title}
							</div>
							<div className="flex flex-col gap-0.5">
								{section.content.map((item, idx) => (
									<div key={idx}>{item}</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-row text-sm leading-5 gap-2.5">
				<p className="font-semibold">
					{i18n(`chart.HBI.infoDialog.sourceTitle`)}
				</p>
				<div
					className="*:underline"
					dangerouslySetInnerHTML={{
						__html: i18n(`chart.HBI.infoDialog.sourceLabel`),
					}}
				/>
			</div>
			<div className="flex flex-row justify-between gap-x-5">
				<a
					href={buildLocalizedLink(i18n(`chart.HBI.infoDialog.learnMoreLink`))}
					target="_blank"
					rel="noopener noreferrer"
					className="flex w-fit items-center leading-6 text-base px-2.5 py-1 gap-x-2 border-2 border-xhain-blue-50 text-xhain-blue-50 rounded-full font-semibold 
                            hover:border-xhain-blue-80 hover:text-xhain-blue-80 focus:outline focus:outline-3 focus:outline-xhain-blue-80 focus:outline-offset-5"
				>
					{i18n(`chart.infoDialog.learnMoreLabel`)}
					<LinkArrowIcon />
				</a>
			</div>
		</div>
	);
};
