import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  Card,
  CardActionArea,
  ChipSet,
  InputChip,
  ListItem,
  Menu,
  MenuItem,
  NavigationRail,
  RichTooltip,
  Search,
  Select,
  Slider,
  SnackbarProvider,
  SnackbarSurface,
  SubMenu,
  Switch,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  useSnackbar,
} from '../src'

function nextFrame() {
  return act(() => new Promise<void>((resolve) => requestAnimationFrame(() => resolve())))
}

describe('Select keyboard edges', () => {
  const options = [
    { value: 'a', label: 'Alpha', disabled: true },
    { value: 'b', label: 'Beta' },
    { value: 'c', label: 'Gamma' },
    { value: 'd', label: 'Delta', disabled: true },
  ]

  it('moves Home and End to the first and last enabled options', async () => {
    render(<Select label="Pick" options={options} />)
    const combo = screen.getByRole('combobox', { name: 'Pick' })
    combo.focus()
    await userEvent.keyboard('{ArrowDown}{End}')
    expect(combo.getAttribute('aria-activedescendant')).toMatch(/option-2$/)
    await userEvent.keyboard('{Home}')
    expect(combo.getAttribute('aria-activedescendant')).toMatch(/option-1$/)
  })

  it('skips disabled options in typeahead', async () => {
    render(<Select label="Pick" options={options} />)
    const combo = screen.getByRole('combobox', { name: 'Pick' })
    combo.focus()
    await userEvent.keyboard('{ArrowDown}d')
    expect(combo.getAttribute('aria-activedescendant')).toMatch(/option-1$/)
  })

  it('names the listbox from aria-label when there is no visible label', async () => {
    render(<Select aria-label="Status" options={options} />)
    screen.getByRole('combobox', { name: 'Status' }).focus()
    await userEvent.keyboard('{ArrowDown}')
    expect(screen.getByRole('listbox', { name: 'Status' })).toBeInTheDocument()
  })
})

describe('TextField clear', () => {
  it('empties an uncontrolled field and reports the change', async () => {
    const onValueChange = vi.fn()
    render(
      <TextField label="Q" defaultValue="hello" onClear={() => {}} onValueChange={onValueChange} />,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Clear' }))
    expect(screen.getByLabelText('Q')).toHaveValue('')
    expect(onValueChange).toHaveBeenCalledWith('')
  })
})

describe('Slider', () => {
  it('does not commit when a key leaves the value unchanged', () => {
    const onChangeEnd = vi.fn()
    render(<Slider aria-label="V" defaultValue={100} onChangeEnd={onChangeEnd} />)
    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' })
    expect(onChangeEnd).not.toHaveBeenCalled()
  })

  it('places stop indicators on the real stops', () => {
    const { container } = render(<Slider aria-label="V" min={0} max={10} step={3} stops />)
    const positions = [...container.querySelectorAll<HTMLElement>('.m3-slider__stop')].map((t) =>
      t.style.getPropertyValue('--_at'),
    )
    expect(positions).toEqual(['0%', '30%', '60%', '90%'])
  })

  it('runs the active track from the middle in a centered slider', () => {
    const { container } = render(<Slider aria-label="Balance" min={-10} max={10} centered />)
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '0')
    const active = container.querySelector<HTMLElement>('.m3-slider__segment[data-kind="active"]')!
    expect(active.style.getPropertyValue('--_from')).toBe('50%')
  })

  it('grows upwards when vertical', () => {
    const onChange = vi.fn()
    render(<Slider aria-label="Volume" orientation="vertical" size="md" onChange={onChange} />)
    const handle = screen.getByRole('slider')
    expect(handle).toHaveAttribute('aria-orientation', 'vertical')
    fireEvent.keyDown(handle, { key: 'ArrowUp' })
    expect(onChange).toHaveBeenLastCalledWith(1)
  })
})

describe('ChipSet', () => {
  it('skips a disabled input chip with arrow keys', async () => {
    render(
      <ChipSet aria-label="Tags">
        <InputChip label="one" onRemove={() => {}} />
        <InputChip label="two" disabled />
        <InputChip label="three" />
      </ChipSet>,
    )
    screen.getByRole('button', { name: 'Remove one' }).focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByText('three').closest('[data-chip-focusable]')).toHaveFocus()
  })
})

describe('SubMenu', () => {
  function Nested() {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    return (
      <>
        <button type="button" ref={setAnchor}>
          anchor
        </button>
        <Menu open anchor={anchor} onClose={() => {}}>
          <SubMenu label="Share">
            <MenuItem>Link</MenuItem>
          </SubMenu>
          <SubMenu label="Export">
            <MenuItem>JSON</MenuItem>
          </SubMenu>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </>
    )
  }

  it('keeps one submenu open and closes it when another item is hovered', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    render(<Nested />)
    const share = screen.getByRole('menuitem', { name: 'Share' })
    const exportItem = screen.getByRole('menuitem', { name: 'Export' })
    fireEvent.pointerEnter(share)
    await act(() => vi.advanceTimersByTimeAsync(250))
    expect(share).toHaveAttribute('aria-expanded', 'true')
    // Hover opens without moving keyboard focus into the submenu.
    expect(screen.getByRole('menuitem', { name: 'Link' })).not.toHaveFocus()
    fireEvent.pointerEnter(exportItem)
    await act(() => vi.advanceTimersByTimeAsync(250))
    expect(exportItem).toHaveAttribute('aria-expanded', 'true')
    expect(share).toHaveAttribute('aria-expanded', 'false')
    fireEvent.pointerEnter(screen.getByRole('menuitem', { name: 'Delete' }))
    await act(() => vi.advanceTimersByTimeAsync(350))
    expect(exportItem).toHaveAttribute('aria-expanded', 'false')
    vi.useRealTimers()
  })
})

describe('RichTooltip', () => {
  it('reports hover changes through onOpenChange and follows a controlled open', async () => {
    function Controlled() {
      const [open, setOpen] = useState(false)
      return (
        <RichTooltip open={open} onOpenChange={setOpen} supportingText="Details" enterDelay={0}>
          <button type="button">Info</button>
        </RichTooltip>
      )
    }
    render(<Controlled />)
    fireEvent.pointerEnter(screen.getByRole('button', { name: 'Info' }), { pointerType: 'mouse' })
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Details')
  })
})

describe('Snackbar', () => {
  it('calls action.onClick on a standalone surface', async () => {
    const onClick = vi.fn()
    render(<SnackbarSurface message="Saved" action={{ label: 'Undo', onClick }} />)
    await userEvent.click(screen.getByRole('button', { name: 'Undo' }))
    expect(onClick).toHaveBeenCalled()
  })

  it('animates out and reports onClose when dismissed', async () => {
    const onClose = vi.fn()
    function Trigger() {
      const snackbar = useSnackbar()
      return (
        <>
          <button
            type="button"
            onClick={() => snackbar.show({ message: 'Hello', duration: null, onClose })}
          >
            show
          </button>
          <button type="button" onClick={() => snackbar.dismiss()}>
            dismiss
          </button>
        </>
      )
    }
    render(
      <SnackbarProvider>
        <Trigger />
      </SnackbarProvider>,
    )
    await userEvent.click(screen.getByText('show'))
    // A synchronous click, so the exit transition has certainly not finished at the next line.
    fireEvent.click(screen.getByText('dismiss'))
    // Still on screen during the exit transition, then removed.
    expect(screen.getByText('Hello').closest('.m3-snackbar')).toHaveAttribute(
      'data-state',
      'closed',
    )
    await waitFor(() => expect(screen.queryByText('Hello')).not.toBeInTheDocument())
    await waitFor(() => expect(onClose).toHaveBeenCalledWith('dismiss'))
  })
})

describe('Card disabled', () => {
  it('disables the action area and controls inside', () => {
    render(
      <Card disabled>
        <CardActionArea onClick={() => {}}>Open</CardActionArea>
        <button type="button">Share</button>
      </Card>,
    )
    expect(screen.getByRole('button', { name: 'Open' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Share' })).toBeDisabled()
  })
})

describe('ListItem', () => {
  it('does not toggle the control when a label row is disabled', async () => {
    render(
      <ul>
        <ListItem asLabel disabled headline="Sync" trailing={<Switch aria-label="Sync" />} />
      </ul>,
    )
    await userEvent.click(screen.getByText('Sync'))
    expect(screen.getByRole('switch', { name: 'Sync' })).not.toBeChecked()
  })

  it('exposes the selected state of action rows', () => {
    render(
      <ul>
        <ListItem headline="Inbox" selected onClick={() => {}} />
      </ul>,
    )
    expect(screen.getByRole('button', { name: 'Inbox' })).toHaveAttribute('aria-current', 'true')
  })
})

describe('NavigationRail', () => {
  it('marks a destination current through activeFor in the expanded rail sections', () => {
    render(
      <NavigationRail
        aria-label="Site"
        value="/news/2026"
        expanded
        items={[{ key: '/', label: 'Home', icon: 'home' }]}
        sections={[
          {
            headline: 'Content',
            items: [{ key: '/news', label: 'News', icon: 'news', activeFor: ['/news/2026'] }],
          },
        ]}
      />,
    )
    expect(screen.getByRole('button', { name: 'News' })).toHaveAttribute('aria-current', 'page')
    expect(screen.queryByRole('button', { name: 'Home' })).not.toBeInTheDocument()
  })
})

describe('Toolbar', () => {
  it('shows again when hideOnScroll is turned off', () => {
    const target = document.createElement('div')
    const { container, rerender } = render(
      <Toolbar hideOnScroll scrollTarget={target}>
        x
      </Toolbar>,
    )
    const bar = container.querySelector('.m3-toolbar')!
    rerender(
      <Toolbar hideOnScroll={false} scrollTarget={target}>
        x
      </Toolbar>,
    )
    expect(bar).not.toHaveAttribute('data-hidden')
  })
})

describe('Search', () => {
  it('does not claim "No results" while loading, and only references an existing list', async () => {
    render(<Search placeholder="Find" suggestions={[]} loading />)
    const input = screen.getByRole('combobox', { name: 'Find' })
    await userEvent.click(input)
    expect(screen.queryByText('No results')).not.toBeInTheDocument()
    expect(input).not.toHaveAttribute('aria-controls')
  })
})

describe('Tab badges', () => {
  it('give screen readers a badge label', () => {
    render(
      <Tabs aria-label="File" defaultValue="comments">
        <Tab value="comments" label="Comments" badge={2} badgeLabel="2 new" />
      </Tabs>,
    )
    expect(screen.getByRole('tab', { name: /Comments.*2 new/ })).toBeInTheDocument()
  })
})

void nextFrame
