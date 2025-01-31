import React, { useRef, useCallback } from "react";
import * as d3 from "d3";
import { i18n } from "~/i18n/i18n-utils";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";
import { consequencesData } from "~/data";
import { AreaPath } from "./area-path";
import { Gradient } from "./gradient";
import { TrendLine } from "./trend-line";
import { XAxis } from "../shared-chart-components/x-axis";
import { YReferenceLines } from "../shared-chart-components/y-reference-lines";
import { setYear } from "date-fns";

const { precipitationMm } = consequencesData;

export const AreaChart: React.FC = () => {
	const chartRef = useRef<SVGSVGElement | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const { width, height } = useContainerWidthHeight(containerRef);

	const sizes = {
		width,
		height,
		margin: { top: 0, right: 25, bottom: 50, left: 20 },
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
			.domain([0, d3.max(precipitationMm, (d) => d.rain) as number])
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
					filterInterval={10}
				/>
				<TrendLine data={precipitationMm} xScale={xScale} yScale={yScale} />
			</svg>
		</div>
	);
};
