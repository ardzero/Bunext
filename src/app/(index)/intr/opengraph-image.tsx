import { generateOgImage } from '@/lib/utils/ogImageGenerator'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Bunext'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return generateOgImage({
    title: 'Bunext',
    subtitle: 'Next.js 15 Bun Starter',
    // You can customize these options or use the defaults
    // primaryColor: '#7ceb5a',
    // secondaryColor: '#ffffff',
    // bgGradientFrom: '#0a192f',
    // bgGradientTo: '#0f2e1f',
  })
}
