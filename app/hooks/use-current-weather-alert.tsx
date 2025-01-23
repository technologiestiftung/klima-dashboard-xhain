import { useState, useEffect } from "react";

interface AlertData {
	alertEN: string;
	alertDE: string;
}

export const brightSkyApiEndpoint =
	"https://api.brightsky.dev/alerts?warn_cell_id=801051061"; // 711000201 Friedrichshain

const useCurrentAlert = () => {
	// See BrightSky API documentation for more information: https://brightsky.dev/docs/#/operations/getAlerts

	const [alert, setAlert] = useState<AlertData | null>(null);
	const [loadingAlert, setLoadingAlert] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAlert = async () => {
			try {
				const response = await fetch(brightSkyApiEndpoint);
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

	console.log("alert", alert);
	return { alert, loadingAlert, error };
};

export default useCurrentAlert;
