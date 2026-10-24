import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defaultClientConditions, defineConfig, type Plugin } from 'vite'
import { themeInitScript } from '../packages/core/src/initScript.ts'
import { m3Api } from './plugins/m3-api.ts'

/** Applies the stored theme before first paint (no flash of the default colors). */
function themeInit(): Plugin {
  return {
    name: 'm3-theme-init',
    transformIndexHtml: () => [
      { tag: 'script', children: themeInitScript(), injectTo: 'head-prepend' },
    ],
  }
}

export default defineConfig({
  plugins: [react(), vue(), themeInit(), m3Api(fileURLToPath(new URL('../src', import.meta.url)))],
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
  server: { port: 5180, strictPort: false },
  preview: { port: 5181 },
})
