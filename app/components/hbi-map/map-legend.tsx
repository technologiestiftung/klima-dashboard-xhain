import React from "react";

const legendItems = [
	{ color: "bg-white", label: "sehr gering" },
	{ color: "bg-xhain-green-30", label: "gering" },
	{ color: "bg-xhain-green-40", label: "mittel" },
	{ color: "bg-xhain-blue-40", label: "hoch" },
	{ color: "bg-xhain-blue-50", label: "sehr hoch" },
];

export const MapLegend: React.FC = () => {
	return (
		<div className="desktop:absolute desktop:top-10 desktop:left-10 flex flex-col items-start desktop:w-64">
			<div className="text-base leading-6 font-bold mb-7">
				Betroffenheit bezogen auf den bezirklichen Durchschnitt
			</div>
			<div className="flex flex-row flex-wrap desktop:flex-col gap-2">
				{legendItems.map((item) => (
					<div key={item.label} className="flex items-center gap-2.5">
						<div className={`size-6 rounded-full ${item.color}`} />
						<div className="text-base leading-6 font-normal">{item.label}</div>
					</div>
				))}
			</div>
		</div>
	);
};
