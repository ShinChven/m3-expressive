# Writing a component page

Every file in `src/docs/*.tsx` is one page of the documentation site. The registry finds the files automatically; nothing else needs to change to add a page. `src/docs/button.tsx` (simple controls) and `src/docs/dialog.tsx` (an overlay with state) are the reference pages.

## The file

A page file exports two kinds of things:

1. `export const doc = defineDoc({ … })`: the page metadata, the overview preview, the playground and the API tables.
2. One or more `export function ExampleSomething() { … }`: the examples. Each example has a doc comment directly above it. The first line of the comment is the example title, and the other lines are its description.

```tsx
/**
 * Toggle buttons
 * `selected` makes a toggle button; selected buttons change color and shape.
 */
export function ExampleToggle() {
  const [bold, setBold] = useState(true)
  return <Button selected={bold} onClick={() => setBold(!bold)}>Bold</Button>
}
```

The site shows the source of each example as its code, read from this file at build time. What runs is what readers copy, so keep examples self-contained:

- Keep state inside the example function. Readers must be able to paste the function and run it.
- Put helpers that an example needs directly after that example; they are shown with it.
- Data that is not worth showing (long lists, generated images) can live above the first example, or come from `../demo` (`IMAGES`, `art()`, `seeded()`) and `../mock` (`FILES`, `fetchFiles`, `loadTree`, `moveTreeItem`: the files and folders of a shared drive).
- Do not put a plain apostrophe in JSX text (`Don't`). The code highlighter reads it as the start of a string. Use the typographic apostrophe (`Don’t`) or rephrase.

Allowed imports: `@m3-expressive/react`, `react`, `../kit/doc`, `../demo`, `../mock`, and an optional `./<slug>.css` file for styles that only this page needs.

## `defineDoc` fields

| Field | What to write |
|---|---|
| `slug` | URL segment, same as the file name: `icon-button` for `icon-button.tsx`. |
| `name` | Component name as people say it: “Icon button”. |
| `group` | One of the keys in `GROUPS` (`src/kit/doc.ts`). |
| `icon` | A Material Symbols name for the navigation. |
| `order` | Position inside the group (1, 2, 3 …). |
| `summary` | One or two sentences: what it is and when to use it. Backticks render as code. |
| `imports` | The `@m3-expressive/react` names the examples use. The test checks that each one exists. |
| `preview` | A small, static-looking render for the overview card (about 250 × 148 px). Use `g-preview-row` / `g-preview-col`. Never open overlays here; the preview is inert. |
| `playground` | Controls, a `render` component and a `code` generator (below). Leave it out only when a live playground makes no sense. |
| `api` | One entry per component: `{ name, interfaces, inherits? }`. `name` is the component function name (it supplies the defaults); `interfaces` are the props interfaces in `src/`. |
| `guidelines` | Two to four short usage rules in the spirit of m3.material.io. |

## Playground

```tsx
playground: {
  controls: {
    variant: { type: 'select', options: ['filled', 'tonal'], default: 'filled' },
    label: { type: 'text', default: 'Send' },
    icon: { type: 'icon', default: 'send' },
    disabled: { type: 'boolean', default: false },
    size: { type: 'number', default: 40, min: 24, max: 96, step: 8 },
  },
  render: (v) => <Button variant={v.variant} icon={v.icon || undefined} disabled={v.disabled}>{v.label}</Button>,
  code: (v, { jsx, changed }) =>
    jsx('Button', { ...changed(v, ['variant']), icon: v.icon, disabled: v.disabled }, v.label),
}
```

- Control values are typed from the options, so `v.variant` is `'filled' | 'tonal'`.
- `render` is a React component: it may use hooks (see the dialog page).
- `code` must produce the TSX that matches the preview. `jsx(name, props, children)` leaves out `undefined`, `false` and `''`, writes `true` as a bare attribute, and wraps long elements. `changed(values, keys)` returns only the keys that differ from the control default; use it for props whose control default is the component default. Use `raw('…')` (or `{ raw: '…' }`) for expressions such as handlers.
- `stage: 'fill'` stretches the preview (app bars, tables, layouts); the default centers it.

## Prop descriptions

The API tab is generated from the M3 sources (`plugins/m3-api.ts`): props, types, defaults and the JSDoc comment above each prop. A prop without a comment shows “—”. Write one short line above each public prop:

```ts
/** Shows a progress indicator and ignores activation, but stays focusable. */
loading?: boolean
```

## Checks

```bash
npx vitest run --project docs
```

The test renders every page’s preview, playground and examples, checks that the `imports` exist and that every `api` interface is found in the sources. Also run `npx tsc -p apps/docs/tsconfig.json` and `npx biome check --write` on the files you changed.
