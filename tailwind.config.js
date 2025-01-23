import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
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
