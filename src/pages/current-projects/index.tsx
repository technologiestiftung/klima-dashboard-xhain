import { Link } from "react-router";

export default function Index() {
	return (
		<main>
			<h1 className="text-2xl font-semibold p-5">Aktuelle Projekte</h1>

			<br />

			<Link to="/" className="text-blue-500 underline p-5">
				link home
			</Link>
		</main>
	);
}
