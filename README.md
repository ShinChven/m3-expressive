# Material 3 Expressive Components (`material-design-3-expressive-components`)

Material 3 Expressive components, adaptive layouts, and dynamic color theming for React 19. Plain CSS on M3 design tokens, spring motion, the Material shape library with shape morphing, full TypeScript types, server rendering, and React Server Components support.

This is a separate package that started as a copy of [`material-components`](https://github.com/ShinChven/material-components), which stays as it is. This package follows M3 Expressive only: variants, components and tokens that the spec marks as no longer recommended are removed rather than kept as options. Coming from `material-components`? See [MIGRATION.md](./MIGRATION.md).

```bash
npm install material-design-3-expressive-components
```

## Usage

```tsx
import 'material-design-3-expressive-components/fonts.css' // Roboto Flex + Material Symbols, self-hosted
import 'material-design-3-expressive-components/styles.css' // tokens, colors, and component styles
import { Button, SnackbarProvider, ThemeProvider } from 'material-design-3-expressive-components'

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

- React 19 and React DOM 19 are peer dependencies.
- Colors always use the 2025 (M3 Expressive) color spec. `useTheme()` changes the seed color, scheme variant, contrast level, light, dark, or system mode, and the motion scheme at runtime. The configuration persists in `localStorage`.
- Motion runs on spring tokens (`--md-sys-motion-spring-{fast|default|slow}-{spatial|effects}`). The Expressive scheme is the default; `motionScheme: 'standard'` switches the app to the calmer Standard scheme, and `prefers-reduced-motion` removes overshoot.
- `ThemeScope` applies a different color or motion scheme to one subtree, including its menus and dialogs.
- `LinkProvider` renders every `href` prop (buttons, chips, lists, navigation, cards) through your router's link component.
- The default text is English. `M3LocaleProvider` configures regional formats (e.g. `en-GB`: day/month/year, Monday week start, 24-hour clock), and its `messages` prop customizes built-in strings.
- Pass the output of `themeInitScript()` to an inline `<script>` in `<head>` so the stored theme applies before the initial paint.

## Server Rendering

- Every component supports server-side rendering.
- Client-dependent modules (hooks, context, portals, event handlers) include the `'use client'` directive for React Server Components frameworks.
- `themeInitScript()`, color utilities (`createScheme`, `createTonalPalettes`, `createThemeCss`), shape paths (`shapePath`, `shapeMaskImage`) and spring math (`springToLinear`) run without directives, enabling direct invocation on the server.

## Package Distribution

- ES modules, one file per source module with source maps for fine-grained tree-shaking.
- TypeScript declaration files supporting `bundler`, `node16`, and `nodenext` module resolution.
- `styles.css` bundles all component CSS with inlined tokens (color, typescale with emphasized styles, shape, spacing, motion) and the default colors.
- `fonts.css` imports `@fontsource-variable/roboto-flex` and `material-symbols`.

## Foundations

- **Color**: dynamic color from one seed (`ThemeProvider`, `ThemeScope`, `createScheme`), 2025 color spec, nine scheme variants, contrast levels.
- **Typography**: 15 baseline and 15 emphasized type styles (`--md-sys-typescale-*`, `--md-sys-typescale-emphasized-*`, `Text emphasized`).
- **Shape**: the ten-step corner scale, the 35 shapes of the Material shape library (`Shape`, `shapePath`, `shapeMaskImage`) and shape morphing (`Shape` morphs when its `name` changes; `useShapeMorph`, `createMorph`). `Avatar` and `CardMedia` crop to shapes.
- **Motion**: Expressive and Standard spring schemes, exact `linear()` spring curves with cubic-bezier fallbacks, and `animateSpring` for interruptible JavaScript springs.
- **Spacing**: `--md-sys-measurement-space0` to `space900` on the 8dp scale.

## Components

| M3 Group | Components |
|---|---|
| Actions | `Button` (filled, tonal, elevated, outlined, text; sizes XS–XL; round/square; shape morph; toggle; loading; emphasized label), `IconButton` (standard, filled, tonal, outlined; sizes; narrow/default/wide; toggle), `ButtonGroup` (standard with press interaction, connected; single, multi, selection required), `SplitButton`, `Fab` (regular, medium, large; tonal and high-emphasis colors; extended, collapsible), `FabMenu` / `FabMenuItem`, `Toolbar` (docked, floating horizontal/vertical, standard/vibrant, with FAB, hide on scroll) |
| Communication | `LoadingIndicator` (contained, determinate for pull to refresh, custom shapes), `LinearProgress` / `CircularProgress` (flat or wavy, determinate with track gap and stop indicator, indeterminate, thick), `Badge`, `SnackbarProvider` / `useSnackbar` (queue, action, pause on hover), `Tooltip`, `RichTooltip` |
| Containment | `Card` + `CardActionArea`, `CardHeader`, `CardMedia` (shape crop), `CardContent`, `CardActions`; `Dialog` (basic, hero icon, scrolling, full-screen); `SideSheet` (standard, modal); `BottomSheet` (drag to dismiss); `List` (standard, segmented; highlighted selection), `ListItem`, `ListSubheader`; `Divider`; `Carousel` (multi-browse, hero, uncontained, full-screen); `Avatar` (shapes); `Text` |
| Navigation | `NavigationBar` (flexible, 64dp; vertical and horizontal items), `NavigationRail` (collapsed and expanded, standard or modal, hide when collapsed, sections, FAB that extends, hugging or full-width indicator and FAB), `AppBar` (search, small, medium flexible, large flexible; centered text; subtitle; collapse on scroll), `Tabs` / `Tab` / `TabPanel` / `TabGroup` (primary, secondary, scrollable), `Search` (contained; grows when focused; grouped results; docked or full-screen view) |
| Selection | `Checkbox` (indeterminate, error), `Radio` / `RadioGroup`, `Switch` (icons), `AssistChip`, `FilterChip`, `InputChip`, `SuggestionChip`, `ChipSet`, `Slider` (standard, centered; stops; sizes XS–XL; vertical; inset icon), `RangeSlider`, `Menu` (vertical menu: standard and vibrant colors, grouped with gaps, submenus with active shape), `MenuItem`, `SubMenu`, `MenuGroup`, `MenuButton` (plus context menus with `pointAnchor`) |
| Text inputs | `TextField` (filled, outlined with notched label; icons, prefix/suffix, counter, error, multiline autosize, password toggle, clear), `Select` |
| Pickers | `Calendar`, `DatePickerDialog`, `DateRangePickerDialog`, `DatePickerField` (docked), `TimePickerDialog` (dial and keyboard, 12/24-hour), `TimePickerField` |
| Data | `DataTable` (sticky header, selection with bulk actions, server sorting, responsive columns, keyset pagination), `TreeView` (lazy pages of children, virtualized rows, keyboard navigation, drag-and-drop and Alt+Arrow moves) |

## Layouts

- `useWindowSizeClass()` returns the M3 window size class: compact (< 600), medium, expanded (≥ 840), large (≥ 1200), extra-large (≥ 1600).
- `AppScaffold` provides responsive navigation adaptation: a flexible navigation bar on compact windows (a modal expanded rail when there are more than five destinations), a collapsed rail on medium windows, and an expanded rail beside the content on expanded and larger windows.
- Canonical layouts: `ListDetailLayout`, `SupportingPaneLayout`, `FeedLayout`.
- Primitives: `PaneLayout`, `Pane`, `ResizablePanes`.

## Development Scripts

```bash
npm install        # Install dependencies
npm run build      # Build library modules, bundle CSS, and generate type definitions
npm test           # Run Vitest test suite
npm run typecheck  # Run TypeScript compiler checks
npm run lint       # Lint and format checking via Biome
```
