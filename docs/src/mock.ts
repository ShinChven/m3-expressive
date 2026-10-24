import type { TreeItem, TreeLoader, TreeMove } from '@m3-expressive/react'
import { seeded } from './demo'

// Demo data: the files and folders of a shared drive.

export type Status = 'shared' | 'private' | 'syncing' | 'archived'
export type FileKind = 'document' | 'spreadsheet' | 'image'

export interface FileRow {
  id: string
  /** File name with extension, e.g. "Harbor budget 12.xlsx". */
  name: string
  /** Folder path, e.g. "/projects/harbor". */
  folder: string
  kind: FileKind
  status: Status
  owner: string
  /** Size in kilobytes. */
  size: number
  /** Last change, `YYYY-MM-DD`. */
  modified: string
}

const WORDS = [
  'Harbor',
  'Atlas',
  'Summit',
  'Orbit',
  'Budget',
  'Roadmap',
  'Survey',
  'Plan',
  'Report',
  'Notes',
  'Pulse',
  'Field',
  'Studio',
  'Garden',
  'Beacon',
  'Delta',
]
const OWNERS = ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Katherine Johnson', 'Hedy Lamarr']
const STATUSES: Status[] = ['shared', 'shared', 'private', 'private', 'syncing', 'archived']
const EXTENSIONS: Record<FileKind, string> = {
  document: 'docx',
  spreadsheet: 'xlsx',
  image: 'png',
}

/** 1,000 deterministic files for the data table, list and search demos. */
export const FILES: FileRow[] = (() => {
  const rand = seeded(7)
  return Array.from({ length: 1000 }, (_, i) => {
    const first = Math.floor(rand() * WORDS.length)
    // A different second word, so no name repeats a word ("Roadmap roadmap").
    const second = (first + 1 + Math.floor(rand() * (WORDS.length - 1))) % WORDS.length
    const a = WORDS[first]!
    const b = WORDS[second]!
    const kind = (['document', 'spreadsheet', 'image'] as const)[Math.floor(rand() * 3)]!
    const day = 1 + Math.floor(rand() * 28)
    const month = 1 + Math.floor(rand() * 10)
    return {
      id: `f${i + 1}`,
      name: `${a} ${b.toLowerCase()} ${i + 1}.${EXTENSIONS[kind]}`,
      folder: `/projects/${a.toLowerCase()}`,
      kind,
      status: STATUSES[Math.floor(rand() * STATUSES.length)]!,
      owner: OWNERS[Math.floor(rand() * OWNERS.length)]!,
      size: 4 + Math.floor(rand() * 20000),
      modified: `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
    }
  })
})()

export interface KeysetQuery {
  search: string
  sort: { key: keyof FileRow; direction: 'asc' | 'desc' } | null
  pageSize: number
  /** Opaque cursor: index of the first row of the page in the sorted, filtered list. */
  cursor: number
}

/** Simulates a keyset-paginated API (with latency). */
export async function fetchFiles(q: KeysetQuery): Promise<{ rows: FileRow[]; total: number }> {
  await new Promise((r) => setTimeout(r, 250))
  const term = q.search.trim().toLowerCase()
  let list = term
    ? FILES.filter((f) => f.name.toLowerCase().includes(term) || f.folder.includes(term))
    : FILES
  if (q.sort) {
    const { key, direction } = q.sort
    const dir = direction === 'asc' ? 1 : -1
    list = [...list].sort((a, b) =>
      a[key] < b[key] ? -dir : a[key] > b[key] ? dir : a.id < b.id ? -1 : 1,
    )
  }
  return { rows: list.slice(q.cursor, q.cursor + q.pageSize), total: list.length }
}

// ----- Folder tree -----
const tree = new Map<string, TreeItem[]>()

function node(
  id: string,
  label: string,
  icon: string,
  hasChildren: boolean,
  meta?: string,
): TreeItem {
  return { id, label, icon, hasChildren, ...(meta ? { meta } : {}) }
}

function build(parentId: string | null): TreeItem[] {
  if (parentId === null) {
    return [
      node('readme', 'Read me', 'description', false),
      node('photos', 'Photos', 'photo_library', true, '2,000'),
      node('projects', 'Projects', 'folder', true),
      node('documents', 'Documents', 'folder', true),
      node('archive', 'Archive', 'inventory_2', true),
    ]
  }
  if (parentId === 'photos') {
    return Array.from({ length: 2000 }, (_, i) =>
      node(`photo-${i + 1}`, `IMG_${String(i + 1).padStart(4, '0')}.jpg`, 'image', false),
    )
  }
  if (parentId === 'projects') {
    return ['Harbor', 'Atlas', 'Summit'].map((p) =>
      node(`proj-${p.toLowerCase()}`, p, 'folder', true),
    )
  }
  const depth = parentId.split('-').length
  if (parentId.startsWith('proj-') && depth === 2) {
    return ['Designs', 'Notes', 'Reports', 'Exports'].map((s) =>
      node(`${parentId}-${s.toLowerCase()}`, s, 'folder', true),
    )
  }
  if (parentId.startsWith('proj-') && depth === 3) {
    return Array.from({ length: 12 }, (_, i) =>
      node(`${parentId}-file-${i + 1}`, `File ${i + 1}`, 'draft', false),
    )
  }
  if (parentId === 'documents')
    return ['Budget', 'Contracts', 'Invoices', 'Travel'].map((d) =>
      node(`documents-${d.toLowerCase()}`, d, 'description', false),
    )
  if (parentId === 'archive')
    return ['2023', '2024', '2025'].map((y) => node(`archive-${y}`, y, 'folder_zip', false))
  return []
}

function childrenOf(parentId: string | null): TreeItem[] {
  const key = parentId ?? ''
  if (!tree.has(key)) tree.set(key, build(parentId))
  return tree.get(key)!
}

/** Lazy loader: 100 children per page, with latency. */
export const loadTree: TreeLoader = async (parentId, cursor) => {
  await new Promise((r) => setTimeout(r, 200))
  const all = childrenOf(parentId)
  const start = cursor ? Number(cursor) : 0
  const items = all.slice(start, start + 100)
  return { items, nextCursor: start + 100 < all.length ? String(start + 100) : null }
}

function findParent(id: string): string | null | undefined {
  for (const [key, items] of tree)
    if (items.some((i) => i.id === id)) return key === '' ? null : key
  return undefined
}

/** Applies a move to the demo store (what a file API would do). */
export async function moveTreeItem(move: TreeMove): Promise<void> {
  await new Promise((r) => setTimeout(r, 150))
  const from = findParent(move.id)
  if (from === undefined) return
  const fromList = childrenOf(from)
  const item = fromList.find((i) => i.id === move.id)!
  fromList.splice(fromList.indexOf(item), 1)
  if (move.position === 'inside') {
    const target = [...tree.values()].flat().find((i) => i.id === move.targetId)
    if (target) target.hasChildren = true
    childrenOf(move.targetId).push(item)
    return
  }
  const to = findParent(move.targetId)
  if (to === undefined) return
  const toList = childrenOf(to)
  const index = toList.findIndex((i) => i.id === move.targetId)
  toList.splice(move.position === 'before' ? index : index + 1, 0, item)
}
