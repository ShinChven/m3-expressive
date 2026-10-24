# Material 3 Expressive — Design System & Engineering Rules

Use this reference when designing screens, selecting components, writing custom CSS, or auditing an application for Material 3 Expressive compliance.

---

## 1. Eliminated M3 Baseline Patterns vs. Required Expressive Replacements

Material 3 Expressive removes components and variants that the official M3 specification marks as *no longer recommended*. Never recreate or emulate the legacy patterns on the left; always use the Expressive API on the right:

| Legacy / Non-Expressive Pattern (Do NOT Use) | Material 3 Expressive Replacement (MUST Use) |
|---|---|
| `TopAppBar`, `variant="center"`, `variant="medium"`, `variant="large"` | `<AppBar variant="small" \| "medium-flexible" \| "large-flexible" \| "search" align="start" \| "center" subtitle="..." />` |
| `BottomAppBar` | `<Toolbar type="docked" \| "floating" color="standard" \| "vibrant" fab={<Fab icon="add" />}>...</Toolbar>` |
| `SegmentedButtons` | `<ButtonGroup variant="connected" selection="single" \| "multiple" value={...} onChange={...}><Button value="a">A</Button>...</ButtonGroup>` |
| `NavigationDrawer` (permanent or modal drawer) | `<NavigationRail expanded modal={...} indicator="pill" \| "fill" sections={...} />` or automatic responsive `<AppScaffold>` |
| 80dp vertical-only `NavigationBar` with bold `on-surface` active label | 64dp flexible `<NavigationBar itemLayout="auto" />` (auto-switches to horizontal items at ≥600dp; active label uses `secondary` color) |
| `Fab size="small"` (40dp) or `Fab color="surface"` | `<Fab size="regular" \| "medium" \| "large" color="primary" \| "secondary" \| "tertiary" \| "primary-container" \| "secondary-container" \| "tertiary-container" />`, or `<FabMenu>` for multi-action speed dials |
| Indeterminate `CircularProgress` inside loading buttons or tree nodes | `<LoadingIndicator />` (morphing 7-shape sequence from the 35-shape library; built into `<Button loading>`) |
| `CircularProgress fourColor` | Removed. Use `<CircularProgress shape="flat" \| "wavy" thickness={4 \| 8} />` |
| Straight progress bars for active media / live tasks | `<LinearProgress shape="wavy" />` and `<CircularProgress shape="wavy" />` |
| `Slider ticks` | `<Slider stops size="xs" \| "sm" \| "md" \| "lg" \| "xl" centered orientation="horizontal" \| "vertical" insetIcon="..." />` |
| Square, continuous baseline lists and 4dp menus | Expressive `<List variant="standard" \| "segmented">` (16dp rounded selected items with emphasized headline) and `<Menu color="standard" \| "vibrant" grouped>` |
| Static button corners on press | `<Button shapeMorph>` and `<IconButton shapeMorph>` (enabled by default; pressed buttons morph corner radius and squeeze neighbors inside `<ButtonGroup variant="standard">`) |
| 2021 color spec switch (`spec: '2021' \| '2025'`) | Always 2025 Expressive HCT color spec (`ThemeProvider` with `variant="tonal-spot" \| "vibrant" \| "expressive" \| ...`) |

---

## 2. Token Reference (Never Hardcode Values)

### A. Color Tokens (`--md-sys-color-*`)

Never use raw hex/RGB colors or Tailwind gray palettes. Every background, text, icon, and border must reference an M3 semantic color role so light/dark mode, contrast sliders (`-1` to `1`), and dynamic seed colors work automatically:

- **Surface Hierarchy (Primary Containment Tool)**:
  - `--md-sys-color-surface` (default page canvas)
  - `--md-sys-color-surface-dim` / `--md-sys-color-surface-bright`
  - `--md-sys-color-surface-container-lowest` (brightest in light mode; high-emphasis cards on a `surface-container-low` canvas)
  - `--md-sys-color-surface-container-low` (subtle section/card container)
  - `--md-sys-color-surface-container` (default navigation rail/bar, standard cards, menus)
  - `--md-sys-color-surface-container-high` (elevated dialogs, floating toolbars, active inputs)
  - `--md-sys-color-surface-container-highest` (filled text fields, high-contrast chips/callouts)
  - `--md-sys-color-on-surface` (primary text/icons) & `--md-sys-color-on-surface-variant` (secondary text/captions/supporting icons)
- **Accent & Container Pairs (Always pair `<role>` with `on-<role>`)**:
  - Primary: `--md-sys-color-primary` / `--md-sys-color-on-primary`, `--md-sys-color-primary-container` / `--md-sys-color-on-primary-container`
  - Secondary: `--md-sys-color-secondary` / `--md-sys-color-on-secondary`, `--md-sys-color-secondary-container` / `--md-sys-color-on-secondary-container`
  - Tertiary: `--md-sys-color-tertiary` / `--md-sys-color-on-tertiary`, `--md-sys-color-tertiary-container` / `--md-sys-color-on-tertiary-container`
  - Error: `--md-sys-color-error` / `--md-sys-color-on-error`, `--md-sys-color-error-container` / `--md-sys-color-on-error-container`
  - Fixed Accent Roles (maintain tone across light & dark modes): `--md-sys-color-{primary|secondary|tertiary}-fixed`, `*-fixed-dim`, `on-*-fixed`, `on-*-fixed-variant`
- **Outlines & Inverse**:
  - `--md-sys-color-outline` (control borders, 1px outlined cards/inputs)
  - `--md-sys-color-outline-variant` (subtle dividers, table row hairlines)
  - `--md-sys-color-inverse-surface`, `--md-sys-color-inverse-on-surface`, `--md-sys-color-inverse-primary` (snackbars, tooltips)

### B. Typography Scale (15 Baseline + 15 Emphasized)

Apply via CSS classes `.m3-typescale-<scale>-<size>`, `.m3-typescale-emphasized-<scale>-<size>`, the `<Text variant="..." emphasized>` component, or CSS variables:

```css
/* Baseline */
font: var(--md-sys-typescale-title-medium);
letter-spacing: var(--md-sys-typescale-title-medium-tracking);

/* Emphasized (M3 Expressive: heavier weight for focal actions, active states, and editorial headers) */
font: var(--md-sys-typescale-emphasized-headline-small);
letter-spacing: var(--md-sys-typescale-emphasized-headline-small-tracking);
```

- Scales: `display`, `headline`, `title`, `body`, `label`
- Sizes: `large`, `medium`, `small`
- **When to use `emphasized`**:
  - Hero / page titles (`emphasized-display-small`, `emphasized-headline-medium`)
  - Primary CTA buttons (`<Button emphasized>`)
  - Selected list items, active tabs, unread message rows, and key metric callouts (`<Text variant="title-medium" emphasized>`)

### C. Motion Physics (Spatial vs. Effects Springs)

M3 Expressive replaces standard cubic-bezier transitions on interactive components with a dual-spring physics system:

| Spring Token | Duration Token | Use Case | Physics Behavior |
|---|---|---|---|
| `--md-sys-motion-spring-fast-spatial` | `--md-sys-motion-spring-fast-spatial-duration` | Small interactive elements: button press morph, switch thumb, chip/icon scale | Overshoots & bounces in Expressive scheme (`350–362ms`) |
| `--md-sys-motion-spring-default-spatial` | `--md-sys-motion-spring-default-spatial-duration` | Medium elements: navigation indicator slide, rail expand/collapse, card resize | Balanced bounce (`500–514ms`) |
| `--md-sys-motion-spring-slow-spatial` | `--md-sys-motion-spring-slow-spatial-duration` | Large surfaces: pane layout reflow, hero morphs, sheet snap | Gentle, wide-amplitude spring (`650–675ms`) |
| `--md-sys-motion-spring-fast-effects` | `--md-sys-motion-spring-fast-effects-duration` | Hover/press state layers, badge/icon opacity, color swaps | Critically damped, **never overshoots** (`150ms`) |
| `--md-sys-motion-spring-default-effects` | `--md-sys-motion-spring-default-effects-duration` | Surface color transitions, background fills, focus ring fade | Critically damped (`200ms`) |
| `--md-sys-motion-spring-slow-effects` | `--md-sys-motion-spring-slow-effects-duration` | Backdrop scrim fade, theme transition overlays | Critically damped (`300ms`) |

**CSS Usage Pattern**:
```css
.my-expressive-card {
  transition:
    transform var(--md-sys-motion-spring-fast-spatial-duration) var(--md-sys-motion-spring-fast-spatial),
    border-radius var(--md-sys-motion-spring-fast-spatial-duration) var(--md-sys-motion-spring-fast-spatial),
    background-color var(--md-sys-motion-spring-default-effects-duration) var(--md-sys-motion-spring-default-effects);
}
```
> **Never** apply a `*-spatial` spring to `opacity` or `background-color` (overshooting >1 or <0 causes color clipping/flicker). Always pair spatial properties with `*-spatial` and color/opacity with `*-effects`.

### D. Shape Tokens & The 35 Material Shapes

1. **10-Step Corner Radius Scale (`--md-sys-shape-corner-*`)**:
   - `none` (`0`), `extra-small` (`4px`), `small` (`8px`), `medium` (`12px`), `large` (`16px`), `large-increased` (`20px`), `extra-large` (`28px`), `extra-large-increased` (`32px`), `extra-extra-large` (`48px`), `full` (`9999px`).
2. **The 35 Material Shapes (`MaterialShapeName`)**:
   - Geometric & Classic: `'circle'`, `'square'`, `'slanted'`, `'arch'`, `'fan'`, `'arrow'`, `'semicircle'`, `'oval'`, `'pill'`, `'triangle'`, `'diamond'`, `'clamshell'`, `'pentagon'`, `'gem'`
   - Organic & Expressive: `'sunny'`, `'very-sunny'`, `'cookie-4'`, `'cookie-6'`, `'cookie-7'`, `'cookie-9'`, `'cookie-12'`, `'ghostish'`, `'clover-4'`, `'clover-8'`, `'burst'`, `'soft-burst'`, `'boom'`, `'soft-boom'`, `'flower'`, `'puffy'`, `'puffy-diamond'`, `'pixel-circle'`, `'pixel-triangle'`, `'bun'`, `'heart'`
   - **Where to apply**:
     - `<Avatar shape="cookie-9" src="..." />` (distinguish user types, AI personas, or featured contacts)
     - `<CardMedia shape="arch" src="..." />` or `<Artwork shape="clover-4" seed="..." />`
     - `<Shape name={active ? 'cookie-9' : 'circle'} />` (automatically morphs polygons with a spring when `name` changes!)

### E. Spacing Scale (`--md-sys-measurement-space*`)

Built on an 8dp grid (`space100` = `8px`):
- Micro / Nested: `space0` (`0`), `space25` (`2px`), `space50` (`4px`), `space75` (`6px`), `space100` (`8px`), `space125` (`10px`), `space150` (`12px`), `space175` (`14px`)
- Component & Layout: `space200` (`16px`), `space250` (`20px`), `space300` (`24px`), `space400` (`32px`), `space500` (`40px`), `space600` (`48px`), `space700` (`56px`), `space800` (`64px`), `space900` (`72px`)

---

## 3. Adaptive Layout & Screen Composition Rules

1. **Always Use `AppScaffold` for Application Shells**:
   - Do not build fixed desktop sidebars that break on mobile or fixed bottom bars on desktop.
   - `<AppScaffold navItems={...} navSections={...} appBar={<AppBar ... />} fab={<Fab ... />}>` automatically adapts across M3 window size classes:
     - `compact` (<600px): 64dp flexible `NavigationBar` at the bottom.
     - `medium` (600–839px): Collapsed 96dp `NavigationRail` on the leading edge.
     - `expanded` / `large` / `extra-large` (≥840px): Expanded `NavigationRail` (220–360dp) with section headers and extended FAB.
2. **Use Canonical Multi-Pane Layouts on Expanded Screens**:
   - **Master-Detail (`<ListDetailLayout>`)**: Email clients, messaging, file browsers, settings, directory inspectors. Automatically collapses into a single pane (or BottomSheet) on compact viewports.
   - **Primary + Supporting Context (`<SupportingPaneLayout>`)**: Document editor + comments/properties inspector, media player + queue, dashboard + live activity feed.
   - **Responsive Content Grid (`<FeedLayout>`)**: News feeds, media galleries, card dashboards.

---

## 4. M3 Expressive UI Review Checklist

Before completing any UI feature or page in an M3 Expressive project, verify:
- [ ] **Zero legacy M3 baseline patterns**: No `TopAppBar`, `BottomAppBar`, `SegmentedButtons`, `NavigationDrawer`, `Fab size="small"`, or spinner-inside-button.
- [ ] **Zero hardcoded colors**: All custom CSS uses `var(--md-sys-color-*)` tokens and works in both light and dark modes (`useTheme().toggleDark()`).
- [ ] **Surface containment & contrast**: Related content is grouped in `surface-container-*` cards or `List variant="segmented"` rather than floating on raw backgrounds separated only by full-width `<hr>` lines.
- [ ] **Expressive typography hierarchy**: Focal headers, primary actions, and active/unread states use `emphasized` typescale tokens (`<Text emphasized>`, `<Button emphasized>`, `.m3-typescale-emphasized-*`).
- [ ] **Intentional shape contrast**: Action groups use `<ButtonGroup variant="connected">` or `<SplitButton>`, avatars/media use expressive `shape` props where appropriate (`cookie-9`, `arch`, `clover-4`, `sunny`), and buttons retain `shapeMorph`.
- [ ] **Focused Hero Moment**: Every key screen has **1 to 2** standout focal elements (e.g., a vibrant `primary-container`/`tertiary-container` banner, a large/medium `<Fab>`, a morphing `<Shape>` header, or a `<LinearProgress shape="wavy">`) without overwhelming every secondary control.
