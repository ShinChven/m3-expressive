import { Page, Section } from '../demo'
import { CodeBlock } from '../kit/CodeBlock'
import { RichText } from '../kit/RichText'

const INSTALL = 'npm install material-design-3-expressive-components'

const SETUP = `import 'material-design-3-expressive-components/fonts.css' // Roboto Flex and Material Symbols, self-hosted
import 'material-design-3-expressive-components/styles.css' // tokens, colors and all component styles
import { Button, SnackbarProvider, ThemeProvider } from 'material-design-3-expressive-components'

export function App() {
  return (
    <ThemeProvider defaultConfig={{ seed: '#6750A4' }}>
      <SnackbarProvider>
        <Button icon="add">Create</Button>
      </SnackbarProvider>
    </ThemeProvider>
  )
}`

const ROUTER = `import { type LinkComponentProps, LinkProvider } from 'material-design-3-expressive-components'
import { Link } from 'react-router'

function RouterLink({ href, ref, ...rest }: LinkComponentProps) {
  return <Link {...rest} ref={ref} to={href} />
}

<LinkProvider component={RouterLink}>
  <App />
</LinkProvider>`

const VITE = `// vite.config.ts
import { themeInitScript } from 'material-design-3-expressive-components'

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
import { themeInitScript } from 'material-design-3-expressive-components'

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

const LOCALE = `import { M3LocaleProvider } from 'material-design-3-expressive-components'

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
  return (
    <Page
      title="Get started"
      description="Install the library, add its styles, and wrap the app in the theme provider."
    >
      <div className="g-start">
        <Section
          title="Install"
          description="React 19 and React DOM 19 are peer dependencies. The package includes its TypeScript types."
        >
          <CodeBlock code={INSTALL} caption="Terminal" />
        </Section>

        <Section
          title="Add the styles and the theme"
          description="Import the two style sheets once, at the root of the app. ThemeProvider makes the color scheme from one seed color and writes it as CSS custom properties."
        >
          <CodeBlock code={SETUP} caption="App.tsx" />
          <Steps
            items={[
              '`useTheme()` changes the seed color, scheme variant, contrast, light, dark or system mode, and the motion scheme (Expressive or Standard) at run time. The choice persists in `localStorage`.',
              '`ThemeScope` applies a different scheme to one part of the page, including its menus and dialogs.',
              'Put `SnackbarProvider` around the app when you use `useSnackbar()`.',
            ]}
          />
        </Section>

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
          title="Server rendering and React Server Components"
          description="Every component renders on the server. Modules that need the browser start with the `use client` directive, so you can import components directly into server components."
        >
          <Steps
            items={[
              '`themeInitScript()` and the color helpers (`createScheme`, `createTonalPalettes`) have no directive. You can call them on the server.',
              'Event handlers (for example `onClick`) can only come from client components. Put interactive parts in a client component of your own.',
              'When Vite bundles an app for the browser, it prints a `MODULE_LEVEL_DIRECTIVE` warning for each of these modules. The warning is harmless. To hide it, filter it out:',
            ]}
          />
          <CodeBlock code={VITE_WARNINGS} caption="vite.config.ts" />
        </Section>

        <Section
          title="Regional formats"
          description="The built-in text (close buttons, date and time pickers, pagination) is English. M3LocaleProvider sets the date and time formats, the first day of the week and the clock for a region, and `messages` replaces any built-in text."
        >
          <CodeBlock code={LOCALE} />
        </Section>

        <Section title="Bundle size and browsers">
          <Steps
            items={[
              'Each component is its own ES module, and only the style sheets have side effects. Bundlers keep only the components you import.',
              'The icon font (Material Symbols, variable) is about 4 MB. It loads once and stays cached. Leave out `fonts.css` and load the fonts yourself if you need a smaller set.',
              'The styles use current CSS such as `:has()`, `color-mix()` and `@starting-style`. Use a current version of Chrome, Edge, Firefox or Safari.',
            ]}
          />
        </Section>
      </div>
    </Page>
  )
}
