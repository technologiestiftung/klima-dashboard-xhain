import React, { useState, useRef } from "react";
import { PieParts } from "./pie-parts";
import { SectorLabel } from "./sector-label";
import { howXhainContributesData } from "~/data";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";

const { traffic2022Summarized } = howXhainContributesData;
type trafficPerSector = (typeof traffic2022Summarized)[0];

export const DonutChartTraffic: React.FC = () => {
	const [selectedSector, setSelectedSector] = useState<trafficPerSector>(
		traffic2022Summarized[0],
	);

	const containerRef = useRef<HTMLDivElement>(null);
	const { width, height } = useContainerWidthHeight(containerRef);

	const radius = Math.min(width, height) / 2.5;

	return (
		<div className="relative" id="area-container" ref={containerRef}>
			<svg width={width} height={height}>
				<g transform={`translate(${width / 2},${height / 2})`}>
					<PieParts
						radius={radius}
						selectedSector={selectedSector}
						setSelectedSector={setSelectedSector}
					/>
					<SectorLabel selectedSector={selectedSector} />
				</g>
			</svg>
		</div>
	);
};
