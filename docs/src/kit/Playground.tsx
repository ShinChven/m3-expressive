import { Button, Select, Slider, Switch, TextField } from '@m3-expressive/react'
import { createElement, type ReactNode, useMemo, useState } from 'react'
import { CodeBlock } from './CodeBlock'
import { formatFrameworkCode } from './codeTransform'
import {
  type Control,
  type Controls,
  makeHelpers,
  type Playground as PlaygroundDef,
  type Values,
} from './doc'
import { useFramework } from './framework'
import { VueMount } from './VueMount'
import { VUE_COMPONENTS } from './vueComponents'

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
      return (
        <Select
          label={label}
          value={value as string}
          onChange={(next) => onChange(next)}
          options={control.options.map((opt) => ({
            value: opt,
            label: opt === '' ? 'None' : opt.replace(/^./, (c) => c.toUpperCase()),
          }))}
        />
      )
    case 'icon':
      return (
        <Select
          label={label}
          value={value as string}
          onChange={(next) => onChange(next)}
          options={ICONS.map((icon) => ({
            value: icon,
            label: icon === '' ? 'None' : icon,
          }))}
        />
      )
    case 'number':
      return (
        <div className="g-playground__control-range">
          <div className="g-playground__control-range-head">
            <span className="m3-typescale-body-medium">{label}</span>
            <span className="m3-typescale-body-small">{String(value)}</span>
          </div>
          <Slider
            min={control.min}
            max={control.max}
            step={control.step ?? 1}
            value={value as number}
            onChange={(next) => onChange(next)}
            aria-label={label}
          />
        </div>
      )
    default:
      return <TextField label={label} value={value as string} onValueChange={onChange} />
  }
}

/** Live preview driven by controls, with the matching generated code. */
export function Playground<C extends Controls>({
  playground,
  slug,
  imports,
}: {
  playground: PlaygroundDef<C>
  slug?: string
  imports?: string[]
}) {
  const [values, setValues] = useState<Values<C>>(() => defaults(playground.controls))
  const { framework } = useFramework()
  const helpers = useMemo(() => makeHelpers(playground.controls), [playground.controls])
  const rawCode = playground.code(values, helpers)
  const isDefault = JSON.stringify(values) === JSON.stringify(defaults(playground.controls))

  const displayCode = useMemo(() => {
    return formatFrameworkCode(rawCode, framework, imports)
  }, [rawCode, framework, imports])

  const vueComponent = slug ? VUE_COMPONENTS[slug] : null

  return (
    <div className="g-playground">
      <div className="g-playground__main">
        <div className="g-stage" data-stage={playground.stage ?? 'center'}>
          {framework === 'vue' && vueComponent ? (
            <VueMount component={vueComponent} props={values as Record<string, unknown>} />
          ) : (
            createElement(playground.render as (v: Values<C>) => ReactNode, values)
          )}
        </div>
        <CodeBlock
          code={displayCode}
          caption={`${framework === 'vue' ? 'Vue 3' : framework === 'html' ? 'HTML/CSS' : 'React'} generated code`}
        />
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
