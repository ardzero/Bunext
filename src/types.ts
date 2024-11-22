import type { LucideIcon } from "lucide-react";

export type TLink = {
    label: string;
    href: string;
    Icon?: LucideIcon | React.ComponentType<React.HTMLAttributes<SVGElement>>;
    external?: boolean;
};
export type TnavData = {
    title: string;
    links: TLink[];
    iconButtons: TLink[];
};
export type Author = {
    name: string;
    url: string;
};

type TSimpleFooterText = {
    pretext: string;
    label: string;
    url: string;
};
export type TSimpleFooterData = {
    texts: TSimpleFooterText[];
    socialLinks: TLink[];
};

export type MetadataColor = {
    light: string;
    dark: string;
};
// site data types
export type TSiteData = {
    favicon: string;
    name: string;
    shortName: string;
    publisher: string;
    baseUrl: string;
    description: string;
    ogImage: string;
    metadata_color: MetadataColor;
    author: Author;
    keywords: string[];
    robotsDefault: string;
};
export type TtwitterMetaData = {
    card: "summary_large_image";
    title: string;
    description: string;
    images: string;
    creator: string;
};
export type TMetadataIcons = {
    icon: string;
    shortcut: string;
    apple: string;
};

