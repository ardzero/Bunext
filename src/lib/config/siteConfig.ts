import type { Metadata, Viewport } from 'next';
import type { StaticImageData } from 'next/image';


import { siteData as siteD } from '@/lib/data/siteData';
import packageJson from '../../../package.json';



// gets the full remote url
export const remoteUrl = `https://${siteD.baseUrl?.toLowerCase()}`;

export const viewportData: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: siteD.themeColorLight },
        { media: '(prefers-color-scheme: dark)', color: siteD.themeColorDark },
    ],
}
// Metadata
const favicon = siteD.favicon || packageJson.icon;

export const siteMetaData: Metadata = {
    robots: "index, follow", //  { index: false, follow: false }
    publisher: siteD.publisher,
    title: siteD.name,
    description: siteD.description,

    openGraph: {
        type: "website",
        url: remoteUrl,
        siteName: siteD.baseUrl,
        title: siteD.name,
        description: siteD.description,
        images: {
            url: siteD.ogImage,
            width: 1200,
            height: 630,
        },
    },
    twitter: {
        card: "summary_large_image",
        site: "@" + siteD.publisher,
        images: siteD.ogImage,
    },
    alternates: {
        canonical: remoteUrl,
    },
    icons: {
        icon: favicon,
        shortcut: favicon,
        apple: favicon,
    },
}

type TgetCustomMetaData = {
    title: string;
    url?: string;
    titleSuffix?: boolean;
    shortSuffix?: boolean;
    ogTitleSuffix?: boolean;
    longogTitleSuffix?: boolean;
    ogImage?: string | StaticImageData;
    robots?: "index, follow" | "noindex, nofollow";
}

export function getCustomMetaData({
    title,
    url,
    titleSuffix = true,
    shortSuffix,
    ogTitleSuffix = true,
    longogTitleSuffix,
    ogImage,
    robots = "index, follow",
}: TgetCustomMetaData) {

    const suffix = shortSuffix ? siteD.shortName : siteD.name;
    const customTitle = titleSuffix ? title + " / " + suffix : title;

    const ogSuffix = longogTitleSuffix ? siteD.name : siteD.shortName;
    const ogTitle = ogTitleSuffix ? title + " / " + ogSuffix : title;

    const md: Metadata = {
        robots: robots, //  { index: false, follow: false }
        publisher: siteD.publisher,
        title: customTitle,
        description: siteD.description,

        openGraph: {
            type: "website",
            url: url || remoteUrl,
            siteName: siteD.baseUrl,
            title: ogTitle,
            description: siteD.description,
            images: {

                url: typeof ogImage === "string" ? ogImage : ogImage?.src || siteD.ogImage,
                width: 1200,
                height: 630,
            },
        },
        twitter: {
            card: "summary_large_image",
            site: "@" + siteD.publisher,
            images: typeof ogImage === "string" ? ogImage : ogImage?.src || siteD.ogImage,
        },
        alternates: {
            canonical: remoteUrl,
        },
        icons: {
            icon: favicon,
            shortcut: favicon,
            apple: favicon,
        },
    }
    return md
}