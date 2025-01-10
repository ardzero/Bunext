"use client";
// https://nextjs.org/docs/app/api-reference/file-conventions/not-found

import Link from "next/link";
import { usePathname } from "next/navigation";
// icons
import { ArrowLeft } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen motion-blur-in-[50px]">
      <h1 className="text-9xl font-bold motion-preset-seesaw">404</h1>
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <div className="flex flex-wrap gap-2 items-center justify-center ">
        <p className="mt-2">Sorry, we couldn&apos;t find</p>
        <code className="mt-2 p-2 bg-muted/50 border rounded-md text-sm">
          &quot;{pathname}&quot;
        </code>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* {hasPreviousPath && (
          <Button className="mt-10" asChild>
            <Link href="/">
              <ArrowLeft />
              Go back
            </Link>
          </Button>
        )} */}
        <Button className="mt-10 group" asChild>
          <Link href="/">
            <ArrowLeft
              className="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
