import {
  Button,
  ButtonGroup,
  Icon,
  Select,
  Slider,
  Switch,
  TextField,
} from 'material-design-3-expressive-components'
import { createElement, type ReactNode, useMemo, useState } from 'react'
import { CodeBlock } from './CodeBlock'
import {
  type Control,
  type Controls,
  makeHelpers,
  type Playground as PlaygroundDef,
  type Values,
} from './doc'

/** Icons offered by `icon` controls ('' = no icon). */
const ICONS = [
  '',
  'add',
  'edit',
  'upload',
  'delete',
  'search',
  'favorite',
  'share',
  'settings',
  'download',
  'send',
  'event',
]

function defaults<C extends Controls>(controls: C): Values<C> {
  return Object.fromEntries(Object.entries(controls).map(([k, c]) => [k, c.default])) as Values<C>
}

function labelOf(key: string, control: Control) {
  return control.label ?? key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())
}

function ControlInput({
  name,
  control,
  value,
  onChange,
}: {
  name: string
  control: Control
  value: unknown
  onChange: (value: unknown) => void
}) {
  const label = labelOf(name, control)
  switch (control.type) {
    case 'boolean':
      return (
        <Switch
          label={label}
          checked={value as boolean}
          onChange={(e) => onChange(e.target.checked)}
        />
      )
    case 'select':
      if (control.options.length <= 3 && control.options.every((o) => o.length <= 9)) {
        return (
          <div className="g-control">
            <span className="g-control__label" id={`ctl-${name}`}>
              {label}
            </span>
            <ButtonGroup
              variant="connected"
              selection="single"
              size="xs"
              aria-labelledby={`ctl-${name}`}
              value={value as string}
              onChange={(v) => v !== null && onChange(v)}
            >
              {control.options.map((o) => (
                <Button key={o} variant="tonal" value={o}>
                  {o}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        )
      }
      return (
        <Select
          variant="outlined"
          label={label}
          fullWidth
          value={value as string}
          onChange={onChange}
          options={control.options.map((o) => ({ value: o, label: o }))}
        />
      )
    case 'icon':
      return (
        <Select
          variant="outlined"
          label={label}
          fullWidth
          value={(value as string) || 'none'}
          onChange={(v) => onChange(v === 'none' ? '' : v)}
          options={ICONS.map((i) => ({
            value: i || 'none',
            label: i || 'None',
            icon: i ? <Icon name={i} /> : undefined,
          }))}
        />
      )
    case 'number':
      return (
        <div className="g-control">
          <span className="g-control__label" id={`ctl-${name}`}>
            {label}: <strong>{value as number}</strong>
          </span>
          <Slider
            aria-labelledby={`ctl-${name}`}
            min={control.min}
            max={control.max}
            step={control.step ?? 1}
            value={value as number}
            onChange={onChange}
          />
        </div>
      )
    default:
      return (
        <TextField
          variant="outlined"
          label={label}
          fullWidth
          value={value as string}
          onValueChange={onChange}
        />
      )
  }
}

/** Live preview driven by controls, with the matching generated code. */
export function Playground<C extends Controls>({ playground }: { playground: PlaygroundDef<C> }) {
  const [values, setValues] = useState<Values<C>>(() => defaults(playground.controls))
  const helpers = useMemo(() => makeHelpers(playground.controls), [playground.controls])
  const code = playground.code(values, helpers)
  const isDefault = JSON.stringify(values) === JSON.stringify(defaults(playground.controls))
  return (
    <div className="g-playground">
      <div className="g-playground__main">
        <div className="g-stage" data-stage={playground.stage ?? 'center'}>
          {createElement(playground.render as (v: Values<C>) => ReactNode, values)}
        </div>
        <CodeBlock code={code} caption="Generated code" />
      </div>
      <aside className="g-playground__controls" aria-label="Controls">
        <div className="g-playground__controls-head">
          <span className="m3-typescale-title-small">Controls</span>
          <Button
            variant="text"
            size="xs"
            icon="restart_alt"
            disabled={isDefault}
            onClick={() => setValues(defaults(playground.controls))}
          >
            Reset
          </Button>
        </div>
        {Object.entries(playground.controls).map(([name, control]) => (
          <ControlInput
            key={name}
            name={name}
            control={control}
            value={values[name as keyof C]}
            onChange={(v) => setValues((prev) => ({ ...prev, [name]: v }))}
          />
        ))}
      </aside>
    </div>
  )
}
