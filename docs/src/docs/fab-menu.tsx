import {
  Fab,
  FabMenu,
  FabMenuItem,
  List,
  ListItem,
  useSnackbar,
} from 'material-design-3-expressive-components'
import { defineDoc } from '../kit/doc'
import { FILES } from '../mock'
import './fab-menu.css'

export const doc = defineDoc({
  slug: 'fab-menu',
  name: 'FAB menu',
  group: 'actions',
  icon: 'library_add',
  order: 5,
  summary:
    'A FAB menu opens two to six related actions from a FAB. The FAB turns into a contrasting close button and the items spring out above it. It replaces the speed dial and stacked small FABs.',
  imports: ['FabMenu', 'FabMenuItem', 'Fab', 'List', 'ListItem', 'useSnackbar'],
  preview: () => (
    <div className="g-preview-row" style={{ alignItems: 'flex-end' }}>
      <div className="fab-menu-doc-static">
        <span>Document</span>
        <span>Folder</span>
      </div>
      <Fab icon="add" aria-label="Create" />
    </div>
  ),
  playground: {
    controls: {
      color: { type: 'select', options: ['primary', 'secondary', 'tertiary'], default: 'primary' },
      size: { type: 'select', options: ['regular', 'medium', 'large'], default: 'regular' },
      items: { type: 'number', default: 3, min: 2, max: 6 },
    },
    render: (v) => (
      <div className="fab-menu-doc-stage">
        <FabMenu label="Create" color={v.color} size={v.size}>
          {ITEMS.slice(0, v.items).map((item) => (
            <FabMenuItem key={item.label} icon={item.icon}>
              {item.label}
            </FabMenuItem>
          ))}
        </FabMenu>
      </div>
    ),
    code: (v, { jsx, changed }) =>
      jsx(
        'FabMenu',
        { label: 'Create', ...changed(v, ['color', 'size']) },
        ITEMS.slice(0, v.items)
          .map((item) => `<FabMenuItem icon="${item.icon}">${item.label}</FabMenuItem>`)
          .join('\n'),
      ),
    stage: 'fill',
  },
  api: [
    {
      name: 'FabMenu',
      interfaces: ['FabMenuProps'],
      inherits: 'Also accepts native `<div>` attributes for the root.',
    },
    {
      name: 'FabMenuItem',
      interfaces: [],
      inherits:
        'Props: `icon` and the label as children. Also accepts native `<button>` attributes, or `href` for a link. Choosing an item closes the menu.',
    },
  ],
  guidelines: [
    'Use a FAB menu for two to six closely related actions under one idea, such as “Create” or “Share”. Do not use it with one item.',
    'Open it only from a FAB, never from an extended FAB, and keep it aligned to the trailing edge of the window.',
    'Do not pair a FAB menu with a floating toolbar or a navigation rail FAB: one prominent action set at a time.',
    'Escape and the close button close the menu and return focus to the FAB; arrow keys move between items.',
  ],
})

const ITEMS = [
  { icon: 'description', label: 'Document' },
  { icon: 'folder', label: 'Folder' },
  { icon: 'upload', label: 'Upload' },
  { icon: 'photo_camera', label: 'Scan' },
  { icon: 'table', label: 'Spreadsheet' },
  { icon: 'slideshow', label: 'Presentation' },
]

/**
 * Over content
 * The FAB menu sits at the bottom trailing corner, 16dp from the edges, and opens upwards over the content.
 */
export function ExampleOverContent() {
  const snackbar = useSnackbar()
  return (
    <div className="g-frame" style={{ height: 420, maxWidth: 420 }}>
      <div style={{ height: '100%', overflow: 'auto' }}>
        <List>
          {FILES.slice(0, 12).map((file) => (
            <ListItem key={file.id} headline={file.name} supportingText={file.folder} />
          ))}
        </List>
      </div>
      <FabMenu
        label="Share"
        icon="share"
        style={{ position: 'absolute', insetInlineEnd: 16, bottom: 16 }}
      >
        <FabMenuItem icon="link" onClick={() => snackbar.show('Link copied')}>
          Copy link
        </FabMenuItem>
        <FabMenuItem icon="mail" onClick={() => snackbar.show('Email draft created')}>
          Email
        </FabMenuItem>
        <FabMenuItem icon="chat" onClick={() => snackbar.show('Sent to chat')}>
          Chat
        </FabMenuItem>
      </FabMenu>
    </div>
  )
}

/**
 * Colors and sizes
 * Three color sets: the close button takes the color, the items its container color. One menu size works with every FAB size; the close button lines up with the top of a larger FAB.
 */
export function ExampleColors() {
  return (
    <div className="fab-menu-doc-row">
      {(['primary', 'secondary', 'tertiary'] as const).map((color, i) => (
        <FabMenu
          key={color}
          label={`Create (${color})`}
          color={color}
          size={(['regular', 'medium', 'large'] as const)[i]}
        >
          <FabMenuItem icon="description">Document</FabMenuItem>
          <FabMenuItem icon="folder">Folder</FabMenuItem>
        </FabMenu>
      ))}
    </div>
  )
}
