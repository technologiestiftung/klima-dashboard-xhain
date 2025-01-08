// placeholder card
import React from "react";
import { useCsvStore } from "../store/useCsvStore";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";
import { Dialog } from "./dialog/dialog";

interface DataCardProps {
	fileName: string;
	title: string;
}

const DataCard: React.FC<DataCardProps> = ({ fileName, title }) => {
	// disabled only momentarily
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let data = useCsvStore((state) => state.getCsvData(fileName)) as any[];
	if (!data) {
		data = [];
	}

	const dialogId = `${title}-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	return (
		<>
			<div className="border border-gray-300 m-5 p-5 rounded-4xl">
				<h2>{title}</h2>
				{data ? (
					<div className="size-[360px] overflow-hidden">
						{fileName === "02-thg-total-tons" ? (
							<CircleAreaChartSlider data={data} />
						) : (
							<pre>{JSON.stringify(data, null, 2)}</pre>
						)}
					</div>
				) : (
					<p>Loading...</p>
				)}
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

export default DataCard;
