import { Carousel, useSnackbar } from '@m3-expressive/react'
import { useState } from 'react'
import { IMAGES } from '../demo'
import { defineDoc, raw } from '../kit/doc'

const ALBUMS = [
  'Lakes',
  'Canyons',
  'Forests',
  'Dunes',
  'Glaciers',
  'Reefs',
  'Valleys',
  'Cliffs',
  'Meadows',
  'Islands',
]

export const doc = defineDoc({
  slug: 'carousel',
  name: 'Carousel',
  group: 'containment',
  icon: 'view_carousel',
  order: 7,
  summary:
    'Carousels show a scrolling row of images or other items. Items at the edges shrink behind rounded masks as people scroll.',
  imports: ['Carousel', 'useSnackbar'],
  preview: () => (
    <div style={{ width: 220 }}>
      <Carousel
        aria-label="Photo albums"
        itemWidth={120}
        height={100}
        items={IMAGES.map((src, index) => ({ key: String(index), src }))}
      />
    </div>
  ),
  playground: {
    controls: {
      layout: {
        type: 'select',
        options: ['multi-browse', 'hero', 'uncontained', 'full-screen'],
        default: 'multi-browse',
      },
      itemWidth: { type: 'number', default: 260, min: 120, max: 400, step: 20 },
      height: { type: 'number', default: 220, min: 120, max: 400, step: 20 },
      labels: { type: 'boolean', default: true },
      clickable: { type: 'boolean', default: false },
      controls: { type: 'boolean', default: true },
    },
    stage: 'fill',
    render: function CarouselPlayground(v) {
      const snackbar = useSnackbar()
      const carousel = (
        <Carousel
          aria-label="Photo albums"
          layout={v.layout}
          itemWidth={v.itemWidth}
          height={v.height}
          controls={v.controls}
          items={ALBUMS.map((title, index) => ({
            key: title,
            src: IMAGES[index],
            label: v.labels ? title : undefined,
            onClick: v.clickable ? () => snackbar.show(`Opened “${title}”`) : undefined,
          }))}
        />
      )
      return v.layout === 'full-screen' ? <div style={{ maxWidth: 280 }}>{carousel}</div> : carousel
    },
    code: (v, { jsx, changed }) => {
      const fields = [
        'key: title',
        'src: IMAGES[index]',
        v.labels && 'label: title',
        v.clickable && 'onClick: () => openAlbum(title)',
      ].filter(Boolean)
      const carousel = jsx('Carousel', {
        'aria-label': 'Photo albums',
        ...changed(v, ['layout', 'itemWidth', 'height']),
        controls: v.controls,
        items: raw(
          `ALBUMS.map((title, index) => ({\n${fields.map((f) => `    ${f},`).join('\n')}\n  }))`,
        ),
      })
      const albums = `const ALBUMS = [\n${ALBUMS.map((s) => `  '${s}',`).join('\n')}\n]`
      const body =
        v.layout === 'full-screen'
          ? jsx('div', { style: raw('{ maxWidth: 280 }') }, carousel)
          : carousel
      return `${albums}\n\n${body}`
    },
  },
  api: [
    {
      name: 'Carousel',
      interfaces: ['CarouselProps'],
      inherits:
        'Items snap into place, except in the uncontained layout. `controls` adds previous and next buttons that scroll by one item.',
    },
    { name: 'CarouselItem', interfaces: ['CarouselItem'] },
  ],
  guidelines: [
    'Give every carousel an `aria-label`. Give images `alt` text, unless a `label` already names the item.',
    'Turn on `controls`, so that people without a touch screen or a trackpad can move between items.',
    'Use multi-browse to browse many items, hero to feature one item at a time, uncontained for a strip of items with a fixed width, and full-screen for vertical stories on phones.',
    'Keep labels short: they stay on one line and are cut off when too long.',
  ],
})

/**
 * Multi-browse
 * The default layout shows several items at once. Items at the edges shrink behind rounded masks while the row scrolls.
 */
export function ExampleMultiBrowse() {
  return (
    <Carousel
      aria-label="Photo albums"
      controls
      items={ALBUMS.map((title, index) => ({ key: title, src: IMAGES[index], label: title }))}
    />
  )
}

/**
 * Hero
 * One large item in the middle, with a part of the items before and after it. Use it to feature one item at a time.
 */
export function ExampleHero() {
  return (
    <Carousel
      aria-label="Trip ideas"
      layout="hero"
      height={260}
      controls
      items={ALBUMS.map((title, index) => ({ key: title, src: IMAGES[index], label: title }))}
    />
  )
}

/**
 * Uncontained
 * Items keep their `itemWidth` and do not snap, so the row scrolls freely past the edge.
 */
export function ExampleUncontained() {
  return (
    <Carousel
      aria-label="Recent photos"
      layout="uncontained"
      itemWidth={180}
      height={140}
      items={[...IMAGES, ...IMAGES].map((src, index) => ({ key: String(index), src }))}
    />
  )
}

/**
 * Full screen
 * Each item fills the width in a 9:16 frame, for vertical stories on phones. `height` does not apply.
 */
export function ExampleFullScreen() {
  return (
    <div className="g-frame" style={{ maxWidth: 260 }}>
      <Carousel
        aria-label="Trip story"
        layout="full-screen"
        items={ALBUMS.slice(0, 4).map((title, index) => ({
          key: title,
          src: IMAGES[index],
          label: title,
        }))}
      />
    </div>
  )
}

/**
 * Clickable items
 * An item with `onClick` becomes a button and an item with `href` a link. Here a click picks the cover image of a photo album.
 */
export function ExampleClickable() {
  const [cover, setCover] = useState('coast.jpg')
  return (
    <div className="g-stack" style={{ width: '100%' }}>
      <Carousel
        aria-label="Cover images"
        itemWidth={200}
        height={150}
        controls
        items={COVERS.map((image, index) => ({
          key: image.name,
          src: IMAGES[index],
          alt: image.alt,
          label: image.name,
          onClick: () => setCover(image.name),
        }))}
      />
      <p className="g-muted">Cover image: {cover}</p>
    </div>
  )
}

const COVERS = [
  { name: 'coast.jpg', alt: 'Orange hills under a dark blue sky' },
  { name: 'forest.jpg', alt: 'Teal hills under a yellow sun' },
  { name: 'dusk.jpg', alt: 'Purple hills under a yellow sun' },
  { name: 'meadow.jpg', alt: 'Green hills under a pale sun' },
  { name: 'canyon.jpg', alt: 'Red hills under an orange sun' },
  { name: 'lake.jpg', alt: 'Blue hills under a light blue sun' },
]

/**
 * Custom content
 * `content` replaces the image with any element. Here each slide shows a quote from a traveler.
 */
export function ExampleContent() {
  return (
    <Carousel
      aria-label="Traveler quotes"
      itemWidth={280}
      height={160}
      controls
      items={QUOTES.map((quote) => ({
        key: quote.author,
        content: (
          <figure
            style={{
              boxSizing: 'border-box',
              height: '100%',
              margin: 0,
              padding: 24,
              background: 'var(--md-sys-color-secondary-container)',
              color: 'var(--md-sys-color-on-secondary-container)',
            }}
          >
            <blockquote className="m3-typescale-title-medium" style={{ margin: 0 }}>
              {quote.text}
            </blockquote>
            <figcaption className="m3-typescale-body-medium">{quote.author}</figcaption>
          </figure>
        ),
      }))}
    />
  )
}

const QUOTES = [
  { text: 'All our trip photos are in one shared album.', author: 'Grace Hopper, Lisbon' },
  { text: 'The packing list saved us at the airport.', author: 'Alan Turing, Kyoto' },
  { text: 'We planned the whole route on one calendar.', author: 'Ada Lovelace, Oslo' },
]
