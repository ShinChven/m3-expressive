import { Button, Dialog, Switch, TextField } from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'dialog',
  name: 'Dialog',
  group: 'containment',
  icon: 'chat_bubble',
  order: 2,
  summary:
    'Dialogs ask for a decision or show critical information before people continue. Full-screen dialogs hold a short task on small screens.',
  imports: ['Dialog', 'Button', 'Switch', 'TextField'],
  preview: () => (
    <div className="g-preview-dialog">
      <div className="g-preview-dialog__title">Discard message?</div>
      <div className="g-preview-dialog__text">Unsent text will be lost.</div>
      <div className="g-preview-dialog__actions">
        <Button variant="text" size="xs">
          Cancel
        </Button>
        <Button variant="text" size="xs">
          Discard
        </Button>
      </div>
    </div>
  ),
  playground: {
    controls: {
      headline: { type: 'text', default: 'Discard message?' },
      text: {
        type: 'text',
        default: 'Your unsent message to Grace Hopper will be lost.',
        label: 'Supporting text',
      },
      icon: { type: 'icon', default: '' },
      fullScreen: {
        type: 'select',
        options: ['false', 'compact', 'true'],
        default: 'false',
        label: 'Full screen',
      },
      dismissible: { type: 'boolean', default: true },
      role: { type: 'select', options: ['dialog', 'alertdialog'], default: 'dialog' },
    },
    render: function DialogPlayground(v) {
      const [open, setOpen] = useState(false)
      const fullScreen =
        v.fullScreen === 'true' ? true : v.fullScreen === 'compact' ? 'compact' : false
      return (
        <>
          <Button variant="tonal" onClick={() => setOpen(true)}>
            Open dialog
          </Button>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            headline={v.headline}
            icon={v.icon || undefined}
            fullScreen={fullScreen}
            dismissible={v.dismissible}
            role={v.role}
            confirmAction={
              <Button variant="text" onClick={() => setOpen(false)}>
                Save
              </Button>
            }
            actions={
              <>
                <Button variant="text" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant="text" onClick={() => setOpen(false)}>
                  Discard
                </Button>
              </>
            }
          >
            {v.text}
          </Dialog>
        </>
      )
    },
    code: (v, { jsx, changed }) => {
      const dialog = jsx(
        'Dialog',
        {
          open: { raw: 'open' },
          onClose: { raw: '() => setOpen(false)' },
          headline: v.headline,
          icon: v.icon,
          fullScreen: v.fullScreen === 'false' ? undefined : v.fullScreen === 'true' || 'compact',
          ...changed(v, ['dismissible', 'role']),
          actions: {
            raw: '<>\n    <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>\n    <Button variant="text" onClick={discard}>Discard</Button>\n  </>',
          },
        },
        v.text,
      )
      return `const [open, setOpen] = useState(false)\n\n<Button onClick={() => setOpen(true)}>Open dialog</Button>\n${dialog}`
    },
  },
  api: [
    {
      name: 'Dialog',
      interfaces: ['DialogProps'],
    },
  ],
  guidelines: [
    'Use dialogs sparingly: they interrupt. Prefer a snackbar for confirmations that can be undone.',
    'The headline asks a question or states the decision; actions name the outcome (“Discard”, not “OK”).',
    'Turn off `dismissible` while a form inside has unsaved input, so a stray Escape does not lose it.',
  ],
})

/**
 * Basic dialog
 * A headline, supporting text and end-aligned text buttons. Focus moves inside and returns on close.
 */
export function ExampleBasic() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="tonal" onClick={() => setOpen(true)}>
        Discard message
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        headline="Discard message?"
        actions={
          <>
            <Button variant="text" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="text" onClick={() => setOpen(false)}>
              Discard
            </Button>
          </>
        }
      >
        Your unsent message to Grace Hopper will be lost.
      </Dialog>
    </>
  )
}

/**
 * Hero icon and alert
 * An icon centers the headline. Use `role="alertdialog"` for destructive or urgent decisions.
 */
export function ExampleAlert() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="tonal" icon="delete" onClick={() => setOpen(true)}>
        Delete 12 files
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        role="alertdialog"
        icon="delete_forever"
        headline="Delete 12 files?"
        actions={
          <>
            <Button variant="text" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="text" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </>
        }
      >
        The files move to trash and can be restored for 30 days.
      </Dialog>
    </>
  )
}

/**
 * Full-screen dialog
 * `fullScreen` shows a top bar with close and confirm actions. Use `"compact"` to go full-screen only on phones.
 */
export function ExampleFullScreen() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="tonal" icon="create_new_folder" onClick={() => setOpen(true)}>
        New folder
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen
        headline="New folder"
        confirmAction={
          <Button variant="text" onClick={() => setOpen(false)}>
            Save
          </Button>
        }
      >
        <div className="g-stack" style={{ maxWidth: 560 }}>
          <TextField label="Name" fullWidth />
          <TextField label="Location" prefixText="/" defaultValue="projects" fullWidth />
          <Switch label="Share with my team" defaultChecked />
        </div>
      </Dialog>
    </>
  )
}
