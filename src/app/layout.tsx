import type { Metadata, Viewport } from "next";
import { siteMetaData, viewportData } from "@/lib/config/siteConfig";
import { fonts } from "@/styles/tailwind/fonts";
import "@/styles/globals.css";
import "@/styles/customGlobal.css";

export const metadata: Metadata = siteMetaData;
export const viewport: Viewport = viewportData;

import { RootProvider } from "@/components/Providers/root-provider";
import { FeatureFlag } from "@/components/utils/featureFlag";

import { cn } from "@/lib/utils";
// components
import { ModeSelector } from "@/components/ui/themeSelector";
import { SiteHeader } from "@/components/navigation/site-header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"page-transition-easing flex min-h-screen flex-col font-sans",
					fonts,
				)}
			>
				<RootProvider>
					<div data-wrapper="" className="border-border/40 dark:border-border">
						<div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
							<SiteHeader />
							<main className="flex-1">{children}</main>
						</div>
					</div>
					<FeatureFlag featureFlag={["NEXT_THEME", "THEME_BUTTON"]}>
						<ModeSelector className="fixed right-2 bottom-2 z-[1005] " />
					</FeatureFlag>
				</RootProvider>
			</body>
		</html>
	);
}
