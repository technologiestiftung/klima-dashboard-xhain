import { useRef, useState } from "react";
import {
	useFloating,
	autoUpdate,
	offset,
	arrow,
	shift,
} from "@floating-ui/react-dom";
import { i18n } from "~/i18n/i18n-utils.ts";

interface BigTooltipProps {
	content: string;
}

export function BigTooltip({ content }: BigTooltipProps) {
	const [isVisible, setIsVisible] = useState(false);
	const arrowRef = useRef(null);

	/**
	 * See floating-ui documentation for more information: https://floating-ui.com/docs/getting-started
	 */
	const { refs, floatingStyles, middlewareData } =
		useFloating<HTMLButtonElement>({
			whileElementsMounted: autoUpdate,
			strategy: "absolute",
			middleware: [
				offset(30),
				shift(),
				arrow({ element: arrowRef, padding: 10 }),
			],
		});

	const onCloseButton = () => {
		setIsVisible(false);
		/**
		 * Focus the info (i) button once the tooltip is closed
		 */
		refs.reference.current?.focus();
	};

	return (
		<span>
			<button
				ref={refs.setReference}
				className="inline rounded-full align-sub px-1 focus-black"
				onClick={() => setIsVisible(!isVisible)}
			>
				<img
					className="size-5"
					src={"/images/i-icon-blue.svg"}
					alt={i18n("charts.p2.part2.tooltip.alt")}
				/>
			</button>

			{isVisible && (
				<span
					ref={refs.setFloating}
					style={floatingStyles}
					className="leading-6 z-20 rounded-xl pt-10 px-8 pb-4 w-[350px] bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.25)]"
				>
					<span
						ref={arrowRef}
						className="absolute size-8 bg-white z-10 rounded transform -translate-y-[54px] rotate-[35deg] skew-y-[20deg] shadow-[-7px_-7px_10px_0_rgba(0,0,0,0.1)]"
						style={{
							left: middlewareData.arrow?.x,
							top: middlewareData.arrow?.y,
						}}
					/>
					<button
						className="top-4 right-4 z-20 focus-black rounded-full"
						/**
						 * the custom utility class "focus-black" has position: relative
						 * therefore we need to overwrite it with inline styles
						 */
						style={{ position: "absolute" }}
						onClick={onCloseButton}
					>
						<img
							className="size-7"
							src={"/images/x-icon.svg"}
							alt={i18n("charts.p2.part2.tooltip.close")}
						/>
					</button>
					<span
						className="text-base"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</span>
			)}
		</span>
	);
}
