import {
  type AnchorLike,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  pointAnchor,
  SubMenu,
} from 'material-design-3-expressive-components'
import { useRef, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import './menu.css'

const ACTIONS = [
  { label: 'Rename', icon: 'edit', shortcut: '⌘E', supporting: 'Change the file name.' },
  {
    label: 'Duplicate',
    icon: 'content_copy',
    shortcut: '⌘D',
    supporting: 'Copy it to the same folder.',
  },
  { label: 'Move…', icon: 'drive_file_move', shortcut: '', supporting: 'Pick a new folder.' },
  { label: 'Delete', icon: 'delete', shortcut: '⌫', supporting: 'Move it to trash.' },
]

export const doc = defineDoc({
  slug: 'menu',
  name: 'Menu',
  group: 'selection',
  icon: 'menu_open',
  order: 6,
  summary:
    'Menus show a temporary list of choices next to a button, a field or the pointer. Expressive vertical menus have rounded items, a highlighted selection, standard and vibrant colors, and groups separated by gaps. Use `MenuButton` for a trigger with its menu, or `Menu` with an `anchor` for full control.',
  imports: [
    'Menu',
    'MenuItem',
    'SubMenu',
    'MenuGroup',
    'MenuDivider',
    'MenuButton',
    'pointAnchor',
    'Button',
    'IconButton',
  ],
  preview: () => (
    <div className="m3-menu menu-doc-preview" role="menu" aria-label="File actions">
      <MenuItem icon="edit" trailingText="⌘E">
        Rename
      </MenuItem>
      <MenuItem icon="content_copy" trailingText="⌘D">
        Duplicate
      </MenuItem>
      <MenuItem icon="delete">Delete</MenuItem>
    </div>
  ),
  playground: {
    controls: {
      color: { type: 'select', options: ['standard', 'vibrant'], default: 'standard' },
      trigger: { type: 'select', options: ['button', 'icon'], default: 'button' },
      placement: {
        type: 'select',
        options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
        default: 'bottom-start',
      },
      icons: { type: 'boolean', default: true, label: 'Leading icons' },
      shortcuts: { type: 'boolean', default: true },
      supportingText: { type: 'boolean', default: false, label: 'Supporting text' },
      divider: { type: 'boolean', default: true },
      disabledItem: { type: 'boolean', default: false, label: 'Disable “Move…”' },
    },
    render: (v) => (
      <MenuButton
        placement={v.placement}
        color={v.color}
        aria-label="File actions"
        trigger={(props) =>
          v.trigger === 'icon' ? (
            <IconButton {...props} icon="more_vert" label="File actions" />
          ) : (
            <Button {...props} variant="outlined" trailingIcon="arrow_drop_down">
              Actions
            </Button>
          )
        }
      >
        {ACTIONS.flatMap((a) => [
          ...(v.divider && a.label === 'Delete' ? [<MenuDivider key="divider" />] : []),
          <MenuItem
            key={a.label}
            icon={v.icons ? a.icon : undefined}
            trailingText={v.shortcuts && a.shortcut ? a.shortcut : undefined}
            supportingText={v.supportingText ? a.supporting : undefined}
            disabled={v.disabledItem && a.label === 'Move…'}
          >
            {a.label}
          </MenuItem>,
        ])}
      </MenuButton>
    ),
    code: (v, { jsx, changed }) => {
      const items = ACTIONS.flatMap((a) => [
        ...(v.divider && a.label === 'Delete' ? ['<MenuDivider />'] : []),
        jsx(
          'MenuItem',
          {
            icon: v.icons ? a.icon : undefined,
            trailingText: v.shortcuts ? a.shortcut : undefined,
            supportingText: v.supportingText ? a.supporting : undefined,
            disabled: v.disabledItem && a.label === 'Move…',
          },
          a.label,
        ),
      ]).join('\n')
      const trigger =
        v.trigger === 'icon'
          ? '(props) => <IconButton {...props} icon="more_vert" label="File actions" />'
          : '(props) => (\n    <Button {...props} variant="outlined" trailingIcon="arrow_drop_down">\n      Actions\n    </Button>\n  )'
      return jsx(
        'MenuButton',
        {
          ...changed(v, ['placement', 'color']),
          'aria-label': 'File actions',
          trigger: raw(trigger),
        },
        items,
      )
    },
  },
  api: [
    {
      name: 'MenuButton',
      interfaces: ['MenuButtonProps'],
      inherits:
        'Enter, Space and ArrowDown open the menu at the first item; ArrowUp opens it at the last item.',
    },
    {
      name: 'MenuTriggerProps',
      interfaces: ['MenuTriggerProps'],
      inherits:
        'The props that `MenuButton` passes to `trigger`. Spread all of them onto the trigger element.',
    },
    {
      name: 'Menu',
      interfaces: ['MenuProps'],
      inherits:
        'Also accepts `<div>` attributes such as `aria-label` and `id`. The menu renders in a portal with `role="menu"`.',
    },
    {
      name: 'MenuItem',
      interfaces: ['MenuItemProps'],
      inherits:
        'Also accepts HTML attributes. The item renders a `<div>`, or a link (through `LinkProvider`) when `href` is set.',
    },
    { name: 'SubMenu', interfaces: ['SubMenuProps'] },
    { name: 'MenuGroup', interfaces: ['MenuGroupProps'] },
    {
      name: 'MenuDivider',
      interfaces: [],
      inherits: 'A line between groups of items. It takes no props.',
    },
    {
      name: 'pointAnchor',
      interfaces: [],
      inherits:
        '`pointAnchor(x, y)` returns a virtual anchor at a point on the screen, for example where a right-click happened. Pass it as the `anchor` of a `Menu`.',
    },
  ],
  guidelines: [
    'Use a menu for actions and options that do not need to be visible all the time. Keep the most frequent action as a button.',
    'Group related items with `MenuGroup` and `MenuDivider`, or separate the groups with gaps (`grouped`); put destructive items last.',
    'Use the vibrant color sparingly, for menus that need more emphasis.',
    'Add `keepOpen` to checkbox items, so people can change several options in one visit.',
    'Every menu needs a keyboard path. `MenuButton` handles it; for a context menu, also open it on the Context Menu key and Shift+F10.',
  ],
})

/**
 * Menu button
 * `MenuButton` wires a trigger to its menu. Shortcuts in `trailingText` are labels only; bind the keys yourself. Arrow keys skip disabled items.
 */
export function ExampleMenuButton() {
  const [last, setLast] = useState('')
  return (
    <div className="g-stack" style={{ alignItems: 'center' }}>
      <MenuButton
        aria-label="File actions"
        trigger={(props) => (
          <Button {...props} variant="outlined" trailingIcon="arrow_drop_down">
            File actions
          </Button>
        )}
      >
        <MenuItem icon="edit" trailingText="⌘E" onSelect={() => setLast('Rename')}>
          Rename
        </MenuItem>
        <MenuItem icon="content_copy" trailingText="⌘D" onSelect={() => setLast('Duplicate')}>
          Duplicate
        </MenuItem>
        <MenuItem icon="drive_file_move" disabled>
          Move…
        </MenuItem>
        <MenuDivider />
        <MenuItem
          icon="delete"
          supportingText="Moves the file to trash."
          onSelect={() => setLast('Delete')}
        >
          Delete
        </MenuItem>
      </MenuButton>
      <span className="g-muted">{last ? `Chose: ${last}` : 'Nothing chosen yet'}</span>
    </div>
  )
}

/**
 * Vibrant and grouped
 * `color="vibrant"` uses the tertiary colors for more emphasis. `grouped` separates the `MenuGroup`s with gaps, each in its own rounded container. A selected item takes the selected color and shape.
 */
export function ExampleVibrantGrouped() {
  const [sort, setSort] = useState('name')
  return (
    <div className="g-row">
      <MenuButton
        color="vibrant"
        aria-label="Edit"
        trigger={(props) => (
          <Button {...props} variant="tonal" icon="edit">
            Edit
          </Button>
        )}
      >
        <MenuItem icon="content_cut">Cut</MenuItem>
        <MenuItem icon="content_copy">Copy</MenuItem>
        <MenuItem icon="content_paste" selected>
          Paste
        </MenuItem>
      </MenuButton>
      <MenuButton
        grouped
        aria-label="View options"
        trigger={(props) => <IconButton {...props} icon="tune" label="View options" />}
      >
        <MenuGroup label="Sort by">
          {['name', 'date', 'size'].map((key) => (
            <MenuItem
              key={key}
              type="radio"
              checked={sort === key}
              onSelect={() => setSort(key)}
              keepOpen
            >
              {key[0]!.toUpperCase() + key.slice(1)}
            </MenuItem>
          ))}
        </MenuGroup>
        <MenuGroup>
          <MenuItem icon="settings">View settings</MenuItem>
        </MenuGroup>
      </MenuButton>
    </div>
  )
}

/**
 * Checkbox and radio items
 * `type="radio"` and `type="checkbox"` items show a check mark when `checked`. `keepOpen` keeps the menu open after a choice.
 */
export function ExampleSelectable() {
  const [sort, setSort] = useState('modified')
  const [shared, setShared] = useState(true)
  const [archived, setArchived] = useState(false)
  return (
    <div className="g-row">
      <MenuButton
        aria-label="View options"
        trigger={(props) => <IconButton {...props} icon="tune" label="View options" />}
      >
        <MenuGroup label="Sort by">
          <MenuItem type="radio" checked={sort === 'modified'} onSelect={() => setSort('modified')}>
            Last modified
          </MenuItem>
          <MenuItem type="radio" checked={sort === 'name'} onSelect={() => setSort('name')}>
            Name
          </MenuItem>
          <MenuItem type="radio" checked={sort === 'size'} onSelect={() => setSort('size')}>
            Size
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup label="Show">
          <MenuItem type="checkbox" checked={shared} keepOpen onSelect={() => setShared(!shared)}>
            Shared files
          </MenuItem>
          <MenuItem
            type="checkbox"
            checked={archived}
            keepOpen
            onSelect={() => setArchived(!archived)}
          >
            Archived files
          </MenuItem>
        </MenuGroup>
      </MenuButton>
      <span className="g-muted">
        Sort: {sort}. Shared: {shared ? 'shown' : 'hidden'}. Archived:{' '}
        {archived ? 'shown' : 'hidden'}.
      </span>
    </div>
  )
}

/**
 * Submenus
 * `SubMenu` opens a nested menu on hover, click, Enter or the arrow key. ArrowLeft or Escape closes it again.
 */
export function ExampleSubMenu() {
  return (
    <MenuButton
      aria-label="Share"
      trigger={(props) => (
        <Button {...props} variant="tonal" icon="share" trailingIcon="arrow_drop_down">
          Share
        </Button>
      )}
    >
      <MenuItem icon="link">Copy link</MenuItem>
      <MenuItem icon="mail">Send by email</MenuItem>
      <SubMenu label="Download as" icon="download">
        <MenuItem>PDF</MenuItem>
        <MenuItem>Plain text</MenuItem>
        <SubMenu label="Archive">
          <MenuItem>ZIP</MenuItem>
          <MenuItem>TAR</MenuItem>
        </SubMenu>
      </SubMenu>
    </MenuButton>
  )
}

/**
 * Context menu
 * `pointAnchor` places the menu at the pointer. Also open it from the keyboard, and return focus to the row when it closes.
 */
export function ExampleContextMenu() {
  const [anchor, setAnchor] = useState<AnchorLike | null>(null)
  const [folder, setFolder] = useState('')
  const [status, setStatus] = useState('Right-click a folder, or focus it and press Shift+F10.')
  const row = useRef<HTMLElement | null>(null)
  const folders = ['Projects', 'Photos', 'Receipts']
  return (
    <div className="g-stack" style={{ alignItems: 'flex-start' }}>
      {folders.map((f) => (
        <Button
          key={f}
          variant="text"
          icon="folder"
          onClick={() => setStatus(`Opened ${f}`)}
          onContextMenu={(e) => {
            e.preventDefault()
            row.current = e.currentTarget
            setFolder(f)
            setAnchor(pointAnchor(e.clientX, e.clientY))
          }}
          onKeyDown={(e) => {
            if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) {
              e.preventDefault()
              const rect = e.currentTarget.getBoundingClientRect()
              row.current = e.currentTarget
              setFolder(f)
              setAnchor(pointAnchor(rect.left + 16, rect.bottom))
            }
          }}
        >
          {f}
        </Button>
      ))}
      <span className="g-muted">{status}</span>
      <Menu
        open={anchor !== null}
        anchor={anchor}
        aria-label={`Actions for ${folder}`}
        onClose={(reason) => {
          setAnchor(null)
          if (reason === 'escape' || reason === 'select') row.current?.focus()
        }}
      >
        <MenuItem icon="edit" onSelect={() => setStatus(`Renaming ${folder}`)}>
          Rename
        </MenuItem>
        <MenuItem icon="create_new_folder" onSelect={() => setStatus(`New folder in ${folder}`)}>
          New folder inside
        </MenuItem>
        <MenuItem icon="delete" onSelect={() => setStatus(`Deleted ${folder}`)}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  )
}

/**
 * Menu with an anchor
 * Use `Menu` directly for full control of the open state. `matchWidth` makes the menu at least as wide as its anchor.
 */
export function ExampleAnchor() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)
  const [open, setOpen] = useState(false)
  const [kind, setKind] = useState('')
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 320 }}>
      <Button
        ref={setAnchor}
        variant="tonal"
        icon="add"
        fullWidth
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        New file
      </Button>
      <Menu
        open={open}
        anchor={anchor}
        onClose={() => setOpen(false)}
        matchWidth
        aria-label="File types"
      >
        <MenuItem
          icon="description"
          supportingText="Text with headings and lists."
          onSelect={() => setKind('document')}
        >
          Document
        </MenuItem>
        <MenuItem
          icon="table_chart"
          supportingText="Rows, columns and formulas."
          onSelect={() => setKind('spreadsheet')}
        >
          Spreadsheet
        </MenuItem>
        <MenuItem
          icon="slideshow"
          supportingText="Slides for a talk."
          onSelect={() => setKind('presentation')}
        >
          Presentation
        </MenuItem>
        <MenuItem icon="list_alt" supportingText="Needs the forms add-on." disabled>
          Form
        </MenuItem>
      </Menu>
      {kind && <span className="g-muted">Created a {kind}.</span>}
    </div>
  )
}

/**
 * Links
 * With `href`, an item renders a link through `LinkProvider`. Add `target="_blank"` and an icon for pages that open in a new tab.
 */
export function ExampleLinks() {
  return (
    <MenuButton
      aria-label="Help"
      trigger={(props) => <IconButton {...props} icon="help" label="Help" />}
    >
      <MenuItem icon="palette" href="/theme">
        Theme builder
      </MenuItem>
      <MenuItem
        icon="menu_book"
        trailingIcon="open_in_new"
        href="https://m3.material.io/components/menus"
        target="_blank"
      >
        M3 menu guidelines
      </MenuItem>
    </MenuButton>
  )
}
