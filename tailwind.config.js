/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Raleway", "sans-serif"],
			},
			borderRadius: {
				"4xl": "30px",
			},
			colors: {
				"xhain-blue-100": "#041728",
				"xhain-blue-70": "#3155F3",
				"xhain-blue-30": "#D6E0FF",
				"xhain-blue-10": "#F6F8FF",
				"xhain-green-70": "#99EE63",
				"xhain-green-50": "#CCF7AF",
				"xhain-green-30": "#F3FDEA",
				"xhain-orange-70": "#FF8552",
				"xhain-orange-60": "#FFA67D",
				"xhain-orange-30": "#FFE3D4",
				"xhain-orange-10": "#FFF9F5",
			},
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	},
};
