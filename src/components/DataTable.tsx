import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode } from 'react'
import { useM3Locale } from '../i18n/locale'
import { cx } from '../utils/hooks'
import { Button, IconButton } from './Button'
import { Icon } from './Icon'
import { MenuButton, MenuItem } from './Menu'
import { LinearProgress } from './Progress'
import { Checkbox } from './Selection'

export interface DataTableColumn<T> {
  /** Unique column id; also the key sent in `SortState` when people sort by this column. */
  key: string
  /** Header content. */
  header: ReactNode
  /** Renders the cell of this column for a row. */
  cell: (row: T) => ReactNode
  /** Shows a sort control in the header; sorting is done by the data source. */
  sortable?: boolean
  /** Horizontal alignment of the header and cells. */
  align?: 'start' | 'center' | 'end'
  /** Right-aligned with tabular figures. */
  numeric?: boolean
  /** Column width, in px or any CSS length. */
  width?: string | number
  /** Hide below this window width in px (responsive tables). */
  hideBelow?: number
}

export type SortDirection = 'asc' | 'desc'

export interface SortState {
  /** `key` of the sorted column. */
  key: string
  /** `asc` or `desc`. */
  direction: SortDirection
}

/** Cursor (keyset) pagination: the table only knows whether there is a previous/next page. */
export interface KeysetPagination {
  /** Rows per page, shown in the page size menu. */
  pageSize: number
  /** Choices of the page size menu. The menu shows only with `onPageSizeChange`. */
  pageSizeOptions?: number[]
  /** Called with the page size that people pick. */
  onPageSizeChange?: (size: number) => void
  /** Enables the previous page button. */
  hasPrevious: boolean
  /** Enables the next page button. */
  hasNext: boolean
  /** Called when people go to the previous page. */
  onPrevious: () => void
  /** Called when people go to the next page. */
  onNext: () => void
  /** Range text, e.g. "1–50". Totals are optional with keyset pagination. */
  label?: ReactNode
}

export interface DataTableProps<T> {
  /** Column definitions, in display order. */
  columns: DataTableColumn<T>[]
  /** Rows of the current page. */
  rows: T[]
  /** Returns a stable, unique id for a row; used for keys and selection. */
  getRowId: (row: T) => string
  /** Ids of the selected rows, on any page. Enables the checkbox column. */
  selection?: string[]
  /** Called with the new list of selected ids. */
  onSelectionChange?: (ids: string[]) => void
  /** Current sort, shown in the column headers; `null` when not sorted. */
  sort?: SortState | null
  /** Called when people sort: ascending, then descending, then `null`. Sort buttons show only with it. */
  onSortChange?: (sort: SortState | null) => void
  /** Makes rows clickable and focusable; Enter also activates. Clicks on controls in a row are ignored. */
  onRowClick?: (row: T) => void
  /** Shows a progress bar under the header and disables the page buttons. */
  loading?: boolean
  /** Shown when there are no rows. */
  empty?: ReactNode
  /** Adds a footer with a page size menu and previous and next page buttons. */
  pagination?: KeysetPagination
  /** Content above the table: search, filters. */
  toolbar?: ReactNode
  /** Actions shown in place of the toolbar while rows are selected. */
  bulkActions?: ReactNode
  /** Row height: 52px (`comfortable`) or 40px (`compact`). */
  density?: 'comfortable' | 'compact'
  /** Keeps the header visible while the rows scroll. */
  stickyHeader?: boolean
  /** Max height of the scroll area; the header sticks inside it. */
  maxHeight?: string | number
  /** Extra class on the root element. */
  className?: string
  /** Accessible name of the table. */
  'aria-label'?: string
}

/** Data table with sticky header, row selection, server-side sorting and keyset pagination. */
export function DataTable<T>({
  columns,
  rows,
  getRowId,
  selection,
  onSelectionChange,
  sort,
  onSortChange,
  onRowClick,
  loading = false,
  empty,
  pagination,
  toolbar,
  bulkActions,
  density = 'comfortable',
  stickyHeader = true,
  maxHeight,
  className,
  'aria-label': ariaLabel,
}: DataTableProps<T>) {
  const { messages } = useM3Locale()
  const selectable = selection !== undefined
  const selected = new Set(selection)
  const pageIds = rows.map(getRowId)
  const selectedOnPage = pageIds.filter((id) => selected.has(id)).length
  const allSelected = pageIds.length > 0 && selectedOnPage === pageIds.length
  const someSelected = selectedOnPage > 0 && !allSelected

  const toggleAll = () => {
    if (!onSelectionChange) return
    if (allSelected) onSelectionChange((selection ?? []).filter((id) => !pageIds.includes(id)))
    else onSelectionChange([...new Set([...(selection ?? []), ...pageIds])])
  }
  const toggleRow = (id: string) => {
    if (!onSelectionChange) return
    onSelectionChange(
      selected.has(id) ? (selection ?? []).filter((x) => x !== id) : [...(selection ?? []), id],
    )
  }
  const nextSort = (key: string): SortState | null => {
    if (sort?.key !== key) return { key, direction: 'asc' }
    return sort.direction === 'asc' ? { key, direction: 'desc' } : null
  }
  const isInteractive = (target: EventTarget) =>
    (target as HTMLElement).closest(
      'button, a, input, label, [role="checkbox"], [role="button"], [role="menuitem"]',
    )

  const colStyle = (col: DataTableColumn<T>): CSSProperties | undefined =>
    col.width !== undefined ? { width: col.width } : undefined
  const hideClass = (col: DataTableColumn<T>) =>
    col.hideBelow ? `m3-hide-below-${col.hideBelow}` : undefined
  const responsiveCss = [...new Set(columns.map((c) => c.hideBelow).filter(Boolean))]
    .map((w) => `@media (max-width:${(w as number) - 0.02}px){.m3-hide-below-${w}{display:none}}`)
    .join('')

  return (
    <div className={cx('m3-data-table', className)} data-density={density}>
      {responsiveCss && <style>{responsiveCss}</style>}
      {(toolbar || (selectable && selected.size > 0 && bulkActions)) && (
        <div
          className="m3-data-table__toolbar"
          data-selection={selected.size > 0 && bulkActions ? '' : undefined}
        >
          {selected.size > 0 && bulkActions ? (
            <>
              <IconButton
                icon="close"
                label={messages.clear}
                onClick={() => onSelectionChange?.([])}
              />
              <span className="m3-data-table__count">{messages.selectedCount(selected.size)}</span>
              <div className="m3-data-table__bulk">{bulkActions}</div>
            </>
          ) : (
            toolbar
          )}
        </div>
      )}
      <div className="m3-data-table__scroll" style={{ maxHeight }}>
        <table
          aria-label={ariaLabel}
          aria-busy={loading || undefined}
          data-sticky={stickyHeader ? '' : undefined}
        >
          <thead>
            <tr>
              {selectable && (
                <th className="m3-data-table__select" scope="col">
                  <Checkbox
                    aria-label={messages.selectAll}
                    checked={allSelected}
                    indeterminate={someSelected}
                    disabled={rows.length === 0}
                    onChange={toggleAll}
                  />
                </th>
              )}
              {columns.map((col) => {
                const active = sort?.key === col.key
                return (
                  <th
                    key={col.key}
                    scope="col"
                    style={colStyle(col)}
                    className={hideClass(col)}
                    data-align={col.numeric ? 'end' : col.align}
                    aria-sort={
                      active
                        ? sort!.direction === 'asc'
                          ? 'ascending'
                          : 'descending'
                        : col.sortable
                          ? 'none'
                          : undefined
                    }
                  >
                    {col.sortable && onSortChange ? (
                      <button
                        type="button"
                        className="m3-data-table__sort m3-focus-ring"
                        data-active={active ? '' : undefined}
                        onClick={() => onSortChange(nextSort(col.key))}
                      >
                        {col.header}
                        <Icon
                          name={
                            active && sort!.direction === 'desc' ? 'arrow_downward' : 'arrow_upward'
                          }
                          size={18}
                          className="m3-data-table__sort-icon"
                        />
                      </button>
                    ) : (
                      col.header
                    )}
                  </th>
                )
              })}
            </tr>
            {loading && (
              <tr className="m3-data-table__progress-row">
                <th colSpan={columns.length + (selectable ? 1 : 0)}>
                  <LinearProgress thickness={3} aria-label={messages.loading} />
                </th>
              </tr>
            )}
          </thead>
          <tbody>
            {rows.map((row) => {
              const id = getRowId(row)
              const isSelected = selected.has(id)
              const onClick = onRowClick
                ? (e: MouseEvent<HTMLTableRowElement>) => {
                    if (!isInteractive(e.target)) onRowClick(row)
                  }
                : undefined
              const onKeyDown = onRowClick
                ? (e: KeyboardEvent<HTMLTableRowElement>) => {
                    if (e.key === 'Enter' && e.target === e.currentTarget) onRowClick(row)
                  }
                : undefined
              return (
                <tr
                  key={id}
                  aria-selected={selectable ? isSelected : undefined}
                  data-selected={isSelected ? '' : undefined}
                  data-clickable={onRowClick ? '' : undefined}
                  tabIndex={onRowClick ? 0 : undefined}
                  onClick={onClick}
                  onKeyDown={onKeyDown}
                >
                  {selectable && (
                    <td className="m3-data-table__select">
                      <Checkbox
                        aria-label={messages.selectRow}
                        checked={isSelected}
                        onChange={() => toggleRow(id)}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={hideClass(col)}
                      data-align={col.numeric ? 'end' : col.align}
                      data-numeric={col.numeric ? '' : undefined}
                    >
                      {col.cell(row)}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
        {rows.length === 0 && !loading && (
          <div className="m3-data-table__empty">{empty ?? messages.noResults}</div>
        )}
      </div>
      {pagination && (
        <div className="m3-data-table__footer">
          {pagination.pageSizeOptions && pagination.onPageSizeChange && (
            <div className="m3-data-table__page-size">
              <span>{messages.rowsPerPage}</span>
              <MenuButton
                placement="top-start"
                trigger={(props) => (
                  <Button {...props} variant="text" size="xs" trailingIcon="arrow_drop_down">
                    {pagination.pageSize}
                  </Button>
                )}
              >
                {pagination.pageSizeOptions.map((size) => (
                  <MenuItem
                    key={size}
                    type="radio"
                    checked={size === pagination.pageSize}
                    onSelect={() => pagination.onPageSizeChange?.(size)}
                  >
                    {size}
                  </MenuItem>
                ))}
              </MenuButton>
            </div>
          )}
          {pagination.label && <span className="m3-data-table__range">{pagination.label}</span>}
          <IconButton
            icon="chevron_left"
            label={messages.previousPage}
            disabled={!pagination.hasPrevious || loading}
            onClick={pagination.onPrevious}
            className="m3-mirror-rtl"
          />
          <IconButton
            icon="chevron_right"
            label={messages.nextPage}
            disabled={!pagination.hasNext || loading}
            onClick={pagination.onNext}
            className="m3-mirror-rtl"
          />
        </div>
      )}
    </div>
  )
}
