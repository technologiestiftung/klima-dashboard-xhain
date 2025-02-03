import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
	route(":lang?/", "./routes/index.tsx"),
	route(":lang?/about/", "./routes/about/index.tsx"),
	route(":lang?/climate-concepts/", "./routes/climate-concepts/index.tsx"),
	route(":lang?/current-projects/", "./routes/current-projects/index.tsx"),
	route(":lang?/imprint/", "./routes/imprint/index.tsx"),
	route(":lang?/privacy/", "./routes/privacy/index.tsx"),
] satisfies RouteConfig;
