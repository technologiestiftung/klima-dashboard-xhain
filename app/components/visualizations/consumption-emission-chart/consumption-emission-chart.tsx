import React, { useState } from "react";
import { i18n } from "~/i18n/i18n-utils";
import { RadioToggle } from "~/components/radio-toggle/radio-toggle";
import { howXhainContributesData } from "~/data";

const blueEmissionCloud = "/images/blue-emission-cloud.svg";
const greenEmissionTree = "/images/green-emission-tree.svg";

interface RadioOption {
	value: string;
	label: string;
}

export const ConsumptionEmissionsChart: React.FC = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { consumptionEmissionsTons } = howXhainContributesData;

	type OptionsKeys = keyof (typeof consumptionEmissionsTons)[0]; // "xhain" | "per_person"

	const radioOptions: RadioOption[] = Object.keys(
		consumptionEmissionsTons[0],
	).map((key) => ({
		value: key,
		label: i18n(`chart.consumptionEmissionsTons.keys.${key as OptionsKeys}`),
	}));

	// Get the selected value based on the current index
	const selectedOption = radioOptions[selectedIndex];
	const selectedValue = selectedOption
		? consumptionEmissionsTons[0][selectedOption.value as OptionsKeys] || 0
		: 0;

	const formattedEmissionValue =
		selectedValue >= 1_000_000
			? `${(selectedValue / 1_000_000).toFixed(1)} ${i18n("chart.consumptionEmissionsTons.millionUnit")}`
			: selectedValue.toString();

	const handleSelectionChange = (value: string) => {
		const newIndex = radioOptions.findIndex((option) => option.value === value);
		if (newIndex !== -1) {
			setSelectedIndex(newIndex);
		}
	};

	// Calculate the number of trees needed (80 trees per 1 ton of CO₂)
	const treesNeeded = selectedValue * 80;

	const formattedTreesValue =
		treesNeeded >= 1_000_000
			? `${(treesNeeded / 1_000_000).toFixed(0)} ${i18n("chart.consumptionEmissionsTons.millionUnit")}`
			: treesNeeded.toString();

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-0 items-center justify-items-center mt-5">
			<div className="flex flex-col lg:gap-4 gap-10 mx-auto">
				<RadioToggle
					options={radioOptions}
					defaultValue={radioOptions[0]?.value}
					onSelectionChange={handleSelectionChange}
					radioID={"consumption-emission-chart-radio"}
				/>

				<div className="relative flex flex-col gap-9">
					<img src={blueEmissionCloud} alt="" className="w-full" />
					<div className="absolute w-full top-1/4 left-1.5 flex flex-col text-center text-3xl leading-9 lg:text-4xl lg:leading-10 font-bold text-xhain-blue-10">
						{formattedEmissionValue}
						<span className="text-base leading-6 font-bold">
							{i18n("chart.consumptionEmissionsTons.co2Unit")}
						</span>
					</div>
				</div>
			</div>
			<p className="max-w-60 lg:max-w-48 text-base leading-6 font-semibold lg:font-bold text-center">
				{i18n("chart.consumptionEmissionsTons.descriptionText")}
			</p>
			<div className="relative gap-9 mx-auto">
				<img src={greenEmissionTree} alt="" className="w-full" />
				<div className="absolute w-full top-24 left-1.5 flex flex-col text-center text-3xl leading-9 lg:text-4xl lg:leading-10 font-bold text-xhain-blue-80">
					{formattedTreesValue}
					<span className="text-base leading-6 font-bold">
						{i18n("chart.consumptionEmissionsTons.trees")}
					</span>
				</div>
			</div>
		</div>
	);
};
