import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defaultClientConditions, defineConfig, type Plugin } from 'vite'
import { themeInitScript } from '../src/theme/initScript.ts'
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
  plugins: [react(), themeInit(), m3Api(fileURLToPath(new URL('../src', import.meta.url)))],
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
  server: { port: 5180, strictPort: false },
  preview: { port: 5181 },
})
