import { FEATURE_FLAGS } from "@/lib/config/featureflags";

import { ThemeProvider } from "@/components/Providers/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/toaster";

export function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NuqsAdapter>
        <ThemeProvider
          attribute="class"
          defaultTheme={FEATURE_FLAGS.DEFAULT_THEME}
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </NuqsAdapter>
    </>
  );
}
