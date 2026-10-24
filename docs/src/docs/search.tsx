import {
  Avatar,
  IconButton,
  Search,
  type SearchSuggestion,
} from 'material-design-3-expressive-components'
import { useEffect, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import { fetchFiles } from '../mock'

const SETTINGS: SearchSuggestion[] = [
  { value: 'Profile', label: 'Profile', icon: 'person', supportingText: 'Account › Profile' },
  { value: 'Password', label: 'Password', icon: 'password', supportingText: 'Account › Security' },
  { value: 'Language', label: 'Language', icon: 'language', supportingText: 'General › Language' },
  {
    value: 'Notifications',
    label: 'Notifications',
    icon: 'notifications',
    supportingText: 'General › Notifications',
  },
  {
    value: 'Storage',
    label: 'Storage',
    icon: 'cloud',
    supportingText: 'Drive › Storage',
  },
  {
    value: 'Privacy',
    label: 'Privacy',
    icon: 'shield',
    supportingText: 'Account › Privacy',
  },
]

function matching(query: string) {
  const term = query.trim().toLowerCase()
  return SETTINGS.filter((setting) => setting.value.toLowerCase().includes(term))
}

function settingsCode() {
  const lines = SETTINGS.map(
    (s) =>
      `  { value: '${s.value}', label: '${s.label}', icon: '${s.icon}', supportingText: '${s.supportingText}' },`,
  )
  return `const settings: SearchSuggestion[] = [\n${lines.join('\n')}\n]`
}

const TRAILING = {
  none: { node: undefined, code: undefined },
  avatar: {
    node: <Avatar name="Ada Lovelace" size={30} />,
    code: '<Avatar name="Ada Lovelace" size={30} />',
  },
  mic: {
    node: <IconButton icon="mic" label="Search by voice" />,
    code: '<IconButton icon="mic" label="Search by voice" />',
  },
}

export const doc = defineDoc({
  slug: 'search',
  name: 'Search',
  group: 'navigation',
  icon: 'search',
  order: 7,
  summary:
    'Search lets people find content by typing a query. The contained search bar grows wider when focused and opens a search view with suggestions, optionally in groups separated by gaps; on compact windows the view fills the screen.',
  imports: ['Search', 'Avatar', 'IconButton'],
  preview: () => (
    <div className="g-preview-col" style={{ maxWidth: 'none' }}>
      <Search placeholder="Search mail" trailing={<Avatar name="Ada Lovelace" size={30} />} />
    </div>
  ),
  playground: {
    controls: {
      placeholder: { type: 'text', default: 'Search settings' },
      suggestions: { type: 'select', options: ['matches', 'empty', 'hidden'], default: 'matches' },
      emptyText: { type: 'text', default: '', label: 'Empty text' },
      loading: { type: 'boolean', default: false },
      trailing: { type: 'select', options: ['none', 'avatar', 'mic'], default: 'avatar' },
      fullScreen: {
        type: 'select',
        options: ['compact', 'true', 'false'],
        default: 'compact',
        label: 'Full screen',
      },
      shortcut: { type: 'boolean', default: false },
    },
    render: function SearchPlayground(v) {
      const [query, setQuery] = useState('')
      const suggestions =
        v.suggestions === 'matches' ? matching(query) : v.suggestions === 'empty' ? [] : undefined
      return (
        <div style={{ width: '100%', maxWidth: 560, minHeight: 440 }}>
          <Search
            placeholder={v.placeholder}
            value={query}
            onChange={setQuery}
            suggestions={suggestions}
            emptyText={v.emptyText || undefined}
            loading={v.loading}
            trailing={TRAILING[v.trailing].node}
            fullScreen={v.fullScreen === 'compact' ? 'compact' : v.fullScreen === 'true'}
            shortcut={v.shortcut}
          />
        </div>
      )
    },
    code: (v, { jsx }) => {
      const trailing = TRAILING[v.trailing].code
      const search = jsx('Search', {
        placeholder: v.placeholder,
        value: raw('query'),
        onChange: raw('setQuery'),
        suggestions:
          v.suggestions === 'matches'
            ? raw('suggestions')
            : v.suggestions === 'empty'
              ? raw('[]')
              : undefined,
        emptyText: v.emptyText,
        loading: v.loading,
        trailing: trailing && raw(trailing),
        fullScreen:
          v.fullScreen === 'compact' ? undefined : v.fullScreen === 'true' || raw('false'),
        shortcut: v.shortcut || undefined,
      })
      const state = "const [query, setQuery] = useState('')"
      if (v.suggestions !== 'matches') return `${state}\n\n${search}`
      const filter =
        'const suggestions = settings.filter((setting) =>\n  setting.value.toLowerCase().includes(query.trim().toLowerCase()),\n)'
      return `${settingsCode()}\n\n${state}\n${filter}\n\n${search}`
    },
  },
  api: [
    { name: 'Search', interfaces: ['SearchProps'] },
    { name: 'SearchSuggestion', interfaces: ['SearchSuggestion'] },
  ],
  guidelines: [
    'Write a placeholder that says what people can find: “Search settings”, not “Search”.',
    'Show suggestions as people type, and recent searches before they type. Keep the list short.',
    'Pass `[]` when nothing matches, so that the view shows the empty state. Set `emptyText` to say what to try next.',
    'Set `loading` while results load, and keep the previous suggestions on screen until the new ones arrive.',
    'Set `shortcut` to allow focusing the search bar from anywhere on the page with Cmd+K (macOS) or Ctrl+K.',
  ],
})

/**
 * Suggestions
 * Filter the suggestions as people type. They can choose one with a click, or with the arrow keys and Enter. Enter with no highlighted suggestion calls `onSubmit`.
 */
export function ExampleSuggestions() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')
  const term = query.trim().toLowerCase()
  const suggestions = SETTINGS.filter((setting) => setting.value.toLowerCase().includes(term))
  return (
    <div className="g-fill" style={{ maxWidth: 560, minHeight: 440 }}>
      <Search
        placeholder="Search settings"
        value={query}
        onChange={setQuery}
        suggestions={suggestions}
        onSuggestionSelect={(setting) => setResult(`Opened ${setting.supportingText}`)}
        onSubmit={(text) => setResult(`Searched for “${text}”`)}
      />
      <p className="g-muted">{result}</p>
    </div>
  )
}

/**
 * Grouped results
 * `groups` separates suggestions into groups with gaps between them (M3 Expressive), each with an optional label. Arrow keys move through all of them in order.
 */
export function ExampleGroups() {
  const [query, setQuery] = useState('')
  const term = query.trim().toLowerCase()
  const match = (items: SearchSuggestion[]) =>
    items.filter((item) => String(item.value).toLowerCase().includes(term))
  return (
    <div className="g-fill" style={{ maxWidth: 560, minHeight: 440 }}>
      <Search
        placeholder="Search contacts and files"
        value={query}
        onChange={setQuery}
        groups={[
          { label: 'Contacts', suggestions: match(CONTACTS) },
          { label: 'Files', suggestions: match(FILE_RESULTS) },
        ].filter((group) => group.suggestions.length > 0)}
      />
    </div>
  )
}

const CONTACTS: SearchSuggestion[] = [
  {
    value: 'Ada Lovelace',
    label: 'Ada Lovelace',
    icon: 'person',
    supportingText: 'ada@example.com',
  },
  {
    value: 'Alan Turing',
    label: 'Alan Turing',
    icon: 'person',
    supportingText: 'alan@example.com',
  },
]

const FILE_RESULTS: SearchSuggestion[] = [
  { value: 'Analytics engine.pdf', label: 'Analytics engine.pdf', icon: 'picture_as_pdf' },
  { value: 'Annual report.xlsx', label: 'Annual report.xlsx', icon: 'table' },
]

/**
 * Recent searches and empty state
 * Before people type, show their recent searches; the default icon is `history`. When nothing matches, pass `[]` and say what to try in `emptyText`.
 */
export function ExampleEmpty() {
  const [query, setQuery] = useState('')
  const term = query.trim().toLowerCase()
  const suggestions = term
    ? PHOTOS.filter((photo) => photo.toLowerCase().includes(term)).map((photo) => ({
        value: photo,
        label: photo,
        icon: 'image',
      }))
    : RECENT.map((text) => ({ value: text, label: text }))
  return (
    <div className="g-fill" style={{ maxWidth: 560, minHeight: 320 }}>
      <Search
        placeholder="Search photos"
        value={query}
        onChange={setQuery}
        suggestions={suggestions}
        emptyText={`No files match “${query.trim()}”. Try a shorter name.`}
      />
    </div>
  )
}

const RECENT = ['beach', 'birthday']
const PHOTOS = ['Beach day.jpg', 'Birthday cake.jpg', 'Harbor at night.jpg', 'Mountain hike.jpg']

/**
 * Loading results
 * Search 1,000 files on a server. `loading` shows a progress bar while results load; the previous suggestions stay until the new ones arrive, and late responses are ignored.
 */
export function ExampleLoading() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchSuggestion[]>(RECENT_FILES)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const term = query.trim()
    if (!term) {
      setResults(RECENT_FILES)
      setLoading(false)
      return
    }
    let cancelled = false
    setLoading(true)
    const timer = window.setTimeout(async () => {
      try {
        const { rows } = await fetchFiles({ search: term, sort: null, pageSize: 5, cursor: 0 })
        if (cancelled) return
        setResults(
          rows.map((row) => ({
            value: row.name,
            label: row.name,
            icon: 'description',
            supportingText: row.folder,
          })),
        )
      } finally {
        if (!cancelled) setLoading(false)
      }
    }, 200)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [query])

  return (
    <div className="g-fill" style={{ maxWidth: 560, minHeight: 400 }}>
      <Search
        placeholder="Search all files"
        value={query}
        onChange={setQuery}
        suggestions={results}
        loading={loading}
        emptyText="No files match. Check the spelling or search by folder."
      />
    </div>
  )
}

const RECENT_FILES: SearchSuggestion[] = [
  { value: 'budget', label: 'budget' },
  { value: 'roadmap', label: 'roadmap' },
]

/**
 * Leading and trailing content
 * `leading` replaces the search icon, for example with a menu button. `trailing` holds an avatar or a voice button. While the bar is active, they change to a back button and a clear button.
 */
export function ExampleLeadingTrailing() {
  return (
    <div className="g-stack g-fill" style={{ maxWidth: 560 }}>
      <Search
        placeholder="Search mail"
        leading={<IconButton icon="menu" label="Open navigation" />}
        trailing={<Avatar name="Ada Lovelace" size={30} />}
      />
      <Search
        placeholder="Search photos"
        trailing={<IconButton icon="mic" label="Search by voice" />}
      />
    </div>
  )
}

/**
 * Full screen
 * `fullScreen` opens the search view over the whole window. The default, `"compact"`, does this on compact windows only, and `false` always keeps the docked view.
 */
export function ExampleFullScreen() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('')
  const term = query.trim().toLowerCase()
  const suggestions = TOPICS.filter((t) => t.label.toLowerCase().includes(term)).map((t) => ({
    value: t.label,
    label: t.label,
    icon: 'help',
    supportingText: t.description,
  }))
  return (
    <div className="g-fill" style={{ maxWidth: 560 }}>
      <Search
        placeholder="Search help topics"
        value={query}
        onChange={setQuery}
        suggestions={suggestions}
        onSuggestionSelect={(s) => setTopic(s.value)}
        fullScreen
      />
      <p className="g-muted">{topic ? `Selected topic: ${topic}` : 'No topic selected.'}</p>
    </div>
  )
}

const TOPICS = [
  { label: 'Share a folder', description: 'Give people access to a folder and its files.' },
  { label: 'Restore a file', description: 'Get a file back from the trash within 30 days.' },
  { label: 'Free up space', description: 'Find large files and empty the trash.' },
  { label: 'Sync a computer', description: 'Keep a folder on your computer up to date.' },
]
