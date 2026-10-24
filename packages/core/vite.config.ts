import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['@material/material-color-utilities'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
