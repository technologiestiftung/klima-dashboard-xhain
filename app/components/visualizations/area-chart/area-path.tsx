import React, { useMemo } from "react";
import * as d3 from "d3";
import { consequencesData } from "~/data";
import { setYear } from "date-fns";

const { precipitationMm } = consequencesData;

interface AreaProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
}

export const AreaPath: React.FC<AreaProps> = ({ xScale, yScale, sizes }) => {
	const {
		margin: { top, bottom },
	} = sizes;

	const areaPath = useMemo(
		() =>
			d3
				.area<{ year: number; rain: number }>()
				.x((d) => xScale(setYear(new Date(), d.year)))
				.y0((d) => yScale(d.rain) - bottom + top)
				.y1(() => yScale(0) - bottom)
				.curve(d3.curveCardinal.tension(0.5)),
		[xScale, yScale, sizes.height],
	);

	return (
		<path
			className="area"
			d={areaPath(precipitationMm) || undefined}
			fill="url(#areaGradient)"
		/>
	);
};
