import plugin from 'tailwindcss/plugin';

export const base = plugin(({ addBase, addVariant, matchVariant }) => {
    const states = {
        selected: 'data-selected=true',
        open: 'data-state=open',
        on: 'data-state=on',
    };

    addBase({
        '::-webkit-scrollbar': { width: '8px', height: '8px' },
        '::-webkit-scrollbar-thumb': {
            borderRadius: '6px',
            '@apply bg-primary/35': {},
        },
        '::-webkit-scrollbar-thumb:hover': { '@apply bg-primary/70': {} },
        '::-webkit-scrollbar-track': {
            '@apply bg-primary/20': {},
        },
        '*': { '@apply border-border min-w-0': {} },
    });
    addBase({
        html: {
            overflowX: 'clip',
            '--scroll-behavior': 'smooth',
            scrollBehavior: 'smooth',
        },
        body: {
            '@apply bg-background text-foreground min-h-screen antialiased overflow-x-clip selection:text-white selection:bg-primary':
                {},
            'font-feature-settings': `'rlig' 1, 'calt' 1`,
        },
        'input,textarea': {
            '@apply bg-transparent outline-none w-full': {},
        },
    });
    for (const [name, definition] of Object.entries(states)) {
        addVariant(name, `&[${definition}]`);
    }
    matchVariant('nth', (value) => {
        return `&:nth-child(${value})`;
    });
    matchVariant('nth-reverse', (value) => {
        return `&:nth-last-child(${value})`;
    });

});
