import { de } from "./de.ts";

export const en: typeof de = {
	"header.title": "Climate Dashboard Xhain",

	/**
	 * Hero Section
	 */
	"heroSection.eyebrowText": "KlimaDashboard",
	"heroSection.heading": "Climate change in Xhain",
	"heroSection.subheading":
		"Facts, figures and actions needed - towards a liveable Xhain",
	"heroSection.mediumTemperature.averageTempText": "Average annual temperature",
	"heroSection.mediumTemperature.locationText":
		"in Friedrichshain-Kreuzberg by time period",

	/**
	 * Weather Card
	 */
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
	"weatherCard.alert.alt": "Weather warning",

	/**
	 * Intro Section
	 */
	"introSection.overview":
		"The climate dashboard provides an insight into current climate data and climate measures in Friedrichshain-Kreuzberg.<br/><br/>",
	"introSection.keyQuestion1":
		"Where do greenhouse gas emissions occur in Xhain?",
	"introSection.keyQuestion2":
		"Where are we as a district on the road to climate neutrality in Berlin?",
	"introSection.keyQuestion3":
		"And where are the impacts of climate change already evident in the district?",
	"introSection.dataBasis": `
    The basis for this is the analyses from the <a href='https://klima-dashboard-xhain.vercel.app/en/climate-strategies/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>climate mitigation and climate adaptation strategies.</a>  
    These two strategies were developed by the <a href='https://klima-dashboard-xhain.vercel.app/en/about/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>climate team</a> and politically adopted in December 2024 as a planning and decision-making basis.</br></br>
`,
	"introSection.collaboration": `
	The climate dashboard has been developed in close cooperation between the Friedrichshain-Kreuzberg climate team and <a href='https://citylab-berlin.org/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>CityLAB Berlin</a>.</br></br>
`,
	"introSection.explanation":
		"While climate mitigation aims to reduce greenhouse gas emissions and thus limit the extent of climate change, climate adaptation focusses on adapting to the current and expected impacts of climate change, such as increasing heat and heavy rainfall.",
	"introSection.showLess": "show less",
	"introSection.showMore": "show more",
	"introSection.expandedAltText": "Collapse section",
	"introSection.collapseAltText": "Expand section",

	/**
	 * Header / Navigation
	 */
	"header.bezirksamtXhainAltText": "Go to homepage",
	"header.burgerMenuAltText": "Open menu",
	"header.closeButtonAltText": "Close menu",
	"header.nav.dashboard": "Dashboard",
	"header.nav.climateStrategies": "Climate strategies",
	"header.nav.currentProjects": "Current projects",
	"header.nav.about": "About",
	"header.cta": "Take action now",

	/**
	 * Carousel
	 */
	"carousel.title": "This is Xhain",
	"carousel.button.previous.alt":
		"Highlight previous card in the horizontally scrollable section above",
	"carousel.button.next.alt":
		"Highlight next card in the horizontally scrollable section above",

	"carousel.infoButton.alt": "Click to show the source of the information",

	"carousel.card1.intro": "",
	"carousel.card1.description": "people live in Friedrichshain-Kreuzberg",
	"carousel.card1.source": "Statistics Berlin-Brandenburg 2024",

	"carousel.card2.intro": "",
	"carousel.card2.description": "people live within one square kilometer",
	"carousel.card2.source": "Statistics Berlin-Brandenburg 2024",

	"carousel.card3.intro": "",
	"carousel.card3.description": "of the area is sealed",
	"carousel.card3.source": "Environmental Atlas 2021",

	"carousel.card4.intro": "The share of traffic area is",
	"carousel.card4.description": "",
	"carousel.card4.source": "Statistics Berlin-Brandenburg 2023",

	"carousel.card5.intro": "In 2023",
	"carousel.card5.description":
		"guests stayed in 85 tourist accomodations in Xhain.",
	"carousel.card5.source": "Berlin.de",
	"carousel.card5..millionUnit": "M.",

	"languageToggleButton.ariaLabelDeLink": "switch to German language",
	"languageToggleButton.ariaLabelEnLink": "switch to English language",

	/**
	 * chart labels
	 */
	"charts.title": "How does Xhain contribute to climate change?",
	"charts.p1":
		"Many greenhouse gas-related emissions are generated directly in our district—for example, through building heating, transportation, or the activities of local businesses. To mitigate climate change at the local level, it is necessary to both reduce energy consumption (efficiency and sufficiency) and transition energy supply to renewable sources (consistency).",
	"charts.p2.part1": "With the district's ",
	"charts.p2.part2.tooltip.label":
		"energy and greenhouse gas balance according to the BISKO standard",
	"charts.p2.part2.tooltip.alt":
		"Click to show more information about the energy and greenhouse gas balance according to the BISKO standard",
	"charts.p2.part2.tooltip.close":
		"Close the tooltip about the energy and greenhouse gas balance according to the BISKO standard",
	"charts.p2.part2.tooltip.content": `The <b>final energy-based territorial balance according to BISKO</b> records the final energy consumption that occurs directly within the boundaries of the district. This means measuring how much energy households use for heating their homes or using electronic devices. These data come, for example, from energy meters found in every house and show how much energy is needed on-site.`,
	"charts.p2.part3":
		"we illustrate how energy is used, how many emissions are produced in the process, and where significant levers for achieving climate neutrality by 2045 lie.",
	"charts.ariaLabel": "Visualization of",

	"chart.thgTotalTons.title": "Evolution of greenhouse gas emissions",
	"chart.thgTotalTons.subtitle": "in tons of CO₂ equivalent",
	"chart.thgTotalTons.keys.year": "Year",
	"chart.thgTotalTons.keys.heating_tons": "Heating",
	"chart.thgTotalTons.keys.electricity_tons": "Electricity",
	"chart.thgTotalTons.keys.fuels_tons": "Fuels",
	"chart.thgTotalTons.infoDialog.learnMoreLink":
		"/climate-strategies/#climate-concept-full",
	"chart.thgTotalTons.infoDialog.description": `The emissions resulting from energy consumption are calculated using so-called emissions factors. An emissions factor indicates how many greenhouse gases are released when a specific energy source—such as gas, electricity, or oil—is produced, transported, and used. This allows us to assess how harmful the consumption of a particular energy source is to the climate.
<br/>
The lower the emissions factor, the more climate-friendly the energy source is. For example, electricity from wind power has a very low emissions factor, while electricity from coal power plants has a high factor. This is why it is so important that we make energy generation climate-neutral and switch to energy sources with low emissions factors. At the same time, it remains crucial to reduce overall energy consumption in order to lower total emissions.
`,

	"chart.thgSector2021Tons.title": "Greenhouse gas emissions",
	"chart.thgSector2021Tons.subtitle": "by sector in tons of GHGs",
	"chart.thgSector2021Tons.legend.privateHouseholds": "private households",
	"chart.thgSector2021Tons.legend.districtBuildings": "district buildings",
	"chart.thgSector2021Tons.legend.economy": "economy",
	"chart.thgSector2021Tons.legend.traffic": "traffic",
	"chart.thgSector2021Tons.infoDialog.learnMoreLink":
		"/climate-strategies/#climate-concept-full",
	"chart.thgSector2021Tons.infoDialog.description": `Although households account for a significantly larger share of energy consumption (see final energy consumption by sector), the economy generates slightly more emissions (43%) than private households (42%). 
	<br/>
	This is due to the different emissions factors of energy sources for electricity and heat. While a large portion of energy consumption in households is used for heating, electricity consumption is more dominant in the economic sector. Electricity has a higher emissions factor due to the current composition of the German electricity mix, as electricity generation in Germany is still largely based on fossil fuels, particularly coal. However, based on current trends and federal goals, a continuous improvement is expected by 2045. As a district, we can make an important contribution through the local expansion of photovoltaics (PV).
	<br/>
	Transportation accounts for 14% of emissions. Additionally, despite their small share in emissions, district buildings are of particular relevance as their emissions are directly influenced by the district administration.`,

	"chart.consumptionEmissionsTons.title":
		"Consumption-related indirect emissions",
	"chart.consumptionEmissionsTons.subtitle": "in 2024",
	"chart.consumptionEmissionsTons.description":
		"In 2024, Ø 4.1 tons of CO₂ equivalent per year and person were caused by food and consumption. Even if emissions are largely generated outside the district boundaries, they are climate-relevant and can be reduced locally through the behavior of producers and consumers.",
	"chart.consumptionEmissionsTons.keys.xhain": "Xhain",
	"chart.consumptionEmissionsTons.keys.per_person": "Per person",
	"chart.consumptionEmissionsTons.descriptionText.per_person":
		"To offset this amount, many trees must grow for a year",
	"chart.consumptionEmissionsTons.descriptionText.xhain":
		"To offset the annual consumption emissions of Xhain, a forest area would be needed that is 6.5 times larger than the current forest area of all of Berlin.",
	"chart.consumptionEmissionsTons.millionUnit": "M.",
	"chart.consumptionEmissionsTons.co2Unit": "Tons CO₂",
	"chart.consumptionEmissionsTons.trees": "Trees",
	"chart.consumptionEmissionsTons.infoDialog.sourceTitle": "Excerpt from",
	"chart.consumptionEmissionsTons.infoDialog.sourceLabel": `<a
				href="https://www.umweltbundesamt.de/themen/wirtschaft-konsum/konsum-umwelt-zentrale-handlungsfelder#bedarfsfelder"
				target="_blank"
				rel="noopener noreferrer"
			>
				Umweltbundesamt
			</a>
			`,
	"chart.consumptionEmissionsTons.infoDialog.learnMoreLink":
		"/climate-strategies/#consumption-society",
	"chart.consumptionEmissionsTons.infoDialog.description": `ndirect emissions arise from the consumption of goods and services whose production and transportation takes place outside the district boundaries. These include, for example

	<ul>
		<li> Production and transportation of food</li>
		<li> Production of furniture, household appliances or clothing</li>
		<li> Production of electronic devices</li>
		<li> Services such as online shopping</li>
	</ul>

Resource- efficient and local provision as well as the sustainable consumption of goods help to reduce emissions - for example through reusable packaging, second-hand offers and the repair of goods.`,

	"chart.eevTotalMwh.title": "Development of final energy consumption",
	"chart.eevTotalMwh.subtitle": "in MWh",
	"chart.eevTotalMwh.legend.heating": "Heating",
	"chart.eevTotalMwh.legend.electricity": "Electricity",
	"chart.eevTotalMwh.legend.fuels": "Fuels",
	"chart.eevTotalMwh.infoDialog.learnMoreLink":
		"/climate-strategies/#climate-concept-full",
	"chart.eevTotalMwh.infoDialog.description": `The major part of energy consumption is caused by heating, i.e. in particular the heating of buildings and the preparation of hot water. This currently accounts for 56.9% of the district's energy consumption. 32.3 % is accounted for by electricity consumption, e.g. for lighting or technical appliances. The smallest, but still relevant consumption is caused by fuels (10.8 %).
<br/>
These figures make it clear: the heating sector is where action is needed most. It holds the greatest potential for saving energy. By using energy wisely, we can save costs while simultaneously creating a sustainable and livable Xhain for everyone.`,

	"chart.eevSector2021Mwh.title": "Final energy consumption",
	"chart.eevSector2021Mwh.subtitle": "by sectors",
	"chart.eevSector2021Mwh.keys.sector": "Sector",
	"chart.eevSector2021Mwh.keys.total_mwh": "Sum in Megawatt Hours",
	"chart.eevSector2021Mwh.keys.percentage": "Percentage",
	"chart.eevSector2021Mwh.infoDialog.learnMoreLink":
		"/climate-strategies/#climate-concept-full",
	"chart.eevSector2021Mwh.infoDialog.description": `Private households are the largest energy consumers in our densely populated district, accounting for 50.4% of total energy use. This is partly due to the high number of households and factors such as heat loss from old, unrenovated buildings. 
<br/>
The second-largest share, 36.1%, comes from businesses, including restaurants, hotels, offices, small manufacturing, crafts, the district’s distinctive culture and creative industries, and more. Transportation accounts for 11.6% of energy consumption, while municipal buildings have the smallest share at 1.9%.
This highlights the importance of involving all stakeholders—residents, businesses, and public institutions—in the energy transition.`,

	"chart.heatingMix2021Summarized.title": "Heatmix",
	"chart.heatingMix2021Summarized.subtitle": "by energy source in %",
	"chart.heatingMix2021Summarized.description":
		"In addition to heating-related energy consumption, the energy sources used, as shown in the heat mix, play a key role in determining our climate balance.",
	"chart.heatingMix2021Summarized.gas": "Natural gas",
	"chart.heatingMix2021Summarized.districtHeating": "District heating",
	"chart.heatingMix2021Summarized.fossil": "Other fossil",
	"chart.heatingMix2021Summarized.renewable": "Renewable energies",
	"chart.heatingMix2021Summarized.infoDialog.learnMoreLink":
		"/climate-strategies/#energy-buildings",
	"chart.heatingMix2021Summarized.infoDialog.description": `The heat mix of Xhain shows that, at present, heat supply is primarily provided by natural gas and district heating. Therefore, in addition to reducing heat consumption, decarbonizing the heat supply—i.e., transitioning to a climate-friendly heating system—is an important lever for reducing heating-related emissions.
<br/>
This means that the natural gas-based supply must be replaced with renewable energy sources, such as solar thermal or ambient heat, and district heating must be made climate-neutral.`,

	"chart.modalSplit2018.title": "Modal Split",
	"chart.modalSplit2018.subtitle": "by sector in %",
	"chart.modalSplit2018.description":
		"The modal split describes the distribution of the transportation demand across the different means of transportation.",
	"chart.modalSplit2018.legend.miv": "Motorized individual transport",
	"chart.modalSplit2018.legend.oepnv": "Public Transport",
	"chart.modalSplit2018.legend.foot": "Foot",
	"chart.modalSplit2018.legend.bike": "Bike",
	"chart.modalSplit2018.toggle.description":
		"Comparison with Berlin's Modalsplit",
	"chart.modalSplit2018.infoDialog.learnMoreLink":
		"/climate-strategies/#mobility",
	"chart.modalSplit2018.infoDialog.description": `The so-called “ Umweltverbund”, i.e. the combination of public transport, cycling and walking, already accounts for a high proportion in Berlin. The figures show that we as a district are leading by example, with 86.5% of journeys already being made by environmentally friendly means of transport. Nevertheless, the transport sector continues to have a significant impact on our climate. Despite the low proportion of 13.5 % accounted for by MIT, transport causes emissions of 153,000 tons of CO₂ equivalents per year and thus accounts for around 13.6 % of the district's total emissions in 2021.
<br/>
Further efforts to reduce traffic emissions are important not only for climate protection, but also for air and noise pollution in our neighborhoods.`,

	"chart.traffic2022Summarized.title": "Transport related emissions",
	"chart.traffic2022Summarized.subtitle": "by sector in %",
	"chart.traffic2022Summarized.infoDialog.learnMoreLink":
		"/climate-strategies/#mobility",
	"chart.traffic2022Summarized.infoDialog.description": `All journeys that start or end in Xhain or for which both the start and destination are in the district have been taken into account in the carbon balance. This includes public transport and a small proportion of inland waterway transport. Air travel by residents or tourists, for example, is not included, as the airport is located outside the district boundary.
<br/>
Accordingly, the aim is to reduce and electrify motorized private transport and increase the use of eco-mobility.`,

	"chart.restBudgetThgUntilYear.title": "Remaining local carbon budget",
	"chart.restBudgetThgUntilYear.subtitle":
		"according to the 1,75-degree target",
	"chart.restBudgetThgUntilYear.unit": "M. tons",
	"chart.restBudgetThgUntilYear.remainingBudget": "Remaining budget until",
	"chart.restBudgetThgUntilYear.text": `Xhain's remaining CO₂ budget is only 12.2 million tons in total to keep global warming below 1.75°C.
<br/>
If Xhain continues as before, this local budget will be used up by 2032—meaning the bucket would overflow, leading to dramatically increased risks for people, ecosystems, and infrastructure.
<br/>
This target sets the limit beyond which these risks grow significantly.
<br/>
To prevent this, we need to act more ambitiously and much faster—starting now.`,
	"chart.restBudgetThgUntilYear.infoDialog.learnMoreLink":
		"/climate-strategies/#climate-concept-summary",
	"chart.restBudgetThgUntilYear.infoDialog.description": `The Paris Agreement provides the international framework to limit global warming to well below 2°C, ideally 1.5°C. At the national level, these goals are supported by the Berlin Energy Transition Act (EWG Bln), which aims for climate neutrality by 2045.
<br/>
Xhain's climate protection strategy follows the 1.75°C target as an ambitious yet realistic guideline, since forecasts and emission trends show that achieving the 1.5°C target is becoming increasingly difficult.
<br/>
To implement the Paris goals locally, Xhain uses the "remaining budget" approach. This highlights that not only the annual CO₂ emissions matter, but also the total amount of greenhouse gases released into the atmosphere over time.`,

	"chart.reductionPathScenario175Thg.title": "Climate protection scenario",
	"chart.reductionPathScenario175Thg.subtitle":
		"(1.75 degrees, 67 % probability) in tonnes of GHG",
	"chart.reductionPathScenario175Thg.legend.model":
		"Climate protection scenario Xhain",
	"chart.reductionPathScenario175Thg.legend.goal": "Climate targets for Berlin",
	"chart.reductionPathScenario175Thg.description":
		"The climate protection scenario shows how Xhain can become climate neutral by 2045 without exceeding the local carbon budget. To make this happen, we need to move forward together with innovation and ambition.",
	"chart.reductionPathScenario175Thg.infoDialog.learnMoreLink":
		"/climate-strategies/#climate-concept-full",
	"chart.reductionPathScenario175Thg.infoDialog.description": `In recent years, we have fallen short when it comes to Berlin's climate protection targets. In order to return to the target path by 2030, we need to reduce emissions more significantly and act more decisively.
<br/>
The chart illustrates how important it is to enter the phase of strong reduction as quickly as possible in order to achieve climate neutrality by 2045 at the latest, because the earlier possible emission reductions are implemented, the less the remaining budget is burdened and the more time there is to implement the necessary changes. Accordingly, the climate protection scenario shows a continuous and realistic reduction path.`,

	"chart.hotDays.title": "Hot days",
	"chart.hotDays.subtitle": "per year",
	"chart.hotDays.description":
		"A ‘hot day’ is any day with a maximum temperature of 30 °C or higher.",
	"chart.hotDays.keys.current": "Today",
	"chart.hotDays.keys.1950": "1950s",
	"chart.hotDays.keys.2100": "Future",
	"chart.hotDays.keys.time": "Time",
	"chart.hotDays.keys.days": "Hot days",
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
		"/climate-strategies/#climate-adaptation-full",
	"chart.hotDays.infoDialog.description": `In the 1950s, there was an average of 5.5 hot days per year in Friedrichshain-Kreuzberg. By the 2010s, the number had tripled - it is now 16.5 days per year.
	<br/>
Projections for the future are more difficult to determine and depend on climate mitigation measures. If greenhouse gas emissions continue to rise steadily (RCP 8.5 scenario), the number of hot days is expected to increase to around 28 days by the end of the century. If we assume that greenhouse gas emissions fall from the middle of the century (RCP 4.5 scenario), the number of hot days could be limited to around 21 days per year.`,

	"chart.mediumTemperature.title": "Average annual temperature",
	"chart.mediumTemperature.subtitle": "in Friedrichshain-Kreuzberg by phases",
	"chart.mediumTemperature.description":
		"The mean annual temperature refers to the average temperature over a period of 10 years.",
	"chart.mediumTemperature.current": "Today",
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
		"/climate-strategies/#climate-adaptation-full",
	"chart.mediumTemperature.infoDialog.description": `The average temperature values over 10 years help to recognise long-term temperature changes. They are more comparable than individual years, as they compensate for particularly warm or cold years. In the period from 2011-2020, the average annual temperature was 10.9 °C. This is 1.7 °C higher than in the 1950s.
Projections for the future are more difficult to determine and depend on climate mitigation measures. 
<br/>
If greenhouse gas emissions continue to rise steadily (RCP 8.5 scenario), the average annual temperature is expected to rise to around 13.2 °C by the end of the century. If we assume that greenhouse gas emissions fall from the middle of the century (RCP 4.5 scenario), the average annual temperature could be limited to 12 °C.
`,

	"chart.precipitationMm.title": "Rainfall",
	"chart.precipitationMm.subtitle": "in milliliters",
	"chart.precipitationMm.description":
		"So far, there is no clear trend for precipitation in Xhain. The graph shows, as an example, the summer precipitation in the district.",
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
		"/climate-strategies/#climate-adaptation-full",
	"chart.precipitationMm.infoDialog.description": `So far, no clear trend can be identified for annual and seasonal precipitation in Xhain. There are very strong fluctuations between years, particularly in terms of precipitation in summer. In the summer of 2018, for example, there was only a quarter of the precipitation (100mm) compared to the previous year (400mm). The projections for the future are also very uncertain in some cases, although an increase in precipitation is expected over the year as a whole.
With regard to the number of heavy rainfall days, there is no clear trend so far, but the intensity of heavy rainfall events has increased over the last 30 years. 
<br/>
For example, heavy rainfall events in June 2017 and July 2018 caused severe flooding. If it has been dry for a long time beforehand, the soil can also absorb the rain poorly. Both the frequency and intensity of heavy rainfall events are expected to increase in the future.`,

	"chart.HBI.title": "Heat impact index",
	"chart.HBI.subtitle":
		"Combination of surface temperature, environmental and human sensitivity",
	"chart.HBI.description":
		"The changing climate has an impact on the environment and the people in Friedrichshain-Kreuzberg. The 'Hitzebetroffenheitsindex' (HBI) (engl: heat impact index) shows which areas in the district are particularly affected by heat. The HBI takes into account not only the temperature, but also socio-demographic and environmental factors in the areas.",
	"chart.HBI.infoDialog.sourceTitle": "Source:",
	"chart.HBI.infoDialog.sourceLabel": `
	<a
		href="https://www.geodaten-fk.de/MeinXhain/Portal/?Map/layerIds=bezirksgrenze-wfs,umriss_fk,farbe,hitze-wms&visibility=true,true,true,true&transparency=0,0,0,10&Map/center=[393200,5818500]&Map/zoomLevel=3"
		target="_blank"
		rel="noopener noreferrer"	
	>
		Geoportal MeinXhain</a>,
	Climate Adaptation Strategy Friedrichshain-Kreuzberg (only available in German)`,
	"chart.HBI.infoDialog.learnMoreLink":
		"/climate-strategies/#climate-adaptation-full",
	"chart.HBI.infoDialog.description": `Indicators of the heat impact index (HBI):`,

	"chart.HBI.infoDialog.factors.title": "Heat impact index",

	"chart.HBI.infoDialog.factors.exposition": "Exposition",
	"chart.HBI.infoDialog.factors.exposition.temperature": "Surface temperature",
	"chart.HBI.infoDialog.factors.humanSensitivity": "Human Sensitivity",
	"chart.HBI.infoDialog.factors.humanSensitivity.denisty": "Population density",
	"chart.HBI.infoDialog.factors.humanSensitivity.inhabitansYoung":
		"Density of inhabitants < 10 years",
	"chart.HBI.infoDialog.factors.humanSensitivity.inhabitansOld":
		"Density of inhabitants > 65 years",
	"chart.HBI.infoDialog.factors.humanSensitivity.workers": "Workers",
	"chart.HBI.infoDialog.factors.humanSensitivity.socialIndex":
		"Social and economic disadvantage",
	"chart.HBI.infoDialog.factors.envSensitivity": "Environmental Sensitivity",
	"chart.HBI.infoDialog.factors.envSensitivity.greenvolume": "Green volume",
	"chart.HBI.infoDialog.factors.envSensitivity.sealing":
		"Sealing of soil surface",

	"chart.HBI.legend.title": "Heat impact related to the district average",
	"chart.HBI.legend.verylow": "very low",
	"chart.HBI.legend.low": "low",
	"chart.HBI.legend.medium": "middle",
	"chart.HBI.legend.high": "high",
	"chart.HBI.legend.veryhigh": "very high",

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
	"chart.infoDialog.learnMoreLabel": "Learn more in the climate strategies",

	"button.moreInfo": "more info",
	"button.lessInfo": "less info",

	"howToReachGoals.title":
		"How can Xhain achieve its climate protection goals in the future?",
	"howToReachGoals.description":
		"A glimpse into the future: what will happen if we carry on like this and what needs to change in order to achieve the climate protection targets?",

	"consequences.title": "How does climate change affect Xhain?",
	"consequences.description":
		"When analyzing climate impacts in Xhain, a distinction is made between climate trends and the extent to which people are affected. Climate trends describe how the climate has changed so far and what future changes are to be expected. The impact of these climate developments, i.e. the degree to which they are affected, depends on socio-demographic and environmental factors. These include, for example, population density, the proportion of vulnerable groups or the degree of sealing.",
	"consequences.subheading": "How is the climate changing?",
	"consequences.hbi.heading": "What are climate impacts in Xhain?",

	/**
	 * Current Projects page
	 */
	"currentProjects.title": "Current projects",
	"currentProjects.subtitle": "in Friedrichshain-Kreuzberg",
	"currentProjects.featureImageSource": "Image: Kareen Kittelmann",
	"currentProjects.featureImageAltText":
		"A person walking with a bicycle on a partially closed street, surrounded by construction barriers and greenery.",
	"currentProjects.projectCardCtaLabel": "To project",
	"currentProjects.greenCardTitle":
		"Advancing climate-effective projects together",
	"currentProjects.greenCardDescription":
		"There are already many exciting projects and organisations on the ground. Would you like to make a positive contribution yourself? Then you can find projects and initiatives to get involved in here!",
	"currentProjects.greenCardCtaLabel": "Find suitable projects",
	"currentProjects.greenCardCtaLink":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/artikel.1527799.php",
	/**
	 * projects
	 */
	"currentProjects.project1.title": "Unsealing",
	"currentProjects.project1.description":
		"The many developed and asphalted areas in Xhain do not allow rainwater to seep through. However, some of these areas can be unsealed and made water-permeable. A map shows which areas in public spaces have been unsealed and planted in recent years.",
	"currentProjects.project1.imageAltText": "Meadow with flowers",
	"currentProjects.project1.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/artikel.1429649.php",
	"currentProjects.project1.imageSource": "Image: BAFK",

	"currentProjects.project2.title": "Yard greening programme",
	"currentProjects.project2.description":
		"Unsealing and greening inner courtyards can improve the microclimate and quality of living as well as promote the diversity of animals and plants. Tenants can receive up to 3,000 euros in funding for this. More than 100 people sought advice by phone or on site from March to October 2024.",
	"currentProjects.project2.imageAltText": "Green yard",
	"currentProjects.project2.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/umwelt-und-naturschutzamt/umweltbildung/artikel.1043011.php#headline_1_5",
	"currentProjects.project2.imageSource": "Image: Grüne Liga Berlin",

	"currentProjects.project3.title": "Parking space management",
	"currentProjects.project3.description":
		"The goal of parking space management in Xhain is to use street space in more efficient, enable balanced usage, and improve the quality of life in local neighborhoods. The district aims to expand the current 13 parking management zones to cover the entire district.",
	"currentProjects.project3.imageAltText":
		"Parking zone sign indicating Zone 37 regulations, with allowed hours.",
	"currentProjects.project3.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/strassen-und-gruenflaechenamt/strassen/mobilitaetswende/artikel.1282985.php",
	"currentProjects.project3.imageSource": "Image: ",

	"currentProjects.project4.title": "Bicycle traffic",
	"currentProjects.project4.description":
		"Many people in Xhain already use bicycles to get from A to B. To support this trend, Xhain continues to expand its cycling infrastructure.",
	"currentProjects.project4.imageAltText":
		"Person riding a cargo bike on a red bike lane",
	"currentProjects.project4.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/strassen-und-gruenflaechenamt/strassen/artikel.1496371.php",
	"currentProjects.project4.imageSource": "Image: Kareen Kittelmann",

	"currentProjects.project5.title": "PV-expansion on our own buildings",
	"currentProjects.project5.description":
		"To fully equip the district's own buildings with photovoltaic systems, the district office is collaborating with Berliner Stadtwerke. As part of this partnership, installations with a capacity of approximately 850 kWp have been commissioned by the end of 2024. Additional systems are currently in planning and implementation stages.",
	"currentProjects.project5.imageAltText": "Close-up of a solar panel",
	"currentProjects.project5.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/aktuelles/pressemitteilungen/2025/pressemitteilung.1523939.php",
	"currentProjects.project5.imageSource": "Image: pexels",

	"currentProjects.project6.title": "Smart heating",
	"currentProjects.project6.description":
		"By installing the smart heating control system ovoTherm in the district buildings, the output of the respective heating system is adapted precisely to the actual demand. This reduces a building's heating energy consumption by around 20% and therefore also CO₂ emissions and energy costs.",
	"currentProjects.project6.imageAltText":
		"A network of insulated pipes and valves with gauges and controls.",
	"currentProjects.project6.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/artikel.1529241.php",
	"currentProjects.project6.imageSource": "Image: valovo GmbH",

	"currentProjects.project7.title": "Multi-use",
	"currentProjects.project7.description":
		"The vibrant life in Xhain brings challenges with it, as avoidable waste is still being produced that harms the environment and climate. However, we are already actively working towards becoming a zero-waste city. Reusable initiatives in catering, at weekly markets and at major events show that alternatives are possible.",
	"currentProjects.project7.imageAltText":
		"Two cups with the inscriptions 'fair. kiez' and 'BOXI'",
	"currentProjects.project7.link":
		"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/beauftragte/entwicklungspolitik-und-nachhaltigkeit/zero-waste/artikel.1221491.php",
	"currentProjects.project7.imageSource": "Image: Daniel Triebke | Markburg",
	/**
	 * Feature Section
	 */
	"featureSection.imageAltText": "Image of the featured project",
	"featureSection.imageSource": "Image: Kareen Kittelmann",
	"featureSection.title": "What is already happening in Xhain?",
	"featureSection.description":
		"Numerous projects are already being implemented in Xhain to meet these challenges. Here we give you an insight into some of the existing projects.",
	"featureSection.cta": "Current projects",

	/**
	 * About Page
	 */
	"about.title": "About",
	"about.firstSectionTitle": "About the climate dashboard",
	"about.firstSectionDescription": `
	The Berlin Senate is pursuing an ambitious <a href='https://www.berlin.de/sen/uvk/klimaschutz/klimaschutzpolitik-in-berlin/ziele-und-grundlagen/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>climate protection policy</a>: Berlin is to become climate-neutral and adapted to the effects of climate change by 2045. Some districts have therefore begun to develop concrete concepts for climate protection and adaptation. This includes the district of Friedrichshain-Kreuzberg (Xhain).   

	The Climate Dashboard provides an overview of the results of the resulting concepts. It makes current climate and emissions data visible and shows where there is a need for action and where concrete climate-related activities are already being undertaken.  

	The ClimateDashboard was developed in close cooperation between the district's climate team and <a href='https://citylab-berlin.org/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>CityLAB Berlin</a>.
	`,
	"about.secondSectionTitle": "About us",
	"about.secondSectionSubtitle.part1": "The CityLAB Berlin",
	"about.secondSectionDescription.part1": `
	The <a href='https://citylab-berlin.org/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>CityLAB</a> is Berlin’s public innovation laboratory. At the interface between administration, academia, business and civil society, we tap into the potential of digitalization to promote urban development geared towards the common good – hands-on and impact-oriented. 

The CityLAB is run by <a href='https://www.technologiestiftung-berlin.de/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>Technologiestiftung Berlin</a> and funded by the  und gefördert durch die <a href='https://www.berlin.de/rbmskzl/' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>Berlin Senate Chancellery</a>.`,
	"about.secondSectionSubtitle.part2": "The Xhain climate team",
	"about.secondSectionDescription.part2": `The climate team of the unit "<a href='https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/artikel.1408194.php' target='_blank' rel='noopener noreferrer' class='text-xhain-blue-50 underline underline-offset-4 hover:text-xhain-blue-60'>Climate and International Affairs</a>" supports the implementation of climate-effective measures. At the same time, they facilitate communication and networking between various stakeholder groups in the district on matters related to climate efforts.`,
	"about.actionCardTitle": `Questions?<br/>Write to the Xhain climate team.`,
	"about.actionCardEmail": "E-Mail the climate team",

	/**
	 * Footer
	 */
	"footer.cardHeading":
		"Do you have any questions about the climate dashboard and the climate strategy?",
	"footer.cardSubHeading": "Write us!",
	"footer.cardCtaButtonText": "E-Mail the climate team",
	"footer.cardCtaEmail": "klima_und_internationales@ba-fk.berlin.de",
	"footer.bezirksamtXhainAltText": "bezirksamt xhain logo",
	"footer.imprint": "Imprint",
	"footer.privacy": "Data privacy",
	"footer.accessibility": "Accessibility statement",
	"footer.feedback": "Feedback",
	"footer.feedbackLink":
		"https://citylabberlin.typeform.com/to/wkhvLJyN#product_id=klimadashboardxhain",
	"footer.projectOwnerLabel": "A project of",
	"footer.projectExecutionerLabel": "Implemented by",
	"footer.cityLABLogoAltText": "Logo of the CityLAB Berlin",
	"footer.tSBLogoAltText": "Logo of the Technology Foundation Berlin",
	"footer.footerSenatskanzleiLogoAltText": "Logo of Berlin Senate Chancellery",

	/**
	 * climate strategies page
	 */
	"climateStrategies.title": "Climate strategies",
	"climateStrategies.intro.p1":
		"The climate strategie sof Friedrichshain-Kreuzberg are the central basis to strategically advance climate mitigation and climate adaptation in the district.",
	"climateStrategies.intro.p2":
		"They show clear strategies and measures to become climate-neutral and at the same time ensure people's quality of life. We offer you the opportunity to download the strategies in full and read them in detail. Unfortunately, they are only available in German.",
	"climateStrategies.intro.p3":
		"While climate mitigation aims to reduce greenhouse gas emissions and thus limit the extent of climate change, climate adaptation focuses on adjusting to the current and expected impacts of climate change, such as increasing heat and heavy rainfall.",
	"climateStrategies.protectionConcept.h2": "Climate mitigation strategy",
	"climateStrategies.protectionConcept.p":
		"The climate mitigation strategy analyses energy consumption and emissions in the district, defines climate mitigation targets and measures based on this, and consists of a main document and four sub-strategies on key fields of action. The climate mitigation strategy was funded by the Federal Ministry for Economic Affairs and Climate Action as part of the National Climate Initiative (NKI).",
	"climateStrategies.protectionConcept.a.1.label":
		"Langfassung Klimaschutzkonzept (German)",
	"climateStrategies.protectionConcept.a.2.label":
		"Teilkonzept Mobilität (German)",
	"climateStrategies.protectionConcept.a.3.label":
		"Teilkonzept Energie und Gebäude (German)",
	"climateStrategies.protectionConcept.a.4.label":
		"Teilkonzept Bezirk als Vorbild (German)",
	"climateStrategies.protectionConcept.a.5.label":
		"Teilkonzept Konsum und Gesellschaft (German)",
	"climateStrategies.protectionConcept.a.6.label":
		"Kurzfassung Klimaschutzkonzept (German)",
	"climateStrategies.adaptionConcept.h2": "Climate adaptation strategy",
	"climateStrategies.adaptionConcept.p":
		"The climate adaptation strategy analyses the consequences of climate change in the district and presents objectives and measures. It comprises a main document and four sub-strategies on key fields of action. The climate adaptation strategy has been funded by the Federal Ministry for the Environment, Nature Conservation, Nuclear Safety and Consumer Protection.",
	"climateStrategies.adaptionConcept.a.1.label":
		"Langfassung Klimaanpassungskonzept (German)",
	"climateStrategies.adaptionConcept.a.2.label":
		"Teilkonzept Gebäude und Infrastruktur (German)",
	"climateStrategies.adaptionConcept.a.3.label":
		"Teilkonzept Stadtgrün und Biodiversität (German)",
	"climateStrategies.adaptionConcept.a.4.label":
		"Teilkonzept Stadtplanung- und entwicklung (German)",
	"climateStrategies.adaptionConcept.a.5.label":
		"Teilkonzept Gesundheit (German)",
	"climateStrategies.adaptionConcept.a.6.label":
		"Kurzfassung Klimaanpassungskonzept (German)",
	"climateStrategies.actionCard.title":
		"Would you like to learn more about the climate strategies?",
	"climateStrategies.actionCard.subtitle": "Visit the district’s website.",
	"climateStrategies.actionCard.link.label": "Go to the climate team's website",
	"climateStrategies.download.alt": "Download PDF",

	"icon.alt": "Icon",
};
