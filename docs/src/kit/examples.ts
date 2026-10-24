export interface ExampleSource {
  /** Export name, e.g. `ExampleVariants`. */
  exportName: string
  title: string
  description: string
  /** The example function as shown to readers (without `export`, renamed to the title). */
  code: string
}

const EXAMPLE = /\/\*\*([\s\S]*?)\*\/\s*export function (Example\w*)\s*\(/g

function commentLines(comment: string): string[] {
  return comment
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)
}

/**
 * Finds the examples in a doc module's source: every `export function Example…` preceded by a
 * doc comment whose first line is the title and the rest the description. An example's code
 * runs until the next example's comment, so helpers placed after it are shown with it.
 */
export function extractExamples(source: string): ExampleSource[] {
  const matches = [...source.matchAll(EXAMPLE)]
  return matches.map((m, i) => {
    const [title = m[2]!, ...rest] = commentLines(m[1]!)
    const start = m.index! + m[0].indexOf('export function')
    const end = i + 1 < matches.length ? matches[i + 1]!.index! : source.length
    const code = source
      .slice(start, end)
      .trim()
      .replace(
        /^export function Example(\w*)/,
        (_, name: string) => `function ${name || 'Example'}`,
      )
    return { exportName: m[2]!, title, description: rest.join(' '), code }
  })
}
