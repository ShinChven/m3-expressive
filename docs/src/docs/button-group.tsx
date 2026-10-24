import { Button, ButtonGroup, IconButton } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

export const doc = defineDoc({
  slug: 'button-group',
  name: 'Button group',
  group: 'actions',
  icon: 'view_week',
  order: 2,
  summary:
    'Button groups hold buttons and icon buttons and add expressive interactions between them. In a standard group the pressed button grows into its neighbours; a connected group joins its buttons and, with selection, replaces the segmented button.',
  imports: ['ButtonGroup', 'Button', 'IconButton'],
  preview: () => (
    <div className="g-preview-col">
      <ButtonGroup variant="connected" selection="single" defaultValue="week" aria-label="Range">
        <Button value="day">Day</Button>
        <Button value="week">Week</Button>
        <Button value="month">Month</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Playback">
        <IconButton variant="tonal" icon="skip_previous" label="Previous" />
        <IconButton variant="filled" width="wide" icon="play_arrow" label="Play" />
        <IconButton variant="tonal" icon="skip_next" label="Next" />
      </ButtonGroup>
    </div>
  ),
  playground: {
    controls: {
      variant: { type: 'select', options: ['standard', 'connected'], default: 'connected' },
      selection: {
        type: 'select',
        options: ['none', 'single', 'multiple'],
        default: 'single',
      },
      size: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], default: 'sm' },
      shape: { type: 'select', options: ['round', 'square'], default: 'round' },
      buttonVariant: {
        type: 'select',
        options: ['filled', 'tonal', 'elevated', 'outlined'],
        default: 'filled',
        label: 'Button color',
      },
      fullWidth: { type: 'boolean', default: false, label: 'Full width' },
    },
    render: function ButtonGroupPlayground(v) {
      const [single, setSingle] = useState<string | null>('week')
      const [multiple, setMultiple] = useState<string[]>(['day'])
      const buttons = (
        <>
          <Button variant={v.buttonVariant} value="day">
            Day
          </Button>
          <Button variant={v.buttonVariant} value="week">
            Week
          </Button>
          <Button variant={v.buttonVariant} value="month">
            Month
          </Button>
        </>
      )
      const common = {
        variant: v.variant,
        size: v.size,
        shape: v.shape,
        fullWidth: v.fullWidth,
        'aria-label': 'Range',
      } as const
      if (v.selection === 'single') {
        return (
          <ButtonGroup {...common} selection="single" value={single} onChange={setSingle}>
            {buttons}
          </ButtonGroup>
        )
      }
      if (v.selection === 'multiple') {
        return (
          <ButtonGroup {...common} selection="multiple" value={multiple} onChange={setMultiple}>
            {buttons}
          </ButtonGroup>
        )
      }
      return <ButtonGroup {...common}>{buttons}</ButtonGroup>
    },
    code: (v, { jsx, changed }) => {
      const button = (value: string, label: string) =>
        jsx(
          'Button',
          { variant: v.buttonVariant === 'filled' ? undefined : v.buttonVariant, value },
          label,
        )
      const children = [
        button('day', 'Day'),
        button('week', 'Week'),
        button('month', 'Month'),
      ].join('\n')
      return jsx(
        'ButtonGroup',
        {
          ...changed(v, ['variant', 'size', 'shape']),
          selection: v.selection === 'none' ? undefined : v.selection,
          value: v.selection === 'none' ? undefined : raw('value'),
          onChange: v.selection === 'none' ? undefined : raw('setValue'),
          fullWidth: v.fullWidth,
          'aria-label': 'Range',
        },
        children,
      )
    },
  },
  api: [
    {
      name: 'ButtonGroup',
      interfaces: ['ButtonGroupBaseProps', 'ButtonGroupSingleProps', 'ButtonGroupMultipleProps'],
      inherits:
        'Also accepts native `<div>` attributes. Buttons and icon buttons inside take the group `size` and `shape` unless they set their own; with `selection`, buttons with a `value` become selectable.',
    },
  ],
  guidelines: [
    'Use a connected group with `selection` for two to five related options, such as a view switch; it replaces the segmented button.',
    'Use a standard group for related actions. Use filled, tonal, elevated or outlined buttons, not text or standard icon buttons, which have no container.',
    'Give every selectable group an `aria-label`. A single-select group is a radio group: arrow keys move the selection.',
    'Selection is required in single-select groups by default; set `required={false}` to let people clear it.',
  ],
})

/**
 * Connected single select
 * A connected group joins its buttons with 2dp gaps and small inner corners. The selected button becomes fully round and takes the selected color.
 */
export function ExampleConnected() {
  const [view, setView] = useState<string | null>('list')
  return (
    <ButtonGroup
      variant="connected"
      selection="single"
      aria-label="View"
      value={view}
      onChange={setView}
    >
      <Button value="list" icon="view_list">
        List
      </Button>
      <Button value="grid" icon="grid_view">
        Grid
      </Button>
      <Button value="map" icon="map">
        Map
      </Button>
    </ButtonGroup>
  )
}

/**
 * Multi select
 * With `selection="multiple"`, each button toggles on its own. Icon buttons work the same way.
 */
export function ExampleMultiple() {
  const [days, setDays] = useState<string[]>(['mon', 'wed'])
  const [styles, setStyles] = useState<string[]>(['bold'])
  return (
    <div className="g-stack">
      <ButtonGroup
        variant="connected"
        selection="multiple"
        size="xs"
        aria-label="Repeat on"
        value={days}
        onChange={setDays}
      >
        {['mon', 'tue', 'wed', 'thu', 'fri'].map((day) => (
          <Button key={day} variant="tonal" value={day}>
            {day[0]!.toUpperCase() + day.slice(1)}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup
        variant="connected"
        selection="multiple"
        size="xs"
        aria-label="Text style"
        value={styles}
        onChange={setStyles}
      >
        <IconButton variant="tonal" value="bold" icon="format_bold" label="Bold" />
        <IconButton variant="tonal" value="italic" icon="format_italic" label="Italic" />
        <IconButton variant="tonal" value="underline" icon="format_underlined" label="Underline" />
      </ButtonGroup>
    </div>
  )
}

/**
 * Standard group
 * In a standard group, the pressed button grows by 15% and its neighbours make room, on a fast spatial spring. Press and hold a button to see it.
 */
export function ExampleStandard() {
  return (
    <div className="g-stack">
      <ButtonGroup aria-label="Playback">
        <IconButton variant="tonal" icon="skip_previous" label="Previous" />
        <IconButton variant="filled" width="wide" icon="play_arrow" label="Play" />
        <IconButton variant="tonal" icon="skip_next" label="Next" />
      </ButtonGroup>
      <ButtonGroup aria-label="Message actions">
        <Button variant="tonal" icon="reply">
          Reply
        </Button>
        <Button variant="tonal" icon="forward">
          Forward
        </Button>
        <Button variant="outlined" icon="archive">
          Archive
        </Button>
      </ButtonGroup>
    </div>
  )
}

/**
 * Sizes and shapes
 * The group sets the size and shape of every button inside, from XS to XL, round or square.
 */
export function ExampleSizes() {
  const [size, setSize] = useState<string | null>('sm')
  return (
    <div className="g-stack">
      {(['xs', 'sm', 'md'] as const).map((s) => (
        <ButtonGroup
          key={s}
          variant="connected"
          selection="single"
          size={s}
          shape={s === 'md' ? 'square' : 'round'}
          aria-label={`Size ${s}`}
          value={size}
          onChange={setSize}
        >
          <Button value="xs">One</Button>
          <Button value="sm">Two</Button>
          <Button value="md">Three</Button>
        </ButtonGroup>
      ))}
    </div>
  )
}

/**
 * Full width
 * `fullWidth` stretches the group to its container; the buttons share the width equally.
 */
export function ExampleFullWidth() {
  const [plan, setPlan] = useState<string | null>('yearly')
  return (
    <div style={{ width: 'min(100%, 420px)' }}>
      <ButtonGroup
        variant="connected"
        selection="single"
        fullWidth
        aria-label="Billing period"
        value={plan}
        onChange={setPlan}
      >
        <Button variant="outlined" value="monthly">
          Monthly
        </Button>
        <Button variant="outlined" value="yearly">
          Yearly
        </Button>
      </ButtonGroup>
    </div>
  )
}
