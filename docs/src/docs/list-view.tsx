import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  ChipSet,
  FilterChip,
  Icon,
  IconButton,
  LinearProgress,
  ListItem,
  ListView,
  type ListViewHandle,
  type MaterialShapeName,
  Switch,
  Text,
  useSnackbar,
} from '@m3-expressive/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import { FILES, type FileKind, type FileRow, type Status } from '../mock'
import './list-view.css'

type Department = 'Engineering' | 'Design' | 'Product' | 'Research'

interface DirectoryPerson {
  id: string
  name: string
  handle: string
  email: string
  role: string
  department: Department
  office: string
  status: 'Online' | 'In a meeting' | 'Focus' | 'Offline'
  shape: MaterialShapeName
}

const FIRST_NAMES = [
  'Ada',
  'Alan',
  'Elena',
  'Grace',
  'Hedy',
  'henrik',
  'Iris',
  'Julian',
  'Katherine',
  'Kenji',
  'Linus',
  'Margaret',
  'Mateo',
  'Nadia',
  'Priya',
  'radia',
  'Sora',
  'Tariq',
  'Vera',
  'Zuri',
].map((n) => n[0]!.toUpperCase() + n.slice(1))

const LAST_NAMES = [
  'Lovelace',
  'Turing',
  'Rostova',
  'Hopper',
  'Lamarr',
  'Lindqvist',
  'Vance',
  'Mercer',
  'Johnson',
  'Takahashi',
  'Hamilton',
  'Chen',
  'Perlman',
  'Okafor',
  'Patel',
  'Moreau',
  'Sato',
  'Al-Mansoor',
  'Kowalski',
  'Bello',
]

const ROLES: { role: string; department: Department }[] = [
  { role: 'Staff Systems Architect', department: 'Engineering' },
  { role: 'Principal Design Technologist', department: 'Design' },
  { role: 'Group Product Manager', department: 'Product' },
  { role: 'Applied ML Scientist', department: 'Research' },
  { role: 'Senior Frontend Engineer', department: 'Engineering' },
  { role: 'Interaction Designer', department: 'Design' },
  { role: 'Platform Tech Lead', department: 'Engineering' },
  { role: 'User Research Lead', department: 'Research' },
]

const OFFICES = [
  'SFO · Pier 26',
  'NYC · Hudson',
  'LON · King’s Cross',
  'TYO · Shibuya',
  'ZRH · Europaallee',
]
const STATUSES: DirectoryPerson['status'][] = ['Online', 'In a meeting', 'Focus', 'Offline']
const AVATAR_SHAPES: MaterialShapeName[] = ['circle', 'cookie-7', 'clover-4', 'slanted', 'arch']

function generateDirectory(count: number): DirectoryPerson[] {
  return Array.from({ length: count }, (_, i) => {
    const first = FIRST_NAMES[i % FIRST_NAMES.length]!
    const last = LAST_NAMES[(i * 7 + Math.floor(i / FIRST_NAMES.length)) % LAST_NAMES.length]!
    const suffix = i >= FIRST_NAMES.length * LAST_NAMES.length ? ` ${Math.floor(i / 400) + 1}` : ''
    const fullName = `${first} ${last}${suffix}`
    const roleEntry = ROLES[i % ROLES.length]!
    const slug = `${first.toLowerCase()}.${last.toLowerCase()}${i + 1}`
    return {
      id: `person-${i + 1}`,
      name: fullName,
      handle: `@${first.toLowerCase()}${i + 1}`,
      email: `${slug}@acme.dev`,
      role: roleEntry.role,
      department: roleEntry.department,
      office: OFFICES[i % OFFICES.length]!,
      status: STATUSES[i % STATUSES.length]!,
      shape: AVATAR_SHAPES[i % AVATAR_SHAPES.length]!,
    }
  })
}

interface PlaygroundRecord {
  id: string
  overline: string
  headline: string
  supporting: string
  meta: string
  badge: string
  icon: string
  avatarName: string
  shape?: MaterialShapeName
}

const FILE_KIND_ICONS: Record<FileKind, string> = {
  document: 'description',
  spreadsheet: 'table_chart',
  image: 'image',
}

function buildPlaygroundRecords(dataset: string, count: number): PlaygroundRecord[] {
  if (dataset === 'files') {
    return Array.from({ length: count }, (_, i) => {
      const base = FILES[i % FILES.length]!
      const version = Math.floor(i / FILES.length)
      const name = version === 0 ? base.name : base.name.replace(/(\.\w+)$/, ` v${version + 1}$1`)
      return {
        id: `file-${i + 1}`,
        overline: `${base.folder} · ${base.owner}`,
        headline: name,
        supporting: `${base.kind} · Modified ${base.modified}`,
        meta: `${base.size.toLocaleString()} KB`,
        badge: base.status,
        icon: FILE_KIND_ICONS[base.kind],
        avatarName: base.owner,
      }
    })
  }
  if (dataset === 'logs') {
    const levels = [
      { level: 'INFO', icon: 'check_circle', svc: 'edge-gateway' },
      { level: 'INFO', icon: 'sync', svc: 'auth-worker' },
      { level: 'WARN', icon: 'warning', svc: 'billing-queue' },
      { level: 'ERROR', icon: 'error', svc: 'search-indexer' },
    ]
    const messages = [
      'TLS session resumed from regional cache',
      'Token rotation completed for workspace pool',
      'Retry budget exceeded 75% threshold on shard 04',
      'Upstream timeout after 1,200ms awaiting vector replica',
      'Snapshot checkpoint committed to object storage',
      'Rate limiter adjusted burst window for tenant tier',
    ]
    return Array.from({ length: count }, (_, i) => {
      const lvl = levels[i % levels.length]!
      const ms = 12 + ((i * 37) % 480)
      const sec = String(i % 60).padStart(2, '0')
      const min = String(Math.floor(i / 60) % 60).padStart(2, '0')
      return {
        id: `log-${i + 1}`,
        overline: `14:${min}:${sec}.${String((i * 19) % 1000).padStart(3, '0')} · ${lvl.svc}`,
        headline: messages[i % messages.length]!,
        supporting: `trace_id=tr_${(100000 + i).toString(16)} · region=us-west-2`,
        meta: `${ms} ms`,
        badge: lvl.level,
        icon: lvl.icon,
        avatarName: lvl.level,
      }
    })
  }
  const people = generateDirectory(count)
  return people.map((p) => ({
    id: p.id,
    overline: `${p.department} · ${p.office}`,
    headline: p.name,
    supporting: `${p.role} · ${p.email}`,
    meta: p.office.split(' · ')[0]!,
    badge: p.department,
    icon: 'person',
    avatarName: p.name,
    shape: p.shape,
  }))
}

const PREVIEW_ITEMS = [
  {
    id: 'p1',
    headline: 'Ada Lovelace',
    supporting: 'Staff Systems Architect',
    meta: 'SFO',
  },
  {
    id: 'p2',
    headline: 'Grace Hopper',
    supporting: 'Principal Design Technologist',
    meta: 'NYC',
  },
  {
    id: 'p3',
    headline: 'Alan Turing',
    supporting: 'Applied ML Scientist',
    meta: 'LON',
  },
]

export const doc = defineDoc({
  slug: 'list-view',
  name: 'List view',
  group: 'data',
  icon: 'format_list_bulleted',
  order: 2,
  summary:
    'List views virtualize large collections (10,000+ rows) at 60fps with dynamic row measurement, keyboard navigation, single or multi-selection, imperative scroll jumping, and standard or segmented M3 Expressive list items.',
  imports: [
    'ListView',
    'ListItem',
    'Avatar',
    'Badge',
    'Button',
    'Checkbox',
    'ChipSet',
    'FilterChip',
    'Icon',
    'IconButton',
    'LinearProgress',
    'Switch',
    'Text',
    'useSnackbar',
  ],
  preview: () => (
    <div className="g-preview-col" style={{ width: '100%' }}>
      <ListView
        className="lv-preview"
        aria-label="Team directory preview"
        variant="segmented"
        selection="single"
        defaultSelectedKeys={['p2']}
        items={PREVIEW_ITEMS}
        getItemKey={(item) => item.id}
        height={156}
        estimateSize={46}
        renderItem={(item, _index, state) => (
          <ListItem
            headline={item.headline}
            trailingSupportingText={item.meta}
            leading={<Avatar name={item.headline} size={28} />}
            selected={state.selected}
          />
        )}
      />
    </div>
  ),
  playground: {
    stage: 'fill',
    controls: {
      dataset: {
        type: 'select',
        options: ['contacts', 'files', 'logs'],
        default: 'contacts',
        label: 'Dataset',
      },
      count: {
        type: 'select',
        options: ['100', '1000', '10000'],
        default: '1000',
        label: 'Items count',
      },
      variant: {
        type: 'select',
        options: ['standard', 'segmented'],
        default: 'segmented',
      },
      selection: {
        type: 'select',
        options: ['none', 'single', 'multiple'],
        default: 'single',
      },
      lines: {
        type: 'select',
        options: ['1', '2', '3'],
        default: '2',
        label: 'Item lines',
      },
      leading: {
        type: 'select',
        options: ['avatar', 'icon', 'checkbox', 'none'],
        default: 'avatar',
        label: 'Leading slot',
      },
      trailing: {
        type: 'select',
        options: ['meta', 'badge', 'action', 'none'],
        default: 'meta',
        label: 'Trailing slot',
      },
      toolbar: {
        type: 'boolean',
        default: true,
        label: 'Search & jump toolbar',
      },
      empty: {
        type: 'boolean',
        default: false,
        label: 'Empty state',
      },
      height: {
        type: 'number',
        default: 400,
        min: 240,
        max: 600,
        step: 40,
        label: 'Height',
      },
    },
    render: function ListViewPlayground(v) {
      const count = Number(v.count)
      const lineCount = Number(v.lines) as 1 | 2 | 3
      const estimateSize = lineCount === 3 ? 88 : lineCount === 2 ? 72 : 56
      const allItems = useMemo(() => buildPlaygroundRecords(v.dataset, count), [v.dataset, count])
      const [search, setSearch] = useState('')
      const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>(['person-1'])
      const [starredIds, setStarredIds] = useState<Set<string>>(
        () => new Set(['person-2', 'file-2']),
      )
      const listRef = useRef<ListViewHandle>(null)
      const snackbar = useSnackbar()

      const filtered = useMemo(() => {
        if (v.empty) return []
        const q = search.trim().toLowerCase()
        if (!q) return allItems
        return allItems.filter(
          (item) =>
            item.headline.toLowerCase().includes(q) ||
            item.supporting.toLowerCase().includes(q) ||
            item.overline.toLowerCase().includes(q),
        )
      }, [allItems, search, v.empty])

      const toggleStar = (id: string, title: string) => {
        setStarredIds((prev) => {
          const next = new Set(prev)
          if (next.has(id)) {
            next.delete(id)
            snackbar.show(`Removed “${title}” from starred`)
          } else {
            next.add(id)
            snackbar.show(`Starred “${title}”`)
          }
          return next
        })
      }

      return (
        <div className="lv-shell">
          {v.toolbar && (
            <div
              className="lv-toolbar"
              data-selection={v.selection !== 'none' && selectedKeys.length > 0 ? '' : undefined}
            >
              <div className="g-table-search" style={{ flex: '1 1 220px', maxWidth: 360 }}>
                <Icon name="search" size={20} className="g-table-search__icon" />
                <input
                  type="text"
                  className="g-table-search__input"
                  placeholder={`Filter ${count.toLocaleString()} ${v.dataset}…`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Filter items"
                />
                {search && (
                  <button
                    type="button"
                    className="g-table-search__clear"
                    aria-label="Clear filter"
                    onClick={() => setSearch('')}
                  >
                    <Icon name="cancel" size={18} />
                  </button>
                )}
              </div>
              <nav className="lv-jump-bar" aria-label="Quick scroll jump">
                <button
                  type="button"
                  className="lv-jump-btn"
                  onClick={() => listRef.current?.scrollToIndex(0, { align: 'start' })}
                >
                  Top
                </button>
                <button
                  type="button"
                  className="lv-jump-btn"
                  onClick={() =>
                    listRef.current?.scrollToIndex(Math.floor(filtered.length / 2), {
                      align: 'center',
                    })
                  }
                >
                  50%
                </button>
                <button
                  type="button"
                  className="lv-jump-btn"
                  onClick={() =>
                    listRef.current?.scrollToIndex(Math.max(0, filtered.length - 1), {
                      align: 'end',
                    })
                  }
                >
                  End
                </button>
              </nav>
              <div className="lv-toolbar__meta">
                {v.selection !== 'none' && selectedKeys.length > 0 ? (
                  <>
                    <span>{selectedKeys.length} selected</span>
                    <Button variant="text" size="xs" onClick={() => setSelectedKeys([])}>
                      Clear
                    </Button>
                  </>
                ) : (
                  <span>{filtered.length.toLocaleString()} items</span>
                )}
              </div>
            </div>
          )}
          <ListView
            ref={listRef}
            aria-label={`${v.dataset} list`}
            items={filtered}
            getItemKey={(item) => item.id}
            variant={v.variant}
            selection={v.selection}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            height={v.height}
            estimateSize={estimateSize}
            onItemClick={(item) => {
              if (v.selection === 'none') snackbar.show(`Opened “${item.headline}”`)
            }}
            empty={
              <div className="g-stack" style={{ alignItems: 'center' }}>
                <Icon name="manage_search" size={40} />
                <span>No items match your current filter</span>
                {search && (
                  <Button
                    variant="tonal"
                    size="xs"
                    icon="restart_alt"
                    onClick={() => setSearch('')}
                  >
                    Reset filter
                  </Button>
                )}
              </div>
            }
            renderItem={(item, _index, state) => {
              const leadingNode =
                v.leading === 'avatar' ? (
                  <Avatar name={item.avatarName} shape={item.shape} />
                ) : v.leading === 'checkbox' ? (
                  <Checkbox
                    checked={state.selected}
                    onChange={() => {}}
                    aria-label={item.headline}
                  />
                ) : undefined
              const trailingNode =
                v.trailing === 'badge' ? (
                  <span
                    className="lv-pill"
                    data-tone={
                      item.badge === 'ERROR'
                        ? 'error'
                        : item.badge === 'WARN'
                          ? 'tertiary'
                          : undefined
                    }
                  >
                    {item.badge}
                  </span>
                ) : v.trailing === 'action' ? (
                  <IconButton
                    icon="star"
                    selected={starredIds.has(item.id)}
                    label={`Star ${item.headline}`}
                    size="xs"
                    onClick={() => toggleStar(item.id, item.headline)}
                  />
                ) : undefined

              return (
                <ListItem
                  overline={lineCount === 3 ? item.overline : undefined}
                  headline={item.headline}
                  supportingText={lineCount >= 2 ? item.supporting : undefined}
                  lines={lineCount}
                  leadingIcon={v.leading === 'icon' ? item.icon : undefined}
                  leading={leadingNode}
                  leadingSize={v.leading === 'avatar' ? 'avatar' : undefined}
                  trailingSupportingText={v.trailing === 'meta' ? item.meta : undefined}
                  trailing={trailingNode}
                  selected={state.selected}
                />
              )
            }}
          />
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const count = Number(v.count)
      const lineCount = Number(v.lines)
      const estimateSize = lineCount === 3 ? 88 : lineCount === 2 ? 72 : 56
      const lines: string[] = [
        `const items = useMemo(() => generateItems(${count}), [])`,
        v.toolbar ? 'const listRef = useRef<ListViewHandle>(null)' : '',
        v.selection !== 'none'
          ? "const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>(['person-1'])"
          : '',
      ].filter(Boolean)

      const itemProps = [
        lineCount === 3 ? '        overline={item.overline}' : '',
        '        headline={item.headline}',
        lineCount >= 2 ? '        supportingText={item.supporting}' : '',
        v.leading === 'avatar'
          ? '        leading={<Avatar name={item.name} />}\n        leadingSize="avatar"'
          : v.leading === 'icon'
            ? '        leadingIcon={item.icon}'
            : v.leading === 'checkbox'
              ? '        leading={<Checkbox checked={state.selected} onChange={() => {}} />}'
              : '',
        v.trailing === 'meta'
          ? '        trailingSupportingText={item.meta}'
          : v.trailing === 'badge'
            ? '        trailing={<Badge value={item.badge} />}'
            : v.trailing === 'action'
              ? '        trailing={<IconButton icon="star_outline" label="Star" size="xs" />}'
              : '',
        v.selection !== 'none' ? '        selected={state.selected}' : '',
      ]
        .filter(Boolean)
        .join('\n')

      return [
        ...lines,
        '',
        jsx('ListView', {
          ref: v.toolbar ? raw('listRef') : undefined,
          'aria-label': `${v.dataset} list`,
          items: raw(v.empty ? '[]' : 'items'),
          getItemKey: raw('(item) => item.id'),
          ...changed(v, ['variant', 'selection', 'height']),
          selectedKeys: v.selection !== 'none' ? raw('selectedKeys') : undefined,
          onSelectionChange: v.selection !== 'none' ? raw('setSelectedKeys') : undefined,
          estimateSize,
          empty: v.empty ? 'No items match your current filter' : undefined,
          renderItem: raw(
            `(item, _index, state) => (\n      <ListItem\n${itemProps}\n      />\n    )`,
          ),
        }),
      ].join('\n')
    },
  },
  api: [
    {
      name: 'ListView',
      interfaces: ['ListViewProps'],
      inherits:
        'Generic over the item type `T`. Accepts native `<div>` attributes and renders a virtualized viewport powered by `@tanstack/react-virtual` with automatic DOM height measurement.',
    },
    {
      name: 'ListViewHandle',
      interfaces: ['ListViewHandle'],
      inherits:
        'Imperative handle exposed via `ref`: `const listRef = useRef<ListViewHandle>(null)`. Use `scrollToIndex` or `scrollToOffset` to jump across thousands of items.',
    },
  ],
  guidelines: [
    'Use `ListView` instead of `List` whenever a collection can exceed ~50 items; only visible rows plus `overscan` exist in the DOM.',
    'Provide an `estimateSize` close to your typical item height (`56` for 1-line, `72` for 2-line, `88` for 3-line). Rendered rows are measured automatically so variable-height items never overlap.',
    'Use `ref` (`ListViewHandle`) with `scrollToIndex(index, { align })` to build alphabetical index jumpers, search result navigation, or live-tailing log streams.',
    'Nested buttons, links, and switches inside a row can be clicked independently without triggering row selection.',
    'With `selection="single"` or `"multiple"`, the container exposes `role="listbox"` and `role="option"` with full `ArrowUp`, `ArrowDown`, `PageUp`, `PageDown`, `Home`, `End`, `Space`, and `Enter` keyboard support.',
  ],
})

/**
 * Directory of 10,000 people with live search and jump bar
 * Filters 10,000 employee records in real time and jumps instantly to any alphabetical range using `ListViewHandle.scrollToIndex`. Only ~10 DOM nodes are mounted at any moment.
 */
export function ExampleDirectory() {
  const directory = useMemo(() => generateDirectory(10000), [])
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState<'All' | Department>('All')
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>(['person-1'])
  const listRef = useRef<ListViewHandle>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return directory.filter((p) => {
      if (dept !== 'All' && p.department !== dept) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.office.toLowerCase().includes(q) ||
        p.email.toLowerCase().includes(q)
      )
    })
  }, [directory, query, dept])

  const selectedPerson = useMemo(
    () => directory.find((p) => p.id === selectedKeys[0]),
    [directory, selectedKeys],
  )

  const jumpToFraction = (fraction: number) => {
    if (filtered.length === 0) return
    const target = Math.min(filtered.length - 1, Math.floor(filtered.length * fraction))
    listRef.current?.scrollToIndex(target, { align: 'start' })
  }

  return (
    <div className="lv-shell">
      <div className="lv-toolbar">
        <div className="g-table-search" style={{ flex: '1 1 240px', maxWidth: 340 }}>
          <Icon name="search" size={20} className="g-table-search__icon" />
          <input
            type="text"
            className="g-table-search__input"
            placeholder="Search 10,000 people by name, role, or office…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search directory"
          />
          {query && (
            <button
              type="button"
              className="g-table-search__clear"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >
              <Icon name="cancel" size={18} />
            </button>
          )}
        </div>
        <ChipSet aria-label="Filter by department">
          {(['All', 'Engineering', 'Design', 'Product', 'Research'] as const).map((d) => (
            <FilterChip
              key={d}
              label={d}
              selected={dept === d}
              onSelectedChange={() => setDept(d)}
            />
          ))}
        </ChipSet>
      </div>
      <div className="lv-subbar">
        <nav className="lv-jump-bar" aria-label="Jump to index">
          {[
            { label: '#1', frac: 0 },
            { label: '2.5k', frac: 0.25 },
            { label: '5k', frac: 0.5 },
            { label: '7.5k', frac: 0.75 },
            { label: 'End', frac: 0.999 },
          ].map((jump) => (
            <button
              key={jump.label}
              type="button"
              className="lv-jump-btn"
              onClick={() => jumpToFraction(jump.frac)}
            >
              {jump.label}
            </button>
          ))}
        </nav>
        <span className="g-muted m3-typescale-label-medium">
          Showing {filtered.length.toLocaleString()} of {directory.length.toLocaleString()} people
        </span>
      </div>
      <ListView
        ref={listRef}
        aria-label="Organization directory"
        variant="segmented"
        selection="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        items={filtered}
        getItemKey={(p) => p.id}
        height={380}
        estimateSize={72}
        empty="No team members match your filter."
        renderItem={(person, index, state) => (
          <ListItem
            headline={person.name}
            supportingText={`${person.role} · ${person.office}`}
            leading={<Avatar name={person.name} shape={person.shape} />}
            leadingSize="avatar"
            trailingSupportingText={`#${index + 1}`}
            trailing={
              <span
                className="lv-pill"
                data-tone={person.status === 'Online' ? 'primary' : undefined}
              >
                {person.status}
              </span>
            }
            selected={state.selected}
          />
        )}
      />
      <div className="lv-footer">
        <span>
          {selectedPerson
            ? `Selected: ${selectedPerson.name} (${selectedPerson.email}) · ${selectedPerson.department}`
            : 'Click any row or use ArrowUp / ArrowDown + Enter to select a person.'}
        </span>
        {selectedPerson && (
          <Button
            variant="text"
            size="xs"
            icon="my_location"
            onClick={() => {
              const idx = filtered.findIndex((p) => p.id === selectedPerson.id)
              if (idx >= 0) listRef.current?.scrollToIndex(idx, { align: 'center' })
            }}
          >
            Scroll to selected
          </Button>
        )}
      </div>
    </div>
  )
}

/**
 * Multi-select message triage and bulk actions
 * `selection="multiple"` turns the list into a multi-select listbox. Combine leading checkboxes with a contextual bulk-action bar to mark messages read, archive, or clear selection across large inboxes.
 */
export function ExampleInboxMultiSelect() {
  const snackbar = useSnackbar()
  const [messages, setMessages] = useState<InboxItem[]>(() => INITIAL_MESSAGES)
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>(['msg-1', 'msg-3'])

  const allSelected = messages.length > 0 && selectedKeys.length === messages.length
  const someSelected = selectedKeys.length > 0 && !allSelected

  const toggleAll = () => {
    setSelectedKeys(allSelected ? [] : messages.map((m) => m.id))
  }

  const markRead = (read: boolean) => {
    const set = new Set(selectedKeys)
    setMessages((prev) => prev.map((m) => (set.has(m.id) ? { ...m, unread: !read } : m)))
    snackbar.show(
      `${read ? 'Marked read' : 'Marked unread'} (${selectedKeys.length.toLocaleString()})`,
    )
    setSelectedKeys([])
  }

  const archiveSelected = () => {
    const set = new Set(selectedKeys)
    const count = selectedKeys.length
    setMessages((prev) => prev.filter((m) => !set.has(m.id)))
    setSelectedKeys([])
    snackbar.show(`Archived ${count} ${count === 1 ? 'conversation' : 'conversations'}`)
  }

  return (
    <div className="lv-shell">
      <div className="lv-toolbar" data-selection={selectedKeys.length > 0 ? '' : undefined}>
        <Checkbox
          checked={allSelected}
          indeterminate={someSelected}
          disabled={messages.length === 0}
          onChange={toggleAll}
          aria-label="Select all conversations"
        />
        <span className="m3-typescale-title-small">
          {selectedKeys.length > 0
            ? `${selectedKeys.length} selected`
            : `Release inbox (${messages.filter((m) => m.unread).length} unread)`}
        </span>
        <div className="lv-toolbar__meta">
          {selectedKeys.length > 0 ? (
            <>
              <Button
                variant="text"
                size="xs"
                icon="mark_email_read"
                onClick={() => markRead(true)}
              >
                Mark read
              </Button>
              <Button variant="text" size="xs" icon="archive" onClick={archiveSelected}>
                Archive
              </Button>
            </>
          ) : (
            <Button
              variant="text"
              size="xs"
              icon="refresh"
              onClick={() => {
                setMessages(INITIAL_MESSAGES)
                setSelectedKeys([])
              }}
            >
              Reset inbox
            </Button>
          )}
        </div>
      </div>
      <ListView
        aria-label="Release notifications"
        variant="segmented"
        selection="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        items={messages}
        getItemKey={(m) => m.id}
        height={360}
        estimateSize={88}
        empty={
          <div className="g-stack" style={{ alignItems: 'center' }}>
            <Icon name="done_all" size={40} />
            <span>Inbox zero — all conversations archived</span>
            <Button variant="tonal" size="xs" onClick={() => setMessages(INITIAL_MESSAGES)}>
              Restore messages
            </Button>
          </div>
        }
        renderItem={(msg, _index, state) => (
          <ListItem
            overline={`${msg.sender} · ${msg.channel}`}
            headline={msg.subject}
            supportingText={msg.preview}
            lines={3}
            leading={
              <Checkbox
                checked={state.selected}
                onChange={() => {}}
                aria-label={`Select ${msg.subject}`}
              />
            }
            trailingSupportingText={msg.time}
            trailing={msg.unread ? <Badge label="Unread" /> : undefined}
            selected={state.selected}
          />
        )}
      />
    </div>
  )
}

interface InboxItem {
  id: string
  sender: string
  channel: string
  subject: string
  preview: string
  time: string
  unread: boolean
}

const INITIAL_MESSAGES: InboxItem[] = Array.from({ length: 60 }, (_, i) => {
  const senders = [
    'Grace Hopper',
    'Ada Lovelace',
    'Alan Turing',
    'Katherine Johnson',
    'Hedy Lamarr',
  ]
  const channels = ['#release-ops', '#design-systems', '#security-audit', '#core-runtime']
  const subjects = [
    'M3 Expressive v2.4 token sync ready for canary',
    'Spring physics curve benchmark on 120Hz displays',
    'Keyset cursor migration completed on production cluster',
    'Accessibility audit sign-off for virtualized listbox',
    'Dynamic color contrast verification for dark surfaces',
  ]
  const previews = [
    'All automated visual regression checks passed across Chromium, WebKit, and Firefox.',
    'Reduced layout thrashing by caching virtual item measurements during momentum scroll.',
    'Zero downtime observed during shard cutover; p99 latency dropped from 42ms to 11ms.',
    'Screen reader announcements verified for single and multi-select keyboard navigation.',
    'Surface container tokens now preserve 4.5:1 minimum contrast at every elevation level.',
  ]
  return {
    id: `msg-${i + 1}`,
    sender: senders[i % senders.length]!,
    channel: channels[i % channels.length]!,
    subject: `${subjects[i % subjects.length]!} (#${i + 101})`,
    preview: previews[i % previews.length]!,
    time: `${(i % 12) + 1}:${String((i * 7) % 60).padStart(2, '0')} PM`,
    unread: i < 5 || i % 7 === 0,
  }
})

/**
 * Virtualized list-detail file inspector
 * Pair a virtualized `ListView` with a detail pane to browse 1,000 cloud drive files without pagination. Clicking a row or pressing `Enter`/`Space` inspects the selected file on the right.
 */
export function ExampleMasterDetail() {
  const snackbar = useSnackbar()
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([FILES[0]!.id])
  const [kindFilter, setKindFilter] = useState<'all' | FileKind>('all')

  const files = useMemo(
    () => (kindFilter === 'all' ? FILES : FILES.filter((f) => f.kind === kindFilter)),
    [kindFilter],
  )

  const activeFile: FileRow | undefined = useMemo(
    () => FILES.find((f) => f.id === selectedKeys[0]) ?? files[0],
    [selectedKeys, files],
  )

  return (
    <div className="lv-split">
      <div className="lv-split__list">
        <div className="lv-toolbar">
          <ChipSet aria-label="File type">
            {(['all', 'document', 'spreadsheet', 'image'] as const).map((k) => (
              <FilterChip
                key={k}
                label={k === 'all' ? `All (${FILES.length})` : k[0]!.toUpperCase() + k.slice(1)}
                selected={kindFilter === k}
                onSelectedChange={() => setKindFilter(k)}
              />
            ))}
          </ChipSet>
        </div>
        <ListView
          aria-label="Cloud drive files"
          variant="standard"
          selection="single"
          selectedKeys={activeFile ? [activeFile.id] : []}
          onSelectionChange={(keys) => {
            if (keys.length > 0) setSelectedKeys(keys)
          }}
          items={files}
          getItemKey={(f) => f.id}
          height={360}
          estimateSize={72}
          renderItem={(file, _index, state) => (
            <ListItem
              headline={file.name}
              supportingText={`${file.folder} · ${file.owner}`}
              leadingIcon={FILE_KIND_ICONS[file.kind]}
              trailingSupportingText={`${file.size.toLocaleString()} KB`}
              selected={state.selected}
            />
          )}
        />
      </div>
      <div className="lv-split__detail">
        {activeFile ? (
          <>
            <div className="g-row" style={{ justifyContent: 'space-between' }}>
              <span className="lv-pill" data-tone="primary">
                <Icon name={STATUS_META[activeFile.status].icon} size={14} />
                {STATUS_META[activeFile.status].label}
              </span>
              <span className="g-muted m3-typescale-label-small">ID: {activeFile.id}</span>
            </div>
            <div>
              <Text as="h4" variant="headline-small">
                {activeFile.name}
              </Text>
              <Text variant="body-medium" color="on-surface-variant">
                {activeFile.folder}
              </Text>
            </div>
            <div className="lv-kv-grid">
              <div className="lv-kv">
                <span className="lv-kv__label">Owner</span>
                <span className="lv-kv__value">{activeFile.owner}</span>
              </div>
              <div className="lv-kv">
                <span className="lv-kv__label">File size</span>
                <span className="lv-kv__value">{activeFile.size.toLocaleString()} KB</span>
              </div>
              <div className="lv-kv">
                <span className="lv-kv__label">Kind</span>
                <span className="lv-kv__value">{activeFile.kind}</span>
              </div>
              <div className="lv-kv">
                <span className="lv-kv__label">Last modified</span>
                <span className="lv-kv__value">{activeFile.modified}</span>
              </div>
            </div>
            <div className="g-row" style={{ marginTop: 'auto' }}>
              <Button
                variant="filled"
                icon="open_in_new"
                onClick={() => snackbar.show(`Opened “${activeFile.name}”`)}
              >
                Open file
              </Button>
              <Button
                variant="tonal"
                icon="share"
                onClick={() => snackbar.show(`Copied share link for “${activeFile.name}”`)}
              >
                Share
              </Button>
            </div>
          </>
        ) : (
          <div className="g-muted">Select a file from the list to inspect its metadata.</div>
        )}
      </div>
    </div>
  )
}

const STATUS_META: Record<Status, { label: string; icon: string }> = {
  shared: { label: 'Shared', icon: 'group' },
  private: { label: 'Private', icon: 'lock' },
  syncing: { label: 'Syncing', icon: 'sync' },
  archived: { label: 'Archived', icon: 'inventory_2' },
}

/**
 * Variable-height log stream and live tailing
 * Items in a `ListView` can mix 1-line, 2-line, and 3-line rows. Pass an `estimateSize` function for initial layout; `ListView` measures each mounted DOM element so mixed-height entries never collide.
 */
export function ExampleVariableHeightLogs() {
  const [logs, setLogs] = useState<LogEntry[]>(() => generateLogEntries(500))
  const [levelFilter, setLevelFilter] = useState<'ALL' | LogLevel>('ALL')
  const listRef = useRef<ListViewHandle>(null)

  const visibleLogs = useMemo(
    () => (levelFilter === 'ALL' ? logs : logs.filter((l) => l.level === levelFilter)),
    [logs, levelFilter],
  )

  const appendLiveBurst = () => {
    setLogs((prev) => {
      const nextBatch = generateLogEntries(25, prev.length)
      return [...prev, ...nextBatch]
    })
    requestAnimationFrame(() => {
      listRef.current?.scrollToIndex(visibleLogs.length + 24, { align: 'end' })
    })
  }

  return (
    <div className="lv-shell">
      <div className="lv-toolbar">
        <ChipSet aria-label="Log severity">
          {(['ALL', 'INFO', 'WARN', 'ERROR'] as const).map((lvl) => (
            <FilterChip
              key={lvl}
              label={lvl}
              selected={levelFilter === lvl}
              onSelectedChange={() => setLevelFilter(lvl)}
            />
          ))}
        </ChipSet>
        <div className="lv-toolbar__meta">
          <Button variant="tonal" size="xs" icon="add" onClick={appendLiveBurst}>
            Append 25 events
          </Button>
          <Button
            variant="text"
            size="xs"
            icon="vertical_align_bottom"
            onClick={() =>
              listRef.current?.scrollToIndex(Math.max(0, visibleLogs.length - 1), { align: 'end' })
            }
          >
            Tail latest
          </Button>
        </div>
      </div>
      <ListView
        ref={listRef}
        aria-label="Service telemetry logs"
        variant="segmented"
        items={visibleLogs}
        getItemKey={(l) => l.id}
        height={360}
        estimateSize={(index) => {
          const entry = visibleLogs[index]
          if (!entry) return 56
          return entry.lines === 3 ? 88 : entry.lines === 2 ? 72 : 56
        }}
        renderItem={(entry) => (
          <ListItem
            overline={entry.lines === 3 ? `${entry.timestamp} · ${entry.service}` : undefined}
            headline={entry.summary}
            supportingText={entry.lines >= 2 ? entry.detail : undefined}
            lines={entry.lines}
            leadingIcon={
              entry.level === 'ERROR' ? 'error' : entry.level === 'WARN' ? 'warning' : 'terminal'
            }
            trailingSupportingText={entry.lines < 3 ? entry.timestamp : entry.duration}
            trailing={
              <span
                className="lv-pill"
                data-tone={
                  entry.level === 'ERROR'
                    ? 'error'
                    : entry.level === 'WARN'
                      ? 'tertiary'
                      : undefined
                }
              >
                {entry.level}
              </span>
            }
          />
        )}
      />
    </div>
  )
}

type LogLevel = 'INFO' | 'WARN' | 'ERROR'

interface LogEntry {
  id: string
  level: LogLevel
  lines: 1 | 2 | 3
  timestamp: string
  service: string
  summary: string
  detail?: string
  duration: string
}

function generateLogEntries(count: number, offset = 0): LogEntry[] {
  const templates: {
    level: LogLevel
    lines: 1 | 2 | 3
    service: string
    summary: string
    detail?: string
  }[] = [
    {
      level: 'INFO',
      lines: 1,
      service: 'api-edge',
      summary: 'GET /v2/Documents 200 OK — edge cache hit',
    },
    {
      level: 'WARN',
      lines: 2,
      service: 'worker-sync',
      summary: 'Connection pool nearing saturation (44/50 active)',
      detail: 'Scaled standby read-replica in us-east-1b; queued 6 low-priority batch jobs.',
    },
    {
      level: 'ERROR',
      lines: 3,
      service: 'payment-ledger',
      summary: 'Idempotency lock contention on invoice settlement',
      detail:
        'Transaction tx_98a4f2 aborted after 3 retries: serialization failure on shard_02. Automatic dead-letter replay scheduled.',
    },
    {
      level: 'INFO',
      lines: 2,
      service: 'theme-engine',
      summary: 'Compiled HCT tonal palette for seed #6750A4',
      detail: 'Generated 36 dynamic color tokens in 1.4ms.',
    },
  ]
  return Array.from({ length: count }, (_, i) => {
    const idx = offset + i
    const t = templates[idx % templates.length]!
    const sec = String(idx % 60).padStart(2, '0')
    const min = String(Math.floor(idx / 60) % 60).padStart(2, '0')
    return {
      id: `evt-${idx + 1}`,
      level: t.level,
      lines: t.lines,
      timestamp: `12:${min}:${sec}`,
      service: t.service,
      summary: `[#${idx + 1}] ${t.summary}`,
      detail: t.detail,
      duration: `${8 + ((idx * 19) % 240)} ms`,
    }
  })
}

/**
 * Infinite scrolling feed with on-demand paging
 * `onEndReached` fires when the user scrolls to the end of the loaded items, so you can fetch the next page from an API and append it seamlessly.
 */
export function ExampleInfiniteScroll() {
  const [commits, setCommits] = useState(() => buildCommitBatch(0, 30))
  const [loading, setLoading] = useState(false)
  const hasMore = commits.length < 240

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return
    setLoading(true)
  }, [loading, hasMore])

  useEffect(() => {
    if (!loading) return
    const timer = window.setTimeout(() => {
      setCommits((prev) => [...prev, ...buildCommitBatch(prev.length, 30)])
      setLoading(false)
    }, 350)
    return () => window.clearTimeout(timer)
  }, [loading])

  return (
    <div className="lv-shell">
      {loading && <LinearProgress aria-label="Loading more commits" />}
      <ListView
        aria-label="Commit history"
        variant="standard"
        items={commits}
        getItemKey={(c) => c.sha}
        height={320}
        estimateSize={72}
        onEndReached={loadMore}
        renderItem={(commit) => (
          <ListItem
            headline={commit.title}
            supportingText={`${commit.author} committed ${commit.when}`}
            leading={<Avatar name={commit.author} />}
            leadingSize="avatar"
            trailing={<span className="lv-pill">{commit.sha}</span>}
          />
        )}
      />
      <div className="lv-footer">
        <span>
          Loaded {commits.length} of 240 commits{' '}
          {hasMore ? '(scroll to bottom to load more)' : '(all commits loaded)'}
        </span>
        {hasMore && (
          <Button variant="text" size="xs" disabled={loading} onClick={loadMore}>
            {loading ? 'Loading…' : 'Load 30 more'}
          </Button>
        )}
      </div>
    </div>
  )
}

function buildCommitBatch(start: number, size: number) {
  const titles = [
    'feat(list-view): measure dynamic virtual item heights automatically',
    'fix(data-table): preserve sticky header elevation during horizontal scroll',
    'perf(tree-view): batch branch generation updates on deep expand',
    'refactor(tokens): align segmented list corner radius with M3 Expressive spec',
    'docs(list-view): add directory, multi-select inbox, and log stream demos',
  ]
  const authors = ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Katherine Johnson']
  return Array.from({ length: size }, (_, i) => {
    const n = start + i + 1
    return {
      sha: (0x8a3f100 + n * 97).toString(16).slice(0, 7),
      title: `${titles[n % titles.length]!} (#${400 + n})`,
      author: authors[n % authors.length]!,
      when: `${n}h ago`,
    }
  })
}

/**
 * Rich item slots, inline controls, and empty states
 * Buttons and switches inside a `ListItem` operate independently without triggering row selection. When `items` is empty, `ListView` renders your custom `empty` view.
 */
export function ExampleRichSlotsAndEmpty() {
  const snackbar = useSnackbar()
  const [showEmpty, setShowEmpty] = useState(false)
  const [enabledFlags, setEnabledFlags] = useState<Set<string>>(
    () => new Set(['flag-1', 'flag-3', 'flag-5']),
  )

  const toggleFlag = (id: string, name: string) => {
    setEnabledFlags((prev) => {
      const next = new Set(prev)
      const on = !next.has(id)
      if (on) next.add(id)
      else next.delete(id)
      snackbar.show(`${name}: ${on ? 'Enabled' : 'Disabled'}`)
      return next
    })
  }

  return (
    <div className="lv-shell">
      <div className="lv-toolbar">
        <span className="m3-typescale-title-small">Feature rollout flags (80 environments)</span>
        <div className="lv-toolbar__meta">
          <Switch
            label="Simulate empty list"
            checked={showEmpty}
            onChange={(e) => setShowEmpty(e.target.checked)}
          />
        </div>
      </div>
      <ListView
        aria-label="Feature flags"
        variant="segmented"
        items={showEmpty ? [] : FEATURE_FLAGS}
        getItemKey={(f) => f.id}
        height={320}
        estimateSize={72}
        onItemClick={(f) => snackbar.show(`Inspecting flag “${f.key}”`)}
        empty={
          <div className="g-stack" style={{ alignItems: 'center' }}>
            <Icon name="flag" size={40} />
            <Text variant="title-medium">No feature flags configured</Text>
            <Text variant="body-small" color="on-surface-variant">
              Create a rollout flag or reset the environment filter to view active rules.
            </Text>
            <Button variant="tonal" icon="restart_alt" onClick={() => setShowEmpty(false)}>
              Show 80 flags
            </Button>
          </div>
        }
        renderItem={(flag) => {
          const checked = enabledFlags.has(flag.id)
          return (
            <ListItem
              headline={flag.name}
              supportingText={`${flag.key} · ${flag.rollout}`}
              leadingIcon={checked ? 'toggle_on' : 'science'}
              trailing={
                <Switch
                  checked={checked}
                  onChange={() => toggleFlag(flag.id, flag.name)}
                  aria-label={`Toggle ${flag.name}`}
                />
              }
            />
          )
        }}
      />
    </div>
  )
}

const FEATURE_FLAGS = Array.from({ length: 80 }, (_, i) => {
  const specs = [
    { name: 'Expressive spring physics', key: 'motion.spring_v2', rollout: '100% of production' },
    { name: 'Dynamic HCT contrast boost', key: 'theme.hct_contrast', rollout: '50% canary' },
    { name: 'Virtualized row measurement', key: 'list.auto_measure', rollout: 'Internal dogfood' },
    { name: 'Keyset cursor prefetching', key: 'data.cursor_prefetch', rollout: '25% EU region' },
  ]
  const spec = specs[i % specs.length]!
  return {
    id: `flag-${i + 1}`,
    name: `${spec.name} · Env #${i + 1}`,
    key: `${spec.key}.env_${i + 1}`,
    rollout: spec.rollout,
  }
})
