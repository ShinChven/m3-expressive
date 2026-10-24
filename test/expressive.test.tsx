import { render, screen } from '@testing-library/react'
import {
  Avatar,
  createMorph,
  MATERIAL_SHAPES,
  materialShape,
  Shape,
  SPRINGS,
  shapeMaskImage,
  shapePath,
  springDuration,
  springToLinear,
  springValue,
  Text,
} from '../src'

describe('shape library', () => {
  it('has the 35 shapes of the spec, each fitted to the unit square', () => {
    expect(MATERIAL_SHAPES).toHaveLength(35)
    for (const name of MATERIAL_SHAPES) {
      const { cubics } = materialShape(name)
      expect(cubics.length).toBeGreaterThan(2)
      const xs = cubics.flatMap((c) => [c[0], c[2], c[4], c[6]])
      const ys = cubics.flatMap((c) => [c[1], c[3], c[5], c[7]])
      expect(Math.min(...xs)).toBeGreaterThanOrEqual(-1e-6)
      expect(Math.max(...xs)).toBeLessThanOrEqual(1 + 1e-6)
      expect(Math.min(...ys)).toBeGreaterThanOrEqual(-1e-6)
      expect(Math.max(...ys)).toBeLessThanOrEqual(1 + 1e-6)
      expect(shapePath(name)).toMatch(/^M[\d.-]+ [\d.-]+C.+Z$/)
    }
  })

  it('morphs between two shapes, matching the end shapes exactly', () => {
    const morph = createMorph('circle', 'cookie-9')
    expect(morph.path(0, 100)).toBe(shapePath('circle', 100))
    expect(morph.path(1, 100)).toBe(shapePath('cookie-9', 100))
    const middle = morph.path(0.5, 100)
    expect(middle).not.toBe(morph.path(0, 100))
    expect(middle).toMatch(/^M.+Z$/)
    // Morphs between library shapes are cached.
    expect(createMorph('circle', 'cookie-9')).toBe(morph)
  })

  it('renders a shape and crops avatars with a mask', () => {
    render(
      <>
        <Shape name="heart" label="Liked" size={40} />
        <Avatar name="Ada Lovelace" shape="cookie-4" data-testid="avatar" />
      </>,
    )
    const shape = screen.getByRole('img', { name: 'Liked' })
    expect(shape.querySelector('path')?.getAttribute('d')).toBe(shapePath('heart', 100))
    expect(shapeMaskImage('cookie-4')).toMatch(/^url\("data:image\/svg\+xml,/)
    expect(screen.getByTestId('avatar')).toHaveAttribute('data-shape', 'cookie-4')
  })
})

describe('motion springs', () => {
  it('overshoots with spatial springs and settles without bounce with effects springs', () => {
    const spatial = SPRINGS.expressive.fast.spatial
    const effects = SPRINGS.expressive.fast.effects
    const peak = (spec: typeof spatial) =>
      Math.max(...Array.from({ length: 200 }, (_, i) => springValue(spec, i / 400)))
    expect(peak(spatial)).toBeGreaterThan(1.05)
    expect(peak(effects)).toBeLessThanOrEqual(1)
    expect(springValue(spatial, springDuration(spatial))).toBeCloseTo(1, 2)
  })

  it('makes the standard scheme calmer than the expressive one', () => {
    const expressive = springToLinear(SPRINGS.expressive.default.spatial)
    const standard = springToLinear(SPRINGS.standard.default.spatial)
    expect(expressive.easing).toMatch(/^linear\(0, .+, 1\)$/)
    const max = (easing: string) => Math.max(...easing.slice(7, -1).split(', ').map(Number))
    expect(max(expressive.easing)).toBeGreaterThan(max(standard.easing))
  })
})

describe('Text', () => {
  it('uses the emphasized type style when asked', () => {
    render(
      <Text variant="title-large" emphasized>
        Inbox
      </Text>,
    )
    expect(screen.getByText('Inbox')).toHaveClass('m3-typescale-emphasized-title-large')
  })
})
