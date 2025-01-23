import React, { useCallback, useMemo } from "react";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";

const { eevSector2021Mwh } = howXhainContributesData;
type eevPerSector = (typeof eevSector2021Mwh)[0];

const sectorColors = [
	"--color-xhain-blue-60",
	"--color-xhain-blue-50",
	"--color-xhain-blue-30",
	"--color-xhain-blue-40",
];

interface PiePartsProps {
	radius: number;
	selectedSector: eevPerSector;
	setSelectedSector: React.Dispatch<React.SetStateAction<eevPerSector>>;
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
				.pie<eevPerSector>()
				.value((d) => d.total_mwh)
				.padAngle(0.015)(eevSector2021Mwh),
		[eevSector2021Mwh],
	);

	const arc = useCallback(
		d3
			.arc<d3.PieArcDatum<eevPerSector>>()
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
						className="focus:outline-hidden"
						d={arc(piePart) ?? ""}
						tabIndex={0}
						style={{
							stroke:
								selectedSector && selectedSector.sector === piePart.data.sector
									? "var(--color-xhain-blue-80)"
									: "none",
							fill: `var(${sectorColors[index]})`,
						}}
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
