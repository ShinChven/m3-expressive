import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'material-design-3-expressive-components',
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['test/**/*.test.{ts,tsx}'],
    css: false,
    server: {
      deps: {
        // Ships extensionless ESM imports that Node cannot resolve on its own.
        inline: ['@material/material-color-utilities'],
      },
    },
  },
})
