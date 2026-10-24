import {
  Avatar,
  Checkbox,
  List,
  ListItem,
  ListSubheader,
  Switch,
  useSnackbar,
} from 'material-design-3-expressive-components'
import { useState } from 'react'
import { IMAGES } from '../demo'
import { defineDoc, raw } from '../kit/doc'

const MEDIA_SIZES = ['avatar', 'image', 'video'] as const
type MediaSize = (typeof MEDIA_SIZES)[number]
const isMedia = (value: string): value is MediaSize => MEDIA_SIZES.includes(value as MediaSize)

const LEADING_CODE: Record<string, string> = {
  avatar: '<Avatar name="Grace Hopper" />',
  image: '<img src={IMAGES[0]} alt="" />',
  video: '<img src={IMAGES[3]} alt="" />',
}

export const doc = defineDoc({
  slug: 'list',
  name: 'List',
  group: 'containment',
  icon: 'list',
  order: 5,
  summary:
    'Lists are vertical groups of text and images. Expressive lists come in a standard and a segmented style, highlight the selected item with color and shape, and give items one, two or three lines with leading and trailing slots.',
  imports: ['List', 'ListItem', 'ListSubheader', 'Avatar', 'Checkbox', 'Switch', 'useSnackbar'],
  preview: () => (
    <List variant="segmented" navigable={false} style={{ width: 230 }}>
      <ListItem leadingIcon="folder" headline="Projects" trailingSupportingText="Shared" />
      <ListItem leadingIcon="image" headline="Beach day" selected />
    </List>
  ),
  playground: {
    controls: {
      variant: { type: 'select', options: ['standard', 'segmented'], default: 'standard' },
      headline: { type: 'text', default: 'Harbor budget' },
      supportingText: { type: 'text', default: 'Spreadsheet · Edited today' },
      overline: { type: 'text', default: '' },
      lines: { type: 'select', options: ['auto', '1', '2', '3'], default: 'auto' },
      leading: {
        type: 'select',
        options: ['none', 'icon', 'avatar', 'image', 'video', 'checkbox'],
        default: 'icon',
      },
      trailing: { type: 'select', options: ['none', 'text', 'icon', 'switch'], default: 'none' },
      clickable: { type: 'boolean', default: true },
      selected: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
    },
    render: function ListPlayground(v) {
      const snackbar = useSnackbar()
      const control = v.leading === 'checkbox' || v.trailing === 'switch'
      const leading = {
        avatar: <Avatar name="Grace Hopper" />,
        image: <img src={IMAGES[0]} alt="" />,
        video: <img src={IMAGES[3]} alt="" />,
        checkbox: <Checkbox disabled={v.disabled} />,
      }
      return (
        <List variant={v.variant} style={{ width: 360 }}>
          <ListItem
            overline={v.overline || undefined}
            headline={v.headline}
            supportingText={v.supportingText || undefined}
            lines={v.lines === 'auto' ? undefined : (Number(v.lines) as 1 | 2 | 3)}
            leadingIcon={v.leading === 'icon' ? 'description' : undefined}
            leading={v.leading in leading ? leading[v.leading as keyof typeof leading] : undefined}
            leadingSize={isMedia(v.leading) ? v.leading : undefined}
            trailingSupportingText={v.trailing === 'text' ? '12 versions' : undefined}
            trailingIcon={v.trailing === 'icon' ? 'chevron_right' : undefined}
            trailing={v.trailing === 'switch' ? <Switch disabled={v.disabled} /> : undefined}
            asLabel={control}
            onClick={
              !control && v.clickable ? () => snackbar.show(`Opened “${v.headline}”`) : undefined
            }
            selected={v.selected}
            disabled={v.disabled}
          />
        </List>
      )
    },
    code: (v, { jsx }) => {
      const control = v.leading === 'checkbox' || v.trailing === 'switch'
      const leading =
        v.leading === 'checkbox'
          ? jsx('Checkbox', { disabled: v.disabled })
          : LEADING_CODE[v.leading]
      const item = jsx('ListItem', {
        overline: v.overline,
        headline: v.headline,
        supportingText: v.supportingText,
        lines: v.lines === 'auto' ? undefined : Number(v.lines),
        leadingIcon: v.leading === 'icon' ? 'description' : undefined,
        leading: leading ? raw(leading) : undefined,
        leadingSize: isMedia(v.leading) ? v.leading : undefined,
        trailingSupportingText: v.trailing === 'text' ? '12 versions' : undefined,
        trailingIcon: v.trailing === 'icon' ? 'chevron_right' : undefined,
        trailing:
          v.trailing === 'switch' ? raw(jsx('Switch', { disabled: v.disabled })) : undefined,
        asLabel: control,
        onClick: !control && v.clickable ? raw('openFile') : undefined,
        selected: v.selected,
        disabled: v.disabled,
      })
      return jsx(
        'List',
        {
          variant: v.variant === 'standard' ? undefined : v.variant,
          style: raw('{ width: 360 }'),
        },
        item,
      )
    },
  },
  api: [
    {
      name: 'List',
      interfaces: ['ListProps'],
      inherits: 'Also accepts native `<ul>` attributes.',
    },
    {
      name: 'ListItem',
      interfaces: ['ListItemProps'],
      inherits:
        'Also accepts native `<li>` attributes. Without `onClick`, `href` or `asLabel` the item is static text.',
    },
    {
      name: 'ListSubheader',
      interfaces: [],
      inherits: 'A heading for a group of items inside a `List`. Accepts native `<li>` attributes.',
    },
  ],
  guidelines: [
    'Put the most important words first in the headline, and use supporting text for details.',
    'An item does one thing: a click with `onClick`, a link with `href`, or one control with `asLabel`. Do not put buttons inside a clickable item.',
    'Use the same type of leading element for all items in a list, so that the text lines up.',
    'Choose the segmented style to separate items into their own containers; the style is visual only and does not change behavior.',
    'For navigation, prefer `href`: a selected link gets `aria-current="page"`, while a selected button item is only highlighted.',
  ],
})

/**
 * One, two and three lines
 * The line count follows the content: a string `supportingText` makes two lines and an `overline` makes three. Set `lines` to force a count, for example for long supporting text.
 */
export function ExampleLines() {
  return (
    <List aria-label="Files" style={{ width: 380 }}>
      <ListItem leadingIcon="folder" headline="Projects" />
      <ListItem
        leadingIcon="table_chart"
        headline="Harbor budget"
        supportingText="Spreadsheet · Shared"
      />
      <ListItem
        leadingIcon="image"
        overline="Photo"
        headline="Beach day"
        supportingText="Private"
      />
      <ListItem
        leadingIcon="description"
        headline="Packing list"
        supportingText="Passport, chargers, sun cream, a rain jacket and the address of the hotel in Lisbon."
        lines={3}
      />
    </List>
  )
}

/**
 * Standard and segmented
 * The standard style shares one surface; the segmented style gives each item its own rounded container with 2dp gaps. Outer corners are 16dp, inner corners 4dp, and the selected item becomes fully 16dp round.
 */
export function ExampleStyles() {
  const [selected, setSelected] = useState('wifi')
  const items = [
    { key: 'wifi', icon: 'wifi', headline: 'Network', supporting: 'Home Wi-Fi' },
    { key: 'bluetooth', icon: 'bluetooth', headline: 'Bluetooth', supporting: 'Headphones' },
    { key: 'battery', icon: 'battery_5_bar', headline: 'Battery', supporting: '82%' },
  ]
  return (
    <div className="g-row" style={{ alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
      {(['standard', 'segmented'] as const).map((variant) => (
        <List
          key={variant}
          variant={variant}
          aria-label={`Settings, ${variant}`}
          style={{ width: 'min(100%, 300px)' }}
        >
          {items.map((item) => (
            <ListItem
              key={item.key}
              leadingIcon={item.icon}
              headline={item.headline}
              supportingText={item.supporting}
              selected={selected === item.key}
              onClick={() => setSelected(item.key)}
            />
          ))}
        </List>
      ))}
    </div>
  )
}

/**
 * Leading elements
 * `leadingIcon` takes an icon name. For other elements, use `leading` with `leadingSize`: `avatar` (40px), `image` (56px) or `video` (100 × 56px). Images and videos get 8dp rounded corners.
 */
export function ExampleLeading() {
  return (
    <List aria-label="Recent activity" style={{ width: 400 }}>
      <ListItem leadingIcon="edit_note" headline="Harbor budget" supportingText="Edited by you" />
      <ListItem
        leading={<Avatar name="Grace Hopper" />}
        leadingSize="avatar"
        headline="Grace Hopper"
        supportingText="Shared 12 files with you"
      />
      <ListItem
        leading={<img src={IMAGES[0]} alt="" />}
        leadingSize="image"
        headline="coast.jpg"
        supportingText="1920 × 1080 · 412 KB"
      />
      <ListItem
        leading={<img src={IMAGES[3]} alt="" />}
        leadingSize="video"
        headline="Holiday clip"
        supportingText="Video · 1080p"
      />
    </List>
  )
}

/**
 * Trailing elements and switches
 * `trailingSupportingText` shows short text such as a count, and `trailingIcon` an icon. With a switch in `trailing`, set `asLabel` so that a click anywhere on the item toggles it.
 */
export function ExampleTrailing() {
  const snackbar = useSnackbar()
  return (
    <List aria-label="Settings" style={{ width: 420 }}>
      <ListItem
        leadingIcon="language"
        headline="Language"
        trailingSupportingText="English"
        trailingIcon="chevron_right"
        onClick={() => snackbar.show('Opened language settings')}
      />
      <ListItem
        asLabel
        leadingIcon="cloud_sync"
        headline="Sync on mobile data"
        supportingText="Upload photos when Wi-Fi is off"
        trailing={<Switch defaultChecked />}
      />
      <ListItem
        asLabel
        leadingIcon="notifications"
        headline="Email alerts"
        supportingText="Send an email when someone shares a file"
        trailing={<Switch />}
      />
    </List>
  )
}

/**
 * Checkbox lists
 * Put a checkbox in `leading` and set `asLabel`, so that a click on the text toggles it. Here people choose the folders to sync.
 */
export function ExampleCheckboxes() {
  const [chosen, setChosen] = useState(['Documents', 'Photos'])
  const toggle = (name: string) =>
    setChosen((current) =>
      current.includes(name) ? current.filter((n) => n !== name) : [...current, name],
    )
  return (
    <List aria-label="Folders to sync" style={{ width: 360 }}>
      {FOLDERS.map((folder) => (
        <ListItem
          key={folder.name}
          asLabel
          headline={folder.name}
          supportingText={`${folder.files.toLocaleString()} files`}
          leading={
            <Checkbox checked={chosen.includes(folder.name)} onChange={() => toggle(folder.name)} />
          }
        />
      ))}
    </List>
  )
}

const FOLDERS = [
  { name: 'Documents', files: 48 },
  { name: 'Photos', files: 2000 },
  { name: 'Projects', files: 144 },
  { name: 'Archive', files: 36 },
]

/**
 * Subheaders and selection
 * `ListSubheader` names a group of items. `selected` highlights the current item, here the mailbox that the message list shows. Arrow keys move focus between items.
 */
export function ExampleSelected() {
  const [current, setCurrent] = useState('inbox')
  return (
    <List aria-label="Mailboxes" style={{ width: 300 }}>
      {MAILBOX_GROUPS.flatMap((group) => [
        <ListSubheader key={group.title}>{group.title}</ListSubheader>,
        ...group.items.map((item) => (
          <ListItem
            key={item.id}
            leadingIcon={item.icon}
            headline={item.label}
            trailingSupportingText={item.count}
            selected={current === item.id}
            onClick={() => setCurrent(item.id)}
          />
        )),
      ])}
    </List>
  )
}

const MAILBOX_GROUPS = [
  {
    title: 'Mail',
    items: [
      { id: 'inbox', icon: 'inbox', label: 'Inbox', count: '128' },
      { id: 'starred', icon: 'star', label: 'Starred', count: '34' },
      { id: 'sent', icon: 'send', label: 'Sent', count: '9' },
    ],
  },
  {
    title: 'Labels',
    items: [
      { id: 'travel', icon: 'label', label: 'Travel', count: '41' },
      { id: 'receipts', icon: 'label', label: 'Receipts', count: '57' },
    ],
  },
]

/**
 * Links and disabled items
 * With `href` an item renders a link through `LinkProvider`. A disabled item cannot be focused or activated.
 */
export function ExampleLinks() {
  return (
    <List aria-label="Help" style={{ width: 380 }}>
      <ListItem
        href="/components/button"
        leadingIcon="smart_button"
        headline="Button"
        supportingText="Component page on this site"
        trailingIcon="chevron_right"
      />
      <ListItem
        href="https://m3.material.io/components/lists"
        target="_blank"
        leadingIcon="open_in_new"
        headline="M3 list guidelines"
        supportingText="Opens in a new tab"
      />
      <ListItem
        href="/history"
        disabled
        leadingIcon="history"
        headline="Version history"
        supportingText="Not available on this plan"
      />
    </List>
  )
}
