import { Button, SnackbarSurface, useSnackbar } from 'material-design-3-expressive-components'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'
import './snackbar.css'

const DURATIONS = { default: undefined, '4000': 4000, '10000': 10000, 'until dismissed': null }

function quote(text: string) {
  return `'${text.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

export const doc = defineDoc({
  slug: 'snackbar',
  name: 'Snackbar',
  group: 'communication',
  icon: 'call_to_action',
  order: 3,
  summary:
    'Snackbars show a short message about a finished task at the bottom of the window, with at most one action. Call `useSnackbar().show()` from any component inside `SnackbarProvider`.',
  imports: ['SnackbarProvider', 'useSnackbar', 'SnackbarSurface', 'Button'],
  preview: () => (
    <SnackbarSurface
      className="snackbar-doc__preview"
      message="Message sent"
      action={{ label: 'View', onClick: () => {} }}
    />
  ),
  playground: {
    controls: {
      message: { type: 'text', default: 'File moved to trash' },
      action: { type: 'text', default: 'Undo', label: 'Action label' },
      closable: { type: 'boolean', default: false },
      longerAction: { type: 'boolean', default: false, label: 'Longer action' },
      duration: {
        type: 'select',
        options: ['default', '4000', '10000', 'until dismissed'],
        default: 'default',
      },
    },
    render: function SnackbarPlayground(v) {
      const snackbar = useSnackbar()
      const notify = () =>
        snackbar.show({
          message: v.message,
          action: v.action
            ? { label: v.action, onClick: () => snackbar.show('File restored') }
            : undefined,
          closable: v.closable,
          longerAction: v.longerAction,
          duration: DURATIONS[v.duration],
        })
      return (
        <Button variant="tonal" onClick={notify}>
          Show snackbar
        </Button>
      )
    },
    code: (v, { jsx }) => {
      const options = [`message: ${quote(v.message)},`]
      if (v.action) options.push(`action: { label: ${quote(v.action)}, onClick: restore },`)
      if (v.closable) options.push('closable: true,')
      if (v.longerAction) options.push('longerAction: true,')
      if (v.duration !== 'default') options.push(`duration: ${DURATIONS[v.duration]},`)
      const body = options.map((line) => `    ${line}`).join('\n')
      const button = jsx(
        'Button',
        { variant: 'tonal', onClick: { raw: 'notify' } },
        'Show snackbar',
      )
      return `const snackbar = useSnackbar()\nconst notify = () =>\n  snackbar.show({\n${body}\n  })\n\n${button}`
    },
  },
  api: [
    {
      name: 'SnackbarProvider',
      interfaces: ['SnackbarProviderProps'],
      inherits: 'Place it once near the root of the app. Snackbars queue and show one at a time.',
    },
    {
      name: 'useSnackbar',
      interfaces: [],
      inherits:
        '`useSnackbar(): SnackbarApi`. `show(options: SnackbarOptions | string): number` queues a snackbar and returns its id. `dismiss(id?: number)` closes that snackbar (the visible one animates out), or the visible one when no id is given; its `onClose` receives `"dismiss"`. Throws outside `SnackbarProvider`.',
    },
    { name: 'SnackbarOptions', interfaces: ['SnackbarOptions'] },
    { name: 'SnackbarAction', interfaces: ['SnackbarAction'] },
    {
      name: 'SnackbarSurface',
      interfaces: ['SnackbarSurfaceProps'],
      inherits:
        'The container alone, with no queue or timer. The provider uses it to draw each snackbar.',
    },
  ],
  guidelines: [
    'Use a snackbar for short feedback about a finished task. Use a dialog when people must decide before they continue.',
    'Give at most one action, such as “Undo” or “Retry”. Do not use “Dismiss” as the action; set `closable` instead.',
    'Let snackbars close by themselves. Use `duration: null` with `closable` only for messages that people must read.',
    'Write one short sentence in sentence case. Do not repeat the message in the action label.',
  ],
})

/**
 * Message
 * Pass a string to `show` for a message without an action. It closes by itself.
 */
export function ExampleMessage() {
  const snackbar = useSnackbar()
  return (
    <Button variant="tonal" icon="save" onClick={() => snackbar.show('Changes saved')}>
      Save changes
    </Button>
  )
}

/**
 * With action
 * One text action, such as “Undo”. The snackbar closes when people press it. `onClose` gets the reason: here the delete is final unless the reason is `action`.
 */
export function ExampleAction() {
  const snackbar = useSnackbar()
  const [state, setState] = useState<'idle' | 'pending' | 'trashed'>('idle')
  const remove = () => {
    setState('pending')
    snackbar.show({
      message: 'File moved to trash',
      action: { label: 'Undo', onClick: () => setState('idle') },
      onClose: (reason) => {
        if (reason !== 'action') setState('trashed')
      },
    })
  }
  if (state === 'trashed') {
    return (
      <Button variant="text" icon="restore_from_trash" onClick={() => setState('idle')}>
        Restore file
      </Button>
    )
  }
  return (
    <Button variant="tonal" icon="delete" disabled={state === 'pending'} onClick={remove}>
      Delete file
    </Button>
  )
}

/**
 * Until dismissed
 * `duration: null` keeps the snackbar open until people close it. Always add `closable` with it.
 */
export function ExamplePersistent() {
  const snackbar = useSnackbar()
  return (
    <Button
      variant="tonal"
      icon="cloud_off"
      onClick={() =>
        snackbar.show({
          message: 'Connection lost. Your changes are saved on this device.',
          closable: true,
          duration: null,
        })
      }
    >
      Go offline
    </Button>
  )
}

/**
 * Longer action
 * `longerAction` puts a long action label on its own line under the message.
 */
export function ExampleLongerAction() {
  const snackbar = useSnackbar()
  return (
    <Button
      variant="tonal"
      icon="cloud_upload"
      onClick={() =>
        snackbar.show({
          message: 'Your storage is almost full.',
          action: { label: 'Manage storage space', onClick: () => {} },
          longerAction: true,
          closable: true,
        })
      }
    >
      Upload large file
    </Button>
  )
}

/**
 * Queue
 * Snackbars show one at a time. `show` adds each one to the queue and returns its id; `dismiss()` closes the visible one, which animates out.
 */
export function ExampleQueue() {
  const snackbar = useSnackbar()
  const uploadAll = () => {
    for (const name of ['Budget.xlsx', 'Notes.docx', 'Beach.png']) snackbar.show(`${name} uploaded`)
  }
  return (
    <>
      <Button icon="upload" onClick={uploadAll}>
        Upload 3 files
      </Button>
      <Button variant="text" onClick={() => snackbar.dismiss()}>
        Dismiss current
      </Button>
    </>
  )
}

/**
 * Static surface
 * `SnackbarSurface` draws the container without the queue, for layouts and design reviews. Its action calls `onAction` when given, otherwise `action.onClick`.
 */
export function ExampleSurface() {
  const [message, setMessage] = useState('Message sent')
  return (
    <div className="g-stack" style={{ alignItems: 'center' }}>
      <SnackbarSurface
        message={message}
        action={{ label: 'View', onClick: () => {} }}
        onAction={() => setMessage('Opening the message')}
        closable
        onDismiss={() => setMessage('Closed')}
      />
      <SnackbarSurface
        message="Your storage is almost full."
        action={{ label: 'Manage storage space', onClick: () => {} }}
        longerAction
      />
    </div>
  )
}
