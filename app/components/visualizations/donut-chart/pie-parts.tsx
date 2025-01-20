import React, { useCallback, useMemo } from "react";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";

interface Sector {
	sector: string;
	total_mwh: number;
	percentage: number;
}

interface PiePartsProps {
	radius: number;
	selectedSector: Sector;
	setSelectedSector: React.Dispatch<React.SetStateAction<Sector>>;
}

const { eevSector2021Mwh } = howXhainContributesData;

export const PieParts: React.FC<PiePartsProps> = ({
	radius,
	selectedSector,
	setSelectedSector,
}) => {
	const innerRadius = radius * 0.65;

	const pieParts = useMemo(
		() => d3.pie<Sector>().value((d) => d.total_mwh)(eevSector2021Mwh),
		[eevSector2021Mwh],
	);

	const arc = useCallback(
		d3
			.arc<d3.PieArcDatum<Sector>>()
			.innerRadius(innerRadius)
			.outerRadius(radius)
			.cornerRadius(5),
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
								? "#1169EE"
								: "white"
						}
						strokeWidth={2.25}
						onMouseMove={() => setSelectedSector(piePart.data)}
						onClick={() => setSelectedSector(piePart.data)}
					/>
				);
			})}
		</>
	);
};
