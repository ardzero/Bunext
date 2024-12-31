"use client";
// a btn to take user to the top of the page
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check if page is scrolled more than 100vh
      if (window.scrollY > window.innerHeight / 5) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={cn(
          "p-2 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0 pointer-events-none",
          className
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className={cn("size-5", iconClassName)} />
      </button>
    </>
  );
}
