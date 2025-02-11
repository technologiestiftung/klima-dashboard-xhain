import React, { useRef, useCallback } from "react";
import * as d3 from "d3";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";
import { consequencesData } from "~/data";
import { AreaPath } from "./area-path";
import { Gradient } from "./gradient";
// import { TrendLine } from "./trend-line";
import { XAxis } from "../shared-chart-components/x-axis";
import { YReferenceLines } from "../shared-chart-components/y-reference-lines";
import { setYear } from "date-fns";
import { HoverableBarsAreaChart } from "./hoverable-bars-area-chart";

const { precipitationMm } = consequencesData;

const getXAxisConfig = (width: number) => {
	if (width <= 350) {
		return { filterInterval: 25, removeSecondToLastTick: false };
	}
	if (width <= 480) {
		return { filterInterval: 18, removeSecondToLastTick: false };
	}
	return { filterInterval: 10, removeSecondToLastTick: true };
};

export const AreaChart: React.FC = () => {
	const chartRef = useRef<SVGSVGElement | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const { width } = useContainerWidthHeight(containerRef);
	const { filterInterval, removeSecondToLastTick } = getXAxisConfig(width);

	const height = 260;

	const sizes = {
		width,
		height,
		margin: { top: 1, right: 0, bottom: 25, left: 0 },
	};

	const xScale = useCallback(
		d3
			.scaleTime()
			.domain(
				d3.extent(precipitationMm, (d) => setYear(new Date(), d.year)) as [
					Date,
					Date,
				],
			)
			.range([sizes.margin.left, width - sizes.margin.right]),
		[precipitationMm, width],
	);

	const yScale = useCallback(
		d3
			.scaleLinear()
			.domain([0, d3.max(precipitationMm, (d) => d.rain - 10) as number])
			.nice()
			.range([height, sizes.margin.bottom]),
		[precipitationMm, height],
	);

	return (
		<div ref={containerRef}>
			<svg ref={chartRef} width={width} height={height}>
				<Gradient />
				<AreaPath xScale={xScale} yScale={yScale} sizes={sizes} />
				<YReferenceLines
					yScale={yScale}
					sizes={sizes}
					yReferenceLineValues={[200, 400]}
				/>
				<XAxis
					sizes={sizes}
					xScale={xScale}
					data={precipitationMm}
					filterInterval={filterInterval}
					removeSecondToLastTick={removeSecondToLastTick}
				/>
				{/* commented out for now as it might be added later */}
				{/* <TrendLine data={precipitationMm} xScale={xScale} yScale={yScale} /> */}
				<HoverableBarsAreaChart
					xScale={xScale}
					yScale={yScale}
					sizes={sizes}
					parentRef={containerRef}
				/>
			</svg>
		</div>
	);
};
