// Data types for howXhainContributesData
export type HowXhainContributesDataType = {
	eevTotalMwh: {
		year: number;
		heating_mwh: number;
		electricity_mwh: number;
		fuels_mwh: number;
	}[];
	eevSector2021Mwh: {
		sector: "districtBuildings" | "economy" | "privateHouseholds" | "traffic";
		total_mwh: number;
		percentage: number;
	}[];
	heatingMix2021Summarized: {
		source: "gas" | "fossil" | "renewable" | "districtHeating";
		percentage: number;
	}[];
	thgSector2021Tons: {
		sector: "districtBuildings" | "economy" | "privateHouseholds" | "traffic";
		total_tons: number;
		percentage: number;
	}[];
	thgTotalTons: {
		year: number;
		heating_tons: number;
		electricity_tons: number;
		fuels_tons: number;
	}[];
	consumptionEmissionsTons: { xhain: number; per_person: number }[];
	modalSplit2018: {
		area: "xhain" | "berlin";
		miv: number;
		oepnv: number;
		foot: number;
		bike: number;
	}[];
	traffic2022Summarized: {
		sector: "miv" | "freight" | "oepnv";
		percentage_thg: number;
	}[];
};

// Data types for howToReachGoalsData
export type HowToReachGoalsDataType = {
	restBudgetThgUntilYear: {
		climate_goal_celsius: number;
		probability_reaching_goal: number;
		rest_budget_xhain_thg_tons: number;
		budget_used_w_current_trend: number;
	}[];
	reductionPathScenario175Thg: {
		year: number;
		electricity_total_tons: number;
		heating_total_tons: number;
		goal_xhain_tons: number | "";
	}[];
};

// Data types for consequencesData
export type ConsequencesDataType = {
	hotDays: Array<{
		time: number | "current";
		days: number;
	}>;
	mediumTemperature: Array<{
		time: number | "current";
		celsius: number;
	}>;
	precipitationMm: Array<{
		year: number;
		rain: number;
	}>;
};
