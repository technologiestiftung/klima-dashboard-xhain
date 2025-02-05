import Card from "~/components/card";
import { i18n } from "~/i18n/i18n-utils";
import { HeroSection } from "~/components/hero-section/hero-section";
import WeatherCard from "~/components/weather-card";
import {
	howXhainContributesData,
	howToReachGoalsData,
	consequencesData,
} from "~/data";
import { Carousel } from "~/components/carousel/carousel";
import { BRIGHTSKY_WEATHER_API_ENDPOINT } from "~/hooks/use-current-weather";
import { BRIGHTSKY_ALERT_API_ENDPOINT } from "~/hooks/use-current-weather-alert";
import { FeatureSection } from "~/components/feature-section/feature-section";
import { IntroSection } from "~/components/intro-section/intro-section";

export const meta = () => {
	return [
		{ title: "Klima Dashboard Xhain" },
		{ name: "description", content: "Klima dashboard beschreibung" },
	];
};

export const links = () => [
	{ rel: "preconnect", href: BRIGHTSKY_WEATHER_API_ENDPOINT },
	{ rel: "preconnect", href: BRIGHTSKY_ALERT_API_ENDPOINT },
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
				<HeroSection />
				<WeatherCard />
				<IntroSection />
			</section>

			<section className="flex flex-col bg-xhain-blue-50 text-white py-8 md:py-20 gap-5 md:gap-10">
				<div className="w-full px-20 py-5 flex justify-center">
					<h2 className="max-w-8xl w-full leading-8 md:text-5xl font-bold md:leading-none">
						{i18n("carousel.title")}
					</h2>
				</div>

				<Carousel />
			</section>

			<section className="px-5 py-10 lg:py-20 lg:px-20 gap-8 md:gap-14">
				<h2 className="text-2xl leading-8 md:text-5xl md:leading-none font-semibold py-5 mb-3 lg:mb-6 mx-auto w-full max-w-mobile desktop:max-w-[894px]">
					{i18n("charts.title")}
				</h2>
				<div className="grid grid-cols-1 desktop:grid-cols-3 gap-4 desktop:gap-5 max-w-8xl mx-auto w-full">
					{howXhainContributes.map((id) => (
						<Card key={id.toString()} id={id} />
					))}
				</div>
			</section>

			<section className="bg-xhain-blue-30 px-5 py-10 lg:py-20 lg:px-20 gap-8 md:gap-14 flex flex-col">
				<div className="mx-auto w-full max-w-mobile desktop:max-w-[894px] flex flex-col gap-6">
					<h2 className="text-2xl leading-8 md:text-5xl md:leading-none font-bold">
						{i18n("howToReachGoals.title")}
					</h2>
					<p className="text-base leading-6 md:text-xl md:leading-7 font-normal">
						{i18n("howToReachGoals.description")}
					</p>
				</div>
				<div className="grid grid-cols-1 desktop:grid-cols-3 gap-4 desktop:gap-5 max-w-8xl mx-auto w-full">
					{howToReachGoals.map((id) => (
						<Card key={id.toString()} id={id} />
					))}
				</div>
			</section>

			<section className="px-5 py-10 lg:py-20 lg:px-20 gap-8 md:gap-14">
				<div className="mx-auto w-full max-w-mobile desktop:max-w-[894px]">
					<h2 className="text-2xl leading-8 md:text-5xl md:leading-none font-bold mb-3 md:mb-6">
						{i18n("consequences.title")}
					</h2>
					<p className="mb-[40px] lg:mb-10 text-base leading-6 md:text-xl md:leading-7 font-normal">
						{i18n("consequences.description")}
					</p>
				</div>
				<h3 className="text-lg leading-7 lg:text-2xl lg:leading-8 font-bold mb-3 lg:mb-10 max-w-mobile desktop:max-w-8xl mx-auto w-full">
					{i18n("consequences.subheading")}
				</h3>
				<div className="grid grid-cols-1 desktop:grid-cols-3 gap-4 desktop:gap-5 mb-10 desktop:mb-20 max-w-8xl mx-auto w-full">
					{consequences.map((id) => (
						<Card key={id.toString()} id={id} />
					))}
				</div>
			</section>

			<section className="px-5 lg:px-20 m-auto max-w-mobile desktop:max-w-8xl">
				<FeatureSection />
			</section>
		</>
	);
}
