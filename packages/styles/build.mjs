import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { bundle } from 'lightningcss'

const dist = new URL('./dist/', import.meta.url)
const src = new URL('./src/', import.meta.url)
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
if (map) writeFileSync(new URL('styles.css.map', dist), map)
copyFileSync(new URL('fonts.css', src), new URL('fonts.css', dist))
console.log('✓ @m3-expressive/styles built')
