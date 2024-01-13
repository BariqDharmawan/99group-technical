import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			height: {
				"70": "272px",
			},
			colors: {
				pink: "#FF72B6",
				"pink-700": "#CE367F",
				"neutral-100": "#787D9C",
				"neutral-300": "#1A2258",
				"blue-300": "#98BAFC",
				"blue-600": "#1757D7",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
export default config;
