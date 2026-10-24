import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defaultClientConditions } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@m3-expressive/react/fonts.css',
        replacement: fileURLToPath(new URL('./packages/styles/src/fonts.css', import.meta.url)),
      },
      {
        find: '@m3-expressive/react/styles.css',
        replacement: fileURLToPath(new URL('./packages/styles/src/index.css', import.meta.url)),
      },
      {
        find: '@m3-expressive/react',
        replacement: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      },
      {
        find: '@m3-expressive/vue',
        replacement: fileURLToPath(new URL('./packages/vue/src/index.ts', import.meta.url)),
      },
      {
        find: '@m3-expressive/core',
        replacement: fileURLToPath(new URL('./packages/core/src/index.ts', import.meta.url)),
      },
      {
        find: '@m3-expressive/styles',
        replacement: fileURLToPath(new URL('./packages/styles/src/index.css', import.meta.url)),
      },
    ],
    conditions: ['source', 'md3-source', ...defaultClientConditions],
  },
  test: {
    name: 'unit',
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['test/**/*.test.{ts,tsx}', 'packages/*/test/**/*.{ts,tsx}'],
    css: false,
    server: {
      deps: {
        // Ships extensionless ESM imports that Node cannot resolve on its own.
        inline: ['@material/material-color-utilities'],
      },
    },
  },
})
