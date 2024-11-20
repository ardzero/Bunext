import type { Metadata, Viewport } from "next";
import { siteMetaData, viewportData } from "@/lib/config/siteConfig";
// import { fonts } from "@/lib/config/fonts";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";

// fonts
// import { Inter } from "next/font/google";
// import localFont from "next/font/local";
// const fontSans = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });
// const ClashDisplay = localFont({
//   src: [
//     {
//       path: "./fonts/ClashDisplay-Extralight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "./fonts/ClashDisplay-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./fonts/ClashDisplay-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/ClashDisplay-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./fonts/ClashDisplay-Semibold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./fonts/ClashDisplay-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-clash-display",
// });

export const metadata: Metadata = siteMetaData;
export const viewport: Viewport = viewportData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col font-sans")}>
        {children}
      </body>
    </html>
  );
}
