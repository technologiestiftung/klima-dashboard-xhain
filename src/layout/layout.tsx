import React from "react";
import { LanguageToggle } from "../components/router/languageToggle.tsx";
import { Link } from "react-router";

type LayoutProps = {
	children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
	return (
		<>
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
							<Link to="/current-projects/" className="text-blue-500 underline">
								Aktuelle Projekte
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>{children}</main>

			<footer>footer</footer>
		</>
	);
}
