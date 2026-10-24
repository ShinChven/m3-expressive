import { Button, Fab, IconButton, List, ListItem, TextField, Toolbar } from '@m3-expressive/react'
import { useRef, useState } from 'react'
import { defineDoc } from '../kit/doc'
import { FILES } from '../mock'
import './toolbar.css'

export const doc = defineDoc({
  slug: 'toolbar',
  name: 'Toolbar',
  group: 'actions',
  icon: 'handyman',
  order: 6,
  summary:
    'Toolbars show actions for the current page. The docked toolbar spans the bottom of the window and replaces the bottom app bar; the floating toolbar floats over the content, horizontally or vertically, and can pair with a FAB.',
  imports: ['Toolbar', 'IconButton', 'Button', 'Fab', 'TextField', 'List', 'ListItem'],
  preview: () => (
    <div className="g-preview-col">
      <Toolbar type="floating" color="vibrant" aria-label="Edit">
        <IconButton icon="undo" label="Undo" />
        <IconButton icon="format_bold" label="Bold" selected />
        <IconButton icon="format_italic" label="Italic" />
        <IconButton icon="share" label="Share" variant="filled" />
      </Toolbar>
    </div>
  ),
  playground: {
    controls: {
      type: { type: 'select', options: ['docked', 'floating'], default: 'floating' },
      orientation: {
        type: 'select',
        options: ['horizontal', 'vertical'],
        default: 'horizontal',
        label: 'Orientation (floating)',
      },
      color: { type: 'select', options: ['standard', 'vibrant'], default: 'standard' },
      fab: { type: 'boolean', default: false, label: 'FAB' },
      flat: { type: 'boolean', default: false, label: 'No elevation (floating)' },
    },
    render: function ToolbarPlayground(v) {
      const [bold, setBold] = useState(true)
      return (
        <div className="toolbar-doc-stage" data-orientation={v.orientation}>
          <Toolbar
            type={v.type}
            orientation={v.orientation}
            color={v.color}
            flat={v.flat}
            aria-label="Formatting"
            fab={
              v.fab ? (
                <Fab
                  icon="add"
                  aria-label="Insert"
                  color={v.color === 'vibrant' ? 'tertiary-container' : 'secondary-container'}
                />
              ) : undefined
            }
          >
            <IconButton icon="undo" label="Undo" />
            <IconButton
              icon="format_bold"
              label="Bold"
              selected={bold}
              onClick={() => setBold(!bold)}
            />
            <IconButton icon="format_italic" label="Italic" />
            <IconButton icon="link" label="Insert link" />
          </Toolbar>
        </div>
      )
    },
    code: (v, { jsx, changed }) =>
      jsx(
        'Toolbar',
        {
          ...changed(v, ['type', 'orientation', 'color']),
          flat: v.flat,
          'aria-label': 'Formatting',
          fab: v.fab
            ? {
                raw: `<Fab icon="add" aria-label="Insert" color="${v.color === 'vibrant' ? 'tertiary-container' : 'secondary-container'}" />`,
              }
            : undefined,
        },
        [
          '<IconButton icon="undo" label="Undo" />',
          '<IconButton icon="format_bold" label="Bold" selected={bold} onClick={() => setBold(!bold)} />',
          '<IconButton icon="format_italic" label="Italic" />',
          '<IconButton icon="link" label="Insert link" />',
        ].join('\n'),
      ),
    stage: 'fill',
  },
  api: [
    {
      name: 'Toolbar',
      interfaces: ['ToolbarProps'],
      inherits:
        'Also accepts native `<div>` attributes. Arrow keys move focus between the controls inside; text fields keep their own arrow keys.',
    },
    {
      name: 'useHideOnScroll',
      interfaces: [],
      inherits:
        '`useHideOnScroll(enabled, target, threshold = 80): boolean` reports whether a bar should hide: true while the target scrolls down past the threshold. Toolbars use it for `hideOnScroll`.',
    },
  ],
  guidelines: [
    'Use the docked toolbar for global actions that stay the same across pages, and the floating toolbar for actions of the current content.',
    'Do not show a toolbar together with a navigation bar: both sit at the bottom of the window.',
    'Emphasize one action at most: a filled icon button, a wide icon button or a FAB next to the toolbar, never several.',
    'Keep floating toolbars at least 16dp from the window edge (24dp when vertical) and only as wide as their controls; avoid square icon buttons in them.',
  ],
})

/**
 * Docked
 * The docked toolbar spans the full width at the bottom of the window. On compact windows its controls spread evenly; on wider ones they gather in the middle.
 */
export function ExampleDocked() {
  return (
    <div className="g-frame toolbar-doc-window">
      <div className="toolbar-doc-content g-muted">Message</div>
      <Toolbar aria-label="Message actions">
        <IconButton icon="archive" label="Archive" />
        <IconButton icon="delete" label="Delete" />
        <IconButton icon="mark_email_unread" label="Mark unread" />
        <IconButton icon="reply" label="Reply" variant="filled" width="wide" />
      </Toolbar>
    </div>
  )
}

/**
 * Floating with a FAB
 * A floating toolbar holds the actions of the content under it; a FAB next to it takes the most important one. Vibrant toolbars pair with a tertiary FAB, standard ones with a secondary FAB.
 */
export function ExampleFloatingFab() {
  return (
    <div className="g-frame toolbar-doc-window">
      <div className="toolbar-doc-content g-muted">Photo editor</div>
      <div className="toolbar-doc-float">
        <Toolbar
          type="floating"
          color="vibrant"
          aria-label="Editing tools"
          fab={<Fab icon="check" aria-label="Save" color="tertiary-container" />}
        >
          <IconButton icon="crop" label="Crop" />
          <IconButton icon="tune" label="Adjust" selected />
          <IconButton icon="filter" label="Filters" />
          <IconButton icon="draw" label="Markup" />
        </Toolbar>
      </div>
    </div>
  )
}

/**
 * Vertical
 * On larger windows, floating toolbars can be vertical, on the side opposite the navigation rail. Use default or narrow icon buttons to keep them slim.
 */
export function ExampleVertical() {
  return (
    <div className="g-frame toolbar-doc-window" style={{ height: 380 }}>
      <div className="toolbar-doc-content g-muted">Canvas</div>
      <div className="toolbar-doc-side">
        <Toolbar type="floating" orientation="vertical" aria-label="Drawing tools">
          <IconButton icon="arrow_selector_tool" label="Select" selected />
          <IconButton icon="brush" label="Brush" />
          <IconButton icon="ink_eraser" label="Eraser" />
          <IconButton icon="text_fields" label="Text" />
          <IconButton icon="shapes" label="Shapes" />
        </Toolbar>
      </div>
    </div>
  )
}

/**
 * Other controls
 * A toolbar is a row of slots: buttons, icon buttons and text fields all fit. Here a reply field and a send button.
 */
export function ExampleSlots() {
  return (
    <Toolbar type="floating" aria-label="Reply" style={{ paddingInlineStart: 16 }}>
      <TextField aria-label="Reply" placeholder="Reply to Ada" className="toolbar-doc-field" />
      <IconButton icon="mood" label="Emoji" />
      <Button icon="send">Send</Button>
    </Toolbar>
  )
}

/**
 * Hide on scroll
 * `hideOnScroll` slides the toolbar away while the content scrolls down and brings it back when it scrolls up. Scroll the list.
 */
export function ExampleHideOnScroll() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="g-frame toolbar-doc-window" style={{ height: 360 }}>
      <div ref={ref} style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
        <List>
          {FILES.slice(0, 30).map((file) => (
            <ListItem key={file.id} headline={file.name} supportingText={file.folder} />
          ))}
        </List>
      </div>
      <div className="toolbar-doc-float">
        <Toolbar type="floating" hideOnScroll scrollTarget={ref} aria-label="File actions">
          <IconButton icon="sort" label="Sort" />
          <IconButton icon="filter_list" label="Filter" />
          <IconButton icon="create_new_folder" label="New folder" />
        </Toolbar>
      </div>
    </div>
  )
}
