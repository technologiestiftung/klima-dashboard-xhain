import type { Config } from "@react-router/dev/config";

export default {
	// return a list of URLs to prerender at build time
	async prerender() {
		return [
			"/",
			"/en/",
			"/about/",
			"/en/about/",
			"/current-projects/",
			"/en/current-projects/",
			"/climate-strategies/",
			"/en/climate-strategies/",
			"/imprint-privacy/",
			"/en/imprint-privacy/",
		];
	},
} satisfies Config;
