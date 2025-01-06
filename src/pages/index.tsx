import DataCard from "../components/data-card";
import { useCsvStore } from "../store/useCsvStore";
import { Link } from "react-router";

const csvFiles = [
	{ name: "02-thg-total-tons", path: "/data/02-thg-total-tons.csv" },
	{
		name: "02-thg-sector-2021-tons",
		path: "/data/02-thg-sector-2021-tons.csv",
	},
	{
		name: "02-eev-total-mwh",
		path: "/data/02-eev-total-mwh.csv",
	},
	{
		name: "02-eev-sector-2021-mwh",
		path: "/data/02-eev-sector-2021-mwh.csv",
	},
	{
		name: "02-heating-mix-2021",
		path: "/data/02-heating-mix-2021.csv",
	},
	{
		name: "02-modal-split-2018",
		path: "/data/02-modal-split-2018.csv",
	},
	{
		name: "02-traffic-2022-summarized",
		path: "/data/02-traffic-2022-summarized.csv",
	},
	{
		name: "02-traffic-2022",
		path: "/data/02-traffic-2022.csv",
	},
	{
		name: "03-reduction-path-scenario175-thg",
		path: "/data/03-reduction-path-scenario175-thg.csv",
	},
	{
		name: "03-rest-budget-thg-until-year",
		path: "/data/03-rest-budget-thg-until-year.csv",
	},
	{
		name: "03-trendscenario-thg-until2050",
		path: "/data/03-trendscenario-thg-until2050.csv",
	},
	{
		name: "04-hot-days",
		path: "/data/04-hot-days.csv",
	},
	{
		name: "04-medium-temperature",
		path: "/data/04-medium-temperature.csv",
	},
];

csvFiles.forEach((file) => {
	useCsvStore.getState().loadCsv(file.name, file.path);
});

export default function Index() {
	return (
		<main>
			<h1 className="text-2xl font-semibold p-5">Klima Dashboard Xhain</h1>

			<br />

			<Link to="/current-projects/" className="text-blue-500 underline p-5">
				link aktuelle Projekte
			</Link>

			<br />

			<div className="flex flex-wrap justify-center">
				{csvFiles.map((file) => (
					<DataCard key={file.name} fileName={file.name} title={file.name} />
				))}
			</div>
		</main>
	);
}
