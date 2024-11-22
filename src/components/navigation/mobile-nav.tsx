"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMetaColor } from "@/hooks/use-meta-color";
import { cn } from "@/lib/utils";

import { navData } from "@/lib/data/nav-data";
import { siteData } from "@/lib/data/siteData";
import { AppWindow } from "lucide-react";
export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const { setMetaColor, metaColor } = useMetaColor();

	const onOpenChange = React.useCallback(
		(open: boolean) => {
			setOpen(open);
			setMetaColor(open ? "#09090b" : metaColor);
		},
		[setMetaColor, metaColor],
	);
	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && open) {
				setOpen(false);
				setMetaColor(metaColor);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [open, setMetaColor, metaColor]);

	return (
		<div className="flex md:hidden">
			<Drawer open={open} onOpenChange={onOpenChange}>
				<DrawerTrigger asChild>
					<Button
						variant="ghost"
						className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="!size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 9h16.5m-16.5 6.75h16.5"
							/>
						</svg>
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</DrawerTrigger>
				<DrawerContent className="max-h-[60svh] p-0">
					<div className="overflow-auto p-6">
						<div className="flex flex-col space-y-3">
							{navData?.links?.map(
								(item) =>
									item.href && (
										<MobileLink
											key={item.href}
											href={item.href}
											target={item.external ? "_blank" : ""}
											onOpenChange={setOpen}
										>
											{item.label}
										</MobileLink>
									),
							)}
						</div>
					</div>
				</DrawerContent>
			</Drawer>
			<Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
				<AppWindow className="h-6 w-6" />
				<span className=" font-bold lg:inline-block">{siteData.name}</span>
			</Link>
		</div>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
	target?: string;
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	target,
	...props
}: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn("text-lg", className)}
			target={target}
			{...props}
		>
			{children}
		</Link>
	);
}
