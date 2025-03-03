import type { Metadata, Viewport } from 'next'
import { siteMetaData, viewportData } from '@/lib/config/siteConfig'
// metadata
export const metadata: Metadata = siteMetaData
export const viewport: Viewport = viewportData
// css
import '@/styles/globals.css'
import '@/styles/customGlobal.css'
// utilities
import { cn } from '@/lib/utils'
import { fonts } from '@/styles/fonts'
// providers
import { RootProvider } from '@/components/Providers/root-provider'
// components
import { SiteHeader } from '@/components/navigation/site-header'
import { FeatureFlag } from '@/components/utils/featureFlag'
import { ModeSelector } from '@/components/ui/themeSelector'
import { SimpleFooter } from '@/components/navigation/footer'
import { ScrollToTopButton } from '@/components/utils/TopButton'
// import { Suspense } from "react";
// import Loading from "./loading";
// import ErrorWrapper from "./error-wrapper";
// this is used to simulate an error in the production environment to check global error handling

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <head>
        <script src="//unpkg.com/react-scan/dist/auto.global.js" async />
      </head> */}
      <body className={cn('page-transition-easing font-sans', fonts)}>
        <RootProvider>
          <div data-wrapper="" className="">
            <div className="border-border/40 dark:border-border mx-auto flex min-h-screen w-full flex-col min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
              <SiteHeader />
              <main className="flex-1">
                {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
                {children}
              </main>
              <SimpleFooter className="mt-auto" />
            </div>
          </div>
          {/* checks if theme and theme button feature flags are enabled */}
          <FeatureFlag featureFlag={['NEXT_THEME', 'THEME_BUTTON']}>
            <ModeSelector
              className="fixed right-2 bottom-2 z-50"
              iconClassName="size-3"
            />
          </FeatureFlag>
          <ScrollToTopButton className="fixed right-4 bottom-12" />
        </RootProvider>
      </body>
    </html>
  )
}
