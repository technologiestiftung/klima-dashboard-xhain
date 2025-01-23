import React from "react";
import useCurrentWeather from "~/hooks/use-current-weather";
import { formatTemperature } from "~/i18n/i18n-utils";
import { Skeleton } from "~/components/skeleton/skeleton";
import useCurrentAlert from "~/hooks/use-current-weather-alert";
import { getLanguage } from "~/i18n/i18n-utils";
import { format } from "date-fns";

const WeatherCard: React.FC = () => {
	const { weather, loading } = useCurrentWeather();
	const { alert, loadingAlert } = useCurrentAlert();

	const language = getLanguage();
	const alertInCurrentLang =
		language === "de" ? alert?.alertDE : alert?.alertEN;

	if (loading || loadingAlert || !weather) {
		return (
			<div className="w-full bg-xhain-blue-10">
				<div className="max-w-lg mx-auto w-full h-28 flex flex-row gap-2 items-center justify-between">
					<Skeleton className="w-14 h-14 rounded-full mt-8 ml-3" />
					<div className="flex flex-col mr-5">
						<Skeleton className="w-56 h-4 my-2 rounded-lg" />
						<Skeleton className="w-56 h-4 my-2 rounded-lg" />
						<Skeleton className="w-56 h-4 my-2 rounded-lg" />
					</div>
				</div>
			</div>
		);
	}

	const { value, unit } = formatTemperature(weather.temperatureCelsius);

	// this is only updated hourly
	const formattedTime = format(new Date(weather.timestamp), "HH:mm");

	return (
		<div className="w-full bg-xhain-blue-10 px-20 py-5">
			<div className="max-w-lg mx-auto w-full flex flex-row gap-2 items-center justify-between bg-[#F6F8FF]">
				<div className="flex flex-col">
					<p className="text-2xl">Aktuelles Wetter</p>
					<p className="font-bold text-2xl">Friedrichshain-Kreuzberg</p>

					{alert && (
						<div className="font-bold px-[5px] py-1 bg-xhain-red-80 text-white rounded-5px w-fit flex items-center gap-x-2 mt-2.5">
							<img src={"/images/warning-icon.svg"} alt={""} />
							{alertInCurrentLang}
						</div>
					)}
				</div>
				<div className="flex flex-row items-center gap-6 ">
					<p className="text-sm">{weather.condition}</p>
					{/* to do: icons for weather conditions */}
					<div className="flex flex-col gap-2 items-center">
						<p className="text-xhain-blue-50 font-bold">{formattedTime} Uhr</p>
						<div className="bg-xhain-blue-50 rounded-5px p-2.5 w-[141px] text-white text-5xl font-bold leading-none flex items-center justify-center">
							{value}
							{unit}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
