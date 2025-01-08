import React, { useState } from "react";
import { CircleAreaChart } from "./circle-area-chart";
import { data as allData } from "../../../data";

const data = allData.thgTotalTons;

export const CircleAreaChartSlider: React.FC = () => {
	const minYear = data[0].year;
	const maxYear = data[data.length - 1].year;

	const [selectedYear, setSelectedYear] = useState<number>(maxYear);

	// get width of current div element
	const width = document.getElementById("chart-container")?.offsetWidth || 340;

	return (
		<div id="chart-container">
			<CircleAreaChart
				data={data}
				width={width}
				height={250}
				year={selectedYear}
			/>
			<input
				type="range"
				min={minYear}
				max={maxYear}
				value={selectedYear}
				onChange={(e) => setSelectedYear(Number(e.target.value))}
				className="w-[340px]"
			/>
			<div>{selectedYear}</div>
		</div>
	);
};
