# Bunext

A Next.js 15 app with Tailwind CSS template. [Live deployment](https://bunextt.vercel.app/)

## Usage (run locally)

> required `bun` or `nodejs` installed

Go to the `root` folder where `package.json` exists.

```bash
bun install
```

```bash
npm install
```

### Then

```bash
bun --bun run dev
```

```bash
bun run dev
```

```bash
npm run dev
```

## Commit/Push

Prepare Husky

```bash
npm run prepare
```

## Features

- Next.js 15 App Directory
- Tailwind CSS
- [Shadcn](https://ui.shadcn.com/) components
- CustomFont Optimization using [Next font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- Icons using [lucide-react](https://lucide.dev/)
- Next theme provider (dark and light mode)
- Metadata generator for SEO (including apple-touch-icon)
- Feature flags
-  [zod](https://zod.dev/) validation
- Per Link page transition (without any library)
- [Fluid Tailwind](https://fluid.tw/) for easier responsive design (can be disabled in `featureflags.ts`)
- [Biome](https://biomejs.dev/) for linting and formatting
- Utilities like `qrCode gen, string shortner, uniqueCode gen, img placeholder, email validation, hashing etc`

## Config

- for generating colors use [realtime-colors](https://www.realtimecolors.com/) shadcn template and pase it on `src/styles/globals.css`
- add fonts on `src/styles/tailwind/fonts.ts`
- to configure feature flags got to `src/lib/config/featureflags.ts`
- to configure Metadata got to `src/lib/data/siteData.ts`
- advance Metadata config in `src/lib/config/siteConfig.ts`
- for base styles (scrollbar style, selection highlighting etc) go to `src/styles/tailwind/base.ts`


## Roadmap

- [x] add next themes
- [x] feature flags
- [x] add sample responsive nav
- [ ] add sample footer
- [ ] add sample server actions
- [ ] add syntax highlighting for code blocks
- [ ] add a branch with animation features using motion
- [ ] add a feature full branch with drizzle orm, analytics, auth

<!-- ### [Conventions](./CONVENTION.md) -->
<!-- ## License
Licensed under the [MIT license](./LICENSE). -->
