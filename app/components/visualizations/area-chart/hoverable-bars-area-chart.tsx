import React, {
	type FocusEvent,
	type MouseEvent,
	type RefObject,
	useState,
} from "react";
import * as d3 from "d3";
import { consequencesData } from "~/data";
import { setYear } from "date-fns";
import { formatNumber } from "~/i18n/i18n-utils";
import { useMouseLeave } from "~/hooks/use-mouse-leave";
import { useFocusLeave } from "~/hooks/use-focus-leave";

const { precipitationMm } = consequencesData;

interface HoverableBarsAreaChartProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
	parentRef: RefObject<HTMLDivElement | null>;
}

export const HoverableBarsAreaChart: React.FC<HoverableBarsAreaChartProps> = ({
	xScale,
	yScale,
	sizes,
	parentRef,
}) => {
	const {
		margin: { bottom, top },
		width,
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

	return (
		<>
			{precipitationMm.map((d) => (
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
						strokeWidth={width > 480 ? 8 : 5}
						onMouseEnter={visibleYearHandler}
						onClick={visibleYearHandler}
						onFocus={visibleYearHandler}
					/>
					<rect
						x={xScale(setYear(new Date(), d.year)) - 0.5}
						y={yScale(d.rain) - bottom + top}
						width={1}
						height={sizes.height - yScale(d.rain) - top}
						fill={visibleYear === d.year.toString() ? "black" : "transparent"}
						opacity={0.5}
						data-year={d.year}
						stroke="transparent"
						tabIndex={0}
						strokeWidth={width > 480 ? 8 : 5}
						onMouseEnter={visibleYearHandler}
						onClick={visibleYearHandler}
						onFocus={visibleYearHandler}
					/>
					<foreignObject
						transform={`translate(${getTranslateX({ xScale, d, sizes })}, 0)`}
						width="105"
						height="150"
						className={`${visibleYear === d.year.toString() ? "block" : "hidden"}`}
					>
						<div className="bg-white rounded-5px flex flex-col p-2">
							<span className="font-semibold">{d.year}</span>
							{[d.rain].map((amount, i) => (
								// filter out first goal_xhain_tons value which has 0 as a placeholder

								<span key={amount + i} className="flex items-center gap-x-1">
									<div className={`size-4 bg-xhain-blue-50`} />
									{`${formatNumber(Number(amount))} mm`}
								</span>
							))}
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
	xScale: HoverableBarsAreaChartProps["xScale"];
	d: (typeof precipitationMm)[0];
	sizes: HoverableBarsAreaChartProps["sizes"];
}) {
	const translateX = xScale(setYear(new Date(), d.year));

	// if the tooltip is too close to the right border, move it a bit to the left
	if (translateX >= sizes.width - 115) {
		return translateX - 115;
	}

	return translateX + 10;
}
