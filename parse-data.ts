import Papa from "papaparse";
import * as fs from "fs";
import _ from "lodash";

const howXhainContributesFiles = [
	{ name: "02-eev-total-mwh", path: "./data/02-eev-total-mwh.csv" },
	{ name: "02-eev-sector-2021-mwh", path: "./data/02-eev-sector-2021-mwh.csv" },
	{
		name: "02-heating-mix-2021-summarized",
		path: "./data/02-heating-mix-2021-summarized.csv",
	},
	{
		name: "02-thg-sector-2021-tons",
		path: "./data/02-thg-sector-2021-tons.csv",
	},
	{ name: "02-thg-total-tons", path: "./data/02-thg-total-tons.csv" },
	{
		name: "02-consumption-emissions-tons",
		path: "./data/02-consumption-emissions-tons.csv",
	},
	{ name: "02-modal-split-2018", path: "./data/02-modal-split-2018.csv" },
	{
		name: "02-traffic-2022-summarized",
		path: "./data/02-traffic-2022-summarized.csv",
	},
];

const howToReachGoalsFiles = [
	{
		name: "03-rest-budget-thg-until-year",
		path: "./data/03-rest-budget-thg-until-year.csv",
	},
	{
		name: "03-reduction-path-scenario175-thg",
		path: "./data/03-reduction-path-scenario175-thg.csv",
	},
];

const consequencesFiles = [
	{ name: "04-hot-days", path: "./data/04-hot-days.csv" },
	{ name: "04-medium-temperature", path: "./data/04-medium-temperature.csv" },
	{ name: "04-precipitation-mm", path: "./data/04-precipitation-mm.csv" },
];

const parseCsvFiles = async (
	files: { name: string; path: string }[],
): Promise<Record<string, Record<string, string | number>[]>> => {
	const sectionData: Record<string, Record<string, string | number>[]> = {};

	for (const { name, path } of files) {
		const raw = fs.readFileSync(path).toString();

		await new Promise<void>((resolve) => {
			Papa.parse(raw, {
				header: true,
				delimiter: ";",
				skipEmptyLines: true,
				transform: (value) => {
					const normalizedValue = value.replace(",", ".");
					// parse the value as a number
					const parsedValue = parseFloat(normalizedValue);
					return isNaN(parsedValue) ? value : parsedValue;
				},
				complete: (result: { data: Record<string, string | number>[] }) => {
					const nameWithoutNumberPrefix = name.slice(3);
					const nameInCamelCase = _.camelCase(nameWithoutNumberPrefix);

					sectionData[nameInCamelCase] = result.data;

					resolve();
				},
			});
		});
	}

	return sectionData;
};

(async () => {
	const howXhainContributesData = await parseCsvFiles(howXhainContributesFiles);
	const howToReachGoalsData = await parseCsvFiles(howToReachGoalsFiles);
	const consequencesData = await parseCsvFiles(consequencesFiles);

	const output = `
	export const howXhainContributesData = ${JSON.stringify(howXhainContributesData, null, 2)} as {
	  eevTotalMwh: { year: number; heating_mwh: number; electricity_mwh: number; fuels_mwh: number }[];
	  eevSector2021Mwh: { sector: "districtBuildings" | "economy" | "privateHouseholds" | "traffic"; total_mwh: number; percentage: number }[];
	  heatingMix2021Summarized: { source: "gas" | "fossil" | "renewable" | "districtHeating" | "heatingCurrent"; percentage: number }[];
	  thgSector2021Tons: { sector: "districtBuildings" | "economy" | "privateHouseholds" | "traffic"; total_tons: number; percentage: number }[];
	  thgTotalTons: { year: number; heating_tons: number; electricity_tons: number; fuels_tons: number }[];
	  consumptionEmissionsTons: { xhain: number; per_person: number }[];
	  modalSplit2018: { area: "xhain" | "berlin"; miv: number; oepnv: number; foot: number; bike: number }[];
	  traffic2022Summarized: { sector: "miv" | "freight"  | "oepnv"; percentage_thg: number }[];
	};
	export const howToReachGoalsData = ${JSON.stringify(howToReachGoalsData, null, 2)};
	export const consequencesData = ${JSON.stringify(consequencesData, null, 2)};
	`;

	fs.writeFileSync("./app/data/index.ts", output);
})();
