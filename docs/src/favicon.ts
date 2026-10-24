import {
  AUTO_HIGH_CONTRAST,
  createScheme,
  shapePath,
  useMediaQuery,
  useTheme,
} from '@m3-expressive/react'
import { useEffect } from 'react'

/** Colors of the site mark: the shape and the "M3" inside it. */
export interface MarkColors {
  fill: string
  ink: string
}

/**
 * The site mark (a cookie-9 shape with "M3") as an SVG favicon. With `dark`, the SVG switches to
 * those colors when the browser is dark, so the static file also suits a dark tab strip.
 */
export function faviconSvg(light: MarkColors, dark?: MarkColors): string {
  const style = dark
    ? `<style>path{fill:${light.fill}}text{fill:${light.ink}}@media (prefers-color-scheme:dark){path{fill:${dark.fill}}text{fill:${dark.ink}}}</style>`
    : ''
  const fill = dark ? '' : ` fill="${light.fill}"`
  const ink = dark ? '' : ` fill="${light.ink}"`
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>Material 3 Expressive</title>${style}<path${fill} d="${shapePath('cookie-9', 64)}"/><text${ink} x="32" y="33" text-anchor="middle" dominant-baseline="central" font-family="'Roboto Flex',Roboto,system-ui,-apple-system,'Segoe UI',Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="-0.5">M3</text></svg>`
}

/** The mark's colors for a theme: primary and on-primary, as in the brand mark on the page. */
export function markColors(
  config: {
    seed: string
    variant: Parameters<typeof createScheme>[0]['variant']
    contrast: number
  },
  dark: boolean,
): MarkColors {
  const scheme = createScheme({ ...config, dark })
  return { fill: scheme.primary, ink: scheme['on-primary'] }
}

/**
 * Keeps the favicon in the theme's colors. The tab strip belongs to the browser, so the
 * brightness follows the system setting rather than a mode forced on the page.
 */
export function useThemedFavicon() {
  const { seed, variant, contrast } = useTheme()
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)')
  const moreContrast = useMediaQuery('(prefers-contrast: more)')
  useEffect(() => {
    const level = contrast === 'auto' ? (moreContrast ? AUTO_HIGH_CONTRAST : 0) : contrast
    let colors: MarkColors
    try {
      colors = markColors({ seed, variant, contrast: level }, systemDark)
    } catch {
      // An invalid seed keeps the static favicon.
      return
    }
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/svg+xml'
      document.head.appendChild(link)
    }
    link.href = `data:image/svg+xml,${encodeURIComponent(faviconSvg(colors))}`
  }, [seed, variant, contrast, systemDark, moreContrast])
}
