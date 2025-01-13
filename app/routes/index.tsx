import Card from "~/components/card";
import { i18n } from "~/i18n/i18n-utils";
import WeatherCard from "~/components/weather-card";
import { data } from "~/data";
import { Carousel } from "~/components/carousel/carousel";
import { brightSkyApiEndpoint } from "~/hooks/use-current-weather";

export const meta = () => {
	return [
		{ title: "Klima Dashboard Xhain" },
		{ name: "description", content: "Klima dashboard beschreibung" },
	];
};

export const links = () => [{ rel: "preconnect", href: brightSkyApiEndpoint }];

const chartIds = Object.keys(data) as Array<keyof typeof data>;

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
					{chartIds.map((id) => (
						<Card key={id.toString()} id={id} />
					))}
				</div>
			</section>

			<section>
				<h2 className="text-5xl font-semibold p-5">
					{i18n("howToReachGoals.title")}
				</h2>
			</section>

			<section>
				<h2 className="text-5xl font-semibold p-5">
					{i18n("consequences.title")}
				</h2>
			</section>

			<section>
				<h2 className="text-5xl font-semibold p-5">
					{i18n("currentProjects.title")}
				</h2>
			</section>
		</>
	);
}
