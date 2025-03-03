import { ArrowRightLeft, Github, Plus, Rocket } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TransitionLink } from '@/components/utils/TransitionLink'
import {
  AppWindow,
  Flag,
  Layers,
  Moon,
  Palette,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Type,
  Wand2,
  Zap,
} from 'lucide-react'
import { TestComponent } from '@/components/TestComp'

export default function Home() {
  const features = [
    {
      title: 'Next.js 15 App Directory',
      icon: AppWindow,
      description:
        'Utilizing the latest Next.js features for optimal performance.',
    },
    {
      title: 'Tailwind CSS',
      icon: Palette,
      description: 'Utility-first CSS framework for rapid UI development.',
    },
    {
      title: 'Shadcn Components',
      icon: Layers,
      description:
        'Beautiful and accessible components built with Radix UI and Tailwind CSS.',
    },
    {
      title: 'Custom Font Optimization',
      icon: Type,
      description: 'Using Next Font for optimized font loading and display.',
    },
    {
      title: 'Lucide React Icons',
      icon: Zap,
      description: 'Beautiful, consistent, and customizable icons.',
    },
    {
      title: 'Next Theme Provider',
      icon: Moon,
      description: 'Easy implementation of dark and light mode.',
    },
    {
      title: 'Metadata Generator',
      icon: Search,
      description: 'SEO optimization including apple-touch-icon generation.',
    },
    {
      title: 'Feature Flags',
      icon: Flag,
      description: 'Implement and manage feature toggles with ease.',
    },
    {
      title: 'Zod Validation',
      icon: ShieldCheck,
      description:
        'Runtime type checking and validation for JavaScript and TypeScript.',
    },
    {
      title: 'Page Transitions',
      icon: ArrowRightLeft,
      description:
        'Per-link page transitions without any additional libraries.',
    },
    // {
    //   title: 'Fluid Tailwind',
    //   icon: Wand2,
    //   description: 'Easier responsive design with fluid utilities.',
    // },
    {
      title: 'Prettier',
      icon: Wand2,
      description:
        'Prettier is a code formatter that formats your code to make it more readable.',
    },
    {
      title: 'Utility Functions',
      icon: SlidersHorizontal,
      description:
        'QR code generation, string shortening, unique code generation, and more.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="motion-preset-bounce font-clash motion-duration-500 mb-4 text-5xl font-medium tracking-tight">
          Next.js 15 Bun Starter Template
        </h1>
        <p className="motion-preset-bounce text-muted-foreground motion-duration-500 mx-auto mb-8 max-w-2xl text-xl">
          Jumpstart your Next.js projects with this feature-packed starter
          template. Built with performance, accessibility, and developer
          experience in mind.
        </p>
        <Button
          size="sm"
          asChild
          className="motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-opacity-in-[33%] motion-duration-[0.15s]/blur motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-delay-[0.38s]/scale motion-delay-[0.60s]/blur motion-ease-spring-bouncier"
        >
          <TransitionLink href="/pagetr" className="flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4" />
            <span className="">Page Transition</span>
          </TransitionLink>
        </Button>
      </section>
      <section className="motion-scale-in-[0.5] motion-translate-x-in-[39%] motion-translate-y-in-[84%] motion-rotate-in-[8deg] motion-blur-in-[5px] motion-opacity-in-[0%] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <Card className="text-foreground/30 grow">
          <CardHeader></CardHeader>
          <CardContent className="text-center">
            <div className="-ml-3 flex items-center justify-center gap-2">
              <Plus className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Loading?..</h1>
            </div>
            <CardDescription className="text-foreground/30">
              More features coming soon... *probably
            </CardDescription>
          </CardContent>
        </Card>
      </section>
      <section className="grid place-items-center py-6">
        <TestComponent></TestComponent>
      </section>
    </div>
  )
}
