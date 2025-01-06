// placeholder card
import React from "react";
import { useCsvStore } from "../store/useCsvStore";

interface DataCardProps {
	fileName: string;
	title: string;
}

const DataCard: React.FC<DataCardProps> = ({ fileName, title }) => {
	const data = useCsvStore((state) => state.getCsvData(fileName));

	return (
		<div className="border border-gray-300 m-5 p-2.5">
			<h2>{title}</h2>
			{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
		</div>
	);
};

export default DataCard;
