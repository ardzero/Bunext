import { fonts } from "@/styles/tailwind/fonts";
import type { Metadata, Viewport } from "next";
import { siteMetaData, viewportData } from "@/lib/config/siteConfig";
import "@/styles/globals.css";
import "@/styles/customGlobal.css";

export const metadata: Metadata = siteMetaData;
export const viewport: Viewport = viewportData;

import { cn } from "@/lib/utils";
import { RootProvider } from "@/components/Providers/root-provider";
import { ModeSelector } from "@/components/ui/themeSelector";
import { FeatureFlag } from "@/components/utils/featureFlag";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans page-transition-easing",
          fonts
        )}
      >
        <RootProvider>
          {children}
          <FeatureFlag featureFlag={["NEXT_THEME", "THEME_BUTTON"]}>
            <ModeSelector className="fixed right-2 bottom-2 z-[1005] " />
          </FeatureFlag>
        </RootProvider>
      </body>
    </html>
  );
}
