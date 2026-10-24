import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
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
