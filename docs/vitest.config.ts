import { fileURLToPath } from 'node:url'
import { defaultClientConditions } from 'vite'
import { defineConfig } from 'vitest/config'
import { m3Api } from './plugins/m3-api.ts'

export default defineConfig({
  plugins: [m3Api(fileURLToPath(new URL('../src', import.meta.url)))],
  resolve: {
    alias: [
      {
        find: 'material-design-3-expressive-components/fonts.css',
        replacement: fileURLToPath(new URL('../src/styles/fonts.css', import.meta.url)),
      },
      {
        find: 'material-design-3-expressive-components/styles.css',
        replacement: fileURLToPath(new URL('../src/styles/index.css', import.meta.url)),
      },
      {
        find: 'material-design-3-expressive-components',
        replacement: fileURLToPath(new URL('../src/index.ts', import.meta.url)),
      },
    ],
    conditions: ['source', 'md3-source', ...defaultClientConditions],
  },
  test: {
    name: 'docs',
    environment: 'jsdom',
    globals: true,
    setupFiles: [fileURLToPath(new URL('../test/setup.ts', import.meta.url))],
    include: ['docs/test/**/*.test.{ts,tsx}'],
    css: false,
    fsModuleCache: false,
    server: { deps: { inline: ['@material/material-color-utilities'] } },
  },
})
