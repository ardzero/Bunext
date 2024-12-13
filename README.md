# Bunext

A Next.js 15 app with Tailwind CSS template. [Live deployment](https://bunextt.vercel.app/)

## Usage (run locally)

> required `bun` or `nodejs` installed and make sure they're up to date

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

## Features

- Next.js 15 App Directory
- Tailwind CSS
- [Shadcn](https://ui.shadcn.com/) components
- Custom util components like `share modal, multi-select(no library), Img, Icons, etc`
- CustomFont Optimization using [Next font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- Icons using [lucide-react](https://lucide.dev/)
- Next theme provider (dark and light mode)
- Url stage management using [nuqs](https://nuqs.47ng.com/)
- Metadata generator for SEO (including apple-touch-icon)
- Feature flags
- [zod](https://zod.dev/) validation
- Per Link page transition (without any library)
- [Biome](https://biomejs.dev/) for linting and formatting
- [Fluid Tailwind](https://fluid.tw/) for easier responsive design (disabled by default, to enable go to `tailwind.config.ts` and uncomment the fluid plugin variables, Note: the `min-*` and `max-*` variants don't work while using fluid-tailwind)
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

### Multi-select sample code

```tsx
"use client";
import React, { useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";

const catsList = [
  { value: "persian", label: "Persian Cat" },
  { value: "siamese", label: "Siamese Cat" },
  { value: "maine-coon", label: "Maine Coon" },
  { value: "ragdoll", label: "Ragdoll" },
  { value: "bengal", label: "Bengal Cat" },
];

function Home() {
  const [selectedCats, setSelectedCats] = useState<string[]>([
    "persian",
    "siamese",
  ]);

  return (
    <div className="p-4 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Multi-Select Component</h1>
      <MultiSelect
        options={catsList}
        onValueChange={setSelectedCats}
        defaultValue={selectedCats}
        placeholder="Select cats"
        variant="inverted"
        animation={2}
        maxCount={3}
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Selected Cats:</h2>
        <ul className="list-disc list-inside">
          {selectedCats.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

<!-- ### [Conventions](./CONVENTION.md) -->
<!-- ## License
Licensed under the [MIT license](./LICENSE). -->
