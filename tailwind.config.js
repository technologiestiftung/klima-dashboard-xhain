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
				"xhain-blue-100": "#041728",
				"xhain-blue-80": "#070D24",
				"xhain-blue-70": "#3155F3",
				"xhain-blue-50": "#3054F3",
				"xhain-blue-30": "#D6E0FF",
				"xhain-blue-10": "#F6F8FF",
				"xhain-green-70": "#99EE63",
				"xhain-green-60": "#82C853",
				"xhain-green-50": "#99EE63",
				"xhain-green-40": "#BEF49B",
				"xhain-green-30": "#D7F9C2",
				"xhain-green-20": "#F2FDEA",
				"xhain-orange-70": "#FF8552",
				"xhain-orange-60": "#FFA67D",
				"xhain-orange-30": "#FFE3D4",
				"xhain-orange-10": "#FFF9F5",
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
