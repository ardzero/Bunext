'use client'
import { cn, getPlaceholder } from '@/lib/utils'
import Image from 'next/image'

type TTestComponent = {
  className?: string
}

export function TestComponent({ className }: TTestComponent) {
  return <div className={cn('', className)}></div>
}
