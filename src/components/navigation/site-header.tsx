import Link from "next/link";

import { MainNav } from "@/components/navigation/main-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { Button } from "@/components/ui/button";
import { navData } from "@/lib/data/nav-data";
import { Rocket } from "lucide-react";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
			<div className="flex h-14 items-center px-4">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
					{/* <div className="w-full flex-1 md:w-auto md:flex-none">
						<Search />
					</div> */}
					<nav className="flex items-center gap-0.5">
						{navData?.iconButtons.map((social) => (
							<Button
								key={social.href}
								variant="ghost"
								size="icon"
								className="h-8 w-8 px-0"
								asChild
							>
								<Link href={social.href} target="_blank" rel="noreferrer">
									<social.icon className="h-4 w-4" />
									<span className="sr-only">{social.label}</span>
								</Link>
							</Button>
						))}
						<Button size="sm" variant="outline" className="h-8 " asChild>
							<a
								href="https://github.com/DarkidOP/Bunext/generate"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<Rocket className="h-4 w-4" />
								<span className="hidden sm:inline">Use Template</span>
							</a>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
