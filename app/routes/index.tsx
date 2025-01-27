import Card from "~/components/card";
import { i18n } from "~/i18n/i18n-utils";
import WeatherCard from "~/components/weather-card";
import {
	howXhainContributesData,
	howToReachGoalsData,
	consequencesData,
} from "~/data";
import { Carousel } from "~/components/carousel/carousel";
import { BRIGHTSKY_WEATHER_API_ENDPOINT } from "~/hooks/use-current-weather";

export const meta = () => {
	return [
		{ title: "Klima Dashboard Xhain" },
		{ name: "description", content: "Klima dashboard beschreibung" },
	];
};

export const links = () => [
	{ rel: "preconnect", href: BRIGHTSKY_WEATHER_API_ENDPOINT },
];

const howXhainContributes = Object.keys(howXhainContributesData) as Array<
	keyof typeof howXhainContributesData
>;
const howToReachGoals = Object.keys(howToReachGoalsData) as Array<
	keyof typeof howToReachGoalsData
>;
const consequences = Object.keys(consequencesData) as Array<
	keyof typeof consequencesData
>;

export default function Index() {
	return (
		<>
			<section>
				<h1 className="text-2xl font-semibold p-5">{i18n("header.title")}</h1>
				<br />
				<WeatherCard />
				<br />
				<Carousel />
			</section>

			<section>
				<h2 className="text-5xl font-semibold p-5">{i18n("charts.title")}</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
					{howXhainContributes.map((id) => (
						<Card key={id.toString()} id={id} />
					))}
				</div>
			</section>

			<section>
				<h2 className="text-5xl font-semibold p-5">
					{i18n("howToReachGoals.title")}
				</h2>
				<div>
					{howToReachGoals.map((id) => (
						<h3 key={id.toString()}>{id}</h3>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-5xl font-semibold p-5">
					{i18n("consequences.title")}
				</h2>
				<div>
					{consequences.map((id) => (
						<h3 key={id.toString()}>{id}</h3>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-5xl font-semibold p-5">
					{i18n("currentProjects.title")}
				</h2>
			</section>
		</>
	);
}
