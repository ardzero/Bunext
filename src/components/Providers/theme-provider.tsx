"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FEATURE_FLAGS } from "@/lib/config/featureflags";
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  if (!FEATURE_FLAGS.NEXT_THEME) return <>{children}</>;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
