import Card from "../components/card.tsx";
import WeatherCard from "../components/weather-card";
import { useI18nStore } from "../i18n/i18n-store";
import Layout from "../layout/layout";
import { data } from "../data";
import { Carousel } from "../components/carousel/carousel";

const chartIds = Object.keys(data) as Array<keyof typeof data>;

export default function Index() {
	const i18n = useI18nStore((state) => state.i18n());

	return (
		<Layout>
			<h1 className="text-2xl font-semibold p-5">{i18n["header.title"]}</h1>
			<br />

			<WeatherCard />

			<br />

			<Carousel />

			<div className="flex flex-wrap justify-center">
				{chartIds.map((id) => (
					<Card key={id.toString()} id={id} />
				))}
			</div>
		</Layout>
	);
}
