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

export const BRIGHTSKY_WEATHER_API_ENDPOINT = import.meta.env
	.VITE_BRIGHTSKY_WEATHER_API_ENDPOINT;

const useCurrentWeather = () => {
	// See BrightSky API documentation for more information: https://brightsky.dev/docs/#/operations/getCurrentWeather

	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				if (!BRIGHTSKY_WEATHER_API_ENDPOINT) {
					throw new Error("API endpoint is not defined");
				}
				const response = await fetch(BRIGHTSKY_WEATHER_API_ENDPOINT);
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
