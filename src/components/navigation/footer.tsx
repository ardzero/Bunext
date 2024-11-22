import { footerData, simpleFooterData } from "@/lib/data/footer-data";
import { cn } from "@/lib/utils";
export function SimpleFooter({ className }: { className?: string }) {
	return (
		<footer
			className={cn(
				"max-h-24 border-border/40 border-t py-6 md:px-8 md:py-0 dark:border-border",
				className,
			)}
		>
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:px-0">
				{simpleFooterData?.texts.map((item, index) => (
					<p
						className="text-balance text-center text-muted-foreground text-sm leading-loose md:text-left"
						key={index}
					>
						{item.pretext}{" "}
						<a
							href={item.url}
							target="_blank"
							rel="noreferrer"
							className="font-medium underline-offset-4 hover:underline"
						>
							{item.label}
						</a>
						.
					</p>
				))}
			</div>
		</footer>
	);
}
