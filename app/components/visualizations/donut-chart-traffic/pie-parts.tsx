import React, { useCallback, useMemo } from "react";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";
import {
	xhainBlue30,
	xhainBlue50,
	xhainBlue60,
	xhainBlue80,
} from "~/components/visualizations/colors";

const { traffic2022Summarized } = howXhainContributesData;
type trafficPerSector = (typeof traffic2022Summarized)[0];

const sectorColors = [xhainBlue60, xhainBlue50, xhainBlue30];

interface PiePartsProps {
	radius: number;
	selectedSector: trafficPerSector;
	setSelectedSector: React.Dispatch<React.SetStateAction<trafficPerSector>>;
}

export const PieParts: React.FC<PiePartsProps> = ({
	radius,
	selectedSector,
	setSelectedSector,
}) => {
	const innerRadius = radius * 0.58;

	const pieParts = useMemo(
		() =>
			d3
				.pie<trafficPerSector>()
				.value((d) => d.percentage_thg)
				.padAngle(0.015)(traffic2022Summarized),
		[traffic2022Summarized],
	);

	const arc = useCallback(
		d3
			.arc<d3.PieArcDatum<trafficPerSector>>()
			.innerRadius(innerRadius)
			.outerRadius(radius),
		[innerRadius, radius],
	);

	return (
		<>
			{pieParts.map((piePart, index) => {
				return (
					<path
						key={index}
						className="focus:outline-none"
						d={arc(piePart) ?? ""}
						tabIndex={0}
						fill={sectorColors[index]}
						stroke={
							selectedSector && selectedSector.sector === piePart.data.sector
								? xhainBlue80
								: "none"
						}
						strokeWidth={3}
						strokeDasharray={2}
						onMouseMove={() => setSelectedSector(piePart.data)}
						onClick={() => setSelectedSector(piePart.data)}
						onFocus={() => setSelectedSector(piePart.data)}
					/>
				);
			})}
		</>
	);
};
