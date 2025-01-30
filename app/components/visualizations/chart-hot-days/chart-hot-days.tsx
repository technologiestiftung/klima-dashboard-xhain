import { useState } from "react";
import { i18n } from "~/i18n/i18n-utils.ts";
import { consequencesData } from "~/data";
import { RadioToggle } from "~/components/radio-toggle/radio-toggle.tsx";

const { hotDays } = consequencesData;

type HotDaysKeys = "1950" | "current" | "2100";

const data = Object.fromEntries(hotDays.map((d) => [d.time, d.days])) as Record<
	HotDaysKeys,
	number
>;

export function ChartHotDays() {
	const radioOptions = hotDays.map((d) => ({
		value: d.time as HotDaysKeys,
		label: i18n(`chart.hotDays.keys.${d.time as HotDaysKeys}`),
	}));

	const [selected, setSelected] = useState(radioOptions[1].value);

	const amountOfHotDays = data[selected];

	const flames = Array.from({ length: amountOfHotDays }, (_, i) => i);

	return (
		<div>
			<p className="mt-4 mb-7">{i18n("chart.hotDays.description")}</p>

			<div className="flex flex-col-reverse md:flex-row justify-between md:px-5 xl:px-20 h-fit items-center">
				<div className="flex max-w-80 min-h-64 content-start flex-wrap gap-2">
					{flames.map((i) => (
						<img key={i} src={"/images/flame-icon.svg"} alt={""} />
					))}
				</div>

				<div className="flex flex-col items-end">
					<p className="w-full text-center">
						<span className="text-9xl font-bold text-xhain-blue-50">
							{amountOfHotDays}
						</span>
					</p>
					<p className="w-full text-center mb-9 text-xhain-blue-50 text-lg leading-7 font-bold">
						{i18n("chart.hotDays.title")}
					</p>
					<div className="md:flex hidden">
						<RadioToggle
							options={radioOptions}
							defaultValue={selected}
							onSelectionChange={(newSelected) => setSelected(newSelected)}
						/>
					</div>
				</div>
			</div>
			<div className="md:hidden flex w-full justify-center mt-9">
				<RadioToggle
					options={radioOptions}
					defaultValue={selected}
					onSelectionChange={(newSelected) => setSelected(newSelected)}
				/>
			</div>
		</div>
	);
}
