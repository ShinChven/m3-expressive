import { Switch } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'switch',
  name: 'Switch',
  group: 'selection',
  icon: 'toggle_on',
  order: 3,
  summary:
    'Switches turn one setting on or off at once, without a save step. Use them in settings panels and for options that take effect right away.',
  imports: ['Switch'],
  preview: () => (
    <div className="g-preview-col">
      <Switch label="Notifications" defaultChecked />
      <Switch label="Auto backup" icons defaultChecked />
      <Switch label="Do not disturb" />
    </div>
  ),
  playground: {
    controls: {
      label: { type: 'text', default: 'Notifications' },
      supportingText: { type: 'text', default: '', label: 'Supporting text' },
      labelPosition: {
        type: 'select',
        options: ['start', 'end'],
        default: 'start',
        label: 'Label position',
      },
      checked: { type: 'boolean', default: true, label: 'On' },
      icons: { type: 'boolean', default: false },
      showUnselectedIcon: { type: 'boolean', default: false, label: 'Icon when off' },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) => (
      <Switch
        key={String(v.checked)}
        label={v.label || undefined}
        aria-label={v.label ? undefined : 'Notifications'}
        supportingText={v.supportingText || undefined}
        labelPosition={v.labelPosition}
        defaultChecked={v.checked}
        icons={v.icons}
        showUnselectedIcon={v.showUnselectedIcon}
        disabled={v.disabled}
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('Switch', {
        label: v.label,
        'aria-label': v.label ? undefined : 'Notifications',
        supportingText: v.supportingText,
        ...changed(v, ['labelPosition']),
        defaultChecked: v.checked,
        icons: v.icons,
        showUnselectedIcon: v.showUnselectedIcon,
        disabled: v.disabled,
      }),
  },
  api: [
    {
      name: 'Switch',
      interfaces: ['SwitchProps'],
      inherits:
        'Also accepts native `<input>` attributes such as `checked`, `defaultChecked`, `onChange` and `name`. The input has `role="switch"`.',
    },
  ],
  guidelines: [
    'A switch applies its change at once. If the change waits for a save button, use a checkbox.',
    'The label names the setting, not the action: “Notifications”, not “Turn on notifications”.',
    'In settings lists keep the default `labelPosition="start"`: labels align at the start and switches at the end.',
    'Use `icons` to make the on and off states easier to tell apart, for example in dense layouts.',
  ],
})

/**
 * Settings list
 * Each switch saves its setting at once. Supporting text explains the effect.
 */
export function ExampleSettings() {
  const [settings, setSettings] = useState({ backup: true, notifications: true, quiet: false })
  return (
    <div className="g-stack" style={{ gap: 4, width: '100%', maxWidth: 440 }}>
      <Switch
        label="Auto backup"
        supportingText="Copies new photos to your drive."
        checked={settings.backup}
        onChange={(e) => setSettings({ ...settings, backup: e.target.checked })}
      />
      <Switch
        label="Notifications"
        supportingText="Alerts for new mail and events."
        checked={settings.notifications}
        onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
      />
      <Switch
        label="Do not disturb"
        supportingText="Silences all alerts until you turn it off."
        checked={settings.quiet}
        onChange={(e) => setSettings({ ...settings, quiet: e.target.checked })}
      />
    </div>
  )
}

/**
 * Icons
 * `icons` shows a check mark when the switch is on. Add `showUnselectedIcon` to also show a cross when it is off.
 */
export function ExampleIcons() {
  return (
    <div className="g-stack" style={{ gap: 4, width: 280 }}>
      <Switch label="Check when on" icons defaultChecked />
      <Switch label="Icons in both states" icons showUnselectedIcon />
    </div>
  )
}

/**
 * Label after the switch
 * `labelPosition="end"` puts the label after the switch, for a single switch in a toolbar or a form.
 */
export function ExampleLabelEnd() {
  const [showHidden, setShowHidden] = useState(false)
  return (
    <div className="g-stack" style={{ alignItems: 'center' }}>
      <Switch
        label="Show hidden files"
        labelPosition="end"
        checked={showHidden}
        onChange={(e) => setShowHidden(e.target.checked)}
      />
      <span className="g-muted">{showHidden ? 'Showing 128 files' : 'Showing 96 files'}</span>
    </div>
  )
}

/**
 * Without a visible label
 * When the row already names the setting, pass `aria-label` so screen readers announce it.
 */
export function ExampleAriaLabel() {
  const [on, setOn] = useState(true)
  return (
    <div className="g-row" style={{ gap: 16 }}>
      <span>Wake up, 7:00</span>
      <Switch
        aria-label="Alarm: Wake up, 7:00"
        checked={on}
        onChange={(e) => setOn(e.target.checked)}
      />
    </div>
  )
}

/**
 * Disabled
 * Disabled switches show a setting that people cannot change. Say why in the supporting text.
 */
export function ExampleDisabled() {
  return (
    <div className="g-stack" style={{ gap: 4, width: 320 }}>
      <Switch
        label="Two-step sign-in"
        supportingText="Required by your organization."
        disabled
        defaultChecked
      />
      <Switch label="Offline files" supportingText="Not available on your plan." disabled />
    </div>
  )
}
