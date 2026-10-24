---
name: m3-expressive
description: Set up Material 3 Expressive in a React 19, Vue 3, or web project by copying component source code (vendored/shadcn-style), and design or build UI strictly following Material 3 Expressive specifications (2025 HCT dynamic color, spatial/effects spring physics, emphasized typography, 35-shape library with morphing, and Expressive-only components). Use when bootstrapping M3 Expressive via source copy, adding M3 Expressive components to an app, migrating legacy M3 baseline UI, or building screens that adhere to M3 Expressive design tactics.
metadata:
  short-description: Copy-source setup and M3 Expressive design system guide
---

# Material 3 Expressive — Source-Copy Setup & Design System Skill

This skill guides you through two workflows:
1. **Copy-Source Setup (Vendored Component Architecture)**: Configuring Material 3 Expressive in a project by copying the TypeScript/React/Vue component source code and CSS token files directly into the project repository (shadcn-style ownership, zero bundle lock-in).
2. **Material 3 Expressive Design & Engineering Compliance**: Building and styling UI that strictly adheres to Google's Material 3 Expressive specification (2025 HCT dynamic color, spring physics, emphasized typography, 35 Material shapes with morphing, and Expressive-only components).

---

## Part 1: Copy-Source Setup Workflow

Instead of depending on a pre-built opaque widget bundle, copy the Material 3 Expressive source tree (`https://github.com/ShinChven/m3-expressive`) into the target project (e.g., `src/m3/`) and map `@m3-expressive/react` (or `@/m3`) via TypeScript and bundler path aliases.

### Step 1: Copy Component Source & Stylesheets

Run the bundled `scripts/copy-m3.mjs` tool. It automatically locates the local `m3-expressive` repository or shallow-clones `https://github.com/ShinChven/m3-expressive.git` into a temp cache when run from an external project:

```bash
# Option A: Copy the full React 19 component + layout + theme + CSS source tree (Recommended)
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3

# Option B: Selective copy — copy specific components + their exact transitive TS & CSS dependencies
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3 --components Button,Card,Dialog,AppBar,AppScaffold

# Option C: Copy Vue 3.5+ SFCs + Core + CSS token source tree
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3 --framework vue

# Option D: Inspect all available modules and their dependencies before copying
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --list
```

### Step 2: Install Minimal Runtime Dependencies

The copied source files have zero internal build step and require only 3–4 npm packages:

```bash
# Full React setup (or when using ListView / TreeView):
npm install @material/material-color-utilities @tanstack/react-virtual @fontsource-variable/roboto-flex material-symbols

# Selective React or Vue 3 setup without ListView / TreeView:
npm install @material/material-color-utilities @fontsource-variable/roboto-flex material-symbols
```

### Step 3: Configure Path Aliases (`tsconfig.json` & Bundler)

Alias `@m3-expressive/react` (or `@m3-expressive/vue`) to `./src/m3` so every component import and documentation snippet works unmodified against your local vendored source:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@m3-expressive/react": ["./src/m3/index.ts"],
      "@m3-expressive/react/styles.css": ["./src/m3/styles/index.css"],
      "@m3-expressive/react/fonts.css": ["./src/m3/styles/fonts.css"],
      "@/m3": ["./src/m3/index.ts"]
    }
  }
}
```

For full **Vite**, **Next.js App Router (RSC)**, and **Vue 3** bundler configs, plus the complete component-to-file dependency table, read [references/source-copy-manifest.md](references/source-copy-manifest.md).

### Step 4: Wire Root Styles, ThemeProvider, Router Links, and SSR Anti-FOUC

1. **Import stylesheets once** at the application entry point:
   ```tsx
   import '@m3-expressive/react/fonts.css'  // Self-hosted Roboto Flex + Material Symbols Outlined
   import '@m3-expressive/react/styles.css' // 2025 baseline scheme, tokens, springs, component CSS
   ```
2. **Wrap root application** in `ThemeProvider` and `SnackbarProvider` (plus `LinkProvider` when using React Router or Next.js `<Link>`):
   ```tsx
   import { SnackbarProvider, ThemeProvider } from '@m3-expressive/react'

   export function App() {
     return (
       <ThemeProvider defaultConfig={{ seed: '#6750A4', motionScheme: 'expressive' }}>
         <SnackbarProvider>
           {/* AppScaffold and routes */}
         </SnackbarProvider>
       </ThemeProvider>
     )
   }
   ```
3. **Prevent Flash of Unstyled Theme (FOUC)**: Inject `themeInitScript()` into `<head>` before first paint (via Vite's `transformIndexHtml` or Next.js `<script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />`).

---

## Part 2: Following Material 3 Expressive Guidelines

When building or refactoring UI in a Material 3 Expressive project, adhere to these core rules. For full token tables, shape names, and review checklists, read [references/expressive-design-rules.md](references/expressive-design-rules.md).

### 1. Use Expressive-Only Components (Never Use Eliminated M3 Baseline Patterns)

Material 3 Expressive eliminates legacy baseline components and variants marked *no longer recommended*:
- **App Bars**: Use `<AppBar variant="small" | "medium-flexible" | "large-flexible" | "search" align="start" | "center" subtitle="..." />`. Never use `TopAppBar`.
- **Toolbars**: Use `<Toolbar type="docked" | "floating" color="standard" | "vibrant" fab={...}>`. Never use `BottomAppBar`.
- **Connected Button Groups**: Use `<ButtonGroup variant="connected" selection="single" | "multiple">` with `<Button value="...">` children. Never use `SegmentedButtons`.
- **Standard Button Groups & Split Buttons**: Use `<ButtonGroup variant="standard">` (pressed button expands and squeezes neighbors via spatial spring) and `<SplitButton>` for primary action + dropdown menu.
- **Navigation & App Shell**: Use `<AppScaffold>` or `<NavigationRail expanded modal={...} indicator="pill" | "fill">` and the 64dp flexible `<NavigationBar itemLayout="auto">`. Never use `NavigationDrawer`.
- **FABs & FAB Menus**: Use `<Fab size="regular" | "medium" | "large">` (56/80/96dp) with semantic container/accent colors (`primary`, `secondary`, `tertiary`, `primary-container`, `secondary-container`, `tertiary-container`), and `<FabMenu>` for multi-action speed dials. `Fab size="small"` (40dp) and `color="surface"` are removed.
- **Loading & Progress**: Use `<LoadingIndicator />` (morphing 7-shape sequence) for short loads and inside `<Button loading>`. Use `<LinearProgress shape="wavy" />` and `<CircularProgress shape="wavy" />` for active media or prominent progress.
- **Expressive Lists, Menus & Sliders**: Use `<List variant="standard" | "segmented">` (rounded 16dp selected items with emphasized headline), `<Menu color="standard" | "vibrant" grouped>`, and `<Slider stops size="xs".."xl" centered orientation="horizontal" | "vertical" insetIcon="...">`.

### 2. Enforce the Five Expressive Foundation Systems

1. **2025 HCT Dynamic Color & Surface Containment**:
   - **Never hardcode hex/RGB colors** in CSS or inline styles. Always use `var(--md-sys-color-*)`.
   - Create hierarchy and grouping using surface container tones (`surface-container-lowest` → `low` → `surface-container` → `high` → `highest`) rather than heavy drop shadows or cluttered `1px` borders.
   - Pair accent roles (`primary`, `secondary`, `tertiary` and their `-container` / `fixed` variants) intentionally to spotlight the primary screen action.
2. **Dual-Spring Physics (`spatial` vs. `effects`)**:
   - Animate layout, transform, size, and border-radius with **spatial springs**: `var(--md-sys-motion-spring-{fast|default|slow}-spatial)` + `var(--md-sys-motion-spring-{fast|default|slow}-spatial-duration)` (overshoots naturally in the Expressive scheme).
   - Animate color, background, opacity, and box-shadow with **effects springs**: `var(--md-sys-motion-spring-{fast|default|slow}-effects)` + `var(--md-sys-motion-spring-{fast|default|slow}-effects-duration)` (critically damped, never overshoots).
   - Keep `shapeMorph` enabled on `<Button>` and `<IconButton>` so press states morph corner radii dynamically.
3. **Emphasized Typography**:
   - Combine the 15 baseline typescale styles (`--md-sys-typescale-*`) with the 15 **emphasized** styles (`--md-sys-typescale-emphasized-*`, `.m3-typescale-emphasized-*`, `<Text emphasized>`, `<Button emphasized>`) to reinforce visual hierarchy on page headlines, primary CTAs, active tabs, and unread/selected items.
4. **Expanded Corner Scale & 35 Material Shapes**:
   - Mix round (`full`) and square (`medium` / `large` / `large-increased` 20px / `extra-large` 28px) shapes to create visual contrast.
   - Use `<Shape name="..." />`, `<Avatar shape="cookie-9" />`, `<CardMedia shape="arch" />`, and `<Artwork shape="clover-4" />` from the 35-shape library (`circle`, `square`, `slanted`, `arch`, `sunny`, `cookie-4`..`cookie-12`, `clover-4`, `clover-8`, `soft-burst`, `flower`, `puffy`, `heart`, etc.). Changing `<Shape name={...} />` automatically morphs the polygon with a spring.
5. **8dp Spacing & Canonical Adaptive Layouts**:
   - Use `--md-sys-measurement-space0`..`space900` (`space100` = `8px`, `space200` = `16px`, `space300` = `24px`).
   - Compose multi-pane screens using `<AppScaffold>` and canonical layouts (`<ListDetailLayout>`, `<SupportingPaneLayout>`, `<FeedLayout>`) that adapt across `useWindowSizeClass()` (`compact`, `medium`, `expanded`, `large`, `extra-large`).

### 3. Apply the 7 Expressive Design Tactics & Hero Moments

When designing a page or user flow, apply these tactics intentionally:
1. **Shape Variety**: Break uniform rectangles with contrasting silhouettes (e.g., a `cookie-9` avatar or `arch` media header inside a `large-increased` card, paired with pill buttons).
2. **Rich Color Contrast**: Reserve high-contrast roles (`primary`, `tertiary-container`, `Toolbar color="vibrant"`) for the screen's primary takeaway so key actions are spotted immediately.
3. **Editorial Typography**: Pair large emphasized display/headline text with compact label/body metadata.
4. **Containment for Emphasis**: Group related information into distinct `surface-container-*` cards or `segmented` lists; give the most important group the brightest surface mapping (`surface-container-lowest` in light mode, `surface-container-high` in dark mode).
5. **Fluid Motion**: Use morphing shapes (`<Shape>`, `shapeMorph` buttons), wavy progress indicators (`shape="wavy"`), and spring transitions to make interactions feel responsive and alive.
6. **Component Flexibility**: Adapt navigation (`AppScaffold`) and contextual actions (`Toolbar type="floating"` vs `docked`, `ListDetailLayout`) to the viewport and task state.
7. **1–2 Hero Moments per Flow**: Combine multiple tactics (shape morph + emphasized display type + vibrant container color + spring motion) on **1 or 2 signature interactions** per screen. Avoid making every secondary element compete for attention.
