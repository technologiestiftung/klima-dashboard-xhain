import React from "react";
import { howXhainContributesData } from "~/data";
import { formatPercentage, i18n } from "~/i18n/i18n-utils";

const { heatingMix2021Summarized } = howXhainContributesData;

const colors = [
	"bg-xhain-green-80",
	"bg-xhain-green-60",
	"bg-xhain-green-50",
	"bg-xhain-green-40",
];

export const StackedBarChart: React.FC = () => {
	return (
		<div className="w-full flex flex-col h-fit">
			<p className="pb-10 pt-4">
				{i18n(`chart.heatingMix2021Summarized.description`)}
			</p>
			<div className="flex flex-col h-[640px]">
				{heatingMix2021Summarized.map((data, index) => (
					<div
						key={index}
						className={`w-full flex justify-between items-end h-fit relative rounded-lg min-h-[2px] ${colors[index]}`}
						style={{
							height: data.percentage * 100 + "%",
						}}
					>
						<span className={`font-bold m-2.5`}>
							{i18n(`chart.heatingMix2021Summarized.${data.source}`)}
						</span>
						<span className={`font-bold m-2.5`}>
							{formatPercentage(data.percentage)}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
