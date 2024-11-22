import { Icons } from "@/components/utils/icons";
export const footerData = {
	company: {
		logo: "/fac",
		name: "Bunext",
		description: "",
	},
	sections: [
		{
			title: "Useful Links",
			links: [
				{ label: "Privacy Policy", url: "/privacy-policy" },
				{ label: "Terms of Use", url: "/terms-of-use" },
				{ label: "Contact Us", url: "/contact" },
			],
		},
		{
			title: "Contact info",
			links: [
				{ label: "Email", url: "mailto:support@zen.com" },
				{ label: "Phone", url: "tel:+1234567890" },
				{ label: "Address", url: "1234 Main St, Anytown, USA" },
			],
		},
	],
	bottom: {
		copyright: `© ${new Date().getFullYear()}`, // © 2024
		copyrightLink: {
			label: "Zenetic Esports",
			url: "https://zeneticesports.com/",
		},
		otherLinks: [{ label: "Privacy Policy", url: "/privacy-policy" }],
		socialLinks: [
			{
				platform: "Facebook",
				icon: "ri:facebook-fill",
				url: "https://www.facebook.com",
			},
			{
				platform: "YouTube",
				icon: "basil:youtube-solid",
				url: "https://www.youtube.com",
			},
			{
				platform: "LinkedIn",
				icon: "basil:linkedin-solid",
				url: "https://www.linkedin.com",
			},
			{
				platform: "Instagram",
				icon: "basil:instagram-outline",
				url: "https://www.instagram.com",
			},
			{
				platform: "X (formerly Twitter)",
				icon: "hugeicons:new-twitter",
				url: "https://www.twitter.com",
			},
		],
	},
};
export const simpleFooterData = {
	texts: [
		{
			pretext: "Built by",
			label: "Farhan Ashhab Nur (@darkidop)",
			url: "https://github.com/darkidop",
		},
		{
			pretext: "The source code is available on",
			label: "GitHub",
			url: "https://github.com/DarkidOP/Bunext",
		},
	],
	socialLinks: [
		{ lable: "Github", icon: Icons.gitHub, url: "https://github.com/darkidop" },
	],
};
