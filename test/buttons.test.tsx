import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { LinkComponentProps } from '../src'
import {
  Button,
  ButtonGroup,
  Fab,
  FabMenu,
  FabMenuItem,
  IconButton,
  LinkProvider,
  LoadingIndicator,
  MenuItem,
  SplitButton,
} from '../src'

describe('Button', () => {
  it('renders a non-submitting button by default', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Save</Button>)
    const button = screen.getByRole('button', { name: 'Save' })
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('data-variant', 'filled')
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('morphs its shape while pressed unless shapeMorph is turned off', () => {
    // The pressed corners come from `[data-morph]:active` in button.css.
    render(
      <>
        <Button>Send</Button>
        <Button shapeMorph={false}>Archive</Button>
        <IconButton icon="star" label="Star" />
        <IconButton icon="flag" label="Flag" shapeMorph={false} />
      </>,
    )
    expect(screen.getByRole('button', { name: 'Send' })).toHaveAttribute('data-morph')
    expect(screen.getByRole('button', { name: 'Archive' })).not.toHaveAttribute('data-morph')
    expect(screen.getByRole('button', { name: 'Star' })).toHaveAttribute('data-morph')
    expect(screen.getByRole('button', { name: 'Flag' })).not.toHaveAttribute('data-morph')
  })

  it('renders links through the LinkProvider component', () => {
    function RouterLink({ href, ...rest }: LinkComponentProps) {
      return <a {...rest} href={href} data-router="" />
    }
    render(
      <LinkProvider component={RouterLink}>
        <Button href="/pages">Pages</Button>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Pages' })
    expect(link).toHaveAttribute('href', '/pages')
    expect(link).toHaveAttribute('data-router')
  })

  it('drops the href of a disabled link', () => {
    render(
      <Button href="/x" disabled>
        X
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'X' })
    expect(link).not.toHaveAttribute('href')
    expect(link).toHaveAttribute('aria-disabled', 'true')
  })

  it('stays focusable but ignores clicks while loading', async () => {
    const onClick = vi.fn()
    render(
      <Button loading onClick={onClick}>
        Upload
      </Button>,
    )
    const button = screen.getByRole('button', { name: 'Upload' })
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(button).not.toBeDisabled()
    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
    expect(screen.getByRole('progressbar', { hidden: true })).toBeInTheDocument()
  })

  it('exposes toggle buttons with aria-pressed', () => {
    render(<Button selected>Bold</Button>)
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('aria-pressed', 'true')
  })
})

describe('IconButton and FAB', () => {
  it('requires an accessible label and supports toggling', async () => {
    const onClick = vi.fn()
    const { rerender } = render(
      <IconButton icon="star" label="Favorite" selected={false} onClick={onClick} />,
    )
    const button = screen.getByRole('button', { name: 'Favorite' })
    expect(button).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
    rerender(<IconButton icon="star" label="Favorite" selected onClick={onClick} />)
    expect(button).toHaveAttribute('aria-pressed', 'true')
  })

  it('keeps the extended FAB label as its accessible name when collapsed', () => {
    render(<Fab icon="add" label="New page" expanded={false} />)
    expect(screen.getByRole('button', { name: /New page/ })).toHaveAttribute('data-collapsed')
  })
})

describe('ButtonGroup', () => {
  it('passes its size and shape to the buttons inside', () => {
    render(
      <ButtonGroup size="lg" shape="square" aria-label="Formatting">
        <Button>Bold</Button>
        <IconButton icon="format_italic" label="Italic" size="sm" />
      </ButtonGroup>,
    )
    const bold = screen.getByRole('button', { name: 'Bold' })
    expect(bold).toHaveAttribute('data-size', 'lg')
    expect(bold).toHaveAttribute('data-shape', 'square')
    // A button's own size wins over the group's.
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveAttribute('data-size', 'sm')
  })

  it('behaves as a radio group with arrow-key selection when single-select', async () => {
    const onChange = vi.fn()
    render(
      <ButtonGroup
        variant="connected"
        selection="single"
        aria-label="Range"
        defaultValue="day"
        onChange={onChange}
      >
        <Button value="day">Day</Button>
        <Button value="week">Week</Button>
        <Button value="month">Month</Button>
      </ButtonGroup>,
    )
    expect(screen.getByRole('radiogroup', { name: 'Range' })).toBeInTheDocument()
    const day = screen.getByRole('radio', { name: 'Day' })
    expect(day).toHaveAttribute('aria-checked', 'true')
    expect(day).toHaveAttribute('data-selected')
    expect(screen.getByRole('radio', { name: 'Week' })).toHaveAttribute('tabindex', '-1')
    day.focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(onChange).toHaveBeenLastCalledWith('week')
    expect(screen.getByRole('radio', { name: 'Week' })).toHaveFocus()
    // Selection is required by default: clicking the selected button keeps it.
    await userEvent.click(screen.getByRole('radio', { name: 'Week' }))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('toggles independently in multi-select mode', async () => {
    const onChange = vi.fn()
    render(
      <ButtonGroup variant="connected" selection="multiple" aria-label="Days" onChange={onChange}>
        <Button value="day">Day</Button>
        <Button value="week">Week</Button>
        <IconButton value="month" icon="calendar_month" label="Month" />
      </ButtonGroup>,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Day' }))
    await userEvent.click(screen.getByRole('button', { name: 'Month' }))
    expect(onChange).toHaveBeenLastCalledWith(['day', 'month'])
    expect(screen.getByRole('button', { name: 'Month' })).toHaveAttribute('aria-pressed', 'true')
  })
})

describe('SplitButton', () => {
  it('runs the main action and opens the menu from the trailing button', async () => {
    const onClick = vi.fn()
    const onSelect = vi.fn()
    render(
      <SplitButton label="Send" icon="send" onClick={onClick} menuLabel="More send options">
        <MenuItem onSelect={onSelect}>Schedule send</MenuItem>
      </SplitButton>,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(onClick).toHaveBeenCalledOnce()
    const trigger = screen.getByRole('button', { name: 'More send options' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(screen.getByRole('menuitem', { name: 'Schedule send' }))
    expect(onSelect).toHaveBeenCalledOnce()
  })
})

describe('FabMenu', () => {
  it('opens its items from the FAB, runs an item and closes', async () => {
    const onShare = vi.fn()
    render(
      <FabMenu label="Share" icon="share">
        <FabMenuItem icon="mail" onClick={onShare}>
          Email
        </FabMenuItem>
        <FabMenuItem icon="link">Copy link</FabMenuItem>
      </FabMenu>,
    )
    const fab = screen.getByRole('button', { name: 'Share' })
    expect(fab).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(fab)
    expect(screen.getByRole('menu', { name: 'Share' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await userEvent.click(screen.getByRole('menuitem', { name: 'Email' }))
    expect(onShare).toHaveBeenCalledOnce()
    expect(screen.getByRole('button', { name: 'Share' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes on Escape and returns focus to the FAB', async () => {
    render(
      <FabMenu label="Create">
        <FabMenuItem icon="description">Document</FabMenuItem>
        <FabMenuItem icon="folder">Folder</FabMenuItem>
      </FabMenu>,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Create' }))
    await userEvent.keyboard('{Escape}')
    const fab = screen.getByRole('button', { name: 'Create' })
    expect(fab).toHaveAttribute('aria-expanded', 'false')
    expect(fab).toHaveFocus()
  })
})

describe('LoadingIndicator', () => {
  it('is a progress bar, determinate when given a value', () => {
    const { rerender } = render(<LoadingIndicator aria-label="Loading messages" />)
    const indicator = screen.getByRole('progressbar', { name: 'Loading messages' })
    expect(indicator).not.toHaveAttribute('aria-valuenow')
    rerender(<LoadingIndicator aria-label="Loading messages" value={0.4} contained />)
    expect(indicator).toHaveAttribute('aria-valuenow', '0.4')
    expect(indicator).toHaveAttribute('data-contained')
  })
})
