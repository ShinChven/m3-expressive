---
name: m3-doc-playground-examples
description: Design, build, or upgrade component documentation pages (`docs/src/docs/*.tsx`), interactive Playgrounds, Overview previews, and multi-scenario Examples in the Material 3 Expressive repository. Use when adding a new component doc page or improving an existing demo/playground/examples page.
metadata:
  short-description: Design M3 Expressive playgrounds and component examples
---

# M3 Expressive Doc Playground & Examples Guide

Use this skill when creating or upgrading component pages in `docs/src/docs/<slug>.tsx` (and optional companion stylesheets `docs/src/docs/<slug>.css`).

## 1. Repository Architecture & Non-Obvious Invariants

Before editing a doc page or its underlying component styles, observe these repository contracts enforced by `docs/vite.config.ts` and `docs/test/docs.test.tsx`:

1. **Docs Alias Target (`src/`, not `packages/react/src/`)**:
   - `docs/vite.config.ts` aliases `@m3-expressive/react` to `../src/index.ts` and `@m3-expressive/react/styles.css` to `../src/styles/index.css`.
   - Whenever you fix or add component logic or CSS for a demo, update **`src/`**, **`packages/react/src/`**, and **`packages/styles/src/`** together so the live demo site, React package, and standalone CSS package never drift.
2. **`doc.imports` Completeness (Tested in `docs/test/docs.test.tsx`)**:
   - Every non-type symbol imported from `'@m3-expressive/react'` at the top of `docs/src/docs/<slug>.tsx` **must** also be listed in `doc.imports: [...]`.
   - `docs.test.tsx` parses the file's `import { ... } from '@m3-expressive/react'` statement and fails if any value import is missing from `doc.imports`.
3. **API Interface Verification (`virtual:m3-api`)**:
   - Every interface name listed in `doc.api[i].interfaces` must exist as an exported `interface` in `src/`.
4. **Example Extraction Contract (`docs/src/kit/examples.ts`)**:
   - Examples are extracted from raw source via `/\/\*\*([\s\S]*?)\*\/\s*export function (Example\w*)\s*\(/g`.
   - Every example **must** be an `export function Example<Name>()` immediately preceded by a JSDoc block `/** ... */`:
     - **Line 1 of JSDoc**: Human-readable title (must **not** start with `Example`, and **should start with a letter** rather than a digit so the generated `#slug` is a valid unescaped CSS selector).
     - **Remaining lines of JSDoc**: Concise explanation of the use case, interaction model, and key props demonstrated.
   - An example's displayed code snippet runs from `export function Example<Name>` until the next example's JSDoc comment (or EOF). Place helper functions/constants used by a single example **immediately after** that example function so readers see self-contained code in "Show code".
   - Shared page-level helpers that should *not* appear inside individual example code blocks belong **above** `export const doc = defineDoc(...)`.

---

## 2. Overview Card Preview (`doc.preview`)

`doc.preview` renders inside the small card on the `/` Overview page:
- Keep height compact (`≤ 180px`) and width self-contained (`100%` or `220–260px`).
- Show a recognizable, pre-populated state (e.g., 1 selected item, active sort indicator, or open branch) so the card communicates the component's visual identity at a glance.
- Avoid interactive popovers or full-page overlays inside `preview`.

---

## 3. Designing a Professional Interactive Playground (`doc.playground`)

A great Playground lets developers test both **visual variants** and **behavioral edge cases** without writing code.

### Stage Selection
- `stage: 'fill'`: Use for full-width or container-level components (`DataTable`, `ListView`, `TreeView`, `AppBar`, `Toolbar`, `Tabs`, `Panes`, `ListDetailLayout`, `AppScaffold`).
- `stage: 'center'` (default): Use for atomic or bounded components (`Button`, `Chip`, `Dialog`, `Card`, `Slider`, `Switch`, `Badge`).

### Control Design Principles
1. **Cover Visual, Structural, and State Dimensions**:
   - **Visual**: `variant` (`standard` / `segmented`, `filled` / `tonal` / `outlined`), `size`, `density`, `shape`.
   - **Structural Slots**: `leading` (`avatar`, `icon`, `checkbox`, `image`, `none`), `trailing` (`meta`, `badge`, `action`, `switch`, `none`), `lines` (`1`, `2`, `3`), `toolbar` (`boolean`).
   - **Behavioral / State**: `selection` (`none`, `single`, `multiple`), `loading`, `disabled`, `empty` (empty state toggle), `count` or `dataset` switcher (`contacts`, `files`, `logs`) for data components.
2. **Interactive Realism**:
   - Wire `useSnackbar()` to action callbacks (`onItemClick`, `onRowClick`, `onActivate`, bulk action buttons) so clicking items gives immediate tactile feedback.
   - Maintain controlled state (`useState`) inside `playground.render` for selection, search filtering, sorting, or toggling so the user can actually interact with the component.
   - Ensure nested interactive controls inside rows/cards (e.g., star `IconButton`, `Switch`, `Checkbox`) work independently without unintended parent activation.
3. **Accurate Code Generation (`playground.code`)**:
   - Use `helpers.jsx(componentName, props, children)` and `helpers.changed(v, [...keys])` so default prop values are omitted and output stays clean.
   - Wrap non-string expressions in `raw(...)` (e.g., `items: raw('items')`, `onSelectionChange: raw('setSelectedKeys')`).
   - Include relevant state declarations (`const [selectedKeys, setSelectedKeys] = useState(...)`) at the top of the returned snippet when controls enable stateful features.

---

## 4. Designing Use-Case Examples (`Example*`)

Never ship a component page with a single bare-bones example or synthetic placeholder strings like `"Item #1"` / `"Team Member #1"`. Design **4 to 6 distinct, realistic use-case examples** that progressively cover the component's solution space.

### Realistic Data Rules
- Reuse `FILES`, `fetchFiles`, `loadTree`, `moveTreeItem` from `docs/src/mock.ts` or `IMAGES`, `seeded` from `docs/src/demo.ts` when applicable.
- When generating large deterministic datasets (e.g., 1,000–10,000 records for virtualized components), combine realistic domain vocabularies (names, roles, departments, office codes, file paths, commit SHAs, telemetry log messages) using **coprime index strides** (e.g., `FIRST[i % FIRST.length]` + `LAST[(i * 7 + Math.floor(i / FIRST.length)) % LAST.length]`) so adjacent rows never repeat the same surname or metadata.

### Core Example Archetypes to Cover
For detailed component-category matrices and layout patterns, read [references/usecase-archetypes.md](references/usecase-archetypes.md). Across any non-trivial component, aim to cover:
1. **Primary / Canonical Use Case**: The most common production setup with realistic content and filtering/navigation (e.g., searchable directory with `ChipSet` filters and imperative scroll jumping).
2. **Selection & Contextual Bulk Actions**: Single or multi-selection paired with a contextual toolbar (`data-selection`) that mutates the collection (mark read, archive, share, delete) with `useSnackbar` confirmation.
3. **Composite / Master-Detail Integration**: How the component pairs with sibling components (e.g., split-pane inspector, form integration, header toolbar + footer status bar).
4. **Dynamic Content / Variable Geometry**: Variable-height rows (1-, 2-, and 3-line items), responsive column hiding (`hideBelow`), or dynamic expansion.
5. **Async Lifecycle (Loading, Paging, Infinite Scroll)**: Keyset pagination, `onEndReached` infinite loading with `LinearProgress`, or lazy branch loading.
6. **Rich Slots, Inline Controls & Empty/Disabled States**: Secondary actions (`IconButton`, `Switch`, `Badge`) inside items plus a helpful custom `empty` state with a recovery action button (e.g., `"Reset filter"` or `"Restore items"`).

---

## 5. Styling & Layout Conventions (`docs/src/site.css` & `<slug>.css`)

- **Prefer built-in doc layout classes from `docs/src/site.css`**:
  - `.g-row` (flex row with wrap and 12px gap)
  - `.g-stack` (flex column with 12px gap)
  - `.g-grid` (auto-fill responsive grid using `--g-min`)
  - `.g-frame` (bordered, rounded `surface` container)
  - `.g-table-search` (`__icon`, `__input`, `__clear` — M3 search pill for toolbars)
  - `.g-muted` (`--md-sys-color-on-surface-variant`)
- **Component-specific demo layout (`docs/src/docs/<slug>.css`)**:
  - Prefix page-specific demo classes with a short namespace (e.g., `.lv-*` for `list-view.css`, `.dt-*` for `data-table.css`).
  - Use **only M3 design tokens** (`var(--md-sys-color-*)`, `var(--md-sys-typescale-*)`, `var(--md-sys-shape-corner-*)`, `var(--md-sys-elevation-*)`, `var(--md-sys-motion-*)`) — never hardcoded hex colors, so light/dark mode and dynamic seed themes work automatically.

---

## 6. Verification Checklist

Before finishing any doc/playground/example work:
1. Run `npm run format && npm run lint && npm run typecheck && npm run test:all` (verifies `docs/test/docs.test.tsx` import completeness, API interfaces, example extraction, and rendering).
2. Start the docs server and verify visually in a real browser (`browser` in `eval`):
   - Check the `/` Overview card preview.
   - Exercise the Playground controls (variant, selection, empty state, interactive actions).
   - Switch to the `Examples` tab and verify every example card's layout, scrolling, and interactive states.
   - Switch to the `API` tab and confirm all prop tables render cleanly.
