import {
  Avatar,
  Button,
  MATERIAL_SHAPES,
  type MaterialShapeName,
  Select,
  Shape,
  Slider,
  useShapeMorph,
} from '@m3-expressive/react'
import { useState } from 'react'
import { IMAGES } from '../demo'
import { defineDoc } from '../kit/doc'
import './shape.css'

const CORNERS = [
  ['none', '0'],
  ['extra-small', '4dp'],
  ['small', '8dp'],
  ['medium', '12dp'],
  ['large', '16dp'],
  ['large-increased', '20dp'],
  ['extra-large', '28dp'],
  ['extra-large-increased', '32dp'],
  ['extra-extra-large', '48dp'],
  ['full', 'fully round'],
] as const

export const doc = defineDoc({
  slug: 'shape',
  name: 'Shape',
  group: 'foundations',
  icon: 'shapes',
  order: 3,
  summary:
    'The M3 Expressive shape system: a ten-step corner radius scale, the 35 shapes of the Material shape library, and shape morphing between any two of them. `Shape` draws a shape and morphs when its name changes.',
  imports: ['Shape', 'useShapeMorph', 'MATERIAL_SHAPES', 'Avatar', 'Button', 'Select', 'Slider'],
  preview: () => (
    <div className="g-preview-row shape-doc-preview">
      <Shape name="cookie-9" size={56} />
      <Shape name="clover-4" size={56} />
      <Shape name="sunny" size={56} />
      <Shape name="heart" size={56} />
    </div>
  ),
  playground: {
    controls: {
      name: { type: 'select', options: MATERIAL_SHAPES, default: 'cookie-9', label: 'Shape' },
      size: { type: 'number', default: 120, min: 24, max: 240, step: 8 },
      morph: {
        type: 'select',
        options: ['default', 'fast', 'slow', 'off'],
        default: 'default',
        label: 'Morph spring',
      },
    },
    render: (v) => (
      <Shape
        name={v.name}
        size={v.size}
        morph={v.morph === 'off' ? false : v.morph}
        className="shape-doc-primary"
        label={v.name}
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('Shape', {
        name: v.name,
        ...changed(v, ['size']),
        morph: v.morph === 'off' ? { raw: 'false' } : v.morph === 'default' ? undefined : v.morph,
      }),
  },
  api: [
    {
      name: 'Shape',
      interfaces: ['ShapeProps'],
      inherits: 'Also accepts SVG attributes. The shape is drawn in the current text color.',
    },
    {
      name: 'useShapeMorph',
      interfaces: [],
      inherits:
        '`useShapeMorph(from, to, progress, size = 1): string` returns SVG path data for the shape between `from` (0) and `to` (1), for morphs driven by scroll, a gesture or a value.',
    },
    {
      name: 'shapePath',
      interfaces: [],
      inherits:
        '`shapePath(name, size = 1): string` returns the path data of a library shape; `shapeMaskImage(name)` returns a CSS `url()` that crops any element to it with `mask-image`; `createMorph(from, to)` returns a reusable morph.',
    },
  ],
  guidelines: [
    'Use the corner radius scale for components and containers; use library shapes sparingly, for emphasis and moments of delight, mostly in visual elements.',
    'Avoid putting long text in unconventional shapes, and do not give a shape a fixed meaning.',
    'Morph shapes to show a state change, such as a selection or a process in progress. Morphs follow the spatial springs of the motion scheme.',
    'Crop images and avatars to shapes with the `shape` prop of `Avatar` and `CardMedia`.',
  ],
})

/**
 * Shape library
 * The 35 shapes of the Material shape library, built from rounded polygons as in Jetpack Compose. Select one to see its name.
 */
export function ExampleLibrary() {
  const [selected, setSelected] = useState<MaterialShapeName>('cookie-9')
  return (
    <div className="g-fill">
      <div className="shape-doc-grid">
        {MATERIAL_SHAPES.map((name) => (
          <button
            key={name}
            type="button"
            className="shape-doc-tile"
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <Shape name={name} size={48} />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * Shape morph
 * Changing `name` morphs from the old shape to the new one on a spatial spring. Pick shapes or step through them.
 */
export function ExampleMorph() {
  const [name, setName] = useState<MaterialShapeName>('circle')
  const next = () => {
    const i = MATERIAL_SHAPES.indexOf(name)
    setName(MATERIAL_SHAPES[(i + 1) % MATERIAL_SHAPES.length]!)
  }
  return (
    <div className="shape-doc-morph">
      <Shape name={name} size={160} className="shape-doc-primary" label={name} />
      <div className="g-stack" style={{ minWidth: 220 }}>
        <Select
          label="Shape"
          variant="outlined"
          value={name}
          onChange={(v) => setName(v as MaterialShapeName)}
          options={MATERIAL_SHAPES.map((s) => ({ value: s, label: s }))}
        />
        <Button icon="skip_next" onClick={next}>
          Next shape
        </Button>
      </div>
    </div>
  )
}

/**
 * Driven morph
 * `useShapeMorph` returns the in-between shape for any progress, so a slider, a scroll position or a gesture can drive the morph.
 */
export function ExampleDriven() {
  const [progress, setProgress] = useState(50)
  const path = useShapeMorph('square', 'flower', progress / 100, 100)
  return (
    <div className="shape-doc-morph">
      <svg
        viewBox="0 0 100 100"
        width={140}
        height={140}
        className="shape-doc-primary"
        role="img"
        aria-label={`Square to flower, ${progress}%`}
      >
        <path d={path} fill="currentColor" />
      </svg>
      <div style={{ width: 240 }}>
        <Slider aria-label="Morph progress" value={progress} onChange={setProgress} labeled />
      </div>
    </div>
  )
}

/**
 * Cropped images
 * `Avatar` and `CardMedia` take a `shape` that crops the image with a mask, for personal or editorial moments.
 */
export function ExampleCrop() {
  return (
    <div className="g-row" style={{ gap: 24 }}>
      <Avatar src={IMAGES[0]} name="Lisbon" size={96} shape="cookie-9" />
      <Avatar src={IMAGES[1]} name="Porto" size={96} shape="clover-4" />
      <Avatar src={IMAGES[2]} name="Sintra" size={96} shape="arch" />
      <Avatar name="Ada Lovelace" size={96} shape="sunny" />
    </div>
  )
}

/**
 * Corner radius scale
 * Ten steps, from none to fully round. Components map their corners to these tokens (`--md-sys-shape-corner-*`); the increased steps arrived with M3 Expressive.
 */
export function ExampleCorners() {
  return (
    <div className="shape-doc-corners g-fill">
      {CORNERS.map(([token, value]) => (
        <div key={token} className="shape-doc-corner">
          <span style={{ borderRadius: `var(--md-sys-shape-corner-${token})` }} />
          <code>{token}</code>
          <small>{value}</small>
        </div>
      ))}
    </div>
  )
}
