// placeholder card
import React from "react";
import { useCsvStore } from "../store/useCsvStore";
import { CircleAreaChartSlider } from "./visualizations/circle-area-chart/circle-area-chart-slider";

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

	return (
		<div className="border border-gray-300 m-5 p-2.5">
			<h2>{title}</h2>

			{fileName === "02-thg-total-tons" && (
				<CircleAreaChartSlider data={data} />
			)}
			{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
		</div>
	);
};

export default DataCard;
