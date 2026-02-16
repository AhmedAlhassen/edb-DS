# Getting Started

Install workspace deps:

```bash
pnpm i
```

Consume in Next.js / React:

```tsx
import '@edb/ui/styles.css';
import { Button } from '@edb/ui';
```

SSR safety: providers only touch browser APIs in `useEffect`.
