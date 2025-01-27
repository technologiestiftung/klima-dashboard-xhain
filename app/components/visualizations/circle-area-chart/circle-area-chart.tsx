import React, { useMemo } from "react";
import * as d3 from "d3";
import { howXhainContributesData } from "~/data";
import {
	xhainBlue80,
	xhainGreen30,
	xhainGreen50,
	xhainGreen60,
} from "~/components/visualizations/colors";
import { formatNumber, i18n } from "~/i18n/i18n-utils";

const { thgTotalTons } = howXhainContributesData;

interface CircleAreaChartProps {
	width: number;
	height: number;
	year: number;
}

const circleColors: Record<
	"electricity_tons" | "heating_tons" | "fuels_tons",
	string
> = {
	electricity_tons: xhainGreen50,
	heating_tons: xhainGreen60,
	fuels_tons: xhainGreen30,
};

export const CircleAreaChart: React.FC<CircleAreaChartProps> = ({
	width,
	height,
	year,
}) => {
	const dataSelectedYear = useMemo(
		() => thgTotalTons.find((d) => d.year === year),
		[year],
	);

	if (!dataSelectedYear) {
		return <p>No data available for {year}</p>;
	}

	// Convert values to numbers and prepare data entries
	const entries = useMemo(() => {
		return Object.entries(dataSelectedYear)
			.filter(([key]) => key !== "year")
			.map(([key, value]) => ({ key, value: Number(value) }));
	}, [dataSelectedYear]) as {
		key: keyof Omit<typeof dataSelectedYear, "year">;
		value: number;
	}[];

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
			{circles.map(({ key, value, x, y, r }, index) => (
				<g key={index}>
					<circle cx={x + 20} cy={y} r={r} fill={circleColors[key]} />
					<text
						x={x + 20}
						y={y - 10}
						textAnchor="middle"
						fontSize="16px"
						fontWeight="bold"
						fill={xhainBlue80}
					>
						{i18n(`chart.thgTotalTons.keys.${key}`)}
					</text>
					<text
						x={x + 20}
						y={y + 10}
						textAnchor="middle"
						fontSize="16px"
						fill={xhainBlue80}
					>
						{formatNumber(value)}
					</text>
				</g>
			))}
		</svg>
	);
};
