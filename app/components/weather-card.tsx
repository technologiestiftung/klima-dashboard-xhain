import React from "react";
import useCurrentWeather from "~/hooks/use-current-weather";
import { formatTemperature } from "~/i18n/i18n-utils";
import { Skeleton } from "~/components/skeleton/skeleton";
import useCurrentAlert from "~/hooks/use-current-weather-alert";
import { getLanguage, i18n } from "~/i18n/i18n-utils";
import { format } from "date-fns";

const weatherIconMap = {
	"clear-day": "/images/weather_icons_clear_day.svg",
	"clear-night": "/images/weather_icons_clear_night.svg",
	"partly-cloudy-day": "/images/weather_icons_cloudy.svg",
	"partly-cloudy-night": "/images/weather_icons_cloudy.svg",
	cloudy: "/images/weather_icons_cloudy.svg",
	fog: "/images/weather_icons_foggy.svg",
	wind: "/images/weather_icons_windy.svg",
	rain: "/images/weather_icons_rainy.svg",
	sleet: "/images/weather_icons_snow.svg",
	snow: "/images/weather_icons_snow.svg",
	hail: "/images/weather_icons_hail.svg",
	thunderstorm: "/images/weather_icons_thunderstorm.svg",
};

const WeatherCard: React.FC = () => {
	const { weather, loading } = useCurrentWeather();
	const { alert, loadingAlert } = useCurrentAlert();

	const language = getLanguage();
	const alertInCurrentLang =
		language === "de" ? alert?.alertDE : alert?.alertEN;

	if (loading || loadingAlert || !weather) {
		return (
			<div className="w-full bg-xhain-blue-10 px-20 py-5">
				<div className="max-w-lg mx-auto w-full min-h-[100px] flex flex-col md:flex-row gap-2 items-center justify-between">
					<div className="flex flex-col gap-1.5">
						<Skeleton className="w-56 h-6 rounded-lg" />
						<Skeleton className="w-56 h-6 rounded-lg" />
						<Skeleton className="w-28 h-6 my-1 rounded-lg" />
					</div>

					<div className="flex flex-col md:flex-row items-center gap-6">
						<div className="flex">
							<Skeleton className="w-14 h-14 rounded-full" />
						</div>
						<div className="flex flex-row gap-6 items-center">
							<div className="flex flex-col gap-2 items-center">
								<Skeleton className="w-36 h-6 rounded-lg" />
								<Skeleton className="w-36 h-[68px] rounded-lg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const { value, unit } = formatTemperature(weather.temperatureCelsius);

	const currentTime = format(new Date(), "HH:mm");

	return (
		<div className="w-full bg-xhain-blue-10 px-20 py-7 md:py-5">
			<div className="max-w-lg mx-auto w-full flex flex-col md:flex-row gap-2 items-center justify-between">
				<div className="flex flex-col items-center md:items-start">
					<p className="text-2xl text-center md:text-left">
						{i18n("weatherCard.title")}
					</p>
					<p className="font-bold text-2xl text-center md:text-left">
						Friedrichshain-Kreuzberg
					</p>

					{alert && (
						<div className="font-bold px-[5px] py-1 bg-xhain-red-80 text-white rounded-5px w-fit flex items-center gap-x-2 mt-3">
							<img src={"/images/warning-icon.svg"} alt={""} />
							{alertInCurrentLang}
						</div>
					)}
				</div>
				<div className="flex flex-col md:flex-row items-center gap-y-2 gap-x-6">
					<img
						className="w-[104px] md:w-[85px]"
						src={weatherIconMap[weather.icon]}
					/>
					<div className="flex flex-col gap-2 items-center">
						<p className="text-xhain-blue-50 font-bold">
							{i18n("weatherCard.currently")} {currentTime}{" "}
							{i18n("weatherCard.time")}
						</p>
						<div className="bg-xhain-blue-50 rounded-5px p-2.5 w-[141px] text-white text-3xl md:text-5xl font-bold leading-none flex items-center justify-center">
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
