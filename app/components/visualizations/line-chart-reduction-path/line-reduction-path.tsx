import React, { useMemo } from "react";
import * as d3 from "d3";
import { howToReachGoalsData } from "~/data";
import { xhainBlue50, xhainBlue80 } from "~/components/visualizations/colors";
import { setYear } from "date-fns";

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
			<path
				className="line"
				d={linePathXhainGoal ?? ""}
				stroke={xhainBlue50}
				fill="none"
				strokeWidth="2"
			/>
		</>
	);
};
