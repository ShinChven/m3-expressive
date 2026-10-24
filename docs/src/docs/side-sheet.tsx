import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  SideSheet,
  Switch,
  Text,
  TextField,
  useSnackbar,
} from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import './side-sheet.css'

const FIELDS_CODE = `<div className="g-stack">
  <TextField label="Name" defaultValue="Harbor budget.xlsx" fullWidth />
  <TextField label="Folder" prefixText="/" defaultValue="projects/harbor" fullWidth />
  <Switch label="Share with my team" defaultChecked />
</div>`

const ACTIONS_CODE = `<>
    <Button onClick={() => setOpen(false)}>Save</Button>
    <Button variant="outlined" onClick={() => setOpen(false)}>
      Cancel
    </Button>
  </>`

export const doc = defineDoc({
  slug: 'side-sheet',
  name: 'Side sheet',
  group: 'containment',
  icon: 'right_panel_open',
  order: 4,
  summary:
    'Side sheets show supplementary content and actions at the side of the screen. Standard sheets sit next to the content; modal sheets cover it with a scrim.',
  imports: [
    'SideSheet',
    'Button',
    'IconButton',
    'Checkbox',
    'List',
    'ListItem',
    'Switch',
    'Text',
    'TextField',
    'useSnackbar',
  ],
  preview: () => (
    <div className="side-sheet-doc-preview">
      <div className="side-sheet-doc-preview__main">
        <div className="side-sheet-doc-preview__line" />
        <div className="side-sheet-doc-preview__line" />
        <div className="side-sheet-doc-preview__line" />
        <div className="side-sheet-doc-preview__line" />
      </div>
      <div className="side-sheet-doc-preview__sheet">
        <div className="side-sheet-doc-preview__title">Settings</div>
        <div className="side-sheet-doc-preview__field" />
        <div className="side-sheet-doc-preview__field" />
        <div className="side-sheet-doc-preview__button" />
      </div>
    </div>
  ),
  playground: {
    controls: {
      modal: { type: 'boolean', default: false },
      headline: { type: 'text', default: 'File details' },
      side: { type: 'select', options: ['end', 'start'], default: 'end' },
      width: {
        type: 'select',
        options: ['default', '280', '320', '400', '480'],
        default: 'default',
      },
      back: { type: 'boolean', default: false, label: 'Back button' },
      actions: { type: 'boolean', default: true },
      hideClose: { type: 'boolean', default: false },
    },
    stage: 'fill',
    render: function SideSheetPlayground(v) {
      const snackbar = useSnackbar()
      const [standardOpen, setStandardOpen] = useState(true)
      const [modalOpen, setModalOpen] = useState(false)
      const open = v.modal ? modalOpen : standardOpen
      const setOpen = v.modal ? setModalOpen : setStandardOpen
      const sheet = (
        <SideSheet
          modal={v.modal}
          open={open}
          onClose={() => setOpen(false)}
          headline={v.headline || undefined}
          aria-label={v.headline ? undefined : 'File details'}
          onBack={v.back ? () => snackbar.show('Back to the previous step') : undefined}
          side={v.side}
          width={v.width === 'default' ? undefined : Number(v.width)}
          hideClose={v.hideClose}
          actions={
            v.actions ? (
              <>
                <Button onClick={() => setOpen(false)}>Save</Button>
                <Button variant="outlined" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </>
            ) : undefined
          }
        >
          <div className="g-stack">
            <TextField label="Name" defaultValue="Harbor budget.xlsx" fullWidth />
            <TextField label="Folder" prefixText="/" defaultValue="projects/harbor" fullWidth />
            <Switch label="Share with my team" defaultChecked />
          </div>
        </SideSheet>
      )
      return (
        <div className="g-frame" style={{ display: 'flex', height: 400 }}>
          {v.side === 'start' && sheet}
          <div style={{ flex: 1, padding: 24 }}>
            <Button variant="tonal" icon="info" onClick={() => setOpen(v.modal ? true : !open)}>
              File details
            </Button>
          </div>
          {v.side === 'end' && sheet}
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const sheet = jsx(
        'SideSheet',
        {
          modal: v.modal,
          open: raw('open'),
          onClose: raw('() => setOpen(false)'),
          headline: v.headline,
          'aria-label': v.headline ? undefined : 'File details',
          onBack: v.back ? raw('goBack') : undefined,
          ...changed(v, ['side']),
          width: v.width === 'default' ? undefined : Number(v.width),
          hideClose: v.hideClose,
          actions: v.actions ? raw(ACTIONS_CODE) : undefined,
        },
        FIELDS_CODE,
      )
      const toggle = v.modal ? 'setOpen(true)' : 'setOpen(!open)'
      const main = `<div style={{ flex: 1, padding: 24 }}>\n  <Button variant="tonal" icon="info" onClick={() => ${toggle}}>\n    File details\n  </Button>\n</div>`
      const layout = jsx(
        'div',
        { className: 'g-frame', style: raw("{ display: 'flex', height: 400 }") },
        v.side === 'start' ? `${sheet}\n${main}` : `${main}\n${sheet}`,
      )
      return `const [open, setOpen] = useState(${!v.modal})\n\n${layout}`
    },
  },
  api: [
    {
      name: 'SideSheet',
      interfaces: ['SideSheetProps'],
      inherits:
        'A standard sheet renders an `<aside>` in place. A modal sheet renders a dialog in a portal, traps focus, locks page scroll and closes on Escape.',
    },
  ],
  guidelines: [
    'Use a standard side sheet on medium and larger windows, next to the content it changes. Use a modal side sheet on compact windows, or when the task needs full attention.',
    'Put the main action first in `actions` as a filled button, followed by an outlined Cancel button.',
    'Use `onBack` to move between the steps of one sheet. Do not open a sheet from another sheet.',
    'Use `hideClose` only when another visible control closes a standard sheet.',
  ],
})

/**
 * Standard side sheet
 * A standard sheet sits in the layout and narrows the content next to it. Here it shows the details of a calendar event.
 */
export function ExampleStandard() {
  const [open, setOpen] = useState(true)
  return (
    <div className="g-frame" style={{ display: 'flex', height: 380 }}>
      <div className="g-stack" style={{ flex: 1, minWidth: 0, padding: 24 }}>
        <div>
          <Button variant="tonal" icon="event" selected={open} onClick={() => setOpen(!open)}>
            Event details
          </Button>
        </div>
        <p className="g-muted">The calendar narrows while the details are open.</p>
      </div>
      <SideSheet open={open} onClose={() => setOpen(false)} headline="Team lunch" width={320}>
        <div className="g-stack">
          <TextField label="Title" defaultValue="Team lunch" fullWidth />
          <TextField label="Notes" multiline rows={2} fullWidth />
          <Switch label="All day" />
        </div>
      </SideSheet>
    </div>
  )
}

/**
 * Modal side sheet
 * A modal sheet covers the content with a scrim and traps focus. Escape and a click on the scrim close it.
 */
export function ExampleModal() {
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
      <SideSheet
        modal
        open={open}
        onClose={() => setOpen(false)}
        headline="Filter files"
        actions={
          <>
            <Button onClick={() => setOpen(false)}>Show results</Button>
            <Button variant="outlined" onClick={() => setStatuses([])}>
              Clear all
            </Button>
          </>
        }
      >
        <div className="g-stack">
          <Text as="h3" variant="title-small" color="on-surface-variant">
            Status
          </Text>
          {['Shared', 'Private', 'Syncing', 'Archived'].map((status) => (
            <Checkbox
              key={status}
              label={status}
              checked={statuses.includes(status)}
              onChange={() => toggle(status)}
            />
          ))}
        </div>
      </SideSheet>
    </>
  )
}

/**
 * Steps with a back button
 * `onBack` shows a back button before the headline. Use it to move between the steps of one sheet.
 */
export function ExampleSteps() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<keyof typeof STEPS | null>(null)
  const show = () => {
    setStep(null)
    setOpen(true)
  }
  return (
    <>
      <Button variant="tonal" icon="settings" onClick={show}>
        Folder settings
      </Button>
      <SideSheet
        modal
        open={open}
        onClose={() => setOpen(false)}
        headline={step ? STEPS[step].title : 'Folder settings'}
        onBack={step ? () => setStep(null) : undefined}
        actions={
          step ? (
            <>
              <Button onClick={() => setStep(null)}>Save</Button>
              <Button variant="outlined" onClick={() => setStep(null)}>
                Cancel
              </Button>
            </>
          ) : undefined
        }
      >
        {step === null ? (
          <List style={{ marginInline: -24 }}>
            <ListItem
              leadingIcon="folder"
              headline={STEPS.details.title}
              supportingText="Name, description and sidebar"
              trailingIcon="chevron_right"
              onClick={() => setStep('details')}
            />
            <ListItem
              leadingIcon="link"
              headline={STEPS.sharing.title}
              supportingText="Link name and access for people with the link"
              trailingIcon="chevron_right"
              onClick={() => setStep('sharing')}
            />
          </List>
        ) : (
          <div className="g-stack">
            <TextField label={STEPS[step].field} defaultValue="Harbor project" fullWidth />
            <TextField label="Description" multiline rows={3} fullWidth />
            <Switch label={STEPS[step].toggle} defaultChecked />
          </div>
        )}
      </SideSheet>
    </>
  )
}

const STEPS = {
  details: { title: 'Folder details', field: 'Folder name', toggle: 'Show in the sidebar' },
  sharing: { title: 'Link sharing', field: 'Link name', toggle: 'Anyone with the link can view' },
}

/**
 * Start side and width
 * `side="start"` attaches a sheet to the leading edge; place it before the content. `width` sets the width in px. With `hideClose`, the toggle button is the only way to close it.
 */
export function ExampleStart() {
  const [open, setOpen] = useState(true)
  const [current, setCurrent] = useState('Overview')
  return (
    <div className="g-frame" style={{ display: 'flex', height: 340 }}>
      <SideSheet
        open={open}
        onClose={() => setOpen(false)}
        side="start"
        width={260}
        headline="Outline"
        hideClose
      >
        <List aria-label="Headings" style={{ marginInline: -24 }}>
          {OUTLINE.map((heading) => (
            <ListItem
              key={heading}
              headline={heading}
              selected={heading === current}
              onClick={() => setCurrent(heading)}
            />
          ))}
        </List>
      </SideSheet>
      <div style={{ flex: 1, minWidth: 0, padding: 16 }}>
        <IconButton
          icon="toc"
          label="Show outline"
          selected={open}
          onClick={() => setOpen(!open)}
        />
        <p className="g-muted">Reading the section “{current}”.</p>
      </div>
    </div>
  )
}

const OUTLINE = ['Overview', 'Flights', 'Hotel', 'Day trips', 'Packing list']
