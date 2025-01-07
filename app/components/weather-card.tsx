import React from "react";
import useCurrentWeather from "~/hooks/use-current-weather";
import { formatDate, formatTemperature } from "~/i18n/i18n-utils";
import { useLocation } from "react-router";

const WeatherCard: React.FC = () => {
	const { weather } = useCurrentWeather();
	const location = useLocation();
	const language = location.pathname.split("/")[1];

	if (!weather) {
		return null;
	}

	const { value, unit } = formatTemperature({
		language,
		temperature: weather.temperatureCelsius,
	});

	const formattedDate = formatDate({
		language,
		date: new Date(weather.timestamp),
	});

	return (
		<div className="max-w-5xl mx-auto w-full flex flex-row gap-2 items-center justify-between p-5 bg-[#F6F8FF]">
			<div className="text-2xl font-bold">
				{value}
				{unit}
			</div>
			<div className="flex flex-col">
				<p className="font-bold text-lg">Friedrichshain-Kreuzberg</p>
				<p className="text-sm">{formattedDate}</p>
				<p className="text-sm">{weather.condition}</p>
			</div>
		</div>
	);
};

export default WeatherCard;
