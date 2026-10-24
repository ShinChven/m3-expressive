import { createThemeCss, type MotionScheme, type SchemeVariant } from '@m3-expressive/core'
import { onMounted, reactive, watch } from 'vue'

export interface ThemeConfig {
  seed: string
  variant: SchemeVariant
  dark: boolean
  contrast: number
  motionScheme: MotionScheme
}

const themeState = reactive<ThemeConfig>({
  seed: '#6750A4',
  variant: 'tonal-spot',
  dark: false,
  contrast: 0,
  motionScheme: 'expressive',
})

let styleElement: HTMLStyleElement | null = null

export function useTheme() {
  function applyTheme() {
    if (typeof document === 'undefined') return
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = 'm3-vue-theme'
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = createThemeCss({
      seed: themeState.seed,
      variant: themeState.variant,
      contrast: themeState.contrast,
    })

    document.documentElement.setAttribute('data-m3-theme', themeState.dark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-motion-scheme', themeState.motionScheme)
  }

  onMounted(() => {
    applyTheme()
  })

  watch(themeState, () => {
    applyTheme()
  })

  return {
    theme: themeState,
    setSeed: (seed: string) => {
      themeState.seed = seed
    },
    setVariant: (variant: SchemeVariant) => {
      themeState.variant = variant
    },
    setDark: (dark: boolean) => {
      themeState.dark = dark
    },
    setMotionScheme: (scheme: MotionScheme) => {
      themeState.motionScheme = scheme
    },
    applyTheme,
  }
}
