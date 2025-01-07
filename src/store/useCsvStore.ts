import { create } from "zustand";
import Papa from "papaparse";
import {
	EevSector2021Mwh,
	Traffic2022,
	ThgTotalTons,
	ThgSector2021Tons,
	ModalSplit2018,
	HeatingMix2021,
	EevTotalMwh,
	ReductionPathScenario175Thg,
	MediumTemperature,
	HotDays,
	TrendscenarioThgUntil2050,
	RestBudgetThgUntilYear,
} from "./csvTypes";

type CsvDataMap = {
	"02-thg-total-tons": ThgTotalTons[];
	"02-thg-sector-2021-tons": ThgSector2021Tons[];
	"02-eev-total-mwh": EevTotalMwh[];
	"02-eev-sector-2021-mwh": EevSector2021Mwh[];
	"02-heating-mix-2021": HeatingMix2021[];
	"02-modal-split-2018": ModalSplit2018[];
	"02-traffic-2022-summarized": Traffic2022[];
	"02-traffic-2022": Traffic2022[];
	"03-reduction-path-scenario175-thg": ReductionPathScenario175Thg[];
	"03-trendscenario-thg-until2050": TrendscenarioThgUntil2050[];
	"03-rest-budget-thg-until-year": RestBudgetThgUntilYear[];
	"04-hot-days": HotDays[];
	"04-medium-temperature": MediumTemperature[];
	[key: string]: unknown[]; // Fallback for unknown datasets
};

interface CsvStore {
	data: Partial<CsvDataMap>;
	loadCsv: (fileName: keyof CsvDataMap, filePath: string) => Promise<void>;
	getCsvData: <T extends keyof CsvDataMap>(
		fileName: T,
	) => CsvDataMap[T] | undefined;
}

export const useCsvStore = create<CsvStore>((set, get) => ({
	data: {},

	loadCsv: async (fileName, filePath) => {
		const response = await fetch(filePath);
		const text = await response.text();

		Papa.parse(text, {
			header: true,
			delimiter: ";",
			skipEmptyLines: true,
			transform: (value) => {
				// Attempt to parse the value as a number
				const parsedValue = parseFloat(value);
				return isNaN(parsedValue) ? value : parsedValue;
			},
			complete: (result) => {
				set((state) => ({
					data: {
						...state.data,
						[fileName]: result.data, // Store data under the corresponding key
					},
				}));
			},
		});
	},

	getCsvData: (fileName) => get().data[fileName],
}));
