"use client";
import Image from "next/image";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getQrCode } from "@/lib/utils";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
	DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Icons } from "@/components/utils/icons";
// import { Img } from "@/components/utils/image";

type ShareModalProps = React.ComponentProps<typeof Drawer> & {
	shareUrl: string;
	sharetoWindow?: boolean;
	twText?: string;
	// change your qr icon in src/components/utils/icons.tsx
	qrIcon?: React.ReactNode;
	title?: string;
};
export function ShareModal({
	children,
	shareUrl,
	sharetoWindow,
	twText,
	qrIcon,
	title = "Share with friends",
	...props
}: ShareModalProps) {
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl);
			toast({
				title: "Copied!",
				description: `URL: ${shareUrl}`,
			});
		} catch (err) {
			console.error("Failed to copy: ", err);
			toast({
				title: "Error",
				description: "Failed to copy the link. Please try again.",
				variant: "destructive",
			});
		}
	};

	const shareToSocial = (platform: string) => {
		let url = "";
		const encodedUrl = encodeURIComponent(shareUrl);
		const twitterText = twText ? encodeURIComponent(twText) : "";

		switch (platform) {
			case "facebook":
				url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
				break;

			case "twitter":
				url = `https://twitter.com/intent/tweet?text=${twitterText}&url=${encodedUrl}`;
				break;
			case "linkedin":
				url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
				break;
		}

		// Open in a new window with specific dimensions
		const width = 600;
		const height = 400;
		const left = window.innerWidth / 2 - width / 2;
		const top = window.innerHeight / 2 - height / 2;

		window.open(
			url,
			"_blank",
			sharetoWindow
				? `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
				: undefined,
		);
	};

	const iconClassName = "size-6 md:size-5 fill-foreground";
	return (
		<Drawer {...props}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent>
				<div className="max-w-xl mx-auto">
					<div className="p-4 space-y-6 md:flex flex-row-reverse gap-4 place-content-center items-center">
						<div>
							<DrawerTitle className="text-2xl font-medium">
								{title}
							</DrawerTitle>
							<div className="flex items-center space-x-2 mb-2">
								<Input
									value={shareUrl?.toString()}
									readOnly
									className="flex-grow text-xm"
								/>
								<Button onClick={copyToClipboard} className="px-6">
									<Copy className="h-4 w-4 " />
									Copy
								</Button>
							</div>
							<div className="flex justify-center space-x-4 ">
								<Button
									onClick={() => shareToSocial("facebook")}
									variant="outline"
									className="grow"
								>
									<Icons.facebook className={iconClassName} />
								</Button>

								<Button
									onClick={() => shareToSocial("twitter")}
									variant="outline"
									className="grow"
								>
									<Icons.twitter className={iconClassName} />
								</Button>
								<Button
									onClick={() => shareToSocial("linkedin")}
									variant="outline"
									className="grow"
								>
									<Icons.linkedin className={iconClassName} />
								</Button>
							</div>
						</div>

						<div className="flex justify-center ">
							{qrIcon ? (
								<div className="size-64 md:size-52 ">{qrIcon}</div>
							) : (
								<Image
									src={getQrCode(shareUrl)}
									alt="a2e-qr"
									width={100}
									height={100}
									className="size-64 md:size-52 rounded-lg dark:invert"
									placeholder="blur"
									blurDataURL="data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAAiAAAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALAPAJ0BKokAiQA+3VihTb+yqqM0+a6L8BuJaW7f/O9jQqaYaAhVSWra4/GhFDmIKVzTnJDNV4W3lDo9y2L38gGk49KKvOloYVxf6ijAYpcSw+X55yIgCBEjybqnM+qlV2CZQq1SIsg/sij/ZBK5z/xfN7lq113UVbZfA0X+2Pto6W9caIxAAP7xcJZFS/J+l4fZ6LKjJJRMH8rhCfKXMbgrWA4L9S2N23IfzmJNl/A6G1cZTF8yYz97Ng/xexFNupwMQGxtAtMeOvEENZFX3YGFEckDL6/lvqHNDeO+qylxUZOX2jsV9OML1rXMLVJRycOZVb6feSW2KXeH5D9WMHIQZPSlDt72MNz4W8wMxCf5PvbJMTVdra4P4awXNccGFONBetplS62ib1AAAA=="
								/>
							)}
						</div>
					</div>
					<DrawerFooter className="pt-0 mt-0">
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
