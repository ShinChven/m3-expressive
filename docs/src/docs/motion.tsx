import {
  Button,
  ButtonGroup,
  type MotionScheme,
  SPRINGS,
  type SpringSpeed,
  springToLinear,
  ThemeScope,
} from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'
import './motion.css'

export const doc = defineDoc({
  slug: 'motion',
  name: 'Motion',
  group: 'foundations',
  icon: 'animation',
  order: 5,
  summary:
    'M3 Expressive motion runs on springs. Spatial springs move things and overshoot; effects springs fade colors and opacity without overshoot. Two motion schemes, Expressive and Standard, set the character of every animation.',
  imports: ['ThemeScope', 'Button', 'ButtonGroup', 'SPRINGS', 'springToLinear'],
  preview: () => (
    <div className="motion-doc-preview" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  ),
  playground: {
    controls: {
      motionScheme: {
        type: 'select',
        options: ['expressive', 'standard'],
        default: 'expressive',
        label: 'Motion scheme',
      },
      speed: { type: 'select', options: ['fast', 'default', 'slow'], default: 'default' },
    },
    render: function MotionPlayground(v) {
      const [moved, setMoved] = useState(false)
      return (
        <ThemeScope motionScheme={v.motionScheme} className="motion-doc-stage">
          <div className="motion-doc-track">
            <span
              className="motion-doc-ball"
              data-speed={v.speed}
              data-moved={moved ? '' : undefined}
            />
          </div>
          <Button variant="tonal" icon="play_arrow" onClick={() => setMoved(!moved)}>
            Move
          </Button>
        </ThemeScope>
      )
    },
    code: (v, { jsx }) =>
      `${jsx('ThemeScope', { motionScheme: v.motionScheme }, '{/* animations inside use this scheme */}')}\n\n/* CSS */\n.ball {\n  transition: translate var(--md-sys-motion-spring-${v.speed}-spatial-duration)\n    var(--md-sys-motion-spring-${v.speed}-spatial);\n}`,
  },
  api: [
    {
      name: 'SPRINGS',
      interfaces: ['SpringSpec'],
      inherits:
        '`SPRINGS[scheme][speed][kind]` holds the damping ratio and stiffness of every spring token. `springToLinear(spec)` turns one into a CSS `linear()` easing with its duration; `animateSpring(options)` runs an interruptible spring in JavaScript.',
    },
    {
      name: 'Motion tokens',
      interfaces: [],
      inherits:
        'CSS: `--md-sys-motion-spring-{fast|default|slow}-{spatial|effects}` with a `-duration` partner. `ThemeProvider` sets `data-motion-scheme` on the root from `motionScheme`; any element with `data-motion-scheme="standard"` (or `ThemeScope motionScheme`) switches its subtree. With `prefers-reduced-motion`, spatial springs settle without overshoot.',
    },
  ],
  guidelines: [
    'Use spatial springs for position, size, rotation and corner radius, and effects springs for color and opacity.',
    'Most motion uses the default speed; small components such as switches and buttons use fast, and full-screen changes use slow.',
    'Choose the Expressive scheme for most products and the Standard scheme for utilitarian ones. Set it once for the app.',
    'Container transitions (dialogs and sheets appearing) keep the easing and duration tokens, as the spec does.',
  ],
})

const SPEEDS: SpringSpeed[] = ['fast', 'default', 'slow']

/**
 * Expressive and Standard
 * The same spatial springs in both schemes. Expressive springs overshoot and bounce into place; Standard springs settle with almost no bounce.
 */
export function ExampleSchemes() {
  const [moved, setMoved] = useState(false)
  return (
    <div className="g-stack g-fill">
      {(['expressive', 'standard'] as const).map((scheme) => (
        <ThemeScope key={scheme} motionScheme={scheme} className="motion-doc-row">
          <span className="motion-doc-label">{scheme}</span>
          <div className="motion-doc-track">
            <span className="motion-doc-ball" data-moved={moved ? '' : undefined} />
          </div>
        </ThemeScope>
      ))}
      <Button variant="tonal" icon="play_arrow" onClick={() => setMoved(!moved)}>
        Move
      </Button>
    </div>
  )
}

/**
 * Spatial and effects
 * A spatial spring moves the square and rounds its corners; an effects spring changes its color. Only the spatial spring overshoots.
 */
export function ExampleKinds() {
  const [on, setOn] = useState(false)
  return (
    <div className="g-row" style={{ gap: 32 }}>
      <span className="motion-doc-square" data-on={on ? '' : undefined} />
      <Button icon="swap_horiz" onClick={() => setOn(!on)}>
        Toggle
      </Button>
    </div>
  )
}

/**
 * Speeds
 * Fast for small elements, default for most, slow for large ones. The curves are the exact spring curves that the tokens use; the dashed line is the target value.
 */
export function ExampleSpeeds() {
  const [scheme, setScheme] = useState<MotionScheme>('expressive')
  return (
    <div className="g-stack g-fill">
      <ButtonGroup
        variant="connected"
        selection="single"
        aria-label="Motion scheme"
        value={scheme}
        onChange={(next) => next && setScheme(next as MotionScheme)}
      >
        <Button variant="tonal" value="expressive">
          Expressive
        </Button>
        <Button variant="tonal" value="standard">
          Standard
        </Button>
      </ButtonGroup>
      <div className="motion-doc-curves">
        {SPEEDS.map((speed) => (
          <figure key={speed} className="motion-doc-curve">
            <SpringCurve scheme={scheme} speed={speed} />
            <figcaption>
              {speed} spatial · {springToLinear(SPRINGS[scheme][speed].spatial).duration}ms
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function SpringCurve({ scheme, speed }: { scheme: MotionScheme; speed: SpringSpeed }) {
  const { easing } = springToLinear(SPRINGS[scheme][speed].spatial, 60)
  const values = easing.slice(7, -1).split(', ').map(Number)
  const points = values
    .map((v, i) => `${(i / (values.length - 1)) * 200},${100 - v * 70 + 10}`)
    .join(' ')
  return (
    <svg viewBox="0 0 200 110" width="200" height="110" role="img" aria-label={`${speed} curve`}>
      <line x1="0" y1="10" x2="200" y2="10" className="motion-doc-target" />
      <polyline points={points} className="motion-doc-line" />
    </svg>
  )
}
