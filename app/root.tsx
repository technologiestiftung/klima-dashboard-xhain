import React from "react";
import {
	isRouteErrorResponse,
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";
import stylesheet from "./index.css?url";
import { LanguageToggle } from "~/components/router/language-toggle";
import { Footer } from "~/components/footer/footer";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="de">
			<head>
				<meta charSet="utf-8" />
				<link rel="icon" type="image/svg+xml" href="/citylab.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<header>
					<nav className="flex justify-between">
						<div className="flex gap-4">
							<div className="rounded border-2 p-2">logo</div>
							<LanguageToggle />
						</div>
						<ul className="flex gap-4">
							<li>
								<Link to="/" className="text-blue-500 underline">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/current-projects/"
									className="text-blue-500 underline"
								>
									Aktuelle Projekte
								</Link>
							</li>
						</ul>
					</nav>
				</header>

				<main>{children}</main>

				<Footer />

				<ScrollRestoration />
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
