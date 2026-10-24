import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { DataTable, type SortState, type TreeLoader, TreeView } from '../src'

interface Page {
  id: string
  title: string
  views: number
}

const rows: Page[] = [
  { id: '1', title: 'Home', views: 120 },
  { id: '2', title: 'About', views: 40 },
  { id: '3', title: 'Contact', views: 12 },
]

const columns = [
  { key: 'title', header: 'Title', cell: (r: Page) => r.title, sortable: true },
  { key: 'views', header: 'Views', cell: (r: Page) => r.views, numeric: true, sortable: true },
]

describe('DataTable', () => {
  it('selects rows and all rows on the page', async () => {
    function Example() {
      const [selection, setSelection] = useState<string[]>([])
      return (
        <DataTable
          aria-label="Pages"
          columns={columns}
          rows={rows}
          getRowId={(r) => r.id}
          selection={selection}
          onSelectionChange={setSelection}
          bulkActions={<button type="button">Share</button>}
        />
      )
    }
    render(<Example />)
    const table = screen.getByRole('table', { name: 'Pages' })
    const [selectAll, first] = within(table).getAllByRole('checkbox')
    await userEvent.click(first!)
    expect(screen.getByText('1 selected')).toBeInTheDocument()
    expect(selectAll).toHaveProperty('indeterminate', true)
    await userEvent.click(selectAll!)
    expect(screen.getByText('3 selected')).toBeInTheDocument()
    await userEvent.click(selectAll!)
    expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
  })

  it('cycles sorting ascending, descending, none', async () => {
    const onSortChange = vi.fn()
    const { rerender } = render(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        sort={null}
        onSortChange={onSortChange}
      />,
    )
    await userEvent.click(screen.getByRole('button', { name: /Views/ }))
    expect(onSortChange).toHaveBeenLastCalledWith({ key: 'views', direction: 'asc' })
    const sort: SortState = { key: 'views', direction: 'asc' }
    rerender(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        sort={sort}
        onSortChange={onSortChange}
      />,
    )
    expect(screen.getByRole('columnheader', { name: /Views/ })).toHaveAttribute(
      'aria-sort',
      'ascending',
    )
    await userEvent.click(screen.getByRole('button', { name: /Views/ }))
    expect(onSortChange).toHaveBeenLastCalledWith({ key: 'views', direction: 'desc' })
  })

  it('opens rows by click or Enter but not when a checkbox is clicked', async () => {
    const onRowClick = vi.fn()
    render(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        selection={[]}
        onSelectionChange={() => {}}
        onRowClick={onRowClick}
      />,
    )
    await userEvent.click(screen.getByText('About'))
    expect(onRowClick).toHaveBeenLastCalledWith(rows[1])
    await userEvent.click(screen.getAllByRole('checkbox', { name: 'Select row' })[0]!)
    expect(onRowClick).toHaveBeenCalledTimes(1)
    const row = screen.getByText('Contact').closest('tr')!
    row.focus()
    await userEvent.keyboard('{Enter}')
    expect(onRowClick).toHaveBeenLastCalledWith(rows[2])
  })

  it('pages with keyset cursors', async () => {
    const onNext = vi.fn()
    render(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        pagination={{
          pageSize: 50,
          hasPrevious: false,
          hasNext: true,
          onPrevious: () => {},
          onNext,
          label: '1–3',
        }}
      />,
    )
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    await userEvent.click(screen.getByRole('button', { name: 'Next page' }))
    expect(onNext).toHaveBeenCalled()
    expect(screen.getByText('1–3')).toBeInTheDocument()
  })

  it('shows the empty state', () => {
    render(<DataTable columns={columns} rows={[]} getRowId={(r) => r.id} empty="No pages yet" />)
    expect(screen.getByText('No pages yet')).toBeInTheDocument()
  })

  it('renders action buttons and handles actions without triggering row click', async () => {
    const onRowClick = vi.fn()
    const onEdit = vi.fn()
    const onDelete = vi.fn()
    render(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        onRowClick={onRowClick}
        rowActions={(row) => (
          <>
            <button type="button" onClick={() => onEdit(row.id)}>
              Edit
            </button>
            <button type="button" onClick={() => onDelete(row.id)}>
              Delete
            </button>
          </>
        )}
      />,
    )
    expect(screen.getByRole('columnheader', { name: 'Actions' })).toBeInTheDocument()
    const editButtons = screen.getAllByRole('button', { name: 'Edit' })
    expect(editButtons).toHaveLength(3)
    await userEvent.click(editButtons[0]!)
    expect(onEdit).toHaveBeenCalledWith('1')
    expect(onRowClick).not.toHaveBeenCalled()
  })

  it('supports stickyActions and actionsVisibility hover modes', () => {
    const { container } = render(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        stickyActions
        actionsVisibility="hover"
        actionsHeader="Quick Actions"
        actionsWidth={140}
        rowActions={(row) => <button type="button">Action {row.id}</button>}
      />,
    )
    expect(container.querySelector('.m3-data-table')).toHaveAttribute(
      'data-actions-visibility',
      'hover',
    )
    const actionHeader = screen.getByRole('columnheader', { name: 'Quick Actions' })
    expect(actionHeader).toHaveAttribute('data-sticky-end', '')
    expect(actionHeader).toHaveAttribute('data-align', 'end')
    expect(actionHeader).toHaveStyle({ width: '140px' })
    const actionCells = container.querySelectorAll('.m3-data-table__actions')
    expect(actionCells[0]).toHaveAttribute('data-sticky-end', '')
    expect(actionCells[0]).toHaveAttribute('data-align', 'end')
  })

  it('supports stickyHeader with stickyActions', () => {
    const { container } = render(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        stickyHeader
        stickyActions
        rowActions={(row) => <button type="button">Action {row.id}</button>}
      />,
    )
    const table = container.querySelector('table')
    expect(table).toHaveAttribute('data-sticky', '')
    const actionHeader = screen.getByRole('columnheader', { name: 'Actions' })
    expect(actionHeader).toHaveAttribute('data-sticky-end', '')
    expect(actionHeader).toHaveAttribute('data-align', 'end')
    const actionCells = container.querySelectorAll('.m3-data-table__actions')
    expect(actionCells[0]).toHaveAttribute('data-sticky-end', '')
    expect(actionCells[0]).toHaveAttribute('data-align', 'end')
  })

  it('supports mobile swipe-to-reveal gestures', () => {
    const { container } = render(
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        swipeToReveal
        rowActions={(row) => <button type="button">Delete {row.id}</button>}
      />,
    )
    const table = container.querySelector('.m3-data-table')!
    expect(table).toHaveAttribute('data-swipe-to-reveal', '')
    const rowElements = container.querySelectorAll('tbody tr')
    expect(rowElements[0]).toHaveAttribute('data-swipe-row', '')

    // Simulate touch swipe left
    fireEvent.touchStart(rowElements[0]!, {
      touches: [{ clientX: 200, clientY: 50 }],
    })
    fireEvent.touchMove(rowElements[0]!, {
      touches: [{ clientX: 100, clientY: 50 }],
    })
    fireEvent.touchEnd(rowElements[0]!)

    expect(rowElements[0]).toHaveAttribute('data-swiped', '')

    // Clicking a swiped row closes it
    fireEvent.click(rowElements[0]!)
    expect(rowElements[0]).not.toHaveAttribute('data-swiped')
  })
})

describe('TreeView', () => {
  // A 3-level tree: root → section-N → page-N-M; sections page their children 2 at a time.
  const loader: TreeLoader = async (parentId, cursor) => {
    if (parentId === null) {
      return {
        items: [
          { id: 's1', label: 'News', hasChildren: true },
          { id: 's2', label: 'Products', hasChildren: true },
          { id: 's3', label: 'About', hasChildren: false },
        ],
      }
    }
    const start = cursor ? Number(cursor) : 0
    const all = [1, 2, 3].map((n) => ({
      id: `${parentId}-p${n}`,
      label: `${parentId} page ${n}`,
      hasChildren: false,
    }))
    const items = all.slice(start, start + 2)
    return { items, nextCursor: start + 2 < all.length ? String(start + 2) : null }
  }

  it('loads lazily and navigates with the keyboard', async () => {
    const onSelect = vi.fn()
    render(<TreeView aria-label="Content" loadChildren={loader} onSelect={onSelect} />)
    const tree = screen.getByRole('tree', { name: 'Content' })
    await screen.findByRole('treeitem', { name: 'News' })
    tree.focus()
    const news = screen.getByRole('treeitem', { name: 'News' })
    expect(tree).toHaveAttribute('aria-activedescendant', news.id)
    expect(news).toHaveAttribute('aria-expanded', 'false')
    expect(news).toHaveAttribute('aria-level', '1')

    await userEvent.keyboard('{ArrowRight}')
    await screen.findByRole('treeitem', { name: 's1 page 1' })
    expect(news).toHaveAttribute('aria-expanded', 'true')
    // The third child loads when the "load more" row becomes visible.
    await screen.findByRole('treeitem', { name: 's1 page 3' })

    await userEvent.keyboard('{ArrowRight}')
    const child = screen.getByRole('treeitem', { name: 's1 page 1' })
    expect(tree).toHaveAttribute('aria-activedescendant', child.id)
    expect(child).toHaveAttribute('aria-level', '2')
    await userEvent.keyboard('{ArrowLeft}')
    expect(tree).toHaveAttribute('aria-activedescendant', news.id)
    await userEvent.keyboard('{End}{Enter}')
    expect(onSelect).toHaveBeenLastCalledWith(expect.objectContaining({ id: 's3' }))
  })

  it('moves items with Alt+Arrow keys and refreshes', async () => {
    const onMove = vi.fn(async () => {})
    const load = vi.fn(loader)
    render(<TreeView aria-label="Content" loadChildren={load} onMove={onMove} />)
    await screen.findByRole('treeitem', { name: 'News' })
    const tree = screen.getByRole('tree')
    tree.focus()
    fireEvent.keyDown(tree, { key: 'ArrowDown', altKey: true })
    await waitFor(() =>
      expect(onMove).toHaveBeenCalledWith(
        { id: 's1', targetId: 's2', position: 'after' },
        expect.objectContaining({ id: 's1' }),
      ),
    )
    await waitFor(() =>
      expect(load.mock.calls.filter(([parent]) => parent === null)).toHaveLength(2),
    )
    await act(async () => {})
    expect(document.querySelector('.m3-tree [aria-live]')).toHaveTextContent(
      'Moved News ↓ Products',
    )
  })

  it('does not drop an item into itself', async () => {
    const onMove = vi.fn()
    render(
      <TreeView
        aria-label="Content"
        loadChildren={loader}
        onMove={onMove}
        defaultExpanded={['s1']}
      />,
    )
    await screen.findByRole('treeitem', { name: 's1 page 1' })
    const tree = screen.getByRole('tree')
    tree.focus()
    // Alt+Left on a top-level item has no parent to move out of.
    fireEvent.keyDown(tree, { key: 'ArrowLeft', altKey: true })
    expect(onMove).not.toHaveBeenCalled()
  })
})
