import {
  Button,
  Calendar,
  Card,
  CardContent,
  CardHeader,
  createLocale,
  DataTable,
  DatePickerField,
  M3LocaleProvider,
  type M3Messages,
  Text,
  TimePickerField,
  useM3Locale,
} from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import { FILES } from '../mock'
import './regional-formats.css'

// Preview content: a date and a time formatted for the surrounding locale.
function LocaleSample() {
  const { locale, hour12 } = useM3Locale()
  const moment = new Date(2026, 10, 1, 14, 30)
  return (
    <div>
      <strong>{locale}</strong>
      <span>{new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(moment)}</span>
      <span>{new Intl.DateTimeFormat(locale, { timeStyle: 'short', hour12 }).format(moment)}</span>
    </div>
  )
}

const FIRST_DAY: Record<string, number | undefined> = { Sunday: 0, Monday: 1, Saturday: 6 }
const CLOCK: Record<string, boolean | undefined> = { '12-hour': true, '24-hour': false }

export const doc = defineDoc({
  slug: 'regional-formats',
  name: 'Regional formats',
  group: 'foundations',
  icon: 'public',
  order: 5,
  summary:
    '`M3LocaleProvider` sets how the components format dates, times and numbers, the first day of the week and the clock, for a region such as `en-US` or `en-GB`. The built-in text is English; `messages` replaces any of it.',
  imports: [
    'M3LocaleProvider',
    'useM3Locale',
    'createLocale',
    'Calendar',
    'DatePickerField',
    'TimePickerField',
    'DataTable',
    'Button',
    'Card',
    'CardHeader',
    'CardContent',
    'Text',
  ],
  preview: () => (
    <div className="regional-doc-preview">
      <M3LocaleProvider locale="en-US">
        <LocaleSample />
      </M3LocaleProvider>
      <M3LocaleProvider locale="en-GB">
        <LocaleSample />
      </M3LocaleProvider>
    </div>
  ),
  playground: {
    controls: {
      locale: {
        type: 'select',
        options: ['en-US', 'en-GB', 'en-CA', 'en-AU', 'en-IN', 'en-IE'],
        default: 'en-US',
      },
      firstDayOfWeek: {
        type: 'select',
        options: ['Locale', 'Sunday', 'Monday', 'Saturday'],
        default: 'Locale',
        label: 'First day of week',
      },
      hour12: {
        type: 'select',
        options: ['Locale', '12-hour', '24-hour'],
        default: 'Locale',
        label: 'Clock',
      },
      rowsPerPage: { type: 'text', default: '', label: 'Rows per page text' },
    },
    render: function RegionalFormatsPlayground(v) {
      const [date, setDate] = useState('2026-11-01')
      const [time, setTime] = useState<string | null>('14:30')
      const [pageSize, setPageSize] = useState(25)
      return (
        <M3LocaleProvider
          locale={v.locale}
          firstDayOfWeek={FIRST_DAY[v.firstDayOfWeek]}
          hour12={CLOCK[v.hour12]}
          messages={v.rowsPerPage ? { rowsPerPage: v.rowsPerPage } : undefined}
        >
          <div className="regional-doc-columns">
            <div className="regional-doc-column">
              <Calendar value={date} onChange={setDate} />
            </div>
            <div className="regional-doc-column">
              <TimePickerField label="Meeting time" value={time} onChange={setTime} />
              <DataTable
                aria-label="Files"
                rows={FILES.slice(0, 3)}
                getRowId={(row) => row.id}
                columns={[{ key: 'name', header: 'Name', cell: (row) => row.name }]}
                pagination={{
                  pageSize,
                  pageSizeOptions: [25, 50, 100],
                  onPageSizeChange: setPageSize,
                  hasPrevious: false,
                  hasNext: true,
                  onPrevious: () => {},
                  onNext: () => {},
                }}
              />
            </div>
          </div>
        </M3LocaleProvider>
      )
    },
    code: (v, { jsx }) => {
      const firstDay = FIRST_DAY[v.firstDayOfWeek]
      const clock = CLOCK[v.hour12]
      return jsx(
        'M3LocaleProvider',
        {
          locale: v.locale,
          firstDayOfWeek: firstDay,
          hour12: clock === false ? raw('false') : clock,
          messages: v.rowsPerPage
            ? raw(`{ rowsPerPage: ${JSON.stringify(v.rowsPerPage)} }`)
            : undefined,
        },
        [
          '<Calendar value={date} onChange={setDate} />',
          '<TimePickerField label="Meeting time" value={time} onChange={setTime} />',
          '<DataTable',
          '  aria-label="Files"',
          '  rows={rows}',
          '  getRowId={(row) => row.id}',
          '  columns={columns}',
          '  pagination={pagination}',
          '/>',
        ].join('\n'),
      )
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'M3LocaleProvider',
      interfaces: ['M3LocaleProviderProps'],
      inherits:
        'Providers can nest: the closest one applies. The built-in text is English for every locale; the locale sets the formats.',
    },
    {
      name: 'useM3Locale',
      interfaces: [],
      inherits:
        '`useM3Locale(): M3Locale`. Returns the locale of the closest provider, or `en-US` when there is none.',
    },
    {
      name: 'createLocale',
      interfaces: [],
      inherits:
        '`createLocale(locale: string, overrides?: Partial<M3Messages>): M3Locale`. Builds the same object a provider uses: the English text with `overrides` applied, and the first day of the week and the clock from `Intl`.',
    },
    { name: 'M3Locale', interfaces: ['M3Locale'] },
    {
      name: 'M3Messages',
      interfaces: ['M3Messages'],
      inherits: '`enUS` exports the built-in English text.',
    },
  ],
  guidelines: [
    'Put one `M3LocaleProvider` near the root of the app and pass the region of the user, for example `en-GB` for people in the United Kingdom.',
    'Use English locale tags. The built-in text is English, so another language would show English labels next to, for example, French month names.',
    'Format dates and numbers in your own components with the `locale` from `useM3Locale`, so they match the pickers and tables.',
    'Use `messages` to replace built-in text with the words of your product. A message you do not pass keeps its built-in text.',
  ],
})

/**
 * US and UK English side by side
 * The same calendar and data table under `en-US` and `en-GB`. The first day of the week and the date format follow the region.
 */
export function ExampleSideBySide() {
  return (
    <div className="regional-doc-columns">
      <M3LocaleProvider locale="en-US">
        <RegionColumn />
      </M3LocaleProvider>
      <M3LocaleProvider locale="en-GB">
        <RegionColumn />
      </M3LocaleProvider>
    </div>
  )
}

function RegionColumn() {
  const { locale } = useM3Locale()
  const [date, setDate] = useState('2026-11-01')
  const [selection, setSelection] = useState<string[]>(['f1'])
  const [pageSize, setPageSize] = useState(25)
  const day = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' })
  return (
    <div className="regional-doc-column">
      <Text variant="title-medium" as="span">
        {locale}
      </Text>
      <Calendar value={date} onChange={setDate} />
      <DataTable
        aria-label={`Files (${locale})`}
        rows={FILES.slice(0, 3)}
        getRowId={(row) => row.id}
        selection={selection}
        onSelectionChange={setSelection}
        bulkActions={<Button variant="text">Share</Button>}
        columns={[
          { key: 'name', header: 'Name', cell: (row) => row.name },
          {
            key: 'modified',
            header: 'Modified',
            cell: (row) => day.format(new Date(`${row.modified}T12:00`)),
          },
        ]}
        pagination={{
          pageSize,
          pageSizeOptions: [25, 50, 100],
          onPageSizeChange: setPageSize,
          hasPrevious: false,
          hasNext: true,
          onPrevious: () => {},
          onNext: () => {},
        }}
      />
    </div>
  )
}

/**
 * Your own wording
 * `messages` replaces built-in text for one provider. Messages that take a value, such as `selectedCount`, are functions.
 */
export function ExampleOverrides() {
  const [selection, setSelection] = useState<string[]>(['f2', 'f3'])
  const [pageSize, setPageSize] = useState(50)
  return (
    <M3LocaleProvider locale="en-US" messages={MESSAGES}>
      <DataTable
        aria-label="Files"
        rows={FILES.slice(0, 4)}
        getRowId={(row) => row.id}
        selection={selection}
        onSelectionChange={setSelection}
        bulkActions={<Button variant="text">Archive</Button>}
        columns={[
          { key: 'name', header: 'Name', cell: (row) => row.name },
          { key: 'status', header: 'Status', cell: (row) => row.status },
        ]}
        pagination={{
          pageSize,
          pageSizeOptions: [50, 100],
          onPageSizeChange: setPageSize,
          hasPrevious: false,
          hasNext: true,
          onPrevious: () => {},
          onNext: () => {},
        }}
      />
    </M3LocaleProvider>
  )
}

// Defined once, outside the component, so the provider does not rebuild its value on every render.
const MESSAGES: Partial<M3Messages> = {
  rowsPerPage: 'Files per screen',
  selectedCount: (count) => (count === 1 ? '1 file selected' : `${count} files selected`),
}

/**
 * Fixed week and clock
 * `firstDayOfWeek` and `hour12` set the week start and the clock for everyone, whatever the region. Here a team in the US plans shifts in weeks that start on Monday, with a 24-hour clock.
 */
export function ExampleFixedConventions() {
  const [date, setDate] = useState<string | null>('2026-11-02')
  const [time, setTime] = useState<string | null>('18:00')
  return (
    <M3LocaleProvider locale="en-US" firstDayOfWeek={1} hour12={false}>
      <div className="regional-doc-column">
        <DatePickerField label="Shift date" value={date} onChange={setDate} />
        <TimePickerField label="Shift start" value={time} onChange={setTime} />
        <Calendar value={date} onChange={setDate} />
      </div>
    </M3LocaleProvider>
  )
}

/**
 * Region conventions
 * `createLocale` returns what a provider would use. The date format, the first day of the week and the clock come from the browser.
 */
export function ExampleConventions() {
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' })
  const sample = new Date(2026, 10, 1, 14, 30)
  return (
    <table className="regional-doc-table g-fill">
      <thead>
        <tr>
          <th scope="col">Locale</th>
          <th scope="col">Date</th>
          <th scope="col">Week starts on</th>
          <th scope="col">Clock</th>
        </tr>
      </thead>
      <tbody>
        {TAGS.map((tag) => {
          const locale = createLocale(tag)
          // 4 January 2026 is a Sunday.
          const first = weekday.format(new Date(2026, 0, 4 + locale.firstDayOfWeek))
          return (
            <tr key={tag}>
              <td>{tag}</td>
              <td>{new Intl.DateTimeFormat(tag, { dateStyle: 'short' }).format(sample)}</td>
              <td>{first}</td>
              <td>{locale.hour12 ? '12-hour' : '24-hour'}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const TAGS = ['en-US', 'en-GB', 'en-CA', 'en-AU', 'en-IN', 'en-IE']

/**
 * Your own components
 * `useM3Locale` gives the locale and clock style of the closest provider. Use them to format dates and numbers the same way as the components do; `en-IN` groups large numbers differently.
 */
export function ExampleOwnComponents() {
  return (
    <div className="regional-doc-columns">
      {['en-US', 'en-GB', 'en-IN'].map((tag) => (
        <M3LocaleProvider key={tag} locale={tag}>
          <BackupSummary />
        </M3LocaleProvider>
      ))}
    </div>
  )
}

function BackupSummary() {
  const { locale, hour12 } = useM3Locale()
  const when = new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12,
  }).format(new Date(2026, 10, 1, 14, 30))
  const files = new Intl.NumberFormat(locale).format(1234567)
  return (
    <Card variant="outlined">
      <CardHeader title={locale} subhead={when} />
      <CardContent>
        <Text variant="headline-small" as="span">
          {files} files backed up
        </Text>
      </CardContent>
    </Card>
  )
}
