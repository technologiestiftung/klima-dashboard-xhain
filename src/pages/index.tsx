import Card from "../components/card.tsx";
import WeatherCard from "../components/weather-card";
import { Link } from "react-router";
import { useI18nStore } from "../i18n/i18n-store";
import { LanguageToggle } from "../components/router/languageToggle";
import { data } from "../data";

const chartIds = Object.keys(data) as Array<keyof typeof data>;

export default function Index() {
	const i18n = useI18nStore((state) => state.i18n());

	return (
		<main>
			<LanguageToggle />
			<h1 className="text-2xl font-semibold p-5">{i18n["header.title"]}</h1>
			<br />

			<Link to="/current-projects/" className="text-blue-500 underline p-5">
				link aktuelle Projekte
			</Link>

			<WeatherCard></WeatherCard>

			<br />

			<div className="flex flex-wrap justify-center">
				{chartIds.map((id) => (
					<Card key={id.toString()} id={id} />
				))}
			</div>
		</main>
	);
}
