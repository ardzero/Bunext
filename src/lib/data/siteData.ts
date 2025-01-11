import type { TSiteData, TtwitterMetaData, TMetadataIcons } from '@/types'

// edit the webmanifest file in /public to change the name, short_name, and icons in android
// in webmanifest, theme_color is the color of the app icon's background and
export const siteData: TSiteData = {
  favicon: '/favicon.svg', // .svg / .ico / .png
  name: 'BUNEXT - Next.js 15 Bun Starter',
  shortName: 'BUNEXT',
  publisher: 'bunext.ardastroid.com',
  baseUrl: 'bunext.ardastroid.com',
  description:
    'BUNEXT is a Next.js 15 Bun Starter with Shadcn UI, Tailwind CSS, TypeScript, Zod, React Hook Form, React Email, Resend, and React Hot Toast.',
  ogImage: { src: '/ogImage.webp', alt: 'Bunext', width: 1200, height: 630 },
  metadata_color: {
    light: '#fbf0df',
    dark: '#fbf0df',
  },
  author: {
    name: 'ardastroid',
    url: 'https://ardastroid.com/',
  },
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Bun',
    'Shadcn UI',
    'TypeScript',
    'Zod',
    'React Hook Form',
    'React Email',
    'Resend',
    'React Hot To	ast',
  ],

  robotsDefault: 'index, follow', // { index: false, follow: false }
}

export const twitterMetaData: TtwitterMetaData = {
  card: 'summary_large_image',
  title: siteData.name,
  description: siteData.description,
  images: siteData.ogImage.src,
  creator: '@darkidop', //twitter username of author
}

// By default, it uses the favicon mentioned at the top
export const icons: TMetadataIcons = {
  icon: siteData.favicon, // "/favicon.svg",
  shortcut: siteData.favicon, // "/favicon-16x16.png",
  apple: siteData.favicon, // "/apple-touch-icon.png",
}
