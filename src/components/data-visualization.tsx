// placeholder visualization for d3 check
import React, { useMemo } from "react";
import * as d3 from "d3";

interface DataEntry {
	year: string;
	heating_mwh: string;
	electricity_mwh: string;
	fuels_mwh: string;
}

interface DataVisualizationProps {
	data: DataEntry[];
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
	// Filter data for the year 2022
	const year2022 = useMemo(() => data.find((d) => d.year === "2022"), [data]);

	if (!year2022) {
		return <p>No data available for 2022</p>;
	}

	// Convert values to numbers and prepare data entries
	const entries = useMemo(() => {
		return Object.keys(year2022)
			.filter((key) => key !== "year")
			.map((key) => ({
				key: key
					.replace("_mwh", "")
					.replace("_tons", "")
					.replace(/_/g, " ")
					.replace(/\b\w/g, (l) => l.toUpperCase()),
				value: +year2022[key as keyof DataEntry],
			}));
	}, [year2022]);

	// SVG dimensions
	const width = 460;
	const height = 460;

	// D3 color scale
	const color = d3
		.scaleOrdinal<string>()
		.domain(["Heating", "Electricity", "Fuels"])
		.range(d3.schemeSet1);

	// D3 size scale
	const size = d3
		.scaleLinear()
		.domain([0, d3.max(entries, (d) => d.value) || 1])
		.range([30, 100]);

	// Create nodes with initial positions and random jitter
	const nodes = entries.map((d) => ({
		...d,
		r: size(d.value),
		x: width / 2 + Math.cos(d.value),
		y: height / 2 + Math.sin(d.value),
	}));

	// Use D3 force simulation to avoid overlaps and spread nodes naturally
	useMemo(() => {
		const simulation = d3
			.forceSimulation(nodes)
			.force("center", d3.forceCenter(width / 2, height / 2))
			.force(
				"collide",
				d3.forceCollide().radius((d) => d.r + 2),
			)
			.force("x", d3.forceX(width / 2).strength(0.1))
			.force("y", d3.forceY(height / 2).strength(0.1))
			.stop();

		for (let i = 0; i < 300; i++) {
			simulation.tick();
		}
	}, [nodes, width, height]);

	return (
		<svg width={width} height={height} style={{ background: "#f9f9f9" }}>
			{nodes.map((d, index) => (
				<g key={index}>
					<circle
						cx={d.x}
						cy={d.y}
						r={d.r}
						fill={color(d.key)}
						fillOpacity={0.7}
						stroke="black"
						strokeWidth={1}
					/>
					<text
						x={d.x}
						y={d.y + 5}
						textAnchor="middle"
						fontSize="14px"
						fill="#333"
					>
						{d.key}
					</text>
				</g>
			))}
		</svg>
	);
};

export default DataVisualization;
