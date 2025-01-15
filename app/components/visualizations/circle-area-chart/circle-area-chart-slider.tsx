import React, { useRef, useState } from "react";
import { CircleAreaChart } from "./circle-area-chart";
import { howXhainContributesData as allData } from "~/data";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";

const data = allData.thgTotalTons;

export const CircleAreaChartSlider: React.FC = () => {
	const minYear = data[0].year;
	const maxYear = data[data.length - 1].year;

	const [selectedYear, setSelectedYear] = useState<number>(maxYear);

	const ref = useRef<HTMLDivElement>(null);
	const { width } = useContainerWidthHeight(ref);

	return (
		<div ref={ref}>
			<CircleAreaChart width={width} height={280} year={selectedYear} />
			<input
				type="range"
				min={minYear}
				max={maxYear}
				value={selectedYear}
				onChange={(e) => setSelectedYear(Number(e.target.value))}
				style={{
					width,
				}}
			/>
			<div>{selectedYear}</div>
		</div>
	);
};
