// edit the webmanifest file in /public to change the name, short_name, and icons in android
// in webmanifest, theme_color is the color of the app icon's background and
export const siteData = {
	favicon: "/favicon.svg", // .svg / .ico / .png
	name: "BUNEXT - Next.js 15 Bun Starter",
	shortName: "BUNEXT",
	publisher: "bunextt.vercel.app",
	baseUrl: "bunextt.vercel.app",
	description:
		"BUNEXT is a Next.js 15 Bun Starter with Shadcn UI, Tailwind CSS, TypeScript, Zod, React Hook Form, React Email, Resend, and React Hot Toast.",
	ogImage: "/ogImage.webp",
	metadata_color: {
		light: "#fbf0df",
		dark: "#fbf0df",
	},
	author: {
		name: "darkidop",
		url: "https://zeneticesports.com/darkid",
	},
	keywords: [
		"Next.js",
		"React",
		"Tailwind CSS",
		"Bun",
		"Shadcn UI",
		"TypeScript",
		"Zod",
		"React Hook Form",
		"React Email",
		"Resend",
		"React Hot To	ast",
	],

	robotsDefault: "index, follow", // { index: false, follow: false }
};

export const twitterMetaData = {
	card: "summary_large_image",
	title: siteData.name,
	description: siteData.description,
	images: siteData.ogImage,
	creator: "@darkidop", //twitter username of author
};

// By default, it uses the favicon mentioned at the top
export const icons = {
	icon: siteData.favicon, // "/favicon.svg",
	shortcut: siteData.favicon, // "/favicon-16x16.png",
	apple: siteData.favicon, // "/apple-touch-icon.png",
};
