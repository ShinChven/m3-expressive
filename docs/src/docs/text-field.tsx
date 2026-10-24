import { IconButton, TextField, useSnackbar } from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

export const doc = defineDoc({
  slug: 'text-field',
  name: 'Text field',
  group: 'text-inputs',
  icon: 'text_fields',
  order: 1,
  summary:
    'Text fields let people enter and edit text in forms and dialogs. Filled fields have more emphasis; outlined fields suit dense layouts such as filter bars.',
  imports: ['TextField', 'IconButton', 'useSnackbar'],
  preview: () => (
    <div className="g-preview-col">
      <TextField label="Display name" defaultValue="Ada Lovelace" fullWidth />
      <TextField variant="outlined" label="Username" prefixText="@" fullWidth />
    </div>
  ),
  playground: {
    controls: {
      variant: { type: 'select', options: ['filled', 'outlined'], default: 'filled' },
      label: { type: 'text', default: 'Display name' },
      leadingIcon: { type: 'icon', default: '', label: 'Leading icon' },
      trailingIcon: { type: 'icon', default: '', label: 'Trailing icon' },
      prefixText: { type: 'text', default: '', label: 'Prefix text' },
      suffixText: { type: 'text', default: '', label: 'Suffix text' },
      supportingText: {
        type: 'text',
        default: 'Shown to people you share files with.',
        label: 'Supporting text',
      },
      maxLength: { type: 'number', default: 0, min: 0, max: 120, step: 10, label: 'Max length' },
      error: { type: 'boolean', default: false },
      multiline: { type: 'boolean', default: false },
      clearable: { type: 'boolean', default: false, label: 'Clear button' },
      required: { type: 'boolean', default: false },
      readOnly: { type: 'boolean', default: false, label: 'Read-only' },
      disabled: { type: 'boolean', default: false },
    },
    render: function TextFieldPlayground(v) {
      const [value, setValue] = useState('Ada Lovelace')
      return (
        <TextField
          variant={v.variant}
          label={v.label || undefined}
          aria-label={v.label ? undefined : 'Display name'}
          value={value}
          onValueChange={setValue}
          onClear={v.clearable ? () => setValue('') : undefined}
          leadingIcon={v.leadingIcon || undefined}
          trailingIcon={v.trailingIcon || undefined}
          prefixText={v.prefixText || undefined}
          suffixText={v.suffixText || undefined}
          supportingText={v.supportingText || undefined}
          maxLength={v.maxLength || undefined}
          error={v.error}
          errorText={v.error ? 'Enter a shorter name.' : undefined}
          multiline={v.multiline}
          required={v.required}
          readOnly={v.readOnly}
          disabled={v.disabled}
        />
      )
    },
    code: (v, { jsx, changed }) => {
      const field = jsx('TextField', {
        ...changed(v, ['variant']),
        label: v.label,
        'aria-label': v.label ? undefined : 'Display name',
        value: raw('value'),
        onValueChange: raw('setValue'),
        onClear: v.clearable ? raw("() => setValue('')") : undefined,
        leadingIcon: v.leadingIcon,
        trailingIcon: v.trailingIcon,
        prefixText: v.prefixText,
        suffixText: v.suffixText,
        supportingText: v.supportingText,
        maxLength: v.maxLength || undefined,
        error: v.error,
        errorText: v.error ? 'Enter a shorter name.' : undefined,
        multiline: v.multiline,
        required: v.required,
        readOnly: v.readOnly,
        disabled: v.disabled,
      })
      return `const [value, setValue] = useState('Ada Lovelace')\n\n${field}`
    },
  },
  api: [
    {
      name: 'TextField',
      interfaces: ['TextFieldProps'],
      inherits:
        'Also accepts native `<input>` attributes such as `name`, `type`, `value`, `defaultValue`, `maxLength`, `placeholder`, `required`, `readOnly` and `autoComplete`. They go to the input, or to the textarea when `multiline` is set.',
    },
  ],
  guidelines: [
    'Every field needs a label. A `placeholder` can show an example value, but it never replaces the label.',
    'Put help in `supportingText`. While `error` is true, `errorText` replaces it: say how to fix the problem.',
    'Set `maxLength` for real limits, such as a text message or a profile bio; the counter shows how much room is left.',
    'Use `readOnly`, not `disabled`, for values that people need to read or copy.',
  ],
})

/**
 * Filled and outlined
 * Filled fields have more emphasis. Outlined fields suit dense forms and filter bars. Use one variant per form.
 */
export function ExampleVariants() {
  return (
    <>
      <TextField label="Event title" defaultValue="Team lunch" supportingText="Filled" />
      <TextField
        variant="outlined"
        label="Event title"
        defaultValue="Team lunch"
        supportingText="Outlined"
      />
    </>
  )
}

/**
 * Icons, prefix and suffix
 * Icons help people scan a form. Prefix and suffix text show the format of the value, such as a currency or a unit.
 */
export function ExampleAffixes() {
  return (
    <>
      <TextField label="Email" type="email" leadingIcon="mail" />
      <TextField label="Price" prefixText="$" suffixText="USD" inputMode="decimal" />
      <TextField variant="outlined" label="Parcel weight" type="number" suffixText="kg" />
      <TextField variant="outlined" label="Folder" prefixText="/" trailingIcon="folder" />
    </>
  )
}

/**
 * Validation
 * `error` shows the error color and icon, and `errorText` replaces the supporting text. `required` adds an asterisk to the label.
 */
export function ExampleValidation() {
  const [username, setUsername] = useState('Ada Lovelace')
  const invalid = !/^[a-z0-9_]+$/.test(username)
  return (
    <TextField
      label="Username"
      prefixText="@"
      required
      value={username}
      onValueChange={setUsername}
      error={invalid}
      errorText="Use lowercase letters, numbers and underscores."
      supportingText="People can find you by it."
    />
  )
}

/**
 * Counter and multiline
 * `maxLength` adds a character counter. `multiline` grows from `rows` lines up to `maxRows`, then scrolls.
 */
export function ExampleProfile() {
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 480 }}>
      <TextField
        label="Status"
        maxLength={60}
        defaultValue="Working from Lisbon this week"
        fullWidth
      />
      <TextField
        label="Bio"
        multiline
        rows={2}
        maxRows={5}
        maxLength={160}
        supportingText="Shown on your profile."
        fullWidth
      />
    </div>
  )
}

/**
 * Password and clear buttons
 * `passwordToggle` adds a button that shows or hides a password. `onClear` adds a clear button while the field has a value.
 */
export function ExampleButtons() {
  const [query, setQuery] = useState('invoice')
  return (
    <>
      <TextField
        label="New password"
        type="password"
        passwordToggle
        autoComplete="new-password"
        supportingText="Use 12 or more characters."
      />
      <TextField
        variant="outlined"
        label="Search mail"
        leadingIcon="search"
        value={query}
        onValueChange={setQuery}
        onClear={() => setQuery('')}
      />
    </>
  )
}

/**
 * Read-only and disabled
 * Read-only fields stay focusable, so people can select and copy the value. Disabled fields cannot be focused.
 */
export function ExampleReadOnly() {
  const snackbar = useSnackbar()
  const link = 'https://drive.example.com/s/3f9a0c71e2'
  return (
    <>
      <TextField
        variant="outlined"
        label="Share link"
        value={link}
        readOnly
        trailingIcon={
          <IconButton
            icon="content_copy"
            label="Copy link"
            onClick={() => {
              navigator.clipboard?.writeText(link)
              snackbar.show('Link copied')
            }}
          />
        }
      />
      <TextField variant="outlined" label="File ID" defaultValue="f1042" disabled />
    </>
  )
}
