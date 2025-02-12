/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from "react";

export const useMatomoTracking = () => {
	useEffect(() => {
		// eslint-disable-next-line no-multi-assign
		const _mtm = (window._mtm = window._mtm || []);
		_mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
		const d = document,
			g = d.createElement("script"),
			s = d.getElementsByTagName("script")[0];
		g.async = true;
		g.src = import.meta.env.VITE_MATOMO_URL;
		s.parentNode.insertBefore(g, s);
	}, []);

	return null;
};
