import React, { useEffect } from "react";
import { useCsvStore } from "./store/useCsvStore";
import DataCard from "./components/data-card";

const csvFiles = [
	{ name: "02-eev-total-mwh", path: "/data/02-eev-total-mwh.csv" },
	{ name: "02-eev-sector-2021-mwh", path: "/data/02-eev-sector-2021-mwh.csv" },
	{ name: "02-thg-total-tons", path: "/data/02-thg-total-tons.csv" },
	{
		name: "02-thg-sector-2021-tons",
		path: "/data/02-thg-sector-2021-tons.csv",
	},
];

const App: React.FC = () => {
	const loadCsv = useCsvStore((state) => state.loadCsv);

	useEffect(() => {
		csvFiles.forEach((file) => {
			loadCsv(file.name, file.path);
		});
	}, [loadCsv]);

	return (
		<main>
			<h1 className="text-2xl font-semibold p-5">Klima Dashboard Xhain</h1>
			<div className="flex flex-wrap justify-center">
				{csvFiles.map((file) => (
					<DataCard key={file.name} fileName={file.name} title={file.name} />
				))}
			</div>
		</main>
	);
};

export default App;
