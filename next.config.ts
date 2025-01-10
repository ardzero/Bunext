import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "v0.dev", pathname: "/placeholder.svg" },
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	compiler:
		process.env.NODE_ENV === 'production' ? { removeConsole: true } : {},
};

export default nextConfig;
