import { Badge, Button, Icon, IconButton, type NavItem, NavigationBar } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'badge',
  name: 'Badge',
  group: 'communication',
  icon: 'mark_email_unread',
  order: 1,
  summary:
    'Badges show a count or a status dot on an icon, such as unread mail or new comments. A small dot means “something is new”; a number shows how many.',
  imports: ['Badge', 'Icon', 'IconButton', 'Button', 'NavigationBar'],
  preview: () => (
    <div className="g-preview-row" style={{ gap: 32 }}>
      <Badge>
        <Icon name="notifications" size={28} />
      </Badge>
      <Badge value={3}>
        <Icon name="mail" size={28} />
      </Badge>
      <Badge value={1200}>
        <Icon name="forum" size={28} />
      </Badge>
    </div>
  ),
  playground: {
    controls: {
      content: { type: 'select', options: ['dot', 'number', 'text'], default: 'number' },
      count: { type: 'number', default: 3, min: 0, max: 1200, step: 1, label: 'Count (number)' },
      text: { type: 'text', default: 'New', label: 'Text (text)' },
      max: { type: 'select', options: ['9', '99', '999'], default: '999' },
      showZero: { type: 'boolean', default: false, label: 'Show zero' },
      invisible: { type: 'boolean', default: false },
    },
    render: (v) => {
      const value = v.content === 'number' ? v.count : v.content === 'text' ? v.text : undefined
      return (
        <Badge
          value={value}
          max={Number(v.max)}
          showZero={v.showZero}
          invisible={v.invisible}
          label={badgeLabel(v.content, v.count)}
        >
          <Icon name="notifications" />
        </Badge>
      )
    },
    code: (v, { jsx }) =>
      jsx(
        'Badge',
        {
          value: v.content === 'number' ? v.count : v.content === 'text' ? v.text : undefined,
          max: v.max === '999' ? undefined : Number(v.max),
          showZero: v.showZero,
          invisible: v.invisible,
          label: badgeLabel(v.content, v.count),
        },
        '<Icon name="notifications" />',
      ),
  },
  api: [
    {
      name: 'Badge',
      interfaces: ['BadgeProps'],
      inherits: 'Also accepts native `<span>` attributes, which go to the badge itself.',
    },
  ],
  guidelines: [
    'Use a dot when something is new, and a number when the count matters.',
    'Describe every badge for screen readers: `label` on a badge, the `label` of an icon button that holds one, or `badgeLabel` on a navigation item.',
    'Show badges only for things people act on, such as unread messages or files shared with them.',
  ],
})

function badgeLabel(content: string, count: number) {
  if (content === 'number') return `${count} new notifications`
  return 'New notifications'
}

/**
 * Dot and number
 * Without `value` the badge is a small dot. With `value` it shows a number or short text. `label` describes it to screen readers.
 */
export function ExampleBasic() {
  return (
    <div className="g-row" style={{ gap: 40 }}>
      <Badge label="New notifications">
        <Icon name="notifications" />
      </Badge>
      <Badge value={3} label="3 unread messages">
        <Icon name="mail" />
      </Badge>
      <Badge value="New" label="New feature">
        <Icon name="auto_awesome" />
      </Badge>
    </div>
  )
}

/**
 * Maximum and zero
 * Numbers above `max` show as `max+`; the default maximum is 999. A count of 0 hides the badge, unless `showZero` is set.
 */
export function ExampleMax() {
  return (
    <div className="g-row" style={{ gap: 40 }}>
      <Badge value={1200} label="1,200 comments">
        <Icon name="forum" />
      </Badge>
      <Badge value={120} max={99} label="120 open tasks">
        <Icon name="checklist" />
      </Badge>
      <Badge value={0} label="No errors">
        <Icon name="error" />
      </Badge>
      <Badge value={0} showZero label="0 errors">
        <Icon name="error" />
      </Badge>
    </div>
  )
}

/**
 * On icon buttons
 * Pass the badge to `badge`. The button `label` names the button, so put the count there. `invisible` hides the badge with an animation, here when people open the notifications.
 */
export function ExampleIconButton() {
  const [seen, setSeen] = useState(false)
  return (
    <>
      <IconButton
        icon="notifications"
        label={seen ? 'Notifications' : 'Notifications, 5 new'}
        tooltip
        badge={<Badge value={5} invisible={seen} />}
        onClick={() => setSeen(true)}
      />
      <Button variant="text" onClick={() => setSeen(false)}>
        Reset
      </Button>
    </>
  )
}

/**
 * In navigation
 * Navigation items take `badge` and `badgeLabel` and draw the badge for you. `badge: true` gives a dot.
 */
export function ExampleNavigation() {
  const [value, setValue] = useState('mail')
  const items: NavItem[] = [
    { key: 'mail', label: 'Mail', icon: 'mail', badge: 3, badgeLabel: '3 unread' },
    { key: 'photos', label: 'Photos', icon: 'photo_library' },
    { key: 'chat', label: 'Chat', icon: 'forum', badge: true, badgeLabel: 'New messages' },
    { key: 'settings', label: 'Settings', icon: 'settings' },
  ]
  return (
    <div className="g-frame" style={{ maxWidth: 480 }}>
      <NavigationBar aria-label="Main" items={items} value={value} onChange={setValue} />
    </div>
  )
}

/**
 * Next to text
 * Without children the badge renders inline, for example after a heading or a menu item.
 */
export function ExampleInline() {
  return (
    <div className="g-row">
      <span className="m3-typescale-title-medium">Shared with me</span>
      <Badge value={12} label="12 new files shared with you" />
    </div>
  )
}
