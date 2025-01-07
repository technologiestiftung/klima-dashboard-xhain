import Card from "~/components/card";
import { i18n } from "~/i18n/i18n-utils";
import WeatherCard from "~/components/weather-card";
import { data } from "~/data";
import { Carousel } from "~/components/carousel/carousel";

export function meta() {
	return [
		{ title: "Klima Dashboard Xhain" },
		{ name: "description", content: "Klima dashboard beschreibung" },
	];
}

const chartIds = Object.keys(data) as Array<keyof typeof data>;

export default function Index() {
	return (
		<>
			<h1 className="text-2xl font-semibold p-5">{i18n("header.title")}</h1>
			<br />

			<WeatherCard />

			<br />

			<Carousel />

			<h1 className="text-5xl font-semibold p-5">{i18n("charts.title")}</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
				{chartIds.map((id) => (
					<Card key={id.toString()} id={id} />
				))}
			</div>
		</>
	);
}
