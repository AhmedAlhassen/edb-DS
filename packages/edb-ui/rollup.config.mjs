import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const external = [
  'react','react-dom',
  '@edb/icons','@edb/tokens',
  /^@radix-ui\/react-/,
];

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
      { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true, exports: 'named' }
    ],
    external,
    plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    external,
    plugins: [dts()]
  }
];
