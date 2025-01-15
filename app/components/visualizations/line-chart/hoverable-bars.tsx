import React, { type MouseEvent, type RefObject, useState } from "react";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";
import { setYear } from "date-fns";
import { formatNumber } from "~/i18n/i18n-utils";
import { useMouseLeave } from "~/hooks/use-mouse-leave";

const { eevTotalMwh } = howXhainContributesData;

interface HoverableBarsProps {
	xScale: d3.ScaleTime<number, number, never>;
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
	parentRef: RefObject<HTMLDivElement | null>;
}

export const HoverableBars: React.FC<HoverableBarsProps> = ({
	xScale,
	yScale,
	sizes,
	parentRef,
}) => {
	const {
		margin: { bottom, top },
	} = sizes;

	const [hoveredYear, setHoveredYear] = useState<string | undefined>(undefined);

	const onMouseEnterHandler = (
		e: MouseEvent<SVGRectElement, globalThis.MouseEvent>,
	) => {
		const parentDiv = parentRef.current;
		if (!parentDiv || !parentDiv.contains(e.currentTarget)) {
			return;
		}

		setHoveredYear(e.currentTarget.dataset.year);
	};

	const mouseClickHandler = (
		e: MouseEvent<SVGRectElement, globalThis.MouseEvent>,
	) => {
		onMouseEnterHandler(e);
	};

	useMouseLeave(parentRef, () => setHoveredYear(undefined));

	const legendColors = [
		"bg-xhain-blue-30",
		"bg-xhain-blue-40",
		"bg-xhain-blue-50",
	];

	return (
		<>
			{eevTotalMwh.map((d) => (
				<React.Fragment key={d.year}>
					<rect
						x={xScale(setYear(new Date(), d.year)) - 0.5}
						y={yScale(d.heating_mwh) - bottom + top}
						width={1}
						height={sizes.height - yScale(d.heating_mwh) - top}
						fill={hoveredYear === d.year.toString() ? "black" : "transparent"}
						opacity={0.5}
						data-year={d.year}
						stroke="transparent"
						strokeWidth={70}
						onMouseEnter={onMouseEnterHandler}
						onClick={mouseClickHandler}
					/>
					<foreignObject
						transform={`translate(${getTranslateX({ xScale, d, sizes })}, 0)`}
						width="100"
						height="150"
						className={`${hoveredYear === d.year.toString() ? "block" : "hidden"}`}
					>
						<div className="bg-white rounded-5px flex flex-col p-2">
							<span className="font-semibold">{d.year}</span>
							{[d.heating_mwh, d.electricity_mwh, d.fuels_mwh].map((mwh, i) => (
								<span key={mwh} className="flex items-center gap-x-1">
									<div className={`rounded-xs size-4 ${legendColors[i]}`} />
									{`${formatNumber(mwh / 1_000_000, { toFixed: 1 })} Mio.`}
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
	xScale: HoverableBarsProps["xScale"];
	d: (typeof eevTotalMwh)[0];
	sizes: HoverableBarsProps["sizes"];
}) {
	const translateX = xScale(setYear(new Date(), d.year));

	// if the tooltip is too close to the right border, move it a bit to the left
	if (translateX < 0 || translateX >= sizes.width - 80) {
		return translateX - 80;
	}

	return translateX + 10;
}
