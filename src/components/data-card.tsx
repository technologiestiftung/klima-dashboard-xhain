// placeholder card
import React from "react";
import { useCsvStore } from "../store/useCsvStore";
import { Dialog } from "./dialog/dialog";

interface DataCardProps {
	fileName: string;
	title: string;
}

const DataCard: React.FC<DataCardProps> = ({ fileName, title }) => {
	const data = useCsvStore((state) => state.getCsvData(fileName));

	const dialogId = `${title}-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	return (
		<>
			<div className="border border-gray-300 m-5 p-2.5">
				<h2>{title}</h2>
				{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}

				<br />

				<button
					onClick={showDialog}
					className="p-2 rounded border bg-blue-100 shadow"
				>
					open dialog
				</button>
			</div>

			<Dialog id={dialogId}>
				<div className="bg-white p-5 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold">Dialog</h2>
					<p className="text-lg">This is a dialog about {title}</p>
				</div>
			</Dialog>
		</>
	);
};

export default DataCard;
