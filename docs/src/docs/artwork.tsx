import {
  ARTWORK_PALETTES,
  Artwork,
  Avatar,
  art,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  type MaterialShapeName,
} from '@m3-expressive/react'
import { defineDoc } from '../kit/doc'
import './artwork.css'

const PALETTE_NAMES = [
  '0 (Purple / Deep Violet)',
  '1 (Blue / Cyan)',
  '2 (Green / Olive & Moss)',
  '3 (Orange / Amber)',
  '4 (Teal / Turquoise)',
  '5 (Coral / Terra Cotta)',
  '6 (Rose / Mulberry)',
]

export const doc = defineDoc({
  slug: 'artwork',
  name: 'Artwork',
  group: 'foundations',
  icon: 'brush',
  order: 7,
  summary:
    'Deterministic Material 3 abstract generative artwork as animated SVG vectors. Drifts smoothly in a continuous organic loop without video assets or network requests. Perfect for card media, hero backgrounds, avatars, and carousel slides.',
  imports: [
    'Artwork',
    'art',
    'ARTWORK_PALETTES',
    'Card',
    'CardHeader',
    'CardMedia',
    'CardContent',
    'CardActions',
    'Avatar',
    'Button',
  ],
  preview: () => (
    <div style={{ width: 240, overflow: 'hidden', borderRadius: 16 }}>
      <Artwork seed={2} aspectRatio="16 / 9" animated />
    </div>
  ),
  playground: {
    controls: {
      seed: {
        type: 'select',
        options: ['0', '1', '2', '3', '4', '5', '6'],
        default: '2',
        label: 'Palette seed',
      },
      animated: { type: 'boolean', default: true, label: 'Animated drift' },
      speed: {
        type: 'select',
        options: ['0.5', '1', '1.5', '2'],
        default: '1',
        label: 'Drift speed',
      },
      aspectRatio: {
        type: 'select',
        options: ['16 / 9', '4 / 3', '2 / 1', '1 / 1', '21 / 9'],
        default: '16 / 9',
        label: 'Aspect ratio',
      },
      layout: {
        type: 'select',
        options: ['flush', 'rounded', 'inset'],
        default: 'rounded',
        label: 'Layout',
      },
      shape: {
        type: 'select',
        options: ['', 'cookie-9', 'clover-8', 'burst', 'sunny', 'flower', 'heart'],
        default: '',
        label: 'Shape mask',
      },
    },
    render: (v) => (
      <div style={{ width: '100%', maxWidth: 480 }}>
        <Artwork
          seed={Number(v.seed)}
          animated={v.animated}
          speed={Number(v.speed)}
          aspectRatio={v.aspectRatio}
          layout={v.layout as 'flush' | 'rounded' | 'inset'}
          shape={(v.shape || undefined) as MaterialShapeName | undefined}
        />
      </div>
    ),
    code: (v, { jsx, changed }) =>
      jsx('Artwork', {
        seed: Number(v.seed),
        animated: v.animated ? undefined : false,
        speed: Number(v.speed) === 1 ? undefined : Number(v.speed),
        aspectRatio: v.aspectRatio === '16 / 9' ? undefined : v.aspectRatio,
        ...changed(v, ['layout', 'shape']),
      }),
  },
  api: [
    {
      name: 'Artwork',
      interfaces: ['ArtworkProps'],
      inherits:
        'Accepts all standard `<img>` attributes. Generates SVG data URI directly in-memory.',
    },
    {
      name: 'art',
      interfaces: [],
      inherits:
        '`art(seed: number, width = 600, height = 400, options?: { animated?: boolean, speed?: number }): string` returns an SVG data URI for use in any `<img src={...}>`, `<CardMedia>`, or CSS `background-image`.',
    },
  ],
  guidelines: [
    'Use animated artwork to bring life and visual richness to empty states, card headers, and feature heroes with zero network overhead.',
    'The generator respects the user’s `prefers-reduced-motion` operating system preference automatically, pausing animations when reduced motion is preferred.',
    'Choose seeds (0–6) to match the semantic color tone of your page or section (e.g. seed 2 for nature/photos, seed 1 for technical/files, seed 4 for product/teal).',
  ],
})

/**
 * Live animated abstract art
 * Smooth, continuous organic drifting animation rendered as a self-contained SVG without video files or external requests.
 */
export function ExampleAnimated() {
  return (
    <div style={{ width: '100%', maxWidth: 560 }}>
      <Artwork seed={2} aspectRatio="16 / 9" animated layout="rounded" />
    </div>
  )
}

/**
 * In Card media (Trip to Lisbon)
 * The classic M3 card media with drifting abstract shapes, showing how `art` or `<Artwork>` elevates cards without stock photos.
 */
export function ExampleCard() {
  return (
    <Card variant="elevated" style={{ width: 340 }}>
      <CardHeader
        avatar={<Avatar name="Grace Hopper" />}
        title="Trip to Lisbon"
        subhead="Album · 48 photos"
      />
      <CardMedia src={art(2, 800, 600, { animated: true })} />
      <CardContent>Five days by the sea. Grace Hopper added 12 new photos.</CardContent>
      <CardActions>
        <Button variant="text">Download</Button>
        <Button variant="tonal">Share</Button>
      </CardActions>
    </Card>
  )
}

/**
 * Deterministic color palettes
 * Seven harmonized Material 3 color palettes mapped to seeds 0 through 6.
 */
export function ExamplePalettes() {
  return (
    <div className="artwork-doc-grid">
      {ARTWORK_PALETTES.map((_, index) => (
        <div key={PALETTE_NAMES[index]} className="artwork-doc-palette-card">
          <Artwork seed={index} aspectRatio="16 / 9" animated />
          <div className="artwork-doc-palette-info">
            <span className="m3-typescale-label-large">{PALETTE_NAMES[index]}</span>
            <code className="m3-typescale-body-small">seed={index}</code>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Expressive shape clipping
 * Masking animated generative artwork with Material 3 expressive shapes.
 */
export function ExampleShapes() {
  return (
    <div className="g-row" style={{ gap: 24, justifyContent: 'center' }}>
      <div style={{ width: 140 }}>
        <Artwork seed={0} aspectRatio="1 / 1" shape="cookie-9" animated />
      </div>
      <div style={{ width: 140 }}>
        <Artwork seed={2} aspectRatio="1 / 1" shape="clover-8" animated />
      </div>
      <div style={{ width: 140 }}>
        <Artwork seed={4} aspectRatio="1 / 1" shape="burst" animated />
      </div>
      <div style={{ width: 140 }}>
        <Artwork seed={5} aspectRatio="1 / 1" shape="sunny" animated />
      </div>
    </div>
  )
}

/**
 * Hero banner
 * Animated background banner with expressive overlaid typography and call to action.
 */
export function ExampleHero() {
  return (
    <div className="artwork-doc-hero">
      <Artwork seed={4} aspectRatio="21 / 9" animated />
      <div className="artwork-doc-hero__overlay">
        <h3 className="artwork-doc-hero__title">Material 3 Expressive Art</h3>
        <p className="artwork-doc-hero__desc">
          Continuous mathematical drifting vectors that bring expressive character to digital
          experiences.
        </p>
        <div>
          <Button variant="filled">Explore gallery</Button>
        </div>
      </div>
    </div>
  )
}
