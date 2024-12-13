"use client";

import { FEATURE_FLAGS } from "@/lib/config/featureflags";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

type Theme = "light" | "dark" | "system";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const defaultTheme = FEATURE_FLAGS.DEFAULT_THEME as Theme;
  if (!FEATURE_FLAGS.NEXT_THEME) return <>{children}</>;
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      enableSystem={defaultTheme === "system"}
      attribute="class"
      disableTransitionOnChange
      enableColorScheme={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
