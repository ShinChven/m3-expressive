import { Page, Section } from '../demo'
import { CodeBlock } from '../kit/CodeBlock'
import { useFramework } from '../kit/framework'
import { RichText } from '../kit/RichText'

const INSTALL_REACT = 'npm install @m3-expressive/react'
const INSTALL_VUE = 'npm install @m3-expressive/vue @m3-expressive/styles'
const INSTALL_HTML = 'npm install @m3-expressive/styles'

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
