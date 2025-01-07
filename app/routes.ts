import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
	route(":lang?/", "./routes/index.tsx"),
	route(":lang?/current-projects/", "./routes/current-projects/index.tsx"),
] satisfies RouteConfig;
