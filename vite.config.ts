import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import pkg from './package.json' with { type: 'json' }

// Library build: one ES module per source file (so bundlers tree-shake), React and the
// runtime dependencies left as imports. Types and CSS are built by the other build steps.
// Material Color Utilities is bundled into dist/vendor: its own imports have no file
// extensions, so plain Node ESM (server rendering without a bundler) cannot load it.

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
]
const isExternal = (id: string) => external.some((dep) => id === dep || id.startsWith(`${dep}/`))

// Modules that need the browser (hooks, context, portals, event handlers) start with
// 'use client', so React Server Components frameworks load them as client modules. The others
// (theme init script, color and date helpers) stay callable on the server.
const CLIENT_ONLY = /\buse[A-Z]\w*\(|\bcreateContext\(|\bcreatePortal\(|\son[A-Z]\w*=\{/
const isClientModule = (id: string | null) =>
  !!id && /\.tsx?$/.test(id) && CLIENT_ONLY.test(readFileSync(id, 'utf8'))

export default defineConfig({
  build: {
    target: 'es2023',
    sourcemap: true,
    minify: false,
    lib: { entry: 'src/index.ts', formats: ['es'] },
    rolldownOptions: {
      external: isExternal,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (chunk) => `${chunk.name.replace(/^(.*\/)?node_modules\//, 'vendor/')}.js`,
        banner: (chunk) => (isClientModule(chunk.facadeModuleId) ? "'use client';" : ''),
      },
    },
  },
})
