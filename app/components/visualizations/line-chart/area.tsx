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

interface AreaProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
}

export const Area: React.FC<AreaProps> = ({ xScale, yScale, sizes }) => {
	const {
		margin: { top, bottom },
	} = sizes;

	const areaPathHeating = useMemo(
		() =>
			d3
				.area<eevPerYear>()
				.x((d) => xScale(setYear(new Date(), d.year)))
				.y0((d) => yScale(d.heating_mwh) - bottom + top)
				.y1(() => yScale(0) - bottom)
				.curve(d3.curveBumpX)(eevTotalMwh),
		[xScale, yScale, sizes.margin],
	);

	const areaPathElectricity = useMemo(
		() =>
			d3
				.area<eevPerYear>()
				.x((d) => xScale(setYear(new Date(), d.year)))
				.y0((d) => yScale(d.electricity_mwh) - bottom + top)
				.y1(() => yScale(0) - bottom)
				.curve(d3.curveBumpX)(eevTotalMwh),
		[xScale, yScale, sizes.margin],
	);

	const areaPathFuels = useMemo(
		() =>
			d3
				.area<eevPerYear>()
				.x((d) => xScale(setYear(new Date(), d.year)))
				.y0((d) => yScale(d.fuels_mwh) - bottom + top)
				.y1(() => yScale(0) - bottom)
				.curve(d3.curveBumpX)(eevTotalMwh),
		[xScale, yScale, sizes.margin],
	);
	return (
		<>
			<path className="area" d={areaPathHeating ?? ""} fill={xhainBlue30} />
			<text
				x={30}
				y={yScale(howXhainContributesData.eevTotalMwh[0].heating_mwh) + 10}
				fill="black"
				fontWeight="700"
			>
				{i18n("chart.eevTotalMwh.legend.heating")}
			</text>

			<path className="area" d={areaPathElectricity ?? ""} fill={xhainBlue40} />
			<text
				x={30}
				y={yScale(howXhainContributesData.eevTotalMwh[0].electricity_mwh) - 18}
				fill="black"
				fontWeight="700"
			>
				{i18n("chart.eevTotalMwh.legend.electricity")}
			</text>

			<path className="area" d={areaPathFuels ?? ""} fill={xhainBlue50} />
			<text
				x={30}
				y={yScale(howXhainContributesData.eevTotalMwh[0].fuels_mwh) - 20}
				fill="white"
				fontWeight="700"
			>
				{i18n("chart.eevTotalMwh.legend.fuels")}
			</text>
		</>
	);
};
