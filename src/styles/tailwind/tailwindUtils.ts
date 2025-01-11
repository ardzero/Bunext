import plugin from 'tailwindcss/plugin'

export const utilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.scrollbar-hidden::-webkit-scrollbar': { display: 'none' },
    '.scrollbar-hidden': { msOverflowStyle: 'none', scrollbarWidth: 'none' },
    '.scrollbar-thin::-webkit-scrollbar': { width: '4px', height: '4px' },
    '.break-words': {
      'white-space': 'pre-wrap',
      'word-break': 'break-word',
    },
    '.center-x': { '@apply ml-[50%] -translate-x-1/2': {} },
    '.center-y': { '@apply mt-[50%] -translate-y-1/2': {} },
    '.center-position-x': { '@apply left-[50%] -translate-x-1/2': {} },
    '.center-position-y': { '@apply top-[50%] -translate-y-1/2': {} },
    '.link': { '@apply text-primary underline-offset-2 hover:underline': {} },
    '.container-mini': { '@apply mx-auto max-w-3xl px-2 w-full': {} },
    '.text-heading': {
      fontSize: 'clamp(3rem, 1.548rem + 3.871vw, 6rem)',
      fontWeight: '700',
      lineHeight: 'clamp(3rem, 1.065rem + 5.161vw, 7rem)',
    },
    '.text-heading-sm': {
      fontSize: 'clamp(1.5rem, 0.774rem + 1.935vw, 3rem)',
      fontWeight: '700',
      lineHeight: 'clamp(1.75rem, 0.874rem + 2.335vw, 3.56rem)',
    },
  })
})
