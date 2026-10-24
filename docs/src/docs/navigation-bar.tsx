import {
  AppBar,
  Avatar,
  IconButton,
  type NavItem,
  NavigationBar,
} from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

const DESTINATIONS: NavItem[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'files', label: 'Files', icon: 'folder', badge: 3, badgeLabel: '3 new files' },
  { key: 'photos', label: 'Photos', icon: 'photo_library' },
  {
    key: 'activity',
    label: 'Activity',
    icon: 'notifications',
    badge: true,
    badgeLabel: 'New activity',
  },
  { key: 'settings', label: 'Settings', icon: 'settings' },
]

// Destinations for the playground: the first `count`, with or without badges.
function barItems(count: number, badges: boolean, disabled: boolean): NavItem[] {
  return DESTINATIONS.slice(0, count).map((item, index, list) => {
    const next: NavItem = badges ? item : { key: item.key, label: item.label, icon: item.icon }
    return disabled && index === list.length - 1 ? { ...next, disabled: true } : next
  })
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
  slug: 'navigation-bar',
  name: 'Navigation bar',
  group: 'navigation',
  icon: 'bottom_navigation',
  order: 1,
  summary:
    'The flexible navigation bar lets people switch between three to five primary destinations at the bottom of the window. It is 64dp tall; on compact windows labels sit under the icons, on medium windows beside them.',
  imports: ['NavigationBar', 'Avatar', 'IconButton', 'AppBar'],
  preview: () => (
    <NavigationBar aria-label="Preview" items={DESTINATIONS.slice(0, 3)} value="files" />
  ),
  playground: {
    controls: {
      destinations: { type: 'number', default: 4, min: 3, max: 5 },
      itemLayout: {
        type: 'select',
        options: ['auto', 'vertical', 'horizontal'],
        default: 'auto',
        label: 'Item layout',
      },
      labels: { type: 'select', options: ['always', 'selected'], default: 'always' },
      badges: { type: 'boolean', default: true },
      disabled: { type: 'boolean', default: false, label: 'Disable the last destination' },
    },
    render: function NavigationBarPlayground(v) {
      const [value, setValue] = useState('home')
      return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <NavigationBar
            aria-label="Main"
            items={barItems(v.destinations, v.badges, v.disabled)}
            value={value}
            onChange={setValue}
            itemLayout={v.itemLayout}
            labels={v.labels}
          />
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const items = literal(barItems(v.destinations, v.badges, v.disabled))
      const bar = jsx('NavigationBar', {
        'aria-label': 'Main',
        items: raw('items'),
        value: raw('value'),
        onChange: raw('setValue'),
        ...changed(v, ['itemLayout', 'labels']),
      })
      return `const items: NavItem[] = ${items}\n\nconst [value, setValue] = useState('home')\n\n${bar}`
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'NavigationBar',
      interfaces: ['NavigationBarProps', 'NavCommonProps'],
      inherits: 'Each destination is a `NavItem`, described below.',
    },
    { name: 'NavItem', interfaces: ['NavItem'] },
  ],
  guidelines: [
    'Use a navigation bar for three to five primary destinations on compact windows. On medium windows it can stay, with horizontal items; on larger windows, use a navigation rail.',
    'Keep labels short, one word if possible. Show labels on every destination unless the icons are clear on their own.',
    'Use badges for counts that need attention, and set `badgeLabel` so that screen readers announce them.',
    'Do not put actions such as “New folder” in the bar, and do not show a toolbar at the same time: both sit at the bottom of the window.',
  ],
})

/**
 * Horizontal items
 * On medium windows the labels move beside the icons, inside the active indicator, and the destinations gather in the middle of the bar. `itemLayout="auto"` (the default) switches at 600dp.
 */
export function ExampleHorizontal() {
  const [value, setValue] = useState('files')
  return (
    <NavigationBar
      aria-label="Main"
      itemLayout="horizontal"
      value={value}
      onChange={setValue}
      items={[
        { key: 'home', label: 'Home', icon: 'home' },
        { key: 'files', label: 'Files', icon: 'folder' },
        { key: 'photos', label: 'Photos', icon: 'photo_library' },
      ]}
    />
  )
}

/**
 * Badges
 * A number shows a count and `true` shows a small dot. Counts above 999 show as “999+”. `badgeLabel` describes the badge to screen readers.
 */
export function ExampleBadges() {
  const [value, setValue] = useState('home')
  return (
    <NavigationBar
      aria-label="Main"
      value={value}
      onChange={setValue}
      items={[
        { key: 'home', label: 'Home', icon: 'home' },
        {
          key: 'mail',
          label: 'Mail',
          icon: 'mail',
          badge: 12,
          badgeLabel: '12 unread messages',
        },
        {
          key: 'photos',
          label: 'Photos',
          icon: 'photo_library',
          badge: 1200,
          badgeLabel: '1,200 new photos',
        },
        {
          key: 'activity',
          label: 'Activity',
          icon: 'notifications',
          badge: true,
          badgeLabel: 'New activity',
        },
      ]}
    />
  )
}

/**
 * Active icons
 * The selected destination shows the filled version of its icon. Set `activeIcon` when the selected state needs a different symbol. An icon can also be an element, such as an avatar.
 */
export function ExampleActiveIcons() {
  const [value, setValue] = useState('files')
  return (
    <NavigationBar
      aria-label="Main"
      value={value}
      onChange={setValue}
      items={[
        { key: 'files', label: 'Files', icon: 'folder', activeIcon: 'folder_open' },
        {
          key: 'alerts',
          label: 'Alerts',
          icon: 'notifications',
          activeIcon: 'notifications_active',
        },
        {
          key: 'account',
          label: 'Account',
          icon: <Avatar name="Ada Lovelace" size={24} />,
        },
      ]}
    />
  )
}

/**
 * Selected label only
 * `labels="selected"` hides the labels of the other destinations. Use it only when the icons are clear without text.
 */
export function ExampleLabels() {
  const [value, setValue] = useState('home')
  return (
    <NavigationBar
      aria-label="Main"
      labels="selected"
      value={value}
      onChange={setValue}
      items={[
        { key: 'home', label: 'Home', icon: 'home' },
        { key: 'files', label: 'Files', icon: 'folder' },
        { key: 'photos', label: 'Photos', icon: 'photo_library' },
        { key: 'settings', label: 'Settings', icon: 'settings' },
      ]}
    />
  )
}

/**
 * Links
 * With `href`, a destination renders a link through `LinkProvider`, so the app router handles it. These links open other pages of this site.
 */
export function ExampleLinks() {
  return (
    <NavigationBar
      aria-label="Documentation"
      value="components"
      items={[
        { key: 'overview', label: 'Overview', icon: 'home', href: '/' },
        { key: 'start', label: 'Start', icon: 'rocket_launch', href: '/start' },
        { key: 'components', label: 'Components', icon: 'widgets', href: '/components/button' },
        { key: 'theme', label: 'Theme', icon: 'palette', href: '/theme' },
      ]}
    />
  )
}

/**
 * Compact layout
 * On a phone, the bar sits under the content and each destination changes the whole view.
 */
export function ExampleCompactLayout() {
  const [value, setValue] = useState('home')
  const current = SCREENS.find((screen) => screen.key === value) ?? SCREENS[0]!
  return (
    <div
      className="g-frame"
      style={{ display: 'flex', flexDirection: 'column', maxWidth: 412, height: 480 }}
    >
      <AppBar
        scrollTarget={null}
        title={current.label}
        actions={<IconButton icon="search" label={`Search ${current.label.toLowerCase()}`} />}
      />
      <div className="g-muted" style={{ flex: 1, padding: 16 }}>
        {current.text}
      </div>
      <NavigationBar
        aria-label="Main"
        itemLayout="vertical"
        items={SCREENS}
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

const SCREENS: (NavItem & { text: string })[] = [
  { key: 'home', label: 'Home', icon: 'home', text: 'Recent files and storage use.' },
  {
    key: 'files',
    label: 'Files',
    icon: 'folder',
    badge: 3,
    badgeLabel: '3 new files',
    text: 'Three people shared files with you.',
  },
  {
    key: 'photos',
    label: 'Photos',
    icon: 'photo_library',
    text: 'Photos and videos from your phone.',
  },
  {
    key: 'activity',
    label: 'Activity',
    icon: 'notifications',
    badge: true,
    badgeLabel: 'New activity',
    text: 'Comments and changes on your files.',
  },
]
