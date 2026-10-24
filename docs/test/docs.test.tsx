import api from 'virtual:m3-api'
import * as m3 from '@m3-expressive/react'
import { type LinkComponentProps, LinkProvider, SnackbarProvider } from '@m3-expressive/react'
import { render } from '@testing-library/react'
import type { ReactNode } from 'react'
import { MemoryRouter } from 'react-router'
import { GROUPS, jsx, makeHelpers, raw } from '../src/kit/doc'
import { extractExamples } from '../src/kit/examples'
import { Playground } from '../src/kit/Playground'
import { DOCS } from '../src/kit/registry'

const SOURCES = import.meta.glob<string>('../src/docs/*.tsx', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function Plain({ href, ...rest }: LinkComponentProps) {
  return <a {...rest} href={href} />
}

function wrap(node: ReactNode) {
  return render(
    <MemoryRouter>
      <LinkProvider component={Plain}>
        <SnackbarProvider>{node}</SnackbarProvider>
      </LinkProvider>
    </MemoryRouter>,
  )
}

describe('component pages', () => {
  it('have unique slugs and valid groups', () => {
    const slugs = DOCS.map((d) => d.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const doc of DOCS) expect(GROUPS.map((g) => g.key)).toContain(doc.group)
  })

  describe.each(DOCS.map((d) => [d.slug, d] as const))('%s', (_slug, doc) => {
    it('documents interfaces that exist in @m3-expressive/react', () => {
      expect(doc.api.length).toBeGreaterThan(0)
      for (const entry of doc.api) {
        for (const name of entry.interfaces)
          expect(api.interfaces, `${entry.name}: ${name}`).toHaveProperty(name)
      }
    })

    it('imports only names exported by @m3-expressive/react', () => {
      for (const name of doc.imports) expect(m3, name).toHaveProperty(name)
    })

    it('shows every library name its examples use in the import line', () => {
      // The page header prints `imports` as the line readers copy, so it must cover the source.
      const source = SOURCES[`../src/docs/${doc.slug}.tsx`] ?? ''
      const statement = source.match(/import\s*\{([^}]*)\}\s*from\s*'@m3-expressive\/react'/)
      const used = (statement?.[1] ?? '')
        .split(',')
        .map((name) => name.trim())
        .filter((name) => name && !name.startsWith('type '))
      for (const name of used) expect(doc.imports, name).toContain(name)
    })

    it('has examples with titles and code', async () => {
      const examples = await doc.loadExamples()
      expect(examples.length).toBeGreaterThan(0)
      for (const ex of examples) {
        expect(ex.title).not.toMatch(/^Example/)
        expect(ex.code).toMatch(/^function /)
      }
    })

    it('renders its preview, playground and examples', async () => {
      const Preview = doc.preview
      wrap(<Preview />)
      if (doc.playground) wrap(<Playground playground={doc.playground} />)
      for (const ex of await doc.loadExamples()) wrap(<ex.Component />)
    })
  })
})

describe('code generation', () => {
  it('omits empty props and formats values', () => {
    expect(
      jsx('Button', { variant: 'tonal', disabled: true, icon: '', loading: false }, 'Save'),
    ).toBe('<Button variant="tonal" disabled>Save</Button>')
    expect(jsx('Slider', { value: 4, onChange: raw('setValue') })).toBe(
      '<Slider value={4} onChange={setValue} />',
    )
    expect(jsx('TextField', { label: 'Say "hi"' })).toBe('<TextField label={"Say \\"hi\\""} />')
  })

  it('breaks long elements onto several lines', () => {
    const code = jsx(
      'Dialog',
      { headline: 'A rather long headline for a dialog', supportingText: 'More text here' },
      'Body',
    )
    expect(code).toBe(
      '<Dialog\n  headline="A rather long headline for a dialog"\n  supportingText="More text here"\n>\n  Body\n</Dialog>',
    )
  })

  it('keeps only changed values', () => {
    const helpers = makeHelpers({
      variant: { type: 'select', options: ['a', 'b'], default: 'a' },
      on: { type: 'boolean', default: true },
    } as const)
    expect(helpers.changed({ variant: 'a', on: true }, ['variant', 'on'])).toEqual({})
    expect(helpers.changed({ variant: 'b', on: false }, ['variant', 'on'])).toEqual({
      variant: 'b',
      on: raw('false'),
    })
  })
})

describe('example extraction', () => {
  it('reads titles, descriptions and code from doc comments', () => {
    const source = [
      'export const doc = {}',
      '',
      '/**',
      ' * Basic use',
      ' * Shows the default look.',
      ' */',
      'export function ExampleBasic() {',
      '  return <Button>Save</Button>',
      '}',
      '',
      '/** Second */',
      'export function ExampleSecond() {',
      '  return null',
      '}',
      '',
    ].join('\n')
    expect(extractExamples(source)).toEqual([
      {
        exportName: 'ExampleBasic',
        title: 'Basic use',
        description: 'Shows the default look.',
        code: 'function Basic() {\n  return <Button>Save</Button>\n}',
      },
      {
        exportName: 'ExampleSecond',
        title: 'Second',
        description: '',
        code: 'function Second() {\n  return null\n}',
      },
    ])
  })
})
