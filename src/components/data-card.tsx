// placeholder card
import React from "react";
import { useCsvStore } from "../store/useCsvStore";
import DataVisualization from "./data-visualization";

interface DataCardProps {
	fileName: string;
	title: string;
}

const DataCard: React.FC<DataCardProps> = ({ fileName, title }) => {
	const data = useCsvStore((state) => state.getCsvData(fileName));

	return (
		<div className="border border-gray-300 m-5 p-2.5">
			<h2>{title}</h2>
			{data ? (
				<>
					<DataVisualization data={data} />
					<table border={1} cellPadding={5}>
						<thead>
							<tr>
								{Object.keys(data[0]).map((key) => (
									<th key={key}>{key}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.map((row, index) => (
								<tr key={index}>
									{Object.values(row).map((value, i) => (
										<td key={i}>{value}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default DataCard;
