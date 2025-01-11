import { simpleFooterData } from '@/lib/data/footer-data'
import { cn } from '@/lib/utils'
export function SimpleFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'max-h-24 border-t border-border/40 py-6 dark:border-border md:px-8 md:py-0',
        className
      )}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:px-0">
        {simpleFooterData?.texts.map((item, index) => (
          <p
            className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left"
            key={index}
          >
            {item.pretext}{' '}
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
  )
}
