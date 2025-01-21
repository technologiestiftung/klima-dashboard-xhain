import React from "react";
import useCurrentWeather from "~/hooks/use-current-weather";
import { formatDate, formatTemperature } from "~/i18n/i18n-utils";
import { Skeleton } from "~/components/skeleton/skeleton";

const WeatherCard: React.FC = () => {
	const { weather } = useCurrentWeather();

	if (!weather) {
		return (
			<div className="max-w-5xl mx-auto w-full h-28 flex flex-row gap-2 items-center justify-between bg-[#F6F8FF]">
				<Skeleton className="w-14 h-14 rounded-full mt-8 ml-3" />
				<div className="flex flex-col mr-5">
					<Skeleton className="w-56 h-4 my-2 rounded-lg" />
					<Skeleton className="w-56 h-4 my-2 rounded-lg" />
					<Skeleton className="w-56 h-4 my-2 rounded-lg" />
				</div>
			</div>
		);
	}

	const { value, unit } = formatTemperature(weather.temperatureCelsius);
	const formattedDate = formatDate(new Date(weather.timestamp));

	return (
		<div className="max-w-5xl mx-auto w-full h-28 flex flex-row gap-2 items-center justify-between p-5 bg-[#F6F8FF]">
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
