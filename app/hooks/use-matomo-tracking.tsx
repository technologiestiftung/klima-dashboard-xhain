/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from "react";

export const useMatomoTracking = () => {
	useEffect(() => {
		window._paq = window._paq || [];
		window._paq.push(["trackPageView"]);
		window._paq.push(["enableLinkTracking"]);

		(function () {
			const u = import.meta.env.VITE_MATOMO_URL;
			window._paq.push(["setTrackerUrl", u + "matomo.php"]);
			window._paq.push(["setSiteId", import.meta.env.VITE_MATOMO_SITE_ID]);

			const d = document;
			const g = d.createElement("script");
			const s = d.getElementsByTagName("script")[0];
			g.async = true;
			g.src = u + "matomo.js";
			s.parentNode.insertBefore(g, s);
		})();
	}, []);

	return null;
};
