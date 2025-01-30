import { de } from "./de";

export const en: typeof de = {
	"header.title": "Climate Dashboard Xhain",

	"weatherCard.title": "Current weather",
	"weatherCard.currently": "currently",
	"weatherCard.time": "",

	"header.bezirksamtXhainAltText": "Go to homepage",
	"header.burgerMenuAltText": "Open menu",
	"header.closeButtonAltText": "Close menu",
	"header.nav.dashboard": "Dashboard",
	"header.nav.climateConcepts": "Climate concepts",
	"header.nav.currentProjects": "Current projects",
	"header.nav.about": "About us",
	"header.cta": "Take action now",

	"languageToggleButton.ariaLabelDeLink": "switch to German language",
	"languageToggleButton.ariaLabelEnLink": "switch to English language",

	/**
	 * chart labels
	 */
	"charts.title": "How does XHain contribute to climate change?",

	"chart.thgTotalTons.title": "Evolution of greenhouse gas emissions",
	"chart.thgTotalTons.subtitle": "in tons of CO2 equivalent",
	"chart.thgTotalTons.keys.heating_tons": "Heating",
	"chart.thgTotalTons.keys.electricity_tons": "Electricity",
	"chart.thgTotalTons.keys.fuels_tons": "Fuels",

	"chart.thgSector2021Tons.title": "Greenhouse gas emissions",
	"chart.thgSector2021Tons.subtitle": "by sectors in tons",
	"chart.thgSector2021Tons.legend.privateHouseholds": "private households",
	"chart.thgSector2021Tons.legend.districtBuildings": "district buildings",
	"chart.thgSector2021Tons.legend.economy": "economy",
	"chart.thgSector2021Tons.legend.traffic": "traffic",
	"chart.thgSector2021Tons.keys.sector": "Sector",
	"chart.thgSector2021Tons.keys.total_tons": "Sum in Tons",
	"chart.thgSector2021Tons.keys.percentage": "Percentage",

	"chart.consumptionEmissionsTons.title":
		"Consumption and nutrition-related emissions",
	"chart.consumptionEmissionsTons.subtitle": "in 2024",
	"chart.consumptionEmissionsTons.keys.xhain": "Xhain",
	"chart.consumptionEmissionsTons.keys.per_person": "Per person",
	"chart.consumptionEmissionsTons.description":
		"To offset this amount, many trees must grow for a year",
	"chart.consumptionEmissionsTons.millionUnit": "M.",
	"chart.consumptionEmissionsTons.co2Unit": "Tons Co2",
	"chart.consumptionEmissionsTons.trees": "Trees",

	"chart.eevTotalMwh.title": "Final energy consumption",
	"chart.eevTotalMwh.subtitle": "in MWh",
	"chart.eevTotalMwh.legend.heating": "Heating",
	"chart.eevTotalMwh.legend.electricity": "Electricity",
	"chart.eevTotalMwh.legend.fuels": "Fuels",
	"chart.eevTotalMwh.keys.year": "Year",
	"chart.eevTotalMwh.keys.heating_mwh": "Heating in Megawatt Hours",
	"chart.eevTotalMwh.keys.electricity_mwh": "Electricity in Megawatt Hours",
	"chart.eevTotalMwh.keys.fuels_mwh": "Fuels in Megawatt Hours",

	"chart.eevSector2021Mwh.title": "Final energy consumption",
	"chart.eevSector2021Mwh.subtitle": "by sectors in 2021",
	"chart.eevSector2021Mwh.keys.sector": "Sector",
	"chart.eevSector2021Mwh.keys.total_mwh": "Sum in Megawatt Hours",
	"chart.eevSector2021Mwh.keys.percentage": "Percentage",

	"chart.heatingMix2021Summarized.title": "Heating mix of households",
	"chart.heatingMix2021Summarized.subtitle": "in 2021",
	"chart.heatingMix2021Summarized.keys.source": "Source",
	"chart.heatingMix2021Summarized.keys.total_mwh": "Sum in Megawatt hours",
	"chart.heatingMix2021Summarized.description":
		"In addition to the energy consumption caused by heating, the energy sources used, as shown in the heating mix, significantly determine our climate balance.",
	"chart.heatingMix2021Summarized.gas": "Natural gas",
	"chart.heatingMix2021Summarized.districtHeating": "District heating",
	"chart.heatingMix2021Summarized.fossil": "Other fossil",
	"chart.heatingMix2021Summarized.renewable": "Renewable energies",

	"chart.modalSplit2018.title": "Modal Split",
	"chart.modalSplit2018.subtitle":
		"Shares of the individual means of transport in total transport performance",
	"chart.modalSplit2018.legend.miv": "Motorized individual transport",
	"chart.modalSplit2018.legend.oepnv": "Public Transport",
	"chart.modalSplit2018.legend.foot": "Foot",
	"chart.modalSplit2018.legend.bike": "Bike",
	"chart.modalSplit2018.toggle.description":
		"Comparison with Berlin's Modalsplit",
	"chart.modalSplit2018.keys.area": "Area",
	"chart.modalSplit2018.keys.miv": "Motorized individual transport",
	"chart.modalSplit2018.keys.oepnv": "Public transport",
	"chart.modalSplit2018.keys.foot": "Pedestrians",
	"chart.modalSplit2018.keys.bike": "Cyclists",

	"chart.traffic2022Summarized.title": "Traffic",
	"chart.traffic2022Summarized.subtitle": "by area in %",
	"chart.traffic2022Summarized.keys.sector": "Sector",
	"chart.traffic2022Summarized.keys.percentage_thg":
		"Greenhouse gas percentage",

	"chart.restBudget.title": "Restbudget-Bucket",
	"chart.restBudget.subtitle": "of the 1,75 degree target",

	"chart.reductionPathScenario175Thg.title": "Reduction path",
	"chart.reductionPathScenario175Thg.subtitle":
		"Climate protection scenario (1.75 degrees, 67% probability)",

	"chart.hotDays.title": "Hot days",
	"chart.hotDays.subtitle": "",
	"chart.hotDays.description":
		'A "Hot Day" is a day with a maximum temperature of 30°C or more.',
	"chart.hotDays.keys.current": "Today",
	"chart.hotDays.keys.1950": "1950s",
	"chart.hotDays.keys.2100": "Future",

	"chart.mediumTemperature.title": "Average annual temperature",
	"chart.mediumTemperature.subtitle": "in Friedrichshain-Kreuzberg by phases",
	"chart.mediumTemperature.description":
		"The mean annual temperature refers to the average value of temperatures over a period of 10 years.",
	"chart.mediumTemperature.current": "Current",
	"chart.mediumTemperature.1950": "1950s",
	"chart.mediumTemperature.2100": "Future",

	"chart.precipitationMm.title": "Precipitation",
	"chart.precipitationMm.subtitle": "in milliliters",
	"chart.precipitationMm.description":
		"There is no clear trend in annual and seasonal precipitation or in the number of days with heavy rainfall in Xhain.",

	"chart.HBI.title": "Heat Affect Index (HAI)",
	"chart.HBI.subtitle":
		"Combination of surface temperature, environmental and human sensitivity",
	"chart.HBI.description":
		"The changing climate has an impact on the environment and the people in the district. The heat affectedness index (HBI) shows which areas in the district are particularly affected by heat. The HBI takes into account not only the temperature, but also socio-demographic and environmental factors in the areas.",

	"chart.districtBuildings": "district buildings",
	"chart.economy": "economy",
	"chart.traffic": "traffic",
	"chart.privateHouseholds": "private households",
	"chart.miv": "private transport",
	"chart.freight": "freight traffic",
	"chart.oepnv": "public transport",

	/**
	 * info dialog
	 */
	"chart.infoDialog.learnMoreLabel": "Learn more in the climate concept",

	"chart.infoDialog.thgTotalTons.sourceTitle": "Excerpt from",
	"chart.infoDialog.thgTotalTons.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.infoDialog.thgTotalTons.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.thgTotalTons.description": `Although households account for a significantly larger share of energy consumption (see also the final energy consumption by sectors card), the economy generates slightly more emissions (43%) than private households (42%). This is due to the different emission factors of energy carriers for electricity and heat. While a large portion of household energy consumption is used for heating, electricity consumption is more dominant in the commercial sector. Due to the current composition of the German electricity mix, electricity has a higher emission factor since power generation in Germany still largely relies on fossil fuels, particularly coal. However, based on current developments and federal-level targets, a steady improvement is expected by 2045. As a district, we can make a significant contribution through the local expansion of photovoltaic (PV) systems.

Traffic accounts for xy% of emissions. Additionally, despite their relatively low emission share, district buildings remain particularly relevant, as their emissions fall under the direct influence of district administration.`,

	"chart.infoDialog.thgSector2021Tons.sourceTitle": "Excerpt from",
	"chart.infoDialog.thgSector2021Tons.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.infoDialog.thgSector2021Tons.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.thgSector2021Tons.description": `Emissions resulting from energy consumption are calculated using so-called emission factors. <b>An emission factor indicates how many greenhouse gases are released</b> when a specific energy source—such as gas, electricity, or oil—is produced, transported, and used. This helps assess how climate-damaging the consumption of a particular energy source is.

<b>The lower the emission factor, the more climate-friendly the energy source.</b> For example, electricity from wind power has a very low emission factor, whereas electricity from coal-fired power plants has a high factor. This is why it is so important to make energy generation climate-neutral and transition to energy sources with low emission factors. At the same time, it remains essential to reduce total energy consumption to lower overall emissions.`,

	"chart.infoDialog.consumptionEmissionsTons.sourceTitle": "Excerpt from",
	"chart.infoDialog.consumptionEmissionsTons.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.infoDialog.consumptionEmissionsTons.learnMoreLink":
		"climate-concepts/",
	"chart.infoDialog.consumptionEmissionsTons.description": `Indirect emissions arise from the consumption of goods and services whose production and transportation takes place outside the district boundaries. These include, for example

	<ul>
		<li>- Production and transportation of food</li>
		<li>- Production of furniture, household appliances or clothing</li>
		<li>- Production of electronic devices</li>
		<li>- Services such as online shopping</li>
	</ul>

Resource-conserving and local provision and sustainable consumption of goods help to reduce emissions - for example through reusable packaging, second-hand offers and repairs.`,

	"chart.infoDialog.eevTotalMwh.sourceTitle": "Excerpt from",
	"chart.infoDialog.eevTotalMwh.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.infoDialog.eevTotalMwh.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.eevTotalMwh.description": `<b>The largest share of energy consumption is due to heat demand, particularly for heating buildings and providing hot water.</b> This currently accounts for 56.9% of the district's energy consumption. Electricity consumption, for example, for lighting or technical devices, accounts for 32.3%. The smallest, but still relevant, consumption share comes from fuels at 10.8%.

<b>These figures clearly show that the greatest need for action is in the heating sector—where there is the most potential for energy savings. By using energy wisely, we can save costs while also laying the foundation for a livable Xhain for everyone.</b>`,

	"chart.infoDialog.eevSector2021Mwh.sourceTitle": "Excerpt from",
	"chart.infoDialog.eevSector2021Mwh.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.infoDialog.eevSector2021Mwh.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.eevSector2021Mwh.description": `<b>Private households are the largest energy consumers, accounting for 50.4%</b> in our densely populated district. This is due, for example, to the high number of households and factors such as heat loss from many old, unrenovated buildings. The second-largest sector is commerce, at 36.1%, which includes gastronomy, hotels, offices, small production businesses, crafts, as well as the characteristic cultural and creative industries. Transportation accounts for 11.6% of energy consumption, while district buildings have the lowest share at 1.9%. 

<b>It is therefore essential to involve all stakeholders—citizens, businesses, and public institutions—in the energy transition.</b>`,

	"chart.infoDialog.heatingMix2021Summarized.sourceTitle": "Excerpt from",
	"chart.infoDialog.heatingMix2021Summarized.sourceLabel":
		"Subconcept: Energy and Buildings",
	"chart.infoDialog.heatingMix2021Summarized.learnMoreLink":
		"climate-concepts/",
	"chart.infoDialog.heatingMix2021Summarized.description": `The heating mix in Xhain shows that <b>heat supply is currently predominantly based on natural gas and district heating.</b> Therefore, in addition to reducing heat consumption, decarbonizing heat supply—meaning the transition to a climate-friendly heating system—is a key measure to reduce heat-related emissions.

This means that natural gas-based heating must be replaced with renewable energy sources such as solar thermal or environmental heat, and district heating must be made climate-neutral.`,

	"chart.infoDialog.modalSplit2018.sourceTitle": "Excerpt from",
	"chart.infoDialog.modalSplit2018.sourceLabel": "Subconcept: Mobility",
	"chart.infoDialog.modalSplit2018.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.modalSplit2018.description": `The environmentally friendly transport network, i.e., <b>public transport, cycling, and walking, already accounts for a significant share in Berlin.</b> The data shows that our district is leading by example, with 86.5% of all trips made using sustainable transport modes. Nevertheless, the transport sector continues to have a significant impact on our climate. Despite the low share of motorized individual transport (MIV) at 13.5%, the sector still generates emissions of 153,000 tons of CO2 equivalents per year, making up around 13.6% of the district's total emissions in 2021.

Further efforts to reduce transport emissions are crucial—not only for climate protection but also for improving air quality and reducing noise pollution in our neighborhoods.`,

	"chart.infoDialog.traffic2022Summarized.sourceTitle": "Excerpt from",
	"chart.infoDialog.traffic2022Summarized.sourceLabel": "Subconcept: Mobility",
	"chart.infoDialog.traffic2022Summarized.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.traffic2022Summarized.description": `The climate balance takes into account all trips that start or end in Xhain, as well as those where both the start and destination are within the district. This includes public transport as well as a small share of inland waterway transport. However, flights taken by residents or tourists are not included, as the airport is located outside the district boundaries.

<b>The goal is to reduce and electrify motorized individual transport while strengthening sustainable mobility options.</b>`,

	"chart.infoDialog.restBudget.sourceTitle": "Excerpt from",
	"chart.infoDialog.restBudget.sourceLabel":
		"Climate Protection Concept - Summary Version",
	"chart.infoDialog.restBudget.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.restBudget.description": `The Paris Climate Agreement provides the international framework to limit global warming to well below 2°C, ideally to 1.5°C. At the national level, these targets are supplemented by the Berlin Energy Transition Act (EWG Bln), which aims for climate neutrality by 2045. In Xhain's Climate Protection Concept, the 1.75°C target has been chosen as a guideline, as projections and emission trends indicate that achieving the 1.5°C target is becoming increasingly difficult.

To implement the Paris targets locally, the so-called remaining budget approach is used. This emphasizes that not only annual CO2 emissions are crucial but also the total amount of greenhouse gases released into the atmosphere over time.`,

	"chart.infoDialog.reductionPathScenario175Thg.sourceTitle": "Excerpt from",
	"chart.infoDialog.reductionPathScenario175Thg.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.infoDialog.reductionPathScenario175Thg.learnMoreLink":
		"climate-concepts/",
	"chart.infoDialog.reductionPathScenario175Thg.description": `<b>In recent years, we have failed to meet Berlin's climate protection targets.</b> To get back on track by 2030, we need to reduce emissions more significantly and take decisive action.

The graph illustrates how crucial it is to enter the phase of strong reduction as quickly as possible in order to achieve climate neutrality by 2045 at the latest. The sooner emission reductions are implemented, the less strain is placed on the remaining budget, and the more time remains to implement necessary changes. <b>Accordingly, the climate protection scenario outlines a continuous and realistic reduction path.</b>`,

	"chart.infoDialog.hotDays.sourceTitle": "Source:",
	"chart.infoDialog.hotDays.sourceLabel": `<a
				href="https://dwd.de"
				target="_blank"
				rel="noopener noreferrer"
			>
				DWD
			</a>
			,&nbsp
			<a
				href="https://dwd.de"
				target="_blank"
				rel="noopener noreferrer"	
			>
				Climate Service Center Germany (GERICS)
			</a>`,
	"chart.infoDialog.hotDays.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.hotDays.description": `In the 1950s, there was an average of 5.5 hot days per year in the district. By the 2010s, this number had tripled—there are now 16.5 hot days per year.

Future projections are more difficult to determine and depend on climate protection efforts. If greenhouse gas emissions continue to rise steadily (RCP 8.5 scenario), the number of hot days could increase to around 28 days per year by the end of the century. If emissions begin to decline from the middle of the century onward (RCP 4.5 scenario), the number of hot days could be limited to around 21 days per year.`,

	"chart.infoDialog.mediumTemperature.sourceTitle": "Source:",
	"chart.infoDialog.mediumTemperature.sourceLabel": `<a
				href="https://dwd.de"
				target="_blank"
				rel="noopener noreferrer"
			>
				DWD
			</a>
			,&nbsp
			<a
				href="https://dwd.de"
				target="_blank"
				rel="noopener noreferrer"	
			>
				Climate Service Center Germany (GERICS)
			</a>`,
	"chart.infoDialog.mediumTemperature.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.mediumTemperature.description": `Average temperatures over a 10-year period help identify long-term temperature changes. They are more comparable than single-year values, as they balance out particularly warm or cold years. Between 2011 and 2020, the average annual temperature was 10.9°C—1.7°C higher than in the 1950s.

Future projections are more difficult to determine and depend on climate protection measures. If greenhouse gas emissions continue to rise steadily (RCP 8.5 scenario), the average annual temperature could increase to around 13.2°C by the end of the century. If emissions begin to decline from the middle of the century onward (RCP 4.5 scenario), the average annual temperature could be limited to 12°C.`,

	"chart.infoDialog.precipitationMm.sourceTitle": "Source:",
	"chart.infoDialog.precipitationMm.sourceLabel": `<a
				href="https://dwd.de"
				target="_blank"
				rel="noopener noreferrer"
			>
				DWD
			</a>
			,&nbsp
			<a
				href="https://dwd.de"
				target="_blank"
				rel="noopener noreferrer"	
			>
				Climate Service Center Germany (GERICS)
			</a>`,
	"chart.infoDialog.precipitationMm.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.precipitationMm.description": `So far, no clear trend has been observed in Xhain's annual and seasonal precipitation. In particular, summer precipitation varies significantly from year to year. For example, in the summer of 2018, only a quarter of the previous year's precipitation was recorded (100 mm compared to 400 mm). Future projections remain uncertain, but overall, an increase in annual precipitation is expected.

Regarding the number of heavy rainfall days, no clear trend has been observed yet. However, the intensity of heavy rainfall events has increased over the past 30 years. For example, severe rainfall events in June 2017 and July 2018 led to major flooding. If dry periods persist for a long time, the soil is less able to absorb rainwater. In the future, both the frequency and intensity of heavy rainfall events are expected to increase.`,

	"chart.infoDialog.HBI.sourceTitle": "Source:",
	"chart.infoDialog.HBI.sourceLabel":
		"Climate Adaptation Concept Friedrichshain-Kreuzberg",
	"chart.infoDialog.HBI.learnMoreLink": "climate-concepts/",
	"chart.infoDialog.HBI.description.part1": `The HBI is calculated using the following indicators:`,
	"chart.infoDialog.HBI.description.part2":
		"You can find the Heat Vulnerability Index and additional maps of the individual indicators in the [district geoportal MeinXhain](https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/stadtentwicklungsamt/vermessung/artikel.779965.php).",

	"button.moreInfo": "more info",

	"howToReachGoals.title":
		"How can XHain achieve its climate protection goals in the future?",

	"consequences.title": "How does climate change affect XHain?",
	"consequences.description":
		"When analyzing climate impacts in Xhain, a distinction is made between climate trends and the extent to which people are affected. Climate trends describe how the climate has changed so far and what future changes are to be expected. The impact of these climate developments, i.e. the degree to which they are affected, depends on socio-demographic and environmental factors. These include, for example, population density, the proportion of vulnerable groups or the degree of sealing.",
	"consequences.subheading": "How is the climate changing?",

	"currentProjects.title": "What is already happening in XHain?",

	"footer.cardHeading":
		"Do you have any questions about the climate dashboard and the climate concepts?",
	"footer.cardSubHeading": "write to us!",
	"footer.cardCtaButtonText": "info@klimateam.de",
	"footer.cardCtaEmail": "info@klimateam.de",
	"footer.bezirksamtXhainAltText": "bezirksamt xhain logo",
	"footer.imprint": "Imprint",
	"footer.privacyPolicy": "Privacy Policy",
	"footer.projectOwnerLabel": "A project of",
	"footer.projectExecutionerLabel": "Implemented by",
	"footer.cityLABLogoAltText": "Logo of the CityLAB Berlin",
	"footer.tSBLogoAltText": "Logo of the Technology Foundation Berlin",
	"footer.footerSentatskanzleiLogoAltText": "Logo of Berlin Senate Chancellery",
};
