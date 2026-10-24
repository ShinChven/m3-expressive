import { Button, Radio, RadioGroup, TextField } from '@m3-expressive/react'
import { useId, useState } from 'react'
import { defineDoc } from '../kit/doc'

const PROFILE_VISIBILITY = [
  { value: 'everyone', label: 'Everyone', supportingText: 'Anyone can find your profile.' },
  { value: 'contacts', label: 'Contacts', supportingText: 'Only people in your contacts.' },
  { value: 'private', label: 'Only me', supportingText: 'Nobody else can see it.' },
] as const

export const doc = defineDoc({
  slug: 'radio',
  name: 'Radio button',
  group: 'selection',
  icon: 'radio_button_checked',
  order: 2,
  summary:
    'Radio buttons let people select one option from a set. Put them in a `RadioGroup`, which gives them one name and one value; arrow keys move the selection.',
  imports: ['RadioGroup', 'Radio', 'TextField', 'Button'],
  preview: () => (
    <div className="g-preview-col">
      <RadioGroup aria-label="Profile visibility" defaultValue="everyone">
        <Radio value="everyone" label="Everyone" />
        <Radio value="contacts" label="Contacts" />
        <Radio value="private" label="Only me" />
      </RadioGroup>
    </div>
  ),
  playground: {
    controls: {
      orientation: { type: 'select', options: ['vertical', 'horizontal'], default: 'vertical' },
      supportingText: { type: 'boolean', default: false, label: 'Supporting text' },
      labelPosition: {
        type: 'select',
        options: ['end', 'start'],
        default: 'end',
        label: 'Label position',
      },
      error: { type: 'boolean', default: false },
      disabledOption: { type: 'boolean', default: false, label: 'Disable “Only me”' },
      disabled: { type: 'boolean', default: false, label: 'Disable group' },
    },
    render: (v) => (
      <RadioGroup
        aria-label="Profile visibility"
        defaultValue="everyone"
        orientation={v.orientation}
        disabled={v.disabled}
      >
        {PROFILE_VISIBILITY.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            supportingText={v.supportingText ? option.supportingText : undefined}
            labelPosition={v.labelPosition}
            error={v.error}
            disabled={v.disabledOption && option.value === 'private'}
          />
        ))}
      </RadioGroup>
    ),
    code: (v, { jsx, changed }) => {
      const radios = PROFILE_VISIBILITY.map((option) =>
        jsx('Radio', {
          value: option.value,
          label: option.label,
          supportingText: v.supportingText ? option.supportingText : undefined,
          ...changed(v, ['labelPosition']),
          error: v.error,
          disabled: v.disabledOption && option.value === 'private',
        }),
      ).join('\n')
      return jsx(
        'RadioGroup',
        {
          'aria-label': 'Profile visibility',
          defaultValue: 'everyone',
          ...changed(v, ['orientation']),
          disabled: v.disabled,
        },
        radios,
      )
    },
  },
  api: [
    {
      name: 'RadioGroup',
      interfaces: ['RadioGroupProps'],
      inherits:
        'Also accepts `<div>` attributes such as `aria-label` and `aria-labelledby`. It renders `role="radiogroup"`.',
    },
    {
      name: 'Radio',
      interfaces: ['RadioProps'],
      inherits:
        'Also accepts native `<input>` attributes. Inside a `RadioGroup`, the group sets `name` and `checked`; outside one, pass them yourself.',
    },
  ],
  guidelines: [
    'Use radio buttons when people must pick exactly one option and it helps to see all options. For long lists, use a select.',
    'Select the most common option by default, so the group does not start empty.',
    'Give each group a visible heading and connect it with `aria-labelledby`, or pass `aria-label`.',
    'Tab moves into the group and arrow keys move the selection, as with native radio buttons.',
  ],
})

/**
 * Vertical group
 * The default layout. Supporting text explains each option.
 */
export function ExampleVertical() {
  const [visibility, setVisibility] = useState('everyone')
  const id = useId()
  return (
    <div className="g-stack" style={{ gap: 4 }}>
      <span id={id} className="m3-typescale-title-small">
        Who can see your profile
      </span>
      <RadioGroup aria-labelledby={id} value={visibility} onChange={setVisibility}>
        <Radio value="everyone" label="Everyone" supportingText="Anyone can find your profile." />
        <Radio value="contacts" label="Contacts" supportingText="Only people in your contacts." />
        <Radio value="private" label="Only me" supportingText="Nobody else can see it." />
      </RadioGroup>
    </div>
  )
}

/**
 * Horizontal group
 * `orientation="horizontal"` places short options in a row that wraps on narrow screens.
 */
export function ExampleHorizontal() {
  const id = useId()
  return (
    <div className="g-stack" style={{ gap: 4 }}>
      <span id={id} className="m3-typescale-title-small">
        Seat class
      </span>
      <RadioGroup aria-labelledby={id} orientation="horizontal" defaultValue="economy">
        <Radio value="economy" label="Economy" />
        <Radio value="premium" label="Premium" />
        <Radio value="business" label="Business" />
        <Radio value="first" label="First" />
      </RadioGroup>
    </div>
  )
}

/**
 * Show fields for an option
 * Show extra fields only for the option that needs them, such as a send time for a scheduled email.
 */
export function ExampleConditional() {
  const [when, setWhen] = useState('now')
  return (
    <div className="g-stack" style={{ width: 320 }}>
      <RadioGroup aria-label="When to send" value={when} onChange={setWhen}>
        <Radio value="now" label="Send now" />
        <Radio value="schedule" label="Schedule" />
        <Radio value="later" label="Save for later" />
      </RadioGroup>
      {when === 'schedule' && (
        <TextField label="Send at" type="datetime-local" required fullWidth />
      )}
    </div>
  )
}

/**
 * Forms
 * With `name`, the selected value is part of the form data, like a native radio group.
 */
export function ExampleForm() {
  const [saved, setSaved] = useState('')
  return (
    <form
      className="g-stack"
      style={{ alignItems: 'flex-start' }}
      onSubmit={(e) => {
        e.preventDefault()
        setSaved(String(new FormData(e.currentTarget).get('delivery')))
      }}
    >
      <RadioGroup aria-label="Delivery" name="delivery" defaultValue="standard">
        <Radio value="standard" label="Standard, 3 to 5 days" />
        <Radio value="express" label="Express, next day" />
      </RadioGroup>
      <Button type="submit">Save</Button>
      {saved && <span className="g-muted">Saved delivery: {saved}</span>}
    </form>
  )
}

/**
 * Disabled
 * Disable one option that is not available, or the whole group when people cannot change the setting.
 */
export function ExampleDisabled() {
  return (
    <>
      <RadioGroup aria-label="Photo backup" defaultValue="saver">
        <Radio value="saver" label="Storage saver" />
        <Radio
          value="original"
          label="Original quality"
          supportingText="Needs a larger storage plan."
          disabled
        />
        <Radio value="off" label="Off" />
      </RadioGroup>
      <div className="g-stack" style={{ gap: 4 }}>
        <RadioGroup aria-label="Default language" defaultValue="en" disabled>
          <Radio value="en" label="English" />
          <Radio value="mi" label="Māori" />
        </RadioGroup>
        <span className="g-muted">Set by your administrator.</span>
      </div>
    </>
  )
}
