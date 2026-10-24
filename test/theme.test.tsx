import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  BASELINE_SEED,
  COLOR_ROLES,
  createScheme,
  createThemeCss,
  createTonalPalettes,
  isHexColor,
  ThemeBuilder,
  ThemeProvider,
  ThemeScope,
  themeInitScript,
  useTheme,
} from '../src'
import { migrateThemeConfig } from '../src/theme/ThemeProvider'

describe('color scheme', () => {
  it('generates every M3 color role as a hex color', () => {
    const scheme = createScheme({ seed: BASELINE_SEED, dark: false })
    for (const role of COLOR_ROLES) expect(scheme[role]).toMatch(/^#[0-9a-f]{6}$/)
    // 2025 (M3 Expressive) color spec values for the default seed.
    expect(scheme.primary).toBe('#655789')
    expect(scheme.surface).toBe('#fdf7fe')
  })

  it('produces different light and dark schemes', () => {
    const light = createScheme({ seed: '#006a6a', dark: false })
    const dark = createScheme({ seed: '#006a6a', dark: true })
    expect(light.surface).not.toBe(dark.surface)
    expect(light.primary).not.toBe(dark.primary)
  })

  it('accepts 3-digit hex and rejects invalid colors', () => {
    expect(isHexColor('#abc')).toBe(true)
    expect(isHexColor('abc123')).toBe(true)
    expect(isHexColor('#ab')).toBe(false)
    expect(() => createScheme({ seed: 'red', dark: false })).toThrow(/Invalid hex/)
  })

  it('raises contrast with the contrast level', () => {
    const normal = createScheme({ seed: BASELINE_SEED, dark: false, contrast: 0 })
    const high = createScheme({ seed: BASELINE_SEED, dark: false, contrast: 1 })
    expect(high.outline).not.toBe(normal.outline)
  })

  it('builds a stylesheet with light, dark, forced and high-contrast blocks', () => {
    const css = createThemeCss({ seed: BASELINE_SEED })
    expect(css).toContain(':root:root{')
    expect(css).toContain('@media (prefers-color-scheme: dark)')
    expect(css).toContain('[data-m3-theme="dark"]')
    expect(css).toContain('@media (prefers-contrast: more)')
  })

  it('creates tonal palettes from tone 0 to 100', () => {
    const palettes = createTonalPalettes({ seed: BASELINE_SEED })
    expect(palettes.primary[0]).toBe('#000000')
    expect(palettes.primary[100]).toBe('#ffffff')
    expect(Object.keys(palettes)).toEqual([
      'primary',
      'secondary',
      'tertiary',
      'neutral',
      'neutral-variant',
      'error',
    ])
  })
})

function ModeSwitch() {
  const theme = useTheme()
  return (
    <>
      <span data-testid="mode">{theme.resolvedMode}</span>
      <button type="button" onClick={() => theme.setMode('dark')}>
        dark
      </button>
      <button type="button" onClick={() => theme.setConfig({ seed: '#00668b' })}>
        seed
      </button>
    </>
  )
}

describe('ThemeProvider', () => {
  it('injects the theme stylesheet and applies a forced mode', async () => {
    render(
      <ThemeProvider>
        <ModeSwitch />
      </ThemeProvider>,
    )
    const style = document.getElementById('m3-theme')
    expect(style?.textContent).toContain('--md-sys-color-primary')
    expect(screen.getByTestId('mode')).toHaveTextContent('light')

    await userEvent.click(screen.getByText('dark'))
    expect(document.documentElement).toHaveAttribute('data-m3-theme', 'dark')
    expect(screen.getByTestId('mode')).toHaveTextContent('dark')
    expect(localStorage.getItem('m3-theme:mode')).toBe('"dark"')
  })

  it('regenerates and persists colors when the seed changes', async () => {
    render(
      <ThemeProvider>
        <ModeSwitch />
      </ThemeProvider>,
    )
    const before = document.getElementById('m3-theme')?.textContent
    await act(() => userEvent.click(screen.getByText('seed')))
    const after = document.getElementById('m3-theme')?.textContent
    expect(after).not.toBe(before)
    expect(localStorage.getItem('m3-theme:css')).toBe(after)
    expect(JSON.parse(localStorage.getItem('m3-theme:config') ?? '{}').seed).toBe('#00668b')
  })

  it('restores the stored mode before first paint with the init script', () => {
    localStorage.setItem('m3-theme:mode', '"dark"')
    // biome-ignore lint/security/noGlobalEval: executes the generated inline script under test
    eval(themeInitScript())
    expect(document.documentElement).toHaveAttribute('data-m3-theme', 'dark')
  })

  it('applies the motion scheme to the document and saves it', async () => {
    function MotionSwitch() {
      const theme = useTheme()
      return (
        <button type="button" onClick={() => theme.setConfig({ motionScheme: 'standard' })}>
          standard
        </button>
      )
    }
    render(
      <ThemeProvider>
        <MotionSwitch />
      </ThemeProvider>,
    )
    expect(document.documentElement).toHaveAttribute('data-motion-scheme', 'expressive')
    await userEvent.click(screen.getByText('standard'))
    expect(document.documentElement).toHaveAttribute('data-motion-scheme', 'standard')
    expect(JSON.parse(localStorage.getItem('m3-theme:config') ?? '{}').motionScheme).toBe(
      'standard',
    )
  })

  it('drops settings it no longer has from a saved configuration', () => {
    expect(
      migrateThemeConfig({ seed: '#00668b', spec: '2021', variant: 'vibrant', motionScheme: 'x' }),
    ).toEqual({ seed: '#00668b', variant: 'vibrant' })
    localStorage.setItem('m3-theme:config', JSON.stringify({ seed: '#00668b', spec: '2021' }))
    function Spec() {
      const theme = useTheme()
      return <span data-testid="config">{JSON.stringify(theme)}</span>
    }
    render(
      <ThemeProvider>
        <Spec />
      </ThemeProvider>,
    )
    const config = JSON.parse(screen.getByTestId('config').textContent ?? '{}')
    expect(config.seed).toBe('#00668b')
    expect(config).not.toHaveProperty('spec')
  })

  it('restores the stored motion scheme with the init script', () => {
    localStorage.setItem('m3-theme:config', JSON.stringify({ motionScheme: 'standard' }))
    // biome-ignore lint/security/noGlobalEval: executes the generated inline script under test
    eval(themeInitScript())
    expect(document.documentElement).toHaveAttribute('data-motion-scheme', 'standard')
  })

  it('scopes a different scheme to a subtree', () => {
    render(
      <ThemeScope seed="#b3261e" mode="dark" data-testid="scope">
        x
      </ThemeScope>,
    )
    const scope = screen.getByTestId('scope')
    expect(scope.style.getPropertyValue('--md-sys-color-primary')).toMatch(/^#/)
    expect(scope.style.colorScheme).toBe('dark')
  })

  it('scopes a motion scheme to a subtree', () => {
    render(
      <ThemeScope motionScheme="standard" data-testid="scope">
        x
      </ThemeScope>,
    )
    expect(screen.getByTestId('scope')).toHaveAttribute('data-motion-scheme', 'standard')
  })
})

describe('ThemeBuilder', () => {
  it('renders all default controls inside ThemeProvider and updates theme on interaction', async () => {
    render(
      <ThemeProvider>
        <ThemeBuilder />
      </ThemeProvider>,
    )

    // Check seed color presets exist
    const tealSwatch = screen.getByRole('button', { name: '#006A6A' })
    expect(tealSwatch).toBeInTheDocument()

    // Click teal preset
    await userEvent.click(tealSwatch)
    expect(tealSwatch).toHaveAttribute('aria-pressed', 'true')

    // Click Dark mode
    const darkButton = screen.getByRole('radio', { name: 'Dark' })
    await userEvent.click(darkButton)
    expect(document.documentElement).toHaveAttribute('data-m3-theme', 'dark')

    // Click Reset
    const resetButton = screen.getByRole('button', { name: 'Reset to default' })
    await userEvent.click(resetButton)
    expect(tealSwatch).toHaveAttribute('aria-pressed', 'false')
  })

  it('works in controlled mode with custom value and onChange', async () => {
    const onChange = vi.fn()
    const onReset = vi.fn()

    render(
      <ThemeBuilder
        value={{ seed: '#00668B', mode: 'light' }}
        onChange={onChange}
        onReset={onReset}
      />,
    )

    const darkButton = screen.getByRole('radio', { name: 'Dark' })
    await userEvent.click(darkButton)
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ mode: 'dark' }))

    const resetButton = screen.getByRole('button', { name: 'Reset to default' })
    await userEvent.click(resetButton)
    expect(onReset).toHaveBeenCalledTimes(1)
  })

  it('respects visibility flags to hide specific controls', () => {
    render(<ThemeBuilder showSeed={false} showContrast={false} showReset={false} />)

    expect(screen.queryByText('Seed color')).not.toBeInTheDocument()
    expect(screen.queryByText(/Contrast/)).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Reset to default' })).not.toBeInTheDocument()
    expect(screen.getByText('Scheme variant')).toBeInTheDocument()
    expect(screen.getByText('Mode')).toBeInTheDocument()
    expect(screen.getByRole('radiogroup', { name: 'Motion scheme' })).toBeInTheDocument()
  })
})
