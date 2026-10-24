import { Button, Icon, TextField, useSnackbar } from '@m3-expressive/react'
import { useMemo, useState } from 'react'
import { Page, Section } from '../demo'
import { ALL_ICON_NAMES } from '../docs/material-symbols-names'

const PAGE_SIZE = 120

export function IconsPage() {
  const [query, setQuery] = useState('')
  const [filled, setFilled] = useState(false)
  const [size, setSize] = useState<20 | 24 | 32 | 40>(24)
  const [weight, setWeight] = useState<number>(400)
  const [page, setPage] = useState(0)
  const [copied, setCopied] = useState<string | null>(null)
  const snackbar = useSnackbar()

  const term = query.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!term) return ALL_ICON_NAMES
    return ALL_ICON_NAMES.filter((name) => name.toLowerCase().includes(term))
  }, [term])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages - 1)

  const visibleIcons = useMemo(() => {
    const start = currentPage * PAGE_SIZE
    return filtered.slice(start, start + PAGE_SIZE)
  }, [filtered, currentPage])

  const handleQueryChange = (val: string) => {
    setQuery(val)
    setPage(0)
  }

  const copyName = (name: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(name)
    }
    setCopied(name)
    snackbar.show({
      message: `Copied "${name}" to clipboard`,
      duration: 2000,
    })
    setTimeout(() => {
      setCopied((prev) => (prev === name ? null : prev))
    }, 1500)
  }

  const startIdx = filtered.length === 0 ? 0 : currentPage * PAGE_SIZE + 1
  const endIdx = Math.min((currentPage + 1) * PAGE_SIZE, filtered.length)

  return (
    <Page
      title="Material Symbols Catalog"
      description={`Complete set of all ${ALL_ICON_NAMES.length.toLocaleString()} Material Symbols icons included with @m3-expressive/react.`}
    >
      <div className="icon-page">
        <div className="icon-doc__banner">
          <div className="icon-doc__banner-content">
            <div className="icon-doc__banner-title">
              <Icon name="font_download" className="icon-doc__banner-icon" />
              <span>How Material Symbols Work</span>
            </div>
            <p className="icon-doc__banner-desc">
              All 3,932 icons are rendered through the self-hosted variable font in{' '}
              <code>fonts.css</code>. Pass any icon name as a string to{' '}
              <code>&lt;Icon name="..." /&gt;</code>. No external Google Fonts request is made at
              runtime.
            </p>
          </div>
          <Button href="/components/icon" variant="outlined" icon="arrow_back">
            Icon component docs
          </Button>
        </div>

        <Section title="Search and Filter">
          <div className="icon-doc__toolbar">
            <TextField
              variant="outlined"
              placeholder={`Search all ${ALL_ICON_NAMES.length.toLocaleString()} icons (e.g. arrow, mail, chat, file)...`}
              aria-label="Search all icons"
              leadingIcon="search"
              value={query}
              onValueChange={handleQueryChange}
              onClear={() => handleQueryChange('')}
              className="icon-doc__search"
            />
            <Button
              variant={filled ? 'tonal' : 'outlined'}
              icon={filled ? 'check' : undefined}
              onClick={() => setFilled(!filled)}
            >
              {filled ? 'Filled' : 'Outlined'}
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                setSize((s) => {
                  if (s === 20) return 24
                  if (s === 24) return 32
                  if (s === 32) return 40
                  return 20
                })
              }
            >
              {size}px
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                setWeight((w) => {
                  if (w === 200) return 400
                  if (w === 400) return 700
                  return 200
                })
              }
            >
              Weight: {weight}
            </Button>
          </div>

          <div className="icon-page__status">
            <span>
              Showing{' '}
              <strong>
                {startIdx}–{endIdx}
              </strong>{' '}
              of <strong>{filtered.length.toLocaleString()}</strong> icons
              {term && ` matching “${query.trim()}”`}
            </span>
            {totalPages > 1 && (
              <span className="icon-page__page-info">
                Page {currentPage + 1} of {totalPages}
              </span>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="icon-doc__empty">
              <Icon name="search_off" size={48} />
              <p>No icons match “{query}”.</p>
              <Button variant="tonal" onClick={() => handleQueryChange('')}>
                Clear search
              </Button>
            </div>
          ) : (
            <div className="icon-doc__grid">
              {visibleIcons.map((name) => (
                <button
                  key={name}
                  type="button"
                  className="icon-doc__cell"
                  data-copied={copied === name ? '' : undefined}
                  onClick={() => copyName(name)}
                  title={`Click to copy "${name}"`}
                  aria-label={`Copy icon ${name}`}
                >
                  <Icon name={name} filled={filled} size={size} weight={weight} />
                  <code title={name}>{name}</code>
                  {copied === name && <span className="icon-doc__copied">Copied!</span>}
                </button>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="icon-doc__pagination">
              <Button
                variant="outlined"
                icon="first_page"
                disabled={currentPage === 0}
                onClick={() => setPage(0)}
              >
                First
              </Button>
              <Button
                variant="tonal"
                icon="chevron_left"
                disabled={currentPage === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                Previous
              </Button>
              <span className="icon-page__pagination-current">
                {currentPage + 1} / {totalPages}
              </span>
              <Button
                variant="tonal"
                trailingIcon="chevron_right"
                disabled={currentPage >= totalPages - 1}
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              >
                Next
              </Button>
              <Button
                variant="outlined"
                trailingIcon="last_page"
                disabled={currentPage >= totalPages - 1}
                onClick={() => setPage(totalPages - 1)}
              >
                Last
              </Button>
            </div>
          )}
        </Section>
      </div>
    </Page>
  )
}
