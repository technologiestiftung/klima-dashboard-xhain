export type Route = {
	path: string;
	page: string;
};

const baseRoutes: Route[] = [
	{
		path: "/",
		page: "./pages/index.tsx",
	},
	{
		path: "/current-projects/",
		page: "./pages/current-projects/index.tsx",
	},
];

const i18nRoutes: Route[] = baseRoutes.map(({ path, page }) => ({
	path: `/en${path}`,
	page,
}));

export const routes = [...baseRoutes, ...i18nRoutes];
