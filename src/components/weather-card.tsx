import React from "react";
import useCurrentWeather from "../hooks/use-current-weather";
import { useI18nStore } from "../i18n/i18n-store";

const WeatherCard: React.FC = () => {
	const { weather } = useCurrentWeather();
	const { formatDate, formatTemperature } = useI18nStore();

	if (!weather) {
		return null;
	}

	return (
		<div className="max-w-5xl mx-auto w-full flex flex-row gap-2 items-center justify-between p-5 bg-[#F6F8FF]">
			<div className="text-2xl font-bold">
				{formatTemperature(weather.temperatureCelsius).value}
				{formatTemperature(weather.temperatureCelsius).unit}
			</div>
			<div className="flex flex-col">
				<p className="font-bold text-lg">Friedrichshain-Kreuzberg</p>
				<p className="text-sm">{formatDate(new Date(weather.timestamp))}</p>
				<p className="text-sm">{weather.condition}</p>
			</div>
		</div>
	);
};

export default WeatherCard;
