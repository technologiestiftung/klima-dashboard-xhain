import React, { useMemo } from "react";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";
import {
	xhainBlue30,
	xhainBlue40,
	xhainBlue50,
} from "~/components/visualizations/colors";
import { setYear } from "date-fns";
import { i18n } from "~/i18n/i18n-utils";

const { eevTotalMwh } = howXhainContributesData;
type eevPerYear = (typeof eevTotalMwh)[0];

const chartColors = [xhainBlue50, xhainBlue40, xhainBlue30];

interface AreaEEVProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
}

export const AreaEEV: React.FC<AreaEEVProps> = ({ xScale, yScale, sizes }) => {
	const {
		margin: { top, bottom },
	} = sizes;

	// stack electricity and heating data
	const stack = useMemo(
		() =>
			d3
				.stack<eevPerYear>()
				.keys(["fuels_mwh", "electricity_mwh", "heating_mwh"]) // Define stack keys
				.order(d3.stackOrderNone)
				.offset(d3.stackOffsetNone)(eevTotalMwh),
		[eevTotalMwh],
	);

	// generate area of electricity and heating data
	const area = useMemo(
		() =>
			d3
				.area<d3.SeriesPoint<eevPerYear>>()
				.x((d) => xScale(setYear(new Date(), d.data.year)))
				.y0((d) => yScale(d[0]) - bottom + top)
				.y1((d) => yScale(d[1]) - bottom + top)
				.curve(d3.curveCardinal),
		[xScale, yScale, sizes.margin, eevTotalMwh],
	);

	return (
		<>
			{stack.map((layer, index) => (
				<path
					key={index}
					className="area"
					d={area(layer) ?? ""}
					fill={chartColors[index]}
				/>
			))}
			<text
				x={30}
				y={yScale(howXhainContributesData.eevTotalMwh[0].heating_mwh) - 50}
				fill="black"
				fontWeight="700"
			>
				{i18n("chart.eevTotalMwh.legend.heating")}
			</text>

			<text
				x={30}
				y={yScale(howXhainContributesData.eevTotalMwh[0].electricity_mwh) - 40}
				fill="black"
				fontWeight="700"
			>
				{i18n("chart.eevTotalMwh.legend.electricity")}
			</text>

			<text
				x={30}
				y={yScale(howXhainContributesData.eevTotalMwh[0].fuels_mwh) - 30}
				fill="white"
				fontWeight="700"
			>
				{i18n("chart.eevTotalMwh.legend.fuels")}
			</text>
		</>
	);
};
