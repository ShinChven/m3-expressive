import type { ComponentType, ReactNode } from 'react'

export type GroupKey =
  | 'foundations'
  | 'actions'
  | 'communication'
  | 'containment'
  | 'navigation'
  | 'selection'
  | 'text-inputs'
  | 'pickers'
  | 'data'
  | 'layout'

export interface Group {
  key: GroupKey
  label: string
  icon: string
  summary: string
}

/** Component groups, in navigation order (follows m3.material.io, plus data and layout). */
export const GROUPS: Group[] = [
  {
    key: 'foundations',
    label: 'Foundations',
    icon: 'category',
    summary: 'Color, typography, shape, motion, spacing, icons and regional formats.',
  },
  { key: 'actions', label: 'Actions', icon: 'touch_app', summary: 'Buttons people press to act.' },
  {
    key: 'communication',
    label: 'Communication',
    icon: 'notifications',
    summary: 'Status, progress and short messages.',
  },
  {
    key: 'containment',
    label: 'Containment',
    icon: 'dashboard',
    summary: 'Surfaces that hold content and actions.',
  },
  {
    key: 'navigation',
    label: 'Navigation',
    icon: 'explore',
    summary: 'Moving between destinations and views.',
  },
  {
    key: 'selection',
    label: 'Selection',
    icon: 'check_box',
    summary: 'Choosing options and values.',
  },
  {
    key: 'text-inputs',
    label: 'Text inputs',
    icon: 'text_fields',
    summary: 'Entering and choosing text.',
  },
  { key: 'pickers', label: 'Pickers', icon: 'event', summary: 'Choosing dates and times.' },
  {
    key: 'data',
    label: 'Data',
    icon: 'table_chart',
    summary: 'Tables and trees for large data sets.',
  },
  {
    key: 'layout',
    label: 'Layout',
    icon: 'view_quilt',
    summary: 'Adaptive scaffolds and canonical layouts.',
  },
]

export type Control =
  | { type: 'select'; options: readonly string[]; default: string; label?: string }
  | { type: 'boolean'; default: boolean; label?: string }
  | { type: 'text'; default: string; label?: string }
  | { type: 'icon'; default: string; label?: string }
  | { type: 'number'; default: number; min: number; max: number; step?: number; label?: string }

export type Controls = Record<string, Control>

type ValueOf<C extends Control> = C extends { type: 'boolean' }
  ? boolean
  : C extends { type: 'number' }
    ? number
    : C extends { type: 'select'; options: readonly (infer O)[] }
      ? O
      : string

export type Values<C extends Controls> = { [K in keyof C]: ValueOf<C[K]> }

/** An expression in generated code, written without quotes: `onClick={() => setOpen(true)}`. */
export interface RawCode {
  raw: string
}

export function raw(code: string): RawCode {
  return { raw: code }
}

export interface CodeHelpers<C extends Controls> {
  /** The given keys whose value differs from the control default (for props whose default it mirrors). */
  changed: (values: Values<C>, keys: (keyof C)[]) => Record<string, unknown>
  jsx: typeof jsx
}

export interface Playground<C extends Controls> {
  controls: C
  /** Renders the live preview (a component: hooks are allowed). */
  render: (values: Values<C>) => ReactNode
  /** Source code matching the preview. */
  code: (values: Values<C>, helpers: CodeHelpers<C>) => string
  /** `center` places the preview in the middle; `fill` stretches it (bars, tables, layouts). */
  stage?: 'center' | 'fill'
}

export interface ApiEntry {
  /** Component, hook or type name, e.g. `Button`, `useTheme` or `NavItem`. */
  name: string
  /** Interfaces whose members are listed. Leave empty for hooks and helpers and describe them in `inherits`. */
  interfaces: string[]
  /** Extra notes shown under the table: inherited attributes, or a hook's signature. */
  inherits?: string
}

export interface DocMeta<C extends Controls = Controls> {
  slug: string
  name: string
  group: GroupKey
  /** Material Symbols name for the navigation. */
  icon: string
  /** One or two sentences: what it is and when to use it. */
  summary: string
  /** Named exports from `@m3-expressive/react` used by the examples. */
  imports: string[]
  /** Small live preview for the overview card. */
  preview: ComponentType
  playground?: Playground<C>
  api: ApiEntry[]
  /** Usage guidance shown above the examples. */
  guidelines?: string[]
  /** Order within the group (lower first). */
  order?: number
}

/** Declares a component page. Control option lists are inferred as literal types. */
export function defineDoc<const C extends Controls>(doc: DocMeta<C>): DocMeta<C> {
  return doc
}

function formatValue(value: unknown): string {
  if (typeof value === 'object' && value !== null && 'raw' in value)
    return `{${(value as RawCode).raw}}`
  if (typeof value === 'string')
    return value.includes('"') ? `{${JSON.stringify(value)}}` : `"${value}"`
  return `{${JSON.stringify(value)}}`
}

/**
 * Serializes a JSX element. `undefined`, `null`, `false` and `''` props are left out; `true`
 * becomes a bare attribute. Long elements break props onto their own lines.
 */
export function jsx(name: string, props: Record<string, unknown>, children?: string): string {
  const attrs = Object.entries(props)
    .filter(([, v]) => v !== undefined && v !== null && v !== false && v !== '')
    .map(([k, v]) => (v === true ? k : `${k}=${formatValue(v)}`))
  const open = attrs.length ? `<${name} ${attrs.join(' ')}` : `<${name}`
  const oneLine = children === undefined ? `${open} />` : `${open}>${children}</${name}>`
  if (oneLine.length <= 80 && !children?.includes('\n')) return oneLine
  const head = attrs.length ? `<${name}\n${attrs.map((a) => `  ${a}`).join('\n')}\n` : `<${name}`
  if (children === undefined) return `${head}/>`
  const body = children
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n')
  return `${head}>\n${body}\n</${name}>`
}

export function makeHelpers<C extends Controls>(controls: C): CodeHelpers<C> {
  return {
    jsx,
    changed: (values, keys) => {
      const out: Record<string, unknown> = {}
      for (const key of keys) {
        const control = controls[key]!
        const value = values[key]
        if (value !== control.default) out[key as string] = value === false ? raw('false') : value
      }
      return out
    },
  }
}
