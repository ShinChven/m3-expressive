import {
  AppBar,
  type AppBarVariant,
  Avatar,
  IconButton,
  List,
  ListItem,
  MenuButton,
  MenuItem,
  Search,
} from 'material-design-3-expressive-components'
import { useRef } from 'react'
import { defineDoc, raw } from '../kit/doc'

const NAVIGATION = {
  none: null,
  menu: { icon: 'menu', label: 'Open navigation' },
  back: { icon: 'arrow_back', label: 'Back' },
} as const

const ACTIONS = [
  { icon: 'filter_list', label: 'Filter' },
  { icon: 'more_vert', label: 'More options' },
]

// The last `count` actions, so that “More options” always stays at the end.
function actionList(count: number) {
  return ACTIONS.slice(ACTIONS.length - count)
}

function iconButtonCode(button: { icon: string; label: string }) {
  return `<IconButton icon="${button.icon}" label="${button.label}" />`
}

const TASKS = [
  { title: 'Book flights to Lisbon', status: 'Due today', icon: 'today' },
  { title: 'Renew passport', status: 'In progress', icon: 'pending' },
  { title: 'Pay the electricity bill', status: 'Not started', icon: 'radio_button_unchecked' },
  { title: 'Send the quarterly report', status: 'Done', icon: 'task_alt' },
  { title: 'Call the dentist', status: 'In progress', icon: 'pending' },
  { title: 'Plan the team lunch', status: 'Not started', icon: 'radio_button_unchecked' },
  { title: 'Back up phone photos', status: 'Due today', icon: 'today' },
  { title: 'Return library books', status: 'Not started', icon: 'radio_button_unchecked' },
  { title: 'Update emergency contacts', status: 'Done', icon: 'task_alt' },
  { title: 'Clean up the shared drive', status: 'In progress', icon: 'pending' },
]

export const doc = defineDoc({
  slug: 'app-bar',
  name: 'App bar',
  group: 'navigation',
  icon: 'toolbar',
  order: 4,
  summary:
    'App bars show the headline of the current page with navigation and one or two key actions. The search app bar puts search first; medium and large flexible bars show a bigger headline that collapses as the content scrolls.',
  imports: [
    'AppBar',
    'IconButton',
    'Avatar',
    'Search',
    'List',
    'ListItem',
    'MenuButton',
    'MenuItem',
  ],
  preview: () => (
    <div style={{ width: '100%', overflow: 'hidden', borderRadius: 16 }}>
      <AppBar
        variant="medium-flexible"
        title="Files"
        subtitle="12 shared"
        navigation={<IconButton icon="menu" label="Open navigation" />}
        actions={<IconButton icon="filter_list" label="Filter" />}
        scrollTarget={null}
      />
    </div>
  ),
  playground: {
    controls: {
      variant: {
        type: 'select',
        options: ['small', 'medium-flexible', 'large-flexible'],
        default: 'small',
      },
      align: { type: 'select', options: ['start', 'center'], default: 'start' },
      title: { type: 'text', default: 'Files' },
      subtitle: { type: 'text', default: '' },
      navigation: { type: 'select', options: ['none', 'menu', 'back'], default: 'menu' },
      actions: { type: 'number', default: 1, min: 0, max: 2 },
      scrolled: { type: 'boolean', default: false },
    },
    render: (v) => {
      const nav = NAVIGATION[v.navigation]
      const actions = actionList(v.actions)
      return (
        <div>
          <AppBar
            variant={v.variant}
            align={v.align}
            title={v.title}
            subtitle={v.subtitle || undefined}
            navigation={nav ? <IconButton icon={nav.icon} label={nav.label} /> : undefined}
            actions={
              actions.length
                ? actions.map((a) => <IconButton key={a.icon} icon={a.icon} label={a.label} />)
                : undefined
            }
            scrolled={v.scrolled || undefined}
            scrollTarget={null}
          />
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const nav = NAVIGATION[v.navigation]
      const actions = actionList(v.actions).map(iconButtonCode)
      return jsx('AppBar', {
        ...changed(v, ['variant', 'align']),
        title: v.title,
        subtitle: v.subtitle,
        navigation: nav ? raw(iconButtonCode(nav)) : undefined,
        actions:
          actions.length > 1
            ? raw(`<>\n${actions.map((a) => `    ${a}`).join('\n')}\n  </>`)
            : actions[0] && raw(actions[0]),
        scrolled: v.scrolled,
      })
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'AppBar',
      interfaces: ['AppBarProps'],
      inherits: 'Also accepts native `<header>` attributes, except `title`.',
    },
    {
      name: 'useScrollOffset',
      interfaces: [],
      inherits:
        '`useScrollOffset(target: ScrollTarget): number` returns the scroll offset of an element, a ref to one or the window. It updates once per animation frame. The app bars use it to follow `scrollTarget`.',
    },
  ],
  guidelines: [
    'Use the search app bar on home pages where search is the main way in; the small bar on dense or scrolled pages; medium and large flexible bars to emphasize the headline.',
    'Show one action, two at most. Put further actions in a toolbar rather than an overflow menu, and emphasize at most one with a filled or tonal icon button.',
    'Flexible headlines wrap to a second line rather than truncate. Center the headline and subtitle with `align="center"` when it suits the page.',
    'When the bar is inside the scroll container, set `position="sticky"` and pass that container as `scrollTarget`. When the bar is outside it (the default `static`), pass the element that scrolls.',
  ],
})

/**
 * Small and centered
 * The small bar puts the headline next to the navigation button, with an optional subtitle. `align="center"` centers the text, for a main page with one action.
 */
export function ExampleSmallCenter() {
  return (
    <div className="g-stack g-fill">
      <AppBar
        title="Files"
        subtitle="Shared drive"
        navigation={<IconButton icon="menu" label="Open navigation" />}
        actions={<IconButton icon="filter_list" label="Filter" />}
        scrollTarget={null}
      />
      <AppBar
        align="center"
        title="Photos"
        navigation={<IconButton icon="menu" label="Open navigation" />}
        actions={<IconButton icon="upload" label="Upload photos" variant="tonal" />}
        scrollTarget={null}
      />
    </div>
  )
}

/**
 * Search app bar
 * A search bar takes the place of the headline. Selecting it opens the search view. Trailing elements can sit outside the search bar, like this avatar, or inside it.
 */
export function ExampleSearch() {
  return (
    <div className="g-frame g-fill">
      <AppBar
        variant="search"
        navigation={<IconButton icon="menu" label="Open navigation" />}
        search={
          <Search
            placeholder="Search inbox"
            suggestions={[
              { value: 'invoices', label: 'Invoices' },
              { value: 'flights', label: 'Flight confirmations' },
            ]}
            trailing={<IconButton icon="mic" label="Search by voice" />}
          />
        }
        actions={<IconButton icon={<Avatar name="Ada Lovelace" size={32} />} label="Account" />}
        scrollTarget={null}
      />
    </div>
  )
}

/**
 * Flexible bars collapse on scroll
 * Scroll inside each frame. With `position="sticky"`, the bar sticks to the top of its scroll container, the flexible headline scrolls away and the small headline appears in the bar.
 */
export function ExampleCollapse() {
  return (
    <div
      className="g-fill"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16,
      }}
    >
      <TaskScreen variant="medium-flexible" />
      <TaskScreen variant="large-flexible" />
    </div>
  )
}

function TaskScreen({ variant }: { variant: AppBarVariant }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div ref={ref} className="g-frame g-scroll-box">
      <AppBar
        variant={variant}
        title="My tasks"
        subtitle="10 open"
        navigation={<IconButton icon="arrow_back" label="Back" />}
        actions={<IconButton icon="more_vert" label="More options" />}
        position="sticky"
        scrollTarget={ref}
      />
      <List navigable={false}>
        {TASKS.map((task) => (
          <ListItem
            key={task.title}
            headline={task.title}
            supportingText={task.status}
            leadingIcon={task.icon}
          />
        ))}
      </List>
    </div>
  )
}

/**
 * Long headlines wrap
 * Medium and large flexible bars hug their text: a long headline wraps to a second line instead of being cut off, and the bar grows to fit it.
 */
export function ExampleWrap() {
  return (
    <div className="g-frame g-fill" style={{ maxWidth: 420 }}>
      <AppBar
        variant="large-flexible"
        align="center"
        title="Weekend trip to the Lisbon coast"
        subtitle="Shared with 3 people"
        navigation={<IconButton icon="arrow_back" label="Back" />}
        actions={<IconButton icon="share" label="Share" />}
        scrollTarget={null}
      />
    </div>
  )
}

/**
 * Bar outside the scroll container
 * With the default `position="static"`, the bar sits above the element that scrolls. Pass that element as `scrollTarget`: the large flexible bar shrinks into a small bar as the list scrolls.
 */
export function ExampleOutside() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      className="g-frame"
      style={{ display: 'flex', flexDirection: 'column', maxWidth: 480, height: 400 }}
    >
      <AppBar
        variant="large-flexible"
        title="Recent activity"
        subtitle="Shared list: Family tasks"
        navigation={<IconButton icon="menu" label="Open navigation" />}
        actions={<IconButton icon="filter_list" label="Filter" />}
        scrollTarget={ref}
      />
      <div ref={ref} style={{ flex: 1, overflow: 'auto' }}>
        <List navigable={false}>
          {TASKS.map((task) => (
            <ListItem
              key={task.title}
              headline={`Changed “${task.title}”`}
              supportingText={`Status: ${task.status}`}
              leadingIcon="history"
            />
          ))}
        </List>
      </div>
    </div>
  )
}

/**
 * Document editor
 * One emphasized action: a wide, filled icon button for the main action, next to a menu of file actions.
 */
export function ExampleEditor() {
  return (
    <div className="g-frame g-fill">
      <AppBar
        title="Trip notes.docx"
        subtitle="Only you"
        navigation={<IconButton icon="arrow_back" label="Back to files" />}
        actions={
          <>
            <IconButton icon="share" label="Share" variant="filled" width="wide" />
            <MenuButton
              aria-label="File actions"
              trigger={(props) => <IconButton {...props} icon="more_vert" label="More options" />}
            >
              <MenuItem icon="content_copy">Make a copy</MenuItem>
              <MenuItem icon="history">Version history</MenuItem>
              <MenuItem icon="delete">Move to trash</MenuItem>
            </MenuButton>
          </>
        }
        scrollTarget={null}
      />
    </div>
  )
}
