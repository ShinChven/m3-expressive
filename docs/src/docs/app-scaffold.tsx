import {
  AppBar,
  type AppBarVariant,
  AppScaffold,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  FeedLayout,
  IconButton,
  List,
  ListItem,
  type NavItem,
  type NavigationMode,
  type NavSection,
  Text,
  TextField,
} from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import { FILES } from '../mock'
import './app-scaffold.css'

const DESTINATIONS: NavItem[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'files', label: 'Files', icon: 'folder' },
  { key: 'photos', label: 'Photos', icon: 'photo_library' },
  {
    key: 'shared',
    label: 'Shared',
    icon: 'folder_shared',
    badge: 3,
    badgeLabel: '3 new shared files',
  },
  { key: 'backups', label: 'Backups', icon: 'backup' },
  { key: 'trash', label: 'Trash', icon: 'delete' },
  { key: 'settings', label: 'Settings', icon: 'settings' },
]

// Source text of a destination, for the generated code.
function itemSource(item: NavItem): string {
  const badge = item.badge ? `, badge: ${item.badge}, badgeLabel: '${item.badgeLabel}'` : ''
  return `{ key: '${item.key}', label: '${item.label}', icon: '${item.icon}'${badge} }`
}

// Filler content for the scaffold body.
function DemoCards({ count = 6 }: { count?: number }) {
  return (
    <FeedLayout minItemWidth={160} className="app-scaffold-doc-body">
      {FILES.slice(0, count).map((file) => (
        <Card key={file.id} variant="outlined">
          <CardHeader title={file.name} subhead={`${file.kind} · ${file.status}`} />
        </Card>
      ))}
    </FeedLayout>
  )
}

export const doc = defineDoc({
  slug: 'app-scaffold',
  name: 'App scaffold',
  group: 'layout',
  icon: 'web_asset',
  order: 1,
  summary:
    'The app scaffold is the frame of an app: navigation, an app bar and a scrolling body. Navigation follows the window size class: a flexible navigation bar on compact windows, a collapsed rail on medium windows, and an expanded rail beside the content on expanded and larger windows.',
  imports: [
    'AppScaffold',
    'AppBar',
    'Text',
    'IconButton',
    'Button',
    'ButtonGroup',
    'TextField',
    'List',
    'ListItem',
    'Card',
    'CardHeader',
    'FeedLayout',
  ],
  preview: () => (
    <div className="g-frame app-scaffold-doc-frame app-scaffold-doc-preview">
      <AppScaffold
        mode="rail"
        items={DESTINATIONS.slice(0, 4)}
        value="files"
        aria-label="Preview"
        appBar={<AppBar title="Files" scrollTarget={null} />}
      >
        <DemoCards count={4} />
      </AppScaffold>
    </div>
  ),
  playground: {
    controls: {
      mode: {
        type: 'select',
        options: ['auto', 'bar', 'rail', 'expanded-rail', 'modal-rail'],
        default: 'auto',
      },
      destinations: { type: 'number', default: 4, min: 3, max: 7 },
      appBar: {
        type: 'select',
        options: ['small', 'medium-flexible', 'large-flexible', 'none'],
        default: 'small',
        label: 'App bar',
      },
      brand: { type: 'boolean', default: true },
      indicator: {
        type: 'select',
        options: ['hug', 'fill'],
        default: 'hug',
        label: 'Rail indicator',
      },
      fab: { type: 'boolean', default: true, label: 'FAB' },
      footer: { type: 'boolean', default: false, label: 'Navigation footer' },
    },
    render: function ScaffoldPlayground(v) {
      const [view, setView] = useState('home')
      const items = DESTINATIONS.slice(0, v.destinations)
      const title = items.find((item) => item.key === view)?.label
      const variant: AppBarVariant | null = v.appBar === 'none' ? null : v.appBar
      return (
        <div className="g-frame app-scaffold-doc-frame">
          <AppScaffold
            items={items}
            value={view}
            onNavigate={(key) => setView(key)}
            mode={v.mode}
            railIndicator={v.indicator}
            aria-label="Playground"
            brand={
              v.brand ? (
                <Text as="span" variant="title-medium">
                  Northwind Drive
                </Text>
              ) : undefined
            }
            fab={v.fab ? { icon: 'add', label: 'New folder' } : undefined}
            navigationFooter={
              v.footer ? <IconButton icon="account_circle" label="Account" /> : undefined
            }
            appBar={
              variant
                ? (ctx) => (
                    <AppBar
                      variant={variant}
                      title={title}
                      navigation={ctx.menuButton}
                      scrollTarget={ctx.scrollTarget}
                    />
                  )
                : undefined
            }
          >
            <DemoCards count={12} />
          </AppScaffold>
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const items = DESTINATIONS.slice(0, v.destinations)
      const variant = v.appBar === 'none' ? null : v.appBar
      const bar = variant
        ? raw(
            `(ctx) => (\n    <AppBar${variant === 'small' ? '' : `\n      variant="${variant}"`}\n      title={title}\n      navigation={ctx.menuButton}\n      scrollTarget={ctx.scrollTarget}\n    />\n  )`,
          )
        : undefined
      const scaffold = jsx(
        'AppScaffold',
        {
          items: raw('items'),
          value: raw('view'),
          onNavigate: raw('(key) => setView(key)'),
          ...changed(v, ['mode']),
          railIndicator: v.indicator !== 'hug' ? v.indicator : undefined,
          brand: v.brand
            ? raw('<Text as="span" variant="title-medium">Northwind Drive</Text>')
            : undefined,
          fab: v.fab ? raw("{ icon: 'add', label: 'New folder' }") : undefined,
          navigationFooter: v.footer
            ? raw('<IconButton icon="account_circle" label="Account" />')
            : undefined,
          appBar: bar,
        },
        '{/* Screen content */}',
      )
      const list = items.map((item) => `  ${itemSource(item)},`).join('\n')
      return `const items: NavItem[] = [\n${list}\n]\n\nconst [view, setView] = useState('home')\nconst title = items.find((item) => item.key === view)?.label\n\n${scaffold}`
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'AppScaffold',
      interfaces: ['AppScaffoldProps'],
      inherits:
        '`items` and `sections` take `NavItem` and `NavSection` objects, as in the navigation bar and rail.',
    },
    { name: 'ScaffoldContext', interfaces: ['ScaffoldContext'] },
    { name: 'ScaffoldFab', interfaces: ['RailFab'] },
  ],
  guidelines: [
    'Use one scaffold at the root of the app. It is as tall as the window (`100dvh`) and the body scrolls inside it.',
    'Give `items` the top-level destinations for the bar and the collapsed rail. With more than five, compact windows show a menu button and a modal expanded rail in place of the bar. Put every destination, under headlines, in `sections` for the expanded rail.',
    'Pass a render function to `appBar` and use `menuButton` and `scrollTarget` from the context. In `modal-rail` mode the menu button in the app bar is the only way to open navigation.',
    'Set `scrollResetKey` to the route path, so each new screen starts at the top.',
  ],
})

/**
 * File drive shell
 * `items` feed the bar and the collapsed rail; `sections` feed the expanded rail. The brand and the FAB move with the navigation; the FAB extends in the expanded rail. Navigation follows the browser window size, not the size of this frame.
 */
export function ExampleShell() {
  const [view, setView] = useState('files')
  const title = SECTIONS.flatMap((section) => section.items).find((d) => d.key === view)?.label
  return (
    <div className="g-frame app-scaffold-doc-frame">
      <AppScaffold
        items={SECTIONS[0]!.items}
        sections={SECTIONS}
        value={view}
        onNavigate={(key) => setView(key)}
        aria-label="Drive"
        brand={
          <Text as="span" variant="title-medium">
            Northwind Drive
          </Text>
        }
        fab={{ icon: 'add', label: 'New folder' }}
        navigationFooter={<IconButton icon="account_circle" label="Account" />}
        appBar={(ctx) => (
          <AppBar
            title={title}
            navigation={ctx.menuButton}
            scrollTarget={ctx.scrollTarget}
            actions={<IconButton icon="search" label="Search" />}
          />
        )}
      >
        <DemoCards count={12} />
      </AppScaffold>
    </div>
  )
}

const SECTIONS: NavSection[] = [
  {
    items: [
      { key: 'home', label: 'Home', icon: 'home' },
      { key: 'files', label: 'Files', icon: 'folder' },
      { key: 'photos', label: 'Photos', icon: 'photo_library' },
      {
        key: 'shared',
        label: 'Shared',
        icon: 'folder_shared',
        badge: 3,
        badgeLabel: '3 new shared files',
      },
    ],
  },
  {
    headline: 'Storage',
    items: [
      { key: 'backups', label: 'Backups', icon: 'backup' },
      { key: 'trash', label: 'Trash', icon: 'delete' },
      { key: 'settings', label: 'Settings', icon: 'settings' },
    ],
  },
]

/**
 * Collapsing app bar
 * The app bar render function gets `scrollTarget`, so a medium flexible bar collapses as the body scrolls. `scrollResetKey` scrolls the body back to the top when the destination changes.
 */
export function ExampleScroll() {
  const [view, setView] = useState('files')
  const items = DESTINATIONS.slice(0, 4)
  const title = items.find((item) => item.key === view)?.label
  return (
    <div className="g-frame app-scaffold-doc-frame">
      <AppScaffold
        items={items}
        value={view}
        onNavigate={(key) => setView(key)}
        scrollResetKey={view}
        aria-label="Drive"
        appBar={(ctx) => (
          <AppBar
            variant="medium-flexible"
            title={title}
            navigation={ctx.menuButton}
            scrollTarget={ctx.scrollTarget}
            actions={
              <>
                <IconButton icon="filter_list" label="Filter" />
                <IconButton icon="more_vert" label="More" />
              </>
            }
          />
        )}
      >
        <List aria-label={title}>
          {FILES.slice(0, 30).map((row) => (
            <ListItem
              key={row.id}
              headline={row.name}
              supportingText={row.folder}
              trailingSupportingText={row.status}
              onClick={() => {}}
            />
          ))}
        </List>
      </AppScaffold>
    </div>
  )
}

/**
 * Focus mode
 * On expanded and larger windows, the controlled `railExpanded` chooses between the expanded and the collapsed rail. Here a toggle button collapses the rail while people write a note. Smaller windows always show the collapsed rail or the bar.
 */
export function ExampleFocusMode() {
  const [view, setView] = useState('files')
  const [railExpanded, setRailExpanded] = useState(true)
  return (
    <div className="g-frame app-scaffold-doc-frame">
      <AppScaffold
        items={DESTINATIONS.slice(0, 4)}
        value={view}
        onNavigate={(key) => setView(key)}
        railExpanded={railExpanded}
        onRailExpandedChange={setRailExpanded}
        aria-label="Drive"
        appBar={(ctx) => (
          <AppBar
            title="Edit note"
            navigation={ctx.menuButton}
            scrollTarget={ctx.scrollTarget}
            actions={
              <Button
                variant="text"
                icon="fullscreen"
                selected={!railExpanded}
                onClick={() => setRailExpanded(!railExpanded)}
              >
                Focus
              </Button>
            }
          />
        )}
      >
        <div className="app-scaffold-doc-body">
          <TextField label="Title" defaultValue="Trip to Lisbon" fullWidth />
          <TextField
            label="Note"
            multiline
            rows={8}
            defaultValue="The flight leaves at 9:40. Pack a warm jacket."
            fullWidth
          />
        </div>
      </AppScaffold>
    </div>
  )
}

/**
 * Fixed navigation mode
 * `mode` turns off adaptation. Use it when the scaffold runs in a space whose size is not the window size, such as an embedded editor.
 */
export function ExampleMode() {
  const [mode, setMode] = useState<NavigationMode | 'auto'>('rail')
  const [view, setView] = useState('photos')
  return (
    <div className="g-frame app-scaffold-doc-frame">
      <AppScaffold
        mode={mode}
        items={DESTINATIONS.slice(0, 4)}
        value={view}
        onNavigate={(key) => setView(key)}
        aria-label="Drive"
        appBar={(ctx) => (
          <AppBar title="Photos" navigation={ctx.menuButton} scrollTarget={ctx.scrollTarget} />
        )}
      >
        <div className="app-scaffold-doc-body">
          <ButtonGroup
            variant="connected"
            selection="single"
            size="xs"
            aria-label="Navigation mode"
            value={mode}
            onChange={(next) => next && setMode(next as NavigationMode | 'auto')}
          >
            <Button variant="tonal" value="auto">
              Auto
            </Button>
            <Button variant="tonal" value="bar">
              Bar
            </Button>
            <Button variant="tonal" value="rail">
              Rail
            </Button>
            <Button variant="tonal" value="expanded-rail">
              Expanded
            </Button>
            <Button variant="tonal" value="modal-rail">
              Modal
            </Button>
          </ButtonGroup>
        </div>
        <DemoCards count={6} />
      </AppScaffold>
    </div>
  )
}
