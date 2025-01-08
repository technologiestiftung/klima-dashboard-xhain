export interface EevSector2021Mwh {
	sector: string;
	total_mwh: number;
}

export interface Traffic2022 {
	sector: string;
	percentage_thg: string;
	percentage_eev: string;
}

export interface ThgTotalTons {
	year: number;
	heating_tons: number;
	electricity_tons: number;
	fuels_tons: number;
}

export interface ThgSector2021Tons {
	sector: string;
	total_tons: number;
}

export interface ModalSplit2018 {
	area: string;
	miv: string;
	oepnv: string;
	foot: string;
	bike: string;
}

export interface HeatingMix2021 {
	source: string;
	total_mwh: number;
}

export interface EevTotalMwh {
	year: number;
	heating_mwh: number;
	electricity_mwh: number;
	fuels_mwh: number;
}

export interface ReductionPathScenario175Thg {
	year: number;
	electricity_total_tons: number;
	heating_total_tons: number;
	goal_xhain_tons: number | null;
}

export interface MediumTemperature {
	time: string;
	celsius: string;
}

export interface HotDays {
	time: string;
	days: string;
}

export interface TrendscenarioThgUntil2050 {
	year: number;
	thg_trend_tons: string;
}

export interface RestBudgetThgUntilYear {
	climate_goal_celsius: string;
	probability_reaching_goal: string;
	rest_budget_xhain_thg_tons: string;
	budget_used_w_current_trend: number;
}
