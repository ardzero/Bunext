import { AppWindow, ArrowRightLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { TransitionLink } from "@/components/utils/TransitionLink";

export default function Contact() {
	return (
		<div className="container mx-auto flex h-full min-h-[600px] flex-col place-content-center items-center px-4 py-8">
			<h1 className="mb-4 font-clash font-medium text-4xl tracking-tight lg:text-5xl">
				Coming soon
			</h1>

			<Button size="sm" asChild>
				<TransitionLink href="/" className="flex items-center gap-2">
					<ArrowRightLeft className="h-4 w-4" />
					<span className="hidden sm:inline">Home</span>
				</TransitionLink>
			</Button>
		</div>
	);
}
