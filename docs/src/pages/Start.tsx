import { Button } from '@m3-expressive/react'
import skillMarkdown from '../../../.agents/skills/m3-expressive/SKILL.md?raw'
import { Page, Section } from '../demo'
import { CodeBlock, useCopy } from '../kit/CodeBlock'
import { useFramework } from '../kit/framework'
import { RichText } from '../kit/RichText'

const INSTALL_REACT = 'npm install @m3-expressive/react'
const INSTALL_VUE = 'npm install @m3-expressive/vue @m3-expressive/styles'
const INSTALL_HTML = 'npm install @m3-expressive/styles'

const SKILL_INSTALL = `# Install the m3-expressive skill via Skills CLI
npx skills add ShinChven/m3-expressive --skill m3-expressive

# Or copy directly from the repository into your project's .agents/skills/
git clone --depth 1 https://github.com/ShinChven/m3-expressive.git /tmp/m3-expressive && \\
  mkdir -p .agents/skills && cp -R /tmp/m3-expressive/.agents/skills/m3-expressive .agents/skills/`

const COPY_SOURCE_REACT = `# Option A: Copy the full React 19 + CSS source tree into ./src/m3
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3

# Option B: Copy only selected components + their transitive TS & CSS dependencies
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3 \\
  --components Button,Card,Dialog,AppBar,AppScaffold

# Install minimal runtime dependencies
npm install @material/material-color-utilities @tanstack/react-virtual \\
  @fontsource-variable/roboto-flex material-symbols`

const COPY_SOURCE_VUE = `# Copy Vue 3.5+ SFCs, core utilities, and CSS tokens into ./src/m3
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3 --framework vue

# Install minimal runtime dependencies
npm install @material/material-color-utilities @fontsource-variable/roboto-flex material-symbols`

const COPY_SOURCE_CSS = `# Copy standalone Material 3 Expressive CSS tokens & component stylesheets
node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/styles/m3 --framework css

# Install self-hosted Roboto Flex & Material Symbols fonts
npm install @fontsource-variable/roboto-flex material-symbols`

const COPY_SOURCE_TSCONFIG = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@m3-expressive/react": ["./src/m3/index.ts"],
      "@m3-expressive/react/styles.css": ["./src/m3/styles/index.css"],
      "@m3-expressive/react/fonts.css": ["./src/m3/styles/fonts.css"],
      "@/m3": ["./src/m3/index.ts"]
    }
  }
}`

export const AGENT_BOOTSTRAP_PROMPT = `Use the m3-expressive skill from https://github.com/ShinChven/m3-expressive (.agents/skills/m3-expressive/SKILL.md) to configure Material 3 Expressive in this project by copying the component source code:
1. Clone https://github.com/ShinChven/m3-expressive (if not already present), copy .agents/skills/m3-expressive into ./.agents/skills/m3-expressive, and run \`node .agents/skills/m3-expressive/scripts/copy-m3.mjs --target ./src/m3\` to vendor the component source and CSS tokens.
2. Install the required runtime packages (@material/material-color-utilities, @fontsource-variable/roboto-flex, material-symbols, and @tanstack/react-virtual if using ListView/TreeView).
3. Configure tsconfig.json and bundler path aliases so @m3-expressive/react resolves to ./src/m3/index.ts and @m3-expressive/react/styles.css resolves to ./src/m3/styles/index.css.
4. Wire ThemeProvider (2025 HCT seed + expressive motionScheme), SnackbarProvider, and themeInitScript() at the app root.
5. Follow all Material 3 Expressive rules in the skill: use Expressive-only components (AppBar, Toolbar, ButtonGroup, NavigationRail, AppScaffold, LoadingIndicator, wavy Progress), --md-sys-color-* surface-container hierarchy, spatial vs. effects spring tokens, emphasized typography, and the 35 Material shapes with morphing.`

const SETUP_REACT = `import '@m3-expressive/react/fonts.css' // Roboto Flex and Material Symbols, self-hosted
import '@m3-expressive/react/styles.css' // tokens, colors and all component styles
import { Button, SnackbarProvider, ThemeProvider } from '@m3-expressive/react'

export function App() {
  return (
    <ThemeProvider defaultConfig={{ seed: '#6750A4' }}>
      <SnackbarProvider>
        <Button icon="add">Create</Button>
      </SnackbarProvider>
    </ThemeProvider>
  )
}`

const SETUP_VUE = `<script setup>
import '@m3-expressive/styles'
import '@m3-expressive/styles/fonts.css'
import { M3Button, useTheme } from '@m3-expressive/vue'

const { setSeed, setDark } = useTheme()
</script>

<template>
  <M3Button variant="filled" icon="add">Create</M3Button>
</template>`

const SETUP_HTML = `<!-- In your HTML <head> or CSS -->
<link rel="stylesheet" href="node_modules/@m3-expressive/styles/dist/fonts.css">
<link rel="stylesheet" href="node_modules/@m3-expressive/styles/dist/styles.css">

<!-- Material 3 Expressive Component -->
<button class="m3-button" data-variant="filled">
  <span class="m3-button__icon"><span class="m3-icon">add</span></span>
  <span class="m3-button__label">Create</span>
</button>`

const ROUTER = `import { type LinkComponentProps, LinkProvider } from '@m3-expressive/react'
import { Link } from 'react-router'

function RouterLink({ href, ref, ...rest }: LinkComponentProps) {
  return <Link {...rest} ref={ref} to={href} />
}

<LinkProvider component={RouterLink}>
  <App />
</LinkProvider>`

const VITE = `// vite.config.ts
import { themeInitScript } from '@m3-expressive/react'

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
})`

const NEXT = `// app/layout.tsx (a server component)
import { themeInitScript } from '@m3-expressive/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
      </head>
      <body>{children}</body>
    </html>
  )
}`

const VITE_WARNINGS = `export default defineConfig({
  build: {
    rolldownOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
    },
  },
})`

const LOCALE = `import { M3LocaleProvider } from '@m3-expressive/react'

// UK formats: day/month/year, weeks start on Monday, 24-hour clock
<M3LocaleProvider locale="en-GB" messages={{ rowsPerPage: 'Files per screen' }}>
  <App />
</M3LocaleProvider>`

function Steps({ items }: { items: string[] }) {
  return (
    <ul className="g-start__list">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  )
}

export function StartPage() {
  const { framework } = useFramework()
  const copy = useCopy()

  const installCode =
    framework === 'vue' ? INSTALL_VUE : framework === 'html' ? INSTALL_HTML : INSTALL_REACT
  const setupCode =
    framework === 'vue' ? SETUP_VUE : framework === 'html' ? SETUP_HTML : SETUP_REACT
  const setupCaption =
    framework === 'vue' ? 'App.vue' : framework === 'html' ? 'index.html' : 'App.tsx'

  return (
    <Page
      title="Get started"
      description="Install the library, add its styles, and start building with Material 3 Expressive."
    >
      <div className="g-start">
        <Section
          title="Install"
          description={
            framework === 'vue'
              ? 'Vue 3.5+ is supported. The package includes full TypeScript types and pure CSS styles.'
              : framework === 'html'
                ? 'Standard CSS package with tokens and pre-bundled component styles.'
                : 'React 19 and React DOM 19 are peer dependencies. The package includes its TypeScript types.'
          }
        >
          <CodeBlock code={installCode} caption="Terminal" />
        </Section>

        <Section
          title="AI Agent Skill & Copy-Source Setup"
          description="Prefer owning the component source code (shadcn-style) and having your AI coding agent (Claude Code, Cursor, Codex, Windsurf, Pi, or Cindy) configure and follow Material 3 Expressive automatically? Install the bundled m3-expressive skill."
        >
          <div className="g-row g-start__actions">
            <Button
              icon="smart_toy"
              emphasized
              onClick={() => copy(AGENT_BOOTSTRAP_PROMPT, 'Agent prompt')}
            >
              Copy Agent Bootstrap Prompt
            </Button>
            <Button
              variant="tonal"
              icon="description"
              onClick={() => copy(skillMarkdown, 'SKILL.md')}
            >
              Copy SKILL.md
            </Button>
            <Button
              variant="outlined"
              icon="open_in_new"
              href="https://github.com/ShinChven/m3-expressive/tree/main/.agents/skills/m3-expressive"
              target="_blank"
              rel="noreferrer"
            >
              View Skill on GitHub
            </Button>
          </div>
          <CodeBlock code={SKILL_INSTALL} caption="1. Install the Agent Skill" />
          <CodeBlock
            code={
              framework === 'vue'
                ? COPY_SOURCE_VUE
                : framework === 'html'
                  ? COPY_SOURCE_CSS
                  : COPY_SOURCE_REACT
            }
            caption="2. Vendor Component Source (copy-m3.mjs)"
          />
          {framework === 'react' && (
            <CodeBlock code={COPY_SOURCE_TSCONFIG} caption="3. Map Path Aliases in tsconfig.json" />
          )}
          <CodeBlock
            code={AGENT_BOOTSTRAP_PROMPT}
            caption="Prompt for Claude Code / Cursor / Codex"
          />
          <Steps
            items={[
              '**Copy-Source Ownership (`copy-m3.mjs`)**: Vendors the full TypeScript/React/Vue source tree or cherry-picks individual components (`--components Button,Card,Dialog,AppBar`) with automatic transitive TS and CSS dependency resolution.',
              '**Expressive-Only Component Rules**: Prevents agents from generating deprecated M3 baseline patterns (`TopAppBar` → `AppBar`, `BottomAppBar` → `Toolbar`, `SegmentedButtons` → `ButtonGroup variant="connected"`, `NavigationDrawer` → `NavigationRail expanded` / `AppScaffold`, spinner in button → `LoadingIndicator`).',
              '**5 Expressive Foundation Systems**: Enforces 2025 HCT dynamic color & `surface-container-*` hierarchy (zero hardcoded hex), dual-spring physics (`spatial` vs. `effects` springs), 15 emphasized typescale styles, the 35-shape library with polygon morphing, and 8dp spacing tokens.',
              '**7 Expressive Design Tactics & Hero Moments**: Guides page composition with shape tension, focal color contrast, editorial typography, adaptive canonical layouts (`ListDetailLayout`, `SupportingPaneLayout`, `FeedLayout`), and 1–2 Hero Moments per user flow.',
            ]}
          />
        </Section>

        <Section
          title="Add the styles and the theme"
          description={
            framework === 'vue'
              ? 'Import styles at your app entry point, and use useTheme() to manage dynamic color and motion scheme.'
              : framework === 'html'
                ? 'Link the stylesheet in your HTML head.'
                : 'Import the two style sheets once, at the root of the app. ThemeProvider makes the color scheme from one seed color and writes it as CSS custom properties.'
          }
        >
          <CodeBlock code={setupCode} caption={setupCaption} />
          {framework === 'react' && (
            <Steps
              items={[
                '`useTheme()` changes the seed color, scheme variant, contrast, light, dark or system mode, and the motion scheme (Expressive or Standard) at run time. The choice persists in `localStorage`.',
                '`ThemeScope` applies a different scheme to one part of the page, including its menus and dialogs.',
                'Put `SnackbarProvider` around the app when you use `useSnackbar()`.',
              ]}
            />
          )}
          {framework === 'vue' && (
            <Steps
              items={[
                '`useTheme()` provides reactive methods (`setSeed`, `setVariant`, `setDark`, `setMotionScheme`) that update CSS custom properties dynamically.',
                '`v-ripple` directive can be placed on any interactive element to add state layer and press animations.',
              ]}
            />
          )}
        </Section>

        {framework === 'react' && (
          <>
            <Section
              title="Links through your router"
              description="Components that take an `href` (buttons, chips, lists, cards, navigation) render links. LinkProvider makes them use the link component of your router."
            >
              <CodeBlock code={ROUTER} caption="main.tsx" />
            </Section>

            <Section
              title="No flash of the default colors"
              description="The stored theme is applied by JavaScript. To apply it before the first paint, put the output of `themeInitScript()` in an inline script in the document head."
            >
              <CodeBlock code={VITE} caption="Vite" />
              <CodeBlock code={NEXT} caption="Next.js" />
            </Section>

            <Section
              title="Vite build warnings"
              description="Components use `'use client'` directives so React Server Components frameworks recognize them. If your Vite build reports `MODULE_LEVEL_DIRECTIVE` warnings, you can suppress them in the build config."
            >
              <CodeBlock code={VITE_WARNINGS} caption="vite.config.ts" />
            </Section>

            <Section
              title="Regional formats and localized text"
              description="M3LocaleProvider configures date and time formats and localizes built-in component text."
            >
              <CodeBlock code={LOCALE} caption="App.tsx" />
            </Section>
          </>
        )}
      </div>
    </Page>
  )
}
