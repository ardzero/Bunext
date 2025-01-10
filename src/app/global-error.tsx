"use client";
// https://nextjs.org/docs/app/building-your-application/routing/error-handling
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import "@/styles/customGlobal.css";
import { Metadata } from "next";
import { siteData } from "@/lib/data/siteData";

export const metadata: Metadata = {
  title: `:( Error / ${siteData.name}`,
  description: `An Error Occurred :( // ${siteData.name}`,
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen motion-blur-in-[50px]">
          <h1 className="text-9xl font-bold motion-preset-seesaw">500</h1>
          <h2 className="text-2xl font-bold">
            {error.message || "Something went wrong!"}
          </h2>
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <p className="mt-2">We apologize for the inconvenience</p>
            {error.digest && (
              <code className="mt-2 p-2 bg-muted/50 border rounded-md text-sm">
                Error ID: {error.digest}
              </code>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="mt-10 group" onClick={() => reset()}>
              <RefreshCcw
                className="-ms-1 opacity-60 transition-transform group-hover:rotate-180 duration-500"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Refresh
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
