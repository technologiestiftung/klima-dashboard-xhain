// @ts-expect-error typescript lies
import Papa from "papaparse";
import * as fs from "fs";
import _ from "lodash";

const csvFiles = [
	{
		name: "02-eev-total-mwh",
		path: "./data/02-eev-total-mwh.csv",
	},
	{
		name: "02-eev-sector-2021-mwh",
		path: "./data/02-eev-sector-2021-mwh.csv",
	},
	{
		name: "02-heating-mix-2021",
		path: "./data/02-heating-mix-2021.csv",
	},
	{
		name: "02-consumption-emissions",
		path: "./data/02-consumption-emissions.csv",
	},
	{ name: "02-thg-total-tons", path: "./data/02-thg-total-tons.csv" },
	{
		name: "02-thg-sector-2021-tons",
		path: "./data/02-thg-sector-2021-tons.csv",
	},
	{
		name: "02-modal-split-2018",
		path: "./data/02-modal-split-2018.csv",
	},
	{
		name: "02-traffic-2022-summarized",
		path: "./data/02-traffic-2022-summarized.csv",
	},
	{
		name: "03-rest-budget-thg-until-year",
		path: "./data/03-rest-budget-thg-until-year.csv",
	},
	{
		name: "03-reduction-path-scenario175-thg",
		path: "./data/03-reduction-path-scenario175-thg.csv",
	},
	{
		name: "04-hot-days",
		path: "./data/04-hot-days.csv",
	},
	{
		name: "04-medium-temperature",
		path: "./data/04-medium-temperature.csv",
	},
];

const data = {};

csvFiles.forEach(async ({ name, path }) => {
	const raw = fs.readFileSync(path).toString();

	await new Promise<void>((resolve) => {
		Papa.parse(raw, {
			header: true,
			delimiter: ";",
			skipEmptyLines: true,
			transform: (value) => {
				// Attempt to parse the value as a number
				const parsedValue = parseFloat(value);
				return isNaN(parsedValue) ? value : parsedValue;
			},
			complete: (result: { data: Record<string, string | number>[] }) => {
				const nameWithoutNumberPrefix = name.slice(3);
				const nameInCamelCase = _.camelCase(nameWithoutNumberPrefix);

				data[nameInCamelCase] = result.data;

				resolve();
			},
		});
	});

	const json = JSON.stringify(data, null, 2);
	fs.writeFileSync("./src/data/index.ts", `export const data = ${json};`);
});
