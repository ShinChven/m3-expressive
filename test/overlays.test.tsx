import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  Button,
  Dialog,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  SideSheet,
  SnackbarProvider,
  SubMenu,
  Tooltip,
  useSnackbar,
} from '../src'

function nextFrame() {
  return act(() => new Promise<void>((resolve) => requestAnimationFrame(() => resolve())))
}

describe('Menu', () => {
  function Example({ onSelect }: { onSelect: (v: string) => void }) {
    return (
      <MenuButton trigger={(props) => <Button {...props}>Actions</Button>}>
        <MenuItem onSelect={() => onSelect('edit')}>Edit</MenuItem>
        <MenuItem onSelect={() => onSelect('duplicate')}>Duplicate</MenuItem>
        <MenuItem disabled onSelect={() => onSelect('archive')}>
          Archive
        </MenuItem>
        <MenuItem onSelect={() => onSelect('delete')}>Delete</MenuItem>
      </MenuButton>
    )
  }

  it('opens from its button, moves focus with arrows and selects with Enter', async () => {
    const onSelect = vi.fn()
    render(<Example onSelect={onSelect} />)
    const trigger = screen.getByRole('button', { name: 'Actions' })
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await nextFrame()
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toHaveFocus()
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    // Disabled items are skipped.
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    expect(onSelect).toHaveBeenCalledWith('delete')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()
  })

  it('closes on Escape and supports typeahead', async () => {
    render(<Example onSelect={() => {}} />)
    const trigger = screen.getByRole('button', { name: 'Actions' })
    trigger.focus()
    await userEvent.keyboard('{ArrowUp}')
    await nextFrame()
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toHaveFocus()
    await userEvent.keyboard('du')
    expect(screen.getByRole('menuitem', { name: 'Duplicate' })).toHaveFocus()
    await userEvent.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens submenus with ArrowRight and closes only the submenu with ArrowLeft', async () => {
    function Nested() {
      const [anchor, setAnchor] = useState<HTMLElement | null>(null)
      const [open, setOpen] = useState(true)
      return (
        <>
          <button type="button" ref={setAnchor}>
            anchor
          </button>
          <Menu open={open} anchor={anchor} onClose={() => setOpen(false)}>
            <MenuItem>Copy</MenuItem>
            <SubMenu label="Move to">
              <MenuItem>Archive</MenuItem>
            </SubMenu>
          </Menu>
        </>
      )
    }
    render(<Nested />)
    await nextFrame()
    await userEvent.keyboard('{ArrowDown}')
    const sub = screen.getByRole('menuitem', { name: 'Move to' })
    expect(sub).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}')
    await nextFrame()
    expect(screen.getByRole('menuitem', { name: 'Archive' })).toHaveFocus()
    expect(sub).toHaveAttribute('aria-expanded', 'true')
    await userEvent.keyboard('{ArrowLeft}')
    expect(sub).toHaveAttribute('aria-expanded', 'false')
    expect(sub).toHaveFocus()
    // The submenu unmounts after its exit transition.
    await waitFor(() => expect(screen.getAllByRole('menu')).toHaveLength(1))
  })
})

describe('Dialog', () => {
  function Example({ dismissible = true }: { dismissible?: boolean }) {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          headline="Delete page?"
          dismissible={dismissible}
          actions={
            <>
              <Button variant="text" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="text">Delete</Button>
            </>
          }
        >
          This cannot be undone.
        </Dialog>
      </>
    )
  }

  it('is a labelled modal that traps focus and closes on Escape', async () => {
    render(<Example />)
    const opener = screen.getByRole('button', { name: 'Open' })
    await userEvent.click(opener)
    const dialog = screen.getByRole('dialog', { name: 'Delete page?' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAccessibleDescription('This cannot be undone.')
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByRole('button', { name: 'Delete' })).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
    expect(opener).toHaveFocus()
  })

  it('ignores Escape when not dismissible', async () => {
    render(<Example dismissible={false} />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    await userEvent.keyboard('{Escape}')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('locks page scroll while open', async () => {
    render(<Example />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(document.documentElement.style.overflow).toBe('hidden')
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(document.documentElement.style.overflow).toBe(''))
  })
})

describe('SideSheet', () => {
  it('keeps a closed standard sheet inert', () => {
    const { rerender } = render(
      <SideSheet open={false} onClose={() => {}} headline="Inspector">
        <button type="button">inner</button>
      </SideSheet>,
    )
    const sheet = screen.getByRole('complementary', { hidden: true })
    expect(sheet).toHaveAttribute('inert')
    rerender(
      <SideSheet open onClose={() => {}} headline="Inspector">
        <button type="button">inner</button>
      </SideSheet>,
    )
    expect(screen.getByRole('complementary', { name: 'Inspector' })).not.toHaveAttribute('inert')
  })
})

describe('Snackbar', () => {
  function Trigger({ duration }: { duration?: number }) {
    const snackbar = useSnackbar()
    return (
      <Button
        onClick={() =>
          snackbar.show({
            message: 'Message sent',
            action: { label: 'Undo', onClick: undo },
            duration,
          })
        }
      >
        Send
      </Button>
    )
  }
  const undo = vi.fn()

  it('announces the message and runs the action', async () => {
    render(
      <SnackbarProvider>
        <Trigger duration={null as unknown as number} />
      </SnackbarProvider>,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('status')).toHaveTextContent('Message sent')
    await userEvent.click(screen.getByRole('button', { name: 'Undo' }))
    expect(undo).toHaveBeenCalled()
    await waitFor(() => expect(screen.getByRole('status')).toBeEmptyDOMElement())
  })

  it('dismisses itself after the duration', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    render(
      <SnackbarProvider>
        <Trigger duration={4000} />
      </SnackbarProvider>,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByText('Message sent')).toBeInTheDocument()
    await act(() => vi.advanceTimersByTimeAsync(3900))
    expect(screen.getByText('Message sent')).toBeInTheDocument()
    await act(() => vi.advanceTimersByTimeAsync(200))
    // Exit transition, then removal.
    await act(() => vi.advanceTimersByTimeAsync(200))
    expect(screen.queryByText('Message sent')).not.toBeInTheDocument()
    vi.useRealTimers()
  })
})

describe('Tooltip', () => {
  it('shows on keyboard focus and hides on Escape', async () => {
    render(<IconButton icon="delete" label="Delete" tooltip />)
    await userEvent.tab()
    const button = screen.getByRole('button', { name: 'Delete' })
    expect(button).toHaveFocus()
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Delete')
    // The tooltip repeats the button's name, so it is not linked as a description too.
    expect(button).not.toHaveAttribute('aria-describedby')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument())
  })

  it('wraps arbitrary elements', async () => {
    render(
      <Tooltip title="Saved 2 min ago">
        <span tabIndex={0}>status</span>
      </Tooltip>,
    )
    await userEvent.tab()
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toHaveTextContent('Saved 2 min ago')
    expect(screen.getByText('status')).toHaveAttribute('aria-describedby', tooltip.id)
  })
})
