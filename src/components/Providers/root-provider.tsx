import { FEATURE_FLAGS } from "@/lib/config/featureflags";

import { ThemeProvider } from "@/components/Providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme={FEATURE_FLAGS.DEFAULT_THEME}
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
}
