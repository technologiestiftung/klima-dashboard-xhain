import React from "react";
import { howXhainContributesData } from "~/data";

const { eevSector2021Mwh } = howXhainContributesData;
type eevPerSector = (typeof eevSector2021Mwh)[0];

interface SectorLabelProps {
	selectedSector: eevPerSector;
}

export const SectorLabel: React.FC<SectorLabelProps> = ({ selectedSector }) => {
	return (
		<>
			<text
				x={0}
				y={0}
				fill="black"
				textAnchor="middle"
				width={122}
				fontSize="16px"
			>
				{selectedSector.sector}
			</text>
			<text
				x={0}
				y={20}
				fill="black"
				textAnchor="middle"
				width={122}
				fontSize="16px"
			>
				{selectedSector.percentage} %
			</text>
		</>
	);
};

// function getFormattedSpeciesName(
// 	speciesName: string | undefined,
// 	i18n: Content,
// ): string {
// 	if (!speciesName) {
// 		return i18n.stats.treeSpeciesStat.other;
// 	}

// 	return (
// 		speciesName.charAt(0).toUpperCase() + speciesName.slice(1).toLowerCase()
// 	);
// }
