import { test, expect } from "@playwright/test";

const routes = [
	// home page
	{ route: "/", isFullPageScreenshot: true },
	{ route: "/en/", isFullPageScreenshot: true },

	// climate strategies
	{ route: "/climate-strategies/", isFullPageScreenshot: true },
	{ route: "/en/climate-strategies/", isFullPageScreenshot: true },

	// current projects
	{ route: "/current-projects/", isFullPageScreenshot: true },
	{ route: "/en/current-projects/", isFullPageScreenshot: true },

	// about
	{ route: "/about/", isFullPageScreenshot: true },
	{ route: "/en/about/", isFullPageScreenshot: true },

	// imprint and privacy
	{ route: "/imprint-privacy/", isFullPageScreenshot: true },
	{ route: "/en/imprint-privacy/", isFullPageScreenshot: true },
];

test.beforeEach(async ({ context }) => {
	/**
	 * we ignore the weather widget from the home page as it
	 * is changing and would cause the tests to fail
	 */
	await context.route("**://api.brightsky.dev/**", (route) => route.abort());
});

for (const { route, isFullPageScreenshot } of routes) {
	test(`Visual regression for ${route}`, async ({ page }) => {
		await page.goto(route);
		await expect(page).toHaveScreenshot({ fullPage: isFullPageScreenshot });
	});
}
