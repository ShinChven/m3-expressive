import {
  Button,
  Calendar,
  DatePickerDialog,
  DatePickerField,
  DateRangePickerDialog,
  dayOfWeek,
  formatDate,
  M3LocaleProvider,
  parseISODate,
  todayDate,
  toISODate,
  useM3Locale,
} from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

// Saturdays and Sundays. Used by the playground.
const isWeekend = (iso: string) => [0, 6].includes(dayOfWeek(parseISODate(iso)!))

const WEEKEND_HELPER =
  'const isWeekend = (iso: string) => [0, 6].includes(dayOfWeek(parseISODate(iso)!))\n'

export const doc = defineDoc({
  slug: 'date-picker',
  name: 'Date picker',
  group: 'pickers',
  icon: 'calendar_month',
  order: 1,
  summary:
    'Date pickers let people select a date or a range of dates, from a calendar or by typing. Values are ISO strings (`YYYY-MM-DD`), so a date is the same day in every time zone.',
  imports: [
    'DatePickerField',
    'DatePickerDialog',
    'DateRangePickerDialog',
    'Calendar',
    'formatDate',
    'parseISODate',
    'Button',
    'dayOfWeek',
    'M3LocaleProvider',
    'todayDate',
    'toISODate',
    'useM3Locale',
  ],
  preview: () => (
    <div className="g-preview-col">
      <DatePickerField label="Check-in" value="2026-11-03" fullWidth />
    </div>
  ),
  playground: {
    controls: {
      picker: {
        type: 'select',
        options: ['docked', 'modal', 'range', 'inline'],
        default: 'docked',
      },
      label: { type: 'text', default: 'Check-in', label: 'Label (docked)' },
      variant: {
        type: 'select',
        options: ['outlined', 'filled'],
        default: 'outlined',
        label: 'Variant (docked)',
      },
      initialMode: {
        type: 'select',
        options: ['calendar', 'input'],
        default: 'calendar',
        label: 'Initial mode (modal)',
      },
      title: { type: 'text', default: '', label: 'Title (modal and range)' },
      min: { type: 'text', default: '', label: 'Min (YYYY-MM-DD)' },
      max: { type: 'text', default: '', label: 'Max (YYYY-MM-DD)' },
      noWeekends: { type: 'boolean', default: false, label: 'Disable weekends' },
      required: { type: 'boolean', default: false, label: 'Required (docked)' },
      disabled: { type: 'boolean', default: false, label: 'Disabled (docked)' },
    },
    render: function DatePickerPlayground(v) {
      const [date, setDate] = useState<string | null>('2026-11-03')
      const [range, setRange] = useState<[string | null, string | null]>([
        '2026-11-02',
        '2026-11-08',
      ])
      const [open, setOpen] = useState(false)
      const limits = {
        min: v.min || undefined,
        max: v.max || undefined,
        isDateDisabled: v.noWeekends ? isWeekend : undefined,
      }
      switch (v.picker) {
        case 'inline':
          return <Calendar value={date} onChange={setDate} {...limits} />
        case 'modal':
          return (
            <>
              <Button variant="tonal" icon="event" onClick={() => setOpen(true)}>
                {date ?? 'Pick a date'}
              </Button>
              <DatePickerDialog
                open={open}
                onClose={() => setOpen(false)}
                value={date}
                onConfirm={setDate}
                initialMode={v.initialMode}
                title={v.title || undefined}
                {...limits}
              />
            </>
          )
        case 'range':
          return (
            <>
              <Button variant="tonal" icon="date_range" onClick={() => setOpen(true)}>
                {range[0] ?? 'Start'} – {range[1] ?? 'End'}
              </Button>
              <DateRangePickerDialog
                open={open}
                onClose={() => setOpen(false)}
                value={range}
                onConfirm={setRange}
                title={v.title || undefined}
                {...limits}
              />
            </>
          )
        default:
          return (
            <DatePickerField
              label={v.label}
              value={date}
              onChange={setDate}
              variant={v.variant}
              required={v.required}
              disabled={v.disabled}
              {...limits}
            />
          )
      }
    },
    code: (v, { jsx, changed }) => {
      const limits = {
        min: v.min,
        max: v.max,
        isDateDisabled: v.noWeekends ? raw('isWeekend') : undefined,
      }
      const helper = v.noWeekends ? WEEKEND_HELPER : ''
      if (v.picker === 'docked' || v.picker === 'inline') {
        const state = "const [date, setDate] = useState<string | null>('2026-11-03')\n"
        const element =
          v.picker === 'inline'
            ? jsx('Calendar', { value: raw('date'), onChange: raw('setDate'), ...limits })
            : jsx('DatePickerField', {
                label: v.label,
                value: raw('date'),
                onChange: raw('setDate'),
                ...changed(v, ['variant']),
                ...limits,
                required: v.required,
                disabled: v.disabled,
              })
        return `${state}${helper}\n${element}`
      }
      const isRange = v.picker === 'range'
      const state = isRange
        ? "const [open, setOpen] = useState(false)\nconst [range, setRange] = useState<[string | null, string | null]>([\n  '2026-11-02',\n  '2026-11-08',\n])\n"
        : "const [open, setOpen] = useState(false)\nconst [date, setDate] = useState<string | null>('2026-11-03')\n"
      const button = isRange
        ? '<Button variant="tonal" icon="date_range" onClick={() => setOpen(true)}>\n  {range[0] ?? \'Start\'} – {range[1] ?? \'End\'}\n</Button>'
        : '<Button variant="tonal" icon="event" onClick={() => setOpen(true)}>\n  {date ?? \'Pick a date\'}\n</Button>'
      const dialog = jsx(isRange ? 'DateRangePickerDialog' : 'DatePickerDialog', {
        open: raw('open'),
        onClose: raw('() => setOpen(false)'),
        value: raw(isRange ? 'range' : 'date'),
        onConfirm: raw(isRange ? 'setRange' : 'setDate'),
        ...(isRange ? {} : changed(v, ['initialMode'])),
        title: v.title,
        ...limits,
      })
      return `${state}${helper}\n${button}\n${dialog}`
    },
  },
  api: [
    { name: 'DatePickerField', interfaces: ['DatePickerFieldProps'] },
    { name: 'DatePickerDialog', interfaces: ['DatePickerDialogProps'] },
    { name: 'DateRangePickerDialog', interfaces: ['DateRangePickerDialogProps'] },
    { name: 'Calendar', interfaces: ['CalendarProps'] },
    {
      name: 'Date helpers',
      interfaces: [],
      inherits:
        '`parseISODate(value)` turns an ISO string into a `PlainDate` (`{ year, month, day }`), or `null` when it is not a valid date. `toISODate(date)` turns it back. `formatDate(date, locale, options)` formats a `PlainDate` with `Intl.DateTimeFormat` in UTC, so the day never shifts. `todayDate()` returns the local date of today.',
    },
  ],
  guidelines: [
    'Use the docked field in forms, where people often type a date they already know. Use the modal picker on small screens, or when the date is the main task.',
    'Store and send ISO dates (`YYYY-MM-DD`). Show them with `formatDate` and the current locale; do not parse the text that people see.',
    'Set `min`, `max` and `isDateDisabled` so people cannot pick a date that the server refuses.',
    'Use the range picker for one period, such as a hotel stay or a report, not two separate date fields.',
  ],
})

/**
 * Docked date picker
 * People type the date in the locale format, or open the calendar with the icon button or Alt+Down arrow. `onChange` gets an ISO date, or `null` when people clear the field.
 */
export function ExampleDocked() {
  const [start, setStart] = useState<string | null>('2026-11-03')
  const [due, setDue] = useState<string | null>(null)
  return (
    <>
      <DatePickerField label="Start date" value={start} onChange={setStart} />
      <DatePickerField
        label="Due date"
        variant="filled"
        value={due}
        onChange={setDue}
        min={start ?? undefined}
      />
    </>
  )
}

/**
 * Modal date picker
 * The dialog has a calendar mode and a text input mode, and an icon button switches between them. `initialMode` sets the first mode. The value changes only when people press OK.
 */
export function ExampleModal() {
  const { locale } = useM3Locale()
  const [open, setOpen] = useState<'calendar' | 'input' | null>(null)
  const [date, setDate] = useState<string | null>('2026-11-03')
  const day = parseISODate(date)
  return (
    <>
      <Button variant="tonal" icon="event" onClick={() => setOpen('calendar')}>
        Pick a date
      </Button>
      <Button variant="outlined" icon="edit" onClick={() => setOpen('input')}>
        Type a date
      </Button>
      <span className="g-muted">{day ? formatDate(day, locale, { dateStyle: 'full' }) : '—'}</span>
      <DatePickerDialog
        open={open !== null}
        onClose={() => setOpen(null)}
        value={date}
        onConfirm={setDate}
        initialMode={open ?? 'calendar'}
      />
    </>
  )
}

/**
 * Date range
 * People pick a start date, then an end date. In input mode they type both. `onConfirm` gets `[start, end]` as ISO dates.
 */
export function ExampleRange() {
  const { locale } = useM3Locale()
  const [open, setOpen] = useState(false)
  const [range, setRange] = useState<[string | null, string | null]>(['2026-11-02', '2026-11-08'])
  const show = (iso: string | null) => {
    const day = parseISODate(iso)
    return day ? formatDate(day, locale, { dateStyle: 'medium' }) : '…'
  }
  return (
    <>
      <Button variant="tonal" icon="date_range" onClick={() => setOpen(true)}>
        Trip dates
      </Button>
      <span className="g-muted">
        {show(range[0])} – {show(range[1])}
      </span>
      <DateRangePickerDialog
        open={open}
        onClose={() => setOpen(false)}
        value={range}
        onConfirm={setRange}
        title="Trip dates"
      />
    </>
  )
}

/**
 * Inline calendar and disabled dates
 * `Calendar` shows the month grid without a field or a dialog. `min` and `max` limit the months; `isDateDisabled` blocks single dates. Arrow keys move by day and week, Page Up and Page Down by month, and Shift+Page Up and Shift+Page Down by year.
 */
export function ExampleInline() {
  const { locale } = useM3Locale()
  const [date, setDate] = useState<string | null>('2026-12-02')
  const day = parseISODate(date)
  return (
    <>
      <Calendar
        value={date}
        onChange={setDate}
        min="2026-11-01"
        max="2027-01-31"
        isDateDisabled={isOfficeClosed}
      />
      <div className="g-stack" style={{ maxWidth: 240 }}>
        <span className="m3-typescale-title-medium">
          {day ? formatDate(day, locale, { dateStyle: 'full' }) : 'No appointment date'}
        </span>
        <span className="g-muted">
          No appointments on weekends or from December 21 to January 3. Dates before November or
          after January are out of range.
        </span>
      </div>
    </>
  )
}

// Weekends and the holiday closure. ISO dates compare correctly as strings.
function isOfficeClosed(iso: string) {
  const weekend = [0, 6].includes(dayOfWeek(parseISODate(iso)!))
  return weekend || (iso >= '2026-12-21' && iso <= '2027-01-03')
}

/**
 * Regional formats
 * The field follows the locale of `M3LocaleProvider`: the order of day, month and year, the separator, and the first day of the week. The value stays the same ISO date.
 */
export function ExampleLocales() {
  const [date, setDate] = useState<string | null>('2026-11-03')
  return (
    <>
      {LOCALES.map(([locale, label]) => (
        <M3LocaleProvider key={locale} locale={locale}>
          <DatePickerField label={label} value={date} onChange={setDate} />
        </M3LocaleProvider>
      ))}
      <span className="g-muted">
        Value: <code>{date ?? 'null'}</code>
      </span>
    </>
  )
}

const LOCALES = [
  ['en-US', 'United States'],
  ['en-GB', 'United Kingdom'],
  ['en-CA', 'Canada'],
] as const

/**
 * Required date with an error
 * The field shows an error on its own for text that is not a date, or for a date outside the limits. Use `error` and `errorText` for your own checks, such as a required value. `name` adds a hidden input with the ISO value.
 */
export function ExampleValidation() {
  const [date, setDate] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [saved, setSaved] = useState<string | null>(null)
  const missing = submitted && !date
  return (
    <form
      noValidate
      className="g-row"
      style={{ alignItems: 'flex-start' }}
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
        if (date) setSaved(date)
      }}
    >
      <DatePickerField
        label="Departure date"
        name="departure"
        required
        value={date}
        onChange={setDate}
        min={toISODate(todayDate())}
        error={missing}
        errorText="Enter a date"
      />
      <Button type="submit" icon="save" style={{ marginTop: 8 }}>
        Save
      </Button>
      {saved && <span className="g-muted">Saved: {saved}</span>}
    </form>
  )
}
