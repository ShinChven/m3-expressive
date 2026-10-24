import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  Switch,
} from '@m3-expressive/react'
import { Fragment } from 'react'
import { defineDoc, raw } from '../kit/doc'

const TOOLBAR_START = `<IconButton icon="undo" label="Undo" />
<IconButton icon="redo" label="Redo" />`

const TOOLBAR_END = `<IconButton icon="format_bold" label="Bold" />
<IconButton icon="format_italic" label="Italic" />`

export const doc = defineDoc({
  slug: 'divider',
  name: 'Divider',
  group: 'containment',
  icon: 'horizontal_rule',
  order: 6,
  summary:
    'Dividers are thin lines that separate content into clear groups. Use full-width dividers between sections and inset dividers between related items.',
  imports: [
    'Divider',
    'Button',
    'Card',
    'CardContent',
    'CardHeader',
    'IconButton',
    'List',
    'ListItem',
    'Switch',
    'Icon',
  ],
  preview: () => (
    <Card variant="outlined" style={{ width: 200 }}>
      <CardContent style={{ padding: 8 }}>Inbox</CardContent>
      <Divider />
      <CardContent style={{ padding: 8 }}>Archive</CardContent>
      <Divider inset="middle" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 36, padding: '0 8px' }}>
        <Icon name="undo" size={20} />
        <Icon name="redo" size={20} />
        <Divider vertical inset="middle" />
        <Icon name="format_bold" size={20} />
        <Icon name="format_italic" size={20} />
      </div>
    </Card>
  ),
  playground: {
    controls: {
      inset: { type: 'select', options: ['none', 'start', 'middle', 'end'], default: 'none' },
      vertical: { type: 'boolean', default: false },
    },
    render: (v) => {
      const inset = v.inset === 'none' ? undefined : v.inset
      return v.vertical ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: 48 }}>
          <IconButton icon="undo" label="Undo" />
          <IconButton icon="redo" label="Redo" />
          <Divider vertical inset={inset} />
          <IconButton icon="format_bold" label="Bold" />
          <IconButton icon="format_italic" label="Italic" />
        </div>
      ) : (
        <Card variant="outlined" style={{ width: 320 }}>
          <CardContent>Inbox</CardContent>
          <Divider inset={inset} />
          <CardContent>Archive</CardContent>
        </Card>
      )
    },
    code: (v, { jsx }) => {
      const inset = v.inset === 'none' ? undefined : v.inset
      if (v.vertical) {
        return jsx(
          'div',
          { style: raw("{ display: 'flex', alignItems: 'center', gap: 4, height: 48 }") },
          `${TOOLBAR_START}\n${jsx('Divider', { vertical: true, inset })}\n${TOOLBAR_END}`,
        )
      }
      return jsx(
        'Card',
        { variant: 'outlined', style: raw('{ width: 320 }') },
        `<CardContent>Inbox</CardContent>\n${jsx('Divider', { inset })}\n<CardContent>Archive</CardContent>`,
      )
    },
  },
  api: [
    {
      name: 'Divider',
      interfaces: ['DividerProps'],
      inherits:
        'Renders an `<hr>`, which has the `separator` role. Also accepts native `<hr>` attributes.',
    },
  ],
  guidelines: [
    'Use dividers sparingly. Space and grouping often separate content well enough.',
    'Use full-width dividers between sections, and inset dividers between related items in a list.',
    'Inside a `List`, wrap the divider in `<li role="presentation">`, so that the list contains only list items.',
    'Do not let a divider be the only sign of a group: give the group a heading or a `ListSubheader`.',
  ],
})

/**
 * Full width
 * A full-width divider separates the sections of a container, here the header and the settings of a card.
 */
export function ExampleFullWidth() {
  return (
    <Card variant="outlined" style={{ width: 360 }}>
      <CardHeader title="Notifications" subhead="Mail" />
      <Divider />
      <List aria-label="Notification settings">
        <ListItem asLabel headline="Sound for new mail" trailing={<Switch defaultChecked />} />
        <ListItem asLabel headline="Show message preview" trailing={<Switch />} />
      </List>
    </Card>
  )
}

/**
 * Insets
 * `start` leaves 16px before the line, `end` leaves 16px after it and `middle` leaves 16px on both sides.
 */
export function ExampleInsets() {
  return (
    <>
      {(['start', 'middle', 'end'] as const).map((inset) => (
        <Card key={inset} variant="outlined" style={{ width: 200 }}>
          <CardContent>Inset {inset}</CardContent>
          <Divider inset={inset} />
          <CardContent>Second section</CardContent>
        </Card>
      ))}
    </>
  )
}

/**
 * In a list
 * Wrap the divider in an `li` with `role="presentation"`. A start inset lines up with the text of items that have no leading element.
 */
export function ExampleList() {
  return (
    <Card variant="outlined" style={{ width: 380 }}>
      <List aria-label="Flights">
        {FLIGHTS.map((flight, index) => (
          <Fragment key={flight.route}>
            {index > 0 && (
              <li role="presentation">
                <Divider inset="start" />
              </li>
            )}
            <ListItem
              headline={flight.route}
              supportingText={`Departs ${flight.departs}`}
              trailingSupportingText={flight.gate}
            />
          </Fragment>
        ))}
      </List>
    </Card>
  )
}

const FLIGHTS = [
  { route: 'Lisbon to Paris', departs: 'Monday, 08:30', gate: 'A12' },
  { route: 'Paris to Berlin', departs: 'Wednesday, 14:05', gate: 'C3' },
  { route: 'Berlin to Lisbon', departs: 'Saturday, 19:40', gate: 'B7' },
]

/**
 * Vertical
 * `vertical` draws a line that fills the height of a flex row. `inset="middle"` leaves space above and below it. Here it groups the tools of an email toolbar.
 */
export function ExampleVertical() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: 48 }}>
      <IconButton icon="undo" label="Undo" />
      <IconButton icon="redo" label="Redo" />
      <Divider vertical inset="middle" />
      <IconButton icon="format_bold" label="Bold" />
      <IconButton icon="format_italic" label="Italic" />
      <IconButton icon="link" label="Insert link" />
      <Divider vertical inset="middle" />
      <Button variant="text" icon="send">
        Send
      </Button>
    </div>
  )
}
