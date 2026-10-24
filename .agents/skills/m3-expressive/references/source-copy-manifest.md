# Material 3 Expressive — Source-Copy Architecture & Integration Manifest

Use this reference when configuring path aliases, bundler setups (Vite, Next.js App Router, Vue 3), or manually copying subsets of Material 3 Expressive source files into a project.

---

## 1. Repository Source Layout

The repository (`https://github.com/ShinChven/m3-expressive`) is organized so that the component source code has **zero internal build step** requirements when copied into a TypeScript project:

| Source Directory | Target Framework | Contents |
|---|---|---|
| `src/` (mirrored in `packages/react/src/`) | **React 19** | 35 component modules (`components/*.tsx`), adaptive layouts (`layout/*.tsx`), dynamic color & theme (`theme/*.ts*`), 35 Material shapes & polygon morphing (`shapes/*.ts`), hooks/focus/spring/positioning (`utils/*.ts*`), i18n (`i18n/locale.tsx`), and full CSS (`styles/`). |
| `packages/core/src/` | **Framework-agnostic** | 2025 HCT color math (`scheme.ts`), SSR anti-FOUC (`initScript.ts`), damped spring solver (`spring.ts`), 35 shapes & morphing (`shapes/*.ts`), date helpers (`date.ts`), and imperative ripple (`ripple.ts`). |
| `packages/vue/src/` | **Vue 3.5+** | Vue SFCs (`components/*.vue`), `useTheme` composable (`composables/useTheme.ts`), and `v-ripple` directive (`directives/ripple.ts`). |
| `src/styles/` (mirrored in `packages/styles/src/`) | **All (React / Vue / HTML)** | `baseline-scheme.css` (2025 spec static fallback), `tokens.css` (typescale, emphasized typescale, 10 corner steps, 8dp spacing, Expressive & Standard `linear()` springs), `base.css`, `fonts.css`, and 16 modular component CSS files (`styles/components/*.css`). |

---

## 2. External Runtime Dependencies

When copying source code into a project, only **3 to 4 npm packages** are ever referenced by the source files:

| Package | Referenced By | Purpose | Required When |
|---|---|---|---|
| `@material/material-color-utilities` | `theme/scheme.ts` (`core/scheme.ts`) | Generates 2025 Material 3 Expressive HCT dynamic color schemes from any seed hex color across 9 scheme variants (`tonal-spot`, `vibrant`, `expressive`, `fidelity`, `content`, `rainbow`, `fruit-salad`, `neutral`, `monochrome`). | Using `ThemeProvider`, `useTheme`, or `createThemeCss`. |
| `@fontsource-variable/roboto-flex` | `styles/fonts.css` | Self-hosted variable Roboto Flex font for baseline & emphasized typography. | Importing `fonts.css` (can be omitted if loading Google Fonts via `<link>` in HTML). |
| `material-symbols` | `styles/fonts.css` | Self-hosted Material Symbols Outlined variable icon font (`FILL`, `wght`, `GRAD`, `opsz`). | Importing `fonts.css` (can be omitted if loading Material Symbols from Google Fonts CDN). |
| `@tanstack/react-virtual` | `components/ListView.tsx`, `components/TreeView.tsx` | Virtualized scrolling for 10,000+ row lists and trees. | **Only** when copying `ListView` or `TreeView`. |

---

## 3. Framework Setup Templates (Copy-Source Mode)

### A. Vite + React 19

1. **Copy source into `src/m3`**:
   ```bash
   node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3
   npm install @material/material-color-utilities @tanstack/react-virtual @fontsource-variable/roboto-flex material-symbols
   ```

2. **`tsconfig.json` (or `tsconfig.app.json`)**:
   Map `@m3-expressive/react` to `./src/m3` so all component imports and documentation examples work without rewriting import specifiers:
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

3. **`vite.config.ts`**:
   ```ts
   import { fileURLToPath } from 'node:url'
   import react from '@vitejs/plugin-react'
   import { defineConfig } from 'vite'
   import { themeInitScript } from './src/m3/theme/initScript'

   export default defineConfig({
     plugins: [
       react(),
       {
         name: 'm3-theme-init',
         transformIndexHtml: () => [
           { tag: 'script', children: themeInitScript(), injectTo: 'head-prepend' },
         ],
       },
     ],
     resolve: {
       alias: [
         {
           find: '@m3-expressive/react/fonts.css',
           replacement: fileURLToPath(new URL('./src/m3/styles/fonts.css', import.meta.url)),
         },
         {
           find: '@m3-expressive/react/styles.css',
           replacement: fileURLToPath(new URL('./src/m3/styles/index.css', import.meta.url)),
         },
         {
           find: '@m3-expressive/react',
           replacement: fileURLToPath(new URL('./src/m3/index.ts', import.meta.url)),
         },
         {
           find: '@/m3',
           replacement: fileURLToPath(new URL('./src/m3/index.ts', import.meta.url)),
         },
       ],
     },
   })
   ```

4. **Root Entry (`src/main.tsx` or `src/App.tsx`)**:
   ```tsx
   import '@m3-expressive/react/fonts.css'
   import '@m3-expressive/react/styles.css'
   import { SnackbarProvider, ThemeProvider } from '@m3-expressive/react'

   export function App() {
     return (
       <ThemeProvider defaultConfig={{ seed: '#6750A4', motionScheme: 'expressive' }}>
         <SnackbarProvider>
           {/* Application routes & screens */}
         </SnackbarProvider>
       </ThemeProvider>
     )
   }
   ```

---

### B. Next.js App Router (React Server Components)

All interactive modules in `src/m3/` already include `'use client'` at the top of the file, while pure utilities (`themeInitScript`, `createThemeCss`, `shapePath`, `animateSpring`) are server-safe.

1. **`tsconfig.json`**:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@m3-expressive/react": ["./src/m3/index.ts"],
         "@m3-expressive/react/styles.css": ["./src/m3/styles/index.css"],
         "@m3-expressive/react/fonts.css": ["./src/m3/styles/fonts.css"],
         "@/*": ["./src/*"]
       }
     }
   }
   ```

2. **`src/app/layout.tsx` (Server Component)**:
   ```tsx
   import '@m3-expressive/react/fonts.css'
   import '@m3-expressive/react/styles.css'
   import { SnackbarProvider, ThemeProvider, themeInitScript } from '@m3-expressive/react'

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en" suppressHydrationWarning>
         <head>
           <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
         </head>
         <body>
           <ThemeProvider defaultConfig={{ seed: '#6750A4', motionScheme: 'expressive' }}>
             <SnackbarProvider>{children}</SnackbarProvider>
           </ThemeProvider>
         </body>
       </html>
     )
   }
   ```

3. **Router Link Integration (`LinkProvider`)**:
   Wire Next.js `Link` (or React Router `Link`) once inside a client provider so every M3 component with `href` (`Button`, `CardActionArea`, `ListItem`, `NavigationBar`, `NavigationRail`, `Chip`, `MenuItem`, `Tab`) uses client-side routing:
   ```tsx
   'use client'
   import { type LinkComponentProps, LinkProvider } from '@m3-expressive/react'
   import NextLink from 'next/link'

   function AppLink({ href, ref, ...rest }: LinkComponentProps) {
     return <NextLink {...rest} ref={ref} href={href} />
   }

   export function ClientLinkProvider({ children }: { children: React.ReactNode }) {
     return <LinkProvider component={AppLink}>{children}</LinkProvider>
   }
   ```

---

### C. Vue 3.5+ (Vite)

1. **Copy Vue + Core + Styles into `src/m3`**:
   ```bash
   node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3 --framework vue
   npm install @material/material-color-utilities @fontsource-variable/roboto-flex material-symbols
   ```
   *(Note: `copy-m3.mjs --framework vue` automatically rewrites internal `@m3-expressive/core` imports in `.vue` and `.ts` files to relative `./core/index` imports.)*

2. **Alias in `vite.config.ts`**:
   ```ts
   resolve: {
     alias: {
       '@m3-expressive/vue': fileURLToPath(new URL('./src/m3/index.ts', import.meta.url)),
       '@m3-expressive/styles/fonts.css': fileURLToPath(new URL('./src/m3/styles/fonts.css', import.meta.url)),
       '@m3-expressive/styles': fileURLToPath(new URL('./src/m3/styles/index.css', import.meta.url)),
     },
   }
   ```

---

## 4. Component-to-File & CSS Dependency Matrix

If copying components manually without `copy-m3.mjs`, always include:
- **Foundation CSS**: `styles/baseline-scheme.css`, `styles/tokens.css`, `styles/base.css`, `styles/fonts.css`, `styles/components/icon.css`
- **Foundation TS**: `utils/hooks.ts`, `utils/spring.ts`, `theme/scheme.ts`, `theme/initScript.ts`, `theme/ThemeProvider.tsx`, `utils/portal.tsx`

Plus the component's `.tsx` file, its internal imports, and its paired stylesheet(s) in `styles/components/`:

| Component / Module | Source File (`src/`) | Paired Stylesheets (`src/styles/components/`) | Key Internal Dependencies (`src/`) |
|---|---|---|---|
| `Button`, `IconButton`, `Fab` | `components/Button.tsx` | `button.css`, `progress.css`, `badge-tooltip.css` | `Action.tsx`, `ButtonGroup.tsx`, `Icon.tsx`, `LoadingIndicator.tsx`, `Ripple.tsx`, `Tooltip.tsx` |
| `ButtonGroup` | `components/ButtonGroup.tsx` | `button.css` | `utils/focus.ts`, `utils/hooks.ts` |
| `SplitButton` | `components/SplitButton.tsx` | `button.css`, `menu.css` | `Button.tsx`, `Icon.tsx`, `Menu.tsx`, `i18n/locale.tsx` |
| `FabMenu`, `FabMenuItem` | `components/FabMenu.tsx` | `button.css` | `Action.tsx`, `Button.tsx`, `Icon.tsx`, `Ripple.tsx`, `utils/layers.ts`, `utils/portal.tsx` |
| `AppBar`, `Toolbar` | `components/AppBar.tsx` | `navigation.css`, `button.css` | `Button.tsx`, `utils/focus.ts` |
| `NavigationBar`, `NavigationRail` | `components/Navigation.tsx` | `navigation.css`, `badge-tooltip.css`, `button.css` | `Action.tsx`, `Badge.tsx`, `Button.tsx`, `Icon.tsx`, `Ripple.tsx`, `Tooltip.tsx`, `utils/focus.ts`, `utils/portal.tsx` |
| `AppScaffold` | `layout/AppScaffold.tsx` | `layout.css`, `navigation.css`, `button.css` | `Navigation.tsx`, `Button.tsx`, `layout/windowSize.ts` |
| `ListDetailLayout`, `SupportingPaneLayout`, `FeedLayout`, `PaneLayout`, `ResizablePanes` | `layout/Panes.tsx` | `layout.css`, `containment.css` | `Sheet.tsx`, `layout/windowSize.ts` |
| `LoadingIndicator` | `components/LoadingIndicator.tsx` | `progress.css` | `shapes/materialShapes.ts`, `shapes/morph.ts`, `shapes/polygon.ts` |
| `LinearProgress`, `CircularProgress` | `components/Progress.tsx` | `progress.css` | `utils/hooks.ts` |
| `Card`, `Avatar`, `Divider`, `Text` | `components/Card.tsx` | `containment.css`, `button.css` | `Action.tsx`, `Ripple.tsx`, `shapes/materialShapes.ts` |
| `Dialog` | `components/Dialog.tsx` | `containment.css`, `button.css` | `Button.tsx`, `Icon.tsx`, `utils/focus.ts`, `utils/layers.ts`, `utils/portal.tsx` |
| `BottomSheet`, `SideSheet` | `components/Sheet.tsx` | `containment.css`, `button.css` | `Button.tsx`, `utils/focus.ts`, `utils/layers.ts`, `utils/portal.tsx` |
| `List`, `ListItem`, `ListSubheader` | `components/List.tsx` | `containment.css`, `button.css` | `Action.tsx`, `Ripple.tsx`, `shapes/materialShapes.ts`, `utils/focus.ts` |
| `Carousel`, `CarouselItem` | `components/Carousel.tsx` | `containment.css` | `Ripple.tsx`, `utils/link.tsx`, `i18n/locale.tsx` |
| `Tabs`, `Tab`, `TabPanel` | `components/Tabs.tsx` | `navigation.css`, `badge-tooltip.css` | `Badge.tsx`, `Icon.tsx`, `Ripple.tsx`, `utils/focus.ts` |
| `Search` | `components/Search.tsx` | `navigation.css`, `button.css` | `Button.tsx`, `Card.tsx`, `Icon.tsx`, `utils/layers.ts`, `utils/portal.tsx` |
| `Checkbox`, `Radio`, `RadioGroup`, `Switch` | `components/Selection.tsx` | `selection.css`, `button.css` | `Icon.tsx`, `Ripple.tsx`, `utils/focus.ts` |
| `Slider`, `RangeSlider` | `components/Slider.tsx` | `slider.css` | `Icon.tsx`, `utils/hooks.ts` |
| `AssistChip`, `FilterChip`, `InputChip`, `SuggestionChip`, `ChipSet` | `components/Chip.tsx` | `chip.css`, `button.css` | `Action.tsx`, `Icon.tsx`, `Ripple.tsx`, `utils/focus.ts` |
| `Menu`, `MenuItem`, `SubMenu`, `MenuGroup`, `MenuButton` | `components/Menu.tsx` | `menu.css`, `button.css` | `Card.tsx`, `Icon.tsx`, `Ripple.tsx`, `utils/focus.ts`, `utils/layers.ts`, `utils/portal.tsx`, `utils/position.ts` |
| `TextField` | `components/TextField.tsx` | `field.css`, `button.css` | `Button.tsx`, `Icon.tsx`, `i18n/locale.tsx` |
| `Select` | `components/Select.tsx` | `field.css`, `menu.css` | `Icon.tsx`, `Ripple.tsx`, `utils/focus.ts`, `utils/layers.ts`, `utils/portal.tsx`, `utils/position.ts` |
| `Calendar`, `DatePickerDialog`, `DateRangePickerDialog`, `DatePickerField` | `components/DatePicker.tsx` | `pickers.css`, `button.css`, `field.css`, `containment.css` | `Button.tsx`, `Dialog.tsx`, `Icon.tsx`, `Ripple.tsx`, `TextField.tsx`, `utils/date.ts` |
| `TimePickerDialog`, `TimePickerField` | `components/TimePicker.tsx` | `pickers.css`, `button.css`, `field.css`, `containment.css` | `Button.tsx`, `Dialog.tsx`, `Icon.tsx`, `TextField.tsx` |
| `ListView` | `components/ListView.tsx` | `data.css`, `containment.css` | `@tanstack/react-virtual`, `utils/hooks.ts` |
| `DataTable` | `components/DataTable.tsx` | `data.css`, `button.css`, `selection.css`, `menu.css` | `Button.tsx`, `Icon.tsx`, `Select.tsx`, `Selection.tsx`, `i18n/locale.tsx` |
| `TreeView` | `components/TreeView.tsx` | `data.css`, `progress.css`, `selection.css` | `@tanstack/react-virtual`, `Icon.tsx`, `LoadingIndicator.tsx`, `Ripple.tsx`, `Selection.tsx`, `utils/focus.ts` |
| `Shape`, `useShapeMorph` | `components/Shape.tsx` | `containment.css` | `shapes/materialShapes.ts`, `shapes/morph.ts`, `shapes/polygon.ts` |
| `Artwork`, `art` | `components/Artwork.tsx` | `containment.css` | `Card.tsx`, `shapes/materialShapes.ts`, `utils/art.ts` |
| `ChatAssistant` | `components/ChatAssistant.tsx` | `chat.css`, `button.css`, `chip.css` | `Button.tsx`, `Chip.tsx`, `Icon.tsx`, `LoadingIndicator.tsx`, `Ripple.tsx` |
