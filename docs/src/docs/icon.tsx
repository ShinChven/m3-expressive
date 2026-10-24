import {
  Button,
  FilterChip,
  Icon,
  IconButton,
  type IconSource,
  List,
  ListItem,
  renderIcon,
  TextField,
  useSnackbar,
} from '@m3-expressive/react'
import { useMemo, useState } from 'react'
import { defineDoc } from '../kit/doc'
import { COMMON_ICON_CATEGORIES } from './icon-categories'
import './icon.css'
export const doc = defineDoc({
  slug: 'icon',
  name: 'Icon',
  group: 'foundations',
  icon: 'emoji_symbols',
  order: 1,
  summary:
    'Icons are Material Symbols (Outlined) drawn from a variable font supporting all 3,932 icons. `Icon` shows a symbol by name; every `icon` prop also accepts a ready element, such as a custom SVG.',
  imports: [
    'Icon',
    'renderIcon',
    'IconButton',
    'Button',
    'FilterChip',
    'List',
    'ListItem',
    'TextField',
    'useSnackbar',
  ],
  preview: () => (
    <div className="g-preview-row">
      <Icon name="folder" size={32} />
      <Icon name="image" size={32} />
      <Icon name="mail" size={32} />
      <Icon name="event" size={32} />
      <Icon name="star" size={32} filled />
    </div>
  ),
  playground: {
    controls: {
      name: { type: 'text', default: 'folder' },
      filled: { type: 'boolean', default: false },
      size: { type: 'number', default: 24, min: 16, max: 96, step: 4 },
      weight: { type: 'number', default: 400, min: 100, max: 700, step: 100 },
      label: { type: 'text', default: '', label: 'Label (meaningful icons only)' },
    },
    render: (v) => (
      <Icon
        name={v.name}
        filled={v.filled}
        size={v.size}
        weight={v.weight}
        label={v.label || undefined}
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('Icon', {
        name: v.name,
        filled: v.filled,
        ...changed(v, ['size', 'weight']),
        label: v.label,
      }),
  },
  api: [
    {
      name: 'Icon',
      interfaces: ['IconProps'],
      inherits: 'Also accepts native `<span>` attributes, except `children`.',
    },
    {
      name: 'renderIcon',
      interfaces: [],
      inherits:
        '`renderIcon(icon: IconSource, props?: Partial<IconProps>): ReactNode`. A name becomes an `Icon` with `props`; an element is returned as it is; `null`, `undefined` and `false` render nothing.',
    },
    {
      name: 'IconSource',
      interfaces: [],
      inherits:
        '`type IconSource = string | ReactNode`: a Material Symbols name or a ready element. Every `icon` prop in the library takes this type.',
    },
  ],
  guidelines: [
    '3,932 icons supported: Material Symbols variable font is self-hosted via `fonts.css` and works out of the box with zero runtime network requests.',
    'Pass any snake_case icon ligature name (e.g. `arrow_forward`, `rocket_launch`). You can browse the complete catalog on the dedicated /icons page.',
    'Use the outlined style. Use `filled` only to show a selected or active state, such as the current destination.',
    'Most icons are decorative because text next to them says the same thing. Add `label` only when the icon alone carries the meaning.',
    'Keep the default 24 px in most places. Use 20 px in dense rows, and larger sizes only for empty states and illustrations.',
    'Icons that point in a direction, such as `arrow_back` or `undo`, must mirror in right-to-left layouts: add the `m3-mirror-rtl` class to a parent element.',
  ],
})

/**
 * Common icons by category
 * Browse frequently used Material Symbols grouped by purpose. Click any icon to copy its ligature name. All 3,932 Material Symbols are supported.
 */
export function ExampleNames() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [query, setQuery] = useState('')
  const [filled, setFilled] = useState(false)
  const [size, setSize] = useState<24 | 32>(24)
  const [copied, setCopied] = useState<string | null>(null)
  const snackbar = useSnackbar()

  const term = query.trim().toLowerCase()

  const displayedCategories = useMemo(() => {
    return COMMON_ICON_CATEGORIES.map((cat) => {
      const matching = cat.icons.filter((name) => !term || name.toLowerCase().includes(term))
      return { ...cat, icons: matching }
    }).filter((cat) => {
      if (selectedCategory !== 'all' && cat.key !== selectedCategory) return false
      return cat.icons.length > 0
    })
  }, [term, selectedCategory])

  const totalMatches = useMemo(() => {
    return displayedCategories.reduce((acc, cat) => acc + cat.icons.length, 0)
  }, [displayedCategories])

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

  return (
    <div className="icon-doc__browser g-fill">
      <div className="icon-doc__banner">
        <div className="icon-doc__banner-content">
          <div className="icon-doc__banner-title">
            <Icon name="verified" className="icon-doc__banner-icon" />
            <span>3,932 Material Symbols Supported</span>
          </div>
          <p className="icon-doc__banner-desc">
            All 3,932 Google Material Symbols (Outlined) icons are self-hosted in{' '}
            <code>fonts.css</code>. Pass any ligature name in <code>snake_case</code> to{' '}
            <code>&lt;Icon name="..." /&gt;</code>.
          </p>
        </div>
        <Button href="/icons" variant="tonal" icon="open_in_new">
          Browse all 3,932 icons
        </Button>
      </div>

      <div className="icon-doc__toolbar">
        <TextField
          variant="outlined"
          placeholder="Filter common icons..."
          aria-label="Filter common icons"
          leadingIcon="search"
          value={query}
          onValueChange={setQuery}
          onClear={() => setQuery('')}
          className="icon-doc__search"
        />
        <Button
          variant={filled ? 'tonal' : 'outlined'}
          icon={filled ? 'check' : undefined}
          onClick={() => setFilled(!filled)}
        >
          {filled ? 'Filled' : 'Outlined'}
        </Button>
        <Button variant="outlined" onClick={() => setSize((s) => (s === 24 ? 32 : 24))}>
          {size}px
        </Button>
      </div>

      <div className="icon-doc__categories" role="tablist" aria-label="Icon categories">
        <FilterChip
          label="All categories"
          selected={selectedCategory === 'all'}
          onClick={() => setSelectedCategory('all')}
        />
        {COMMON_ICON_CATEGORIES.map((cat) => (
          <FilterChip
            key={cat.key}
            label={cat.label}
            icon={cat.icon}
            selected={selectedCategory === cat.key}
            onClick={() => setSelectedCategory(cat.key)}
          />
        ))}
      </div>

      {totalMatches === 0 ? (
        <div className="icon-doc__empty">
          <Icon name="search_off" size={48} />
          <p>No common icons match “{query}”.</p>
          <div className="g-row">
            <Button variant="tonal" onClick={() => setQuery('')}>
              Clear filter
            </Button>
            <Button href="/icons" variant="outlined" icon="search">
              Search all 3,932 icons
            </Button>
          </div>
        </div>
      ) : (
        displayedCategories.map((cat) => (
          <div key={cat.key} className="icon-doc__cat-group">
            <div className="icon-doc__cat-header">
              <span className="icon-doc__cat-title">
                <Icon name={cat.icon} size={20} />
                <span>{cat.label}</span>
              </span>
              <span className="icon-doc__cat-desc">{cat.description}</span>
            </div>
            <div className="icon-doc__grid">
              {cat.icons.map((name) => (
                <button
                  key={name}
                  type="button"
                  className="icon-doc__cell"
                  data-copied={copied === name ? '' : undefined}
                  onClick={() => copyName(name)}
                  title={`Click to copy "${name}"`}
                  aria-label={`Copy icon ${name}`}
                >
                  <Icon name={name} filled={filled} size={size} />
                  <code title={name}>{name}</code>
                  {copied === name && <span className="icon-doc__copied">Copied!</span>}
                </button>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

/**
 * Filled and weight
 * `filled` switches to the filled style. `weight` sets the stroke from 100 (thin) to 700 (bold).
 */
export function ExampleStyle() {
  return (
    <>
      <Icon name="home" size={32} />
      <Icon name="home" size={32} filled />
      <Icon name="bookmark" size={32} />
      <Icon name="bookmark" size={32} filled />
      <Icon name="settings" size={32} weight={200} />
      <Icon name="settings" size={32} />
      <Icon name="settings" size={32} weight={700} />
    </>
  )
}

/**
 * Sizes
 * `size` sets the width, height and font size in px. The default is 24.
 */
export function ExampleSizes() {
  return (
    <>
      <Icon name="photo_library" size={20} />
      <Icon name="photo_library" />
      <Icon name="photo_library" size={40} />
      <Icon name="photo_library" size={48} />
      <Icon name="photo_library" size={64} />
    </>
  )
}

/**
 * Meaningful icons
 * An icon is decorative by default and hidden from assistive tech. Give it a `label` when no text says the same thing, such as a status column.
 */
export function ExampleLabel() {
  return (
    <div className="g-frame" style={{ maxWidth: 420 }}>
      <List>
        <ListItem
          headline="Harbor budget.xlsx"
          supportingText="/projects/harbor"
          trailing={<Icon name="group" label="Shared" />}
        />
        <ListItem
          headline="Beach day.png"
          supportingText="/photos/summer"
          trailing={<Icon name="sync" label="Syncing" />}
        />
        <ListItem
          headline="Tax return.docx"
          supportingText="/personal"
          trailing={<Icon name="lock" label="Private" />}
        />
      </List>
    </div>
  )
}

/**
 * Elements as icons
 * Every `icon` prop takes an `IconSource`: a name or an element. Pass an element for a custom SVG or an `Icon` with its own settings.
 */
export function ExampleSource() {
  return (
    <>
      <Button icon="send">Send</Button>
      <Button variant="tonal" icon={<Icon name="bolt" filled />}>
        Send now
      </Button>
      <IconButton
        variant="outlined"
        label="Workspace home"
        icon={
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="6" fill="currentColor" />
          </svg>
        }
      />
    </>
  )
}

/**
 * Your own components
 * `renderIcon` turns an `IconSource` into an element, so your components can take the same `icon` prop. Names get the props you pass; elements stay as they are.
 */
export function ExampleRenderIcon() {
  return (
    <>
      <SyncStatus icon="cloud_done" text="Synced" />
      <SyncStatus icon={<Icon name="sync" size={18} weight={600} />} text="Syncing" />
    </>
  )
}

function SyncStatus({ icon, text }: { icon: IconSource; text: string }) {
  return (
    <span className="icon-doc__status">
      {renderIcon(icon, { size: 18 })}
      {text}
    </span>
  )
}
