import { AppWindow, ArrowRightLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { TransitionLink } from "@/components/utils/TransitionLink";
import Link from "next/link";

export default function PageTr() {
	return (
		<div className="container mx-auto flex flex-col items-center px-4 py-8">
			<h1 className="mb-4 font-clash font-medium text-4xl tracking-tight lg:text-5xl">
				Transition Test page
			</h1>
			<div className="mb-8 text-center">
				<div className="mb-4">
					<p className="mx-auto max-w-2xl text-muted-foreground text-xl">
						to edit the transion duration go to{" "}
					</p>
					<code>src/components/utils/TransitionLink.tsx</code>
				</div>
				<div>
					<p className="mx-auto max-w-2xl text-muted-foreground text-xl ">
						to edit the transion styling go to{" "}
					</p>
					<code>src/styles/customGlobal.css</code>
				</div>
			</div>

			<Button size="sm" asChild>
				<TransitionLink href="/" className="flex items-center gap-2">
					<ArrowRightLeft className="h-4 w-4" />
					<span className="hidden sm:inline">Home</span>
				</TransitionLink>
			</Button>
		</div>
	);
}
