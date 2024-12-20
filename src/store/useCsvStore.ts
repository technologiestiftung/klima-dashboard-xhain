import { create } from "zustand";
import Papa from "papaparse";

interface CsvData {
	[key: string]: (number | string)[];
}

interface CsvStore {
	data: CsvData;
	loadCsv: (fileName: string, filePath: string) => Promise<void>;
	getCsvData: (fileName: string) => unknown[] | undefined;
}

export const useCsvStore = create<CsvStore>((set, get) => ({
	data: {},

	loadCsv: async (fileName: string, filePath: string) => {
		const response = await fetch(filePath);
		const text = await response.text();

		Papa.parse(text, {
			header: true,
			delimiter: ";",
			skipEmptyLines: true,
			complete: (result) => {
				set((state) => ({
					data: {
						...state.data,
						[fileName]: result.data as (string | number)[],
					},
				}));
			},
		});
	},

	getCsvData: (fileName: string) => get().data[fileName],
}));
