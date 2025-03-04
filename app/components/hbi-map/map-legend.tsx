import React from "react";
import { i18n } from "../../i18n/i18n-utils";

export const MapLegend: React.FC = () => {
	const legendItems = [
		{ color: "bg-white", label: i18n("chart.HBI.legend.verylow") },
		{ color: "bg-xhain-blue-30", label: i18n("chart.HBI.legend.low") },
		{ color: "bg-xhain-blue-40", label: i18n("chart.HBI.legend.medium") },
		{ color: "bg-xhain-blue-50", label: i18n("chart.HBI.legend.high") },
		{ color: "bg-xhain-blue-70", label: i18n("chart.HBI.legend.veryhigh") },
	];
	return (
		<div className="desktop:absolute desktop:top-10 desktop:left-10 flex flex-col items-start desktop:w-64">
			<div className="text-base leading-6 font-bold mb-7 bg-xhain-blue-10">
				{i18n("chart.HBI.legend.title")}
			</div>
			<div className="flex flex-row flex-wrap desktop:flex-col gap-2">
				{legendItems.map((item) => (
					<div key={item.label} className="flex items-center gap-2.5">
						<div
							className={`size-6 rounded-full border border-xhain-blue-10 ${item.color}`}
						/>
						<div className="text-base leading-6 font-normal bg-xhain-blue-10">
							{item.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
