import plugin from 'tailwindcss/plugin'

export const base = plugin(({ addBase, addVariant, matchVariant }) => {
  const states = {
    selected: 'data-selected=true',
    open: 'data-state=open',
    on: 'data-state=on',
  }

  addBase({
    '*': { '@apply border-border min-w-0': {} },
    '::-webkit-scrollbar': { width: '8px', height: '8px' },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '8px',
      '@apply bg-foreground/20 dark:bg-foreground/15': {},
    },
    '::-webkit-scrollbar-thumb:hover': { '@apply bg-foreground/35': {} },
    '::-webkit-scrollbar-track': {
      '@apply bg-foreground/5': {},
    },
  })
  addBase({
    html: {
      overflowX: 'clip',
      '--scroll-behavior': 'smooth',
      scrollBehavior: 'smooth',
    },
    body: {
      '@apply bg-background text-foreground min-h-screen antialiased overflow-x-clip selection:text-white selection:bg-zinc-700 dark:selection:text-black dark:selection:bg-white':
        {},
      'font-feature-settings': `'rlig' 1, 'calt' 1`,
    },
    'input,textarea': {
      '@apply bg-transparent outline-none w-full': {},
    },
  })
  for (const [name, definition] of Object.entries(states)) {
    addVariant(name, `&[${definition}]`)
  }
  matchVariant('nth', (value) => {
    return `&:nth-child(${value})`
  })
  matchVariant('nth-reverse', (value) => {
    return `&:nth-last-child(${value})`
  })
})
