import * as d3 from "d3";
import React, { useCallback, useRef } from "react";
import { YReferenceLines } from "../shared-chart-components/y-reference-lines";
import { AreaReductionPath } from "./area-reduction-path";
import { XAxis } from "../shared-chart-components/x-axis";
import { HoverableBarsReductionPath } from "./hoverable-bars-reduction-path";
import { howToReachGoalsData } from "~/data";
import { setYear } from "date-fns";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";

const { reductionPathScenario175Thg } = howToReachGoalsData;

export const LineChartReductionPath: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { width } = useContainerWidthHeight(containerRef);

	const height = 528;

	const sizes = {
		width,
		height,
		margin: { top: 0, right: 25, bottom: 50, left: 20 },
	};

	const xScale = useCallback(
		d3
			.scaleTime()
			.domain(
				d3.extent(reductionPathScenario175Thg, (d) =>
					setYear(new Date(), d.year),
				) as [Date, Date],
			)
			.range([sizes.margin.left, width - sizes.margin.right]),
		[reductionPathScenario175Thg, width],
	);

	const yScale = useCallback(
		d3
			.scaleLinear()
			.domain([
				0,
				d3.max(
					reductionPathScenario175Thg,
					(d) => d.electricity_total_tons + d.heating_total_tons,
				) as number,
			])
			.nice()
			.range([height, sizes.margin.bottom]),
		[reductionPathScenario175Thg, height],
	);

	return (
		<div className="h-full" ref={containerRef}>
			<svg width={width} height={height}>
				<AreaReductionPath xScale={xScale} yScale={yScale} sizes={sizes} />
				<YReferenceLines
					yScale={yScale}
					sizes={sizes}
					yReferenceLineValues={[1_000_000, 500_000]}
				/>
				<XAxis
					xScale={xScale}
					sizes={sizes}
					data={reductionPathScenario175Thg}
					filterInterval={4.5}
				/>
				<HoverableBarsReductionPath
					xScale={xScale}
					yScale={yScale}
					sizes={sizes}
					parentRef={containerRef}
				/>
			</svg>
		</div>
	);
};
