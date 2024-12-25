import type { Config } from "tailwindcss";
// plugins
import tailwindcssAnimate from "tailwindcss-animate";
// @ts-expect-error doesn't have ts types yet
import tailwindcssMotion from "tailwindcss-motion";
// import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

// custom configs
import { fontFamily } from "tailwindcss/defaultTheme";
import { base } from "./src/styles/tailwind/base";
import { utilities } from "./src/styles/tailwind/tailwindUtils";

export default {
	darkMode: ["class"],
	content: {
		files: [
			"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		],
		// extract,
	},
	theme: {
		// screens, //fluid tailwind uncomment this to use fluid tailwind
		// fontSize, //fluid tailwind uncomment this to use fluid tailwind
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				lg: "2rem",
				xl: "3rem",
				"2xl": "4rem",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
			},
		},
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
				clash: ["var(--font-clashDisplay)", ...fontFamily.sans],
			},
		},
	},

	plugins: [
		tailwindcssAnimate,
		tailwindcssMotion,
		utilities,
		base,
		// fluid, //fluid tailwind uncomment this to use fluid tailwind
	],
} satisfies Config;
