import { de } from "./de";

export const en: typeof de = {
	"header.title": "Climate Dashboard Xhain",

	"heroSection.eyebrowText": "Climate dashboard",
	"heroSection.heading": "Climate change in Friedrichshain-Kreuzberg",
	"heroSection.subheading":
		"Figures, facts, need for action - for a desirable Xhain",
	"heroSection.mediumTemperature.averageTempText": "Average annual temperature",
	"heroSection.mediumTemperature.locationText":
		"in Friedrichshain-Kreuzberg by phases",

	"weatherCard.title": "Current weather",
	"weatherCard.currently": "currently",
	"weatherCard.time": "",
	"weatherCard.icon.clear-day": "Clear day",
	"weatherCard.icon.clear-night": "Clear night",
	"weatherCard.icon.partly-cloudy-day": "Partly cloudy day",
	"weatherCard.icon.partly-cloudy-night": "Partly cloudy night",
	"weatherCard.icon.cloudy": "Cloudy",
	"weatherCard.icon.fog": "Fog",
	"weatherCard.icon.wind": "Windy",
	"weatherCard.icon.rain": "Rain",
	"weatherCard.icon.sleet": "Sleet",
	"weatherCard.icon.snow": "Snow",
	"weatherCard.icon.hail": "Hail",
	"weatherCard.icon.thunderstorm": "Thunderstorm",

	"introSection.overview":
		"The Climate Dashboard provides insights into current climate data and climate activities in Friedrichshain-Kreuzberg.<br/><br/>It answers questions such as",
	"introSection.keyQuestion1":
		"Where do greenhouse gas emissions occur in Xhain?",
	"introSection.keyQuestion2":
		"What contribution has the district made so far on the path to climate neutrality in Berlin?",
	"introSection.keyQuestion3":
		"And where are the effects of climate change already visible in the district?",
	"introSection.dataBasis": `
    The basis for this is the analyses from the <a href='https://klima-dashboard-xhain.vercel.app/en/climate-concepts/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>climate protection and climate adaptation concepts.</a>  
    These two concepts were developed by the <a href='https://klima-dashboard-xhain.vercel.app/en/about/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>climate team</a> and politically adopted in December 2024 as a planning and decision-making basis.</br></br>
`,
	"introSection.collaboration": `
    The dashboard was developed in close collaboration between the climate team  
    Friedrichshain-Kreuzberg and <a href='https://citylab-berlin.org/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>CityLAB Berlin.</a></br></br>
`,
	"introSection.showLess": "show less",
	"introSection.showMore": "show more",
	"introSection.expandedAltText": "Collapse section",
	"introSection.collapseAltText": "Expand section",

	"header.bezirksamtXhainAltText": "Go to homepage",
	"header.burgerMenuAltText": "Open menu",
	"header.closeButtonAltText": "Close menu",
	"header.nav.dashboard": "Dashboard",
	"header.nav.climateConcepts": "Climate concepts",
	"header.nav.currentProjects": "Current projects",
	"header.nav.about": "About us",
	"header.cta": "Take action now",

	"carousel.title": "This is Xhain",
	"carousel.button.previous.alt":
		"Highlight previous card in the horizontally scrollable section above",
	"carousel.button.next.alt":
		"Highlight next card in the horizontally scrollable section above",

	"carousel.infoButton.alt": "Click to show the source of the information",

	"carousel.card1.intro": "",
	"carousel.card1.description": "People live in Friedrichshain-Kreuzberg",
	"carousel.card1.source": "Statistics Berlin-Brandenburg 2024",

	"carousel.card2.intro": "",
	"carousel.card2.description": "people live within one km²",
	"carousel.card2.source": "Statistics Berlin-Brandenburg 2024",

	"carousel.card3.intro": "",
	"carousel.card3.description": "of the area is sealed",
	"carousel.card3.source": "Environmental Atlas 2021",

	"carousel.card4.intro": "",
	"carousel.card4.description": "is the share of traffic area in",
	"carousel.card4.source": "Statistics Berlin-Brandenburg 2023",

	"carousel.card5.intro": "In 2023",
	"carousel.card5.number": "1,6 Mio.",
	"carousel.card5.description":
		"guests stayed overnight in 85 accommodations in the district",
	"carousel.card5.source": "Berlin.de",

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
	"chart.thgTotalTons.infoDialog.sourceTitle": "Excerpt from",
	"chart.thgTotalTons.infoDialog.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.thgTotalTons.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-concept-full",
	"chart.thgTotalTons.infoDialog.description": `Although households account for a significantly larger share of energy consumption (see also the final energy consumption by sectors card), the economy generates slightly more emissions (43%) than private households (42%). This is due to the different emission factors of energy carriers for electricity and heat. While a large portion of household energy consumption is used for heating, electricity consumption is more dominant in the commercial sector. Due to the current composition of the German electricity mix, electricity has a higher emission factor since power generation in Germany still largely relies on fossil fuels, particularly coal. However, based on current developments and federal-level targets, a steady improvement is expected by 2045. As a district, we can make a significant contribution through the local expansion of photovoltaic (PV) systems.

Traffic accounts for xy% of emissions. Additionally, despite their relatively low emission share, district buildings remain particularly relevant, as their emissions fall under the direct influence of district administration.`,

	"chart.thgSector2021Tons.title": "Greenhouse gas emissions",
	"chart.thgSector2021Tons.subtitle": "by sectors in tons of CO2 equivalent",
	"chart.thgSector2021Tons.legend.privateHouseholds": "private households",
	"chart.thgSector2021Tons.legend.districtBuildings": "district buildings",
	"chart.thgSector2021Tons.legend.economy": "economy",
	"chart.thgSector2021Tons.legend.traffic": "traffic",
	"chart.thgSector2021Tons.keys.sector": "Sector",
	"chart.thgSector2021Tons.keys.total_tons": "Sum in Tons of CO2 equivalent",
	"chart.thgSector2021Tons.keys.percentage": "Percentage",
	"chart.thgSector2021Tons.infoDialog.sourceTitle": "Excerpt from",
	"chart.thgSector2021Tons.infoDialog.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.thgSector2021Tons.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-concept-full",
	"chart.thgSector2021Tons.infoDialog.description": `Emissions resulting from energy consumption are calculated using so-called emission factors. <b>An emission factor indicates how many greenhouse gases are released</b> when a specific energy source—such as gas, electricity, or oil—is produced, transported, and used. This helps assess how climate-damaging the consumption of a particular energy source is.

<b>The lower the emission factor, the more climate-friendly the energy source.</b> For example, electricity from wind power has a very low emission factor, whereas electricity from coal-fired power plants has a high factor. This is why it is so important to make energy generation climate-neutral and transition to energy sources with low emission factors. At the same time, it remains essential to reduce total energy consumption to lower overall emissions.`,

	"chart.consumptionEmissionsTons.title":
		"Consumption and nutrition-related emissions",
	"chart.consumptionEmissionsTons.subtitle": "in 2024",
	"chart.consumptionEmissionsTons.keys.xhain": "Xhain",
	"chart.consumptionEmissionsTons.keys.per_person": "Per person",
	"chart.consumptionEmissionsTons.descriptionText":
		"To offset this amount, many trees must grow for a year",
	"chart.consumptionEmissionsTons.millionUnit": "M.",
	"chart.consumptionEmissionsTons.co2Unit": "Tons Co2",
	"chart.consumptionEmissionsTons.trees": "Trees",
	"chart.consumptionEmissionsTons.infoDialog.sourceTitle": "Excerpt from",
	"chart.consumptionEmissionsTons.infoDialog.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.consumptionEmissionsTons.infoDialog.learnMoreLink":
		"/climate-concepts/#consumption-society",
	"chart.consumptionEmissionsTons.infoDialog.description": `Indirect emissions arise from the consumption of goods and services whose production and transportation takes place outside the district boundaries. These include, for example

	<ul>
		<li>- Production and transportation of food</li>
		<li>- Production of furniture, household appliances or clothing</li>
		<li>- Production of electronic devices</li>
		<li>- Services such as online shopping</li>
	</ul>

Resource-conserving and local provision and sustainable consumption of goods help to reduce emissions - for example through reusable packaging, second-hand offers and repairs.`,

	"chart.eevTotalMwh.title": "Final energy consumption",
	"chart.eevTotalMwh.subtitle": "in MWh",
	"chart.eevTotalMwh.legend.heating": "Heating",
	"chart.eevTotalMwh.legend.electricity": "Electricity",
	"chart.eevTotalMwh.legend.fuels": "Fuels",
	"chart.eevTotalMwh.keys.year": "Year",
	"chart.eevTotalMwh.keys.heating_mwh": "Heating in Megawatt Hours",
	"chart.eevTotalMwh.keys.electricity_mwh": "Electricity in Megawatt Hours",
	"chart.eevTotalMwh.keys.fuels_mwh": "Fuels in Megawatt Hours",
	"chart.eevTotalMwh.infoDialog.sourceTitle": "Excerpt from",
	"chart.eevTotalMwh.infoDialog.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.eevTotalMwh.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-concept-full",
	"chart.eevTotalMwh.infoDialog.description": `<b>The largest share of energy consumption is due to heat demand, particularly for heating buildings and providing hot water.</b> This currently accounts for 56.9% of the district's energy consumption. Electricity consumption, for example, for lighting or technical devices, accounts for 32.3%. The smallest, but still relevant, consumption share comes from fuels at 10.8%.

<b>These figures clearly show that the greatest need for action is in the heating sector—where there is the most potential for energy savings. By using energy wisely, we can save costs while also laying the foundation for a livable Xhain for everyone.</b>`,

	"chart.eevSector2021Mwh.title": "Final energy consumption",
	"chart.eevSector2021Mwh.subtitle": "by sectors in 2021",
	"chart.eevSector2021Mwh.keys.sector": "Sector",
	"chart.eevSector2021Mwh.keys.total_mwh": "Sum in Megawatt Hours",
	"chart.eevSector2021Mwh.keys.percentage": "Percentage",
	"chart.eevSector2021Mwh.infoDialog.sourceTitle": "Excerpt from",
	"chart.eevSector2021Mwh.infoDialog.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.eevSector2021Mwh.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-concept-full",
	"chart.eevSector2021Mwh.infoDialog.description": `<b>Private households are the largest energy consumers, accounting for 50.4%</b> in our densely populated district. This is due, for example, to the high number of households and factors such as heat loss from many old, unrenovated buildings. The second-largest sector is commerce, at 36.1%, which includes gastronomy, hotels, offices, small production businesses, crafts, as well as the characteristic cultural and creative industries. Transportation accounts for 11.6% of energy consumption, while district buildings have the lowest share at 1.9%. 

<b>It is therefore essential to involve all stakeholders—citizens, businesses, and public institutions—in the energy transition.</b>`,

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
	"chart.heatingMix2021Summarized.infoDialog.sourceTitle": "Excerpt from",
	"chart.heatingMix2021Summarized.infoDialog.sourceLabel":
		"Subconcept: Energy and Buildings",
	"chart.heatingMix2021Summarized.infoDialog.learnMoreLink":
		"/climate-concepts/#energy-buildings",
	"chart.heatingMix2021Summarized.infoDialog.description": `The heating mix in Xhain shows that <b>heat supply is currently predominantly based on natural gas and district heating.</b> Therefore, in addition to reducing heat consumption, decarbonizing heat supply—meaning the transition to a climate-friendly heating system—is a key measure to reduce heat-related emissions.

This means that natural gas-based heating must be replaced with renewable energy sources such as solar thermal or environmental heat, and district heating must be made climate-neutral.`,

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
	"chart.modalSplit2018.infoDialog.sourceTitle": "Excerpt from",
	"chart.modalSplit2018.infoDialog.sourceLabel": "Subconcept: Mobility",
	"chart.modalSplit2018.infoDialog.learnMoreLink":
		"/climate-concepts/#mobility",
	"chart.modalSplit2018.infoDialog.description": `The environmentally friendly transport network, i.e., <b>public transport, cycling, and walking, already accounts for a significant share in Berlin.</b> The data shows that our district is leading by example, with 86.5% of all trips made using sustainable transport modes. Nevertheless, the transport sector continues to have a significant impact on our climate. Despite the low share of motorized individual transport (MIV) at 13.5%, the sector still generates emissions of 153,000 tons of CO2 equivalents per year, making up around 13.6% of the district's total emissions in 2021.

Further efforts to reduce transport emissions are crucial—not only for climate protection but also for improving air quality and reducing noise pollution in our neighborhoods.`,

	"chart.traffic2022Summarized.title": "Traffic",
	"chart.traffic2022Summarized.subtitle": "by area in %",
	"chart.traffic2022Summarized.keys.sector": "Sector",
	"chart.traffic2022Summarized.keys.percentage_thg":
		"Greenhouse gas percentage",
	"chart.traffic2022Summarized.infoDialog.sourceTitle": "Excerpt from",
	"chart.traffic2022Summarized.infoDialog.sourceLabel": "Subconcept: Mobility",
	"chart.traffic2022Summarized.infoDialog.learnMoreLink":
		"/climate-concepts/#mobility",
	"chart.traffic2022Summarized.infoDialog.description": `The climate balance takes into account all trips that start or end in Xhain, as well as those where both the start and destination are within the district. This includes public transport as well as a small share of inland waterway transport. However, flights taken by residents or tourists are not included, as the airport is located outside the district boundaries.

<b>The goal is to reduce and electrify motorized individual transport while strengthening sustainable mobility options.</b>`,

	"chart.restBudgetThgUntilYear.title": "Restbudget-Bucket",
	"chart.restBudgetThgUntilYear.subtitle": "of the 1,75 degree target",
	"chart.restBudgetThgUntilYear.unit": "Mio. tons",
	"chart.restBudgetThgUntilYear.remainingBudget": "Remaining budget until",
	"chart.restBudgetThgUntilYear.text": `The remaining budget approach is used to implement the Paris targets locally.
	
	This emphasizes that not only annual CO2 emissions are crucial but also the total amount of greenhouse gases released into the atmosphere over time. 
	
	The graph shows the remaining budget for the 1.75 degree target until 2045. The sooner emission reductions are implemented, the less strain is placed on the remaining budget, and the more time remains to implement necessary changes.`,
	"chart.restBudgetThgUntilYear.infoDialog.sourceTitle": "Excerpt from",
	"chart.restBudgetThgUntilYear.infoDialog.sourceLabel":
		"Climate Protection Concept - Summary Version",
	"chart.restBudgetThgUntilYear.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-concept-summary",
	"chart.restBudgetThgUntilYear.infoDialog.description": `The Paris Climate Agreement provides the international framework to limit global warming to well below 2°C, ideally to 1.5°C. At the national level, these targets are supplemented by the Berlin Energy Transition Act (EWG Bln), which aims for climate neutrality by 2045. In Xhain's Climate Protection Concept, the 1.75°C target has been chosen as a guideline, as projections and emission trends indicate that achieving the 1.5°C target is becoming increasingly difficult.

To implement the Paris targets locally, the so-called remaining budget approach is used. This emphasizes that not only annual CO2 emissions are crucial but also the total amount of greenhouse gases released into the atmosphere over time.`,

	"chart.reductionPathScenario175Thg.title": "Reduction path",
	"chart.reductionPathScenario175Thg.subtitle":
		"Climate protection scenario (1.75 degrees) in tons of CO2 equivalent",
	"chart.reductionPathScenario175Thg.legend.model": "Model Xhain",
	"chart.reductionPathScenario175Thg.legend.goal": "Ziel Land Berlin",
	"chart.reductionPathScenario175Thg.description":
		"The reduction path shows the development of greenhouse gas emissions in Xhain. The goal is to reduce emissions by 95% by 2045 compared to 1990. The scenario shows how this goal can be achieved.",
	"chart.reductionPathScenario175Thg.infoDialog.sourceTitle": "Excerpt from",
	"chart.reductionPathScenario175Thg.infoDialog.sourceLabel":
		"Climate Protection Concept - Full Version",
	"chart.reductionPathScenario175Thg.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-concept-full",
	"chart.reductionPathScenario175Thg.infoDialog.description": `<b>In recent years, we have failed to meet Berlin's climate protection targets.</b> To get back on track by 2030, we need to reduce emissions more significantly and take decisive action.

The graph illustrates how crucial it is to enter the phase of strong reduction as quickly as possible in order to achieve climate neutrality by 2045 at the latest. The sooner emission reductions are implemented, the less strain is placed on the remaining budget, and the more time remains to implement necessary changes. <b>Accordingly, the climate protection scenario outlines a continuous and realistic reduction path.</b>`,

	"chart.hotDays.title": "Hot days",
	"chart.hotDays.subtitle": "",
	"chart.hotDays.description":
		'A "Hot Day" is a day with a maximum temperature of 30°C or more.',
	"chart.hotDays.keys.current": "Today",
	"chart.hotDays.keys.1950": "1950s",
	"chart.hotDays.keys.2100": "Future",
	"chart.hotDays.infoDialog.sourceTitle": "Source:",
	"chart.hotDays.infoDialog.sourceLabel": `<a
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
	"chart.hotDays.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-adaptation-full",
	"chart.hotDays.infoDialog.description": `In the 1950s, there was an average of 5.5 hot days per year in the district. By the 2010s, this number had tripled—there are now 16.5 hot days per year.

Future projections are more difficult to determine and depend on climate protection efforts. If greenhouse gas emissions continue to rise steadily (RCP 8.5 scenario), the number of hot days could increase to around 28 days per year by the end of the century. If emissions begin to decline from the middle of the century onward (RCP 4.5 scenario), the number of hot days could be limited to around 21 days per year.`,

	"chart.mediumTemperature.title": "Average annual temperature",
	"chart.mediumTemperature.subtitle": "in Friedrichshain-Kreuzberg by phases",
	"chart.mediumTemperature.description":
		"The mean annual temperature refers to the average value of temperatures over a period of 10 years.",
	"chart.mediumTemperature.current": "Current",
	"chart.mediumTemperature.1950": "1950s",
	"chart.mediumTemperature.2100": "Future",
	"chart.mediumTemperature.infoDialog.sourceTitle": "Source:",
	"chart.mediumTemperature.infoDialog.sourceLabel": `<a
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
	"chart.mediumTemperature.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-adaptation-full",
	"chart.mediumTemperature.infoDialog.description": `Average temperatures over a 10-year period help identify long-term temperature changes. They are more comparable than single-year values, as they balance out particularly warm or cold years. Between 2011 and 2020, the average annual temperature was 10.9°C—1.7°C higher than in the 1950s.

Future projections are more difficult to determine and depend on climate protection measures. If greenhouse gas emissions continue to rise steadily (RCP 8.5 scenario), the average annual temperature could increase to around 13.2°C by the end of the century. If emissions begin to decline from the middle of the century onward (RCP 4.5 scenario), the average annual temperature could be limited to 12°C.`,

	"chart.precipitationMm.title": "Precipitation",
	"chart.precipitationMm.subtitle": "in milliliters",
	"chart.precipitationMm.description":
		"There is no clear trend in annual and seasonal precipitation or in the number of days with heavy rainfall in Xhain.",
	"chart.precipitationMm.infoDialog.sourceTitle": "Source:",
	"chart.precipitationMm.infoDialog.sourceLabel": `<a
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
	"chart.precipitationMm.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-adaptation-full",
	"chart.precipitationMm.infoDialog.description": `So far, no clear trend has been observed in Xhain's annual and seasonal precipitation. In particular, summer precipitation varies significantly from year to year. For example, in the summer of 2018, only a quarter of the previous year's precipitation was recorded (100 mm compared to 400 mm). Future projections remain uncertain, but overall, an increase in annual precipitation is expected.

Regarding the number of heavy rainfall days, no clear trend has been observed yet. However, the intensity of heavy rainfall events has increased over the past 30 years. For example, severe rainfall events in June 2017 and July 2018 led to major flooding. If dry periods persist for a long time, the soil is less able to absorb rainwater. In the future, both the frequency and intensity of heavy rainfall events are expected to increase.`,

	"chart.HBI.title": "Heat Affect Index (HAI)",
	"chart.HBI.subtitle":
		"Combination of surface temperature, environmental and human sensitivity",
	"chart.HBI.description":
		"The changing climate has an impact on the environment and the people in the district. The heat affectedness index (HBI) shows which areas in the district are particularly affected by heat. The HBI takes into account not only the temperature, but also socio-demographic and environmental factors in the areas.",
	"chart.HBI.infoDialog.sourceTitle": "Source:",
	"chart.HBI.infoDialog.sourceLabel":
		"Climate Adaptation Concept Friedrichshain-Kreuzberg",
	"chart.HBI.infoDialog.learnMoreLink":
		"/climate-concepts/#climate-adaptation-full",
	"chart.HBI.infoDialog.description.part1": `The HBI is calculated using the following indicators:`,
	"chart.HBI.infoDialog.description.part2":
		"You can find the Heat Vulnerability Index and additional maps of the individual indicators in the [district geoportal MeinXhain](https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/stadtentwicklungsamt/vermessung/artikel.779965.php).",

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

	"button.moreInfo": "more info",

	"howToReachGoals.title":
		"How can XHain achieve its climate protection goals in the future?",
	"howToReachGoals.description":
		"Climate protection is a central task for the future of Xhain. The district has set itself the goal of reducing greenhouse gas emissions by 95% by 2045 compared to 1990. This is a challenging task that requires the commitment of all residents, businesses, and public institutions. The climate protection concept outlines various measures and strategies to achieve this goal. The following scenarios show how Xhain can contribute to climate protection in the future.",

	"consequences.title": "How does climate change affect XHain?",
	"consequences.description":
		"When analyzing climate impacts in Xhain, a distinction is made between climate trends and the extent to which people are affected. Climate trends describe how the climate has changed so far and what future changes are to be expected. The impact of these climate developments, i.e. the degree to which they are affected, depends on socio-demographic and environmental factors. These include, for example, population density, the proportion of vulnerable groups or the degree of sealing.",
	"consequences.subheading": "How is the climate changing?",

	/**
	 * Current Projects page
	 */
	"currentProjects.title": "Current projects",
	"currentProjects.subtitle": "in Friedrichshain-Kreuzberg",
	"currentProjects.featureImageSource": "Image: Kareen Kittelmann",
	"currentProjects.projectCardCtaLabel": "To project",
	"currentProjects.greenCardTitle":
		"Advancing Climate Protection Projects Together",
	"currentProjects.greenCardDescription":
		"There are already many exciting projects and organizations on-site. Want to make a positive impact yourself? Here, you'll find projects and initiatives to get involved in!",
	"currentProjects.greenCardCtaLabel": "Find suitable projects",
	/**
	 * projects
	 */
	"currentProjects.project1.title": "Depaving",
	"currentProjects.project1.description":
		"Depaving and greening courtyards can improve the microclimate and living quality while also promoting biodiversity. Tenants can receive up to 3,000 euros in funding for this. More than 100 people received consultations by phone or on-site from March to October 2024.",
	"currentProjects.project1.imageAltText": "Meadow with flowers",
	"currentProjects.project1.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/artikel.1429649.php",
	"currentProjects.project1.imageSource": "Image: BAFK",

	"currentProjects.project2.title": "Green Consultation",
	"currentProjects.project2.description":
		"Unfortunately, the many built-up and asphalted areas in Xhain do not allow rainwater to seep through. However, some of these areas can be depaved and made water-permeable. A map shows which public spaces have been depaved and planted in recent years.",
	"currentProjects.project2.imageAltText": "Child playing",
	"currentProjects.project2.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/umwelt-und-naturschutzamt/umweltbildung/artikel.1043011.php#headline_1_5",
	"currentProjects.project2.imageSource": "Image: Kareen Kittelmann",

	"currentProjects.project3.title": "Parking Space Management",
	"currentProjects.project3.description":
		"Parking space management aims to make Xhain's street space more efficient, enable balanced use, and improve the quality of stay in the neighborhood. The district is pursuing the goal of comprehensive parking management, with 13 zones currently implemented.",
	"currentProjects.project3.imageAltText": "Street",
	"currentProjects.project3.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/strassen-und-gruenflaechenamt/strassen/mobilitaetswende/artikel.1282985.php",
	"currentProjects.project3.imageSource": "Image: ",

	"currentProjects.project4.title": "Cycling Infrastructure",
	"currentProjects.project4.description":
		"Many residents of Xhain already use bicycles for their daily commutes. To further strengthen cycling, the district continues to expand its cycling infrastructure.",
	"currentProjects.project4.imageAltText":
		"Person riding a cargo bike on a red bike lane",
	"currentProjects.project4.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/strassen-und-gruenflaechenamt/strassen/artikel.1496371.php",
	"currentProjects.project4.imageSource": "Image: Kareen Kittelmann",

	"currentProjects.project5.title": "Solar Expansion",
	"currentProjects.project5.description":
		"To fully equip district buildings with solar panels, the district administration is working with Berliner Stadtwerke. As part of this cooperation, systems with a capacity of approximately 850 kWp were commissioned by the end of 2024. Additional installations are in planning and implementation.",
	"currentProjects.project5.imageAltText": "",
	"currentProjects.project5.link":
		" https://www.berlin.de/ba-friedrichshain-kreuzberg/aktuelles/pressemitteilungen/2025/pressemitteilung.1523939.php",
	"currentProjects.project5.imageSource": "Image: ",

	"currentProjects.project6.title": "Smart Heating Circuit Control",
	"currentProjects.project6.description":
		"Fifty district properties have already been equipped with the ovoTherm heating circuit control system, with more buildings to follow. This ensures that heating performance is precisely adjusted to actual usage needs, reducing energy consumption, CO2 emissions, and energy costs.",
	"currentProjects.project6.imageAltText": "",
	"currentProjects.project6.link": "",
	"currentProjects.project6.imageSource": "Image: ",

	"currentProjects.project7.title": "Reusable Initiatives",
	"currentProjects.project7.description":
		"The vibrant life in Xhain presents challenges, as avoidable waste continues to burden the environment and climate. However, we are actively working toward becoming a zero-waste city. Reusable initiatives in gastronomy, weekly markets, and large events show that alternatives are possible.",
	"currentProjects.project7.imageAltText":
		"Two cups with the inscriptions 'fair. kiez' and 'BOXI'",
	"currentProjects.project7.link":
		" https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/beauftragte/entwicklungspolitik-und-nachhaltigkeit/zero-waste/artikel.1221491.php",
	"currentProjects.project7.imageSource": "Image: Daniel Triebke | Markburg",
	/**
	 * Feature Section
	 */
	"featureSection.imageAltText": "Image of the featured project",
	"featureSection.imageSource": "Image: Kareen Kittelmann",
	"featureSection.title": "What is already happening in XHain?",
	"featureSection.description":
		"In Xhain, numerous projects are already being implemented to address these challenges. Here, we give you an insight into some of the existing projects.",
	"featureSection.cta": "Current projects",

	/**
	 * About Page
	 */
	"about.title": "About us",
	"about.firstSectionTitle": "Berlin climate neutral by 2045",
	"about.firstSectionDescription":
		"The Berlin Senate is pursuing the long-term goal of developing Berlin into a climate-neutral city by 2045 while simultaneously adapting to the unavoidable consequences of climate change.",
	"about.secondSectionTitle": "Xhain is leading the way",
	"about.secondSectionDescription":
		"In December 2024, the district office adopted the climate protection and climate adaptation concepts. Now, the task is to build on this foundation and effectively advance concrete projects.",
	"about.thirdSectionTitle": "Who? The Xhain climate team",
	"about.thirdSectionDescription":
		"The four-member climate team of the organizational unit 'Climate and International Affairs' consists of two climate protection managers, a climate adaptation manager, and the climate commissioner. Together, they support the implementation of climate-effective measures. At the same time, they act as intermediaries and connect different stakeholder groups in the district when it comes to climate protection and adaptation. After all, climate protection and adaptation can only succeed together!",
	"about.actionCardTitle": `Questions?<br/>Write to the Xhain climate team.`,
	"about.actionCardEmail": "klima_und_internationales@ba-fk.berlin.de",

	/**
	 * Imprint Page
	 */
	"imprint.title": "Imprint",
	"imprint.heading": "District Office Friedrichshain-Kreuzberg",
	"imprint.description": `Department of Finance, Personnel, Economy, Culture, Diversity, and Climate  
		Organizational Unit for Climate and International Affairs<br/><br/>
		Frankfurter Allee 35/37<br/>
		10247 Berlin<br/>
		Germany<br/><br/>
		Head of the Organizational Unit for Climate and International Affairs: Lennart Aldick`,

	/**
	 * Footer
	 */
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
	"footer.footerSenatskanzleiLogoAltText": "Logo of Berlin Senate Chancellery",

	"climateConcepts.title": "Climate Concepts",
	"climateConcepts.intro.p1":
		"The climate concepts of Friedrichshain-Kreuzberg serve as a central foundation for strategically advancing climate adaptation and climate protection in the district.",
	"climateConcepts.intro.p2":
		"They outline clear strategies and measures to become climate-neutral while ensuring the quality of life for residents. Here, we offer you the opportunity to download the concepts in full and read them in detail.",
	"climateConcepts.intro.p3":
		"While climate protection aims to reduce greenhouse gas emissions and thus limit the extent of climate change, climate adaptation focuses on adjusting to the current and expected impacts of climate change, such as increasing heat and heavy rainfall.",
	"climateConcepts.protectionConcept.h2": "Climate Protection Concept",
	"climateConcepts.protectionConcept.p":
		"The climate protection concept analyzes energy consumption and emissions in the district, defines climate protection goals and measures based on this analysis, and consists of a main document as well as four sub-concepts covering key action areas, developed with funding from the National Climate Protection Initiative.",
	"climateConcepts.protectionConcept.a.1.label":
		"Full Version of the Climate Protection Concept (German)",
	"climateConcepts.protectionConcept.a.2.label":
		"Sub-Concept: Mobility (German)",
	"climateConcepts.protectionConcept.a.3.label":
		"Sub-Concept: Energy and Buildings (German)",
	"climateConcepts.protectionConcept.a.4.label":
		"Sub-Concept: District as a Role Model (German)",
	"climateConcepts.protectionConcept.a.5.label":
		"Sub-Concept: Consumption and Society (German)",
	"climateConcepts.protectionConcept.a.6.label":
		"Summary of the Climate Protection Concept (German)",
	"climateConcepts.adaptionConcept.h2": "Climate Adaptation Concept",
	"climateConcepts.adaptionConcept.p":
		"The climate adaptation concept analyzes the impacts of climate change in the district, outlines goals and measures, and includes a main document as well as four sub-concepts covering key action areas. The climate adaptation concept was developed with funding from the BMUV.",
	"climateConcepts.adaptionConcept.a.1.label":
		"Full Version of the Climate Adaptation Concept (German)",
	"climateConcepts.adaptionConcept.a.2.label":
		"Sub-Concept: Buildings and Infrastructure (German)",
	"climateConcepts.adaptionConcept.a.3.label":
		"Sub-Concept: Urban Green Spaces and Biodiversity (German)",
	"climateConcepts.adaptionConcept.a.4.label":
		"Sub-Concept: Urban Planning and Development (German)",
	"climateConcepts.adaptionConcept.a.5.label": "Sub-Concept: Health (German)",
	"climateConcepts.adaptionConcept.a.6.label":
		"Summary of the Climate Adaptation Concept (German)",
	"climateConcepts.actionCard.title":
		"Would you like to learn more about the climate concepts?",
	"climateConcepts.actionCard.subtitle": "Visit the district’s website.",
	"climateConcepts.actionCard.link.label": "Go to the Climate Team's Website",
};
