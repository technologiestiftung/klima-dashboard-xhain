import React from "react";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";
import { DonutChartEEV } from "./visualizations/donut-chart-eev/donut-chart-eev";
import { DonutChartTraffic } from "./visualizations/donut-chart-traffic/donut-chart-traffic";
import ThermometerChart from "./visualizations/thermometer-chart/thermometer-chart";
import { Dialog } from "./dialog/dialog";
import { i18n } from "~/i18n/i18n-utils";
import { howXhainContributesData, consequencesData } from "~/data";
import { LineChart } from "~/components/visualizations/line-chart/line-chart";
import { StackedBarChart } from "~/components/visualizations/stacked-bar-chart/stacked-bar-chart";
import { BarChartThg } from "~/components/visualizations/bar-chart-thg/bar-chart-thg";
import { BarChartModalSplit } from "~/components/visualizations/bar-chart-modal-split/bar-chart-modal-split";
import { AreaChart } from "~/components/visualizations/area-chart/area-chart";
import { DialogContent } from "./dialog/dialog-content";

interface CardProps {
	id: keyof typeof howXhainContributesData | keyof typeof consequencesData;
}

const charts = {
	eevTotalMwh: {
		component: LineChart,
		color: "bg-xhain-blue-10",
		size: "col-span-1 lg:col-span-2 row-span-1",
	},
	eevSector2021Mwh: {
		component: DonutChartEEV,
		color: "bg-xhain-blue-10",
		size: "col-span-1 row-span-1",
	},
	heatingMix2021Summarized: {
		component: StackedBarChart,
		color: "bg-xhain-green-20",
		size: "col-span-1 row-span-2",
	},
	thgSector2021Tons: {
		component: BarChartThg,
		color: "bg-xhain-green-20",
		size: "col-span-1 row-span-1",
	},
	thgTotalTons: {
		component: CircleAreaChartSlider,
		color: "bg-xhain-green-20",
		size: "col-span-1 row-span-1",
	},
	consumptionEmissionsTons: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span-2 row-span-1",
	},
	modalSplit2018: {
		component: BarChartModalSplit,
		color: "bg-xhain-blue-10",
		size: "col-span-1 lg:col-span-2 row-span-1",
	},
	traffic2022Summarized: {
		component: DonutChartTraffic,
		color: "bg-xhain-blue-10",
		size: "col-span-1 row-span-1",
	},
	hotDays: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span lg:col-span-2 row-span-1",
	},
	precipitationMm: {
		component: AreaChart,
		color: "bg-xhain-blue-10",
		size: "col-span lg:col-span-2 row-span-1",
	},
	mediumTemperature: {
		component: ThermometerChart,
		color: "bg-xhain-green-10",
		size: "col-span-1 row-span-2",
	},
};

const Card: React.FC<CardProps> = ({ id }) => {
	const dialogId = `${id}-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	const title = i18n(`chart.${id}.title`);
	const subTitle = i18n(`chart.${id}.subtitle`);

	const { size, color, component: Chart } = charts[id];

	const data =
		howXhainContributesData[id as keyof typeof howXhainContributesData] ||
		consequencesData[id as keyof typeof consequencesData];

	const chartKeys = Object.keys(data[0]);

	return (
		<figure className={`${size}`}>
			<div
				className={`p-5 rounded-2.5xl md:rounded-4xl w-full h-full row-span-1 ${color}`}
			>
				<figcaption>
					<h2 className="text-xl font-bold">{title}</h2>
					<h3 className="text-xl">{subTitle}</h3>
					<button
						onClick={showDialog}
						className={`
							flex items-center px-3 py-0.5 gap-x-2 bg-xhain-blue-50 text-white rounded-full my-3 font-semibold 
							hover:bg-xhain-blue-60 focus:outline focus:outline-3 focus:outline-xhain-blue-80 focus:outline-offset-5
						`}
					>
						<img src={"/images/i-icon.svg"} alt={""} />
						{i18n("button.moreInfo")}
					</button>
					<table className="sr-only">
						<caption>{title}</caption>
						<thead>
							<tr>
								{chartKeys.map((key) => (
									// @ts-expect-error this is correct, but typescript can't infer the types.
									<th key={key}>{i18n(`chart.${id}.keys.${key}`)}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.map((entry) => (
								<tr key={JSON.stringify(entry)}>
									{Object.keys(entry).map((key) => (
										// @ts-expect-error this is correct, but typescript can't infer the types.
										<td key={key}>{entry[key]}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</figcaption>
				<div className="w-full overflow-hidden" role="img">
					{Chart && <Chart />}
					{!Chart && (
						<>
							<p>Chart not found</p>
							<br />
							<pre>{JSON.stringify(data.slice(0, 2), null, 2)}</pre>
						</>
					)}
				</div>
			</div>

			<Dialog id={dialogId}>
				<DialogContent id={id} />
			</Dialog>
		</figure>
	);
};

export default Card;
