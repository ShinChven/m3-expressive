/**
 * Build-time API data for the docs site: reads the material-design-3-expressive-components sources and extracts every
 * interface (props with types and JSDoc) and every component's default prop values.
 * Exposed to the app as the virtual module `virtual:m3-api`, so props tables never drift
 * from the code.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'

export interface PropDoc {
  name: string
  type: string
  optional: boolean
  description: string
}

export interface InterfaceDoc {
  name: string
  extends: string[]
  props: PropDoc[]
}

export interface ApiData {
  interfaces: Record<string, InterfaceDoc>
  /** Type alias name → its definition, e.g. `ButtonVariant` → `'filled' | 'tonal' | …`. */
  aliases: Record<string, string>
  /** Component name → prop name → default value (source text). */
  defaults: Record<string, Record<string, string>>
}

/** Index of the bracket that closes the one at `open`. */
function matchBracket(text: string, open: number): number {
  const pairs: Record<string, string> = { '{': '}', '(': ')', '[': ']' }
  const closeOf = pairs[text[open]!]
  let depth = 0
  let quote: string | null = null
  for (let i = open; i < text.length; i++) {
    const c = text[i]!
    if (quote) {
      if (c === '\\') i++
      else if (c === quote) quote = null
      continue
    }
    // Comments may contain apostrophes or brackets: skip them whole.
    if (c === '/' && text[i + 1] === '/') {
      const end = text.indexOf('\n', i)
      i = end < 0 ? text.length : end
      continue
    }
    if (c === '/' && text[i + 1] === '*') {
      const end = text.indexOf('*/', i + 2)
      i = end < 0 ? text.length : end + 1
      continue
    }
    if (c === "'" || c === '"' || c === '`') quote = c
    else if (c === text[open]) depth++
    else if (c === closeOf && --depth === 0) return i
  }
  return text.length - 1
}

/** Net bracket depth of a fragment of type text (`=>` is not a closing angle bracket). */
function depthOf(text: string): number {
  let depth = 0
  for (let i = 0; i < text.length; i++) {
    const c = text[i]!
    if (c === '=' && text[i + 1] === '>') {
      i++
      continue
    }
    if ('({[<'.includes(c)) depth++
    else if (')}]>'.includes(c)) depth--
  }
  return depth
}

function cleanDoc(raw: string): string {
  return raw
    .split('\n')
    .map((line) =>
      line
        .replace(/^\s*\/?\*+\/?/, '')
        .replace(/\*\/\s*$/, '')
        .trim(),
    )
    .filter(Boolean)
    .join(' ')
}

const MEMBER = /^(?:readonly\s+)?(['"]?[\w$-]+['"]?)(\?)?:\s*(.*)$/

/** Parses the members of an interface body. */
export function parseMembers(body: string): PropDoc[] {
  const props: PropDoc[] = []
  let doc = ''
  let inDoc = false
  let current: PropDoc | null = null
  let depth = 0
  const flush = () => {
    if (current) {
      current.type = current.type
        .replace(/\s+/g, ' ')
        .replace(/[;,]\s*$/, '')
        .trim()
      props.push(current)
    }
    current = null
  }
  for (const line of body.split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('//')) continue
    if (inDoc) {
      doc += `\n${t}`
      if (t.includes('*/')) inDoc = false
      continue
    }
    if (depth <= 0 && t.startsWith('/**')) {
      flush()
      doc = t
      inDoc = !t.includes('*/')
      continue
    }
    if (depth <= 0 && t.startsWith('[')) {
      // Index signature: not a named prop, but it ends the previous member.
      flush()
      current = { name: '[index]', optional: true, type: t, description: '' }
      doc = ''
      depth = depthOf(t)
      continue
    }
    const m = depth <= 0 ? MEMBER.exec(t) : null
    if (m) {
      flush()
      current = {
        name: m[1]!.replace(/['"]/g, ''),
        optional: !!m[2],
        type: m[3]!,
        description: cleanDoc(doc),
      }
      doc = ''
      depth = depthOf(m[3]!)
      continue
    }
    if (current) {
      ;(current as PropDoc).type += ` ${t}`
      depth += depthOf(t)
    }
  }
  flush()
  return props.filter((p) => !p.name.startsWith('['))
}

const INTERFACE = /(?:export\s+)?interface\s+(\w+)(?:<[^>{]*>)?(?:\s+extends\s+([^{]+?))?\s*\{/g

/** Extracts every interface declared in a source file. */
export function parseInterfaces(source: string): InterfaceDoc[] {
  const out: InterfaceDoc[] = []
  for (const m of source.matchAll(INTERFACE)) {
    const open = m.index! + m[0].length - 1
    const close = matchBracket(source, open)
    out.push({
      name: m[1]!,
      extends: m[2]
        ? splitTopLevel(m[2])
            .map((s) => s.trim())
            .filter(Boolean)
        : [],
      props: parseMembers(source.slice(open + 1, close)),
    })
  }
  return out
}

/** Splits on commas that are not nested inside brackets. */
function splitTopLevel(text: string): string[] {
  const parts: string[] = []
  let depth = 0
  let start = 0
  for (let i = 0; i < text.length; i++) {
    const c = text[i]!
    if (c === '=' && text[i + 1] === '>') {
      i++
      continue
    }
    if ('({[<'.includes(c)) depth++
    else if (')}]>'.includes(c)) depth--
    else if (c === ',' && depth === 0) {
      parts.push(text.slice(start, i))
      start = i + 1
    }
  }
  parts.push(text.slice(start))
  return parts
}

const ALIAS = /(?:export\s+)?type\s+(\w+)(?:<[^=]*>)?\s*=\s*/g

/** Extracts `type X = …` aliases (up to the end of the statement). */
export function parseAliases(source: string): Record<string, string> {
  const out: Record<string, string> = {}
  for (const m of source.matchAll(ALIAS)) {
    const start = m.index! + m[0].length
    const lines = source.slice(start).split('\n')
    let text = lines[0]!
    let depth = depthOf(text)
    for (let i = 1; i < lines.length; i++) {
      const t = lines[i]!.trim()
      if (depth <= 0 && !/^[|&]/.test(t)) break
      text += ` ${t}`
      depth += depthOf(t)
    }
    out[m[1]!] = text
      .replace(/\s+/g, ' ')
      .replace(/^\|\s*/, '')
      .trim()
  }
  return out
}

function defaultsFromPattern(pattern: string): Record<string, string> {
  const out: Record<string, string> = {}
  for (const entry of splitTopLevel(pattern)) {
    const m = /^\s*([\w$]+)\s*=\s*([\s\S]+?)\s*$/.exec(entry)
    if (m) out[m[1]!] = m[2]!.replace(/\s+/g, ' ')
  }
  return out
}

const FUNCTION = /(?:export\s+)?function\s+([A-Z]\w*)\s*(?:<[^(]*>)?\(/g

/** Default prop values of each component, from its parameter destructuring. */
export function parseDefaults(source: string): Record<string, Record<string, string>> {
  const out: Record<string, Record<string, string>> = {}
  for (const m of source.matchAll(FUNCTION)) {
    const paren = m.index! + m[0].length - 1
    const end = matchBracket(source, paren)
    const params = source.slice(paren + 1, end).trim()
    let defaults: Record<string, string> = {}
    if (params.startsWith('{')) {
      const brace = source.indexOf('{', paren)
      defaults = defaultsFromPattern(source.slice(brace + 1, matchBracket(source, brace)))
    } else if (/^props\b/.test(params)) {
      // `function X(props) { const { a = 1, ... } = props }`
      const bodyStart = source.indexOf('{', end)
      const body = source.slice(bodyStart, matchBracket(source, bodyStart))
      const destructure = /const\s*\{([\s\S]*?)\}\s*=\s*props\b/.exec(body)
      if (destructure) defaults = defaultsFromPattern(destructure[1]!)
    }
    out[m[1]!] = { ...out[m[1]!], ...defaults }
  }
  return out
}

function listSources(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...listSources(path))
    else if (/\.tsx?$/.test(entry.name)) files.push(path)
  }
  return files
}

export function collectApi(srcDir: string): { data: ApiData; files: string[] } {
  const data: ApiData = { interfaces: {}, aliases: {}, defaults: {} }
  const files = listSources(srcDir)
  for (const file of files) {
    const source = readFileSync(file, 'utf8')
    for (const iface of parseInterfaces(source)) data.interfaces[iface.name] = iface
    Object.assign(data.aliases, parseAliases(source))
    for (const [name, defaults] of Object.entries(parseDefaults(source))) {
      data.defaults[name] = { ...data.defaults[name], ...defaults }
    }
  }
  return { data, files }
}

const VIRTUAL_ID = 'virtual:m3-api'
const RESOLVED_ID = `\0${VIRTUAL_ID}`

/** Vite plugin serving `virtual:m3-api` from the M3 sources (reloads when they change). */
export function m3Api(srcDir: string): Plugin {
  return {
    name: 'm3-api',
    resolveId: (id) => (id === VIRTUAL_ID ? RESOLVED_ID : undefined),
    load(id) {
      if (id !== RESOLVED_ID) return
      const { data, files } = collectApi(srcDir)
      for (const file of files) this.addWatchFile(file)
      return `export default ${JSON.stringify(data)}`
    },
  }
}
