import { type ComponentType, useEffect, useState } from 'react'
import { type DocMeta, GROUPS, type GroupKey } from './doc'
import { extractExamples } from './examples'

export interface Example {
  id: string
  title: string
  description: string
  code: string
  Component: ComponentType
}

// biome-ignore lint/suspicious/noExplicitAny: control types differ per page
export type AnyDoc = DocMeta<any>

export interface LoadedDoc extends AnyDoc {
  path: string
  /** Reads the page source (fetched on first use) and returns its examples with their code. */
  loadExamples: () => Promise<Example[]>
}

type DocModule = { doc: AnyDoc } & Record<string, unknown>

// Modules load with the app (previews and playgrounds need them); page sources, which are only
// needed to show example code, load on demand.
const modules = import.meta.glob<DocModule>('../docs/*.tsx', { eager: true })
const sources = import.meta.glob<string>('../docs/*.tsx', { query: '?raw', import: 'default' })

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function examplesOf(file: string, mod: DocModule, source: string): Example[] {
  return extractExamples(source).map((ex) => {
    const Component = mod[ex.exportName] as ComponentType | undefined
    if (typeof Component !== 'function')
      throw new Error(`${file}: ${ex.exportName} is not exported`)
    return {
      id: slugify(ex.title),
      title: ex.title,
      description: ex.description,
      code: ex.code,
      Component,
    }
  })
}

function load(): LoadedDoc[] {
  const docs: LoadedDoc[] = []
  for (const [file, mod] of Object.entries(modules)) {
    if (!mod.doc) throw new Error(`${file} must export \`doc\` (defineDoc)`)
    const loadSource = sources[file]
    if (!loadSource) throw new Error(`${file}: source not found`)
    let pending: Promise<Example[]> | undefined
    docs.push({
      ...mod.doc,
      path: `/components/${mod.doc.slug}`,
      loadExamples: () => {
        pending ??= loadSource().then((source) => examplesOf(file, mod, source))
        return pending
      },
    })
  }
  const groupIndex = (g: GroupKey) => GROUPS.findIndex((x) => x.key === g)
  return docs.sort(
    (a, b) =>
      groupIndex(a.group) - groupIndex(b.group) ||
      (a.order ?? 100) - (b.order ?? 100) ||
      a.name.localeCompare(b.name),
  )
}

export const DOCS: LoadedDoc[] = load()
export const DOC_BY_SLUG = new Map(DOCS.map((d) => [d.slug, d]))

export function docsInGroup(group: GroupKey): LoadedDoc[] {
  return DOCS.filter((d) => d.group === group)
}

/** The examples of a page; `null` while its source is loading. */
export function useExamples(doc: LoadedDoc): Example[] | null {
  const [examples, setExamples] = useState<Example[] | null>(null)
  useEffect(() => {
    let current = true
    setExamples(null)
    doc.loadExamples().then((list) => {
      if (current) setExamples(list)
    })
    return () => {
      current = false
    }
  }, [doc])
  return examples
}
