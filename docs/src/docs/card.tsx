import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  MenuButton,
  MenuItem,
  useSnackbar,
} from '@m3-expressive/react'
import { art, IMAGES } from '../demo'
import { defineDoc, raw } from '../kit/doc'
import './card.css'

// IMAGES[0] with drifting shapes.
const ANIMATED_IMAGE = art(2, 800, 600, { animated: true })

export const doc = defineDoc({
  slug: 'card',
  name: 'Card',
  group: 'containment',
  icon: 'dashboard',
  order: 1,
  summary:
    'Cards hold content and actions about one subject, such as a photo album, an event or a file. Use `CardActionArea` when the whole card opens one destination.',
  imports: [
    'Card',
    'CardActionArea',
    'CardHeader',
    'CardMedia',
    'CardContent',
    'CardActions',
    'Avatar',
    'Button',
    'IconButton',
    'MenuButton',
    'MenuItem',
    'useSnackbar',
    'art',
  ],
  preview: () => (
    <Card variant="outlined" style={{ width: 200 }}>
      <CardMedia src={IMAGES[0]} aspectRatio="5 / 1" />
      <CardHeader title="Trip to Lisbon" subhead="Album · 48 photos" />
    </Card>
  ),
  playground: {
    controls: {
      variant: { type: 'select', options: ['elevated', 'filled', 'outlined'], default: 'elevated' },
      title: { type: 'text', default: 'Trip to Lisbon' },
      subhead: { type: 'text', default: 'Album · 48 photos' },
      text: {
        type: 'text',
        default: 'Five days by the sea. Grace Hopper added 12 new photos.',
        label: 'Content',
      },
      size: { type: 'select', options: ['small', 'large'], default: 'small', label: 'Header size' },
      avatar: { type: 'boolean', default: true },
      media: { type: 'boolean', default: true },
      layout: {
        type: 'select',
        options: ['flush', 'rounded', 'inset'],
        default: 'flush',
        label: 'Media layout',
      },
      animated: { type: 'boolean', default: true, label: 'Animated media' },
      actionArea: { type: 'boolean', default: false, label: 'Action area' },
      actions: { type: 'boolean', default: true },
      dragged: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
    },
    render: function CardPlayground(v) {
      const snackbar = useSnackbar()
      const body = (
        <>
          <CardHeader
            avatar={v.avatar ? <Avatar name="Grace Hopper" /> : undefined}
            title={v.title}
            subhead={v.subhead || undefined}
            size={v.size}
          />
          {v.media && <CardMedia src={v.animated ? ANIMATED_IMAGE : IMAGES[0]} layout={v.layout} />}
          <CardContent>{v.text}</CardContent>
        </>
      )
      return (
        <Card variant={v.variant} dragged={v.dragged} disabled={v.disabled} style={{ width: 320 }}>
          {v.actionArea ? (
            <CardActionArea onClick={() => snackbar.show(`Opened “${v.title}”`)}>
              {body}
            </CardActionArea>
          ) : (
            body
          )}
          {v.actions && (
            <CardActions>
              <Button variant="text">Download</Button>
              <Button variant="tonal">Share</Button>
            </CardActions>
          )}
        </Card>
      )
    },
    code: (v, { jsx, changed }) => {
      const body = [
        jsx('CardHeader', {
          avatar: v.avatar ? raw('<Avatar name="Grace Hopper" />') : undefined,
          title: v.title,
          subhead: v.subhead,
          ...changed(v, ['size']),
        }),
        v.media
          ? jsx('CardMedia', {
              src: raw(v.animated ? 'art(2, 800, 600, { animated: true })' : 'IMAGES[0]'),
              ...changed(v, ['layout']),
            })
          : '',
        jsx('CardContent', {}, v.text),
      ]
        .filter(Boolean)
        .join('\n')
      const main = v.actionArea ? jsx('CardActionArea', { onClick: raw('openAlbum') }, body) : body
      const actions = v.actions
        ? jsx(
            'CardActions',
            {},
            [
              jsx('Button', { variant: 'text' }, 'Download'),
              jsx('Button', { variant: 'tonal' }, 'Share'),
            ].join('\n'),
          )
        : ''
      return jsx(
        'Card',
        {
          ...changed(v, ['variant']),
          dragged: v.dragged,
          disabled: v.disabled,
          style: raw('{ width: 320 }'),
        },
        [main, actions].filter(Boolean).join('\n'),
      )
    },
  },
  api: [
    {
      name: 'Card',
      interfaces: ['CardProps'],
      inherits: 'Also accepts native `<div>` attributes.',
    },
    {
      name: 'CardActionArea',
      interfaces: [],
      inherits:
        'The main action of the card: a `<button>` that fills the card, with ripple and hover elevation. Accepts native `<button>` attributes; with `href` it renders a link (through `LinkProvider`) and accepts anchor attributes. `disabled` takes it out of the tab order; inside a disabled `Card` it is disabled automatically.',
    },
    {
      name: 'CardHeader',
      interfaces: ['CardHeaderProps'],
      inherits: 'Also accepts native `<div>` attributes, except `title`.',
    },
    {
      name: 'CardMedia',
      interfaces: ['CardMediaProps'],
      inherits:
        'Also accepts native `<img>` attributes. `alt` defaults to an empty string (decorative image), and the image loads lazily.',
    },
    {
      name: 'CardContent',
      interfaces: [],
      inherits: 'Padded body text. Accepts native `<div>` attributes.',
    },
    {
      name: 'CardActions',
      interfaces: [],
      inherits: 'An end-aligned row of buttons. Accepts native `<div>` attributes.',
    },
  ],
  guidelines: [
    'Use one variant for all cards in a collection, so that the content, not the container, sets the emphasis.',
    'When the whole card opens one destination, wrap its content in `CardActionArea`. Put other buttons in `CardActions`, outside the action area: never nest buttons, links or menus inside it.',
    'Keep each card about one subject and lead with it: a `large` `CardHeader` sets the title as the headline, above the subhead and supporting text.',
    'Give `CardMedia` an `alt` text when the image carries information. Leave it empty when the image is decorative.',
  ],
})

/**
 * Variants
 * Elevated cards have a shadow, filled cards a tonal fill and outlined cards a border.
 */
export function ExampleVariants() {
  return (
    <div className="card-doc-grid">
      <Card variant="elevated">
        <CardHeader title="Files" subhead="Elevated" />
        <CardContent>
          <div className="card-doc-stat">1,000</div>
          In your drive, with 14 shared today
        </CardContent>
      </Card>
      <Card variant="filled">
        <CardHeader title="Photos" subhead="Filled" />
        <CardContent>
          <div className="card-doc-stat">2,410</div>
          Images and videos
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardHeader title="Inbox" subhead="Outlined" />
        <CardContent>
          <div className="card-doc-stat">36</div>
          New messages to read
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * Header, media and actions
 * `CardHeader` takes an avatar, a title, a subhead and a trailing action such as a menu. `CardActions` holds the buttons.
 */
export function ExampleAnatomy() {
  return (
    <Card variant="outlined" style={{ width: 340 }}>
      <CardHeader
        avatar={<Avatar name="Grace Hopper" />}
        title="Trip to Lisbon"
        subhead="Album · Shared by Grace Hopper"
        action={
          <MenuButton
            trigger={(props) => <IconButton {...props} icon="more_vert" label="More actions" />}
          >
            <MenuItem icon="edit">Rename</MenuItem>
            <MenuItem icon="content_copy">Duplicate</MenuItem>
            <MenuItem icon="delete">Delete</MenuItem>
          </MenuButton>
        }
      />
      <CardMedia src={IMAGES[1]} />
      <CardContent>
        Five days by the sea. The album has 48 photos and two short videos from the boat trip.
      </CardContent>
      <CardActions>
        <Button variant="text">Download</Button>
        <Button variant="tonal" icon="add_photo_alternate">
          Add photos
        </Button>
      </CardActions>
    </Card>
  )
}

/**
 * Animated media
 * `CardMedia` paired with animated generative artwork (`art(seed, width, height, { animated: true })`) produces smooth, continuously drifting abstract shapes with no network requests or video assets.
 */
export function ExampleAnimatedMedia() {
  return (
    <Card variant="elevated" style={{ width: 340 }}>
      <CardHeader
        avatar={<Avatar name="Grace Hopper" />}
        title="Trip to Lisbon"
        subhead="Album · 48 photos"
      />
      <CardMedia src={art(2, 800, 600, { animated: true })} />
      <CardContent>
        Five days by the sea. Grace Hopper added 12 new photos.
      </CardContent>
      <CardActions>
        <Button variant="text">Download</Button>
        <Button variant="tonal">Share</Button>
      </CardActions>
    </Card>
  )
}

/**
 * Media layout
 * `layout` sets how media meets the card’s edges: `flush` runs edge to edge with square corners, `rounded` keeps the card’s corner radius so the container shows at its corners, and `inset` sits inside the padding.
 */
export function ExampleMediaLayout() {
  return (
    <div className="card-doc-grid">
      {MEDIA_LAYOUTS.map(({ layout, title, subhead }, index) => (
        <Card key={layout} variant="elevated">
          <CardMedia src={IMAGES[index + 4]} layout={layout} />
          <CardHeader size="large" title={title} subhead={subhead} />
        </Card>
      ))}
    </div>
  )
}

const MEDIA_LAYOUTS = [
  { layout: 'flush', title: 'Flush', subhead: 'Edge to edge, square corners' },
  { layout: 'rounded', title: 'Rounded', subhead: 'Edge to edge, rounded corners' },
  { layout: 'inset', title: 'Inset', subhead: 'Inside the padding' },
] as const

/**
 * Inset media
 * Inset media between the header and the text, as in an event card. A `large` header with a trailing menu lines the menu up with the first line of the headline.
 */
export function ExampleInsetMedia() {
  return (
    <Card variant="elevated" style={{ width: 340 }}>
      <CardHeader
        size="large"
        title="Concerts at the Harbor Hall"
        action={
          <MenuButton
            trigger={(props) => <IconButton {...props} icon="more_vert" label="More actions" />}
          >
            <MenuItem icon="bookmark">Save</MenuItem>
            <MenuItem icon="share">Share</MenuItem>
          </MenuButton>
        }
      />
      <CardMedia src={IMAGES[3]} layout="inset" />
      <CardContent>
        Live sets every Saturday from 19:00, with a new guest band each month.
      </CardContent>
      <CardActions>
        <Button variant="outlined">Learn more</Button>
        <Button variant="tonal">Get tickets</Button>
      </CardActions>
    </Card>
  )
}

/**
 * Clickable cards
 * `CardActionArea` makes the whole card one button, with a ripple and hover elevation. Here each card opens an album.
 */
export function ExampleClickable() {
  const snackbar = useSnackbar()
  return (
    <div className="card-doc-grid">
      {ALBUMS.map((album, index) => (
        <Card key={album.name} variant="elevated">
          <CardActionArea onClick={() => snackbar.show(`Opened ${album.name}`)}>
            <CardMedia src={IMAGES[index]} aspectRatio="4 / 3" />
            <CardHeader size="large" title={album.name} subhead={album.details} />
          </CardActionArea>
        </Card>
      ))}
    </div>
  )
}

const ALBUMS = [
  { name: 'Coast', details: '48 photos · June' },
  { name: 'Forest walks', details: '112 photos · August' },
  { name: 'Dusk', details: '23 photos · September' },
]

/**
 * Main action with buttons
 * The action area covers the content; other buttons sit in `CardActions`, outside it, so that no button is nested in another.
 */
export function ExampleMainAction() {
  const snackbar = useSnackbar()
  return (
    <Card variant="outlined" style={{ width: 340 }}>
      <CardActionArea onClick={() => snackbar.show('Opened “Team lunch”')}>
        <CardMedia src={IMAGES[2]} aspectRatio="2 / 1" />
        <CardHeader size="large" title="Team lunch" subhead="Event · Friday, 12:30" />
        <CardContent>Harbor Café, table for six. Bring ideas for the summer trip.</CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="text" onClick={() => snackbar.show('Invite declined')}>
          Decline
        </Button>
        <Button variant="tonal" icon="check" onClick={() => snackbar.show('Invite accepted')}>
          Accept
        </Button>
      </CardActions>
    </Card>
  )
}

/**
 * Dragged and disabled
 * `dragged` raises the card while people move it, for example on a task board. `disabled` dims the card and disables everything in it: the action area, buttons and form controls.
 */
export function ExampleStates() {
  return (
    <div className="card-doc-grid">
      <Card variant="outlined" dragged>
        <CardHeader
          avatar={<Avatar name="Alan Turing" />}
          title="Book flights to Lisbon"
          subhead="Moving to Done"
        />
      </Card>
      <Card variant="outlined" disabled>
        <CardActionArea href="/files/harbor-budget">
          <CardHeader
            avatar={<Avatar icon="lock" />}
            title="Harbor budget"
            subhead="Locked while Grace Hopper edits it"
          />
        </CardActionArea>
      </Card>
    </div>
  )
}
