import {
  Avatar,
  Button,
  IconButton,
  List,
  ListDetailLayout,
  ListItem,
  Text,
  TextField,
} from 'material-design-3-expressive-components'
import { useState } from 'react'
import { IMAGES } from '../demo'
import { defineDoc, raw } from '../kit/doc'
import { FILES, type FileRow } from '../mock'
import './list-detail.css'

// Playground content: a list of files and the selected file.
function FileList({
  selected,
  onSelect,
}: {
  selected: string | null
  onSelect: (id: string) => void
}) {
  return (
    <List aria-label="Files">
      {FILES.slice(0, 20).map((file) => (
        <ListItem
          key={file.id}
          headline={file.name}
          supportingText={file.folder}
          selected={file.id === selected}
          onClick={() => onSelect(file.id)}
        />
      ))}
    </List>
  )
}

function FileDetail({ file, onBack }: { file: FileRow | undefined; onBack?: () => void }) {
  if (!file) return <div className="list-detail-doc-empty">Select a file to see its details.</div>
  return (
    <div className="list-detail-doc-detail">
      {onBack && (
        <IconButton
          icon="arrow_back"
          label="Back to files"
          className="m3-mirror-rtl"
          onClick={onBack}
        />
      )}
      <Text as="h3" variant="headline-small">
        {file.name}
      </Text>
      <Text color="on-surface-variant">{file.folder}</Text>
      <Text variant="body-medium">
        {file.status} · {file.owner} · changed {file.modified}
      </Text>
    </div>
  )
}

export const doc = defineDoc({
  slug: 'list-detail',
  name: 'List-detail',
  group: 'layout',
  icon: 'vertical_split',
  order: 3,
  summary:
    'The list-detail layout shows a list and the details of the selected item. Expanded and wider windows show both panes side by side; smaller windows show one pane at a time, so the detail needs a back button.',
  imports: [
    'ListDetailLayout',
    'List',
    'ListItem',
    'IconButton',
    'Text',
    'Button',
    'Avatar',
    'TextField',
  ],
  preview: () => (
    <div className="g-frame list-detail-doc-frame list-detail-doc-preview">
      <ListDetailLayout
        showDetail={false}
        listWidth={180}
        list={
          <List aria-label="Files">
            {FILES.slice(0, 4).map((file) => (
              <ListItem key={file.id} headline={file.name} selected={file.id === 'f2'} />
            ))}
          </List>
        }
        detail={<FileDetail file={FILES[1]} />}
      />
    </div>
  ),
  playground: {
    controls: {
      listWidth: {
        type: 'number',
        default: 360,
        min: 240,
        max: 480,
        step: 20,
        label: 'List width',
      },
      resizable: { type: 'boolean', default: false },
    },
    render: function ListDetailPlayground(v) {
      const [selected, setSelected] = useState<string | null>(null)
      const file = FILES.find((f) => f.id === selected)
      return (
        <div className="g-frame list-detail-doc-frame">
          <ListDetailLayout
            // A new key applies a changed width to the resizable list pane.
            key={`${v.listWidth}-${v.resizable}`}
            showDetail={selected !== null}
            listWidth={v.listWidth}
            resizable={v.resizable}
            list={<FileList selected={selected} onSelect={setSelected} />}
            detail={({ compact }) => (
              <FileDetail file={file} onBack={compact ? () => setSelected(null) : undefined} />
            )}
          />
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const layout = jsx('ListDetailLayout', {
        showDetail: raw('selected !== null'),
        ...changed(v, ['listWidth']),
        resizable: v.resizable,
        list: raw('<FileList selected={selected} onSelect={setSelected} />'),
        detail: raw(
          '({ compact }) => (\n    <FileDetail file={file} onBack={compact ? () => setSelected(null) : undefined} />\n  )',
        ),
      })
      return `const [selected, setSelected] = useState<string | null>(null)\nconst file = files.find((f) => f.id === selected)\n\n${layout}`
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'ListDetailLayout',
      interfaces: ['ListDetailLayoutProps'],
      inherits:
        'The layout follows the browser window size class, not the width of its container. With `resizable`, `listWidth` is the starting width of the list pane.',
    },
  ],
  guidelines: [
    'Use list-detail to browse a collection and inspect one item: files, messages, contacts, photos.',
    'Pass `detail` as a function and show a back button when `compact` is true. On those windows the back button is the only way back to the list.',
    'On wide windows, show a short hint in the detail pane while nothing is selected, instead of an empty pane.',
  ],
})

/**
 * File explorer
 * Select a file to see its details. On compact and medium windows the detail replaces the list and shows a back button. The layout follows the browser window, not the size of this frame.
 */
export function ExampleExplorer() {
  const [selected, setSelected] = useState<string | null>(null)
  const file = FILES.find((f) => f.id === selected)
  return (
    <div className="g-frame list-detail-doc-frame">
      <ListDetailLayout
        showDetail={file !== undefined}
        list={
          <List aria-label="Files">
            {FILES.slice(0, 20).map((f) => (
              <ListItem
                key={f.id}
                headline={f.name}
                supportingText={f.folder}
                trailingSupportingText={f.status}
                selected={f.id === selected}
                onClick={() => setSelected(f.id)}
              />
            ))}
          </List>
        }
        detail={({ compact }) =>
          file ? (
            <div className="list-detail-doc-detail">
              {compact && (
                <IconButton
                  icon="arrow_back"
                  label="Back to files"
                  className="m3-mirror-rtl"
                  onClick={() => setSelected(null)}
                />
              )}
              <Text as="h3" variant="headline-small">
                {file.name}
              </Text>
              <Text color="on-surface-variant">{file.folder}</Text>
              <Text variant="body-medium">
                {file.kind} · {file.status} · {file.size.toLocaleString()} KB
              </Text>
              <Text variant="body-medium">
                Changed {file.modified} by {file.owner}
              </Text>
              <div className="g-row">
                <Button icon="open_in_new">Open</Button>
                <Button variant="outlined" icon="share">
                  Share
                </Button>
              </div>
            </div>
          ) : (
            <div className="list-detail-doc-empty">Select a file to see its details.</div>
          )
        }
      />
    </div>
  )
}

/**
 * Mail inbox
 * `resizable` puts a drag handle between the panes. Drag it, or focus it and use the arrow keys. The handle shows on expanded and wider windows.
 */
export function ExampleInbox() {
  const [selected, setSelected] = useState<string | null>('m1')
  const message = MESSAGES.find((m) => m.id === selected)
  return (
    <div className="g-frame list-detail-doc-frame">
      <ListDetailLayout
        resizable
        listWidth={320}
        showDetail={message !== undefined}
        list={
          <List aria-label="Messages">
            {MESSAGES.map((m) => (
              <ListItem
                key={m.id}
                leading={<Avatar name={m.from} />}
                leadingSize="avatar"
                headline={m.subject}
                supportingText={m.from}
                selected={m.id === selected}
                onClick={() => setSelected(m.id)}
              />
            ))}
          </List>
        }
        detail={({ compact }) =>
          message ? (
            <div className="list-detail-doc-detail">
              {compact && (
                <IconButton
                  icon="arrow_back"
                  label="Back to inbox"
                  className="m3-mirror-rtl"
                  onClick={() => setSelected(null)}
                />
              )}
              <Text as="h3" variant="headline-small">
                {message.subject}
              </Text>
              <Text color="on-surface-variant">From {message.from}</Text>
              <Text>{message.body}</Text>
              <div className="g-row">
                <Button icon="reply">Reply</Button>
                <Button variant="outlined">Forward</Button>
              </div>
            </div>
          ) : (
            <div className="list-detail-doc-empty">Select a message.</div>
          )
        }
      />
    </div>
  )
}

const MESSAGES = [
  {
    id: 'm1',
    from: 'Grace Hopper',
    subject: 'Team lunch on Friday',
    body: 'We booked a table for six at noon. Tell me if you can come.',
  },
  {
    id: 'm2',
    from: 'Alan Turing',
    subject: 'Harbor budget',
    body: 'I updated the budget sheet in the shared folder. Please check the travel costs.',
  },
  {
    id: 'm3',
    from: 'Katherine Johnson',
    subject: 'Trip photos',
    body: 'The photos from the trip are in a shared album now. Add yours when you can.',
  },
  {
    id: 'm4',
    from: 'Ada Lovelace',
    subject: 'Plan for next week',
    body: 'Three tasks are due next week. The quarterly report is the most urgent.',
  },
]

/**
 * Photo details
 * The detail pane holds a form. A `key` on the form resets its fields when the selection changes.
 */
export function ExamplePhotos() {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <div className="g-frame list-detail-doc-frame">
      <ListDetailLayout
        listWidth={300}
        showDetail={selected !== null}
        list={
          <List aria-label="Photos">
            {IMAGES.map((src, i) => (
              <ListItem
                // biome-ignore lint/suspicious/noArrayIndexKey: static demo images
                key={i}
                leading={<img src={src} alt="" className="list-detail-doc-thumb" />}
                leadingSize="image"
                headline={`landscape-${i + 1}.svg`}
                supportingText="640 × 400"
                selected={i === selected}
                onClick={() => setSelected(i)}
              />
            ))}
          </List>
        }
        detail={({ compact }) =>
          selected === null ? (
            <div className="list-detail-doc-empty">Select a photo to edit its details.</div>
          ) : (
            <div key={selected} className="list-detail-doc-detail">
              {compact && (
                <IconButton
                  icon="arrow_back"
                  label="Back to photos"
                  className="m3-mirror-rtl"
                  onClick={() => setSelected(null)}
                />
              )}
              <img src={IMAGES[selected]} alt="" className="list-detail-doc-image" />
              <TextField label="Description" defaultValue={`Landscape ${selected + 1}`} fullWidth />
              <TextField label="Location" fullWidth />
              <div className="g-row">
                <Button>Save</Button>
                <Button variant="outlined" icon="upload">
                  Replace photo
                </Button>
              </div>
            </div>
          )
        }
      />
    </div>
  )
}
