import Link from "next/link";

import { MainNav } from "@/components/navigation/main-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { Button } from "@/components/ui/button";
import { ShareModal } from "@/components/utils/share-modal";
import { navData } from "@/lib/data/nav-data";
import { Rocket, Share2 } from "lucide-react";
import { remoteUrl } from "@/lib/config/siteConfig";
import { cn } from "@/lib/utils";

export function SiteHeader({ className }: { className?: string }) {
	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border",
				className,
			)}
		>
			<div className="flex h-16 items-center px-4">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-end gap-2">
					{/* <div className="w-full flex-1 md:w-auto md:flex-none">
						<Search />
					</div> */}
					<nav className="flex items-center gap-0.5">
						<ShareModal shareUrl={remoteUrl}>
							<Button variant="ghost" size="icon" className="size-10 px-0">
								<Share2 className="size-5" />
								<span className="sr-only">Share</span>
							</Button>
						</ShareModal>
						{navData?.iconButtons.map((social) => {
							const Icon = social.Icon;
							return (
								<Button
									key={social.href}
									variant="ghost"
									size="icon"
									className="size-10 px-0"
									asChild
								>
									<Link href={social.href} target="_blank" rel="noreferrer">
										{Icon && <Icon className="size-5" />}
										<span className="sr-only">{social.label}</span>
									</Link>
								</Button>
							);
						})}
						<Button size="sm" variant="outline" className="h-10" asChild>
							<a
								href="https://github.com/DarkidOP/Bunext/generate"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<Rocket className="size-5" />
								<span className="sr-only sm:not-sr-only">Use Template</span>
							</a>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
