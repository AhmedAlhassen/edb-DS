import { mkdirSync, writeFileSync } from 'node:fs';
import { semanticDark, semanticLight, tokens } from '../dist/index.js';

const toVars = (obj, prefix = '--edb') =>
  Object.entries(obj)
    .map(([k, v]) => `${prefix}-${k}: ${v};`)
    .join('\n');

const css = `:root {
${toVars(semanticLight, '--edb-color')}
--edb-font-body: ${tokens.typography.body};
--edb-font-arabic: ${tokens.typography.arabic};
--edb-radius-md: ${tokens.radius.md}px;
--edb-shadow-md: ${tokens.elevation.md};
}
[data-theme="dark"] {
${toVars(semanticDark, '--edb-color')}
}
`;

mkdirSync(new URL('../dist/', import.meta.url), { recursive: true });
writeFileSync(new URL('../dist/tokens.css', import.meta.url), css, 'utf8');
