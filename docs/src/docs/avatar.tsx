import { Avatar, IconButton, List, ListItem } from '@m3-expressive/react'
import { IMAGES } from '../demo'
import { defineDoc, raw } from '../kit/doc'
import './avatar.css'

export const doc = defineDoc({
  slug: 'avatar',
  name: 'Avatar',
  group: 'foundations',
  icon: 'account_circle',
  order: 3,
  summary:
    'Avatars show a person or an account as an image, initials or an icon, in a circle or a shape of the Material shape library. Use them in lists, comments and app bars to show who made a change.',
  imports: ['Avatar', 'IconButton', 'List', 'ListItem'],
  preview: () => (
    <div className="g-preview-row">
      <Avatar src={IMAGES[1]} name="Grace Hopper" size={48} />
      <Avatar name="Ada Lovelace" size={48} />
      <Avatar icon="group" size={48} />
    </div>
  ),
  playground: {
    controls: {
      content: { type: 'select', options: ['image', 'initials', 'icon'], default: 'initials' },
      name: { type: 'text', default: 'Ada Lovelace' },
      icon: { type: 'text', default: 'group', label: 'Icon name' },
      size: { type: 'number', default: 40, min: 24, max: 96, step: 8 },
      shape: {
        type: 'select',
        options: ['circle', 'cookie-9', 'cookie-4', 'clover-4', 'sunny', 'arch', 'pentagon'],
        default: 'circle',
      },
    },
    render: (v) => (
      <Avatar
        src={v.content === 'image' ? IMAGES[1] : undefined}
        name={v.name || undefined}
        icon={v.content === 'icon' ? v.icon : undefined}
        size={v.size}
        shape={v.shape === 'circle' ? undefined : v.shape}
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('Avatar', {
        src: v.content === 'image' ? raw('photoUrl') : undefined,
        name: v.name,
        icon: v.content === 'icon' ? v.icon : undefined,
        ...changed(v, ['size']),
        shape: v.shape === 'circle' ? undefined : v.shape,
      }),
  },
  api: [
    {
      name: 'Avatar',
      interfaces: ['AvatarProps'],
      inherits:
        'Also accepts native `<span>` attributes. Without `src`, an `icon` wins over initials. `size` is the diameter in px; `icon` is a Material Symbols name or an element.',
    },
  ],
  guidelines: [
    'Always pass `name`: it is the alt text of the image and the source of the initials.',
    'An icon avatar has no accessible name. Show the name as text next to it.',
    'Use one size per list or row. 40 px suits list items; 24 to 32 px suits dense rows and app bars.',
    'Shaped avatars add personality to profiles and hero moments; keep one shape per context.',
  ],
})

/**
 * Image, initials and icon
 * With `src` the avatar shows the image and uses `name` as alt text. Without it, `name` gives up to two initials. `icon` suits accounts with no person, such as a shared team inbox.
 */
export function ExampleContent() {
  return (
    <>
      <Avatar src={IMAGES[2]} name="Katherine Johnson" />
      <Avatar name="Alan Turing" />
      <Avatar name="Grace" />
      <Avatar icon="group" />
      <Avatar icon="person" />
    </>
  )
}

/**
 * Shapes
 * `shape` crops the avatar to a shape of the Material shape library (M3 Expressive), for profile pages and other personal moments.
 */
export function ExampleShapes() {
  return (
    <>
      <Avatar src={IMAGES[2]} name="Katherine Johnson" size={64} shape="cookie-9" />
      <Avatar src={IMAGES[4]} name="Alan Turing" size={64} shape="clover-4" />
      <Avatar name="Grace Hopper" size={64} shape="sunny" />
      <Avatar icon="pets" size={64} shape="puffy-diamond" />
    </>
  )
}

/**
 * Sizes
 * `size` sets the diameter in px. Initials and icons scale with it.
 */
export function ExampleSizes() {
  return (
    <>
      <Avatar name="Ada Lovelace" size={24} />
      <Avatar name="Ada Lovelace" size={32} />
      <Avatar name="Ada Lovelace" />
      <Avatar name="Ada Lovelace" size={56} />
      <Avatar src={IMAGES[4]} name="Ada Lovelace" size={80} />
    </>
  )
}

/**
 * In a list
 * Recent activity in a shared drive, with the person as the leading element. `leadingSize="avatar"` gives it the round 40 px slot.
 */
export function ExampleList() {
  return (
    <div className="g-frame" style={{ maxWidth: 440 }}>
      <List>
        <ListItem
          leading={<Avatar src={IMAGES[0]} name="Grace Hopper" />}
          leadingSize="avatar"
          headline="Grace Hopper"
          supportingText="Edited “Harbor budget”"
        />
        <ListItem
          leading={<Avatar name="Alan Turing" />}
          leadingSize="avatar"
          headline="Alan Turing"
          supportingText="Shared “Trip photos”"
        />
        <ListItem
          leading={<Avatar icon="group" />}
          leadingSize="avatar"
          headline="Design team"
          supportingText="Added 4 files to “Atlas”"
        />
      </List>
    </div>
  )
}

/**
 * Collaborators
 * Overlapping avatars show who shares a folder. A ring in the surface color keeps them apart.
 */
export function ExampleGroup() {
  const people = [
    { name: 'Ada Lovelace', src: IMAGES[0] },
    { name: 'Grace Hopper' },
    { name: 'Alan Turing', src: IMAGES[3] },
    { name: 'Katherine Johnson' },
  ]
  return (
    <>
      <span className="avatar-doc__group">
        {people.map((person) => (
          <Avatar key={person.name} src={person.src} name={person.name} size={32} />
        ))}
      </span>
      <span className="g-muted">4 people share this folder</span>
    </>
  )
}

/**
 * Account button
 * An `IconButton` takes the avatar as its `icon`. Its `label` names the account.
 */
export function ExampleAccount() {
  return (
    <IconButton icon={<Avatar name="Ada Lovelace" size={32} />} label="Account: Ada Lovelace" />
  )
}
