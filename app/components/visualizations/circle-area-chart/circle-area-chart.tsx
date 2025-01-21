import React, { useMemo } from "react";
import * as d3 from "d3";
import { howXhainContributesData as allData } from "~/data";

interface CircleAreaChartProps {
	width: number;
	height: number;
	year: number;
}

const circleColors = {
	electricity: "#FF8552",
	heating: "#FFA67D",
	fuels: "#FFE3D4",
} as const;

export const CircleAreaChart: React.FC<CircleAreaChartProps> = ({
	width,
	height,
	year,
}) => {
	const data = allData.thgTotalTons;

	const dataSelectedYear = useMemo(
		() => data.find((d) => d.year === year),
		[data, year],
	);

	if (!dataSelectedYear) {
		return <p>No data available for {year}</p>;
	}

	// Convert values to numbers and prepare data entries
	const entries = useMemo(() => {
		return Object.keys(dataSelectedYear)
			.filter((key) => key !== "year")
			.map((key) => ({
				key: key.replace("_mwh", "").replace("_tons", "").replace(/_/g, " "),
				value: +dataSelectedYear[key as keyof typeof dataSelectedYear],
			}));
	}, [dataSelectedYear]);

	// D3 size scale
	const size = d3
		.scaleLinear()
		.domain([0, d3.max(entries, (d) => d.value) || 1])
		.range([width / 10, width / 4.5]);

	// Create nodes with initial positions and random jitter
	const circles = entries.map((d) => ({
		...d,
		r: size(d.value),
		x: width / 2 + Math.cos(d.key.length),
		y: height / 2 - Math.sin(d.key.length),
	}));

	// Use D3 force simulation to avoid overlaps and spread circles naturally
	useMemo(() => {
		const simulation = d3
			.forceSimulation(circles)
			.force("center", d3.forceCenter(width / 2, height / 2))
			.force(
				"collide",
				d3.forceCollide().radius((d) => (d as (typeof circles)[0]).r + 2),
			)
			.force("x", d3.forceX(width / 2).strength(0.2))
			.force("y", d3.forceY(height / 2).strength(0.2))
			.force("boundary", () => {
				circles.forEach((circle) => {
					circle.x = Math.max(circle.r, Math.min(width - circle.r, circle.x));
					circle.y = Math.max(circle.r, Math.min(height - circle.r, circle.y));
				});
			})
			.stop();

		// Run simulation for stable position of circles
		for (let i = 0; i < 300; i++) {
			simulation.tick();
		}
	}, [circles, width, height]);

	return (
		<svg width={width} height={height}>
			{circles.map((d, index) => (
				<g key={index}>
					<circle
						cx={d.x + 20}
						cy={d.y}
						r={d.r}
						fill={circleColors[d.key as keyof typeof circleColors]}
					/>
					<text
						x={d.x + 20}
						y={d.y - 10}
						textAnchor="middle"
						fontSize="16px"
						fontWeight="bold"
						fill="#333"
					>
						{d.key}
					</text>
					<text
						x={d.x + 20}
						y={d.y + 10}
						textAnchor="middle"
						fontSize="16px"
						fill="#333"
					>
						{d.value}
					</text>
				</g>
			))}
		</svg>
	);
};
