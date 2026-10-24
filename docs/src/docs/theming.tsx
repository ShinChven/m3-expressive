import {
  BASELINE_SEED,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  type ColorRole,
  createScheme,
  createThemeCss,
  Fab,
  isHexColor,
  MenuButton,
  MenuDivider,
  MenuItem,
  SCHEME_VARIANTS,
  Switch,
  Text,
  ThemeBuilder,
  type ThemeConfig,
  type ThemeMode,
  ThemeScope,
  themeInitScript,
  useTheme,
} from 'material-design-3-expressive-components'
import { useMemo, useState } from 'react'
import { defineDoc } from '../kit/doc'
import './theming.css'

// The sample shown in the playground, and its source for the generated code.
function ThemeSample() {
  return (
    <>
      <Card variant="filled">
        <CardHeader title="Weekend in Lisbon" subhead="Flight leaves Friday at 08:40" />
        <CardContent>Your hotel and both flights are booked.</CardContent>
        <CardActions>
          <Button variant="text">Details</Button>
          <Button icon="flight">Check in</Button>
        </CardActions>
      </Card>
      <div className="g-row">
        <Switch label="Flight alerts" defaultChecked />
        <Fab icon="add" aria-label="New trip" />
      </div>
    </>
  )
}

const SAMPLE_CODE = `<Card variant="filled">
  <CardHeader title="Weekend in Lisbon" subhead="Flight leaves Friday at 08:40" />
  <CardContent>Your hotel and both flights are booked.</CardContent>
  <CardActions>
    <Button variant="text">Details</Button>
    <Button icon="flight">Check in</Button>
  </CardActions>
</Card>
<div className="g-row">
  <Switch label="Flight alerts" defaultChecked />
  <Fab icon="add" aria-label="New trip" />
</div>`

export const doc = defineDoc({
  slug: 'theming',
  name: 'Theming',
  group: 'foundations',
  icon: 'format_paint',
  order: 4,
  summary:
    '`ThemeProvider` builds the M3 Expressive color scheme (2025 color spec) from one seed color and applies it, with the motion scheme, to the whole app. `ThemeScope` gives one part of the page its own scheme, and `useTheme` reads and changes the app theme.',
  imports: [
    'ThemeProvider',
    'ThemeBuilder',
    'ThemeScope',
    'useTheme',
    'createScheme',
    'createThemeCss',
    'themeInitScript',
    'isHexColor',
    'Card',
    'CardHeader',
    'CardContent',
    'CardActions',
    'Button',
    'Switch',
    'Fab',
    'Text',
    'MenuButton',
    'MenuItem',
    'MenuDivider',
    'ButtonGroup',
    'BASELINE_SEED',
    'SCHEME_VARIANTS',
  ],
  preview: () => (
    <div className="g-preview-row">
      {['#6750A4', '#00668B', '#8B5000'].map((seed) => (
        <ThemeScope key={seed} seed={seed} className="theming-doc-swatch">
          <span />
          <span />
          <span />
        </ThemeScope>
      ))}
    </div>
  ),
  playground: {
    controls: {
      seed: { type: 'text', default: '#00668B', label: 'Seed color' },
      variant: { type: 'select', options: SCHEME_VARIANTS, default: 'tonal-spot' },
      contrast: { type: 'number', default: 0, min: -1, max: 1, step: 0.5 },
      mode: { type: 'select', options: ['inherit', 'light', 'dark'], default: 'inherit' },
      motionScheme: {
        type: 'select',
        options: ['inherit', 'expressive', 'standard'],
        default: 'inherit',
        label: 'Motion scheme',
      },
    },
    render: (v) => (
      <ThemeScope
        seed={isHexColor(v.seed) ? v.seed : BASELINE_SEED}
        variant={v.variant}
        contrast={v.contrast}
        mode={v.mode === 'inherit' ? undefined : v.mode}
        motionScheme={v.motionScheme === 'inherit' ? undefined : v.motionScheme}
        className="theming-doc-sample"
      >
        <ThemeSample />
      </ThemeScope>
    ),
    code: (v, { jsx, changed }) =>
      jsx(
        'ThemeScope',
        {
          seed: isHexColor(v.seed) ? v.seed : BASELINE_SEED,
          ...changed(v, ['variant', 'contrast']),
          mode: v.mode === 'inherit' ? undefined : v.mode,
          motionScheme: v.motionScheme === 'inherit' ? undefined : v.motionScheme,
        },
        SAMPLE_CODE,
      ),
  },
  api: [
    {
      name: 'ThemeProvider',
      interfaces: ['ThemeProviderProps'],
      inherits:
        'Wrap the app once. The provider writes the scheme to a `<style>` element in the document head, the forced mode to the `data-m3-theme` attribute of `<html>` and the motion scheme to `data-motion-scheme`, and saves them in `localStorage`.',
    },
    {
      name: 'ThemeBuilder',
      interfaces: ['ThemeBuilderProps'],
      inherits:
        'Self-contained widget for configuring theme settings (seed color swatches, custom picker, hex field, variant, brightness mode, motion scheme, contrast, and reset). Automatically connects to `ThemeProvider` or can run in controlled mode.',
    },
    {
      name: 'ThemeConfig',
      interfaces: ['ThemeConfig'],
      inherits:
        'Used by `defaultConfig`, `setConfig` and `useTheme`. A saved configuration with settings this package no longer has (such as the `spec` of the old color spec switch) keeps its other settings.',
    },
    {
      name: 'useTheme',
      interfaces: [],
      inherits:
        '`useTheme(): ThemeContextValue`. Reads and changes the app theme. Throws when there is no `ThemeProvider` above.',
    },
    {
      name: 'ThemeContextValue',
      interfaces: ['ThemeContextValue'],
      inherits: 'Also has every `ThemeConfig` field.',
    },
    {
      name: 'ThemeScope',
      interfaces: [],
      inherits:
        'Props: `seed` (hex color), `variant`, `contrast` (-1 to 1), `mode` (`light` or `dark`) and `motionScheme`. Each one defaults to the value of the surrounding `ThemeProvider`. Also accepts native `<div>` attributes. Menus, dialogs and other portals opened inside the scope render inside it, so they use its colors.',
    },
    {
      name: 'createScheme',
      interfaces: [],
      inherits:
        '`createScheme(options: SchemeOptions): ColorScheme`. Returns a hex color for every color role. Throws when `seed` is not a hex color: check it with `isHexColor` first.',
    },
    { name: 'SchemeOptions', interfaces: ['SchemeOptions'] },
    {
      name: 'createThemeCss',
      interfaces: [],
      inherits:
        '`createThemeCss(options: ThemeCssOptions): string`. Returns a stylesheet with the light scheme, the dark scheme for `prefers-color-scheme: dark`, the forced modes, and with `contrast: "auto"` a high-contrast version.',
    },
    {
      name: 'ThemeCssOptions',
      interfaces: ['ThemeCssOptions'],
      inherits: 'Also takes `seed` and `variant` as in `SchemeOptions`.',
    },
    {
      name: 'themeInitScript',
      interfaces: [],
      inherits:
        '`themeInitScript(storageKey = "m3-theme"): string`. Returns the source of an inline script for the HTML head. It applies the saved mode and scheme before the first paint. Use the same `storageKey` as `ThemeProvider`.',
    },
  ],
  guidelines: [
    'Wrap the app once in `ThemeProvider`, and put `themeInitScript()` in a script element in the HTML head, so a saved theme shows from the first paint.',
    'Use color roles (`var(--md-sys-color-primary)` and the others) in your own styles instead of hex values, so they follow the theme, the mode and the contrast level.',
    'Use `ThemeScope` for a part of the page that needs its own colors, such as one calendar in a calendar app.',
    'Keep `contrast` at `auto` in the app, so people who ask their system for more contrast get it. Try every option in the theme builder at `/theme`.',
  ],
})

/**
 * Calendar colors
 * A calendar app can show each calendar in its own colors. Every `ThemeScope` builds a scheme from its seed.
 */
export function ExampleCalendars() {
  return (
    <div className="theming-doc-grid">
      {CALENDARS.map((calendar) => (
        <ThemeScope key={calendar.name} seed={calendar.seed} className="theming-doc-sample">
          <Text variant="title-large" as="span">
            {calendar.name}
          </Text>
          <Text color="on-surface-variant">{calendar.next}</Text>
          <div className="g-row">
            <Button icon="add">New event</Button>
            <Button variant="tonal">Open</Button>
          </div>
        </ThemeScope>
      ))}
    </div>
  )
}

const CALENDARS = [
  { name: 'Work', seed: '#00668B', next: 'Next: team sync at 10:00.' },
  { name: 'Family', seed: '#8B5000', next: 'Next: dinner with Grace at 19:00.' },
  { name: 'Sports', seed: '#3B6939', next: 'Next: football on Saturday.' },
]

/**
 * Light and dark side by side
 * `mode` fixes the brightness of a scope. Use it to check a block in both modes at once.
 */
export function ExampleModes() {
  return (
    <div className="theming-doc-grid">
      {(['light', 'dark'] as const).map((mode) => (
        <ThemeScope key={mode} mode={mode} seed="#7D5260" className="theming-doc-sample">
          <Card variant="outlined">
            <CardHeader title="Weekly summary" subhead={`${mode} mode`} />
            <CardContent>Get a list of your open tasks every Friday.</CardContent>
            <CardActions>
              <Button icon="mail">Subscribe</Button>
            </CardActions>
          </Card>
        </ThemeScope>
      ))}
    </div>
  )
}

/**
 * Appearance menu
 * `useTheme` reads and changes the app theme. These choices change this whole site and are saved in this browser.
 */
export function ExampleAppearance() {
  return (
    <>
      <MenuButton
        aria-label="Appearance"
        trigger={(props) => (
          <Button {...props} variant="tonal" icon="contrast">
            Appearance
          </Button>
        )}
      >
        <AppearanceItems />
      </MenuButton>
      <Button href="/theme" variant="text" icon="palette">
        Theme builder
      </Button>
    </>
  )
}

const MODES: { value: ThemeMode; label: string; icon: string }[] = [
  { value: 'system', label: 'System', icon: 'computer' },
  { value: 'light', label: 'Light', icon: 'light_mode' },
  { value: 'dark', label: 'Dark', icon: 'dark_mode' },
]

// useTheme() needs a ThemeProvider above it. The menu renders its items only while it is open.
function AppearanceItems() {
  const theme = useTheme()
  return (
    <>
      {MODES.map((mode) => (
        <MenuItem
          key={mode.value}
          type="radio"
          icon={mode.icon}
          checked={theme.mode === mode.value}
          onSelect={() => theme.setMode(mode.value)}
        >
          {mode.label}
        </MenuItem>
      ))}
      <MenuDivider />
      <MenuItem
        type="checkbox"
        icon="animation"
        checked={theme.motionScheme === 'expressive'}
        onSelect={() =>
          theme.setConfig({
            motionScheme: theme.motionScheme === 'expressive' ? 'standard' : 'expressive',
          })
        }
      >
        Expressive motion
      </MenuItem>
    </>
  )
}

/**
 * Color roles
 * `createScheme` returns the hex value of every color role for one seed and brightness. Use it where CSS variables do not reach, such as a chart library or an HTML email.
 */
export function ExampleRoles() {
  const [brightness, setBrightness] = useState<'light' | 'dark'>('light')
  const scheme = useMemo(
    () => createScheme({ seed: '#00668B', dark: brightness === 'dark' }),
    [brightness],
  )
  return (
    <div className="theming-doc-column">
      <ButtonGroup
        variant="connected"
        selection="single"
        aria-label="Brightness"
        value={brightness}
        onChange={(next) => next && setBrightness(next as 'light' | 'dark')}
      >
        <Button variant="tonal" value="light">
          Light
        </Button>
        <Button variant="tonal" value="dark">
          Dark
        </Button>
      </ButtonGroup>
      <div className="theming-doc-roles">
        {ROLES.map(([role, on]) => (
          <div
            key={role}
            className="theming-doc-role"
            style={{ background: scheme[role], color: scheme[on] }}
          >
            <span>{role}</span>
            <code>{scheme[role]}</code>
          </div>
        ))}
      </div>
    </div>
  )
}

const ROLES: [ColorRole, ColorRole][] = [
  ['primary', 'on-primary'],
  ['primary-container', 'on-primary-container'],
  ['secondary', 'on-secondary'],
  ['secondary-container', 'on-secondary-container'],
  ['tertiary', 'on-tertiary'],
  ['tertiary-container', 'on-tertiary-container'],
  ['error', 'on-error'],
  ['surface', 'on-surface'],
  ['surface-container-high', 'on-surface'],
  ['inverse-surface', 'inverse-on-surface'],
]

/**
 * Server rendering
 * `createThemeCss` returns the full stylesheet for a seed, for server rendering or a static export. `themeInitScript` returns the script for the HTML head that applies the saved theme before the first paint.
 */
export function ExampleServer() {
  const css = useMemo(() => createThemeCss({ seed: '#00668B' }), [])
  const script = themeInitScript()
  return (
    <div className="theming-doc-column">
      <Text variant="title-small" as="span">
        createThemeCss: {css.length.toLocaleString()} characters
      </Text>
      <pre className="theming-doc-code">{css}</pre>
      <Text variant="title-small" as="span">
        themeInitScript: {script.length.toLocaleString()} characters
      </Text>
      <pre className="theming-doc-code">{script}</pre>
    </div>
  )
}

/**
 * Theme settings widget
 * `ThemeBuilder` is a ready-to-use widget that provides full user control over dynamic theme settings. It connects to `ThemeProvider` automatically or can be controlled via props.
 */
export function ExampleThemeBuilder() {
  const [theme, setTheme] = useState<Partial<ThemeConfig> & { mode?: ThemeMode }>({
    seed: '#006A6A',
    variant: 'tonal-spot',
    mode: 'light',
  })
  return (
    <ThemeBuilder
      variant="card"
      value={theme}
      onChange={(next) => setTheme((prev) => ({ ...prev, ...next }))}
      onReset={() =>
        setTheme({
          seed: '#006A6A',
          variant: 'tonal-spot',
          mode: 'light',
        })
      }
    />
  )
}
