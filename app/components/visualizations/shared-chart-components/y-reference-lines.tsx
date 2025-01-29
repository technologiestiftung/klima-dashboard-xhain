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
	yReferenceLineValues: number[];
	lineColor?: string;
	alternateLabels?: boolean;
	x1Offset?: number;
	x2Offset?: number;
}

export const YReferenceLines: React.FC<YReferenceLinesProps> = ({
	yScale,
	sizes,
	yReferenceLineValues,
	lineColor = "black",
	alternateLabels = false,
	x1Offset = 0,
	x2Offset = 3,
}) => {
	const {
		width,
		margin: { right },
	} = sizes;

	return (
		<>
			{yReferenceLineValues.map((yReferenceLineValue, index) => (
				<React.Fragment key={yReferenceLineValue}>
					<line
						x1={sizes.margin.left - x1Offset}
						y1={
							yScale(yReferenceLineValue) +
							sizes.margin.top -
							sizes.margin.bottom
						}
						x2={width - x2Offset}
						y2={
							yScale(yReferenceLineValue) +
							sizes.margin.top -
							sizes.margin.bottom
						}
						stroke={lineColor}
						strokeWidth={1}
					/>
					{(!alternateLabels || (index > 0 && index % 2 === 0)) && (
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
					)}
				</React.Fragment>
			))}
		</>
	);
};
