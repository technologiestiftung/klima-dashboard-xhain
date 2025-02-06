import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import config from "react-router.config.ts";
import type { Result } from "axe-core";

const routes = await config.prerender();

test.describe("homepage", () => {
	test("should not have any automatically detectable accessibility issues", async ({
		page,
	}) => {
		const routeViolations: Record<string, Result[]> = {};

		for (const route of routes) {
			await page.goto(route);

			// @ts-expect-error AxeBuilder is not typed
			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			routeViolations[route] = accessibilityScanResults.violations;
		}

		fs.writeFileSync(
			`./test-results/a11y-violations.json`,
			JSON.stringify(routeViolations, null, 2),
		);

		for (const [_, violations] of Object.entries(routeViolations)) {
			expect(violations).toEqual([]);
		}
	});
});
