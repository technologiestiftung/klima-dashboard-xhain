import React from "react";
import { howXhainContributesData } from "~/data";
import { i18n, formatPercentage } from "~/i18n/i18n-utils";

type eevPerSector = (typeof howXhainContributesData.eevSector2021Mwh)[0];

interface SectorLabelProps {
	selectedSector: eevPerSector;
}

export const SectorLabel: React.FC<SectorLabelProps> = ({ selectedSector }) => {
	const label = i18n(`chart.${selectedSector.sector}`);

	return (
		<>
			<foreignObject transform={`translate(-50, -30)`} width="100" height="70">
				<div className="text-center flex flex-col justify-center items-center h-full">
					<div className="">{label}</div>
					<div className="font-semibold">
						{formatPercentage(selectedSector.percentage)}
					</div>
				</div>
			</foreignObject>
		</>
	);
};
