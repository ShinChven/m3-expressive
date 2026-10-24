export const ARTWORK_PALETTES = [
  ['#6750a4', '#eaddff', '#7d5260', '#ffd8e4'],
  ['#0b57d0', '#d3e3fd', '#00639b', '#c2e7ff'],
  ['#386a20', '#b7f397', '#55624c', '#d9e7cb'],
  ['#8b5000', '#ffdcbe', '#725a42', '#ffddb3'],
  ['#006a6a', '#6ff7f6', '#4a6363', '#cce8e7'],
  ['#b4232a', '#ffdad6', '#775653', '#ffdad5'],
  ['#8e4585', '#ffd7f3', '#6e5869', '#f8daee'],
] as const

function rand(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export interface ArtOptions {
  /**
   * Makes the shapes drift slowly in a loop. The layout matches the static artwork, which viewers
   * who ask for reduced motion see instead.
   */
  animated?: boolean
}

/**
 * Generates raw SVG markup for deterministic Material 3 abstract artwork.
 */
export function artSvg(
  seed = 0,
  width = 600,
  height = 400,
  { animated = false }: ArtOptions = {},
): string {
  const r = rand(seed * 7919 + 13)
  const motion = rand(seed * 104729 + 7)
  const palette = ARTWORK_PALETTES[Math.abs(seed) % ARTWORK_PALETTES.length]!
  const [a, b, c, d] = palette
  const shapes: string[] = []
  const keyframes: string[] = []

  for (let i = 0; i < 6; i++) {
    const cx = Math.round(r() * width)
    const cy = Math.round(r() * height)
    const rad = Math.round(40 + r() * 180)
    const fill = [a, c, d, b][i % 4]!
    const shape =
      i % 3 === 0
        ? `<circle cx='${cx}' cy='${cy}' r='${rad}' fill='${fill}' opacity='0.85'/>`
        : `<rect x='${cx - rad}' y='${cy - rad / 2}' width='${rad * 1.6}' height='${rad}' rx='${rad / 2}' fill='${fill}' opacity='0.8' transform='rotate(${Math.round(r() * 90 - 45)} ${cx} ${cy})'/>`

    if (!animated) {
      shapes.push(shape)
      continue
    }

    const dx = Math.round((motion() - 0.5) * width * 0.16)
    const dy = Math.round((motion() - 0.5) * height * 0.16)
    const turn = Math.round((motion() - 0.5) * 24)
    const scale = (0.92 + motion() * 0.16).toFixed(2)
    const duration = Math.round(10 + motion() * 8)
    const delay = Math.round(motion() * duration)
    shapes.push(`<g class='m${i}'>${shape}</g>`)
    keyframes.push(
      `.m${i}{animation:m${i} ${duration}s ease-in-out -${delay}s infinite}@keyframes m${i}{50%{transform:translate(${dx}px,${dy}px) rotate(${turn}deg) scale(${scale})}}`,
    )
  }

  const style = animated
    ? `<style>g{transform-box:fill-box;transform-origin:center}@media (prefers-reduced-motion:no-preference){${keyframes.join('')}}</style>`
    : ''

  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}' preserveAspectRatio='xMidYMid slice'>${style}<rect width='${width}' height='${height}' fill='${b}'/>${shapes.join('')}</svg>`
}

/**
 * Generates deterministic Material 3 abstract artwork as SVG data URIs.
 * Suitable for card media, hero backgrounds, avatars, and decorative illustrations.
 *
 * @param seed - Numeric seed selecting palette and layout
 * @param width - ViewBox width in px (default: 600)
 * @param height - ViewBox height in px (default: 400)
 * @param options - `animated: true` returns drifting shapes
 * @returns SVG Data URI string (`data:image/svg+xml,...`)
 */
export function art(seed = 0, width = 600, height = 400, options: ArtOptions = {}): string {
  const svg = artSvg(seed, width, height, options)
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
