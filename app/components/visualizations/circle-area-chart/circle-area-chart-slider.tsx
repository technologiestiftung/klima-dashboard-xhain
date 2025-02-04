import React, { useRef, useState } from "react";
import { CircleAreaChart } from "./circle-area-chart";
import { howXhainContributesData as allData } from "~/data";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";

const data = allData.thgTotalTons;

export const CircleAreaChartSlider: React.FC = () => {
	const years = data.map((d) => d.year);
	const minYear = Math.min(...years);
	const maxYear = Math.max(...years);

	const [selectedYear, setSelectedYear] = useState<number>(maxYear);

	const ref = useRef<HTMLDivElement>(null);
	const { width } = useContainerWidthHeight(ref);

	// const rangeSliderRef = useRef<HTMLInputElement>(null);
	// const { width: rangeSliderWidth } = useContainerWidthHeight(rangeSliderRef);
	//
	// console.log(rangeSliderWidth);

	return (
		<div ref={ref} className="flex flex-col gap-y-4">
			<CircleAreaChart width={width} height={235} year={selectedYear} />
			<input
				// ref={rangeSliderRef}
				id="thgTotalTonsSliderChart"
				type="range"
				min={minYear}
				max={maxYear}
				value={selectedYear}
				onChange={(e) => setSelectedYear(Number(e.target.value))}
				style={{
					width,
				}}
				className="appearance-none bg-xhain-blue-30 rounded-full h-3 slider-thumb cursor-pointer"
			/>

			<label className="flex w-full" htmlFor="thgTotalTonsSliderChart">
				{/* WIP */}
				{/*{width <= 320 &&*/}
				{/*	years.map((year, index) => (*/}
				{/*		<span*/}
				{/*			className={`*/}
				{/*				text-xs w-8 text-center*/}
				{/*				${year === selectedYear ? "font-bold" : ""}*/}
				{/*			`}*/}
				{/*			key={year}*/}
				{/*		>*/}
				{/*			{year}*/}
				{/*		</span>*/}
				{/*	))}*/}

				{width > 320 &&
					years.map((year, index) => (
						<span
							className={`
						text-xs w-8 text-center
						${year === selectedYear && "font-bold"}
						${year === selectedYear || index === 0 || index === years.length - 1 ? "visible" : "invisible"}
						`}
							key={year}
						>
							{year}
						</span>
					))}
			</label>
		</div>
	);
};
