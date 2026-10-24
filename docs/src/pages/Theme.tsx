import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  type ColorRole,
  createTonalPalettes,
  FilterChip,
  PALETTE_TONES,
  ThemeBuilder,
  ThemeScope,
  useTheme,
} from 'material-design-3-expressive-components'
import { useMemo } from 'react'
import { Demo, Grid, Page, Section } from '../demo'

const ROLE_PAIRS: [ColorRole, ColorRole][] = [
  ['primary', 'on-primary'],
  ['primary-container', 'on-primary-container'],
  ['secondary', 'on-secondary'],
  ['secondary-container', 'on-secondary-container'],
  ['tertiary', 'on-tertiary'],
  ['tertiary-container', 'on-tertiary-container'],
  ['error', 'on-error'],
  ['error-container', 'on-error-container'],
  ['surface-dim', 'on-surface'],
  ['surface', 'on-surface'],
  ['surface-bright', 'on-surface'],
  ['surface-container-lowest', 'on-surface'],
  ['surface-container-low', 'on-surface'],
  ['surface-container', 'on-surface'],
  ['surface-container-high', 'on-surface'],
  ['surface-container-highest', 'on-surface'],
  ['inverse-surface', 'inverse-on-surface'],
  ['primary-fixed', 'on-primary-fixed'],
  ['secondary-fixed', 'on-secondary-fixed'],
  ['tertiary-fixed', 'on-tertiary-fixed'],
]

const TYPESCALE = [
  'display-large',
  'display-medium',
  'display-small',
  'headline-large',
  'headline-medium',
  'headline-small',
  'title-large',
  'title-medium',
  'title-small',
  'body-large',
  'body-medium',
  'body-small',
  'label-large',
  'label-medium',
  'label-small',
]

const SHAPES = [
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
  'extra-extra-large',
  'full',
]

export function ThemePage() {
  const theme = useTheme()
  const palettes = useMemo(
    () => createTonalPalettes({ seed: theme.seed, variant: theme.variant }),
    [theme.seed, theme.variant],
  )
  return (
    <Page
      title="Theme builder"
      description="Dynamic color from a single seed (Material Color Utilities), plus the typescale, shape, elevation and state tokens every component uses."
    >
      <Section
        title="Seed color and scheme"
        description="Changes apply to the whole site and are saved in this browser."
      >
        <ThemeBuilder />
      </Section>

      <Section
        title="Color roles"
        description="Each card shows a color role and, in code font, the role for text and icons on it. Every role exists as a --md-sys-color-* custom property."
      >
        <Grid min={170}>
          {ROLE_PAIRS.map(([bg, fg]) => (
            <div
              key={bg}
              className="g-role"
              style={{
                background: `var(--md-sys-color-${bg})`,
                color: `var(--md-sys-color-${fg})`,
                outline: bg.startsWith('surface')
                  ? '1px solid var(--md-sys-color-outline-variant)'
                  : undefined,
              }}
            >
              <span>{bg}</span>
              <code>{fg}</code>
            </div>
          ))}
        </Grid>
      </Section>

      <Section
        title="Tonal palettes"
        description="Tones 0–100 for each key color. Roles pick tones from these palettes."
      >
        <div className="g-stack">
          {Object.entries(palettes).map(([name, tones]) => (
            <div key={name}>
              <div className="m3-typescale-label-large" style={{ marginBottom: 4 }}>
                {name}
              </div>
              <div className="g-swatch-row">
                {PALETTE_TONES.map((tone) => (
                  <div
                    key={tone}
                    className="g-swatch"
                    title={`${name} ${tone}: ${tones[tone]}`}
                    style={{ background: tones[tone], color: tone > 50 ? '#000' : '#fff' }}
                  >
                    {tone}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Light and dark side by side"
        description="ThemeScope applies a scheme to a subtree, including its menus and dialogs."
      >
        <Grid min={320}>
          {(['light', 'dark'] as const).map((mode) => (
            <ThemeScope key={mode} mode={mode} style={{ borderRadius: 16, padding: 16 }}>
              <Card variant="elevated">
                <CardHeader
                  avatar={<Avatar name="Ada Lovelace" />}
                  title={`${mode === 'light' ? 'Light' : 'Dark'} scheme`}
                  subhead="Shared 2 min ago"
                />
                <CardContent>
                  <div className="g-row">
                    <FilterChip label="Photos" selected onSelectedChange={() => {}} />
                    <FilterChip label="Documents" selected={false} onSelectedChange={() => {}} />
                  </div>
                </CardContent>
                <div
                  className="g-row"
                  style={{ padding: '0 16px 16px', justifyContent: 'flex-end' }}
                >
                  <Button variant="text">Cancel</Button>
                  <Button>Share</Button>
                </div>
              </Card>
            </ThemeScope>
          ))}
        </Grid>
      </Section>

      <Section
        title="Typescale"
        description="15 roles from Roboto Flex; CJK text falls back to Noto Sans SC / PingFang SC."
      >
        <Demo column>
          {TYPESCALE.map((role) => (
            <div key={role} className="g-type-row">
              <code>{role}</code>
              <span className={`m3-typescale-${role}`}>Content in every shape</span>
            </div>
          ))}
        </Demo>
      </Section>

      <Section title="Shape" description="Corner radius tokens.">
        <Demo>
          {SHAPES.map((s) => (
            <div
              key={s}
              className="g-shape"
              style={{ borderRadius: `var(--md-sys-shape-corner-${s})` }}
            >
              {s}
            </div>
          ))}
        </Demo>
      </Section>

      <Section
        title="Elevation"
        description="Shadow levels 0–5. Tonal elevation uses the surface-container roles."
      >
        <Demo style={{ gap: 24 }}>
          {[0, 1, 2, 3, 4, 5].map((level) => (
            <div key={level} className={`g-elevation m3-elevation-${level}`}>
              Level {level}
            </div>
          ))}
        </Demo>
      </Section>
    </Page>
  )
}
