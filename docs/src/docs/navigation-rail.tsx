import {
  AppBar,
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  type NavItem,
  NavigationRail,
  type NavSection,
} from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import './navigation-rail.css'

const DESTINATIONS: NavItem[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'files', label: 'Files', icon: 'folder', badge: 3, badgeLabel: '3 new files' },
  { key: 'photos', label: 'Photos', icon: 'photo_library' },
  { key: 'shared', label: 'Shared', icon: 'folder_shared' },
  {
    key: 'activity',
    label: 'Activity',
    icon: 'notifications',
    badge: true,
    badgeLabel: 'New activity',
  },
]

// Destinations for the playground, with or without badges.
function railItems(badges: boolean): NavItem[] {
  return badges
    ? DESTINATIONS
    : DESTINATIONS.map((item) => ({ key: item.key, label: item.label, icon: item.icon }))
}

// Writes plain data as a TypeScript literal, on one line when it fits.
function literal(value: unknown, indent = ''): string {
  if (typeof value === 'string') return `'${value.replace(/'/g, "\\'")}'`
  if (typeof value !== 'object' || value === null) return String(value)
  const inner = `${indent}  `
  const isArray = Array.isArray(value)
  const entries = isArray
    ? value.map((v) => literal(v, inner))
    : Object.entries(value)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => `${k}: ${literal(v, inner)}`)
  const oneLine = isArray ? `[${entries.join(', ')}]` : `{ ${entries.join(', ')} }`
  if (indent.length + oneLine.length <= 96 && !oneLine.includes('\n')) return oneLine
  const body = entries.map((e) => `${inner}${e},`).join('\n')
  return isArray ? `[\n${body}\n${indent}]` : `{\n${body}\n${indent}}`
}

export const doc = defineDoc({
  slug: 'navigation-rail',
  name: 'Navigation rail',
  group: 'navigation',
  icon: 'side_navigation',
  order: 2,
  summary:
    'Navigation rails hold three to seven destinations at the side of medium and larger windows. The menu button expands the collapsed rail into the expanded rail, which replaces the navigation drawer: beside the content or, as a modal rail, over it.',
  imports: ['NavigationRail', 'IconButton', 'Button', 'ButtonGroup', 'AppBar', 'Avatar'],
  preview: () => (
    <div className="navigation-rail-preview">
      <NavigationRail aria-label="Preview" items={DESTINATIONS.slice(0, 3)} value="files" />
      <div className="navigation-rail-preview__content">
        <span />
        <span />
        <span />
      </div>
    </div>
  ),
  playground: {
    controls: {
      expanded: { type: 'boolean', default: false },
      modal: { type: 'boolean', default: false },
      collapseBehavior: {
        type: 'select',
        options: ['collapse', 'hide'],
        default: 'collapse',
        label: 'Collapse behavior',
      },
      align: { type: 'select', options: ['top', 'center'], default: 'top' },
      indicator: {
        type: 'select',
        options: ['hug', 'fill'],
        default: 'hug',
        label: 'Indicator (expanded)',
      },
      fab: { type: 'boolean', default: true, label: 'FAB' },
      hideLabels: { type: 'boolean', default: false, label: 'Hide labels' },
      badges: { type: 'boolean', default: true },
    },
    render: function NavigationRailPlayground(v) {
      const [value, setValue] = useState('home')
      const [expanded, setExpanded] = useState(v.expanded)
      const [shown, setShown] = useState(v.expanded)
      // Follow the control when it changes.
      if (shown !== v.expanded) {
        setShown(v.expanded)
        setExpanded(v.expanded)
      }
      return (
        <div style={{ display: 'flex', height: 440 }}>
          <NavigationRail
            aria-label="Main"
            items={railItems(v.badges)}
            value={value}
            onChange={setValue}
            menuButton
            expanded={expanded}
            onExpandedChange={setExpanded}
            modal={v.modal}
            collapseBehavior={v.collapseBehavior}
            align={v.align}
            indicator={v.indicator}
            hideLabels={v.hideLabels}
            fab={v.fab ? { icon: 'add', label: 'New folder' } : undefined}
            footer={<IconButton icon="settings" label="Settings" />}
          />
          {v.collapseBehavior === 'hide' && !expanded && (
            <div style={{ padding: 8 }}>
              <IconButton icon="menu" label="Open navigation" onClick={() => setExpanded(true)} />
            </div>
          )}
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const rail = jsx('NavigationRail', {
        'aria-label': 'Main',
        items: raw('items'),
        value: raw('value'),
        onChange: raw('setValue'),
        menuButton: true,
        expanded: raw('expanded'),
        onExpandedChange: raw('setExpanded'),
        ...changed(v, ['modal', 'collapseBehavior', 'align', 'indicator', 'hideLabels']),
        fab: v.fab ? raw("{ icon: 'add', label: 'New folder' }") : undefined,
        footer: raw('<IconButton icon="settings" label="Settings" />'),
      })
      const nested = rail
        .split('\n')
        .map((line) => `  ${line}`)
        .join('\n')
      const frame = `<div style={{ display: 'flex', height: 440 }}>\n${nested}\n</div>`
      return `const items: NavItem[] = ${literal(railItems(v.badges))}\n\nconst [value, setValue] = useState('home')\nconst [expanded, setExpanded] = useState(${v.expanded})\n\n${frame}`
    },
  },
  api: [
    {
      name: 'NavigationRail',
      interfaces: ['NavigationRailProps', 'NavCommonProps'],
      inherits: 'Each destination is a `NavItem`; `sections` group them as `NavSection`s.',
    },
    { name: 'NavItem', interfaces: ['NavItem'] },
    { name: 'NavSection', interfaces: ['NavSection'] },
    { name: 'RailFab', interfaces: ['RailFab'] },
  ],
  guidelines: [
    'Use the collapsed rail on medium and larger windows with three to seven destinations. On compact windows, use a navigation bar, or a modal expanded rail for more destinations.',
    'Open the expanded rail from the menu button. It can show secondary destinations under headlines with `sections`; the FAB extends to show its label.',
    'Use the standard expanded rail beside the content on large windows; use `modal` over the content where space is short.',
    'The expanded rail’s indicator hugs the icon and label by default. `indicator="fill"` spans the rail’s width, like the navigation drawer, which suits long lists; the FAB then stretches to match.',
    'Keep labels visible and one word long. Use `hideLabels` only when every icon is clear without text.',
  ],
})

/**
 * Collapsed and expanded
 * The menu button expands the rail: labels move beside the icons, the FAB extends and the rail grows on a spring. The icons stay where they are.
 */
export function ExampleExpand() {
  const [value, setValue] = useState('files')
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="g-frame" style={{ display: 'flex', height: 480 }}>
      <NavigationRail
        aria-label="Main"
        items={DESTINATIONS}
        value={value}
        onChange={setValue}
        menuButton
        expanded={expanded}
        onExpandedChange={setExpanded}
        fab={{ icon: 'add', label: 'New folder' }}
        footer={<IconButton icon="settings" label="Settings" />}
      />
      <div className="g-muted" style={{ flex: 1, padding: 24 }}>
        Selected: <strong>{value}</strong>
      </div>
    </div>
  )
}

/**
 * Secondary destinations
 * `sections` gives the expanded rail more destinations, grouped under headlines. The collapsed rail keeps the primary ones in `items`.
 */
export function ExampleSections() {
  const [value, setValue] = useState('inbox')
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="g-frame" style={{ display: 'flex', height: 520 }}>
      <NavigationRail
        aria-label="Mail"
        items={MAIL.slice(0, 4)}
        sections={MAIL_SECTIONS}
        value={value}
        onChange={setValue}
        menuButton
        brand={<span className="m3-typescale-title-large">Mail</span>}
        expanded={expanded}
        onExpandedChange={setExpanded}
        fab={{ icon: 'edit', label: 'Compose' }}
      />
      <div className="g-muted" style={{ flex: 1, padding: 24 }}>
        Selected: <strong>{value}</strong>
      </div>
    </div>
  )
}

const MAIL: NavItem[] = [
  { key: 'inbox', label: 'Inbox', icon: 'inbox', badge: 24, badgeLabel: '24 unread' },
  { key: 'outbox', label: 'Outbox', icon: 'send' },
  { key: 'favorites', label: 'Favorites', icon: 'favorite' },
  { key: 'trash', label: 'Trash', icon: 'delete' },
]

const MAIL_SECTIONS: NavSection[] = [
  { items: MAIL },
  {
    headline: 'Labels',
    items: [
      { key: 'family', label: 'Family', icon: 'label' },
      { key: 'travel', label: 'Travel', icon: 'label' },
      { key: 'receipts', label: 'Receipts', icon: 'label' },
    ],
  },
]

/**
 * Full-width indicator
 * By default the active indicator hugs the icon and label. `indicator="fill"` stretches it across the rail, like the former navigation drawer: counts move to the end of the row and the extended FAB stretches to the same width. Collapse the rail to see both morph back. This site’s own navigation uses it.
 */
export function ExampleFillIndicator() {
  const [value, setValue] = useState('inbox')
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="g-frame" style={{ display: 'flex', height: 480 }}>
      <NavigationRail
        aria-label="Mail"
        items={MAIL}
        sections={MAIL_SECTIONS}
        value={value}
        onChange={setValue}
        menuButton
        expanded={expanded}
        onExpandedChange={setExpanded}
        indicator="fill"
        density="compact"
        fab={{ icon: 'edit', label: 'Compose' }}
      />
      <div className="g-muted" style={{ flex: 1, padding: 24 }}>
        Selected: <strong>{value}</strong>
      </div>
    </div>
  )
}

/**
 * Modal expanded rail
 * With `modal`, the expanded rail opens over the content with a scrim. Choosing a destination, the scrim or Escape closes it. The rail in the layout stays collapsed.
 */
export function ExampleModal() {
  const [value, setValue] = useState('photos')
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="g-frame" style={{ display: 'flex', height: 440 }}>
      <NavigationRail
        aria-label="Main"
        items={DESTINATIONS}
        value={value}
        onChange={setValue}
        menuButton
        modal
        expanded={expanded}
        onExpandedChange={setExpanded}
      />
      <div className="g-muted" style={{ flex: 1, padding: 24 }}>
        Selected: <strong>{value}</strong>
      </div>
    </div>
  )
}

/**
 * Hide when collapsed
 * `collapseBehavior="hide"` hides the rail until it expands, for immersive pages. Keep a menu button on screen, here in the app bar.
 */
export function ExampleHide() {
  const [value, setValue] = useState('home')
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="g-frame" style={{ display: 'flex', height: 400 }}>
      <NavigationRail
        aria-label="Main"
        items={DESTINATIONS}
        value={value}
        onChange={setValue}
        menuButton
        expanded={expanded}
        onExpandedChange={setExpanded}
        collapseBehavior="hide"
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <AppBar
          title="Reader"
          scrollTarget={null}
          navigation={
            expanded ? undefined : (
              <IconButton icon="menu" label="Open navigation" onClick={() => setExpanded(true)} />
            )
          }
          actions={<IconButton icon={<Avatar name="Ada Lovelace" size={32} />} label="Account" />}
        />
      </div>
    </div>
  )
}

/**
 * Alignment
 * `align` puts the destinations at the top or in the middle of the rail; the menu button and FAB stay at the top. Centered destinations are easier to reach on a tablet.
 */
export function ExampleAlign() {
  const [align, setAlign] = useState<'top' | 'center'>('center')
  const [value, setValue] = useState('home')
  return (
    <div className="g-frame" style={{ display: 'flex', height: 440 }}>
      <NavigationRail
        aria-label="Main"
        items={DESTINATIONS.slice(0, 4)}
        value={value}
        onChange={setValue}
        align={align}
        fab={{ icon: 'add', label: 'New folder' }}
      />
      <div style={{ flex: 1, padding: 24 }}>
        <ButtonGroup
          variant="connected"
          selection="single"
          aria-label="Alignment"
          value={align}
          onChange={(next) => next && setAlign(next as 'top' | 'center')}
        >
          <Button variant="tonal" value="top">
            Top
          </Button>
          <Button variant="tonal" value="center">
            Center
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

/**
 * Detail views
 * `activeFor` lists other keys that also select a destination. Here “Files” stays selected while people edit a file.
 */
export function ExampleActiveFor() {
  const [value, setValue] = useState('file-editor')
  return (
    <div className="g-frame" style={{ display: 'flex', height: 400 }}>
      <NavigationRail
        aria-label="Main"
        value={value}
        onChange={setValue}
        items={[
          { key: 'home', label: 'Home', icon: 'home' },
          { key: 'files', label: 'Files', icon: 'folder', activeFor: ['file-editor'] },
          { key: 'photos', label: 'Photos', icon: 'photo_library' },
        ]}
      />
      <div className="g-stack" style={{ flex: 1, alignItems: 'flex-start', padding: 24 }}>
        {value === 'file-editor' ? (
          <>
            <span className="m3-typescale-title-large">Edit “Trip notes.docx”</span>
            <Button variant="tonal" icon="arrow_back" onClick={() => setValue('files')}>
              Back to files
            </Button>
          </>
        ) : (
          <Button variant="tonal" icon="edit" onClick={() => setValue('file-editor')}>
            Edit “Trip notes.docx”
          </Button>
        )}
      </div>
    </div>
  )
}
