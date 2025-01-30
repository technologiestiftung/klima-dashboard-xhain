import React, { useMemo } from "react";
import * as d3 from "d3";
import { howToReachGoalsData } from "~/data";
import {
	xhainBlue30,
	xhainBlue40,
	xhainBlue80,
} from "~/components/visualizations/colors";
import { setYear } from "date-fns";
import { i18n } from "~/i18n/i18n-utils";

const { reductionPathScenario175Thg } = howToReachGoalsData;

type reductionPathPerYear = (typeof reductionPathScenario175Thg)[0];

interface AreaReductionPathProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
}

export const AreaReductionPath: React.FC<AreaReductionPathProps> = ({
	xScale,
	yScale,
	sizes,
}) => {
	const {
		margin: { top, bottom },
		width,
	} = sizes;

	// stack electricity and heating data
	const stack = useMemo(
		() =>
			d3
				.stack<reductionPathPerYear>()
				.keys(["heating_total_tons", "electricity_total_tons"]) // Define stack keys
				.order(d3.stackOrderNone)
				.offset(d3.stackOffsetNone)(reductionPathScenario175Thg),
		[reductionPathScenario175Thg],
	);

	// generate area of electricity and heating data
	const area = useMemo(
		() =>
			d3
				.area<d3.SeriesPoint<reductionPathPerYear>>()
				.x((d) => xScale(setYear(new Date(), d.data.year)))
				.y0((d) => yScale(d[0]) - bottom + top)
				.y1((d) => yScale(d[1]) - bottom + top)
				.curve(d3.curveCardinal),
		[xScale, yScale, sizes.margin, reductionPathScenario175Thg],
	);

	const linePathXhainGoal = useMemo(
		() =>
			d3
				.line<reductionPathPerYear>()
				.x((d) => xScale(setYear(new Date(), d.year)))
				.y((d) => yScale(d.goal_xhain_tons) - bottom + top)
				.curve(d3.curveCardinal)(reductionPathScenario175Thg.slice(1)),
		[xScale, yScale],
	);

	return (
		<>
			{stack.map((layer, index) => (
				<path
					key={index}
					className="area"
					d={area(layer) ?? ""}
					fill={index === 0 ? xhainBlue30 : xhainBlue40}
				/>
			))}

			<text
				x={30}
				y={
					yScale(
						howToReachGoalsData.reductionPathScenario175Thg[0]
							.heating_total_tons,
					) + 10
				}
				fill={xhainBlue80}
				fontWeight="700"
			>
				{i18n("chart.reductionPathScenario175Thg.legend.heating")}
			</text>

			<text
				x={30}
				y={
					yScale(
						howToReachGoalsData.reductionPathScenario175Thg[0]
							.electricity_total_tons,
					) - 18
				}
				fill={xhainBlue80}
				fontWeight="700"
			>
				{i18n("chart.reductionPathScenario175Thg.legend.electricity")}
			</text>

			<path
				className="line"
				d={linePathXhainGoal ?? ""}
				stroke={xhainBlue80}
				fill="none"
				strokeWidth="2"
			/>
			<text
				x={width / 2}
				y={
					yScale(
						howToReachGoalsData.reductionPathScenario175Thg[10].goal_xhain_tons,
					) - 18
				}
				fill={xhainBlue80}
				fontWeight="700"
			>
				{i18n("chart.reductionPathScenario175Thg.legend.goal")}
			</text>
		</>
	);
};
