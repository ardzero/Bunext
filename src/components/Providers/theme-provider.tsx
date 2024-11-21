"use client";

import { FEATURE_FLAGS } from "@/lib/config/featureflags";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";
export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	if (!FEATURE_FLAGS.NEXT_THEME) return <>{children}</>;
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
