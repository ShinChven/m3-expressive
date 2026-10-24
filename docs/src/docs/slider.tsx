import { RangeSlider, Slider } from '@m3-expressive/react'
import { useId, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

const FORMATS = {
  plain: undefined,
  percent: (v: number) => `${v}%`,
  dollars: (v: number) => `$${v}`,
}

const FORMAT_CODE = {
  plain: undefined,
  percent: raw(`(v) => \`\${v}%\``),
  dollars: raw(`(v) => \`$\${v}\``),
}

export const doc = defineDoc({
  slug: 'slider',
  name: 'Slider',
  group: 'selection',
  icon: 'tune',
  order: 5,
  summary:
    'Sliders let people choose a value along a scale: standard, centered (from the middle) or a range with `RangeSlider`. They come in five sizes, horizontal or vertical, with optional stops and an inset icon.',
  imports: ['Slider', 'RangeSlider'],
  preview: () => (
    <div className="g-preview-col">
      <Slider aria-label="Volume" defaultValue={60} />
      <RangeSlider thumbLabels={['Minimum', 'Maximum']} defaultValue={[20, 70]} step={10} stops />
    </div>
  ),
  playground: {
    controls: {
      variant: { type: 'select', options: ['standard', 'centered', 'range'], default: 'standard' },
      size: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], default: 'xs' },
      insetIcon: { type: 'boolean', default: false, label: 'Inset icon (md and up)' },
      step: { type: 'number', default: 1, min: 1, max: 25, step: 1 },
      stops: { type: 'boolean', default: false },
      labeled: { type: 'boolean', default: true, label: 'Value label' },
      format: {
        type: 'select',
        options: ['plain', 'percent', 'dollars'],
        default: 'percent',
        label: 'Format value',
      },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) =>
      v.variant === 'range' ? (
        <RangeSlider
          thumbLabels={['Minimum price', 'Maximum price']}
          defaultValue={[20, 80]}
          size={v.size}
          step={v.step}
          stops={v.stops}
          labeled={v.labeled}
          formatValue={FORMATS[v.format]}
          disabled={v.disabled}
        />
      ) : (
        <Slider
          key={v.variant}
          aria-label="Volume"
          defaultValue={60}
          centered={v.variant === 'centered'}
          size={v.size}
          insetIcon={v.insetIcon && v.variant === 'standard' ? 'volume_up' : undefined}
          step={v.step}
          stops={v.stops}
          labeled={v.labeled}
          formatValue={FORMATS[v.format]}
          disabled={v.disabled}
        />
      ),
    code: (v, { jsx, changed }) =>
      jsx(v.variant === 'range' ? 'RangeSlider' : 'Slider', {
        'aria-label': v.variant === 'range' ? undefined : 'Volume',
        thumbLabels: v.variant === 'range' ? raw("['Minimum price', 'Maximum price']") : undefined,
        defaultValue: v.variant === 'range' ? raw('[20, 80]') : 60,
        centered: v.variant === 'centered',
        ...changed(v, ['size', 'step']),
        insetIcon: v.insetIcon && v.variant === 'standard' ? 'volume_up' : undefined,
        stops: v.stops,
        labeled: v.labeled,
        formatValue: FORMAT_CODE[v.format],
        disabled: v.disabled,
      }),
  },
  api: [
    {
      name: 'Slider',
      interfaces: ['SliderBaseProps', 'SliderProps'],
      inherits:
        'For `Slider`, `V` is `number`. Arrow keys move by `step`, Page Up and Page Down by a tenth of the scale, and Home and End to the ends.',
    },
    {
      name: 'RangeSlider',
      interfaces: ['SliderBaseProps'],
      inherits:
        'For `RangeSlider`, `V` is `[number, number]`. Also takes `thumbLabels`, the accessible names of the start and end handles. A handle cannot pass the other one.',
    },
  ],
  guidelines: [
    'Use a slider when an approximate value is fine and the scale helps people choose. For an exact number, use a text field.',
    'Always give the slider an accessible name: `aria-label`, `aria-labelledby`, or `thumbLabels` for a range.',
    'Use `stops` with a large `step`, so that each stop is easy to see and to hit. Show `labeled` values when the number matters.',
    'Use larger sizes and an inset icon for prominent controls such as volume or brightness; use vertical sliders where height is plentiful.',
    'Save costly changes in `onChangeEnd`, which runs once on release, and keep `onChange` for the live preview.',
  ],
})

/**
 * Value label and format
 * `labeled` shows the value above the thumb while people drag or focus it. `formatValue` sets the text, also for screen readers.
 */
export function ExampleLabeled() {
  const [volume, setVolume] = useState(40)
  const id = useId()
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <span id={id} className="m3-typescale-title-small">
        Volume: {volume}%
      </span>
      <Slider
        aria-labelledby={id}
        value={volume}
        onChange={setVolume}
        labeled
        formatValue={(v) => `${v}%`}
      />
    </div>
  )
}

/**
 * Stops
 * `step` limits the values, and `stops` shows a stop indicator at each one (formerly the discrete slider). Use few, large steps.
 */
export function ExampleSteps() {
  const [columns, setColumns] = useState(3)
  const id = useId()
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <span id={id} className="m3-typescale-title-small">
        Photos per row: {columns}
      </span>
      <Slider
        aria-labelledby={id}
        min={1}
        max={6}
        step={1}
        stops
        labeled
        value={columns}
        onChange={setColumns}
      />
    </div>
  )
}

/**
 * Range
 * `RangeSlider` has a start and an end thumb, for example to filter flights by length. Name both thumbs with `thumbLabels`.
 */
export function ExampleRange() {
  const [hours, setHours] = useState<[number, number]>([2, 10])
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <span className="m3-typescale-title-small">
        Flight time: {hours[0]} to {hours[1]} hours
      </span>
      <RangeSlider
        thumbLabels={['Shortest flight time', 'Longest flight time']}
        min={0}
        max={24}
        step={1}
        value={hours}
        onChange={setHours}
        labeled
      />
    </div>
  )
}

/**
 * Save on release
 * `onChange` runs while people drag; `onChangeEnd` runs once when they let go or press a key. Save the value there.
 */
export function ExampleChangeEnd() {
  const [quality, setQuality] = useState(80)
  const [saved, setSaved] = useState(80)
  const id = useId()
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <span id={id} className="m3-typescale-title-small">
        Image quality: {quality}
      </span>
      <Slider
        aria-labelledby={id}
        min={10}
        max={100}
        step={10}
        stops
        value={quality}
        onChange={setQuality}
        onChangeEnd={setSaved}
      />
      <span className="g-muted">Saved quality: {saved}</span>
    </div>
  )
}

/**
 * Disabled
 * A disabled slider shows the value but ignores pointer and keyboard input.
 */
export function ExampleDisabled() {
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <Slider aria-label="Thumbnail size" defaultValue={30} disabled />
      <RangeSlider
        thumbLabels={['Minimum price', 'Maximum price']}
        defaultValue={[20, 60]}
        step={20}
        stops
        disabled
      />
    </div>
  )
}

/**
 * Centered
 * `centered` runs the active track from the middle of the scale, for values that go both ways, such as balance or exposure.
 */
export function ExampleCentered() {
  const [balance, setBalance] = useState(0)
  const id = useId()
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <span id={id} className="m3-typescale-title-small">
        Balance: {balance > 0 ? `${balance} right` : balance < 0 ? `${-balance} left` : 'center'}
      </span>
      <Slider
        aria-labelledby={id}
        centered
        min={-10}
        max={10}
        value={balance}
        onChange={setBalance}
        labeled
      />
    </div>
  )
}

/**
 * Sizes and inset icon
 * Five sizes, from the 16dp track of XS (the default) to the 96dp track of XL. From M up, `insetIcon` puts an icon inside the track; it moves past the handle when the active track is too short for it.
 */
export function ExampleSizes() {
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <Slider aria-label="Extra small" defaultValue={40} size="xs" />
      <Slider aria-label="Small" defaultValue={50} size="sm" />
      <Slider aria-label="Media volume" defaultValue={60} size="md" insetIcon="volume_up" />
      <Slider aria-label="Brightness" defaultValue={10} size="lg" insetIcon="light_mode" />
      <Slider aria-label="Ring volume" defaultValue={70} size="xl" insetIcon="notifications" />
    </div>
  )
}

/**
 * Vertical
 * `orientation="vertical"` grows upwards; give the slider a height. Arrow keys still move by `step`.
 */
export function ExampleVertical() {
  const [levels, setLevels] = useState([60, 30, 80])
  return (
    <div className="g-row" style={{ height: 240, gap: 24 }}>
      {['Bass', 'Mid', 'Treble'].map((band, i) => (
        <Slider
          key={band}
          aria-label={band}
          orientation="vertical"
          size="md"
          value={levels[i]}
          onChange={(v) => setLevels((all) => all.map((x, j) => (j === i ? v : x)))}
          labeled
        />
      ))}
    </div>
  )
}
