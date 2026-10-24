import { Button, Card, CardContent, CardHeader } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'
import './spacing.css'

const TOKENS = [
  ['space0', 0],
  ['space25', 2],
  ['space50', 4],
  ['space75', 6],
  ['space100', 8],
  ['space125', 10],
  ['space150', 12],
  ['space175', 14],
  ['space200', 16],
  ['space250', 20],
  ['space300', 24],
  ['space400', 32],
  ['space500', 40],
  ['space600', 48],
  ['space700', 56],
  ['space800', 64],
  ['space900', 72],
] as const

export const doc = defineDoc({
  slug: 'spacing',
  name: 'Spacing',
  group: 'foundations',
  icon: 'space_bar',
  order: 6,
  summary:
    'Spacing tokens (M3 Expressive) set the padding, gaps and margins of components and layouts on an 8dp scale: `space100` is 8dp, with nested units such as `space25` (2dp) and `space150` (12dp) for finer steps.',
  imports: ['Button', 'Card', 'CardHeader', 'CardContent'],
  preview: () => (
    <div className="spacing-doc-preview" aria-hidden="true">
      {[4, 8, 16, 24, 32].map((size) => (
        <span key={size} style={{ width: size, height: size }} />
      ))}
    </div>
  ),
  playground: {
    controls: {
      padding: {
        type: 'select',
        options: ['space100', 'space150', 'space200', 'space300', 'space400'],
        default: 'space200',
      },
      gap: {
        type: 'select',
        options: ['space50', 'space100', 'space150', 'space200', 'space300'],
        default: 'space150',
      },
    },
    render: (v) => (
      <div
        className="spacing-doc-box"
        style={{
          padding: `var(--md-sys-measurement-${v.padding})`,
          gap: `var(--md-sys-measurement-${v.gap})`,
        }}
      >
        <span />
        <span />
        <span />
      </div>
    ),
    code: (v) =>
      `.toolbar {\n  display: flex;\n  padding: var(--md-sys-measurement-${v.padding});\n  gap: var(--md-sys-measurement-${v.gap});\n}`,
  },
  api: [
    {
      name: 'Spacing tokens',
      interfaces: [],
      inherits:
        'CSS custom properties `--md-sys-measurement-space0` to `--md-sys-measurement-space900`, defined in `styles.css`. Components map their padding and gaps to them, so a product can change density by remapping a token.',
    },
  ],
  guidelines: [
    'Apply spacing tokens to padding, gaps and margins instead of hard-coded values.',
    'Prefer padding on containers and gaps between items over margins on child elements.',
    'Use the nested units (2, 4, 6, 10, 12, 14dp) inside components; use the main 8dp steps for layout.',
    'To adapt to a form factor or density, change which token a pattern maps to rather than the token value itself.',
  ],
})

/**
 * The scale
 * Every spacing token, from 0 to 72dp. The main units are multiples of 8dp; the nested units fill the steps components need.
 */
export function ExampleScale() {
  return (
    <div className="spacing-doc-scale g-fill">
      {TOKENS.map(([name, value]) => (
        <div key={name} className="spacing-doc-step">
          <code>{name}</code>
          <span style={{ width: `var(--md-sys-measurement-${name})` }} />
          <small>{value}dp</small>
        </div>
      ))}
    </div>
  )
}

/**
 * Padding and gaps
 * A card maps its content padding to `space200` and the gap between actions to `space100`. Change the density to remap both.
 */
export function ExampleDensity() {
  const [dense, setDense] = useState(false)
  return (
    <div className="g-stack" style={{ alignItems: 'flex-start' }}>
      <Card
        variant="outlined"
        className="spacing-doc-card"
        style={{
          ['--spacing-doc-padding' as string]: dense
            ? 'var(--md-sys-measurement-space150)'
            : 'var(--md-sys-measurement-space300)',
          ['--spacing-doc-gap' as string]: dense
            ? 'var(--md-sys-measurement-space50)'
            : 'var(--md-sys-measurement-space150)',
        }}
      >
        <CardHeader title="Weekly report" subhead="Ready to share" />
        <CardContent>
          <div className="spacing-doc-actions">
            <Button variant="tonal">Preview</Button>
            <Button>Share</Button>
          </div>
        </CardContent>
      </Card>
      <Button variant="text" icon="density_medium" onClick={() => setDense(!dense)}>
        {dense ? 'Comfortable' : 'Dense'}
      </Button>
    </div>
  )
}
