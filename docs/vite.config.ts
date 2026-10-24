import { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defaultClientConditions, defineConfig, type Plugin } from 'vite'
import { themeInitScript } from '../packages/core/src/initScript.ts'
import { m3Api } from './plugins/m3-api.ts'

function resolveBase(): string {
  if (process.env.BASE_PATH !== undefined) {
    const p = process.env.BASE_PATH.trim()
    if (!p || p === '/') return '/'
    return p.endsWith('/') ? p : `${p}/`
  }
  if (process.env.BASE_URL) {
    const u = process.env.BASE_URL.trim()
    return u.endsWith('/') ? u : `${u}/`
  }
  if (process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1]
    if (repo && !repo.endsWith('.github.io')) {
      return `/${repo}/`
    }
  }
  return '/'
}

/** Applies the stored theme before first paint (no flash of the default colors). */
function themeInit(): Plugin {
  return {
    name: 'm3-theme-init',
    transformIndexHtml: () => [
      { tag: 'script', children: themeInitScript(), injectTo: 'head-prepend' },
    ],
  }
}

/** Prepares GitHub Pages static deployment: .nojekyll, 404.html fallback, and route HTML entrypoints. */
function githubPagesSpa(): Plugin {
  return {
    name: 'm3-github-pages-spa',
    apply: 'build',
    closeBundle() {
      const outDir = fileURLToPath(new URL('./dist', import.meta.url))
      const indexPath = join(outDir, 'index.html')
      if (!existsSync(indexPath)) return

      writeFileSync(join(outDir, '.nojekyll'), '')
      copyFileSync(indexPath, join(outDir, '404.html'))

      const topRoutes = ['start', 'theme', 'icons']
      for (const route of topRoutes) {
        const routeDir = join(outDir, route)
        mkdirSync(routeDir, { recursive: true })
        copyFileSync(indexPath, join(routeDir, 'index.html'))
      }

      const docsDir = fileURLToPath(new URL('./src/docs', import.meta.url))
      if (existsSync(docsDir)) {
        const files = readdirSync(docsDir)
        for (const file of files) {
          if (file.endsWith('.tsx')) {
            const slug = file.replace(/\.tsx$/, '')
            const compDir = join(outDir, 'components', slug)
            mkdirSync(compDir, { recursive: true })
            copyFileSync(indexPath, join(compDir, 'index.html'))
          }
        }
      }
    },
  }
}
export default defineConfig({
  base: resolveBase(),
  plugins: [
    react(),
    vue(),
    themeInit(),
    githubPagesSpa(),
    m3Api(fileURLToPath(new URL('../src', import.meta.url))),
  ],
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
