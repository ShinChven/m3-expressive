import { Tab, TabGroup, TabPanel, Tabs } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'
import './tabs.css'

const TABS = [
  { value: 'details', label: 'Details', icon: 'info' },
  { value: 'comments', label: 'Comments', icon: 'comment' },
  { value: 'sharing', label: 'Sharing', icon: 'group' },
  { value: 'versions', label: 'Versions', icon: 'history' },
  { value: 'activity', label: 'Activity', icon: 'timeline' },
  { value: 'labels', label: 'Labels', icon: 'label' },
  { value: 'offline', label: 'Offline', icon: 'offline_pin' },
  { value: 'devices', label: 'Devices', icon: 'devices' },
  { value: 'security', label: 'Security', icon: 'lock' },
  { value: 'backups', label: 'Backups', icon: 'backup' },
]

const FILE_TYPES = [
  'All',
  'Documents',
  'Spreadsheets',
  'Presentations',
  'Images',
  'Videos',
  'Audio',
  'PDFs',
  'Archives',
  'Folders',
  'Shortcuts',
  'Forms',
]

export const doc = defineDoc({
  slug: 'tabs',
  name: 'Tabs',
  group: 'navigation',
  icon: 'tab',
  order: 6,
  summary:
    'Tabs organize related content into views at the same level. Primary tabs sit under the app bar; secondary tabs separate content inside a view. `TabGroup` connects the tabs with their `TabPanel`s.',
  imports: ['Tabs', 'Tab', 'TabGroup', 'TabPanel'],
  preview: () => (
    <div className="tabs-preview">
      <Tabs aria-label="Preview" defaultValue="details">
        <Tab value="details" label="Details" icon="info" />
        <Tab value="comments" label="Comments" icon="comment" badge={2} />
        <Tab value="versions" label="Versions" icon="history" />
      </Tabs>
    </div>
  ),
  playground: {
    controls: {
      variant: { type: 'select', options: ['primary', 'secondary'], default: 'primary' },
      tabs: { type: 'number', default: 4, min: 2, max: 10 },
      icons: { type: 'select', options: ['none', 'stacked', 'inline'], default: 'none' },
      badge: { type: 'boolean', default: false, label: 'Badge on Comments' },
      scrollable: { type: 'boolean', default: false },
      activation: { type: 'select', options: ['automatic', 'manual'], default: 'automatic' },
      disabled: { type: 'boolean', default: false, label: 'Disable the last tab' },
    },
    render: (v) => {
      const tabs = TABS.slice(0, v.tabs)
      return (
        <div>
          <Tabs
            aria-label="File details"
            variant={v.variant}
            defaultValue="details"
            scrollable={v.scrollable}
            activation={v.activation}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                icon={v.icons === 'none' ? undefined : tab.icon}
                inlineIcon={v.icons === 'inline'}
                badge={v.badge && tab.value === 'comments' ? 2 : undefined}
                disabled={v.disabled && index === tabs.length - 1}
              />
            ))}
          </Tabs>
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const tabs = TABS.slice(0, v.tabs)
      const children = tabs
        .map((tab, index) =>
          jsx('Tab', {
            value: tab.value,
            label: tab.label,
            icon: v.icons === 'none' ? undefined : tab.icon,
            inlineIcon: v.icons === 'inline',
            badge: v.badge && tab.value === 'comments' ? 2 : undefined,
            disabled: v.disabled && index === tabs.length - 1,
          }),
        )
        .join('\n')
      return jsx(
        'Tabs',
        {
          'aria-label': 'File details',
          ...changed(v, ['variant']),
          defaultValue: 'details',
          ...changed(v, ['scrollable', 'activation']),
        },
        children,
      )
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'Tabs',
      interfaces: ['TabsProps'],
      inherits: 'Also accepts native `<div>` attributes.',
    },
    {
      name: 'Tab',
      interfaces: ['TabProps'],
      inherits: 'Also accepts native `<button>` attributes.',
    },
    {
      name: 'TabPanel',
      interfaces: ['TabPanelProps'],
      inherits: 'Also accepts native `<div>` attributes.',
    },
    { name: 'TabGroup', interfaces: ['TabGroupProps'] },
  ],
  guidelines: [
    'Use primary tabs under the app bar for the main views of a screen. Use secondary tabs for content inside one of those views.',
    'Keep labels short. Use icons on every tab or on none of them.',
    'Wrap `Tabs` and their `TabPanel`s in a `TabGroup`. The group shares the selection and links each tab to its panel for assistive tech.',
    'Fixed tabs share the width equally. Use `scrollable` for more than five tabs or for long labels.',
  ],
})

/**
 * Tabs with panels
 * `TabGroup` shares the selection between `Tabs` and the `TabPanel`s and links each tab to its panel. Arrow keys move between tabs.
 */
export function ExamplePanels() {
  return (
    <div className="g-frame">
      <TabGroup defaultValue="details">
        <Tabs aria-label="File details">
          <Tab value="details" label="Details" />
          <Tab value="sharing" label="Sharing" />
          <Tab value="versions" label="Versions" />
        </Tabs>
        <TabPanel value="details" style={{ padding: 24 }}>
          Name, size and owner of “Harbor budget.xlsx”.
        </TabPanel>
        <TabPanel value="sharing" style={{ padding: 24 }}>
          Choose who can view or edit the file.
        </TabPanel>
        <TabPanel value="versions" style={{ padding: 24 }}>
          Compare and restore earlier versions.
        </TabPanel>
      </TabGroup>
    </div>
  )
}

/**
 * Secondary tabs
 * Secondary tabs separate content inside a view, here under the primary “Versions” tab. Their indicator spans the whole tab.
 */
export function ExampleSecondary() {
  return (
    <div className="g-frame">
      <TabGroup defaultValue="versions">
        <Tabs aria-label="File details">
          <Tab value="details" label="Details" />
          <Tab value="sharing" label="Sharing" />
          <Tab value="versions" label="Versions" />
        </Tabs>
        <TabPanel value="details" style={{ padding: 24 }}>
          Name, size and owner of “Harbor budget.xlsx”.
        </TabPanel>
        <TabPanel value="sharing" style={{ padding: 24 }}>
          Choose who can view or edit the file.
        </TabPanel>
        <TabPanel value="versions">
          <TabGroup defaultValue="current">
            <Tabs variant="secondary" aria-label="Versions">
              <Tab value="current" label="Current" />
              <Tab value="earlier" label="Earlier" />
              <Tab value="compare" label="Compare" />
            </Tabs>
            <TabPanel value="current" style={{ padding: 24 }}>
              The current version has 3 changes since yesterday.
            </TabPanel>
            <TabPanel value="earlier" style={{ padding: 24 }}>
              12 earlier versions from the last 30 days.
            </TabPanel>
            <TabPanel value="compare" style={{ padding: 24 }}>
              The current version and an earlier one side by side.
            </TabPanel>
          </TabGroup>
        </TabPanel>
      </TabGroup>
    </div>
  )
}

/**
 * Icons
 * Primary tabs show the icon above the label. `inlineIcon` puts it beside the label to save height. The selected tab shows the filled icon.
 */
export function ExampleIcons() {
  return (
    <div className="g-stack g-fill">
      <Tabs aria-label="File types" defaultValue="images">
        <Tab value="images" label="Images" icon="image" />
        <Tab value="videos" label="Videos" icon="movie" />
        <Tab value="documents" label="Documents" icon="description" />
      </Tabs>
      <Tabs aria-label="File types, compact" defaultValue="images">
        <Tab value="images" label="Images" icon="image" inlineIcon />
        <Tab value="videos" label="Videos" icon="movie" inlineIcon />
        <Tab value="documents" label="Documents" icon="description" inlineIcon />
      </Tabs>
    </div>
  )
}

/**
 * Badges
 * A number shows a count and `true` shows a small dot. On a tab without a label, the badge sits on the icon. The visible badge is hidden from screen readers: `badgeLabel` gives them the text.
 */
export function ExampleBadges() {
  return (
    <Tabs aria-label="Mail" defaultValue="inbox" className="g-fill">
      <Tab value="inbox" label="Inbox" badge={5} badgeLabel="5 unread messages" />
      <Tab value="chats" label="Chats" badge badgeLabel="New replies" />
      <Tab value="archive" label="Archive" />
      <Tab value="alerts" icon="notifications" badge={3} aria-label="Alerts, 3 new" />
    </Tabs>
  )
}

/**
 * Scrollable tabs
 * `scrollable` keeps the natural width of each tab and scrolls the row sideways. The selected tab scrolls into view.
 */
export function ExampleScrollable() {
  const [type, setType] = useState('All')
  return (
    <div className="g-frame">
      <Tabs aria-label="File types" scrollable value={type} onChange={setType}>
        {FILE_TYPES.map((name) => (
          <Tab key={name} value={name} label={name} />
        ))}
      </Tabs>
      <p className="g-muted" style={{ margin: 0, padding: 24 }}>
        Showing: {type}
      </p>
    </div>
  )
}

/**
 * Manual activation
 * With `activation="manual"`, arrow keys only move the focus; Enter or Space selects the tab. Use it when each panel loads data, so people do not load every panel on the way.
 */
export function ExampleManual() {
  const [tab, setTab] = useState('flights')
  const [loads, setLoads] = useState(1)
  const select = (next: string) => {
    setTab(next)
    setLoads((count) => count + 1)
  }
  return (
    <div className="g-frame">
      <TabGroup value={tab} onChange={select}>
        <Tabs aria-label="Trip bookings" activation="manual">
          <Tab value="flights" label="Flights" icon="flight" inlineIcon />
          <Tab value="hotels" label="Hotels" icon="hotel" inlineIcon />
          <Tab value="cars" label="Cars" icon="directions_car" inlineIcon />
        </Tabs>
        <TabPanel value="flights" style={{ padding: 24 }}>
          Flight times and seats for the trip to Lisbon.
        </TabPanel>
        <TabPanel value="hotels" style={{ padding: 24 }}>
          Hotel rooms near the old town.
        </TabPanel>
        <TabPanel value="cars" style={{ padding: 24 }}>
          Rental cars at the airport.
        </TabPanel>
      </TabGroup>
      <p className="g-muted" style={{ margin: 0, padding: '0 24px 24px' }}>
        Panels loaded: {loads}
      </p>
    </div>
  )
}
