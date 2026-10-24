import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { render, waitFor } from '@testing-library/react'
import { createScheme } from 'material-design-3-expressive-components'
import { MemoryRouter } from 'react-router'
import { App, START } from '../src/App'
import { faviconSvg, markColors } from '../src/favicon'
import { DOCS } from '../src/kit/registry'

const DEFAULTS = { seed: '#006A6A', variant: 'tonal-spot', contrast: 0 } as const

describe('favicon', () => {
  it('keeps the static favicon in sync with the template', () => {
    const file = readFileSync(resolve(process.cwd(), 'docs/public/favicon.svg'), 'utf8')
    const expected = faviconSvg(markColors(DEFAULTS, false), markColors(DEFAULTS, true))
    expect(file).toBe(`${expected}\n`)
  })

  it('follows the theme seed at run time', async () => {
    localStorage.setItem('m3-theme:config', JSON.stringify({ seed: '#8B5000' }))
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )
    const primary = createScheme({ seed: '#8B5000', dark: false }).primary
    await waitFor(() => {
      const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
      expect(link?.href).toMatch(/^data:image\/svg\+xml,/)
      expect(decodeURIComponent(link!.href)).toContain(`fill="${primary}"`)
    })
  })
})

describe('navigation icons', () => {
  it('gives every page its own icon', () => {
    const icons = [...START.items.map((item) => item.icon), ...DOCS.map((doc) => doc.icon)]
    const repeated = icons.filter((icon, i) => icons.indexOf(icon) !== i)
    expect(repeated).toEqual([])
  })
})
