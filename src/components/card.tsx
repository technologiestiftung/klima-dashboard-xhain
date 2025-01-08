import React from "react";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";
import { Dialog } from "./dialog/dialog";
import { useI18nStore } from "../i18n/i18n-store";
import { data } from "../data/";

interface CardProps {
	id: keyof typeof data;
}

const charts = {
	thgTotalTons: CircleAreaChartSlider,
	thgSector2021Tons: null,
	eevTotalMwh: null,
	eevSector2021Mwh: null,
	heatingMix2021: null,
	modalSplit2018: null,
	traffic2022Summarized: null,
	traffic2022: null,
	reductionPathScenario175Thg: null,
	restBudgetThgUntilYear: null,
	trendscenarioThgUntil2050: null,
	hotDays: null,
	mediumTemperature: null,
};

const Card: React.FC<CardProps> = ({ id }) => {
	const dialogId = `${id}-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	const i18n = useI18nStore((state) => state.i18n());

	const title = i18n[`chart.${id}.title`];
	const subTitle = i18n[`chart.${id}.subtitle`];

	const Chart = charts[id];

	return (
		<>
			<div className="border border-gray-300 m-5 p-5 rounded-4xl">
				<h2>{title}</h2>
				<h3>{subTitle}</h3>
				<div className="size-[360px] overflow-hidden">
					{Chart && <Chart />}
					{!Chart && (
						<>
							<p>Chart not found</p>
							<br />
							<pre>{JSON.stringify(data[id], null, 2)}</pre>
						</>
					)}
				</div>

				<br />

				<button
					onClick={showDialog}
					className="p-2 rounded border bg-blue-100 shadow"
				>
					open dialog
				</button>
			</div>

			<Dialog id={dialogId}>
				<div className="bg-white p-5 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold">Dialog</h2>
					<p className="text-lg">This is a dialog about {title}</p>
				</div>
			</Dialog>
		</>
	);
};

export default Card;
