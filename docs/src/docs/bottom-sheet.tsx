import {
  BottomSheet,
  Button,
  Checkbox,
  Icon,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  Text,
  TextField,
  useSnackbar,
} from 'material-design-3-expressive-components'
import { useId, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import './bottom-sheet.css'

const SHARE_ACTIONS = [
  { icon: 'link', label: 'Copy link' },
  { icon: 'person_add', label: 'Share with people' },
  { icon: 'qr_code_2', label: 'Show QR code' },
  { icon: 'download', label: 'Download as ZIP' },
  { icon: 'mail', label: 'Send by email' },
]

export const doc = defineDoc({
  slug: 'bottom-sheet',
  name: 'Bottom sheet',
  group: 'containment',
  icon: 'bottom_sheets',
  order: 3,
  summary:
    'Bottom sheets are modal surfaces that slide up from the bottom of the screen. Use them on compact windows for actions or a short task about the current item.',
  imports: [
    'BottomSheet',
    'Button',
    'IconButton',
    'List',
    'ListItem',
    'ListSubheader',
    'Checkbox',
    'Text',
    'TextField',
    'useSnackbar',
    'Icon',
  ],
  preview: () => (
    <div className="bottom-sheet-doc-preview">
      <div className="bottom-sheet-doc-preview__sheet">
        <div className="bottom-sheet-doc-preview__handle" />
        {SHARE_ACTIONS.slice(0, 3).map((action) => (
          <div key={action.icon} className="bottom-sheet-doc-preview__row">
            <Icon name={action.icon} size={20} />
            {action.label}
          </div>
        ))}
      </div>
    </div>
  ),
  playground: {
    controls: {
      label: { type: 'text', default: 'Share “Trip photos”', label: 'Accessible name' },
      items: { type: 'number', default: 4, min: 1, max: 5 },
      hideHandle: { type: 'boolean', default: false },
      dismissible: { type: 'boolean', default: true },
    },
    render: function BottomSheetPlayground(v) {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button variant="tonal" icon="share" onClick={() => setOpen(true)}>
            Share
          </Button>
          <BottomSheet
            open={open}
            onClose={() => setOpen(false)}
            aria-label={v.label}
            hideHandle={v.hideHandle}
            dismissible={v.dismissible}
          >
            <List>
              {SHARE_ACTIONS.slice(0, v.items).map((action) => (
                <ListItem
                  key={action.icon}
                  leadingIcon={action.icon}
                  headline={action.label}
                  onClick={() => setOpen(false)}
                />
              ))}
            </List>
          </BottomSheet>
        </>
      )
    },
    code: (v, { jsx, changed }) => {
      const items = SHARE_ACTIONS.slice(0, v.items)
        .map((action) =>
          jsx('ListItem', {
            leadingIcon: action.icon,
            headline: action.label,
            onClick: raw('() => setOpen(false)'),
          }),
        )
        .join('\n')
      const sheet = jsx(
        'BottomSheet',
        {
          open: raw('open'),
          onClose: raw('() => setOpen(false)'),
          'aria-label': v.label,
          hideHandle: v.hideHandle,
          ...changed(v, ['dismissible']),
        },
        jsx('List', {}, items),
      )
      return `const [open, setOpen] = useState(false)\n\n<Button variant="tonal" icon="share" onClick={() => setOpen(true)}>\n  Share\n</Button>\n${sheet}`
    },
  },
  api: [
    {
      name: 'BottomSheet',
      interfaces: ['BottomSheetProps'],
      inherits:
        'The sheet is modal: it traps focus, locks page scroll and returns focus on close. Its width is at most 640px.',
    },
  ],
  guidelines: [
    'Use a bottom sheet for actions or a short task about the current item, mostly on compact windows. On larger windows, prefer a menu, a dialog or a side sheet.',
    'Name every sheet with `aria-label`, or with `aria-labelledby` that points at a visible heading.',
    'Keep the drag handle where you can: it also gives keyboard and screen reader users a button that closes the sheet.',
    'Set `dismissible` to false while a form in the sheet has unsaved input, and offer Cancel and Save buttons.',
  ],
})

/**
 * Share sheet
 * A list of actions for the current item. Each action closes the sheet. A drag down, Escape or a tap on the scrim also closes it.
 */
export function ExampleShare() {
  const [open, setOpen] = useState(false)
  const snackbar = useSnackbar()
  const run = (message: string) => {
    setOpen(false)
    snackbar.show(message)
  }
  return (
    <>
      <Button variant="tonal" icon="share" onClick={() => setOpen(true)}>
        Share
      </Button>
      <BottomSheet open={open} onClose={() => setOpen(false)} aria-label="Share “Trip photos”">
        <List>
          <ListItem leadingIcon="link" headline="Copy link" onClick={() => run('Link copied')} />
          <ListItem
            leadingIcon="person_add"
            headline="Share with people"
            onClick={() => run('Invite sent')}
          />
          <ListItem
            leadingIcon="download"
            headline="Download as ZIP"
            onClick={() => run('Download started')}
          />
        </List>
      </BottomSheet>
    </>
  )
}

/**
 * Actions for one item
 * A heading names the item, and `aria-labelledby` gives its text to the sheet. On compact windows this replaces a menu.
 */
export function ExampleItemActions() {
  const [open, setOpen] = useState(false)
  const headingId = useId()
  return (
    <>
      <IconButton
        icon="more_vert"
        label="Actions for Harbor budget"
        onClick={() => setOpen(true)}
      />
      <BottomSheet open={open} onClose={() => setOpen(false)} aria-labelledby={headingId}>
        <div style={{ padding: '0 16px 8px' }}>
          <Text as="h2" variant="title-large" id={headingId}>
            Harbor budget
          </Text>
          <Text variant="body-medium" color="on-surface-variant">
            Spreadsheet · Shared
          </Text>
        </div>
        <List>
          <ListItem leadingIcon="edit" headline="Rename" onClick={() => setOpen(false)} />
          <ListItem
            leadingIcon="content_copy"
            headline="Make a copy"
            onClick={() => setOpen(false)}
          />
          <ListItem leadingIcon="lock" headline="Make private" onClick={() => setOpen(false)} />
          <ListItem leadingIcon="delete" headline="Move to trash" onClick={() => setOpen(false)} />
        </List>
      </BottomSheet>
    </>
  )
}

/**
 * Form with unsaved input
 * `dismissible` is false while the name has changes, so that a stray drag, tap or Escape does not lose them. Cancel and Save stay available.
 */
export function ExampleForm() {
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState('Trip photos')
  const [name, setName] = useState(saved)
  const headingId = useId()
  const dirty = name !== saved
  const start = () => {
    setName(saved)
    setOpen(true)
  }
  const save = () => {
    setSaved(name.trim())
    setOpen(false)
  }
  return (
    <>
      <Button variant="tonal" icon="edit" onClick={start}>
        Rename “{saved}”
      </Button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        dismissible={!dirty}
        aria-labelledby={headingId}
      >
        <div className="g-stack">
          <Text as="h2" variant="title-large" id={headingId}>
            Rename folder
          </Text>
          <TextField label="Name" value={name} onValueChange={setName} fullWidth />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <Button variant="text" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={save} disabled={!dirty || !name.trim()}>
              Save
            </Button>
          </div>
        </div>
      </BottomSheet>
    </>
  )
}

/**
 * Without a drag handle
 * `hideHandle` removes the handle and adds space at the top. Give the sheet a visible button that closes it.
 */
export function ExampleNoHandle() {
  const [open, setOpen] = useState(false)
  const [statuses, setStatuses] = useState(['Shared'])
  const toggle = (status: string) =>
    setStatuses((current) =>
      current.includes(status) ? current.filter((s) => s !== status) : [...current, status],
    )
  return (
    <>
      <Button variant="outlined" icon="filter_list" onClick={() => setOpen(true)}>
        Filters ({statuses.length})
      </Button>
      <BottomSheet open={open} onClose={() => setOpen(false)} hideHandle aria-label="Filter files">
        <List navigable={false}>
          <ListSubheader>Status</ListSubheader>
          {['Shared', 'Private', 'Syncing', 'Archived'].map((status) => (
            <ListItem
              key={status}
              asLabel
              headline={status}
              leading={
                <Checkbox checked={statuses.includes(status)} onChange={() => toggle(status)} />
              }
            />
          ))}
        </List>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => setOpen(false)}>Show results</Button>
        </div>
      </BottomSheet>
    </>
  )
}
