import { art } from '../src'

function decode(uri: string) {
  return decodeURIComponent(uri.replace('data:image/svg+xml,', ''))
}

describe('art', () => {
  it('returns the same artwork for the same seed', () => {
    expect(art(3, 800, 600)).toBe(art(3, 800, 600))
    expect(art(3, 800, 600, { animated: true })).toBe(art(3, 800, 600, { animated: true }))
  })

  it('keeps static artwork free of animation', () => {
    const svg = decode(art(3))
    expect(svg).not.toContain('<style>')
    expect(svg).not.toContain('@keyframes')
  })

  it('animates only for viewers who have not asked for reduced motion', () => {
    const svg = decode(art(3, 800, 600, { animated: true }))
    expect(svg.match(/@keyframes/g)).toHaveLength(6)
    expect(svg).toContain('@media (prefers-reduced-motion:no-preference){.m0{')
  })

  it('draws the animated shapes where the static ones are', () => {
    for (const seed of [0, 2, 7, 11]) {
      const animated = decode(art(seed, 800, 600, { animated: true }))
        .replace(/<style>.*<\/style>/, '')
        .replace(/<g class='m\d'>|<\/g>/g, '')
      expect(animated).toBe(decode(art(seed, 800, 600)))
    }
  })
})
