import { useEffect, useState } from "react";

export function useRoundedPercentage(value: number): string {
	const [roundedPercentage, setRoundedPercentage] = useState<string>("");

	useEffect(() => {
		setRoundedPercentage(`${Math.round(value * 100)}%`);
	}, [value]);

	return roundedPercentage;
}
