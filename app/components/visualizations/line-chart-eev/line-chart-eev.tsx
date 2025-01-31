import * as d3 from "d3";
import React, { useCallback, useRef } from "react";
import { AreaEEV } from "./area-eev";
import { XAxis } from "../shared-chart-components/x-axis";
import { HoverableBarsEEV } from "./hoverable-bars-eev";
import { howXhainContributesData } from "~/data";
import { setYear } from "date-fns";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";
import { YReferenceLines } from "../shared-chart-components/y-reference-lines";

const { eevTotalMwh } = howXhainContributesData;

export const LineChartEEV: React.FC = () => {
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
				d3.extent(eevTotalMwh, (d) => setYear(new Date(), d.year)) as [
					Date,
					Date,
				],
			)
			.range([sizes.margin.left, width - sizes.margin.right]),
		[eevTotalMwh, width],
	);
	const yScale = useCallback(
		d3
			.scaleLinear()
			.domain([
				0,
				d3.max(
					eevTotalMwh,
					(d) => d.heating_mwh + d.electricity_mwh + d.fuels_mwh,
				) as number,
			])
			.nice()
			.range([height, sizes.margin.bottom]),
		[eevTotalMwh, height],
	);

	return (
		<div ref={containerRef}>
			<svg width={width} height={height}>
				<AreaEEV xScale={xScale} yScale={yScale} sizes={sizes} />
				<YReferenceLines
					yScale={yScale}
					sizes={sizes}
					yReferenceLineValues={[4_000_000, 2_000_000]}
				/>
				<XAxis
					xScale={xScale}
					sizes={sizes}
					data={eevTotalMwh}
					filterInterval={3}
				/>
				<HoverableBarsEEV
					xScale={xScale}
					yScale={yScale}
					sizes={sizes}
					parentRef={containerRef}
				/>
			</svg>
		</div>
	);
};
