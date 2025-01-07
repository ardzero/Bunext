"use client";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

type TTestCard = {
  className?: string;
  index: number;
};

export function TestCard({ className, index }: TTestCard) {
  const { ref, isInView } = useIntersection({ threshold: 0.2, once: true });
  return (
    <div
      ref={ref}
      className={cn(
        "w-full max-w-md p-6 rounded-lg shadow-lg bg-muted/45 transition-opacity duration-500 ",
        isInView &&
          "motion-scale-in-[0.41] motion-translate-x-in-[2%] motion-translate-y-in-[111%] motion-blur-in-[60px] motion-delay-75",
        className
      )}
    >
      <h2 className="text-2xl font-semibold mb-4">Card {index + 1}</h2>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempfwfor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  );
}
