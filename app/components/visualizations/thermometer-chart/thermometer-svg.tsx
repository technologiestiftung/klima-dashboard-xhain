import React from "react";
import { xhainBlue80 } from "../colors";

interface ThermometerSVGProps {
	celsius: number;
	maxTemperature: number;
	minTemperature: number;
}

const ThermometerSVG: React.FC<ThermometerSVGProps> = ({
	celsius,
	maxTemperature,
	minTemperature,
}) => {
	// Calculate the fill height based on temperature
	const calculateFillHeight = (temperature: number) =>
		((temperature - minTemperature) / (maxTemperature - minTemperature)) * 100;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="400"
			height="543"
			viewBox="0 0 410 543"
			className="h-[440px] md:h-[543px]"
		>
			<g transform="translate(148, 0)">
				{/* Fill Circle*/}
				<path
					d="M 53.5,489.769 m -31,0 a 31,31 0 1,0 62,0 a 31,31 0 1,0 -62,0"
					fill="var(--thermometer-color, #99EE63)"
				/>
				{/* Fill line */}
				<rect
					x="44.5"
					y={`${462 - calculateFillHeight(celsius) * 4}`}
					width="18"
					height={`${calculateFillHeight(celsius) * 4}`}
					fill="var(--thermometer-color, #99EE63)"
					className="transition-all duration-1000 ease-in-out"
				/>
				{/* Outer Shell */}
				<path
					d="M88.4833 448.442V35.5177C88.4833 16.2086 72.7905 0.5 53.5003 0.5C34.21 0.5 18.5172 16.2083 18.5172 35.5177V448.442C6.73803 458.635 0 473.329 0 488.947C0.0126671 518.474 24.0015 542.5 53.5 542.5C82.9985 542.5 107 518.475 107 488.947C107 473.327 100.262 458.633 88.4833 448.442ZM53.5003 537.204C26.9148 537.204 5.29623 515.562 5.29623 488.952C5.29623 474.499 11.6925 460.921 22.851 451.714C23.4589 451.207 23.8136 450.459 23.8136 449.673V35.5185C23.8136 19.1256 37.1378 5.79932 53.5034 5.79932C69.8801 5.79932 83.1932 19.1367 83.1932 35.5185V449.673C83.1932 450.459 83.5478 451.207 84.1558 451.714C95.3143 460.919 101.711 474.497 101.711 488.952C101.711 515.564 80.09 537.204 53.5065 537.204H53.5003Z"
					fill={xhainBlue80}
				/>
				{/* Inner Border */}
				<path
					d="M67.8179 457.358V44.6392C67.8179 36.8462 61.3913 30.5 53.4997 30.5C45.6081 30.5 39.1816 36.8463 39.1816 44.6392V457.371C26.4444 462.93 18 475.597 18 489.444C18 508.774 33.9247 524.5 53.5 524.5C73.0753 524.5 89 508.774 89 489.444C89 475.584 80.568 462.917 67.8179 457.358ZM53.4997 519.193C36.8811 519.193 23.3712 505.841 23.3712 489.441C23.3712 477.155 31.1857 465.973 42.8176 461.62C43.8587 461.226 44.5528 460.236 44.5528 459.145V44.6336C44.5528 39.7598 48.5629 35.7998 53.4984 35.7998C58.4339 35.7998 62.444 39.7598 62.444 44.6336V459.131C62.444 460.235 63.138 461.225 64.1791 461.606C75.811 465.96 83.6256 477.141 83.6256 489.427C83.6256 505.838 70.1171 519.19 53.4971 519.19L53.4997 519.193Z"
					fill={xhainBlue80}
				/>
				{/* Position line */}
				<path
					d={`M40 ${460 - calculateFillHeight(celsius) * 4}H115`}
					stroke={xhainBlue80}
					strokeWidth="4"
					className="transition-all duration-1000 ease-in-out"
				/>
				{/* Temperature Text with animated transform */}
				<g
					className="transition-all duration-1000 ease-in-out"
					transform={`translate(120, ${460 - calculateFillHeight(celsius) * 4})`}
				>
					<text className="text-5xl lg:text-6xl leading-none fill-current font-bold">
						{celsius.toFixed(1)}°
					</text>
				</g>
			</g>
		</svg>
	);
};

export default ThermometerSVG;
