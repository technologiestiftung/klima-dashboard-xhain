import React from "react";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";
import { Dialog } from "./dialog/dialog";
import { useI18nStore } from "../i18n/i18n-store";
import { data } from "../data/";

interface CardProps {
	id: keyof typeof data;
}

const charts = {
	eevTotalMwh: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span-1 lg:col-span-2 row-span-1",
	},
	eevSector2021Mwh: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span-1 row-span-1",
	},
	heatingMix2021: {
		component: null,
		color: "bg-xhain-green-30",
		size: "col-span-1 row-span-2",
	},
	consumptionEmissions: {
		component: null,
		color: "bg-xhain-orange-10",
		size: "col-span-1 lg:col-span-2 row-span-1",
	},
	thgTotalTons: {
		component: CircleAreaChartSlider,
		color: "bg-xhain-orange-10",
		size: "col-span-1 row-span-1",
	},
	thgSector2021Tons: {
		component: null,
		color: "bg-xhain-orange-10",
		size: "col-span-1 row-span-1",
	},
	modalSplit2018: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span-1 lg:col-span-2 row-span-1",
	},
	traffic2022Summarized: {
		component: null,
		color: "bg-xhain-green-30",
		size: "col-span-1 row-span-1",
	},
	restBudgetThgUntilYear: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span-1 row-span-2",
	},
	reductionPathScenario175Thg: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span-1 lg:col-span-2 row-span-2",
	},
	hotDays: {
		component: null,
		color: "bg-xhain-orange-10",
		size: "col-span-1 lg:col-span-2 row-span-1",
	},
	mediumTemperature: {
		component: null,
		color: "bg-xhain-green-30",
		size: "col-span-1 row-span-2",
	},
};

const Card: React.FC<CardProps> = ({ id }) => {
	const dialogId = `${id}-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	const i18n = useI18nStore((state) => state.i18n());

	const title = i18n[`chart.${id}.title`];
	const subTitle = i18n[`chart.${id}.subtitle`];

	const { size, color, component: Chart } = charts[id];

	return (
		<div className={`${size}`}>
			<div className={`p-5 rounded-4xl w-full h-full row-span-1 ${color}`}>
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
