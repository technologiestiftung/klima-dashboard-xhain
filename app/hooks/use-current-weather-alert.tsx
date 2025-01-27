import { useState, useEffect } from "react";

interface AlertData {
	alertEN: string;
	alertDE: string;
}

const BRIGHTSKY_ALERT_API_ENDPOINT = import.meta.env
	.VITE_BRIGHTSKY_ALERT_API_ENDPOINT;

const useCurrentAlert = () => {
	// See BrightSky API documentation for more information: https://brightsky.dev/docs/#/operations/getAlerts

	const [alert, setAlert] = useState<AlertData | null>(null);
	const [loadingAlert, setLoadingAlert] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAlert = async () => {
			try {
				if (!BRIGHTSKY_ALERT_API_ENDPOINT) {
					throw new Error("API endpoint is not defined");
				}
				const response = await fetch(BRIGHTSKY_ALERT_API_ENDPOINT);
				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}
				const data = await response.json();
				setAlert({
					alertEN: data.alerts[0].event_en,
					alertDE: data.alerts[0].event_de,
				});
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("An unknown error occurred");
				}
			} finally {
				setLoadingAlert(false);
			}
		};

		fetchAlert();
	}, []);

	return { alert, loadingAlert, error };
};

export default useCurrentAlert;
