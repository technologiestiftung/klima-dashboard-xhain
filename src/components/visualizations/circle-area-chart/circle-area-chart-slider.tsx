import React, { useState } from "react";
import { CircleAreaChart } from "./circle-area-chart";

interface DataEntry {
	year: string;
	heating: string;
	electricity: string;
	fuels: string;
}

interface CircleAreaChartSliderProps {
	data: DataEntry[];
}

export const CircleAreaChartSlider: React.FC<CircleAreaChartSliderProps> = ({
	data,
}) => {
	const minYear = Math.min(...data.map((d) => +d.year));
	const maxYear = Math.max(...data.map((d) => +d.year));

	const [selectedYear, setSelectedYear] = useState<string>(maxYear.toString());

	return (
		<>
			<CircleAreaChart
				data={data}
				width={340}
				height={250}
				year={selectedYear.toString()}
			/>
			<input
				type="range"
				min={minYear}
				max={maxYear}
				value={selectedYear}
				onChange={(e) => setSelectedYear(e.target.value)}
				className="w-full"
			/>
			<span>{selectedYear}</span>
		</>
	);
};
