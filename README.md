# Material 3 Expressive

Material 3 Expressive components, design tokens, spring motion, and dynamic color theming for React 19, Vue 3, and modern web applications. Plain CSS on M3 design tokens, spring physics, the Material shape library with polygon shape morphing, full TypeScript types, and server rendering support.

**Live Demo & Documentation:** [https://shinchven.github.io/m3-expressive/](https://shinchven.github.io/m3-expressive/)

This repository is a monorepo providing packages for React, Vue, standalone CSS styles, and framework-agnostic core utilities. It follows Material 3 Expressive only: baseline variants, components, and tokens marked as *no longer recommended* by the M3 spec are eliminated rather than kept as legacy options. Coming from `material-components`? See [MIGRATION.md](./MIGRATION.md).

## Packages

| Package | Description | Version |
|---|---|---|
| [`@m3-expressive/react`](./packages/react) | Material 3 Expressive components, adaptive layouts, and hooks for React 19 | [![npm](https://img.shields.io/npm/v/@m3-expressive/react.svg)](https://www.npmjs.com/package/@m3-expressive/react) |
| [`@m3-expressive/vue`](./packages/vue) | Material 3 Expressive components, composables, and directives for Vue 3.5+ | [![npm](https://img.shields.io/npm/v/@m3-expressive/vue.svg)](https://www.npmjs.com/package/@m3-expressive/vue) |
| [`@m3-expressive/styles`](./packages/styles) | Framework-agnostic CSS design tokens, 2025 baseline scheme, typography, spring curves, and component styles | [![npm](https://img.shields.io/npm/v/@m3-expressive/styles.svg)](https://www.npmjs.com/package/@m3-expressive/styles) |
| [`@m3-expressive/core`](./packages/core) | Framework-agnostic dynamic color math (HCT/MCU), spring motion physics, 35 Material shapes and morphing, theme SSR script | [![npm](https://img.shields.io/npm/v/@m3-expressive/core.svg)](https://www.npmjs.com/package/@m3-expressive/core) |

## Quick Start

### React 19

```bash
npm install @m3-expressive/react
```

```tsx
import '@m3-expressive/react/fonts.css' // Roboto Flex + Material Symbols, self-hosted
import '@m3-expressive/react/styles.css' // tokens, colors, and component styles
import { Button, SnackbarProvider, ThemeProvider } from '@m3-expressive/react'

export function App() {
  return (
    <ThemeProvider defaultConfig={{ seed: '#6750A4' }}>
      <SnackbarProvider>
        <Button icon="add">Create</Button>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
```

### Vue 3

```bash
npm install @m3-expressive/vue @m3-expressive/styles
```

```vue
<script setup>
import '@m3-expressive/styles'
import '@m3-expressive/styles/fonts.css'
import { Button, useTheme } from '@m3-expressive/vue'

const { setSeed, setDark, toggleDark } = useTheme()
</script>

<template>
  <Button variant="filled" icon="add">Create</Button>
</template>
```

> In Vue templates, components can be imported with or without the `M3` prefix (e.g. `Button` or `M3Button`, `TextField` or `M3TextField`).

### Plain HTML & CSS

```bash
npm install @m3-expressive/styles
```

```html
<link rel="stylesheet" href="node_modules/@m3-expressive/styles/dist/fonts.css">
<link rel="stylesheet" href="node_modules/@m3-expressive/styles/dist/styles.css">

<button class="m3-button" data-variant="filled">
  <span class="m3-button__icon"><span class="m3-icon">add</span></span>
  <span class="m3-button__label">Create</span>
</button>
```

## Foundations

- **Dynamic Color**: HCT color space matching the 2025 (M3 Expressive) color spec via `@material/material-color-utilities`. Supports nine scheme variants, contrast levels, and seamless circular wave view transitions when toggling dark/light modes.
- **Typography**: 15 baseline and 15 emphasized type styles (`--md-sys-typescale-*`, `--md-sys-typescale-emphasized-*`, `Text emphasized`).
- **Shape & Morphing**: The ten-step corner scale, the 35 shapes of the Material shape library (`Shape`, `shapePath`, `shapeMaskImage`), and polygon shape morphing (`Shape` morphs when its `name` changes; `useShapeMorph`, `createMorph`). `Avatar` and `CardMedia` crop to shapes.
- **Motion**: Expressive (default) and Standard spring schemes (`--md-sys-motion-spring-{fast|default|slow}-{spatial|effects}`), exact `linear()` CSS spring curves with cubic-bezier fallbacks, and `animateSpring` for interruptible JavaScript springs.
- **Spacing**: `--md-sys-measurement-space0` to `space900` on the 8dp grid.

## Component Matrix

| M3 Group | React (`@m3-expressive/react`) | Vue (`@m3-expressive/vue`) |
|---|---|---|
| **Actions** | `Button` (filled, tonal, elevated, outlined, text; sizes XS–XL; round/square; morph; toggle; loading; emphasized label), `IconButton` (standard, filled, tonal, outlined; sizes; toggle), `ButtonGroup` (standard, connected), `SplitButton`, `Fab` (regular, medium, large; tonal, high-emphasis; extended, collapsible), `FabMenu` / `FabMenuItem`, `Toolbar` (docked, floating) | `Button`, `IconButton`, `ButtonGroup`, `SplitButton`, `Fab` |
| **Communication** | `LoadingIndicator` (contained, determinate, custom shapes), `LinearProgress` / `CircularProgress` (flat, wavy; determinate, indeterminate; track gap, stop indicator), `Badge`, `SnackbarProvider` / `useSnackbar`, `Tooltip`, `RichTooltip` | `Badge`, `Icon`, `LoadingIndicator`, `LinearProgress`, `CircularProgress` |
| **Containment** | `Card` (`CardActionArea`, `CardHeader`, `CardMedia`, `CardContent`, `CardActions`), `Dialog` (basic, hero icon, scrolling, full-screen), `SideSheet` (standard, modal), `BottomSheet` (drag to dismiss), `List` (`ListItem`, `ListSubheader`), `Divider`, `Carousel`, `Avatar`, `Text` | `Card` (`CardActionArea`, `CardHeader`, `CardContent`, `CardActions`), `Divider` |
| **Navigation** | `AppBar` (search, small, medium-flexible, large-flexible), `NavigationBar` (flexible, 64dp), `NavigationRail` (collapsed, expanded, modal), `Tabs` (`Tab`, `TabPanel`, `TabGroup`), `Search` (contained, divided) | Planned / CSS classes |
| **Selection** | `Checkbox`, `Radio` / `RadioGroup`, `Switch`, `Slider` (standard, centered; stops; sizes XS–XL; vertical), `RangeSlider`, `AssistChip`, `FilterChip`, `InputChip`, `SuggestionChip`, `ChipSet`, `Menu` (`MenuItem`, `SubMenu`, `MenuGroup`, `MenuButton`) | `Switch`, `Checkbox`, `Radio`, `Slider` |
| **Text inputs** | `TextField` (filled, outlined with notched label; icons, prefix/suffix, counter, error, multiline autosize, password toggle, clear), `Select` | `TextField` |
| **Pickers** | `Calendar`, `DatePickerDialog`, `DateRangePickerDialog`, `DatePickerField`, `TimePickerDialog`, `TimePickerField` | Planned |
| **Data** | `ListView` (virtualized list; standard, segmented; single/multi selection; keyboard navigation), `DataTable` (sticky header, selection with bulk actions, server sorting, responsive columns, keyset pagination), `TreeView` (lazy pages, virtualized rows, keyboard navigation, drag-and-drop) | `ListView` (virtualized list; standard, segmented; single/multi selection) |
| **Directives & Primitives** | `Ripple`, `Shape`, `Portal`, `ThemeBuilder` | `Ripple`, `v-ripple` directive |

## Layouts (React)

- `useWindowSizeClass()` returns the M3 window size class: compact (< 600dp), medium (600–839dp), expanded (840–1199dp), large (1200–1599dp), extra-large (≥ 1600dp).
- `AppScaffold`: responsive navigation adaptation switching between navigation bar (compact), collapsed rail (medium), and expanded rail (expanded/large).
- Canonical layouts: `ListDetailLayout`, `SupportingPaneLayout`, `FeedLayout`.
- Primitives: `PaneLayout`, `Pane`, `ResizablePanes`.

## Server Rendering & RSC

- All components support server-side rendering without hydration mismatches.
- Client-dependent modules (hooks, context, portals, event handlers) carry `'use client'` directives for React Server Components frameworks (Next.js, Remix, etc.).
- Framework-agnostic utilities from `@m3-expressive/core` (`themeInitScript()`, color math, spring solvers, shape paths) execute anywhere, including server and edge runtimes.
- Pass `themeInitScript()` to an inline `<script>` in `<head>` so the stored theme applies before the initial paint, eliminating flash of unstyled theme (FOUC).

## Development Scripts

```bash
npm install        # Install monorepo dependencies
npm run dev        # Launch interactive docs & playground (localhost:5173)
npm run build      # Build all packages (@m3-expressive/styles, core, vue, react)
npm run test:all   # Run all Vitest test suites (library and docs)
npm run typecheck  # Run TypeScript compiler checks across root and docs
npm run lint       # Run Biome linter and format check
npm run format     # Format codebase with Biome
```
