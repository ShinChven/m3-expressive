import {
  Button,
  Card,
  type TreeItem,
  type TreeLoader,
  type TreeMove,
  TreeView,
  type TreeViewHandle,
  useSnackbar,
} from '@m3-expressive/react'
import { useRef, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import { loadTree, moveTreeItem } from '../mock'

// Static data for the overview card.
const PREVIEW_TREE: Record<string, TreeItem[]> = {
  root: [
    { id: 'readme', label: 'Read me', icon: 'description', hasChildren: false },
    { id: 'projects', label: 'Projects', icon: 'folder', hasChildren: true },
    { id: 'photos', label: 'Photos', icon: 'photo_library', hasChildren: true },
  ],
  projects: [
    { id: 'proj-harbor', label: 'Harbor', icon: 'folder', hasChildren: true, meta: '48' },
    { id: 'proj-atlas', label: 'Atlas', icon: 'folder', hasChildren: true, meta: '31' },
  ],
}

const loadPreview: TreeLoader = async (parentId) => {
  await new Promise((resolve) => setTimeout(resolve, 0))
  return { items: PREVIEW_TREE[parentId ?? 'root'] ?? [] }
}

// Read me is a single file: nothing can move inside it.
const noMovesIntoReadme = (move: TreeMove) =>
  !(move.position === 'inside' && move.targetId === 'readme')

export const doc = defineDoc({
  slug: 'tree-view',
  name: 'Tree view',
  group: 'data',
  icon: 'account_tree',
  order: 2,
  summary:
    'Tree views show nested content, such as the folders of a shared drive. Children load on demand, one page at a time, and only visible rows render, so very large trees stay fast.',
  imports: ['TreeView', 'Card', 'Button', 'useSnackbar'],
  preview: () => (
    <div className="g-preview-col">
      <TreeView
        aria-label="Shared drive"
        loadChildren={loadPreview}
        defaultExpanded={['projects']}
        selectedId="proj-harbor"
        rowHeight={28}
        indent={16}
        height={112}
      />
    </div>
  ),
  playground: {
    stage: 'fill',
    controls: {
      height: { type: 'number', default: 360, min: 240, max: 560, step: 40 },
      rowHeight: { type: 'number', default: 40, min: 28, max: 56, step: 4, label: 'Row height' },
      indent: { type: 'number', default: 24, min: 12, max: 40, step: 4 },
      selection: { type: 'boolean', default: true },
      activation: { type: 'boolean', default: true, label: 'Open on Enter or double-click' },
      dragAndDrop: { type: 'boolean', default: true, label: 'Move (drag and Alt+Arrow)' },
      canDrop: { type: 'boolean', default: true, label: 'Block moves into Read me' },
    },
    render: function TreeViewPlayground(v) {
      const snackbar = useSnackbar()
      const [selectedId, setSelectedId] = useState<string | null>(null)
      return (
        <Card variant="outlined">
          <TreeView
            aria-label="Shared drive"
            loadChildren={loadTree}
            height={v.height}
            rowHeight={v.rowHeight}
            indent={v.indent}
            defaultExpanded={['projects']}
            selectedId={v.selection ? selectedId : undefined}
            onSelect={v.selection ? (item) => setSelectedId(item.id) : undefined}
            onActivate={v.activation ? (item) => snackbar.show(`Open “${item.label}”`) : undefined}
            onMove={v.dragAndDrop ? moveTreeItem : undefined}
            canDrop={v.dragAndDrop && v.canDrop ? noMovesIntoReadme : undefined}
          />
        </Card>
      )
    },
    code: (v, { jsx, changed }) => {
      const state = [
        v.activation && 'const snackbar = useSnackbar()',
        v.selection && 'const [selectedId, setSelectedId] = useState<string | null>(null)',
      ].filter(Boolean)
      const tree = jsx('TreeView', {
        'aria-label': 'Shared drive',
        loadChildren: raw('loadTree'),
        height: v.height,
        ...changed(v, ['rowHeight', 'indent']),
        defaultExpanded: raw("['projects']"),
        selectedId: v.selection ? raw('selectedId') : undefined,
        onSelect: v.selection ? raw('(item) => setSelectedId(item.id)') : undefined,
        onActivate: v.activation
          ? raw('(item) => snackbar.show(`Open “\u0024{item.label}”`)')
          : undefined,
        onMove: v.dragAndDrop ? raw('moveTreeItem') : undefined,
        canDrop:
          v.dragAndDrop && v.canDrop
            ? raw("(move) => !(move.position === 'inside' && move.targetId === 'readme')")
            : undefined,
      })
      const card = `<Card variant="outlined">\n${tree.replace(/^/gm, '  ')}\n</Card>`
      return state.length ? `${state.join('\n')}\n\n${card}` : card
    },
  },
  api: [
    { name: 'TreeView', interfaces: ['TreeViewProps'] },
    { name: 'TreeItem', interfaces: ['TreeItem'] },
    {
      name: 'TreePage',
      interfaces: ['TreePage'],
      inherits:
        'What a `TreeLoader` returns. A loader is `(parentId, cursor) => Promise<TreePage>`: `parentId` is `null` for the root level, and `cursor` is `null` for the first page.',
    },
    { name: 'TreeMove', interfaces: ['TreeMove'] },
    {
      name: 'TreeViewHandle',
      interfaces: ['TreeViewHandle'],
      inherits: 'Get it with `ref`: `const tree = useRef<TreeViewHandle>(null)`.',
    },
  ],
  guidelines: [
    'Load children per parent and per page. Return `nextCursor` for long lists; the tree asks for the next page when people scroll to the end.',
    'Use `onSelect` to show details next to the tree, and `onActivate` (double-click or Enter) to open the item.',
    'Check every move on the server too: `canDrop` only guides people while they drag. After `onMove` resolves, the tree reloads the old and the new parent.',
    'Give the tree a fixed `height`, or a parent with a height. Only the visible rows render, and the rows scroll inside the tree.',
  ],
})

/**
 * Browse the folder tree
 * Children load when a node opens. Photos has 2,000 images; they load 100 at a time as you scroll. Arrow keys move and open nodes, Space selects, Enter or a double-click opens, and typing jumps to a matching label.
 */
export function ExampleFolderTree() {
  const snackbar = useSnackbar()
  const [selected, setSelected] = useState<TreeItem | null>(null)
  return (
    <Card
      variant="outlined"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 240px)',
        width: '100%',
      }}
    >
      <TreeView
        aria-label="Shared drive"
        loadChildren={loadTree}
        height={420}
        defaultExpanded={['projects']}
        selectedId={selected?.id ?? null}
        onSelect={setSelected}
        onActivate={(item) => snackbar.show(`Open “${item.label}”`)}
      />
      <div
        className="g-stack"
        style={{
          alignItems: 'flex-start',
          padding: 16,
          borderInlineStart: '1px solid var(--md-sys-color-outline-variant)',
        }}
      >
        <span className="m3-typescale-title-medium">{selected?.label ?? 'Nothing selected'}</span>
        <span className="g-muted">
          {selected ? `ID: ${selected.id}` : 'Click a file or press Space.'}
        </span>
        {selected && (
          <Button
            variant="tonal"
            icon="open_in_new"
            onClick={() => snackbar.show(`Open “${selected.label}”`)}
          >
            Open
          </Button>
        )}
      </div>
    </Card>
  )
}

/**
 * Load children in pages
 * `loadChildren` gets the parent id and a cursor, and returns one page of children with the cursor of the next page. The tree shows a loading row at the end and asks for the next page when it scrolls into view.
 */
export function ExamplePagedLoader() {
  return (
    <Card variant="outlined" style={{ width: '100%' }}>
      <TreeView
        aria-label="Photo albums"
        loadChildren={loadPhotos}
        height={320}
        defaultExpanded={['camera']}
      />
    </Card>
  )
}

const PAGE_SIZE = 50
const ALBUMS = [
  { id: 'camera', label: 'Camera', count: 1200 },
  { id: 'screenshots', label: 'Screenshots', count: 24 },
]

// Stands in for `GET /api/photos?album=…&cursor=…`.
const loadPhotos: TreeLoader = async (parentId, cursor) => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  if (parentId === null) {
    return {
      items: ALBUMS.map((album) => ({
        id: album.id,
        label: album.label,
        icon: 'photo_album',
        hasChildren: true,
        meta: album.count.toLocaleString(),
      })),
    }
  }
  const total = ALBUMS.find((album) => album.id === parentId)?.count ?? 0
  const start = Number(cursor ?? 0)
  const end = Math.min(start + PAGE_SIZE, total)
  const items = Array.from({ length: end - start }, (_, i) => ({
    id: `${parentId}-${start + i + 1}`,
    label: `${parentId}-${String(start + i + 1).padStart(4, '0')}.jpg`,
    icon: 'image',
    hasChildren: false,
    meta: `${100 + (((start + i) * 37) % 900)} KB`,
  }))
  return { items, nextCursor: end < total ? String(end) : null }
}

/**
 * Move files and folders
 * Drag an item onto another item to move it inside, or near the top or bottom edge of a row to move it before or after. With the keyboard, Alt+Up and Alt+Down reorder, Alt+Right moves the item into the item above, and Alt+Left moves it out of its parent. `canDrop` blocks moves that are not allowed.
 */
export function ExampleMove() {
  const snackbar = useSnackbar()
  return (
    <Card variant="outlined" style={{ width: '100%' }}>
      <TreeView
        aria-label="Shared drive"
        loadChildren={loadTree}
        height={360}
        defaultExpanded={['documents', 'archive']}
        canDrop={canMove}
        onMove={async (move, item) => {
          try {
            await moveTreeItem(move)
            snackbar.show(`Moved “${item.label}”`)
          } catch {
            snackbar.show(`Could not move “${item.label}”`)
          }
        }}
      />
    </Card>
  )
}

// Nothing moves into Read me, and the yearly archives stay in Archive.
function canMove(move: TreeMove) {
  if (move.position === 'inside' && move.targetId === 'readme') return false
  if (move.id.startsWith('archive-')) {
    return move.position === 'inside'
      ? move.targetId === 'archive'
      : move.targetId.startsWith('archive-')
  }
  return true
}

/**
 * Meta and disabled items
 * `meta` adds trailing content, such as a count or a status. Disabled items stay in the tree, but people cannot select, open or drag them.
 */
export function ExampleMeta() {
  return (
    <Card variant="outlined" style={{ width: '100%' }}>
      <TreeView
        aria-label="Shared drive"
        loadChildren={loadWithStatus}
        height={320}
        defaultExpanded={['documents', 'archive']}
      />
    </Card>
  )
}

const SHARED = new Set(['documents-budget', 'documents-travel'])

// Wraps the folder loader: marks shared items and locks the yearly archives.
const loadWithStatus: TreeLoader = async (parentId, cursor) => {
  const page = await loadTree(parentId, cursor)
  return {
    ...page,
    items: page.items.map((item) => {
      if (item.id.startsWith('archive-'))
        return { ...item, icon: 'lock', disabled: true, meta: 'Locked' }
      if (SHARED.has(item.id)) return { ...item, meta: 'Shared' }
      return item
    }),
  }
}

/**
 * Refresh and control from code
 * A ref gives `refresh`, `expand`, `collapse` and `focus`. After you change data on the server, refresh the parent that changed. Here `expanded` is controlled, so a button can collapse every folder.
 */
export function ExampleHandle() {
  const tree = useRef<TreeViewHandle>(null)
  const [expanded, setExpanded] = useState<string[]>(['lisbon'])
  const [selected, setSelected] = useState<TreeItem | null>(null)
  const folder = selected?.hasChildren ? selected.id : null

  const addNote = async () => {
    if (!folder) return
    const note = await createNote(folder)
    await tree.current?.refresh(folder)
    tree.current?.expand(folder)
    tree.current?.focus(note.id)
    setSelected(note)
  }

  return (
    <div className="g-stack" style={{ width: '100%' }}>
      <div className="g-row">
        <Button icon="add" disabled={!folder} onClick={addNote}>
          New note in folder
        </Button>
        <Button variant="outlined" icon="unfold_less" onClick={() => setExpanded([])}>
          Collapse all
        </Button>
        <Button variant="text" icon="refresh" onClick={() => tree.current?.refresh()}>
          Reload
        </Button>
      </div>
      <Card variant="outlined">
        <TreeView
          ref={tree}
          aria-label="Trips"
          loadChildren={loadTrips}
          height={240}
          expanded={expanded}
          onExpandedChange={setExpanded}
          selectedId={selected?.id ?? null}
          onSelect={setSelected}
        />
      </Card>
    </div>
  )
}

// A small in-memory store that stands in for the file API.
const TRIPS = new Map<string, TreeItem[]>([
  [
    '',
    [
      { id: 'lisbon', label: 'Lisbon trip', icon: 'folder', hasChildren: true },
      { id: 'kyoto', label: 'Kyoto trip', icon: 'folder', hasChildren: true },
    ],
  ],
  [
    'lisbon',
    [
      { id: 'lisbon-flights', label: 'Flight tickets', icon: 'flight', hasChildren: false },
      { id: 'lisbon-hotel', label: 'Hotel booking', icon: 'hotel', hasChildren: false },
    ],
  ],
  ['kyoto', []],
])
let created = 0

const loadTrips: TreeLoader = async (parentId) => {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return { items: [...(TRIPS.get(parentId ?? '') ?? [])] }
}

// Stands in for `POST /api/files`.
async function createNote(folderId: string): Promise<TreeItem> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  created += 1
  const note = {
    id: `${folderId}-new-${created}`,
    label: `Untitled note ${created}`,
    icon: 'description',
    hasChildren: false,
  }
  TRIPS.get(folderId)?.push(note)
  return note
}
