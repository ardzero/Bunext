import type { LucideIcon } from 'lucide-react'
import type { ImageProps } from 'next/image'
import type * as React from 'react'

type OmittedImageProps = 'height' | 'width' | 'srcSet' | 'placeholder' | 'alt'
type ModifiedImageProps = Partial<{
  alt: string
  width: number
  height: number
  placeholder: 'blur' | 'color' | 'shimmer' | 'empty' | `data:image/${string}`
}>
export type ImgProps = ModifiedImageProps &
  Omit<ImageProps, OmittedImageProps> &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, OmittedImageProps>

export type TLink = {
  label: string
  href: string
  Icon?: LucideIcon | React.ComponentType<React.HTMLAttributes<SVGElement>>
  external?: boolean
}

export type Author = {
  name: string
  url: string
}
export type TImage = {
  src: string
  alt: string
  width?: number
  height?: number
}
// nav data
export type TnavData = {
  logo?: TImage
  showTitle: boolean
  title: string
  links: TLink[]
  iconButtons: TLink[]
}
type TSimpleFooterText = {
  pretext: string
  label: string
  url: string
}
export type TSimpleFooterData = {
  texts: TSimpleFooterText[]
  socialLinks: TLink[]
}

export type MetadataColor = {
  light: string
  dark: string
}
// site data types
export type TSiteData = {
  favicon: string
  name: string
  shortName: string
  publisher: string
  baseUrl: string
  description: string
  ogImage: TImage
  metadata_color: MetadataColor
  author: Author
  keywords: string[]
  robotsDefault: string
}
export type TtwitterMetaData = {
  card: 'summary_large_image'
  title: string
  description: string
  images: string
  creator: string
}
export type TMetadataIcons = {
  icon: string
  shortcut: string
  apple: string
}
