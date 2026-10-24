import { parseAliases, parseDefaults, parseInterfaces } from '../plugins/m3-api'

describe('m3 API extraction', () => {
  it('reads interface members with JSDoc, optionality and multi-line types', () => {
    const [iface] = parseInterfaces(`
interface FooProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, Bar {
  /** The size. */
  size?: 'sm' | 'md'
  /**
   * Called on change.
   * With the new value.
   */
  onChange: (value: { a: string }) => void
  options: {
    label: string
  }[]
  [data: \`data-\${string}\`]: string
}`)
    expect(iface!.name).toBe('FooProps')
    expect(iface!.extends).toEqual(["Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>", 'Bar'])
    expect(iface!.props).toEqual([
      { name: 'size', optional: true, type: "'sm' | 'md'", description: 'The size.' },
      {
        name: 'onChange',
        optional: false,
        type: '(value: { a: string }) => void',
        description: 'Called on change. With the new value.',
      },
      { name: 'options', optional: false, type: '{ label: string }[]', description: '' },
    ])
  })

  it('ignores apostrophes and brackets inside comments', () => {
    const [iface] = parseInterfaces(`
interface Props {
  /** The locale's format (see {@link Intl}). */
  format?: string
  // A line comment with an apostrophe: it's fine.
  size?: number
}`)
    expect(iface!.props.map((p) => p.name)).toEqual(['format', 'size'])
  })

  it('reads defaults from parameter and props destructuring', () => {
    expect(
      parseDefaults(`
export function Thing({ a = 'x', b, c = () => {}, ...rest }: Props) {}
export function Other<V extends string = string>(props: P<V>) {
  const { d = 0, e } = props
}`),
    ).toEqual({ Thing: { a: "'x'", c: '() => {}' }, Other: { d: '0' } })
  })

  it('reads multi-line union aliases', () => {
    expect(parseAliases("export type Size =\n  | 'sm'\n  | 'md'\nconst x = 1")).toEqual({
      Size: "'sm' | 'md'",
    })
  })
})
