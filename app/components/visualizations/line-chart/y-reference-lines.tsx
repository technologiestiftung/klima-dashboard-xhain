import React from "react";
import * as d3 from "d3";
import { formatNumber } from "~/i18n/i18n-utils";

interface YReferenceLinesProps {
	yScale: d3.ScaleLinear<number, number, never>;
	sizes: {
		width: number;
		height: number;
		margin: { top: number; right: number; bottom: number; left: number };
	};
}

const firstYReferenceLineValue = 2_000_000;
const secondYReferenceLineValue = 1_000_000;

export const YReferenceLines: React.FC<YReferenceLinesProps> = ({
	yScale,
	sizes,
}) => {
	const {
		width,
		margin: { right },
	} = sizes;

	return (
		<>
			{[firstYReferenceLineValue, secondYReferenceLineValue].map(
				(yReferenceLineValue) => (
					<React.Fragment key={yReferenceLineValue}>
						<line
							x1={sizes.margin.left}
							y1={
								yScale(yReferenceLineValue) +
								sizes.margin.top -
								sizes.margin.bottom
							}
							x2={width - right}
							y2={
								yScale(yReferenceLineValue) +
								sizes.margin.top -
								sizes.margin.bottom
							}
							stroke={"black"}
							strokeWidth={1}
						/>
						<text
							x={width - right - 10}
							y={
								yScale(yReferenceLineValue) +
								sizes.margin.top -
								sizes.margin.bottom +
								15
							}
							textAnchor="end"
							fill="black"
							fontSize="16px"
							fontFamily={"Raleway"}
						>
							{formatNumber(yReferenceLineValue)}
						</text>
					</React.Fragment>
				),
			)}
		</>
	);
};
