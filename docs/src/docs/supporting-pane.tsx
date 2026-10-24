import {
  Button,
  isAtLeast,
  List,
  ListItem,
  SupportingPaneLayout,
  Switch,
  Text,
  TextField,
  useWindowSizeClass,
} from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc, raw } from '../kit/doc'
import './supporting-pane.css'

// Playground content: an event editor and its options.
function EventEditor({ onShowOptions }: { onShowOptions?: () => void }) {
  return (
    <div className="supporting-pane-doc-content">
      <TextField label="Event title" defaultValue="Team lunch" fullWidth />
      <TextField
        label="Notes"
        multiline
        rows={6}
        defaultValue="Meet at the front desk at 12:15."
        fullWidth
      />
      {onShowOptions && (
        <div className="g-row">
          <Button variant="tonal" icon="tune" onClick={onShowOptions}>
            Event options
          </Button>
        </div>
      )}
    </div>
  )
}

function EventOptions() {
  return (
    <div className="supporting-pane-doc-content">
      <Text as="h3" variant="title-medium">
        Event options
      </Text>
      <TextField
        label="Video call"
        prefixText="https://"
        defaultValue="meet.example.com/team-lunch"
        fullWidth
      />
      <Switch label="Remind me 10 minutes before" defaultChecked />
      <Switch label="Show me as busy" defaultChecked />
    </div>
  )
}

export const doc = defineDoc({
  slug: 'supporting-pane',
  name: 'Supporting pane',
  group: 'layout',
  icon: 'view_sidebar',
  order: 4,
  summary:
    'The supporting pane layout shows main content with a secondary pane beside it on expanded and wider windows. On smaller windows the secondary pane moves below the main content or into a bottom sheet.',
  imports: [
    'SupportingPaneLayout',
    'useWindowSizeClass',
    'isAtLeast',
    'TextField',
    'Switch',
    'Text',
    'Button',
    'List',
    'ListItem',
  ],
  preview: () => (
    <div className="g-frame supporting-pane-doc-frame supporting-pane-doc-preview">
      <SupportingPaneLayout
        supportingWidth={160}
        main={<EventEditor />}
        supporting={
          <List aria-label="Event options">
            <ListItem leadingIcon="video_call" headline="Video call" />
            <ListItem leadingIcon="notifications" headline="Reminder" />
            <ListItem leadingIcon="event_busy" headline="Busy" />
          </List>
        }
        supportingLabel="Event options"
      />
    </div>
  ),
  playground: {
    controls: {
      compactMode: {
        type: 'select',
        options: ['below', 'sheet'],
        default: 'below',
        label: 'Compact mode',
      },
      supportingWidth: {
        type: 'number',
        default: 360,
        min: 280,
        max: 440,
        step: 20,
        label: 'Supporting width',
      },
      supportingLabel: { type: 'text', default: 'Event options', label: 'Supporting label' },
    },
    render: function SupportingPanePlayground(v) {
      const size = useWindowSizeClass()
      const [open, setOpen] = useState(false)
      const sheet = v.compactMode === 'sheet'
      return (
        <div className="g-frame supporting-pane-doc-frame">
          <SupportingPaneLayout
            compactMode={v.compactMode}
            supportingWidth={v.supportingWidth}
            supportingLabel={v.supportingLabel}
            supportingOpen={sheet ? open : undefined}
            onSupportingOpenChange={sheet ? setOpen : undefined}
            main={
              <EventEditor
                onShowOptions={
                  sheet && !isAtLeast(size, 'expanded') ? () => setOpen(true) : undefined
                }
              />
            }
            supporting={<EventOptions />}
          />
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const sheet = v.compactMode === 'sheet'
      const layout = jsx('SupportingPaneLayout', {
        ...changed(v, ['compactMode', 'supportingWidth']),
        supportingLabel: v.supportingLabel,
        supportingOpen: sheet ? raw('open') : undefined,
        onSupportingOpenChange: sheet ? raw('setOpen') : undefined,
        main: sheet
          ? raw(
              "(\n    <EventEditor\n      onShowOptions={isAtLeast(size, 'expanded') ? undefined : () => setOpen(true)}\n    />\n  )",
            )
          : raw('<EventEditor />'),
        supporting: raw('<EventOptions />'),
      })
      return sheet
        ? `const size = useWindowSizeClass()\nconst [open, setOpen] = useState(false)\n\n${layout}`
        : layout
    },
    stage: 'fill',
  },
  api: [
    {
      name: 'SupportingPaneLayout',
      interfaces: ['SupportingPaneLayoutProps'],
      inherits:
        'The layout follows the browser window size class, not the width of its container. The sheet only opens on compact and medium windows.',
    },
  ],
  guidelines: [
    'Use the supporting pane for content that helps with the main task: options, related items, comments, version history.',
    'Keep the main pane usable without the supporting pane: on compact windows it moves below the main content or into a sheet.',
    'In sheet mode, show a button that opens the sheet on compact and medium windows. Use `useWindowSizeClass` to hide the button when the pane is beside the main content.',
  ],
})

/**
 * Note with sharing settings
 * The sharing settings sit beside the note on expanded and wider windows and move below it on smaller windows. The layout follows the browser window, not the size of this frame.
 */
export function ExampleSharing() {
  return (
    <div className="g-frame supporting-pane-doc-frame">
      <SupportingPaneLayout
        supportingLabel="Sharing"
        supportingWidth={320}
        main={
          <div className="supporting-pane-doc-content">
            <TextField label="Title" defaultValue="Harbor project notes" fullWidth />
            <TextField
              label="Note"
              multiline
              rows={8}
              defaultValue="Ada sends the budget on Monday. Alan checks the plan on Wednesday."
              fullWidth
            />
          </div>
        }
        supporting={
          <div className="supporting-pane-doc-content">
            <Text as="h3" variant="title-medium">
              Sharing
            </Text>
            <TextField
              label="Share link"
              prefixText="https://"
              defaultValue="drive.example.com/s/harbor-notes"
              fullWidth
            />
            <TextField label="Message to people" multiline rows={3} fullWidth />
            <Switch label="Allow comments" defaultChecked />
            <div className="g-row">
              <Button>Save</Button>
            </div>
          </div>
        }
      />
    </div>
  )
}

/**
 * Settings in a bottom sheet
 * With `compactMode="sheet"` the supporting pane opens in a bottom sheet on compact and medium windows. The button that opens it shows only on those windows.
 */
export function ExampleSheet() {
  const size = useWindowSizeClass()
  const [open, setOpen] = useState(false)
  return (
    <div className="g-frame supporting-pane-doc-frame">
      <SupportingPaneLayout
        compactMode="sheet"
        supportingOpen={open}
        onSupportingOpenChange={setOpen}
        supportingLabel="Reminder"
        main={
          <div className="supporting-pane-doc-content">
            <Text as="h3" variant="headline-small">
              Book flights to Lisbon
            </Text>
            <Text color="on-surface-variant">Task · added by Katherine Johnson</Text>
            {!isAtLeast(size, 'expanded') && (
              <div className="g-row">
                <Button variant="tonal" icon="notifications" onClick={() => setOpen(true)}>
                  Reminder
                </Button>
              </div>
            )}
          </div>
        }
        supporting={
          <div className="supporting-pane-doc-content">
            <Text as="h3" variant="title-medium">
              Reminder
            </Text>
            <Switch label="Remind me" defaultChecked />
            <TextField label="Remind on" defaultValue="2026-11-01" fullWidth />
            <div className="g-row">
              <Button icon="schedule" onClick={() => setOpen(false)}>
                Set reminder
              </Button>
            </div>
          </div>
        }
      />
    </div>
  )
}

/**
 * Related bookings
 * The supporting pane lists the bookings for the trip, with an action to add more.
 */
export function ExampleRelated() {
  return (
    <div className="g-frame supporting-pane-doc-frame">
      <SupportingPaneLayout
        supportingLabel="Bookings"
        main={
          <div className="supporting-pane-doc-content">
            <Text as="h3" variant="headline-small">
              Weekend in Lisbon
            </Text>
            <Text>
              Your flight leaves on Friday at 08:40. The hotel is near the river, ten minutes on
              foot from the old town.
            </Text>
          </div>
        }
        supporting={
          <>
            <List aria-label="Bookings">
              <ListItem
                leadingIcon="flight"
                headline="Flight to Lisbon"
                supportingText="Friday, 08:40"
                onClick={() => {}}
              />
              <ListItem
                leadingIcon="hotel"
                headline="Hotel by the river"
                supportingText="2 nights"
                onClick={() => {}}
              />
              <ListItem
                leadingIcon="directions_car"
                headline="Car rental"
                supportingText="Pick up at the airport"
                onClick={() => {}}
              />
            </List>
            <div className="supporting-pane-doc-content">
              <Button variant="outlined" icon="add">
                Add booking
              </Button>
            </div>
          </>
        }
      />
    </div>
  )
}
