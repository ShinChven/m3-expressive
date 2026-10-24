import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  AppBar,
  AppScaffold,
  IconButton,
  type NavItem,
  NavigationBar,
  NavigationRail,
  Search,
  Tab,
  TabGroup,
  TabPanel,
  Tabs,
  Toolbar,
  useWindowSizeClass,
} from '../src'
import { setViewportWidth } from './setup'

const items: NavItem[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'inbox', label: 'Inbox', icon: 'inbox', badge: 3, badgeLabel: '3 unread' },
  { key: 'media', label: 'Media', icon: 'photo_library' },
]

describe('Tabs', () => {
  it('links tabs to panels and follows focus with selection', async () => {
    render(
      <TabGroup defaultValue="details">
        <Tabs aria-label="File">
          <Tab value="details" label="Details" />
          <Tab value="sharing" label="Sharing" />
          <Tab value="comments" label="Comments" disabled />
          <Tab value="versions" label="Versions" />
        </Tabs>
        <TabPanel value="details">File details</TabPanel>
        <TabPanel value="sharing">Sharing settings</TabPanel>
        <TabPanel value="versions">History</TabPanel>
      </TabGroup>,
    )
    const details = screen.getByRole('tab', { name: 'Details' })
    expect(details).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Details' })).toHaveTextContent('File details')
    details.focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Sharing' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Sharing' })).toBeInTheDocument()
    // Disabled tabs are skipped.
    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Versions' })).toHaveFocus()
    await userEvent.keyboard('{Home}')
    expect(details).toHaveAttribute('aria-selected', 'true')
  })

  it('keeps one tab focusable when nothing is selected', () => {
    render(
      <Tabs aria-label="x">
        <Tab value="a" label="A" />
        <Tab value="b" label="B" />
      </Tabs>,
    )
    expect(screen.getByRole('tab', { name: 'A' })).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('tab', { name: 'B' })).toHaveAttribute('tabindex', '-1')
  })
})

describe('navigation components', () => {
  it('marks the current destination and announces badges', async () => {
    const onChange = vi.fn()
    render(<NavigationBar aria-label="Main" items={items} value="home" onChange={onChange} />)
    expect(screen.getByRole('button', { name: /Home/ })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText('3 unread')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /Media/ }))
    expect(onChange).toHaveBeenCalledWith('media', items[2])
  })

  it('lays out bar items vertically on compact windows and horizontally on medium ones', () => {
    act(() => setViewportWidth(400))
    const { container } = render(<NavigationBar aria-label="Main" items={items} value="home" />)
    const bar = container.querySelector('.m3-navigation-bar')!
    expect(bar).toHaveAttribute('data-layout', 'vertical')
    act(() => setViewportWidth(700))
    expect(bar).toHaveAttribute('data-layout', 'horizontal')
  })

  it('expands the rail from its menu button and shows sections only when expanded', async () => {
    function Rail() {
      const [expanded, setExpanded] = useState(false)
      return (
        <NavigationRail
          aria-label="Drive"
          items={items}
          sections={[
            { headline: 'Mail', items },
            { headline: 'Labels', items: [{ key: 'work', label: 'Work', icon: 'label' }] },
          ]}
          value="inbox"
          menuButton
          fab={{ icon: 'edit', label: 'Compose' }}
          expanded={expanded}
          onExpandedChange={setExpanded}
        />
      )
    }
    render(<Rail />)
    const rail = screen.getByRole('navigation', { name: 'Drive' })
    expect(rail).not.toHaveAttribute('data-expanded')
    expect(screen.queryByRole('heading', { name: 'Labels' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Compose/ })).toHaveAttribute('data-collapsed')
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(rail).toHaveAttribute('data-expanded')
    expect(screen.getByRole('heading', { name: 'Labels' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Work/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Compose/ })).not.toHaveAttribute('data-collapsed')
    await userEvent.click(screen.getByRole('button', { name: 'Close navigation' }))
    expect(rail).not.toHaveAttribute('data-expanded')
  })

  it('opens a modal expanded rail over the content and closes it on Escape', async () => {
    const onExpandedChange = vi.fn()
    const { rerender } = render(
      <NavigationRail
        aria-label="Main"
        items={items}
        value="home"
        modal
        expanded={false}
        onExpandedChange={onExpandedChange}
      />,
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    rerender(
      <NavigationRail
        aria-label="Main"
        items={items}
        value="home"
        modal
        expanded
        onExpandedChange={onExpandedChange}
      />,
    )
    const dialog = screen.getByRole('dialog', { name: 'Main' })
    // The current destination takes focus.
    expect(screen.getAllByRole('button', { name: /Home/ }).at(-1)).toHaveFocus()
    expect(dialog.querySelector('.m3-navigation-rail')).toHaveAttribute('data-expanded')
    await userEvent.keyboard('{Escape}')
    expect(onExpandedChange).toHaveBeenLastCalledWith(false)
  })

  it('can stretch the expanded rail indicator across the rail', () => {
    const { rerender } = render(<NavigationRail aria-label="Main" items={items} expanded />)
    const rail = screen.getByRole('navigation', { name: 'Main' })
    expect(rail).toHaveAttribute('data-indicator', 'hug')
    rerender(<NavigationRail aria-label="Main" items={items} expanded indicator="fill" />)
    expect(rail).toHaveAttribute('data-indicator', 'fill')
  })

  it('passes the indicator style to the modal rail', () => {
    render(<NavigationRail aria-label="Main" items={items} modal expanded indicator="fill" />)
    const dialog = screen.getByRole('dialog', { name: 'Main' })
    expect(dialog.querySelector('.m3-navigation-rail')).toHaveAttribute('data-indicator', 'fill')
  })

  it('hides a rail that collapses with the hide behavior', () => {
    render(<NavigationRail aria-label="Main" items={items} collapseBehavior="hide" />)
    const rail = document.querySelector('.m3-navigation-rail')!
    expect(rail).toHaveAttribute('data-hidden')
    expect(rail).toHaveAttribute('inert')
  })

  it('collapses flexible app bars on scroll and shows a subtitle', () => {
    const target = document.createElement('div')
    render(
      <AppBar variant="large-flexible" title="Pages" subtitle="12 items" scrollTarget={target} />,
    )
    // The large headline is exposed; the collapsed row title stays hidden until it shows.
    expect(screen.getAllByRole('heading', { name: 'Pages' })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { name: 'Pages', hidden: true })).toHaveLength(2)
    expect(screen.getAllByText('12 items', { exact: true }).length).toBeGreaterThan(0)
  })

  it('puts a search bar in the search app bar', () => {
    render(
      <AppBar
        variant="search"
        search={<Search placeholder="Search mail" />}
        actions={<IconButton icon="account_circle" label="Account" />}
      />,
    )
    expect(screen.getByRole('combobox', { name: 'Search mail' })).toBeInTheDocument()
    expect(document.querySelector('.m3-app-bar')).toHaveAttribute('data-variant', 'search')
  })

  it('makes a toolbar with arrow-key navigation', async () => {
    render(
      <Toolbar type="floating" color="vibrant" aria-label="Formatting">
        <IconButton icon="format_bold" label="Bold" />
        <IconButton icon="format_italic" label="Italic" />
      </Toolbar>,
    )
    const toolbar = screen.getByRole('toolbar', { name: 'Formatting' })
    expect(toolbar).toHaveAttribute('data-color', 'vibrant')
    screen.getByRole('button', { name: 'Bold' }).focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveFocus()
  })
})

describe('Search', () => {
  it('suggests results as a combobox and selects with the keyboard', async () => {
    const onSuggestionSelect = vi.fn()
    render(
      <Search
        placeholder="Search content"
        suggestions={[
          { value: 'about', label: 'About us' },
          { value: 'contact', label: 'Contact' },
        ]}
        onSuggestionSelect={onSuggestionSelect}
      />,
    )
    const input = screen.getByRole('combobox', { name: 'Search content' })
    await userEvent.type(input, 'a')
    expect(input).toHaveAttribute('aria-expanded', 'true')
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}')
    expect(onSuggestionSelect).toHaveBeenCalledWith({ value: 'contact', label: 'Contact' })
  })

  it('focuses when Cmd+K or Ctrl+K is pressed with shortcut prop', async () => {
    render(<Search placeholder="Search content" shortcut />)
    const input = screen.getByRole('combobox', { name: 'Search content' })
    expect(document.activeElement).not.toBe(input)
    fireEvent.keyDown(window, { key: 'k', metaKey: true })
    expect(document.activeElement).toBe(input)
  })
})

describe('adaptive layout', () => {
  function SizeProbe() {
    return <span data-testid="size">{useWindowSizeClass()}</span>
  }

  it('reports M3 window size classes', () => {
    render(<SizeProbe />)
    const size = screen.getByTestId('size')
    expect(size).toHaveTextContent('expanded')
    act(() => setViewportWidth(400))
    expect(size).toHaveTextContent('compact')
    act(() => setViewportWidth(700))
    expect(size).toHaveTextContent('medium')
    act(() => setViewportWidth(1300))
    expect(size).toHaveTextContent('large')
    act(() => setViewportWidth(1700))
    expect(size).toHaveTextContent('extra-large')
  })

  it('switches between navigation bar, rail and expanded rail', async () => {
    act(() => setViewportWidth(400))
    render(
      <AppScaffold
        items={items}
        value="home"
        aria-label="Main"
        appBar={(ctx) => <AppBar title="Mail" navigation={ctx.menuButton} />}
      >
        body
      </AppScaffold>,
    )
    const root = document.querySelector('.m3-scaffold')!
    expect(root).toHaveAttribute('data-mode', 'bar')
    expect(document.querySelector('.m3-navigation-bar')).toBeInTheDocument()

    act(() => setViewportWidth(700))
    expect(root).toHaveAttribute('data-mode', 'rail')
    expect(document.querySelector('.m3-scaffold__nav .m3-navigation-rail')).toBeInTheDocument()

    act(() => setViewportWidth(1300))
    expect(root).toHaveAttribute('data-mode', 'expanded-rail')
    await userEvent.click(screen.getByRole('button', { name: 'Close navigation' }))
    expect(root).toHaveAttribute('data-mode', 'rail')
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(root).toHaveAttribute('data-mode', 'expanded-rail')
  })

  it('opens the modal expanded rail from the medium rail', async () => {
    act(() => setViewportWidth(700))
    render(
      <AppScaffold items={items} value="home" aria-label="Main">
        body
      </AppScaffold>,
    )
    expect(document.querySelector('.m3-scaffold')).toHaveAttribute('data-mode', 'rail')
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(screen.getByRole('dialog', { name: 'Main' })).toBeInTheDocument()
  })

  it('opens the modal rail from the compact menu button', async () => {
    act(() => setViewportWidth(400))
    const many = [
      ...items,
      { key: 'a', label: 'A', icon: 'x' },
      { key: 'b', label: 'B', icon: 'y' },
      { key: 'c', label: 'C', icon: 'z' },
    ]
    render(
      <AppScaffold
        items={many}
        value="home"
        aria-label="Main"
        appBar={(ctx) => <AppBar title="Mail" navigation={ctx.menuButton} />}
      >
        body
      </AppScaffold>,
    )
    expect(document.querySelector('.m3-scaffold')).toHaveAttribute('data-mode', 'modal-rail')
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(screen.getByRole('dialog', { name: 'Main' })).toBeInTheDocument()
  })

  it('shows the brand, rail header and density in the expanded and modal rails', async () => {
    act(() => setViewportWidth(1300))
    const many = [
      ...items,
      { key: 'a', label: 'A', icon: 'x' },
      { key: 'b', label: 'B', icon: 'y' },
      { key: 'c', label: 'C', icon: 'z' },
    ]
    render(
      <AppScaffold
        items={many}
        value="home"
        aria-label="Main"
        brand={<span>Acme Mail</span>}
        railHeader={<input aria-label="Filter" />}
        navigationDensity="compact"
        appBar={(ctx) => <AppBar title="Mail" navigation={ctx.menuButton} />}
      >
        body
      </AppScaffold>,
    )
    // Expanded rail: the menu button and the brand share the top row, the filter is under it.
    const top = document.querySelector('.m3-navigation-rail__top')!
    expect(top).toContainElement(screen.getByRole('button', { name: 'Close navigation' }))
    expect(top).toHaveTextContent('Acme Mail')
    expect(screen.getByRole('textbox', { name: 'Filter' })).toBeInTheDocument()
    expect(document.querySelector('.m3-scaffold__nav .m3-navigation-rail')).toHaveAttribute(
      'data-density',
      'compact',
    )

    act(() => setViewportWidth(400))
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    const dialog = screen.getByRole('dialog', { name: 'Main' })
    // The current destination takes focus, not the filter field.
    expect(screen.getAllByRole('button', { name: 'Home' }).at(-1)).toHaveFocus()
    expect(dialog).toHaveTextContent('Acme Mail')
    expect(dialog).toContainElement(screen.getByRole('textbox', { name: 'Filter' }))
    expect(dialog.querySelector('.m3-navigation-rail')).toHaveAttribute('data-density', 'compact')
  })
})
