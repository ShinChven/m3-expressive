import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  ChipSet,
  FeedLayout,
  FilterChip,
  Text,
} from '@m3-expressive/react'
import { useState } from 'react'
import { art, IMAGES } from '../demo'
import { defineDoc } from '../kit/doc'
import { FILES } from '../mock'
import './feed.css'

export const doc = defineDoc({
  slug: 'feed',
  name: 'Feed',
  group: 'layout',
  icon: 'grid_view',
  order: 5,
  summary:
    'The feed layout arranges cards in a responsive grid. It adds columns as space allows, so it fits any container: a full page, a pane or a dialog.',
  imports: [
    'FeedLayout',
    'Card',
    'CardMedia',
    'CardHeader',
    'CardContent',
    'CardActions',
    'Button',
    'Text',
    'ChipSet',
    'FilterChip',
  ],
  preview: () => (
    <FeedLayout minItemWidth={60} gap={8} className="feed-doc-preview">
      {IMAGES.map((src) => (
        <img key={src} src={src} alt="" />
      ))}
    </FeedLayout>
  ),
  playground: {
    controls: {
      minItemWidth: {
        type: 'number',
        default: 280,
        min: 160,
        max: 360,
        step: 20,
        label: 'Min item width',
      },
      gap: { type: 'number', default: 16, min: 0, max: 32, step: 4 },
      count: { type: 'number', default: 6, min: 2, max: 12, label: 'Cards' },
      variant: {
        type: 'select',
        options: ['elevated', 'filled', 'outlined'],
        default: 'filled',
        label: 'Card variant',
      },
    },
    render: (v) => (
      <FeedLayout minItemWidth={v.minItemWidth} gap={v.gap}>
        {FILES.slice(0, v.count).map((file, i) => (
          <Card key={file.id} variant={v.variant}>
            <CardMedia src={art(i)} aspectRatio="3 / 2" />
            <CardHeader title={file.name} subhead={file.folder} />
          </Card>
        ))}
      </FeedLayout>
    ),
    code: (v, { jsx, changed }) =>
      `const items = files.slice(0, ${v.count})\n\n${jsx(
        'FeedLayout',
        changed(v, ['minItemWidth', 'gap']),
        `{items.map((item) => (\n  <Card key={item.id} variant="${v.variant}">\n    <CardMedia src={item.thumbnail} aspectRatio="3 / 2" />\n    <CardHeader title={item.name} subhead={item.folder} />\n  </Card>\n))}`,
      )}`,
    stage: 'fill',
  },
  api: [
    {
      name: 'FeedLayout',
      interfaces: ['FeedLayoutProps'],
      inherits:
        'Also accepts native `<div>` attributes. Unlike the other canonical layouts, the feed responds to the width of its container, not to the window size class.',
    },
  ],
  guidelines: [
    'Use a feed to browse many items of the same kind: photos, files, contacts, dashboard tiles.',
    'Set `minItemWidth` to the narrowest width at which a card still reads well. On a narrow container one card fills the row.',
    'Keep cards in one feed the same kind and size, so people can scan them in rows.',
  ],
})

/**
 * Photo feed
 * Photos with their file name and size. Columns are added as the container grows.
 */
export function ExamplePhotos() {
  return (
    <FeedLayout minItemWidth={220} className="g-fill">
      {IMAGES.map((src, i) => (
        <Card key={src} variant="outlined">
          <CardMedia src={src} aspectRatio="4 / 3" />
          <CardHeader title={`landscape-${i + 1}.svg`} subhead={`640 × 400 · ${12 + i} KB`} />
        </Card>
      ))}
    </FeedLayout>
  )
}

/**
 * Recent files
 * Cards with text and actions. Each card is the same height in its row.
 */
export function ExampleFiles() {
  return (
    <FeedLayout minItemWidth={260} className="g-fill">
      {FILES.slice(0, 6).map((file) => (
        <Card key={file.id} variant="filled">
          <CardHeader title={file.name} subhead={`${file.status} · ${file.modified}`} />
          <CardContent>
            <Text variant="body-medium" color="on-surface-variant">
              {file.folder}
            </Text>
          </CardContent>
          <CardActions>
            <Button variant="text">Share</Button>
            <Button variant="tonal" icon="open_in_new">
              Open
            </Button>
          </CardActions>
        </Card>
      ))}
    </FeedLayout>
  )
}

/**
 * Dashboard tiles
 * A small `minItemWidth` fits four tiles in a row on wide containers and two on narrow ones.
 */
export function ExampleTiles() {
  const count = (status: string) => FILES.filter((file) => file.status === status).length
  const tiles = [
    { label: 'Shared', value: count('shared') },
    { label: 'Private', value: count('private') },
    { label: 'Syncing', value: count('syncing') },
    { label: 'Archived', value: count('archived') },
  ]
  return (
    <FeedLayout minItemWidth={160} gap={12} className="g-fill">
      {tiles.map((tile) => (
        <Card key={tile.label} variant="outlined" className="feed-doc-stat">
          <Text variant="label-large" as="span" color="on-surface-variant">
            {tile.label}
          </Text>
          <strong>{tile.value}</strong>
        </Card>
      ))}
    </FeedLayout>
  )
}

/**
 * Filters and an empty state
 * Filter chips narrow the feed. When nothing matches, say so in place of the grid.
 */
export function ExampleFilters() {
  const [kinds, setKinds] = useState<string[]>(['spreadsheet'])
  const items = FILES.slice(0, 24).filter((file) => kinds.includes(file.kind))
  const toggle = (kind: string, on: boolean) =>
    setKinds(on ? [...kinds, kind] : kinds.filter((k) => k !== kind))
  return (
    <div className="feed-doc-stack">
      <ChipSet aria-label="File types">
        {['document', 'spreadsheet', 'image'].map((kind) => (
          <FilterChip
            key={kind}
            label={kind}
            selected={kinds.includes(kind)}
            onSelectedChange={(on) => toggle(kind, on)}
          />
        ))}
      </ChipSet>
      {items.length > 0 ? (
        <FeedLayout minItemWidth={220}>
          {items.map((file) => (
            <Card key={file.id} variant="outlined">
              <CardHeader title={file.name} subhead={file.kind} />
            </Card>
          ))}
        </FeedLayout>
      ) : (
        <Text color="on-surface-variant">No files match the filters.</Text>
      )}
    </div>
  )
}
