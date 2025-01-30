import React from "react";
import { i18n } from "~/i18n/i18n-utils.ts";

export function SmallTooltip({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<div className="group flex gap-x-2">
				<button className="peer">
					<img
						className="size-5"
						src="/images/i-icon.svg"
						alt={i18n("carousel.infoButton.alt")}
					/>
				</button>
				<div
					className={`
					text-sm leading-5 text-xhain-blue-50 bg-white max-w-24 md:max-w-none px-0.5 md:px-1.5 rounded-md underline
					opacity-0
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

			{/*<div className="relative group">*/}
			{/*	<button className="px-4 py-2 bg-blue-600 text-white rounded-md">*/}
			{/*		Hover or Focus Me*/}
			{/*	</button>*/}

			{/*	<div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-56 p-3 bg-gray-800 text-white text-sm rounded-lg ">*/}
			{/*		Click this*/}
			{/*		<a*/}
			{/*			href="https://example.com"*/}
			{/*			className="text-yellow-300 underline focus:ring-2 focus:ring-yellow-400"*/}
			{/*		>*/}
			{/*			link*/}
			{/*		</a>{" "}*/}
			{/*		inside the tooltip!*/}
			{/*	</div>*/}
			{/*</div>*/}
		</>
	);

	// const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
	// const tooltipRef = React.useRef<HTMLDivElement>(null);
	//
	// const showToolTip = () => {
	// 	setIsTooltipVisible(true);
	// };
	//
	// const hideToolTip = () => {
	// 	setIsTooltipVisible(false);
	// };
	//
	// return (
	// 	<>
	// 		<button
	// 			className="flex flex-row gap-2"
	// 			onMouseEnter={showToolTip}
	// 			onMouseLeave={hideToolTip}
	// 			onClick={showToolTip}
	// 			onKeyDown={(e) => {
	// 				if (e.key === "Escape") {
	// 					hideToolTip();
	// 				}
	// 			}}
	// 		>
	// 			<img
	// 				className="size-5 "
	// 				src="/images/i-icon.svg"
	// 				alt={i18n("carousel.infoButton.alt")}
	// 			/>
	// 			{isTooltipVisible && (
	// 				<div
	// 					ref={tooltipRef}
	// 					className="text-sm leading-5 font-normal text-xhain-blue-50 bg-white max-w-24 md:max-w-none px-0.5 md:px-1.5 rounded-5px underline"
	// 					role="tooltip"
	// 					onKeyDown={(e) => {
	// 						if (e.key === "Escape") {
	// 							hideToolTip();
	// 						}
	// 					}}
	// 					onBlur={hideToolTip}
	// 				>
	// 					{children}
	// 				</div>
	// 			)}
	// 		</button>
	// 	</>
	// );
}
