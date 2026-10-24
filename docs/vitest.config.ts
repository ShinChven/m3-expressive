import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defaultClientConditions } from 'vite'
import { defineConfig } from 'vitest/config'
import { m3Api } from './plugins/m3-api.ts'

export default defineConfig({
  plugins: [vue(), m3Api(fileURLToPath(new URL('../src', import.meta.url)))],
  resolve: {
    alias: [
      {
        find: '@m3-expressive/react/fonts.css',
        replacement: fileURLToPath(new URL('../src/styles/fonts.css', import.meta.url)),
      },
      {
        find: '@m3-expressive/react/styles.css',
        replacement: fileURLToPath(new URL('../src/styles/index.css', import.meta.url)),
      },
      {
        find: '@m3-expressive/react',
        replacement: fileURLToPath(new URL('../src/index.ts', import.meta.url)),
      },
      {
        find: '@m3-expressive/vue',
        replacement: fileURLToPath(new URL('../packages/vue/src/index.ts', import.meta.url)),
      },
      {
        find: '@m3-expressive/core',
        replacement: fileURLToPath(new URL('../packages/core/src/index.ts', import.meta.url)),
      },
      {
        find: '@m3-expressive/styles',
        replacement: fileURLToPath(new URL('../packages/styles/src/index.css', import.meta.url)),
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
