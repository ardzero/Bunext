# Bunext

A Next.js 15 app with Tailwind CSS template.

## Usage (run locally)

> required `nodejs` or `bun` installed

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
- Radix UI Primitives
- Tailwind CSS
- Tailwind CSS class sorting, merging and linting.
- CustomFont Optimization with Next.js
- Next theme provider (dark and light mode)
- zod validation
- Feature flag provider
- proper metadata generator for SEO (including apple-touch-icon)
- qr code generator function

## Config

- for generating colors use [realtime-colors](https://www.realtimecolors.com/) shadcn template and pase it on `src/styles/globals.css`
- add fonts on `src/styles/tailwind/fonts.ts`
- to configure feature flags got to `src/lib/config/featureflags.ts`
- to configure Metadata got to `src/lib/data/siteData.ts`
- advance Metadata config in `src/lib/config/siteConfig.ts`
- for base styles (scrollbar style, selection highlighting etc) go to `src/styles/tailwind/base.ts`

<!-- ### [Conventions](./CONVENTION.md) -->

<!-- ## License
Licensed under the [MIT license](./LICENSE). -->
