import {
  Avatar,
  List,
  ListItem,
  Pane,
  PaneLayout,
  ResizablePanes,
  Text,
  TextField,
} from '@m3-expressive/react'
import { useState } from 'react'
import { IMAGES } from '../demo'
import { defineDoc, raw } from '../kit/doc'
import { FILES } from '../mock'
import './panes.css'

const FOLDERS = ['Projects', 'Documents', 'Photos', 'Shared', 'Archive']

export const doc = defineDoc({
  slug: 'panes',
  name: 'Panes',
  group: 'layout',
  icon: 'view_column',
  order: 6,
  summary:
    'Panes are the parts of a layout. `PaneLayout` puts panes in a row with M3 window margins and 24dp spacers, and `ResizablePanes` adds a drag handle that also works with the keyboard.',
  imports: [
    'Pane',
    'PaneLayout',
    'ResizablePanes',
    'List',
    'ListItem',
    'Text',
    'TextField',
    'Avatar',
  ],
  preview: () => (
    <div className="g-frame panes-doc-frame panes-doc-preview">
      <PaneLayout>
        <Pane width={140}>
          <div className="panes-doc-content">Folders</div>
        </Pane>
        <Pane variant="flat">
          <div className="panes-doc-content">Files</div>
        </Pane>
        <Pane width={120}>
          <div className="panes-doc-content">Details</div>
        </Pane>
      </PaneLayout>
    </div>
  ),
  playground: {
    controls: {
      resizable: { type: 'boolean', default: false },
      width: {
        type: 'number',
        default: 320,
        min: 200,
        max: 480,
        step: 20,
        label: 'Start pane width',
      },
      variant: {
        type: 'select',
        options: ['contained', 'flat'],
        default: 'contained',
        label: 'End pane variant',
      },
      third: { type: 'boolean', default: false, label: 'Third pane' },
      flush: { type: 'boolean', default: false },
    },
    render: (v) => (
      <div className="g-frame panes-doc-frame">
        <PaneLayout flush={v.flush}>
          {v.resizable ? (
            <ResizablePanes
              // A new key applies a changed default size.
              key={v.width}
              defaultSize={v.width}
              start={
                <Pane>
                  <div className="panes-doc-content">Folders</div>
                </Pane>
              }
              end={
                <Pane variant={v.variant}>
                  <div className="panes-doc-content">Files</div>
                </Pane>
              }
            />
          ) : (
            <>
              <Pane width={v.width}>
                <div className="panes-doc-content">Folders</div>
              </Pane>
              <Pane variant={v.variant}>
                <div className="panes-doc-content">Files</div>
              </Pane>
              {v.third && (
                <Pane width={240} as="aside" aria-label="Details">
                  <div className="panes-doc-content">Details</div>
                </Pane>
              )}
            </>
          )}
        </PaneLayout>
      </div>
    ),
    code: (v, { jsx, changed }) => {
      const variant = changed(v, ['variant'])
      const folders = '<div className="panes-doc-content">Folders</div>'
      const files = '<div className="panes-doc-content">Files</div>'
      const children = v.resizable
        ? jsx('ResizablePanes', {
            defaultSize: v.width === 360 ? undefined : v.width,
            start: raw(`<Pane>${folders}</Pane>`),
            end: raw(`${jsx('Pane', variant, files)}`),
          })
        : [
            jsx('Pane', { width: v.width }, folders),
            jsx('Pane', variant, files),
            v.third
              ? jsx(
                  'Pane',
                  { width: 240, as: 'aside', 'aria-label': 'Details' },
                  '<div className="panes-doc-content">Details</div>',
                )
              : '',
          ]
            .filter(Boolean)
            .join('\n')
      return jsx('PaneLayout', { flush: v.flush }, children)
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'Pane',
      interfaces: ['PaneProps'],
      inherits: 'Also accepts native HTML attributes of the rendered element.',
    },
    {
      name: 'PaneLayout',
      interfaces: ['PaneLayoutProps'],
      inherits: 'Also accepts native `<div>` attributes.',
    },
    {
      name: 'ResizablePanes',
      interfaces: ['ResizablePanesProps'],
      inherits:
        'The handle is a focusable `separator`. Arrow keys move it by 16px, Shift with an arrow key by 64px, and Home and End jump to `min` and `max`. In right-to-left documents the arrow keys are mirrored.',
    },
  ],
  guidelines: [
    'Give fixed widths to panes that hold navigation or details, and let the main pane flex.',
    'Use `contained` panes to separate regions on a surface; use a `flat` pane for the main content when the panes around it are contained.',
    'Make a pane resizable when its content has no natural width, such as a tree of folders or a list of long titles. Set `min` so the content stays usable.',
    'The canonical layouts (list-detail and supporting pane) are built from these parts. Use them first, and build your own arrangement from panes only when they do not fit.',
  ],
})

/**
 * Fixed and flexible panes
 * A contained 280px pane holds the folders; the flat main pane takes the rest of the width.
 */
export function ExampleFixed() {
  const [folder, setFolder] = useState('Projects')
  return (
    <div className="g-frame panes-doc-frame">
      <PaneLayout>
        <Pane width={280}>
          <List aria-label="Folders">
            {FOLDERS.map((name) => (
              <ListItem
                key={name}
                leadingIcon="folder"
                headline={name}
                selected={name === folder}
                onClick={() => setFolder(name)}
              />
            ))}
          </List>
        </Pane>
        <Pane variant="flat">
          <div className="panes-doc-content">
            <Text as="h3" variant="headline-small">
              {folder}
            </Text>
            <Text color="on-surface-variant">12 files, 4 shared</Text>
          </div>
        </Pane>
      </PaneLayout>
    </div>
  )
}

/**
 * Three panes
 * A file manager with folders, files and the details of the selected file. The details pane is an `aside` with a name.
 */
export function ExampleThree() {
  const [file, setFile] = useState(0)
  return (
    <div className="g-frame panes-doc-frame">
      <PaneLayout>
        <Pane width={200}>
          <List aria-label="Folders">
            {FOLDERS.slice(0, 3).map((name) => (
              <ListItem key={name} leadingIcon="folder" headline={name} />
            ))}
          </List>
        </Pane>
        <Pane variant="flat">
          <List aria-label="Files">
            {IMAGES.map((src, i) => (
              <ListItem
                key={src}
                leading={<Avatar src={src} name={`landscape-${i + 1}.svg`} />}
                leadingSize="avatar"
                headline={`landscape-${i + 1}.svg`}
                selected={i === file}
                onClick={() => setFile(i)}
              />
            ))}
          </List>
        </Pane>
        <Pane width={260} as="aside" aria-label="File details">
          <div className="panes-doc-content">
            <Text as="h3" variant="title-medium">
              landscape-{file + 1}.svg
            </Text>
            <TextField
              key={file}
              label="Description"
              defaultValue={`Landscape ${file + 1}`}
              fullWidth
            />
          </div>
        </Pane>
      </PaneLayout>
    </div>
  )
}

/**
 * Resizable panes
 * Drag the handle, or focus it with Tab and use the arrow keys. Shift moves in bigger steps; Home and End jump to the limits. A controlled `size` lets the app save the width.
 */
export function ExampleResizable() {
  const [size, setSize] = useState(300)
  return (
    <div className="g-frame panes-doc-frame">
      <PaneLayout>
        <ResizablePanes
          size={size}
          onSizeChange={setSize}
          min={200}
          max={520}
          handleLabel="Resize the file list"
          start={
            <Pane>
              <List aria-label="Files">
                {FILES.slice(0, 12).map((file) => (
                  <ListItem key={file.id} headline={file.name} supportingText={file.folder} />
                ))}
              </List>
            </Pane>
          }
          end={
            <Pane variant="flat">
              <div className="panes-doc-content">
                <Text as="h3" variant="title-medium">
                  File list width: {size}px
                </Text>
                <Text color="on-surface-variant">From 200px to 520px.</Text>
              </div>
            </Pane>
          }
        />
      </PaneLayout>
    </div>
  )
}

/**
 * Scrolling panes
 * Each pane scrolls on its own by default, so a long list does not move the pane next to it. Set `scroll={false}` when the whole window should scroll.
 */
export function ExampleScrolling() {
  return (
    <div className="g-frame panes-doc-frame">
      <PaneLayout>
        <Pane width={320}>
          <List aria-label="All files">
            {FILES.slice(0, 40).map((file) => (
              <ListItem key={file.id} headline={file.name} trailingSupportingText={file.status} />
            ))}
          </List>
        </Pane>
        <Pane>
          <List aria-label="Recently changed">
            {FILES.slice(40, 80).map((file) => (
              <ListItem key={file.id} headline={file.name} supportingText={file.modified} />
            ))}
          </List>
        </Pane>
      </PaneLayout>
    </div>
  )
}
