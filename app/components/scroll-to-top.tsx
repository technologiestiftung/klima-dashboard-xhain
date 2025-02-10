import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Using setTimeout to allow content to render
		const timeoutId = setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 30);

		return () => clearTimeout(timeoutId);
	}, [pathname]);

	return null;
}
