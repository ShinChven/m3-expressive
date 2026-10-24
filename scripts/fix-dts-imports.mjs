// The sources import without file extensions (bundler style). Declaration files in an ES
// module package need explicit ones for `moduleResolution: node16/nodenext`, so this rewrites
// every relative import in dist/**/*.d.ts to the .js file (or folder index) it refers to.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const SPECIFIER = /(\bfrom\s+|\bimport\s*\(\s*|\bimport\s+)(['"])(\.{1,2}\/[^'"]*)\2/g

function withExtension(fromDir, specifier) {
  if (/\.(js|mjs|cjs|json|css)$/.test(specifier)) return specifier
  const target = specifier.replace(/\.tsx?$/, '')
  if (existsSync(join(fromDir, `${target}.d.ts`))) return `${target}.js`
  if (existsSync(join(fromDir, target, 'index.d.ts'))) return `${target}/index.js`
  throw new Error(`Cannot resolve "${specifier}" from ${fromDir}`)
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path)
    else if (entry.name.endsWith('.d.ts')) {
      const source = readFileSync(path, 'utf8')
      const fixed = source.replace(
        SPECIFIER,
        (_, lead, quote, spec) => `${lead}${quote}${withExtension(dirname(path), spec)}${quote}`,
      )
      if (fixed !== source) writeFileSync(path, fixed)
    }
  }
}

walk(dist)
