import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['vue', '@m3-expressive/core', '@m3-expressive/styles'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
