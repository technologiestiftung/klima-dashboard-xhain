import React, { useState } from "react";
import { consequencesData } from "~/data";
import { i18n } from "~/i18n/i18n-utils";
import ThermometerSVG from "./thermometer-svg";
const Thermometer: React.FC = () => {
	const data = consequencesData.mediumTemperature;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const maxTemperature = 15; // Maximum temperature for scaling
	const minTemperature = 5; // Minimum temperature for scaling

	// Map time to custom titles
	const getTimeTitle = (time: string | number) => {
		const timeMap: Record<string | number, string> = {
			current: i18n("chart.mediumTemperature.now"),
			1950: i18n("chart.mediumTemperature.past"),
			2100: i18n("chart.mediumTemperature.future"),
		};

		return timeMap[time] || time.toString();
	};

	return (
		<div className="flex flex-col items-center justify-between">
			<p className="mb-7 mt-4">{i18n("chart.mediumTemperature.description")}</p>
			<div className="w-full overflow-hidden">
				<ThermometerSVG
					celsius={data[selectedIndex].celsius}
					maxTemperature={maxTemperature}
					minTemperature={minTemperature}
				/>
			</div>

			{/* Buttons */}
			<div className="flex items-center gap-0.5 mt-6 mb-1 bg-white rounded-full">
				{data.map((item, index) => (
					<button
						key={index}
						onClick={(e) => {
							setSelectedIndex(index);
							// Remove focus after clicking
							e.currentTarget.blur();
						}}
						className={`px-2.5 py-1 text-sm leading-5 font-bold text-xhain-blue-50  focus:outline focus:outline-2 focus:outline-xhain-blue-80 rounded-full ${
							selectedIndex === index
								? "bg-xhain-green-50"
								: "hover:bg-xhain-blue-20"
						}`}
					>
						{getTimeTitle(item.time)}
					</button>
				))}
			</div>
		</div>
	);
};

export default Thermometer;
