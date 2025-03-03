import { GenerateImage } from '@/lib/utils/ogImageGenerator'

export const runtime = 'edge'

export const alt = 'Bunext'
export const contentType = 'image/png'

export const size = {
  width: 1200,
  height: 630,
}

// Image generation
export default async function Image() {
  return await GenerateImage({
    title: 'Bunext',
    description: 'Next.js 15 Bun Starter',
  })
}
