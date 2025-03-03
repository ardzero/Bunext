import type { Metadata, Viewport } from 'next'
import type { StaticImageData } from 'next/image'

import { icons, siteData, twitterMetaData as twData } from '@/lib/data/siteData'
import packageJson from '../../../package.json'

// gets the full remote url
export const remoteUrl = siteData.baseUrl?.startsWith('https://')
  ? siteData.baseUrl
  : `https://${siteData.baseUrl?.toLowerCase()}`

export const viewportData: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: siteData.metadata_color.light,
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: siteData.metadata_color.dark,
    },
  ],
}
// Metadata

export const siteMetaData: Metadata = {
  // title: {
  // 	default: siteData.name,
  // 	template: `%s / ${siteData.name}`,
  // },
  title: siteData.name,
  description: siteData.description,
  robots: siteData.robotsDefault, //  { index: false, follow: false }
  publisher: siteData.publisher,
  metadataBase: new URL(remoteUrl),
  keywords: siteData.keywords,
  authors: [
    {
      name: siteData.author.name,
      url: siteData.author.url,
    },
  ],
  creator: siteData.author.name,
  // og metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: remoteUrl,
    siteName: siteData.baseUrl,
    title: siteData.name,
    description: siteData.description,
    images: [
      {
        url: siteData.ogImage.src,
        width: siteData.ogImage.width,
        height: siteData.ogImage.height,
        alt: siteData.ogImage.alt,
      },
    ],
  },
  // twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: twData.title,
    description: twData.description,
    site: `@${siteData.publisher}`,
    images: [twData.images],
    creator: twData.creator,
  },
  alternates: {
    canonical: remoteUrl,
  },

  icons: icons,
  manifest: `${remoteUrl}/site.webmanifest`,
}

type TAuthor = {
  name: string
  url: string
}
type TgetCustomMetaData = {
  title: string
  description?: string
  publisher?: string
  url?: string
  keywords?: string[]
  authors?: TAuthor[]
  creator?: string
  twCreator?: string
  titleSuffix?: boolean
  shortSuffix?: boolean
  ogTitleSuffix?: boolean
  longogTitleSuffix?: boolean
  ogImage?: string | StaticImageData
  robots?: 'index, follow' | 'noindex, nofollow' | { index: boolean; follow: boolean }
}

// helpful for defining custom metadata for pages without clutter
export function getCustomMetaData({
  title,
  description,
  publisher,
  url,
  keywords,
  authors,
  creator,
  twCreator,
  titleSuffix = true,
  shortSuffix,
  ogTitleSuffix = true,
  longogTitleSuffix,
  ogImage,
  robots = 'index, follow',
}: TgetCustomMetaData) {
  const suffix = shortSuffix ? siteData.shortName : siteData.name
  const customTitle = titleSuffix ? `${title} / ${suffix}` : title

  const ogSuffix = longogTitleSuffix ? siteData.name : siteData.shortName
  const ogTitle = ogTitleSuffix ? `${title} / ${ogSuffix}` : title

  const md: Metadata = {
    title: customTitle,
    description: description || siteData.description,

    robots: robots || siteData.robotsDefault, //  { index: false, follow: false }
    publisher: publisher || siteData.publisher,
    metadataBase: new URL(url || remoteUrl),
    keywords: keywords || siteData.keywords,
    authors: authors || [
      {
        name: siteData.author.name,
        url: siteData.author.url,
      },
    ],
    creator: creator || siteData.author.name,
    // og metadata
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: url || remoteUrl,
      siteName: siteData.baseUrl,
      title: ogTitle,
      description: description || siteData.description,
      images: {
        url:
          typeof ogImage === 'string'
            ? ogImage
            : ogImage?.src || siteData.ogImage.src,
        width: siteData.ogImage.width,
        height: siteData.ogImage.height,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: twData.title,
      description: twData.description,
      site: `@${publisher || siteData.publisher}`,
      images:
        typeof ogImage === 'string'
          ? ogImage
          : ogImage?.src || siteData.ogImage.src,
      creator: twCreator || twData.creator,
    },
    alternates: {
      canonical: remoteUrl,
    },
    icons: icons,
    manifest: `${remoteUrl}/site.webmanifest`,
  }
  return md
}
