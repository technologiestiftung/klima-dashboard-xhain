import React from "react";
import useCurrentWeather from "../hooks/use-current-weather";

const WeatherCard: React.FC = () => {
	const { weather } = useCurrentWeather();

	if (!weather) {
		return null;
	}

	return (
		<div className="max-w-5xl mx-auto w-full flex flex-row gap-2 items-center justify-between p-5 bg-[#F6F8FF]">
			<div className="text-2xl font-bold">{weather.temperatureCelsius}°C</div>
			<div className="flex flex-col">
				<p className="font-bold text-lg">Friedrichshain-Kreuzberg</p>
				<p className="text-sm">
					{new Date(weather.timestamp).toLocaleString(undefined, {
						dateStyle: "full",
						timeStyle: "short",
					})}
				</p>
				<p className="text-sm">{weather.condition}</p>
			</div>
		</div>
	);
};

export default WeatherCard;
