"use client";
import { cn } from "@/lib/utils";

type TTestComponent = {
  className?: string;
};

export function TestComponent({ className }: TTestComponent) {
  return (
    <div className={cn("", className)}>
      <div className={cn("")}>...</div>
    </div>
  );
}
