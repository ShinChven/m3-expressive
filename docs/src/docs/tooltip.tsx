import { Button, IconButton, RichTooltip, Tooltip } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import './tooltip.css'

export const doc = defineDoc({
  slug: 'tooltip',
  name: 'Tooltip',
  group: 'communication',
  icon: 'info',
  order: 4,
  summary:
    'Tooltips show a short label or explanation when people hover over, focus or long-press an element. Plain tooltips name icon-only controls; rich tooltips add a subhead, text and actions.',
  imports: ['Tooltip', 'RichTooltip', 'IconButton', 'Button'],
  preview: () => (
    <div className="g-preview-row" style={{ alignItems: 'flex-start' }}>
      <div className="tooltip-doc__anchor">
        <IconButton variant="tonal" icon="undo" label="Undo" />
        <div className="m3-tooltip">Undo</div>
      </div>
      <div className="m3-rich-tooltip tooltip-doc__rich">
        <div className="m3-rich-tooltip__subhead">Offline files</div>
        <div className="m3-rich-tooltip__text">Saved files open without a connection.</div>
      </div>
    </div>
  ),
  playground: {
    controls: {
      kind: { type: 'select', options: ['plain', 'rich'], default: 'plain' },
      title: { type: 'text', default: 'Version history', label: 'Title (plain)' },
      subhead: { type: 'text', default: 'Offline files', label: 'Subhead (rich)' },
      supportingText: {
        type: 'text',
        default: 'Offline files stay on this device and sync when you reconnect.',
        label: 'Supporting text (rich)',
      },
      actions: { type: 'boolean', default: true, label: 'Actions (rich)' },
      persistent: { type: 'boolean', default: false, label: 'Persistent (rich)' },
      placement: {
        type: 'select',
        options: [
          'default',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'right',
          'right-start',
        ],
        default: 'default',
      },
      enterDelay: {
        type: 'number',
        default: 500,
        min: 0,
        max: 1500,
        step: 100,
        label: 'Enter delay',
      },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) => {
      const placement = v.placement === 'default' ? undefined : v.placement
      if (v.kind === 'plain') {
        return (
          <Tooltip
            title={v.title}
            placement={placement}
            enterDelay={v.enterDelay}
            disabled={v.disabled}
          >
            <IconButton icon="history" label="Version history" />
          </Tooltip>
        )
      }
      return (
        <RichTooltip
          key={v.persistent ? 'persistent' : 'hover'}
          subhead={v.subhead || undefined}
          supportingText={v.supportingText}
          actions={v.actions ? <Button variant="text">Learn more</Button> : undefined}
          placement={placement}
          persistent={v.persistent}
          enterDelay={v.enterDelay}
          disabled={v.disabled}
        >
          <Button variant="outlined" icon="info">
            Offline files
          </Button>
        </RichTooltip>
      )
    },
    code: (v, { jsx, changed }) => {
      const placement = v.placement === 'default' ? undefined : v.placement
      if (v.kind === 'plain') {
        return jsx(
          'Tooltip',
          { title: v.title, placement, ...changed(v, ['enterDelay']), disabled: v.disabled },
          '<IconButton icon="history" label="Version history" />',
        )
      }
      return jsx(
        'RichTooltip',
        {
          subhead: v.subhead,
          supportingText: v.supportingText,
          actions: v.actions ? raw('<Button variant="text">Learn more</Button>') : undefined,
          placement,
          persistent: v.persistent,
          ...changed(v, ['enterDelay']),
          disabled: v.disabled,
        },
        '<Button variant="outlined" icon="info">Offline files</Button>',
      )
    },
  },
  api: [
    { name: 'Tooltip', interfaces: ['TooltipProps'] },
    { name: 'RichTooltip', interfaces: ['RichTooltipProps'] },
  ],
  guidelines: [
    'The trigger must be focusable, such as a button or a link, so that keyboard users can open the tooltip.',
    'Keep plain tooltips to a few words. Do not repeat text that is already visible.',
    'Do not put essential information or the only way to do something in a tooltip.',
    'Use a persistent rich tooltip for help that people read while they work; it stays open until they close it.',
  ],
})

/**
 * Plain tooltip
 * Wrap one focusable element in `Tooltip`. It shows after a short hover, at once on keyboard focus, and after a long press on touch screens.
 */
export function ExamplePlain() {
  return (
    <>
      <Tooltip title="Copy link">
        <IconButton icon="link" label="Copy link" />
      </Tooltip>
      <Tooltip title="Saved by Ada Lovelace">
        <Button variant="text" icon="history">
          Version 12
        </Button>
      </Tooltip>
    </>
  )
}

/**
 * Icon buttons
 * `IconButton` has a `tooltip` prop that shows its `label`, so you do not need to wrap it.
 */
export function ExampleIconButtons() {
  return (
    <div className="g-row" style={{ gap: 4 }}>
      <IconButton icon="search" label="Search files" tooltip />
      <IconButton icon="notifications" label="Notifications" tooltip />
      <IconButton icon="help" label="Help" tooltip />
      <IconButton icon="more_vert" label="More options" tooltip />
    </div>
  )
}

/**
 * Placement
 * `placement` sets the preferred side. The tooltip moves to the other side when there is no room.
 */
export function ExamplePlacement() {
  return (
    <>
      <Tooltip title="Shown above" placement="top">
        <Button variant="outlined">Top</Button>
      </Tooltip>
      <Tooltip title="Shown to the right" placement="right">
        <Button variant="outlined">Right</Button>
      </Tooltip>
      <Tooltip title="Shown below">
        <Button variant="outlined">Bottom</Button>
      </Tooltip>
      <Tooltip title="Shown to the left" placement="left">
        <Button variant="outlined">Left</Button>
      </Tooltip>
    </>
  )
}

/**
 * Rich tooltip
 * Adds a `subhead`, `supportingText` and `actions`. It opens on hover and focus, and stays open while the pointer is over it, so people can reach the actions.
 */
export function ExampleRich() {
  return (
    <RichTooltip
      subhead="Offline files"
      supportingText="Offline files stay on this device, so you can open them without a connection. Your changes sync when you reconnect."
      actions={<Button variant="text">Learn more</Button>}
    >
      <Button variant="outlined" icon="info">
        Offline files
      </Button>
    </RichTooltip>
  )
}

/**
 * Persistent rich tooltip
 * `persistent` opens the tooltip on click. It stays open until people click outside it or press Escape. Use `open` and `onOpenChange` to close it from an action.
 */
export function ExamplePersistent() {
  const [open, setOpen] = useState(false)
  return (
    <RichTooltip
      persistent
      open={open}
      onOpenChange={setOpen}
      subhead="View only"
      supportingText="Ada Lovelace owns this folder. Ask her for edit access to add or change files."
      actions={
        <>
          <Button variant="text" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button variant="text" onClick={() => setOpen(false)}>
            Request access
          </Button>
        </>
      }
    >
      <Button variant="outlined" icon="folder_shared">
        Harbor project
      </Button>
    </RichTooltip>
  )
}
