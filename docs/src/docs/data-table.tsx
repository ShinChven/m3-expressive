import {
  Button,
  DataTable,
  type DataTableColumn,
  Icon,
  IconButton,
  type SortState,
  TextField,
  useSnackbar,
} from '@m3-expressive/react'
import { useEffect, useMemo, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import { FILES, type FileRow, fetchFiles, type KeysetQuery, type Status } from '../mock'
import './data-table.css'

// Display helpers shared by the page. They are not part of the examples.
const STATUS: Record<Status, { label: string; icon: string }> = {
  shared: { label: 'Shared', icon: 'group' },
  private: { label: 'Private', icon: 'lock' },
  syncing: { label: 'Syncing', icon: 'sync' },
  archived: { label: 'Archived', icon: 'inventory_2' },
}

function StatusLabel({ status }: { status: Status }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <Icon name={STATUS[status].icon} size={18} />
      {STATUS[status].label}
    </span>
  )
}

function filterFiles(rows: FileRow[], search: string) {
  const term = search.trim().toLowerCase()
  if (!term) return rows
  return rows.filter((row) => row.name.toLowerCase().includes(term) || row.folder.includes(term))
}

function formatSize(kb: number) {
  return `${kb.toLocaleString()} KB`
}

interface PreviewRow {
  id: string
  name: string
  status: string
  size: string
}

const PREVIEW_ROWS: PreviewRow[] = [
  { id: 'budget', name: 'Budget.xlsx', status: 'Shared', size: '1,240 KB' },
  { id: 'beach', name: 'Beach day.png', status: 'Private', size: '860 KB' },
  { id: 'notes', name: 'Notes.docx', status: 'Syncing', size: '32 KB' },
]

const PREVIEW_COLUMNS: DataTableColumn<PreviewRow>[] = [
  { key: 'name', header: 'Name', cell: (row) => row.name },
  { key: 'status', header: 'Status', cell: (row) => row.status },
  { key: 'size', header: 'Size', numeric: true, sortable: true, cell: (row) => row.size },
]

const PLAYGROUND_COLUMNS: DataTableColumn<FileRow>[] = [
  { key: 'name', header: 'Name', sortable: true, cell: (row) => row.name },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    cell: (row) => <StatusLabel status={row.status} />,
  },
  { key: 'owner', header: 'Owner', hideBelow: 960, cell: (row) => row.owner },
  {
    key: 'size',
    header: 'Size',
    numeric: true,
    sortable: true,
    hideBelow: 600,
    cell: (row) => formatSize(row.size),
  },
  {
    key: 'modified',
    header: 'Modified',
    sortable: true,
    hideBelow: 720,
    cell: (row) => row.modified,
  },
]

const TOOLBAR_CODE = `
    <TextField
      variant="outlined"
      aria-label="Filter files"
      placeholder="Filter by name or folder"
      leadingIcon="filter_list"
      value={search}
      onValueChange={setSearch}
      onClear={() => setSearch('')}
    />
  `

const BULK_CODE = `
    <Button variant="text" icon="share" onClick={shareSelected}>
      Share
    </Button>
  `

export const doc = defineDoc({
  slug: 'data-table',
  name: 'Data table',
  group: 'data',
  icon: 'table_chart',
  order: 1,
  summary:
    'Data tables show records in rows and columns, with sorting, selection and bulk actions. The data source sorts, filters and pages with a cursor, so the table stays fast for any number of records.',
  imports: ['DataTable', 'Button', 'Icon', 'IconButton', 'TextField', 'useSnackbar'],
  preview: () => (
    <DataTable
      className="dt-preview"
      aria-label="Files"
      density="compact"
      columns={PREVIEW_COLUMNS}
      rows={PREVIEW_ROWS}
      getRowId={(row) => row.id}
      sort={{ key: 'size', direction: 'desc' }}
      onSortChange={() => {}}
    />
  ),
  playground: {
    stage: 'fill',
    controls: {
      density: { type: 'select', options: ['comfortable', 'compact'], default: 'comfortable' },
      selection: { type: 'boolean', default: true },
      bulkActions: { type: 'boolean', default: true, label: 'Bulk actions' },
      sorting: { type: 'boolean', default: true },
      toolbar: { type: 'boolean', default: true, label: 'Toolbar filter' },
      rowClick: { type: 'boolean', default: false, label: 'Row click' },
      pagination: { type: 'boolean', default: true },
      stickyHeader: { type: 'boolean', default: true, label: 'Sticky header' },
      loading: { type: 'boolean', default: false },
      empty: { type: 'boolean', default: false, label: 'No rows' },
      maxHeight: {
        type: 'number',
        default: 400,
        min: 240,
        max: 640,
        step: 40,
        label: 'Max height',
      },
    },
    render: function DataTablePlayground(v) {
      const snackbar = useSnackbar()
      const [search, setSearch] = useState('')
      const [sort, setSort] = useState<SortState | null>({ key: 'modified', direction: 'desc' })
      const [selection, setSelection] = useState<string[]>([])
      const [pageSize, setPageSize] = useState(10)
      const [cursor, setCursor] = useState(0)
      const matches = useMemo(
        () => sortRows(filterFiles(FILES, v.toolbar ? search : ''), v.sorting ? sort : null),
        [search, sort, v.toolbar, v.sorting],
      )
      const total = v.empty ? 0 : matches.length
      const start = v.pagination ? cursor : 0
      const rows = v.empty ? [] : matches.slice(start, start + pageSize)
      const share = () => {
        snackbar.show(selection.length === 1 ? 'Shared 1 file' : `Shared ${selection.length} files`)
        setSelection([])
      }
      return (
        <DataTable
          aria-label="Files"
          columns={PLAYGROUND_COLUMNS}
          rows={rows}
          getRowId={(row) => row.id}
          sort={v.sorting ? sort : undefined}
          onSortChange={
            v.sorting
              ? (next) => {
                  setSort(next)
                  setCursor(0)
                }
              : undefined
          }
          selection={v.selection ? selection : undefined}
          onSelectionChange={v.selection ? setSelection : undefined}
          bulkActions={
            v.selection && v.bulkActions ? (
              <Button variant="text" icon="share" onClick={share}>
                Share
              </Button>
            ) : undefined
          }
          onRowClick={v.rowClick ? (row) => snackbar.show(`Open “${row.name}”`) : undefined}
          toolbar={
            v.toolbar ? (
              <TextField
                variant="outlined"
                aria-label="Filter files"
                placeholder="Filter by name or folder"
                leadingIcon="filter_list"
                value={search}
                className="g-table-filter"
                onValueChange={(text) => {
                  setSearch(text)
                  setCursor(0)
                }}
                onClear={() => {
                  setSearch('')
                  setCursor(0)
                }}
                style={{ flex: '1 1 240px', maxWidth: 420 }}
              />
            ) : undefined
          }
          pagination={
            v.pagination
              ? {
                  pageSize,
                  pageSizeOptions: [10, 25, 50],
                  onPageSizeChange: (size) => {
                    setPageSize(size)
                    setCursor(0)
                  },
                  hasPrevious: cursor > 0,
                  hasNext: cursor + pageSize < total,
                  onPrevious: () => setCursor(Math.max(0, cursor - pageSize)),
                  onNext: () => setCursor(cursor + pageSize),
                  label: total
                    ? `${cursor + 1}–${Math.min(cursor + pageSize, total)} of ${total.toLocaleString()}`
                    : undefined,
                }
              : undefined
          }
          density={v.density}
          stickyHeader={v.stickyHeader}
          loading={v.loading}
          maxHeight={v.maxHeight}
          empty="No files match the filter"
        />
      )
    },
    code: (v, { jsx, changed }) => {
      const state = [
        v.sorting &&
          "const [sort, setSort] = useState<SortState | null>({ key: 'modified', direction: 'desc' })",
        v.selection && 'const [selection, setSelection] = useState<string[]>([])',
        v.toolbar && "const [search, setSearch] = useState('')",
      ].filter(Boolean)
      const table = jsx('DataTable', {
        'aria-label': 'Files',
        columns: raw('columns'),
        rows: raw(v.empty ? '[]' : 'rows'),
        getRowId: raw('(row) => row.id'),
        sort: v.sorting ? raw('sort') : undefined,
        onSortChange: v.sorting ? raw('setSort') : undefined,
        selection: v.selection ? raw('selection') : undefined,
        onSelectionChange: v.selection ? raw('setSelection') : undefined,
        bulkActions: v.selection && v.bulkActions ? raw(BULK_CODE) : undefined,
        onRowClick: v.rowClick ? raw('(row) => openFile(row)') : undefined,
        toolbar: v.toolbar ? raw(TOOLBAR_CODE) : undefined,
        pagination: v.pagination ? raw('pagination') : undefined,
        ...changed(v, ['density', 'stickyHeader', 'loading']),
        maxHeight: v.maxHeight,
        empty: 'No files match the filter',
      })
      return [
        '// columns, rows and pagination come from your data source (see the examples).',
        ...state,
        '',
        table,
      ].join('\n')
    },
  },
  api: [
    {
      name: 'DataTable',
      interfaces: ['DataTableProps'],
      inherits:
        'Generic over the row type: `DataTable<FileRow>` takes `FileRow[]` rows and `DataTableColumn<FileRow>[]` columns.',
    },
    { name: 'DataTableColumn', interfaces: ['DataTableColumn'] },
    { name: 'KeysetPagination', interfaces: ['KeysetPagination'] },
    { name: 'SortState', interfaces: ['SortState'] },
  ],
  guidelines: [
    'Sort, filter and page on the server. The table shows the rows it gets, so it stays fast with any number of records.',
    'Put the most important column first, and hide low-priority columns on narrow windows with `hideBelow`.',
    'Offer only bulk actions that apply to every selected row, and say how many rows changed when the action ends.',
    'Use `onRowClick` to open a record. Clicks on checkboxes, buttons and links in a row do not open it.',
  ],
})

/**
 * Sortable columns
 * `sortable` columns get a sort button in the header. Sorting is controlled: each click goes from ascending to descending to off, and you sort the rows. This table sorts on the client; large tables sort on the server.
 */
export function ExampleSorting() {
  const [sort, setSort] = useState<SortState | null>({ key: 'size', direction: 'desc' })
  const rows = useMemo(() => sortRows(FILES.slice(0, 8), sort), [sort])
  return (
    <DataTable
      aria-label="Largest files"
      columns={SORT_COLUMNS}
      rows={rows}
      getRowId={(row) => row.id}
      sort={sort}
      onSortChange={setSort}
    />
  )
}

const SORT_COLUMNS: DataTableColumn<FileRow>[] = [
  { key: 'name', header: 'Name', sortable: true, cell: (row) => row.name },
  { key: 'kind', header: 'Type', cell: (row) => row.kind },
  {
    key: 'size',
    header: 'Size',
    sortable: true,
    numeric: true,
    cell: (row) => formatSize(row.size),
  },
  {
    key: 'modified',
    header: 'Modified',
    sortable: true,
    hideBelow: 600,
    cell: (row) => row.modified,
  },
]

function sortRows(rows: FileRow[], sort: SortState | null) {
  if (!sort) return rows
  const key = sort.key as keyof FileRow
  const direction = sort.direction === 'asc' ? 1 : -1
  return [...rows].sort((a, b) => (a[key] < b[key] ? -direction : a[key] > b[key] ? direction : 0))
}

/**
 * Selection and bulk actions
 * `selection` adds a checkbox column. While rows are selected, the toolbar shows the count and `bulkActions`. Here the actions share or archive the selected files.
 */
export function ExampleBulkActions() {
  const snackbar = useSnackbar()
  const [rows, setRows] = useState(() => FILES.slice(0, 6))
  const [selection, setSelection] = useState<string[]>([])
  const update = (status: Status, done: string) => {
    setRows((list) => list.map((row) => (selection.includes(row.id) ? { ...row, status } : row)))
    snackbar.show(selection.length === 1 ? `${done} 1 file` : `${done} ${selection.length} files`)
    setSelection([])
  }
  return (
    <DataTable
      aria-label="Files"
      columns={BULK_COLUMNS}
      rows={rows}
      getRowId={(row) => row.id}
      selection={selection}
      onSelectionChange={setSelection}
      toolbar={<span className="m3-typescale-title-medium">Files</span>}
      bulkActions={
        <>
          <Button variant="text" icon="share" onClick={() => update('shared', 'Shared')}>
            Share
          </Button>
          <IconButton
            icon="archive"
            label="Archive"
            tooltip
            onClick={() => update('archived', 'Archived')}
          />
        </>
      }
    />
  )
}

const BULK_COLUMNS: DataTableColumn<FileRow>[] = [
  { key: 'name', header: 'Name', cell: (row) => row.name },
  { key: 'status', header: 'Status', cell: (row) => <StatusLabel status={row.status} /> },
  { key: 'owner', header: 'Owner', hideBelow: 600, cell: (row) => row.owner },
]

/**
 * Server data with keyset pagination
 * The server filters, sorts and pages. The table shows one page and only knows if there is a previous or a next page, so it stays fast with any number of rows. Keep the cursors of the pages you visited to go back, and start from the first page when the filter, the sort or the page size changes. Make the window narrow to see `hideBelow` hide columns.
 */
export function ExampleServerData() {
  const snackbar = useSnackbar()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortState | null>({ key: 'modified', direction: 'desc' })
  const [pageSize, setPageSize] = useState(25)
  // Cursors of the visited pages; the last one is the current page.
  const [cursors, setCursors] = useState([0])
  const [page, setPage] = useState<ServerPage>({ rows: [], total: 0, cursor: 0, nextCursor: null })
  const [loading, setLoading] = useState(true)
  const [selection, setSelection] = useState<string[]>([])
  const cursor = cursors.at(-1) ?? 0

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    // Wait until typing stops, and ignore answers to older requests.
    const timer = window.setTimeout(async () => {
      const query = { search, sort: sort as KeysetQuery['sort'], pageSize, cursor }
      const result = await fetchFiles(query)
      if (cancelled) return
      // The mock API uses a row index as its cursor; a real API returns the next cursor.
      const next = cursor + result.rows.length
      setPage({ ...result, cursor, nextCursor: next < result.total ? next : null })
      setLoading(false)
    }, 200)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [search, sort, pageSize, cursor])

  const restart = () => setCursors([0])
  const share = () => {
    snackbar.show(selection.length === 1 ? 'Shared 1 file' : `Shared ${selection.length} files`)
    setSelection([])
  }

  return (
    <DataTable
      aria-label="Files"
      columns={SERVER_COLUMNS}
      rows={page.rows}
      getRowId={(row) => row.id}
      loading={loading}
      sort={sort}
      onSortChange={(next) => {
        setSort(next)
        restart()
      }}
      selection={selection}
      onSelectionChange={setSelection}
      onRowClick={(row) => snackbar.show(`Open “${row.name}”`)}
      maxHeight={480}
      empty="No files match the filter"
      toolbar={
        <>
          <TextField
            variant="outlined"
            aria-label="Filter files"
            placeholder="Filter by name or folder"
            leadingIcon="filter_list"
            value={search}
            className="g-table-filter"
            onValueChange={(text) => {
              setSearch(text)
              restart()
            }}
            onClear={() => {
              setSearch('')
              restart()
            }}
            style={{ flex: '1 1 240px', maxWidth: 420 }}
          />
          <span className="g-muted" style={{ marginInlineStart: 'auto' }}>
            {page.total.toLocaleString()} files
          </span>
        </>
      }
      bulkActions={
        <Button variant="text" icon="share" onClick={share}>
          Share
        </Button>
      }
      pagination={{
        pageSize,
        pageSizeOptions: [10, 25, 50, 100],
        onPageSizeChange: (size) => {
          setPageSize(size)
          restart()
        },
        hasPrevious: cursors.length > 1,
        hasNext: page.nextCursor !== null,
        onPrevious: () => setCursors(cursors.slice(0, -1)),
        onNext: () => {
          if (page.nextCursor !== null) setCursors([...cursors, page.nextCursor])
        },
        label: page.rows.length
          ? `${page.cursor + 1}–${page.cursor + page.rows.length} of ${page.total.toLocaleString()}`
          : undefined,
      }}
    />
  )
}

interface ServerPage {
  rows: FileRow[]
  total: number
  cursor: number
  nextCursor: number | null
}

const SERVER_COLUMNS: DataTableColumn<FileRow>[] = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
    cell: (row) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{row.name}</span>
        <span className="g-muted m3-typescale-body-small">{row.folder}</span>
      </div>
    ),
  },
  { key: 'kind', header: 'Type', sortable: true, hideBelow: 720, cell: (row) => row.kind },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    cell: (row) => <StatusLabel status={row.status} />,
  },
  { key: 'owner', header: 'Owner', hideBelow: 960, cell: (row) => row.owner },
  {
    key: 'size',
    header: 'Size',
    numeric: true,
    sortable: true,
    hideBelow: 600,
    cell: (row) => formatSize(row.size),
  },
  {
    key: 'modified',
    header: 'Modified',
    sortable: true,
    hideBelow: 840,
    cell: (row) => row.modified,
  },
]

/**
 * Compact density and a fixed height
 * `density="compact"` makes rows 40px high. With `maxHeight`, the rows scroll inside the table and the header stays in view.
 */
export function ExampleCompact() {
  return (
    <DataTable
      aria-label="Recent changes"
      density="compact"
      maxHeight={320}
      columns={CHANGE_COLUMNS}
      rows={FILES.slice(0, 40)}
      getRowId={(row) => row.id}
    />
  )
}

const CHANGE_COLUMNS: DataTableColumn<FileRow>[] = [
  { key: 'name', header: 'File', cell: (row) => row.name },
  { key: 'owner', header: 'Changed by', hideBelow: 600, cell: (row) => row.owner },
  { key: 'modified', header: 'Date', width: 120, cell: (row) => row.modified },
]

/**
 * Loading and empty states
 * While `loading` is true, a progress bar shows under the header and the page buttons are off; keep the old rows in view until the new ones arrive. With no rows, the table shows `empty`. Give people a next step there.
 */
export function ExampleStates() {
  return (
    <div className="g-stack" style={{ width: '100%' }}>
      <DataTable
        aria-label="Files, loading"
        loading
        columns={STATE_COLUMNS}
        rows={FILES.slice(0, 3)}
        getRowId={(row) => row.id}
        pagination={{
          pageSize: 3,
          hasPrevious: false,
          hasNext: true,
          onPrevious: () => {},
          onNext: () => {},
          label: '1–3 of 1,000',
        }}
      />
      <DataTable
        aria-label="Files, empty"
        columns={STATE_COLUMNS}
        rows={[]}
        getRowId={(row) => row.id}
        empty={
          <div className="g-stack" style={{ alignItems: 'center' }}>
            <Icon name="folder_open" size={40} />
            <span>No files in this folder yet</span>
            <Button variant="tonal" icon="upload">
              Upload files
            </Button>
          </div>
        }
      />
    </div>
  )
}

const STATE_COLUMNS: DataTableColumn<FileRow>[] = [
  { key: 'name', header: 'Name', cell: (row) => row.name },
  { key: 'status', header: 'Status', cell: (row) => <StatusLabel status={row.status} /> },
  { key: 'modified', header: 'Modified', hideBelow: 600, cell: (row) => row.modified },
]
