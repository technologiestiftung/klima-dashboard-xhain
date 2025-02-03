import * as d3 from "d3";
import React, { useCallback, useRef } from "react";
import { YReferenceLines } from "../shared-chart-components/y-reference-lines";
import { AreaReductionPath } from "./area-reduction-path";
import { XAxis } from "../shared-chart-components/x-axis";
import { HoverableBarsReductionPath } from "./hoverable-bars-reduction-path";
import { howToReachGoalsData } from "~/data";
import { setYear } from "date-fns";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";
import { i18n } from "~/i18n/i18n-utils";

const { reductionPathScenario175Thg } = howToReachGoalsData;

export const LineChartReductionPath: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { width } = useContainerWidthHeight(containerRef);

	const desktopHeight = 610;
	const mobileHeight = 400;
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	const height = isMobile ? mobileHeight : desktopHeight;

	const sizes = {
		width,
		height,
		margin: { top: 0, right: 25, bottom: 30, left: 20 },
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
		<div>
			<p className="mb-7 mt-4 columns-2 gap-7 text-justify">
				{i18n("chart.precipitationMm.description")}
			</p>

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
		</div>
	);
};
