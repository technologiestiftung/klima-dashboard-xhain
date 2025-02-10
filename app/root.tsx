import React from "react";
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
} from "react-router";
import stylesheet from "./index.css?url";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { useMenuStore } from "~/components/header/navigation/menu-store";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export function Layout({ children }: { children: React.ReactNode }) {
	const { isMenuOpen } = useMenuStore();

	return (
		<html lang="de">
			<head>
				<meta charSet="utf-8" />
				<link rel="icon" type="image/svg+xml" href="/citylab.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body
				className={`[&:has(dialog[open])]:overflow-hidden ${isMenuOpen ? "overflow-hidden lg:overflow-auto" : ""}`}
			>
				<Header />
				<main>{children}</main>

				<Footer />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({
	// @ts-expect-error just for testing
	error,
}) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
