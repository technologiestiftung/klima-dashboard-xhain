import { useRef, useState } from "react";
import { howXhainContributesData } from "~/data";
import { formatPercentage, i18n } from "~/i18n/i18n-utils";
import { useContainerWidthHeight } from "~/hooks/use-container-width-height";
import { RadioToggle } from "~/components/radio-toggle/radio-toggle";

const { modalSplit2018 } = howXhainContributesData;

type area = "xhain" | "berlin";

const {
	miv: mivXhain,
	oepnv: oepnvXhain,
	foot: footXhain,
	bike: bikeXhain,
} = modalSplit2018[0];
const {
	miv: mivBerlin,
	oepnv: oepnvBerlin,
	foot: footBerlin,
	bike: bikeBerlin,
} = modalSplit2018[1];

const data = {
	xhain: [
		{
			sector: "miv",
			percentage: mivXhain,
		},
		{
			sector: "oepnv",
			percentage: oepnvXhain,
		},
		{
			sector: "foot",
			percentage: footXhain,
		},
		{
			sector: "bike",
			percentage: bikeXhain,
		},
	],
	berlin: [
		{
			sector: "miv",
			percentage: mivBerlin,
		},
		{
			sector: "oepnv",
			percentage: oepnvBerlin,
		},
		{
			sector: "foot",
			percentage: footBerlin,
		},
		{
			sector: "bike",
			percentage: bikeBerlin,
		},
	],
} as Record<
	area,
	{
		sector: "miv" | "oepnv" | "foot" | "bike";
		percentage: number;
	}[]
>;

const styles = {
	miv: {
		icon: "/images/blue-car.svg",
	},
	oepnv: {
		icon: "/images/blue-train.svg",
	},
	foot: {
		icon: "/images/blue-pedestrian.svg",
	},
	bike: {
		icon: "/images/blue-bike.svg",
	},
};

const radioOptions = [
	{
		value: "xhain",
		label: "Xhain",
	},
	{
		value: "berlin",
		label: "Berlin",
	},
] as { value: area; label: string }[];

export function BarChartModalSplit() {
	const [selectedArea, setSelectedArea] = useState<area>(
		modalSplit2018[0].area,
	);
	const containerRef = useRef<HTMLDivElement>(null);

	const { width } = useContainerWidthHeight(containerRef);

	const currentData = data[selectedArea];
	const highestPercentage = getHighestPercentage(currentData);

	return (
		<div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between">
			<div
				className="flex flex-col w-full mt-7 text-xhain-blue-80 gap-y-5"
				ref={containerRef}
			>
				{currentData.map(({ sector, percentage }) => (
					<p key={sector} className="flex w-full items-center gap-x-8">
						<img src={styles[sector].icon} alt={""} />
						<div className="w-full flex flex-col">
							<div className="flex w-full gap-x-2.5">
								<div
									className={`bg-xhain-blue-50 h-6`}
									style={{
										width: `${(percentage * (width - 150)) / highestPercentage}px`,
									}}
								/>
								<span>{formatPercentage(percentage)}</span>
							</div>
							<span>{i18n(`chart.modalSplit2018.legend.${sector}`)}</span>
						</div>
					</p>
				))}
			</div>
			<div className="items-center flex flex-col gap-y-3 md:gap-y-6 px-4">
				<p className="font-semibold md:w-48 md:text-center">
					{i18n("chart.modalSplit2018.toggle.description")}
				</p>
				<RadioToggle
					options={radioOptions}
					defaultValue={selectedArea}
					onSelectionChange={(newArea) => setSelectedArea(newArea)}
				/>
			</div>
		</div>
	);
}

function getHighestPercentage(currentData: { percentage: number }[]) {
	return Math.max(...currentData.map(({ percentage }) => percentage));
}
