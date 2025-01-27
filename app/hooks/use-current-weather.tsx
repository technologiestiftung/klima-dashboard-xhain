import { useState, useEffect } from "react";

type WeatherIcon =
	| "clear-day"
	| "clear-night"
	| "partly-cloudy-day"
	| "partly-cloudy-night"
	| "cloudy"
	| "fog"
	| "wind"
	| "rain"
	| "sleet"
	| "snow"
	| "hail"
	| "thunderstorm";

interface WeatherData {
	timestamp: string;
	temperatureCelsius: number;
	icon: WeatherIcon;
}

export const brightSkyApiEndpoint =
	"https://api.brightsky.dev/current_weather?lat=52.50186298000907&lon=13.445670892452474";

const useCurrentWeather = () => {
	// See BrightSky API documentation for more information: https://brightsky.dev/docs/#/operations/getCurrentWeather

	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(brightSkyApiEndpoint);
				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}
				const data = await response.json();
				setWeather({
					temperatureCelsius: data.weather.temperature,
					timestamp: data.weather.timestamp,
					icon: data.weather.icon,
				});
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("An unknown error occurred");
				}
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();
	}, []);

	return { weather, loading, error };
};

export default useCurrentWeather;
