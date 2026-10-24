import { Badge, IconButton } from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

export const doc = defineDoc({
  slug: 'icon-button',
  name: 'Icon button',
  group: 'actions',
  icon: 'add_circle',
  order: 2,
  summary:
    'Icon buttons run an action with one icon and no visible text. Use them in toolbars, app bars and list rows, for actions with a well-known icon.',
  imports: ['IconButton', 'Badge'],
  preview: () => (
    <div className="g-preview-row">
      <IconButton icon="undo" label="Undo" />
      <IconButton variant="filled" icon="add" label="Add" />
      <IconButton variant="tonal" icon="share" label="Share" />
      <IconButton variant="outlined" icon="delete" label="Delete" />
      <IconButton icon="favorite" label="Favorite" selected />
    </div>
  ),
  playground: {
    controls: {
      variant: {
        type: 'select',
        options: ['standard', 'filled', 'tonal', 'outlined'],
        default: 'standard',
      },
      icon: { type: 'icon', default: 'favorite' },
      label: { type: 'text', default: 'Add to favorites' },
      size: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], default: 'sm' },
      width: { type: 'select', options: ['narrow', 'default', 'wide'], default: 'default' },
      shape: { type: 'select', options: ['round', 'square'], default: 'round' },
      shapeMorph: { type: 'boolean', default: true, label: 'Shape morph' },
      selected: {
        type: 'select',
        options: ['none', 'off', 'on'],
        default: 'none',
        label: 'Toggle',
      },
      tooltip: { type: 'boolean', default: true },
      badge: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) => (
      <IconButton
        variant={v.variant}
        icon={v.icon}
        label={v.label}
        size={v.size}
        width={v.width}
        shape={v.shape}
        shapeMorph={v.shapeMorph}
        selected={v.selected === 'none' ? undefined : v.selected === 'on'}
        tooltip={v.tooltip}
        badge={v.badge ? <Badge value={3} /> : undefined}
        disabled={v.disabled}
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('IconButton', {
        ...changed(v, ['variant']),
        icon: v.icon,
        label: v.label,
        ...changed(v, ['size', 'width', 'shape']),
        shapeMorph: v.shapeMorph ? undefined : raw('false'),
        selected: v.selected === 'none' ? undefined : v.selected === 'on' || raw('false'),
        tooltip: v.tooltip,
        badge: v.badge ? raw('<Badge value={3} />') : undefined,
        disabled: v.disabled,
      }),
  },
  api: [
    {
      name: 'IconButton',
      interfaces: ['IconButtonOwnProps'],
      inherits:
        'Also accepts native `<button>` attributes. With `href` it renders a link (through `LinkProvider`) and accepts anchor attributes.',
    },
  ],
  guidelines: [
    'Use an icon button only when the icon is clear without text. Otherwise use a button with a label.',
    'Every icon button needs a `label`. Turn on `tooltip` so that people who use a mouse can read it too.',
    'For a toggle, keep the `label` the same in both states. `selected` tells assistive tech whether it is on.',
    'Use the standard variant in dense toolbars, and filled or tonal for the one action that matters most in a group.',
  ],
})

/**
 * Variants
 * Standard icon buttons have no container. Outlined, tonal and filled add emphasis, in that order.
 */
export function ExampleVariants() {
  return (
    <>
      <IconButton icon="more_vert" label="More options" />
      <IconButton variant="outlined" icon="content_copy" label="Duplicate" />
      <IconButton variant="tonal" icon="share" label="Share" />
      <IconButton variant="filled" icon="add" label="New folder" />
    </>
  )
}

/**
 * Toggle buttons
 * `selected` makes a toggle button. When selected, the icon fills and the color changes. `selectedIcon` swaps the icon.
 */
export function ExampleToggle() {
  const [starred, setStarred] = useState(true)
  const [pinned, setPinned] = useState(false)
  const [preview, setPreview] = useState(false)
  return (
    <>
      <IconButton
        icon="star"
        label="Star file"
        selected={starred}
        onClick={() => setStarred(!starred)}
      />
      <IconButton
        variant="filled"
        icon="push_pin"
        label="Pin to top of inbox"
        selected={pinned}
        onClick={() => setPinned(!pinned)}
      />
      <IconButton
        variant="outlined"
        icon="visibility_off"
        selectedIcon="visibility"
        label="Show preview"
        selected={preview}
        onClick={() => setPreview(!preview)}
      />
    </>
  )
}

/**
 * Sizes, widths and shapes
 * Five sizes from `xs` (32dp) to `xl` (136dp). `width` makes the container narrow or wide at the same height, and `shape="square"` gives it rounded corners.
 */
export function ExampleSizes() {
  return (
    <>
      <IconButton variant="tonal" size="xs" icon="add" label="Add, extra small" />
      <IconButton variant="tonal" icon="add" label="Add, small" />
      <IconButton variant="tonal" size="md" icon="add" label="Add, medium" />
      <IconButton variant="tonal" size="lg" icon="add" label="Add, large" />
      <IconButton variant="filled" width="narrow" icon="chevron_left" label="Previous" />
      <IconButton variant="filled" width="wide" icon="chevron_right" label="Next" />
      <IconButton variant="outlined" shape="square" icon="crop" label="Crop" />
    </>
  )
}

/**
 * Formatting toolbar
 * `tooltip` shows the `label` on hover and keyboard focus. Toggles show the active text format.
 */
export function ExampleToolbar() {
  const [formats, setFormats] = useState<string[]>(['bold'])
  const toggle = (format: string) =>
    setFormats((list) =>
      list.includes(format) ? list.filter((f) => f !== format) : [...list, format],
    )
  return (
    <div className="g-row" style={{ gap: 4 }}>
      <IconButton icon="undo" label="Undo" tooltip className="m3-mirror-rtl" />
      <IconButton icon="redo" label="Redo" tooltip className="m3-mirror-rtl" />
      {['bold', 'italic', 'underlined'].map((format) => (
        <IconButton
          key={format}
          icon={`format_${format}`}
          label={format[0]!.toUpperCase() + format.slice(1)}
          tooltip
          selected={formats.includes(format)}
          onClick={() => toggle(format)}
        />
      ))}
      <IconButton icon="add_link" label="Insert link" tooltip />
      <IconButton icon="add_photo_alternate" label="Insert image" tooltip />
    </div>
  )
}

/**
 * Badges
 * `badge` places a `Badge` at the top-end corner. The `label` names the button, so put the count in the label as well.
 */
export function ExampleBadge() {
  const [read, setRead] = useState(false)
  return (
    <>
      <IconButton
        icon="notifications"
        label={read ? 'Notifications' : 'Notifications, 5 new'}
        tooltip
        badge={<Badge value={5} invisible={read} />}
        onClick={() => setRead(true)}
      />
      <IconButton icon="forum" label="Comments, new replies" tooltip badge={<Badge />} />
      <IconButton
        variant="tonal"
        icon="inbox"
        label="Inbox, 1,200 unread"
        tooltip
        badge={<Badge value={1200} />}
      />
    </>
  )
}

/**
 * Links and disabled
 * With `href` the icon button renders a link. A disabled icon button cannot be focused and shows no tooltip.
 */
export function ExampleStates() {
  return (
    <>
      <IconButton href="/" icon="arrow_back" label="Back to overview" className="m3-mirror-rtl" />
      <IconButton variant="tonal" icon="delete" label="Delete file" disabled />
      <IconButton variant="filled" icon="send" label="Send" disabled />
    </>
  )
}
