import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { routes } from "./routes/routes";

const pages: Record<string, { default: React.FC }> = import.meta.glob(
	"./pages/**/*.tsx",
	{ eager: true },
);

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, page }) => {
					const Component = pages[page].default;
					const isIndex = path === "/";

					return (
						<Route
							key={path}
							index={isIndex}
							path={path}
							element={<Component />}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
