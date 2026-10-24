import { Fab, List, ListItem, Tooltip } from '@m3-expressive/react'
import { type UIEvent, useRef, useState } from 'react'
import { defineDoc } from '../kit/doc'
import { FILES } from '../mock'

export const doc = defineDoc({
  slug: 'fab',
  name: 'FAB',
  group: 'actions',
  icon: 'edit',
  order: 3,
  summary:
    'A floating action button (FAB) holds the main action of a screen, such as creating a folder. FABs and extended FABs come in three sizes; an extended FAB adds a text label and can collapse to its icon while people scroll.',
  imports: ['Fab', 'Tooltip', 'List', 'ListItem'],
  preview: () => (
    <div className="g-preview-row">
      <Fab icon="edit" aria-label="Edit" />
      <Fab icon="add" label="New folder" />
    </div>
  ),
  playground: {
    controls: {
      icon: { type: 'icon', default: 'add' },
      label: { type: 'text', default: 'New folder', label: 'Label (empty for icon only)' },
      color: {
        type: 'select',
        options: [
          'primary-container',
          'secondary-container',
          'tertiary-container',
          'primary',
          'secondary',
          'tertiary',
        ],
        default: 'primary-container',
      },
      size: {
        type: 'select',
        options: ['regular', 'medium', 'large'],
        default: 'regular',
      },
      expanded: { type: 'boolean', default: true, label: 'Expanded (extended only)' },
      lowered: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) => (
      <Fab
        icon={v.icon}
        label={v.label || undefined}
        aria-label={v.label ? undefined : 'New folder'}
        color={v.color}
        size={v.size}
        expanded={v.expanded}
        lowered={v.lowered}
        disabled={v.disabled}
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('Fab', {
        icon: v.icon,
        label: v.label,
        'aria-label': v.label ? undefined : 'New folder',
        ...changed(v, ['color', 'size', 'expanded']),
        lowered: v.lowered,
        disabled: v.disabled,
      }),
  },
  api: [
    {
      name: 'Fab',
      interfaces: ['FabOwnProps'],
      inherits:
        'Also accepts native `<button>` attributes. With `href` it renders a link (through `LinkProvider`) and accepts anchor attributes.',
    },
  ],
  guidelines: [
    'Use at most one FAB per screen, for the action people take most often there.',
    'Give an icon-only FAB an `aria-label`. An extended FAB is named by its `label`, also while it is collapsed.',
    'Place the FAB at the bottom end of the screen or pane, above the content and clear of navigation.',
    'Do not use a FAB for minor or destructive actions, such as settings or delete. For a set of related actions, open a FAB menu instead of stacking small FABs.',
  ],
})

/**
 * Sizes
 * Regular (56dp), medium (80dp) and large (96dp). Larger FABs suit wide screens with more space.
 */
export function ExampleSizes() {
  return (
    <>
      <Fab icon="add" aria-label="New folder" />
      <Fab icon="add" size="medium" aria-label="New folder" />
      <Fab icon="add" size="large" aria-label="New folder" />
    </>
  )
}

/**
 * Colors
 * The tonal `*-container` colors are the default family; `primary`, `secondary` and `tertiary` give the highest emphasis. Choose a color that stands out from the surface behind the FAB.
 */
export function ExampleColors() {
  return (
    <>
      <Fab icon="edit" aria-label="Edit" />
      <Fab icon="edit" color="secondary-container" aria-label="Edit" />
      <Fab icon="edit" color="tertiary-container" aria-label="Edit" />
      <Fab icon="edit" color="primary" aria-label="Edit" />
      <Fab icon="edit" color="secondary" aria-label="Edit" />
      <Fab icon="edit" color="tertiary" aria-label="Edit" />
    </>
  )
}

/**
 * Extended FAB
 * `label` adds text next to the icon. Extended FABs share the three sizes; the label grows from title medium to headline small.
 */
export function ExampleExtended() {
  return (
    <>
      <Fab icon="add" label="New folder" />
      <Fab icon="upload" label="Upload" size="medium" color="secondary-container" />
      <Fab icon="event" label="New event" size="large" color="tertiary-container" />
    </>
  )
}

/**
 * Collapse on scroll
 * Set `expanded` to false to collapse an extended FAB to its icon. Here it collapses while the list scrolls down and expands when it scrolls up.
 */
export function ExampleCollapse() {
  const [expanded, setExpanded] = useState(true)
  const lastTop = useRef(0)
  const onScroll = (event: UIEvent<HTMLDivElement>) => {
    const top = event.currentTarget.scrollTop
    setExpanded(top < lastTop.current || top < 16)
    lastTop.current = top
  }
  return (
    <div className="g-frame" style={{ maxWidth: 420 }}>
      <div className="g-scroll-box" onScroll={onScroll}>
        <List>
          {FILES.slice(0, 30).map((file) => (
            <ListItem key={file.id} headline={file.name} supportingText={file.folder} />
          ))}
        </List>
      </div>
      <Fab
        icon="upload"
        label="Upload"
        expanded={expanded}
        style={{ position: 'absolute', insetInlineEnd: 16, bottom: 16 }}
      />
    </div>
  )
}

/**
 * Lowered, tooltip and disabled
 * `lowered` reduces the shadow for a FAB on a raised surface. Wrap an icon-only FAB in a `Tooltip` to show its name. A disabled FAB has no shadow.
 */
export function ExampleStates() {
  return (
    <>
      <Fab icon="person_add" lowered aria-label="Add contact" />
      <Tooltip title="Add contact">
        <Fab icon="person_add" aria-label="Add contact" />
      </Tooltip>
      <Fab icon="add" label="New folder" disabled />
    </>
  )
}
