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

	const [selected, setSelected] = useState(radioOptions[0].value);

	const amountOfHotDays = data[selected];

	const flames = Array.from({ length: amountOfHotDays }, (_, i) => i);

	return (
		<div>
			<p>{i18n("chart.hotDays.description")}</p>

			<div className="flex justify-between">
				<div className="flex max-w-80 flex-wrap gap-4">
					{flames.map((i) => (
						<img key={i} src={"/images/flame-icon.svg"} alt={""} />
					))}
				</div>

				<div>
					<p>
						<span className="text-9xl font-bold text-xhain-blue-50">
							{amountOfHotDays}
						</span>
					</p>
					<RadioToggle
						options={radioOptions}
						defaultValue={selected}
						onSelectionChange={(newSelected) => setSelected(newSelected)}
					/>
				</div>
			</div>
		</div>
	);
}
