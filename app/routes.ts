import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
	route(":lang?/", "./routes/index.tsx"),
	route(":lang?/about/", "./routes/about/index.tsx"),
	route(":lang?/climate-strategies/", "./routes/climate-strategies/index.tsx"),
	route(":lang?/current-projects/", "./routes/current-projects/index.tsx"),
	route(":lang?/imprint-privacy/", "./routes/imprint-privacy/index.tsx"),
] satisfies RouteConfig;
