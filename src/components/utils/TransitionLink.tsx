"use client";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";

import { sleep } from "@/lib/utils";

interface TransitionLinkProps extends LinkProps {
	children: React.ReactNode;
	className?: string;
	href: string;
}

const transitionDuration = 300;
// make sure to change the transition duration in customGlobal.css
export const PageTransition = async (
	e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	router: ReturnType<typeof useRouter>,
	href: string,
) => {
	e.preventDefault();
	const body = document.querySelector("body");
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
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

// TransitionLink component
export const TransitionLink: React.FC<TransitionLinkProps> = ({
	children,
	href,
	className,
	...props
}) => {
	const router = useRouter();

	const handleTransitionLocal = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		PageTransition(e, router, href);
	};
	return (
		<Link
			{...props}
			href={href}
			onClick={handleTransitionLocal}
			className={className}
		>
			{children}
		</Link>
	);
};
