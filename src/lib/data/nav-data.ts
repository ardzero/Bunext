import { Icons } from "@/components/utils/icons";
import { siteData } from "@/lib/data/siteData";
export const navData = {
	title: siteData.shortName,
	links: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Contact",
			href: "/contact",
		},
	],
	iconButtons: [
		{
			label: "GitHub",
			href: "https://github.com/darkidop",
			icon: Icons.gitHub,
		},
	],
};
