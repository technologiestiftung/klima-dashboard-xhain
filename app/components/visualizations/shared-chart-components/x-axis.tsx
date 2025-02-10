import React, { useMemo } from "react";
import { formatDate, setYear } from "date-fns";
import * as d3 from "d3";
import { xhainBlue80 } from "../colors";

interface XAxisProps {
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
	xScale: d3.ScaleTime<number, number, never>;
	data: Array<{ year: number }>;
	filterInterval?: number;
	removeSecondToLastTick?: boolean;
}

export const XAxis: React.FC<XAxisProps> = ({
	sizes,
	xScale,
	data,
	filterInterval = 3,
	removeSecondToLastTick = false,
}) => {
	const {
		width,
		height,
		margin: { bottom, left, right },
	} = sizes;

	const firstYear = Math.min(...data.map((d) => d.year));
	const lastYear = Math.max(...data.map((d) => d.year));

	const tickValues = useMemo(() => {
		const ticks = [firstYear, lastYear];

		const filteredYears = data
			.filter((_, i) => i % filterInterval === 0)
			.map((d) => d.year)
			.filter((year) => year !== firstYear && year !== lastYear);

		let allTicks = [...new Set([...ticks, ...filteredYears])].sort(
			(a, b) => a - b,
		);

		if (removeSecondToLastTick && allTicks.length > 2) {
			allTicks = allTicks.slice(0, -2).concat(allTicks.slice(-1)); // Remove second to last year
		}

		return allTicks;
	}, [data, filterInterval, firstYear, lastYear, removeSecondToLastTick]);

	const xAxis = useMemo(
		() => tickValues.map((d) => xScale(setYear(new Date(), d))),
		[tickValues, xScale],
	);
	const xAxisLabels = useMemo(
		() => tickValues.map((d) => formatDate(setYear(new Date(), d), "yyyy")),
		[tickValues],
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
						transform={`translate(${calculateXAxisTicks(i, xAxis.length, x)}, 0)`}
					>
						<text
							fill={xhainBlue80}
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

const calculateXAxisTicks = (index: number, length: number, x: number) => {
	if (index === 0) {
		return x + 20;
	}

	return index === length - 1 ? x - 20 : x;
};
