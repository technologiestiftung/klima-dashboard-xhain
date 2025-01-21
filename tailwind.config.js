import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Raleway", "sans-serif"],
			},
			borderRadius: {
				"4xl": "30px",
				"2.5xl": "20px",
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
				lg: "1411px",
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
			},
			keyframes: {
				shimmer: {
					"100%": { transform: "translateX(100%)" },
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
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
