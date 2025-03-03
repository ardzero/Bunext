import NextImageComponent from 'next/image'
import type React from 'react'
import type { ImgProps } from '@/types'
import { cleanSrc, shimmer, svgToBase64 } from '@/lib/utils'
// auto generate placeholder image

function Img({ src, width, height, alt, ...props }: ImgProps) {
  return (
    <NextImageComponent
      width={width || 500}
      height={height || width || 300}
      alt={
        alt ||
        src.substring(src.lastIndexOf('/') + 1).slice(0, 20) ||
        'Picture Element'
      }
      src={cleanSrc(src as string)}
      draggable="false"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...(props as any)}
    />
  )
}

export const Image: React.FC<ImgProps> = ({ placeholder, ...props }) => {
  const imgComp: Record<string, React.ReactNode> = {
    blur: <BlurImg {...props} />,
    shimmer: (
      <Img
        {...props}
        placeholder={`data:image/svg+xml;base64,${svgToBase64(
          shimmer(500, 300)
        )}`}
        alt={props.alt || ''}
      />
    ),
  }
  return (
    (placeholder && imgComp[placeholder]) || (
      <Img placeholder={placeholder} {...props} alt={props.alt || ''} />
    )
  )
}

const BlurImg = async (props: ImgProps) => {
  const blurData = await import('@/actions/placeholder').then((f) =>
    f.getPlaceholderImage(props.src)
  )
  return (
    <Img
      placeholder="blur"
      blurDataURL={blurData}
      alt={props.alt || ''}
      {...props}
    />
  )
}
