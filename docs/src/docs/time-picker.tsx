import {
  Button,
  DatePickerField,
  M3LocaleProvider,
  TimePickerDialog,
  TimePickerField,
  todayDate,
  toISODate,
  useM3Locale,
  useSnackbar,
} from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

export const doc = defineDoc({
  slug: 'time-picker',
  name: 'Time picker',
  group: 'pickers',
  icon: 'schedule',
  order: 2,
  summary:
    'Time pickers let people select a time on a clock dial or type it with the keyboard. Values are 24-hour `HH:mm` strings; the display follows the locale or `hour12`.',
  imports: [
    'TimePickerField',
    'TimePickerDialog',
    'DatePickerField',
    'Button',
    'M3LocaleProvider',
    'todayDate',
    'toISODate',
    'useM3Locale',
    'useSnackbar',
  ],
  preview: () => (
    <div className="g-preview-col">
      <TimePickerField label="Start time" value="09:30" fullWidth />
    </div>
  ),
  playground: {
    controls: {
      picker: { type: 'select', options: ['field', 'dialog'], default: 'field' },
      clock: { type: 'select', options: ['locale', '12-hour', '24-hour'], default: 'locale' },
      label: { type: 'text', default: 'Start time', label: 'Label (field)' },
      variant: {
        type: 'select',
        options: ['outlined', 'filled'],
        default: 'outlined',
        label: 'Variant (field)',
      },
      supportingText: { type: 'text', default: '', label: 'Supporting text (field)' },
      initialMode: {
        type: 'select',
        options: ['dial', 'input'],
        default: 'dial',
        label: 'Initial mode (dialog)',
      },
      title: { type: 'text', default: '', label: 'Title (dialog)' },
      required: { type: 'boolean', default: false, label: 'Required (field)' },
      disabled: { type: 'boolean', default: false, label: 'Disabled (field)' },
    },
    render: function TimePickerPlayground(v) {
      const [time, setTime] = useState<string | null>('09:30')
      const [open, setOpen] = useState(false)
      const hour12 = v.clock === 'locale' ? undefined : v.clock === '12-hour'
      if (v.picker === 'dialog') {
        return (
          <>
            <Button variant="tonal" icon="schedule" onClick={() => setOpen(true)}>
              {time ?? 'Pick a time'}
            </Button>
            <TimePickerDialog
              open={open}
              onClose={() => setOpen(false)}
              value={time}
              onConfirm={setTime}
              hour12={hour12}
              initialMode={v.initialMode}
              title={v.title || undefined}
            />
          </>
        )
      }
      return (
        <TimePickerField
          label={v.label}
          value={time}
          onChange={setTime}
          hour12={hour12}
          variant={v.variant}
          supportingText={v.supportingText || undefined}
          required={v.required}
          disabled={v.disabled}
        />
      )
    },
    code: (v, { jsx, changed }) => {
      const hour12 = v.clock === 'locale' ? undefined : v.clock === '12-hour' || raw('false')
      if (v.picker === 'dialog') {
        const dialog = jsx('TimePickerDialog', {
          open: raw('open'),
          onClose: raw('() => setOpen(false)'),
          value: raw('time'),
          onConfirm: raw('setTime'),
          hour12,
          ...changed(v, ['initialMode']),
          title: v.title,
        })
        return `const [open, setOpen] = useState(false)\nconst [time, setTime] = useState<string | null>('09:30')\n\n<Button variant="tonal" icon="schedule" onClick={() => setOpen(true)}>\n  {time ?? 'Pick a time'}\n</Button>\n${dialog}`
      }
      const field = jsx('TimePickerField', {
        label: v.label,
        value: raw('time'),
        onChange: raw('setTime'),
        hour12,
        ...changed(v, ['variant']),
        supportingText: v.supportingText,
        required: v.required,
        disabled: v.disabled,
      })
      return `const [time, setTime] = useState<string | null>('09:30')\n\n${field}`
    },
  },
  api: [
    { name: 'TimePickerField', interfaces: ['TimePickerFieldProps'] },
    { name: 'TimePickerDialog', interfaces: ['TimePickerDialogProps'] },
    {
      name: 'TimeValue',
      interfaces: ['TimeValue'],
      inherits:
        '`parseTime(value)` turns an `HH:mm` string into a `TimeValue`, or `null` when it is not a valid time. `formatTimeValue(time)` turns it back into `HH:mm`.',
    },
  ],
  guidelines: [
    'Store and send times as 24-hour `HH:mm` strings. The locale, or `hour12`, changes only how the time is shown.',
    'The dial suits touch screens and occasional input. Open the dialog in `input` mode when people type times often.',
    'For a date and a time, put a date field and a time field side by side, and show the time zone of the time.',
  ],
})

/**
 * Dial and keyboard input
 * On the dial, people pick the hour, then the minute. In keyboard mode they type both. An icon button in the dialog switches modes, and `initialMode` sets the first one.
 */
export function ExampleModes() {
  const [open, setOpen] = useState<'dial' | 'input' | null>(null)
  const [time, setTime] = useState('14:30')
  return (
    <>
      <Button variant="tonal" icon="schedule" onClick={() => setOpen('dial')}>
        Pick a time
      </Button>
      <Button variant="outlined" icon="keyboard" onClick={() => setOpen('input')}>
        Type a time
      </Button>
      <span className="g-muted">
        Value: <code>{time}</code>
      </span>
      <TimePickerDialog
        open={open !== null}
        onClose={() => setOpen(null)}
        value={time}
        onConfirm={setTime}
        initialMode={open ?? 'dial'}
      />
    </>
  )
}

/**
 * 12-hour and 24-hour clocks
 * Without `hour12`, the clock follows the locale: 12-hour for English (US) and 24-hour for English (UK). The value is the same 24-hour string in every case.
 */
export function ExampleClocks() {
  const [time, setTime] = useState<string | null>('14:30')
  return (
    <>
      <TimePickerField label="12-hour" value={time} onChange={setTime} hour12 />
      <TimePickerField label="24-hour" value={time} onChange={setTime} hour12={false} />
      <M3LocaleProvider locale="en-GB">
        <TimePickerField label="English (UK)" value={time} onChange={setTime} />
      </M3LocaleProvider>
      <span className="g-muted">
        Value: <code>{time ?? 'null'}</code>
      </span>
    </>
  )
}

/**
 * Field states
 * The field opens the dialog on click, Enter, Space or Alt+Down arrow. Backspace or Delete clears the value. `name` adds a hidden input with the `HH:mm` value for forms.
 */
export function ExampleFieldStates() {
  const [time, setTime] = useState<string | null>(null)
  return (
    <>
      <TimePickerField
        label="Daily reminder at"
        name="remindAt"
        required
        value={time}
        onChange={setTime}
        supportingText="Press Backspace to clear"
      />
      <TimePickerField
        label="Nightly backup"
        variant="filled"
        value="02:00"
        disabled
        supportingText="Set by an administrator"
      />
    </>
  )
}

/**
 * Schedule an email
 * A date field and a time field together give a local date and time. Turn it into an instant with `toISOString()` before you send it, and show the time zone next to the fields.
 */
export function ExampleSchedule() {
  const snackbar = useSnackbar()
  const { locale } = useM3Locale()
  const [date, setDate] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>('09:00')
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
  // `YYYY-MM-DDTHH:mm` without an offset is read as local time.
  const at = date && time ? new Date(`${date}T${time}`) : null
  const past = at !== null && at.getTime() <= Date.now()
  return (
    <div className="g-stack">
      <div className="g-row" style={{ alignItems: 'flex-start' }}>
        <DatePickerField
          label="Send on"
          value={date}
          onChange={setDate}
          min={toISODate(todayDate())}
          required
        />
        <TimePickerField
          label="At"
          value={time}
          onChange={setTime}
          required
          supportingText={zone}
        />
      </div>
      <span className="g-muted">
        {!at
          ? 'Pick a date and a time.'
          : past
            ? 'Pick a time in the future.'
            : `Sends ${new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'short' }).format(at)}.`}
      </span>
      <Button
        icon="schedule_send"
        disabled={!at || past}
        style={{ alignSelf: 'flex-start' }}
        onClick={() => at && snackbar.show(`Scheduled for ${at.toISOString()}`)}
      >
        Schedule
      </Button>
    </div>
  )
}
