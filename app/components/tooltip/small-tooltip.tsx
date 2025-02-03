import React, { useState } from "react";
import { i18n } from "~/i18n/i18n-utils.ts";

export function SmallTooltip({ children }: { children?: React.ReactNode }) {
	const [isTapped, setIsTapped] = useState(false);

	return (
		<>
			<div className="group items-start flex gap-x-2">
				<button className="peer" onTouchStart={() => setIsTapped(!isTapped)}>
					<img
						className="size-5"
						src="/images/i-icon.svg"
						alt={i18n("carousel.infoButton.alt")}
					/>
				</button>
				<div
					className={`
					text-sm leading-5 text-xhain-blue-50 bg-white max-w-24 md:max-w-none px-0.5 md:px-1.5 rounded-md underline
					${isTapped ? "opacity-100" : "opacity-0"}
					group-focus:opacity-100 group-hover:opacity-100
					peer-focus:opacity-100 focus-hover:opacity-100
				 	focus-within:opacity-100 hover-within:opacity-100
				 	transition-opacity duration-300 ease-in-out
					`}
					role="tooltip"
				>
					{children}
				</div>
			</div>
		</>
	);
}
