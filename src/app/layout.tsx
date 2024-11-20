import { fonts } from "@/styles/tailwind/fonts";
import type { Metadata, Viewport } from "next";
import { siteMetaData, viewportData } from "@/lib/config/siteConfig";
import "@/styles/globals.css";

export const metadata: Metadata = siteMetaData;
export const viewport: Viewport = viewportData;

import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col font-sans", fonts)}>
        {children}
      </body>
    </html>
  );
}
