import { Roboto as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
})

const ClashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
})

// array of fonts
export const fontList = [fontSans, ClashDisplay]
// add font variable names to tailwind.config.ts aswell

// Export class names for root layout
export const fonts = fontList.map((font) => font.variable).join(' ')
