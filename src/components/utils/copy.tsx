'use client'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Check, Copy as CopyIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from '@/hooks/use-toast'

type TCopy = {
  copyContent: string
  className?: string
  iconClassName?: string
  children?: React.ReactNode
} & ButtonProps

export function CopyButton({
  copyContent,
  className,
  variant,
  iconClassName,
  size = 'icon',
  children,
  ...props
}: TCopy) {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyContent)
      toast({
        title: 'Copied!',
        description: `Content: ${copyContent}`,
      })
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy: ', err)
      toast({
        title: 'Error',
        description: 'Failed to copy the link. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className={cn(
              'flex items-center gap-2 px-4 disabled:opacity-100',
              className
            )}
            onClick={handleCopy}
            aria-label={copied ? 'Copied' : 'Copy to clipboard'}
            disabled={copied}
            {...props}
          >
            <div className={cn('relative size-4 h-full w-full transition-all')}>
              <Check
                className={cn(
                  'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] stroke-emerald-500 transition-all',
                  iconClassName,
                  copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                )}
                size={16}
                strokeWidth={3}
                aria-hidden="true"
              />
              <CopyIcon
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className={cn(
                  'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition-all',
                  copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                )}
              />
            </div>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="z-50 px-2 py-1 text-xs" showArrow={true}>
          Click to copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
