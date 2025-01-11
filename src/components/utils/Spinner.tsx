import { Icons } from '@/components/utils/icons'
import { cn } from '@/lib/utils'
// a simple spinner fallback for suspanse components
export const SuspanseFallback = ({
  className,
  spinnerClassName,
}: {
  className?: string
  spinnerClassName?: string
}) => {
  if (!Icons?.spinner)
    return (
      <div className={cn('grid h-full w-full place-items-center', className)}>
        <div
          className={cn(
            'size-10 animate-spin rounded-full border-2 border-primary border-t-transparent',
            spinnerClassName
          )}
        />
      </div>
    )
  return (
    <div className={cn('grid h-full w-full place-items-center', className)}>
      <Icons.spinner
        className={cn('size-10 animate-spin text-primary', spinnerClassName)}
      />
    </div>
  )
}
