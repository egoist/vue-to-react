import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: './src/index.ts',
    plugins: [esbuild()],
    output: [
      {
        format: 'cjs',
        file: './dist/index.js',
        exports: 'named'
      },
      {
        format: 'esm',
        file: './dist/index.mjs'
      }
    ]
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: './dist/index.d.ts'
    }
  }
]
