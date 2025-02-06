import React from "react";
import { Dialog } from "../dialog/dialog";
import { Map } from "./map";
import { i18n } from "~/i18n/i18n-utils";

export const HBIMap: React.FC = () => {
	const dialogId = `hbi-dialog`;
	const showDialog = () =>
		(document.getElementById(dialogId) as HTMLDialogElement).showModal();

	return (
		<figure className={`w-full h-fit`}>
			<div
				className={`p-5 max-w-mobile mx-auto desktop:max-w-none desktop:mx-none rounded-2.5xl md:rounded-4xl w-full h-full bg-xhain-blue-10`}
			>
				<figcaption>
					<h2 className="text-xl font-bold">{i18n("chart.HBI.title")}</h2>
					<h3 className="text-xl">{i18n("chart.HBI.subtitle")}</h3>
					<button
						onClick={showDialog}
						className={`
                                            flex items-center px-3 py-0.5 gap-x-2 bg-xhain-blue-50 text-white rounded-full my-3 font-semibold
                                            hover:bg-xhain-blue-60 focus:outline focus:outline-3 focus:outline-xhain-blue-80 focus:outline-offset-5
                                            `}
					>
						<img src={"/images/i-icon.svg"} alt={""} />
						{i18n("button.moreInfo")}
					</button>

					<p className={`my-4 lg:columns-2 gap-7`}>
						{i18n("chart.HBI.description")}
					</p>
				</figcaption>
				<div className="w-full h-full overflow-hidden" role="img">
					<Map />
				</div>
			</div>

			<Dialog id="hbi-dialog"> hi huhu</Dialog>
		</figure>
	);
};
