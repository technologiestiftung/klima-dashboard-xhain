import React, { useState } from "react";
import { i18n } from "~/i18n/i18n-utils.ts";

interface SmallTooltipProps {
	children?: React.ReactNode;
	color?: string;
	isLink?: boolean;
	isDark?: boolean;
}

export function SmallTooltip({
	children,
	color,
	isLink,
	isDark,
}: SmallTooltipProps) {
	const [isTapped, setIsTapped] = useState(false);

	return (
		<>
			<div className="group items-start flex gap-x-2">
				<button className="peer" onTouchStart={() => setIsTapped(!isTapped)}>
					<img
						className="size-5"
						src={isDark ? "/images/i-icon-dark.svg" : "/images/i-icon.svg"}
						alt={i18n("carousel.infoButton.alt")}
					/>
				</button>
				<div
					className={`
					text-sm leading-5 bg-white max-w-24 md:max-w-none px-0.5 md:px-1.5 rounded-md 
					${isLink ? "underline" : ""} 
					${color ? color : "text-xhain-blue-50"}
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
