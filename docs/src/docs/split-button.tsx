import { Button, MenuDivider, MenuItem, SplitButton, useSnackbar } from '@m3-expressive/react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'split-button',
  name: 'Split button',
  group: 'actions',
  icon: 'call_split',
  order: 3,
  summary:
    'A split button shows a main action next to a menu button with related actions. The menu button rounds its inner corners and turns its arrow while the menu is open.',
  imports: ['SplitButton', 'MenuItem', 'MenuDivider', 'Button', 'useSnackbar'],
  preview: () => (
    <div className="g-preview-row">
      <SplitButton label="Send" icon="send" menuLabel="More send options">
        <MenuItem icon="schedule_send">Schedule send</MenuItem>
      </SplitButton>
      <SplitButton variant="tonal" label="Save" menuLabel="More save options">
        <MenuItem>Save as</MenuItem>
      </SplitButton>
    </div>
  ),
  playground: {
    controls: {
      variant: {
        type: 'select',
        options: ['filled', 'tonal', 'elevated', 'outlined'],
        default: 'filled',
      },
      size: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], default: 'sm' },
      label: { type: 'text', default: 'Send' },
      icon: { type: 'icon', default: 'send' },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) => (
      <SplitButton
        variant={v.variant}
        size={v.size}
        label={v.label || undefined}
        icon={v.icon || undefined}
        actionLabel={v.label ? undefined : 'Send'}
        menuLabel="More send options"
        disabled={v.disabled}
      >
        <MenuItem icon="schedule_send">Schedule send</MenuItem>
        <MenuItem icon="draft">Save draft</MenuItem>
      </SplitButton>
    ),
    code: (v, { jsx, changed }) =>
      jsx(
        'SplitButton',
        {
          ...changed(v, ['variant', 'size']),
          label: v.label,
          icon: v.icon,
          actionLabel: v.label ? undefined : 'Send',
          menuLabel: 'More send options',
          disabled: v.disabled,
        },
        '<MenuItem icon="schedule_send">Schedule send</MenuItem>\n<MenuItem icon="draft">Save draft</MenuItem>',
      ),
  },
  api: [
    {
      name: 'SplitButton',
      interfaces: ['SplitButtonProps'],
      inherits:
        'Also accepts native `<div>` attributes for the group. The menu takes `MenuItem`, `MenuGroup` and `MenuDivider` children.',
    },
  ],
  guidelines: [
    'Keep the main action short: one or two words, with an icon that matches it.',
    'Put closely related actions in the menu, such as variations of the main action. Do not change the arrow icon of the menu button.',
    'Split buttons come in the button sizes, XS to XL; use larger ones for hero moments and next to buttons of the same size.',
    'Name the menu button with `menuLabel`, and an icon-only main action with `actionLabel`.',
  ],
})

/**
 * Colors
 * Split buttons use the button color styles: filled, tonal, elevated and outlined. The color does not change while the menu is open; only the shape and the arrow do.
 */
export function ExampleColors() {
  return (
    <>
      {(['filled', 'tonal', 'elevated', 'outlined'] as const).map((variant) => (
        <SplitButton
          key={variant}
          variant={variant}
          label="Reply"
          icon="reply"
          menuLabel="More reply options"
        >
          <MenuItem icon="reply_all">Reply all</MenuItem>
          <MenuItem icon="forward">Forward</MenuItem>
        </SplitButton>
      ))}
    </>
  )
}

/**
 * Sizes
 * The five button sizes, from XS to XL. The menu button's inner corners grow rounder with the size.
 */
export function ExampleSizes() {
  return (
    <>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <SplitButton key={size} size={size} label="Share" icon="share" menuLabel="Share options">
          <MenuItem icon="link">Copy link</MenuItem>
          <MenuItem icon="mail">Email</MenuItem>
        </SplitButton>
      ))}
    </>
  )
}

/**
 * With a menu
 * The main action runs on its own; the menu button opens related actions. Arrow down on the menu button opens the menu at the first item.
 */
export function ExampleMenu() {
  const snackbar = useSnackbar()
  return (
    <div className="g-row">
      <SplitButton
        label="Export"
        icon="download"
        menuLabel="More export options"
        onClick={() => snackbar.show('Exported as PDF')}
      >
        <MenuItem icon="picture_as_pdf" onSelect={() => snackbar.show('PDF')}>
          PDF
        </MenuItem>
        <MenuItem icon="table" onSelect={() => snackbar.show('Spreadsheet')}>
          Spreadsheet
        </MenuItem>
        <MenuDivider />
        <MenuItem icon="settings">Export settings</MenuItem>
      </SplitButton>
      <Button variant="outlined">Cancel</Button>
    </div>
  )
}
