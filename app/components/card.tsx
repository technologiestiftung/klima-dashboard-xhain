import React from "react";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";
import { DonutChartEEV } from "./visualizations/donut-chart-eev/donut-chart-eev";
import { DonutChartTraffic } from "./visualizations/donut-chart-traffic/donut-chart-traffic";
import ThermometerChart from "./visualizations/thermometer-chart/thermometer-chart";
import { Dialog } from "./dialog/dialog";
import { i18n } from "~/i18n/i18n-utils";
import {
	howXhainContributesData,
	howToReachGoalsData,
	consequencesData,
} from "~/data";
import { LineChartEEV } from "./visualizations/line-chart-eev/line-chart-eev";
import { StackedBarChart } from "~/components/visualizations/stacked-bar-chart/stacked-bar-chart";
import { BarChartThg } from "~/components/visualizations/bar-chart-thg/bar-chart-thg";
import { BarChartModalSplit } from "~/components/visualizations/bar-chart-modal-split/bar-chart-modal-split";
import { ChartHotDays } from "~/components/visualizations/chart-hot-days/chart-hot-days.tsx";
import { AreaChart } from "~/components/visualizations/area-chart/area-chart";
import { ConsumptionEmissionsChart } from "~/components/visualizations/consumption-emission-chart/consumption-emission-chart";
import { DialogContent } from "./dialog/dialog-content";
import { LineChartReductionPath } from "./visualizations/line-chart-reduction-path/line-chart-reduction-path";
import { BucketChart } from "./visualizations/bucket-chart/bucket-chart";

interface CardProps {
	id:
		| keyof typeof howXhainContributesData
		| keyof typeof howToReachGoalsData
		| keyof typeof consequencesData;
}

const charts = {
	eevTotalMwh: {
		component: LineChartEEV,
		color: "bg-xhain-blue-10",
		size: "desktop:col-span-2 desktop:h-singleCard",
	},
	eevSector2021Mwh: {
		component: DonutChartEEV,
		color: "bg-xhain-blue-10",
		size: "desktop:h-singleCard",
	},
	heatingMix2021Summarized: {
		component: StackedBarChart,
		color: "bg-xhain-green-20",
		size: "desktop:row-span-2 desktop:h-doubleCard",
	},
	thgSector2021Tons: {
		component: BarChartThg,
		color: "bg-xhain-green-20",
		size: "desktop:h-singleCard",
	},
	thgTotalTons: {
		component: CircleAreaChartSlider,
		color: "bg-xhain-green-20",
		size: "desktop:h-singleCard",
	},
	consumptionEmissionsTons: {
		component: ConsumptionEmissionsChart,
		color: "bg-xhain-blue-10",
		size: "desktop:col-span-2 desktop:h-singleCard",
	},
	modalSplit2018: {
		component: BarChartModalSplit,
		color: "bg-xhain-blue-10",
		size: "desktop:col-span-2 desktop:h-singleCard",
	},
	traffic2022Summarized: {
		component: DonutChartTraffic,
		color: "bg-xhain-blue-10",
		size: "desktop:h-singleCard",
	},
	restBudgetThgUntilYear: {
		component: BucketChart,
		color: "bg-xhain-blue-10",
		size: "desktop:h-singleCard",
	},
	reductionPathScenario175Thg: {
		component: LineChartReductionPath,
		color: "bg-xhain-blue-10",
		size: "desktop:h-singleCard",
	},
	hotDays: {
		component: ChartHotDays,
		color: "bg-xhain-blue-10",
		size: "desktop:col-span-2 desktop:h-singleCard",
	},
	precipitationMm: {
		component: AreaChart,
		color: "bg-xhain-blue-10",
		size: "desktop:col-span-2 desktop:h-singleCard",
	},
	mediumTemperature: {
		component: ThermometerChart,
		color: "bg-xhain-green-10",
		size: "desktop:row-span-2 desktop:h-doubleCard",
	},
};

const Card: React.FC<CardProps> = ({ id }) => {
	const dialogId = `${id}-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	const title = i18n(`chart.${id}.title`);
	const subTitle = i18n(`chart.${id}.subtitle`);
	const description = i18n(`chart.${id}.description` as keyof typeof i18n);

	const { size, color, component: Chart } = charts[id];

	const data =
		howXhainContributesData[id as keyof typeof howXhainContributesData] ||
		howToReachGoalsData[id as keyof typeof howToReachGoalsData] ||
		consequencesData[id as keyof typeof consequencesData];

	const chartKeys = Object.keys(data[0]);

	return (
		<figure className={`${size}`}>
			<div
				className={`p-5 max-w-mobile mx-auto desktop:max-w-none desktop:mx-none rounded-2.5xl md:rounded-4xl w-full h-full row-span-1 ${color}`}
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
						<img src={"/images/i-icon.svg"} alt={i18n("button.moreInfo")} />
						{i18n("button.moreInfo")}
					</button>
					{description && (
						<p
							className={`my-4 flex flex-col ${
								id === "precipitationMm"
									? "lg:columns-2 gap-7 text-justify"
									: "gap-2"
							}`}
							dangerouslySetInnerHTML={{
								__html: description,
							}}
						/>
					)}

					<table className="sr-only flex">
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
							<pre>{JSON.stringify(data.slice(0, 4), null, 2)}</pre>
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
