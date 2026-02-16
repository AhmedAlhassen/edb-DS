# EDB Design System Monorepo

## Install

```bash
pnpm i
```

## Build all packages

```bash
pnpm -r build
```

## Storybook

```bash
pnpm --filter storybook dev
```

## Docusaurus docs

```bash
pnpm --filter docs start
```

## Publish

1. Add changesets: `pnpm changeset`
2. Version packages: `pnpm changeset version`
3. Publish: `pnpm -r publish --access public`

## Consumer usage

```tsx
import '@edb/ui/styles.css';
import { ThemeProvider, DirectionProvider, Button } from '@edb/ui';
```

Next.js SSR note: browser storage and document mutations occur only in `useEffect`.
