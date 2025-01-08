import React from "react";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";
import { Dialog } from "./dialog/dialog";
import { useI18nStore } from "../i18n/i18n-store";
import { data } from "../data/";

interface CardProps {
	id: keyof typeof data;
}

const charts = {
	eevTotalMwh: null,
	eevSector2021Mwh: null,
	heatingMix2021: null,
	consumptionEmissions: null,
	thgTotalTons: CircleAreaChartSlider,
	thgSector2021Tons: null,
	modalSplit2018: null,
	traffic2022Summarized: null,

	restBudgetThgUntilYear: null,
	reductionPathScenario175Thg: null,
	hotDays: null,
	mediumTemperature: null,
};

const cardColors = {
	eevTotalMwh: "bg-xhain-blue-10",
	eevSector2021Mwh: "bg-xhain-blue-10",
	heatingMix2021: "bg-xhain-green-30",
	consumptionEmissions: "bg-xhain-orange-10",
	thgTotalTons: "bg-xhain-orange-10",
	thgSector2021Tons: "bg-xhain-orange-10",
	modalSplit2018: "bg-xhain-blue-10",

	traffic2022Summarized: "bg-xhain-green-30",
	restBudgetThgUntilYear: "bg-xhain-blue-10",
	reductionPathScenario175Thg: "bg-xhain-blue-10",
	hotDays: "bg-xhain-orange-10",
	mediumTemperature: "bg-xhain-green-30",
};

const cardSizes = {
	eevTotalMwh: "col-span-1 lg:col-span-2 row-span-1",
	eevSector2021Mwh: "col-span-1 row-span-1",
	heatingMix2021: "col-span-1 row-span-2",
	consumptionEmissions: "col-span-1 lg:col-span-2 row-span-1",
	thgTotalTons: "col-span-1 row-span-1",
	thgSector2021Tons: "col-span-1 row-span-1",
	modalSplit2018: "col-span-1 lg:col-span-2 row-span-1",
	traffic2022Summarized: "col-span-1 row-span-1",

	restBudgetThgUntilYear: "col-span-1 row-span-2",
	reductionPathScenario175Thg: "col-span-1 lg:col-span-2 row-span-2",
	hotDays: "col-span-1 lg:col-span-2 row-span-1",
	mediumTemperature: "col-span-1 row-span-2",
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
		<div className={`${cardSizes[id]}`}>
			<div
				className={`p-5 rounded-4xl w-full h-full row-span-1 ${cardColors[id]}`}
			>
				<h2 className="text-xl font-bold">{title}</h2>
				<h3 className="text-xs">{subTitle}</h3>
				<button
					onClick={showDialog}
					className="px-2 py-1 text-xs w-fit bg-xhain-blue-70 text-white rounded-full my-3"
				>
					{i18n["button.moreInfo"]}
				</button>
				<div className="w-full h-[300px] overflow-hidden">
					{Chart && <Chart />}
					{!Chart && (
						<>
							<p>Chart not found</p>
							<br />
							<pre>{JSON.stringify(data[id].slice(0, 2), null, 2)}</pre>
						</>
					)}
				</div>

				<br />
			</div>

			<Dialog id={dialogId}>
				<div className="bg-white p-5 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold">Dialog</h2>
					<p className="text-lg">This is a dialog about {title}</p>
				</div>
			</Dialog>
		</div>
	);
};

export default Card;
