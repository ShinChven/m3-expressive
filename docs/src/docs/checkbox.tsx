import { Button, Checkbox } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'checkbox',
  name: 'Checkbox',
  group: 'selection',
  icon: 'check_box',
  order: 1,
  summary:
    'Checkboxes let people select one or more options from a list, or turn one option on or off in a form. A parent checkbox can show that only some of its options are checked.',
  imports: ['Checkbox', 'Button'],
  preview: () => (
    <div className="g-preview-col">
      <Checkbox label="All channels" indeterminate />
      <Checkbox label="Email" defaultChecked />
      <Checkbox label="Text message" />
    </div>
  ),
  playground: {
    controls: {
      label: { type: 'text', default: 'Email me a weekly summary' },
      supportingText: { type: 'text', default: '', label: 'Supporting text' },
      state: {
        type: 'select',
        options: ['unchecked', 'checked', 'indeterminate'],
        default: 'checked',
      },
      labelPosition: {
        type: 'select',
        options: ['end', 'start'],
        default: 'end',
        label: 'Label position',
      },
      error: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) => (
      <Checkbox
        key={v.state}
        label={v.label || undefined}
        aria-label={v.label ? undefined : 'Email me a weekly summary'}
        supportingText={v.supportingText || undefined}
        defaultChecked={v.state === 'checked'}
        indeterminate={v.state === 'indeterminate'}
        labelPosition={v.labelPosition}
        error={v.error}
        disabled={v.disabled}
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('Checkbox', {
        label: v.label,
        'aria-label': v.label ? undefined : 'Email me a weekly summary',
        supportingText: v.supportingText,
        defaultChecked: v.state === 'checked',
        indeterminate: v.state === 'indeterminate',
        ...changed(v, ['labelPosition']),
        error: v.error,
        disabled: v.disabled,
      }),
  },
  api: [
    {
      name: 'Checkbox',
      interfaces: ['CheckboxProps'],
      inherits:
        'Also accepts native `<input>` attributes such as `checked`, `defaultChecked`, `onChange`, `name` and `value`. They go to the native checkbox.',
    },
  ],
  guidelines: [
    'Use checkboxes for choices that people confirm with a save or submit button. For a setting that applies at once, use a switch.',
    'Write labels as short positive statements in sentence case, such as “Email me a weekly summary”. Avoid negative labels such as “Do not email me”.',
    'Use `indeterminate` only on a parent checkbox whose options are partly checked. Clicking the parent checks all of them.',
    'Clicking the label also toggles the checkbox. Without a visible label, pass `aria-label`.',
  ],
})

/**
 * Parent and child options
 * The parent is checked when all options are checked and `indeterminate` when only some are. Clicking it checks or clears all options.
 */
export function ExampleIndeterminate() {
  const [channels, setChannels] = useState({ email: true, push: false, sms: true })
  const values = Object.values(channels)
  const all = values.every(Boolean)
  const some = values.some(Boolean)
  return (
    <div className="g-stack" style={{ gap: 0 }}>
      <Checkbox
        label="All channels"
        checked={all}
        indeterminate={some && !all}
        onChange={(e) => {
          const on = e.target.checked
          setChannels({ email: on, push: on, sms: on })
        }}
      />
      <div className="g-stack" style={{ gap: 0, paddingInlineStart: 32 }}>
        <Checkbox
          label="Email"
          checked={channels.email}
          onChange={(e) => setChannels({ ...channels, email: e.target.checked })}
        />
        <Checkbox
          label="Push notification"
          checked={channels.push}
          onChange={(e) => setChannels({ ...channels, push: e.target.checked })}
        />
        <Checkbox
          label="Text message"
          checked={channels.sms}
          onChange={(e) => setChannels({ ...channels, sms: e.target.checked })}
        />
      </div>
    </div>
  )
}

/**
 * Supporting text
 * A second line explains what the option does. It is part of the label, so clicking it also toggles the checkbox.
 */
export function ExampleSupportingText() {
  return (
    <div className="g-stack" style={{ gap: 4 }}>
      <Checkbox
        label="Notify people"
        supportingText="Sends an email with a link to the folder."
        defaultChecked
      />
      <Checkbox label="Editors can share" supportingText="Editors can add other people." />
      <Checkbox
        label="Viewers can download"
        supportingText="Viewers can download, print and copy files."
      />
    </div>
  )
}

/**
 * Label position
 * `labelPosition="start"` puts the label first. In a column, the labels align at the start and the checkboxes at the end.
 */
export function ExampleLabelPosition() {
  return (
    <div className="g-stack" style={{ gap: 0, width: 280 }}>
      <Checkbox label="Show sender pictures" labelPosition="start" defaultChecked />
      <Checkbox label="Show message preview" labelPosition="start" defaultChecked />
      <Checkbox label="Group by conversation" labelPosition="start" />
    </div>
  )
}

/**
 * Error
 * `error` shows the error color and sets `aria-invalid`. Use the supporting text to say what to do.
 */
export function ExampleError() {
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !agreed
  return (
    <form
      className="g-stack"
      style={{ alignItems: 'flex-start' }}
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <Checkbox
        label="I agree to the terms of sale"
        supportingText={
          error ? 'Agree to the terms before you pay.' : 'Required to place the order.'
        }
        error={error}
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      <Button type="submit" icon="shopping_bag">
        Place order
      </Button>
    </form>
  )
}

/**
 * Disabled
 * Disabled checkboxes show options that people cannot change, for example because of their role.
 */
export function ExampleDisabled() {
  return (
    <div className="g-stack" style={{ gap: 0 }}>
      <Checkbox label="Unchecked" disabled />
      <Checkbox label="Checked" disabled defaultChecked />
      <Checkbox label="Indeterminate" disabled indeterminate />
    </div>
  )
}
