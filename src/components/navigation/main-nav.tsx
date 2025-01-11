'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { navData } from '@/lib/data/nav-data'
import { cn, truncateString } from '@/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        {navData.logo && (
          <Image
            src={navData.logo.src}
            alt={navData.logo.alt}
            width={36}
            height={36}
            className="size-10"
          />
        )}
        <span
          className={cn('text-2xl font-bold', !navData.showTitle && 'sr-only')}
        >
          {truncateString(navData.title, 20)}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm font-medium xl:gap-6">
        {navData?.links?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'transition-colors hover:text-foreground/80',
              link.href === '/'
                ? pathname === '/'
                  ? 'text-foreground'
                  : 'text-foreground/70'
                : pathname?.startsWith(link.href) && link.href !== '/'
                  ? 'text-foreground'
                  : 'text-foreground/70'
            )}
            target={link.external ? '_blank' : ''}
            rel={link.external ? 'noreferrer' : ''}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
