import React, { useState } from "react";
import { i18n, formatNumber } from "~/i18n/i18n-utils";
import { RadioToggle } from "~/components/radio-toggle/radio-toggle";
import { howXhainContributesData } from "~/data";

const blueEmissionCloud = "/images/blue-emission-cloud.svg";
const greenEmissionTree = "/images/green-emission-tree.svg";

interface RadioOption {
	value: string;
	label: string;
}

export const ConsumptionEmissionsChart: React.FC = () => {
	const [selectedIndex, setSelectedIndex] = useState(1);
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
			? `${formatNumber(selectedValue / 1_000_000, { toFixed: 1 })} ${i18n("chart.consumptionEmissionsTons.millionUnit")}`
			: formatNumber(selectedValue, { toFixed: 1 });

	const handleSelectionChange = (value: string) => {
		const newIndex = radioOptions.findIndex((option) => option.value === value);
		if (newIndex !== -1) {
			setSelectedIndex(newIndex);
		}
	};

	const graphicText =
		selectedIndex === 0
			? i18n("chart.consumptionEmissionsTons.descriptionText.xhain")
			: i18n("chart.consumptionEmissionsTons.descriptionText.per_person");

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 items-center justify-items-center">
			<div className="flex flex-col gap-4 mx-auto">
				<RadioToggle
					options={radioOptions}
					defaultValue={radioOptions[1]?.value}
					onSelectionChange={handleSelectionChange}
					radioID={"consumption-emission-chart-radio"}
				/>

				<div className="relative flex flex-col gap-9">
					<img
						src={blueEmissionCloud}
						alt={`${i18n("icon.alt")} Emission`}
						className="w-full"
					/>
					<div className="absolute w-full top-1/4 left-1.5 flex flex-col text-center text-3xl leading-9 lg:text-4xl lg:leading-10 font-bold text-xhain-blue-10">
						{formattedEmissionValue}
						<span className="text-base leading-6 font-bold">
							{i18n("chart.consumptionEmissionsTons.co2Unit")}
						</span>
					</div>
				</div>
			</div>
			<p className="lg:max-w-56 xl:max-w-none text-base leading-6 font-semibold lg:font-bold text-center">
				{graphicText}
			</p>
			<div className="relative gap-9 mx-auto">
				<img
					src={greenEmissionTree}
					alt={`${i18n("icon.alt")} Emission`}
					className="w-full max-h-[205px]"
				/>
			</div>
		</div>
	);
};
