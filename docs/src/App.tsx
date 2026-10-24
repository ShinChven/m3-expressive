import {
  AppBar,
  AppScaffold,
  IconButton,
  type LinkComponentProps,
  LinkProvider,
  type NavItem,
  type NavSection,
  type ScrollTarget,
  Shape,
  SnackbarProvider,
  ThemeProvider,
  useTheme,
} from '@m3-expressive/react'
import { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router'
import { useThemedFavicon } from './favicon'
import { DocPage } from './kit/DocPage'
import { GROUPS } from './kit/doc'
import { DOC_BY_SLUG, DOCS } from './kit/registry'
import { SearchDialog, SearchTrigger } from './kit/SearchDialog'
import { IconsPage } from './pages/Icons'
import { OverviewPage } from './pages/Overview'
import { StartPage } from './pages/Start'
import { ThemePage } from './pages/Theme'

function RouterLink({ href, ref, ...rest }: LinkComponentProps) {
  return <Link {...rest} ref={ref} to={href} />
}

const COMPONENT_PATHS = DOCS.map((d) => d.path)

/** Top-level destinations for the navigation bar (compact) and the collapsed rail. */
const ITEMS: NavItem[] = [
  { key: '/', label: 'Overview', icon: 'home', href: '/' },
  { key: '/start', label: 'Start', icon: 'rocket_launch', href: '/start' },
  {
    key: 'components',
    label: 'Components',
    icon: 'widgets',
    href: DOCS[0]?.path ?? '/',
    activeFor: COMPONENT_PATHS,
  },
  { key: '/theme', label: 'Theme', icon: 'palette', href: '/theme' },
]

export const START: NavSection = {
  items: [
    { key: '/', label: 'Overview', icon: 'home', href: '/' },
    { key: '/start', label: 'Get started', icon: 'rocket_launch', href: '/start' },
    { key: '/theme', label: 'Theme builder', icon: 'palette', href: '/theme' },
    { key: '/icons', label: 'Material Symbols', icon: 'interests', href: '/icons' },
  ],
}

const SECTIONS: NavSection[] = [
  START,
  ...GROUPS.map((group) => ({
    headline: group.label,
    items: DOCS.filter((d) => d.group === group.key).map((d) => ({
      key: d.path,
      label: d.name,
      icon: d.icon,
      href: d.path,
    })),
  })).filter((section) => section.items.length > 0),
]

const DEFAULT_DOCS_CONFIG = { seed: '#006A6A' }

if (typeof window !== 'undefined') {
  try {
    const raw = localStorage.getItem('m3-theme:config')
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed.seed?.toUpperCase() === '#6750A4') {
        localStorage.removeItem('m3-theme:config')
        localStorage.removeItem('m3-theme:css')
      } else if ('spec' in parsed) {
        // Saved by the old 2021/2025 color spec switch: keep the settings, drop the spec and the
        // colors generated with it (ThemeProvider regenerates them with the 2025 spec).
        const { spec: _spec, ...rest } = parsed
        localStorage.setItem('m3-theme:config', JSON.stringify(rest))
        localStorage.removeItem('m3-theme:css')
      }
    }
  } catch {
    // Ignore storage errors
  }
}

export function App() {
  return (
    <ThemeProvider defaultConfig={DEFAULT_DOCS_CONFIG}>
      <LinkProvider component={RouterLink}>
        <SnackbarProvider>
          <Shell />
        </SnackbarProvider>
      </LinkProvider>
    </ThemeProvider>
  )
}

/** Pages of components that M3 Expressive replaced or renamed, and where they went. */
const MOVED: Record<string, string> = {
  'bottom-app-bar': 'toolbar',
  'navigation-drawer': 'navigation-rail',
  'segmented-button': 'button-group',
  'top-app-bar': 'app-bar',
}

function DocRoute() {
  const { slug = '' } = useParams()
  const moved = MOVED[slug]
  if (moved) return <Navigate to={`/components/${moved}`} replace />
  const doc = DOC_BY_SLUG.get(slug)
  return doc ? <DocPage key={doc.slug} doc={doc} /> : <Navigate to="/" replace />
}

const BRAND = 'Material 3 Expressive'

function pageName(pathname: string): string {
  if (pathname === '/theme') return 'Theme builder'
  if (pathname === '/start') return 'Get started'
  if (pathname === '/icons') return 'Material Symbols'
  return DOC_BY_SLUG.get(pathname.replace('/components/', ''))?.name ?? 'Overview'
}

/** Whether the page's own heading is in view below the app bar. */
function usePageHeadingVisible(scrollTarget: ScrollTarget, pageKey: string): boolean {
  const [visible, setVisible] = useState(true)
  // A passive effect: the scroll container's ref is attached only after the bar's layout effects.
  // biome-ignore lint/correctness/useExhaustiveDependencies: a new page has a new heading
  useEffect(() => {
    const root = scrollTarget && 'current' in scrollTarget ? scrollTarget.current : null
    const heading = root?.querySelector('h1')
    if (!root || !heading || typeof IntersectionObserver === 'undefined') {
      setVisible(!!heading)
      return
    }
    setVisible(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setVisible(entry.isIntersecting)
      },
      { root },
    )
    observer.observe(heading)
    return () => observer.disconnect()
  }, [scrollTarget, pageKey])
  return visible
}

/**
 * The page heading names the page, so the app bar repeats the name only after the heading
 * scrolls away. Without the expanded rail (which shows the brand), the bar shows the brand
 * until then.
 */
function TopBarTitle({
  scrollTarget,
  pathname,
  expandedRail,
}: {
  scrollTarget: ScrollTarget
  pathname: string
  expandedRail: boolean
}) {
  const headingVisible = usePageHeadingVisible(scrollTarget, pathname)
  if (headingVisible && !expandedRail) return <span className="g-topbar-title">{BRAND}</span>
  return (
    <span className="g-topbar-title" data-hidden={headingVisible ? '' : undefined}>
      {pageName(pathname)}
    </span>
  )
}

function Brand() {
  return (
    <div className="g-brand">
      <span className="g-brand__mark" aria-hidden="true">
        <Shape name="cookie-9" size={40} />
        <span>M3</span>
      </span>
      <span className="g-brand__text">
        <span className="m3-typescale-emphasized-title-medium">M3 Expressive</span>
        <span className="g-brand__sub">React · {DOCS.length} pages</span>
      </span>
    </div>
  )
}

function Shell() {
  const { pathname } = useLocation()
  const theme = useTheme()
  useThemedFavicon()
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((open) => !open)
      } else if (e.key === '/' && !searchOpen) {
        const target = e.target as HTMLElement | null
        const isEditable =
          target &&
          (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
        if (!isEditable) {
          e.preventDefault()
          setSearchOpen(true)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [searchOpen])
  return (
    <>
      <AppScaffold
        items={ITEMS}
        sections={SECTIONS}
        value={pathname}
        scrollResetKey={pathname}
        aria-label="Documentation"
        brand={<Brand />}
        navigationDensity="compact"
        railWidth={300}
        railIndicator="fill"
        appBar={(ctx) => (
          <AppBar
            title={
              <TopBarTitle
                scrollTarget={ctx.scrollTarget}
                pathname={pathname}
                expandedRail={ctx.mode === 'expanded-rail'}
              />
            }
            navigation={ctx.menuButton}
            scrollTarget={ctx.scrollTarget}
            actions={
              <>
                <SearchTrigger onClick={() => setSearchOpen(true)} />
                <IconButton icon="palette" label="Theme builder" tooltip href="/theme" />
                <IconButton
                  icon={theme.resolvedMode === 'dark' ? 'light_mode' : 'dark_mode'}
                  label={theme.resolvedMode === 'dark' ? 'Use light theme' : 'Use dark theme'}
                  tooltip
                  onClick={() => theme.setMode(theme.resolvedMode === 'dark' ? 'light' : 'dark')}
                />
              </>
            }
          />
        )}
      >
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/components/:slug" element={<DocRoute />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppScaffold>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
