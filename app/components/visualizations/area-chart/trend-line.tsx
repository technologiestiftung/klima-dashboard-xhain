import React from "react";
import * as d3 from "d3";
import { setYear } from "date-fns";
import { formatNumber } from "~/i18n/i18n-utils";

interface TrendLineProps {
	data: { year: number; rain: number }[];
	xScale: d3.ScaleTime<number, number>;
	yScale: d3.ScaleLinear<number, number>;
}

export const TrendLine: React.FC<TrendLineProps> = ({
	data,
	xScale,
	yScale,
}) => {
	const n = data.length;
	const sumX = d3.sum(data, (d) => d.year);
	const sumY = d3.sum(data, (d) => d.rain);
	const sumXY = d3.sum(data, (d) => d.year * d.rain);
	const sumX2 = d3.sum(data, (d) => d.year * d.year);

	// Calculate slope (m) and intercept (b) using the least squares method
	const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
	const b = (sumY - m * sumX) / n;

	// Get the start and end points of the trend line
	const xMin = d3.min(data, (d) => d.year) as number;
	const xMax = d3.max(data, (d) => d.year) as number;

	const trendLine = [
		{ x: xScale(setYear(new Date(), xMin)), y: yScale(m * xMin + b) },
		{ x: xScale(setYear(new Date(), xMax)), y: yScale(m * xMax + b) },
	];

	// change of the trend
	const change = ((m * xMax + b - (m * xMin + b)) / (m * xMin + b)) * 100;

	return (
		<>
			<line
				x1={trendLine[0].x}
				y1={trendLine[0].y}
				x2={trendLine[1].x}
				y2={trendLine[1].y}
				stroke="black"
				strokeWidth="2"
				strokeDasharray="5,5"
			/>
			<text
				x={trendLine[0].x + 10}
				y={trendLine[0].y + 18}
				className="leading-6 font-bold"
			>
				Trend
			</text>
			<text
				x={trendLine[1].x - 40}
				y={trendLine[1].y + 18}
				className="leading-6 font-bold"
			>
				{formatNumber(change)} %
			</text>
		</>
	);
};
