## Bunext Folder Structure

```sh
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── CONVENTION.md
├── README.md
├── biome.json
├── bun.lockb
├── components.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
└── src/
    ├── actions/
    ├── app/
    │   ├── (index)/
    │   │   ├── intr/
    │   │   ├── pagetr/
    │   │   └── page.tsx
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   └── sitemap.ts
    ├── components/
    │   ├── Providers/ # providers for the app
    │   │   ├── root-provider.tsx
    │   │   └── theme-provider.tsx
    │   ├── navigation/ # navigation components
    │   │   ├── footer.tsx
    │   │   ├── main-nav.tsx
    │   │   ├── mobile-nav.tsx
    │   │   └── site-header.tsx
    │   ├── ui/  # shadcn-ui components
    │   ├── utils/ # custom utility components
    │   │   ├── ConditionalLink.tsx
    │   │   ├── Image.tsx
    │   │   ├── Img.tsx
    │   │   ├── Spinner.tsx
    │   │   ├── TopButton.tsx
    │   │   ├── TransitionLink.tsx
    │   │   ├── featureFlag.tsx
    │   │   ├── icons.tsx
    │   │   └── share-modal.tsx
    │   ├── brand.tsx
    │   └── TestComp.tsx
    ├── hooks/
    │   ├── use-intersection.ts
    │   ├── use-lazy-load.ts
    │   ├── use-meta-color.ts
    │   └── use-toast.ts
    ├── lib/
    │   ├── config/
    │   │   ├── featureflags.ts
    │   │   ├── siteConfig.ts
    │   │   └── user.ts
    │   ├── data/ # data files for core site config & seo
    │   │   ├── footer-data.ts
    │   │   ├── nav-data.ts
    │   │   └── siteData.ts
    │   └── utils.ts # utility functions
    ├── styles/
    │   ├── customGlobal.css
    │   ├── globals.css
    │   └── tailwind/
    │       ├── base.ts
    │       ├── fonts.ts
    │       ├── tailwindUtils.ts
    │       └── fonts/
    └── types/
        └── index.ts
```
