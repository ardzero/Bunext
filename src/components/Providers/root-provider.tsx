import { FEATURE_FLAGS } from '@/lib/config/featureflags'

import { ThemeProvider } from '@/components/Providers/theme-provider'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from '@/components/ui/toaster'

export function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NuqsAdapter>
        <ThemeProvider disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </NuqsAdapter>
    </>
  )
}
