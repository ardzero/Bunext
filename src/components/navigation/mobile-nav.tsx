'use client'

import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useMetaColor } from '@/hooks/use-meta-color'
import { cn, truncateString } from '@/lib/utils'

import { navData } from '@/lib/data/nav-data'
import Image from 'next/image'
export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { setMetaColor, metaColor } = useMetaColor()

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      setOpen(open)
      setMetaColor(open ? '#09090b' : metaColor)
    },
    [setMetaColor, metaColor]
  )
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false)
        setMetaColor(metaColor)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [open, setMetaColor, metaColor])

  return (
    <div className="flex items-center justify-between md:hidden">
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="group -ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg
              className="pointer-events-none"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12L22 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M2 12H22"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M2 12H22"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[60svh] p-0">
          <DrawerTitle className="px-5 text-2xl opacity-35">
            {navData.title}
          </DrawerTitle>

          <div className="overflow-auto p-6">
            <div className="flex flex-col space-y-3">
              {navData?.links?.map(
                (item) =>
                  item.href && (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      target={item.external ? '_blank' : ''}
                      onOpenChange={setOpen}
                    >
                      {item.label}
                    </MobileLink>
                  )
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        {navData.logo && (
          <Image
            src={navData.logo.src}
            alt={navData.logo.alt}
            width={36}
            height={36}
            className="size-12"
          />
        )}
        <span
          className={cn('text-2xl font-bold', !navData.showTitle && 'sr-only')}
        >
          {truncateString(navData.title, 20)}
        </span>
      </Link>
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  target?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  target,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn('text-lg', className)}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}
