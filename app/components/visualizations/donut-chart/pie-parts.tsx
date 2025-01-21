import React, { useCallback, useMemo } from "react";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";

const { eevSector2021Mwh } = howXhainContributesData;
type eevPerSector = (typeof eevSector2021Mwh)[0];

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
		() => d3.pie<eevPerSector>().value((d) => d.total_mwh)(eevSector2021Mwh),
		[eevSector2021Mwh],
	);

	const arc = useCallback(
		d3
			.arc<d3.PieArcDatum<eevPerSector>>()
			.innerRadius(innerRadius)
			.outerRadius(radius)
			.padAngle(0.015),
		[innerRadius, radius],
	);

	return (
		<>
			{pieParts.map((piePart, index) => {
				return (
					<path
						key={index}
						className="pie-part"
						d={arc(piePart) ?? ""}
						fill="red"
						stroke={
							selectedSector && selectedSector.sector === piePart.data.sector
								? "black"
								: "none"
						}
						strokeWidth={3}
						strokeDasharray={2}
						style={
							selectedSector && selectedSector.sector === piePart.data.sector
								? { zIndex: 10 }
								: { zIndex: 0 }
						}
						onMouseMove={() => setSelectedSector(piePart.data)}
						onClick={() => setSelectedSector(piePart.data)}
					/>
				);
			})}
		</>
	);
};
