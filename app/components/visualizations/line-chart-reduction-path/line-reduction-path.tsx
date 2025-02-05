import React, { useMemo } from "react";
import * as d3 from "d3";
import { howToReachGoalsData } from "~/data";
import { xhainBlue50, xhainBlue80 } from "~/components/visualizations/colors";
import { setYear } from "date-fns";
import { i18n } from "~/i18n/i18n-utils";

const { reductionPathScenario175Thg } = howToReachGoalsData;

type reductionPathPerYear = (typeof reductionPathScenario175Thg)[0];

interface LineReductionPathProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
}

export const LineReductionPath: React.FC<LineReductionPathProps> = ({
	xScale,
	yScale,
	sizes,
}) => {
	const {
		margin: { top, bottom },
		width,
	} = sizes;

	const linePathBerlinGoal = useMemo(
		() =>
			d3
				.line<reductionPathPerYear>()
				.x((d) => xScale(setYear(new Date(), d.year)))
				.y((d) => yScale(Number(d.goal_berlin_tons)) - bottom + top)
				.curve(d3.curveCardinal)(reductionPathScenario175Thg.slice(1)),
		[xScale, yScale],
	);

	const linePathXhainGoal = useMemo(
		() =>
			d3
				.line<reductionPathPerYear>()
				.x((d) => xScale(setYear(new Date(), d.year)))
				.y((d) => yScale(Number(d.model_xhain_tons)) - bottom + top)
				.curve(d3.curveCardinal)(reductionPathScenario175Thg),
		[xScale, yScale],
	);

	return (
		<>
			<path
				className="line"
				d={linePathBerlinGoal ?? ""}
				stroke={xhainBlue80}
				fill="none"
				strokeWidth="2"
				strokeDasharray={"5,5"}
			/>
			<text
				x={width / 2}
				y={
					yScale(
						Number(
							howToReachGoalsData.reductionPathScenario175Thg[12]
								.goal_berlin_tons,
						),
					) - 18
				}
				fill={xhainBlue80}
				fontWeight="700"
			>
				{i18n("chart.reductionPathScenario175Thg.legend.goal")}
			</text>
			<path
				className="line"
				d={linePathXhainGoal ?? ""}
				stroke={xhainBlue50}
				fill="none"
				strokeWidth="2"
			/>
			<text
				x={xScale(setYear(new Date(), 2023))}
				y={
					yScale(
						Number(
							howToReachGoalsData.reductionPathScenario175Thg[3]
								.model_xhain_tons,
						),
					) - 18
				}
				fill={xhainBlue50}
				fontWeight="700"
			>
				{i18n("chart.reductionPathScenario175Thg.legend.model")}
			</text>
		</>
	);
};
