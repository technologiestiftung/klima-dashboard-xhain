import React, {
	type FocusEvent,
	type MouseEvent,
	type RefObject,
	useState,
} from "react";
import * as d3 from "d3";
import { howToReachGoalsData } from "~/data";
import { setYear } from "date-fns";
import { formatNumber } from "~/i18n/i18n-utils";
import { useMouseLeave } from "~/hooks/use-mouse-leave";
import { useFocusLeave } from "~/hooks/use-focus-leave";

const { reductionPathScenario175Thg } = howToReachGoalsData;

interface HoverableBarsReductionPathProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
	parentRef: RefObject<HTMLDivElement | null>;
}

export const HoverableBarsReductionPath: React.FC<
	HoverableBarsReductionPathProps
> = ({ xScale, yScale, sizes, parentRef }) => {
	const {
		margin: { bottom, top },
	} = sizes;

	const [visibleYear, setVisibleYear] = useState<string | undefined>(undefined);

	const visibleYearHandler = (
		e:
			| MouseEvent<SVGRectElement, globalThis.MouseEvent>
			| FocusEvent<SVGRectElement, Element>,
	) => {
		const parentDiv = parentRef.current;
		if (!parentDiv || !parentDiv.contains(e.currentTarget)) {
			return;
		}

		setVisibleYear(e.currentTarget.dataset.year);
	};

	useMouseLeave(parentRef, () => setVisibleYear(undefined));
	useFocusLeave(parentRef, () => setVisibleYear(undefined));

	const legendColors = [
		"bg-xhain-blue-50",
		"border-xhain-blue-80 border border-2 border-dashed",
	];

	return (
		<>
			{reductionPathScenario175Thg.map((d) => (
				<React.Fragment key={d.year}>
					{/* invisible line so hover works above the line  */}
					<rect
						x={xScale(setYear(new Date(), d.year)) - 0.5}
						y={0}
						width={1}
						height={sizes.height - bottom}
						fill={"transparent"}
						opacity={0.5}
						data-year={d.year}
						stroke="transparent"
						strokeWidth={20}
						onMouseEnter={visibleYearHandler}
						onClick={visibleYearHandler}
						onFocus={visibleYearHandler}
					/>
					<rect
						x={xScale(setYear(new Date(), d.year)) - 0.5}
						y={
							yScale(Math.max(Number(d.goal_berlin_tons), d.model_xhain_tons)) -
							bottom +
							top
						}
						width={1}
						height={
							sizes.height -
							yScale(Math.max(Number(d.goal_berlin_tons), d.model_xhain_tons)) -
							top
						}
						fill={visibleYear === d.year.toString() ? "black" : "transparent"}
						opacity={0.5}
						data-year={d.year}
						stroke="transparent"
						tabIndex={0}
						strokeWidth={20}
						onMouseEnter={visibleYearHandler}
						onClick={visibleYearHandler}
						onFocus={visibleYearHandler}
					/>
					<foreignObject
						transform={`translate(${getTranslateX({ xScale, d, sizes })}, 0)`}
						width="115"
						height="150"
						className={`${visibleYear === d.year.toString() ? "block" : "hidden"}`}
					>
						<div className="bg-white rounded-5px flex flex-col p-2">
							<span className="font-semibold">{d.year}</span>
							{[d.model_xhain_tons, d.goal_berlin_tons].map((tons, i) =>
								// filter out first goal_xhain_tons value which has 0 as a placeholder
								Number(tons) !== 0 ? (
									<span key={tons} className="flex items-center gap-x-1">
										<div className={`rounded-xs size-4 ${legendColors[i]}`} />
										{`${formatNumber(Number(tons))} t`}
									</span>
								) : null,
							)}
						</div>
					</foreignObject>
				</React.Fragment>
			))}
		</>
	);
};

function getTranslateX({
	xScale,
	d,
	sizes,
}: {
	xScale: HoverableBarsReductionPathProps["xScale"];
	d: (typeof reductionPathScenario175Thg)[0];
	sizes: HoverableBarsReductionPathProps["sizes"];
}) {
	const translateX = xScale(setYear(new Date(), d.year));

	// if the tooltip is too close to the right border, move it a bit to the left
	if (translateX >= sizes.width - 80) {
		return translateX - 80;
	}

	return translateX + 10;
}
