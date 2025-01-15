import * as d3 from "d3";
import React, { useCallback, useRef } from "react";
import { YReferenceLines } from "./y-reference-lines";
import { Area } from "./area";
import { XAxis } from "./x-axis";
import { HoverableBars } from "./hoverable-bars";
import { howXhainContributesData } from "~/data";
import { setYear } from "date-fns";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";

const { eevTotalMwh } = howXhainContributesData;

export const LineChart: React.FC = () => {
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
			.domain([0, d3.max(eevTotalMwh, (d) => d.heating_mwh) as number])
			.nice()
			.range([height, sizes.margin.bottom]),
		[eevTotalMwh, height],
	);

	return (
		<div ref={containerRef}>
			<svg width={width} height={height}>
				<Area xScale={xScale} yScale={yScale} sizes={sizes} />
				<YReferenceLines yScale={yScale} sizes={sizes} />
				<XAxis xScale={xScale} sizes={sizes} />
				<HoverableBars
					xScale={xScale}
					yScale={yScale}
					sizes={sizes}
					parentRef={containerRef}
				/>
			</svg>
		</div>
	);
};
