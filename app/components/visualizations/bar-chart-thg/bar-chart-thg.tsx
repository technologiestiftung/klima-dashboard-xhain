import { howXhainContributesData } from "~/data";
import { formatPercentage, i18n } from "~/i18n/i18n-utils";

const { thgSector2021Tons } = howXhainContributesData;

const styles = {
	privateHouseholds: {
		icon: "/images/green-house.svg",
		width: "w-full",
	},
	economy: {
		icon: "/images/green-factory.svg",
		width: "w-full",
	},
	traffic: {
		icon: "/images/green-car.svg",
		width: "w-3/12",
	},
	districtBuildings: {
		icon: "/images/green-institution.svg",
		width: "w-2",
	},
};

export function BarChartThg() {
	return (
		<div className="flex flex-col mt-7 items-center text-xhain-blue-80 gap-y-6">
			{thgSector2021Tons.map((d) => (
				<div key={d.sector} className="flex w-full items-center gap-x-8">
					<img
						src={styles[d.sector].icon}
						alt={
							i18n("icon.alt") +
							i18n(`chart.thgSector2021Tons.legend.${d.sector}`)
						}
					/>
					<div className="w-full flex flex-col">
						<div className="flex w-full gap-x-2.5">
							<div
								className={`${styles[d.sector].width} bg-xhain-green-50 h-6`}
							/>
							<span>{formatPercentage(d.percentage)}</span>
						</div>
						<span>{i18n(`chart.thgSector2021Tons.legend.${d.sector}`)}</span>
					</div>
				</div>
			))}
		</div>
	);
}
