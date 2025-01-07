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
		<div className="m-5 bg-[#FFF9F5] rounded-3xl p-5">
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
		</div>
	);
};

export default DataCard;
