// Builds dist/styles.css (all component styles, with the @imports inlined) and copies
// dist/fonts.css. fonts.css keeps its package @imports: the app bundler resolves them from
// this package's dependencies. Also copies the license of each package bundled into
// dist/vendor, which its license requires.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bundle } from 'lightningcss'

const dist = new URL('../dist/', import.meta.url)
const src = new URL('../src/styles/', import.meta.url)
mkdirSync(dist, { recursive: true })

const { code, map } = bundle({
  filename: new URL('index.css', src).pathname,
  sourceMap: true,
  minify: false,
})
writeFileSync(
  new URL('styles.css', dist),
  `${code.toString()}\n/*# sourceMappingURL=styles.css.map */\n`,
)
writeFileSync(new URL('styles.css.map', dist), map)
copyFileSync(new URL('fonts.css', src), new URL('fonts.css', dist))

// The folder of an installed package (its exports may not include package.json).
function packageRoot(name) {
  let dir = dirname(fileURLToPath(import.meta.resolve(name)))
  while (JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8')).name !== name) {
    const parent = dirname(dir)
    if (parent === dir) throw new Error(`Cannot find the folder of ${name}`)
    dir = parent
  }
  return dir
}

for (const name of ['@material/material-color-utilities']) {
  const target = join(fileURLToPath(dist), 'vendor', name)
  mkdirSync(target, { recursive: true })
  copyFileSync(join(packageRoot(name), 'LICENSE'), join(target, 'LICENSE'))
}
