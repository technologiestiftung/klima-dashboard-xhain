import React, { useMemo } from "react";
import { formatDate, setYear } from "date-fns";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";

interface XAxisProps {
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
	xScale: d3.ScaleTime<number, number, never>;
}

const { eevTotalMwh } = howXhainContributesData;

export const XAxis: React.FC<XAxisProps> = ({ sizes, xScale }) => {
	const {
		width,
		height,
		margin: { bottom, left, right },
	} = sizes;

	const tickValues = useMemo(
		() =>
			eevTotalMwh
				.filter((_, i) => i % 3 === 0)
				.map((d) => setYear(new Date(), d.year)),
		[eevTotalMwh],
	);
	const xAxis = useMemo(
		() => tickValues.map((d) => xScale(d)),
		[tickValues, xScale],
	);
	const xAxisLabels = useMemo(
		() => tickValues.map((d) => formatDate(d, "yyyy")),
		[tickValues, xScale],
	);

	return (
		<>
			<g
				transform={`translate(0, ${height - bottom})`}
				fontSize="10"
				textAnchor="middle"
				id={"x-axis"}
			>
				<line stroke="currentColor" x1={left} x2={width - right} />
				{xAxis.map((x, i) => (
					<g
						key={x}
						className="tick"
						opacity="1"
						transform={`translate(${x}, 0)`}
					>
						<text
							fill="black"
							y="9"
							dy="0.71em"
							fontFamily="Raleway"
							fontSize="16px"
						>
							{xAxisLabels[i]}
						</text>
					</g>
				))}
			</g>
		</>
	);
};
