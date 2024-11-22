"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteData } from "@/lib/data/siteData";
import { navData } from "@/lib/data/nav-data";
import { cn } from "@/lib/utils";
import { AppWindow } from "lucide-react";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
				<AppWindow className="h-6 w-6" />
				<span className="hidden font-bold lg:inline-block">
					{siteData.name}
				</span>
			</Link>
			<nav className="flex items-center gap-4 text-sm xl:gap-6 font-medium">
				{navData?.links?.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={cn(
							"transition-colors hover:text-foreground/80",
							link.href === "/"
								? pathname === "/"
									? "text-foreground"
									: "text-foreground/70"
								: pathname?.startsWith(link.href) && link.href !== "/"
									? "text-foreground"
									: "text-foreground/70",
						)}
					>
						{link.label}
					</Link>
				))}
			</nav>
		</div>
	);
}
