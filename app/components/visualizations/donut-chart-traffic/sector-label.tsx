import React from "react";
import { i18n, formatPercentage } from "~/i18n/i18n-utils";
import { howXhainContributesData } from "~/data";

type trafficPerSector =
	(typeof howXhainContributesData.traffic2022Summarized)[0];

interface SectorLabelProps {
	selectedSector: trafficPerSector;
}

export const SectorLabel: React.FC<SectorLabelProps> = ({ selectedSector }) => {
	const label = i18n(`chart.${selectedSector.sector}`);

	return (
		<>
			<foreignObject transform={`translate(-70, -30)`} width="140" height="70">
				<div className="text-center flex flex-col justify-center items-center h-full">
					<div className="">{label}</div>
					<div className="font-semibold">
						{formatPercentage(selectedSector.percentage_thg)}
					</div>
				</div>
			</foreignObject>
		</>
	);
};
