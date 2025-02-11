import React, { useState } from "react";
import { consequencesData } from "~/data";
import { i18n } from "~/i18n/i18n-utils";
import ThermometerSVG from "./thermometer-svg";
import { RadioToggle } from "~/components/radio-toggle/radio-toggle";

type OptionsKeys = "1950" | "current" | "2100";

interface ThermometerChartProps {
	radioId?: string;
}

const ThermometerChart: React.FC<ThermometerChartProps> = ({ radioId }) => {
	const data = consequencesData.mediumTemperature;
	const [selectedIndex, setSelectedIndex] = useState(1);
	const maxTemperature = 15; // Maximum temperature for scaling
	const minTemperature = 5; // Minimum temperature for scaling

	const radioOptions = data.map((item, index) => ({
		value: index.toString(),
		label: i18n(`chart.mediumTemperature.${item.time as OptionsKeys}`),
	}));

	return (
		<div className="flex flex-col items-center justify-between desktop:mt-5">
			<div className="flex justify-center w-full overflow-hidden">
				<ThermometerSVG
					celsius={data[selectedIndex].celsius}
					maxTemperature={maxTemperature}
					minTemperature={minTemperature}
				/>
			</div>

			{/* Switch Buttons */}
			<div className="mt-6 mb-1">
				<RadioToggle
					options={radioOptions}
					defaultValue={selectedIndex.toString()}
					onSelectionChange={(value) => setSelectedIndex(parseInt(value))}
					radioID={radioId ? radioId : "medium-temperature"}
				/>
			</div>
		</div>
	);
};

export default ThermometerChart;
