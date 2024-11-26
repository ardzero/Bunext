import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "api.qrserver.com" },
			{ protocol: "https", hostname: "v0.dev" },
		],
	},
};

export default nextConfig;
