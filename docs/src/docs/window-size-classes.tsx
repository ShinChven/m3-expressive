import {
  Button,
  Card,
  DataTable,
  IconButton,
  isAtLeast,
  List,
  ListItem,
  MenuButton,
  MenuItem,
  Text,
  useWindowSizeClass,
  WINDOW_BREAKPOINTS,
  type WindowSizeClass,
} from '@m3-expressive/react'
import { useEffect, useState } from 'react'
import { defineDoc } from '../kit/doc'
import { FILES } from '../mock'
import './window-size-classes.css'

const SIZE_CLASSES = ['compact', 'medium', 'expanded', 'large', 'extra-large'] as const

const SHORT: Record<WindowSizeClass, string> = {
  compact: `< ${WINDOW_BREAKPOINTS.medium}`,
  medium: `≥ ${WINDOW_BREAKPOINTS.medium}`,
  expanded: `≥ ${WINDOW_BREAKPOINTS.expanded}`,
  large: `≥ ${WINDOW_BREAKPOINTS.large}`,
  'extra-large': `≥ ${WINDOW_BREAKPOINTS['extra-large']}`,
}

export const doc = defineDoc({
  slug: 'window-size-classes',
  name: 'Window size classes',
  group: 'layout',
  icon: 'devices',
  order: 2,
  summary:
    'Window size classes put window widths into five groups: compact, medium, expanded, large and extra-large. `useWindowSizeClass` returns the current class, so a layout can change at the same breakpoints as the M3 components.',
  imports: [
    'useWindowSizeClass',
    'isAtLeast',
    'WINDOW_BREAKPOINTS',
    'Text',
    'Card',
    'List',
    'ListItem',
    'Button',
    'IconButton',
    'MenuButton',
    'MenuItem',
    'DataTable',
  ],
  preview: function WindowSizePreview() {
    const size = useWindowSizeClass()
    return (
      <div className="window-size-doc-preview">
        {SIZE_CLASSES.map((key) => (
          <span key={key} data-current={key === size ? '' : undefined}>
            <span>{key}</span>
            <span>{SHORT[key]}</span>
          </span>
        ))}
      </div>
    )
  },
  playground: {
    controls: {
      min: {
        type: 'select',
        options: SIZE_CLASSES,
        default: 'expanded',
        label: 'Minimum class for two panes',
      },
    },
    render: function SizePlayground(v) {
      const size = useWindowSizeClass()
      const twoPanes = isAtLeast(size, v.min)
      return (
        <div className="g-stack">
          <Text variant="headline-small">{size}</Text>
          <div className="window-size-doc-panes">
            {twoPanes && <Card variant="filled">List</Card>}
            <Card variant="filled">{twoPanes ? 'Detail' : 'List'}</Card>
          </div>
        </div>
      )
    },
    code: (v, { jsx }) => {
      const panes = jsx(
        'div',
        { className: 'window-size-doc-panes' },
        `{twoPanes && <Card variant="filled">List</Card>}\n<Card variant="filled">{twoPanes ? 'Detail' : 'List'}</Card>`,
      )
      return `const size = useWindowSizeClass()\nconst twoPanes = isAtLeast(size, '${v.min}')\n\n${jsx('Text', { variant: 'headline-small' }, '{size}')}\n${panes}`
    },
  },
  api: [
    {
      name: 'useWindowSizeClass',
      interfaces: [],
      inherits:
        "`useWindowSizeClass(fallback?: WindowSizeClass): WindowSizeClass`. Returns `'compact' | 'medium' | 'expanded' | 'large' | 'extra-large'` and updates when the window is resized. `fallback` (default `'expanded'`) is used during server rendering.",
    },
    {
      name: 'isAtLeast',
      interfaces: [],
      inherits:
        "`isAtLeast(current: WindowSizeClass, min: WindowSizeClass): boolean`. True when `current` is `min` or a larger class, e.g. `isAtLeast('large', 'expanded')`.",
    },
    {
      name: 'WINDOW_BREAKPOINTS',
      interfaces: [],
      inherits:
        "`{ medium: 600, expanded: 840, large: 1200, 'extra-large': 1600 }`. The lower bound of each class in CSS pixels. Compact is everything below `medium`.",
    },
  ],
  guidelines: [
    'Size classes come from the browser window width, not from the width of a container. For a component that must fit its container, use CSS (for example the feed layout grid) instead.',
    'Compare classes with `isAtLeast` rather than with `===`, so new wider classes keep the wide layout.',
    'Change the layout, not the content: the same actions and data stay available in every class, in a different arrangement.',
  ],
})

/**
 * Size classes
 * The five classes with their widths and the navigation the app scaffold uses. The highlighted row is the class of this browser window: resize the window to see it change.
 */
export function ExampleClasses() {
  const size = useWindowSizeClass()
  const width = useWindowWidth()
  return (
    <div className="g-fill window-size-doc-list">
      <Text variant="title-medium">
        This window is {width}px wide: {size}.
      </Text>
      <List aria-label="Window size classes">
        {CLASSES.map((c) => (
          <ListItem
            key={c.key}
            headline={c.key}
            supportingText={c.range}
            trailingSupportingText={c.navigation}
            selected={c.key === size}
          />
        ))}
      </List>
    </div>
  )
}

const CLASSES: { key: WindowSizeClass; range: string; navigation: string }[] = [
  {
    key: 'compact',
    range: `Narrower than ${WINDOW_BREAKPOINTS.medium}px`,
    navigation: 'Navigation bar',
  },
  {
    key: 'medium',
    range: `${WINDOW_BREAKPOINTS.medium}px to ${WINDOW_BREAKPOINTS.expanded - 1}px`,
    navigation: 'Collapsed navigation rail',
  },
  {
    key: 'expanded',
    range: `${WINDOW_BREAKPOINTS.expanded}px to ${WINDOW_BREAKPOINTS.large - 1}px`,
    navigation: 'Expanded navigation rail',
  },
  {
    key: 'large',
    range: `${WINDOW_BREAKPOINTS.large}px to ${WINDOW_BREAKPOINTS['extra-large'] - 1}px`,
    navigation: 'Expanded navigation rail',
  },
  {
    key: 'extra-large',
    range: `${WINDOW_BREAKPOINTS['extra-large']}px and wider`,
    navigation: 'Expanded navigation rail',
  },
]

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth)
  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return width
}

/**
 * Adaptive actions
 * On compact windows the message editor shows the main action as an icon button and moves the others into a menu. From medium windows up, every action has a labeled button.
 */
export function ExampleActions() {
  const size = useWindowSizeClass()
  if (!isAtLeast(size, 'medium')) {
    return (
      <>
        <MenuButton
          trigger={(props) => <IconButton {...props} icon="more_vert" label="More actions" />}
        >
          <MenuItem icon="attach_file">Attach</MenuItem>
          <MenuItem icon="schedule">Schedule</MenuItem>
        </MenuButton>
        <IconButton variant="filled" icon="send" label="Send" />
      </>
    )
  }
  return (
    <>
      <Button variant="text" icon="attach_file">
        Attach
      </Button>
      <Button variant="outlined" icon="schedule">
        Schedule
      </Button>
      <Button icon="send">Send</Button>
    </>
  )
}

/**
 * Columns by breakpoint
 * `WINDOW_BREAKPOINTS` gives the class widths in pixels. Here the data table hides the owner column below expanded windows and the size column below large windows.
 */
export function ExampleColumns() {
  return (
    <DataTable
      aria-label="Recent files"
      rows={FILES.slice(0, 5)}
      getRowId={(row) => row.id}
      columns={[
        { key: 'name', header: 'Name', cell: (row) => row.name },
        { key: 'status', header: 'Status', cell: (row) => row.status },
        {
          key: 'owner',
          header: 'Owner',
          cell: (row) => row.owner,
          hideBelow: WINDOW_BREAKPOINTS.expanded,
        },
        {
          key: 'size',
          header: 'Size (KB)',
          numeric: true,
          cell: (row) => row.size.toLocaleString(),
          hideBelow: WINDOW_BREAKPOINTS.large,
        },
      ]}
    />
  )
}
