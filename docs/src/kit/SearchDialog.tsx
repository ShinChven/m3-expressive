import {
  Icon,
  IconButton,
  Portal,
  useFocusTrap,
  useLayer,
  usePresence,
  useScrollLock,
} from '@m3-expressive/react'
import { type KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { GROUPS } from './doc'
import { DOCS } from './registry'

export interface SearchItem {
  id: string
  title: string
  path: string
  icon: string
  group: string
  groupLabel: string
  summary: string
  keywords?: string[]
}

const STATIC_PAGES: SearchItem[] = [
  {
    id: 'overview',
    title: 'Overview',
    path: '/',
    icon: 'home',
    group: 'pages',
    groupLabel: 'Pages',
    summary: 'Material 3 Expressive for React: overview, components and principles.',
    keywords: ['home', 'index', 'docs', 'guide'],
  },
  {
    id: 'start',
    title: 'Get started',
    path: '/start',
    icon: 'rocket_launch',
    group: 'pages',
    groupLabel: 'Pages',
    summary: 'Installation, quick start guide, packages and theme setup.',
    keywords: ['install', 'setup', 'npm', 'quickstart', 'import'],
  },
  {
    id: 'theme',
    title: 'Theme builder',
    path: '/theme',
    icon: 'palette',
    group: 'pages',
    groupLabel: 'Pages',
    summary: 'Interactive dynamic color scheme generator and tokens.',
    keywords: ['color', 'colors', 'seed', 'dynamic color', 'palette', 'dark mode'],
  },
  {
    id: 'icons',
    title: 'Material Symbols (3,932 icons)',
    path: '/icons',
    icon: 'interests',
    group: 'pages',
    groupLabel: 'Pages',
    summary:
      'Complete catalog of all 3,932 Material Symbols icons with search, copy and style options.',
    keywords: ['icons', 'symbols', 'material symbols', 'gallery', 'all icons', 'catalog', 'glyphs'],
  },
]

const KEYWORDS_BY_SLUG: Record<string, string[]> = {
  button: [
    'fab',
    'floating action button',
    'icon button',
    'tonal',
    'elevated',
    'outlined',
    'text button',
    'cta',
    'click',
  ],
  'icon-button': ['icon button', 'toggle icon', 'toolbar action'],
  fab: ['floating action button', 'action', 'cta', 'add'],
  'button-group': [
    'button group',
    'connected button group',
    'segmented button',
    'toggle button',
    'view switch',
  ],
  'split-button': ['split button', 'dropdown button', 'menu button', 'more actions'],
  'fab-menu': ['fab menu', 'speed dial', 'floating menu', 'more actions'],
  toolbar: ['toolbar', 'docked toolbar', 'floating toolbar', 'bottom app bar', 'action bar'],
  'loading-indicator': ['loading', 'spinner', 'loader', 'pull to refresh', 'busy', 'shape morph'],
  dialog: ['modal', 'alert', 'confirm', 'prompt', 'popup', 'window', 'dialog box'],
  snackbar: ['toast', 'notice', 'notification', 'banner', 'message', 'alert'],
  menu: ['dropdown', 'context menu', 'popup menu', 'options', 'list menu'],
  select: ['dropdown', 'picker', 'combobox', 'choose option', 'form select'],
  search: [
    'search bar',
    'search view',
    'suggestions',
    'find',
    'autocomplete',
    'query',
    'cmd+k',
    'command palette',
  ],
  'text-field': [
    'input',
    'textarea',
    'textbox',
    'form input',
    'outlined textfield',
    'filled textfield',
  ],
  switch: ['toggle', 'checkbox', 'boolean', 'option'],
  checkbox: ['check', 'multi select', 'box', 'toggle'],
  radio: ['radio button', 'single select', 'choice', 'option'],
  card: ['container', 'tile', 'surface', 'elevated card', 'outlined card', 'filled card'],
  chips: [
    'chip',
    'tag',
    'badge',
    'filter chip',
    'assist chip',
    'input chip',
    'suggestion chip',
    'pill',
  ],
  'date-picker': ['calendar', 'date', 'day', 'month', 'year', 'schedule'],
  'time-picker': ['clock', 'time', 'hour', 'minute', 'schedule'],
  'data-table': ['table', 'grid', 'rows', 'columns', 'sortable table', 'data'],
  'tree-view': ['tree', 'hierarchical list', 'directory', 'folder', 'nodes', 'nested'],
  slider: ['range', 'volume', 'scrubber', 'track', 'thumb'],
  progress: ['wavy', 'progress bar', 'linear progress', 'circular progress', 'loader'],
  badge: ['counter', 'dot', 'notification badge', 'unread count'],
  tooltip: ['hover hint', 'label', 'popover', 'tip', 'infotip'],
  'navigation-bar': ['bottom nav', 'navbar', 'navigation bar', 'tabs', 'mobile nav'],
  'navigation-rail': [
    'side rail',
    'rail',
    'expanded rail',
    'sidebar nav',
    'navigation drawer',
    'drawer',
    'modal rail',
  ],
  'app-bar': ['top bar', 'top app bar', 'header', 'search app bar', 'flexible app bar'],
  tabs: ['tab bar', 'tab panels', 'tab switcher', 'primary tabs', 'secondary tabs'],
  'bottom-sheet': ['sheet', 'bottom sheet', 'modal sheet', 'slide up', 'action sheet'],
  'side-sheet': ['sheet', 'side sheet', 'sidebar panel', 'flyout'],
  carousel: ['slider', 'gallery', 'slideshow', 'image carousel', 'multi-browse'],
  avatar: ['user image', 'profile', 'initials', 'user photo'],
  icon: ['symbol', 'material symbols', 'glyphs'],
  typography: ['font', 'typescale', 'headings', 'body text', 'display', 'emphasized'],
  shape: ['shapes', 'shape library', 'morph', 'corner radius', 'cookie', 'polygon'],
  motion: [
    'animation',
    'spring',
    'easing',
    'motion scheme',
    'expressive motion',
    'standard motion',
  ],
  spacing: ['spacing', 'padding', 'margin', 'gap', 'tokens', '8dp grid'],
  theming: ['theme', 'colors', 'dynamic color', 'palette', 'light dark mode', 'tokens'],
  'regional-formats': ['locale', 'i18n', 'number formatting', 'date formatting'],
  'app-scaffold': ['layout', 'shell', 'screen scaffold', 'responsive container'],
  panes: ['split view', 'supporting pane', 'dual pane', 'two columns'],
  'list-detail': ['split view', 'master detail', 'list detail', 'adaptive pane'],
  'supporting-pane': ['supporting pane', 'side pane', 'secondary pane'],
  'window-size-classes': ['responsive', 'breakpoints', 'compact', 'medium', 'expanded'],
  list: ['list items', 'list view', 'two line list', 'interactive list'],
  divider: ['separator', 'horizontal line', 'split line'],
  feed: ['activity feed', 'timeline', 'stream', 'posts'],
}

const ALL_SEARCH_ITEMS: SearchItem[] = [
  ...STATIC_PAGES,
  ...DOCS.map((doc) => {
    const groupDef = GROUPS.find((g) => g.key === doc.group)
    return {
      id: doc.slug,
      title: doc.name,
      path: doc.path,
      icon: doc.icon,
      group: doc.group,
      groupLabel: groupDef?.label ?? doc.group,
      summary: doc.summary,
      keywords: KEYWORDS_BY_SLUG[doc.slug] ?? [],
    }
  }),
]

function searchItems(items: SearchItem[], query: string): SearchItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return items

  const scored: { item: SearchItem; score: number }[] = []

  for (const item of items) {
    const title = item.title.toLowerCase()
    const slug = item.id.toLowerCase()
    const summary = item.summary.toLowerCase()
    const group = item.groupLabel.toLowerCase()
    const keywords = item.keywords ?? []

    let score = 0

    if (title === q) {
      score += 1000
    } else if (title.startsWith(q)) {
      score += 500
    } else if (title.includes(q)) {
      score += 250
    }

    if (slug === q) {
      score += 300
    } else if (slug.startsWith(q)) {
      score += 150
    } else if (slug.includes(q)) {
      score += 80
    }

    for (const kw of keywords) {
      const k = kw.toLowerCase()
      if (k === q) {
        score += 200
      } else if (k.startsWith(q)) {
        score += 100
      } else if (k.includes(q)) {
        score += 50
      }
    }

    if (summary.includes(q)) {
      score += 30
    }

    if (group.includes(q)) {
      score += 20
    }

    if (score > 0) {
      scored.push({ item, score })
    }
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.map((s) => s.item)
}

function HighlightMatch({ text, query }: { text: string; query: string }) {
  const q = query.trim().toLowerCase()
  if (!q) return <>{text}</>
  const index = text.toLowerCase().indexOf(q)
  if (index === -1) return <>{text}</>
  const before = text.slice(0, index)
  const match = text.slice(index, index + q.length)
  const after = text.slice(index + q.length)
  return (
    <>
      {before}
      <span className="g-search-match">{match}</span>
      {after}
    </>
  )
}

export function checkIsMac(): boolean {
  if (typeof navigator === 'undefined') return false
  return /Mac|iPhone|iPod|iPad/i.test(navigator.platform || navigator.userAgent)
}

export interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export function SearchTrigger({ onClick }: { onClick: () => void }) {
  const isMac = checkIsMac()
  return (
    <button
      type="button"
      className="g-search-trigger"
      onClick={onClick}
      aria-label={`Search documentation (${isMac ? '⌘K' : 'Ctrl+K'})`}
    >
      <Icon name="search" className="g-search-trigger__icon" />
      <span className="g-search-trigger__text">Search docs…</span>
      <kbd className="g-search-trigger__kbd">{isMac ? '⌘K' : 'Ctrl+K'}</kbd>
    </button>
  )
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const navigate = useNavigate()
  const { mounted, state } = usePresence(open, 150)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const searchId = useId()

  const isTop = useLayer(open, {
    onEscape: onClose,
  })
  useFocusTrap(containerRef, open && mounted, { isTop })
  useScrollLock(open)

  // Reset query and selected index on open
  useEffect(() => {
    if (open) {
      setQuery('')
      setSelectedIndex(0)
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }
  }, [open])

  const results = useMemo(() => searchItems(ALL_SEARCH_ITEMS, query), [query])

  // Reset selection index when query changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: query change resets index
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Ensure active result is visible on keyboard navigation
  useEffect(() => {
    if (!open) return
    const activeEl = listRef.current?.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`)
    activeEl?.scrollIntoView({ block: 'nearest' })
  }, [selectedIndex, open])

  const grouped = useMemo(() => {
    const map = new Map<string, { label: string; items: SearchItem[] }>()
    for (const item of results) {
      const groupKey = item.group
      const existing = map.get(groupKey)
      if (existing) {
        existing.items.push(item)
      } else {
        map.set(groupKey, { label: item.groupLabel, items: [item] })
      }
    }
    return Array.from(map.values())
  }, [results])

  const handleSelect = (item: SearchItem) => {
    navigate(item.path)
    onClose()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (results.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % results.length)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (results.length > 0) {
        setSelectedIndex((prev) => (prev <= 0 ? results.length - 1 : prev - 1))
      }
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const item = results[selectedIndex]
      if (item) {
        handleSelect(item)
      }
    }
  }

  if (!mounted) return null

  let globalIndexCounter = 0

  return (
    <Portal>
      <div className="g-search-root">
        <div className="g-search-scrim" data-state={state} onClick={onClose} aria-hidden="true" />
        <div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Search documentation"
          className="g-search-dialog"
          data-state={state}
        >
          <div className="g-search-bar">
            <span className="g-search-bar__leading">
              <Icon name="search" />
            </span>
            <input
              ref={inputRef}
              id={searchId}
              type="search"
              role="combobox"
              aria-label="Search documentation"
              aria-expanded={results.length > 0}
              aria-autocomplete="list"
              className="g-search-input"
              placeholder="Search docs, components, tokens…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              enterKeyHint="go"
            />
            <div className="g-search-bar__trailing">
              {query && (
                <IconButton
                  icon="close"
                  label="Clear search"
                  onClick={() => {
                    setQuery('')
                    inputRef.current?.focus()
                  }}
                />
              )}
              <button
                type="button"
                className="g-search-kbd"
                onClick={onClose}
                aria-label="Close search"
              >
                ESC
              </button>
            </div>
          </div>

          <div ref={listRef} className="g-search-body">
            {results.length === 0 ? (
              <div className="g-search-empty">
                <span className="g-search-empty__icon" aria-hidden="true">
                  <Icon name="search_off" />
                </span>
                <p className="g-search-empty__text">No results for “{query.trim()}”</p>
                <p className="g-search-empty__hint">
                  Try searching for a component name, group, or keyword (e.g. “button”, “dialog”,
                  “picker”).
                </p>
              </div>
            ) : (
              grouped.map((group) => (
                <div key={group.label} className="g-search-section">
                  <div className="g-search-section-label">{group.label}</div>
                  <div className="g-search-list" role="listbox">
                    {group.items.map((item) => {
                      const itemIndex = globalIndexCounter++
                      const isSelected = itemIndex === selectedIndex
                      return (
                        <div
                          key={item.id}
                          role="option"
                          aria-selected={isSelected}
                          tabIndex={-1}
                          data-index={itemIndex}
                          data-active={isSelected ? '' : undefined}
                          className="g-search-item"
                          onClick={() => handleSelect(item)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSelect(item)
                          }}
                          onPointerEnter={() => setSelectedIndex(itemIndex)}
                        >
                          <span className="g-search-item__icon" aria-hidden="true">
                            <Icon name={item.icon} />
                          </span>
                          <div className="g-search-item__content">
                            <div className="g-search-item__title">
                              <HighlightMatch text={item.title} query={query} />
                            </div>
                            <div className="g-search-item__desc">{item.summary}</div>
                          </div>
                          <span className="g-search-item__action" aria-hidden="true">
                            <Icon name="arrow_forward" />
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="g-search-footer">
            <div className="g-search-footer__hints">
              <span className="g-search-footer__hint">
                <kbd className="g-search-kbd">↑</kbd>
                <kbd className="g-search-kbd">↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="g-search-footer__hint">
                <kbd className="g-search-kbd">↵</kbd>
                <span>Select</span>
              </span>
              <span className="g-search-footer__hint">
                <kbd className="g-search-kbd">esc</kbd>
                <span>Close</span>
              </span>
            </div>
            <div className="g-search-footer__count">
              {results.length} {results.length === 1 ? 'item' : 'items'}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}
