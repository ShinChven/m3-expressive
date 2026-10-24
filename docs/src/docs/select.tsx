import { Button, Select } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import { FILES } from '../mock'

const EVENT_TYPES = [
  { value: 'meeting', label: 'Meeting', icon: 'groups' },
  { value: 'call', label: 'Call', icon: 'call' },
  { value: 'reminder', label: 'Reminder', icon: 'notifications' },
  { value: 'focus', label: 'Focus time', icon: 'self_improvement' },
  { value: 'webinar', label: 'Webinar', icon: 'videocam', disabled: true },
]

function optionsCode(icons: boolean) {
  const lines = EVENT_TYPES.map((o) => {
    const parts = [`value: '${o.value}'`, `label: '${o.label}'`]
    if (icons) parts.push(`icon: '${o.icon}'`)
    if (o.disabled) parts.push('disabled: true')
    return `  { ${parts.join(', ')} },`
  })
  return `const options = [\n${lines.join('\n')}\n]`
}

export const doc = defineDoc({
  slug: 'select',
  name: 'Select',
  group: 'text-inputs',
  icon: 'arrow_drop_down_circle',
  order: 2,
  summary:
    'Selects let people choose one option from a list that opens in a menu. Use them in forms and filter bars when the options do not fit as radio buttons.',
  imports: ['Select', 'Button'],
  preview: () => (
    <div className="g-preview-col">
      <Select label="Event type" options={EVENT_TYPES} defaultValue="meeting" fullWidth />
      <Select
        variant="outlined"
        label="Language"
        options={[{ value: 'en', label: 'English' }]}
        defaultValue="en"
        fullWidth
      />
    </div>
  ),
  playground: {
    controls: {
      variant: { type: 'select', options: ['filled', 'outlined'], default: 'filled' },
      label: { type: 'text', default: 'Event type' },
      optionIcons: { type: 'boolean', default: true, label: 'Icons in options' },
      leadingIcon: { type: 'icon', default: '', label: 'Leading icon' },
      supportingText: {
        type: 'text',
        default: 'Sets the fields of the event.',
        label: 'Supporting text',
      },
      error: { type: 'boolean', default: false },
      required: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
    },
    render: function SelectPlayground(v) {
      const [type, setType] = useState<string | null>('meeting')
      const options = v.optionIcons
        ? EVENT_TYPES
        : EVENT_TYPES.map(({ icon: _icon, ...rest }) => rest)
      return (
        <Select
          variant={v.variant}
          label={v.label || undefined}
          aria-label={v.label ? undefined : 'Event type'}
          options={options}
          value={type}
          onChange={setType}
          leadingIcon={v.leadingIcon || undefined}
          supportingText={v.supportingText || undefined}
          error={v.error}
          errorText={v.error ? 'Choose an event type.' : undefined}
          required={v.required}
          disabled={v.disabled}
        />
      )
    },
    code: (v, { jsx, changed }) => {
      const select = jsx('Select', {
        ...changed(v, ['variant']),
        label: v.label,
        'aria-label': v.label ? undefined : 'Event type',
        options: raw('options'),
        value: raw('type'),
        onChange: raw('setType'),
        leadingIcon: v.leadingIcon,
        supportingText: v.supportingText,
        error: v.error,
        errorText: v.error ? 'Choose an event type.' : undefined,
        required: v.required,
        disabled: v.disabled,
      })
      return `${optionsCode(v.optionIcons)}\n\nconst [type, setType] = useState<string | null>('meeting')\n\n${select}`
    },
  },
  api: [
    {
      name: 'Select',
      interfaces: ['SelectProps'],
      inherits:
        '`V` is the string type of the option values. Type a letter to jump to a matching option; arrow keys, Page Up, Page Down, Home and End move through the list.',
    },
    { name: 'SelectOption', interfaces: ['SelectOption'] },
  ],
  guidelines: [
    'Use a select for five or more options, or when space is tight. For two to four options that people compare, radio buttons show all choices at once.',
    'The label names the choice (“Time zone”). Order options in a logical way: by frequency, by name or by size.',
    'Pass `name` to send the value with a form. A hidden input carries it.',
    'Keep options that people cannot choose visible with `disabled`, so the list does not change shape between users.',
  ],
})

/**
 * Filled and outlined
 * Both variants open the same menu. Use the variant that the rest of the form uses.
 */
export function ExampleVariants() {
  const [repeat, setRepeat] = useState<string | null>('weekly')
  return (
    <>
      <Select
        label="Repeat"
        options={[
          { value: 'never', label: 'Does not repeat' },
          { value: 'daily', label: 'Every day' },
          { value: 'weekly', label: 'Every week' },
        ]}
        value={repeat}
        onChange={setRepeat}
      />
      <Select
        variant="outlined"
        label="Repeat"
        options={[
          { value: 'never', label: 'Does not repeat' },
          { value: 'daily', label: 'Every day' },
          { value: 'weekly', label: 'Every week' },
        ]}
        defaultValue="daily"
      />
    </>
  )
}

/**
 * Icons and supporting text in options
 * Options can have an icon and a second line. The icon of the selected option also shows in the field.
 */
export function ExampleOptionDetails() {
  const options = [
    {
      value: 'restricted',
      label: 'Restricted',
      icon: 'lock',
      supportingText: 'Only people you add.',
    },
    {
      value: 'team',
      label: 'Your team',
      icon: 'group',
      supportingText: 'Anyone on your team.',
    },
    {
      value: 'link',
      label: 'Anyone with the link',
      icon: 'link',
      supportingText: 'No sign-in needed.',
    },
  ]
  return (
    <Select
      label="General access"
      options={options}
      defaultValue="restricted"
      supportingText="You can change it at any time."
    />
  )
}

/**
 * Required and error
 * `required` adds an asterisk. Validate on submit, then set `error` and say what is missing in `errorText`. With `name`, the value is part of the form data.
 */
export function ExampleForm() {
  const [region, setRegion] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [saved, setSaved] = useState('')
  return (
    <form
      noValidate
      className="g-stack"
      style={{ alignItems: 'flex-start' }}
      onSubmit={(e) => {
        e.preventDefault()
        setError(!region)
        if (region) setSaved(String(new FormData(e.currentTarget).get('region')))
      }}
    >
      <Select
        label="Region"
        name="region"
        required
        options={[
          { value: 'en-AU', label: 'Australia' },
          { value: 'en-NZ', label: 'New Zealand' },
          { value: 'en-GB', label: 'United Kingdom' },
          { value: 'en-US', label: 'United States' },
        ]}
        value={region}
        onChange={(value) => {
          setRegion(value)
          setError(false)
        }}
        error={error}
        errorText="Choose a region."
        supportingText="Sets the date format and the first day of the week."
      />
      <Button type="submit">Save</Button>
      {saved && <span className="g-muted">Saved region: {saved}</span>}
    </form>
  )
}

/**
 * Filter bar
 * Outlined selects suit a row of filters above a list. Include an “All” option so people can clear the filter.
 */
export function ExampleFilters() {
  const [status, setStatus] = useState<string | null>('all')
  const [kind, setKind] = useState<string | null>('all')
  const count = FILES.filter(
    (f) => (status === 'all' || f.status === status) && (kind === 'all' || f.kind === kind),
  ).length
  return (
    <div className="g-stack">
      <div className="g-row">
        <Select
          variant="outlined"
          label="Status"
          options={[
            { value: 'all', label: 'All statuses' },
            { value: 'shared', label: 'Shared' },
            { value: 'private', label: 'Private' },
            { value: 'syncing', label: 'Syncing' },
            { value: 'archived', label: 'Archived' },
          ]}
          value={status}
          onChange={setStatus}
        />
        <Select
          variant="outlined"
          label="Type"
          options={[
            { value: 'all', label: 'All types' },
            { value: 'document', label: 'Document' },
            { value: 'spreadsheet', label: 'Spreadsheet' },
            { value: 'image', label: 'Image' },
          ]}
          value={kind}
          onChange={setKind}
        />
      </div>
      <span className="g-muted">{count} files</span>
    </div>
  )
}

/**
 * Disabled
 * A disabled select cannot be opened or focused. A disabled option stays in the list, but people cannot choose it.
 */
export function ExampleDisabled() {
  return (
    <>
      <Select
        label="Data region"
        options={[{ value: 'eu', label: 'Europe' }]}
        defaultValue="eu"
        supportingText="Set by your administrator."
        disabled
      />
      <Select
        label="Plan"
        options={[
          { value: 'starter', label: 'Starter' },
          { value: 'team', label: 'Team' },
          {
            value: 'enterprise',
            label: 'Enterprise',
            supportingText: 'Contact sales.',
            disabled: true,
          },
        ]}
        defaultValue="team"
      />
    </>
  )
}
