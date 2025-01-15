import React from "react";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";
import { Dialog } from "./dialog/dialog";
import { i18n } from "~/i18n/i18n-utils";
import { howXhainContributesData } from "~/data";
import { LineChart } from "~/components/visualizations/line-chart/line-chart";

interface CardProps {
	id: keyof typeof howXhainContributesData;
}

const charts = {
	eevTotalMwh: {
		component: LineChart,
		color: "bg-xhain-blue-10",
		size: "col-span-1 lg:col-span-2 row-span-1",
	},
	eevSector2021Mwh: {
		component: null,
		color: "bg-xhain-blue-10",
		size: "col-span-1 row-span-1",
	},
	heatingMix2021Summarized: {
		component: null,
		color: "bg-xhain-green-30",
		size: "col-span-1 row-span-2",
	},
	thgSector2021Tons: {
		component: null,
		color: "bg-xhain-orange-10",
		size: "col-span-1 row-span-1",
	},
	thgTotalTons: {
		component: CircleAreaChartSlider,
		color: "bg-xhain-orange-10",
		size: "col-span-1 row-span-1",
	},
	consumptionEmissionsTons: {
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
};

const Card: React.FC<CardProps> = ({ id }) => {
	const dialogId = `${id}-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	const title = i18n(`chart.${id}.title`);
	const subTitle = i18n(`chart.${id}.subtitle`);

	const { size, color, component: Chart } = charts[id];

	return (
		<div className={`${size}`}>
			<div className={`p-5 rounded-4xl w-full h-full row-span-1 ${color}`}>
				<h2 className="text-xl font-bold">{title}</h2>
				<h3 className="text-xl">{subTitle}</h3>
				<button
					onClick={showDialog}
					className="flex items-center px-3 py-0.5 gap-x-2 bg-xhain-blue-50 text-white rounded-full my-3 hover:bg-xhain-blue-60 focus:outline focus:outline-3 focus:outline-xhain-blue-80 focus:outline-offset-5"
				>
					<img src={"/images/i-icon.svg"} alt={""} />
					{i18n("button.moreInfo")}
				</button>
				<div className="w-full h-[300px] overflow-hidden">
					{Chart && <Chart />}
					{!Chart && (
						<>
							<p>Chart not found</p>
							<br />
							<pre>
								{JSON.stringify(
									howXhainContributesData[id].slice(0, 2),
									null,
									2,
								)}
							</pre>
						</>
					)}
				</div>
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
