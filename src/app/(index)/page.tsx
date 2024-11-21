import { Github, Rocket, ArrowRightLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AppWindow,
  Palette,
  Wand2,
  Layers,
  Shapes,
  Type,
  Moon,
  Flag,
  Search,
  SlidersHorizontal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { TransitionLink } from "@/components/utils/TransitionLink";

export default function Home() {
  const features = [
    {
      title: "Next.js 15 App Directory",
      icon: AppWindow,
      description:
        "Utilizing the latest Next.js features for optimal performance.",
    },
    {
      title: "Radix UI Primitives",
      icon: Shapes,
      description: "Accessible and customizable UI components.",
    },
    {
      title: "Tailwind CSS",
      icon: Palette,
      description: "Utility-first CSS framework for rapid UI development.",
    },
    {
      title: "Tailwind CSS Optimization",
      icon: Wand2,
      description: "Class sorting, merging, and linting for optimal CSS.",
    },
    {
      title: "Shadcn Components",
      icon: Layers,
      description:
        "Beautiful and accessible components built with Radix UI and Tailwind CSS.",
    },
    {
      title: "Custom Font Optimization",
      icon: Type,
      description: "Using Next Font for optimized font loading and display.",
    },
    {
      title: "Next Theme Provider",
      icon: Moon,
      description: "Easy implementation of dark and light mode.",
    },
    {
      title: "Zod Validation",
      icon: ShieldCheck,
      description:
        "Runtime type checking and validation for JavaScript and TypeScript.",
    },
    {
      title: "Feature Flags",
      icon: Flag,
      description: "Implement and manage feature toggles with ease.",
    },
    {
      title: "Metadata Generator",
      icon: Search,
      description: "SEO optimization including apple-touch-icon generation.",
    },
    {
      title: "Lucide React Icons",
      icon: Zap,
      description: "Beautiful, consistent, and customizable icons.",
    },
    {
      title: "Utility Functions",
      icon: SlidersHorizontal,
      description:
        "QR code generation, string shortening, unique code generation, and more.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link className="flex items-center space-x-2" href="/">
              <AppWindow className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Next.js 15 Bun Starter
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/DarkidOP/Bunext"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">View on GitHub</span>
                </a>
              </Button>
              <Button size="sm" asChild>
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
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Next.js 15 Bun Starter Template
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
            Jumpstart your Next.js projects with this feature-packed starter
            template. Built with performance, accessibility, and developer
            experience in mind.
          </p>
          <Button size="sm" asChild>
            <TransitionLink href="/pagetr" className="flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Page Transition</span>
            </TransitionLink>
          </Button>
        </section>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-8 w-8" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex h-14 items-center">
          <p className="text-sm text-muted-foreground">
            © 2024{" "}
            <Link
              href="https://github.com/DarkidOP"
              className="hover:underline"
            >
              Farhan Ashhab Nur (@darkiop)
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
