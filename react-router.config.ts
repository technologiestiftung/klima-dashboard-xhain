import type { Config } from "@react-router/dev/config";

export default {
	// return a list of URLs to prerender at build time
	async prerender() {
		return ["/", "/en/", "/current-projects/", "/en/current-projects/"];
	},
} satisfies Config;
