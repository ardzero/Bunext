"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { sleep } from "@/lib/utils";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();
  const transitionDuration = 300;
  // make sure to change the transition duration in customGlobal.css

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // if user prefers reduced motion, then no transition
    if (prefersReducedMotion) {
      router.push(href);
      return;
    }

    body?.classList.add("page-transition");

    await sleep(transitionDuration / 2 + 35);
    router.push(href);
    await sleep(transitionDuration / 2 + 35);

    body?.classList.remove("page-transition");
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={handleTransition}
      className={className}
    >
      {children}
    </Link>
  );
};
