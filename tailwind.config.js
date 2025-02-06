import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Raleway", "sans-serif"],
			},
			screens: {
				desktop: "1150px",
				xl: "1363px",
				"2xl": "1440px",
			},
			height: {
				singleCard: "470px",
				doubleCard: "960px",
			},
			borderRadius: {
				"4xl": "30px",
				"2.5xl": "20px",
				"10px": "10px",
				"15px": "15px",
				"5px": "5px",
				xs: "1px",
			},
			outlineOffset: {
				5: "5px",
			},
			outlineWidth: {
				3: "3px",
			},
			maxWidth: {
				"8xl": "1411px",
				mobile: "640px",
			},
			colors: {
				"xhain-blue-80": "#070D24",
				"xhain-blue-70": "#112057",
				"xhain-blue-60": "#2645BF", // quatery
				"xhain-blue-50": "#3054F3", // primary
				"xhain-blue-40": "#6583FF", // tertiary
				"xhain-blue-30": "#B2C5FF", // secondary
				"xhain-blue-20": "#E5ECFF",
				"xhain-blue-10": "#F5F8FF", // background
				"xhain-green-80": "#395624",
				"xhain-green-70": "#527C34", // quatery
				"xhain-green-60": "#82C853", // tertiary
				"xhain-green-50": "#99EE63", // primary
				"xhain-green-40": "#BEF49B",
				"xhain-green-30": "#D7F9C2", // secondary
				"xhain-green-20": "#F2FDEA", // background
				"xhain-green-10": "#F9FFF5",
				"xhain-red-80": "#E80862", // alert
			},
			keyframes: {
				shimmer: {
					"100%": { transform: "translateX(100%)" },
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, theme }) {
			const allColors = theme("colors"); // Get all colors from the theme (default + custom)

			// Define the focus utilities for each color
			const focusOutlineUtilities = Object.keys(allColors).reduce(
				(acc, color) => {
					// Filter for valid color formats (e.g., hex, rgb, etc.)
					const colorValue = allColors[color];
					if (typeof colorValue === "string") {
						acc[`.focus-${color}`] = {
							"&:focus": {
								outline: "3px solid",
								outlineOffset: "5px",
								outlineColor: colorValue,
								textDecoration: "transparent",
								position: "relative",
								zIndex: 2,
							},
						};
					}
					return acc;
				},
				{},
			);

			// Add the generated utilities to Tailwind CSS
			addUtilities(focusOutlineUtilities, ["responsive", "hover"]);
			addUtilities({
				/* Hide scrollbar for Chrome, Safari and Opera */
				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},

				/* Hide scrollbar for IE, Edge and Firefox */
				".no-scrollbar": {
					/* IE and Edge */
					"-ms-overflow-style": "none",

					/* Firefox */
					"scrollbar-width": "none",
				},
			});
		}),
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
};
