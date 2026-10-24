import {
  AssistChip,
  Avatar,
  ChipSet,
  FilterChip,
  InputChip,
  SuggestionChip,
  TextField,
  useSnackbar,
} from 'material-design-3-expressive-components'
import { useEffect, useState } from 'react'
import { IMAGES } from '../demo'
import { defineDoc } from '../kit/doc'
import { FILES } from '../mock'

export const doc = defineDoc({
  slug: 'chips',
  name: 'Chips',
  group: 'selection',
  icon: 'label',
  order: 4,
  summary:
    'Chips help people filter content, enter values, take actions and pick suggestions. There are four types: assist, filter, input and suggestion. Put related chips in a `ChipSet`.',
  imports: [
    'AssistChip',
    'FilterChip',
    'InputChip',
    'SuggestionChip',
    'ChipSet',
    'Avatar',
    'TextField',
    'useSnackbar',
  ],
  preview: () => (
    <div className="g-preview-col">
      <ChipSet aria-label="Status">
        <FilterChip label="Shared" selected />
        <FilterChip label="Private" selected={false} />
      </ChipSet>
      <ChipSet aria-label="Tags">
        <InputChip label="beach" icon="sell" onRemove={() => {}} />
        <AssistChip label="Add to album" icon="photo_album" />
      </ChipSet>
    </div>
  ),
  playground: {
    controls: {
      type: {
        type: 'select',
        options: ['assist', 'filter', 'input', 'suggestion'],
        default: 'filter',
      },
      label: { type: 'text', default: 'Shared' },
      icon: { type: 'icon', default: '' },
      selected: { type: 'boolean', default: true, label: 'Selected (filter, input)' },
      elevated: { type: 'boolean', default: false, label: 'Elevated (assist, filter, suggestion)' },
      removable: { type: 'boolean', default: true, label: 'Removable (input)' },
      disabled: { type: 'boolean', default: false },
    },
    render: function ChipPlayground(v) {
      const [selected, setSelected] = useState(v.selected)
      useEffect(() => setSelected(v.selected), [v.selected])
      const icon = v.icon || undefined
      if (v.type === 'assist')
        return (
          <AssistChip label={v.label} icon={icon} elevated={v.elevated} disabled={v.disabled} />
        )
      if (v.type === 'suggestion')
        return (
          <SuggestionChip label={v.label} icon={icon} elevated={v.elevated} disabled={v.disabled} />
        )
      if (v.type === 'input')
        return (
          <InputChip
            label={v.label}
            icon={icon}
            selected={v.selected}
            onRemove={v.removable ? () => {} : undefined}
            disabled={v.disabled}
          />
        )
      return (
        <FilterChip
          label={v.label}
          icon={icon}
          selected={selected}
          onSelectedChange={setSelected}
          elevated={v.elevated}
          disabled={v.disabled}
        />
      )
    },
    code: (v, { jsx }) => {
      const common = { label: v.label, icon: v.icon }
      if (v.type === 'assist' || v.type === 'suggestion')
        return jsx(v.type === 'assist' ? 'AssistChip' : 'SuggestionChip', {
          ...common,
          elevated: v.elevated,
          disabled: v.disabled,
        })
      if (v.type === 'input')
        return jsx('InputChip', {
          ...common,
          selected: v.selected,
          onRemove: v.removable ? { raw: 'handleRemove' } : undefined,
          disabled: v.disabled,
        })
      const chip = jsx('FilterChip', {
        ...common,
        selected: { raw: 'selected' },
        onSelectedChange: { raw: 'setSelected' },
        elevated: v.elevated,
        disabled: v.disabled,
      })
      return `const [selected, setSelected] = useState(${v.selected})\n\n${chip}`
    },
  },
  api: [
    {
      name: 'AssistChip',
      interfaces: ['ChipCommon'],
      inherits:
        'Also takes `elevated`, for chips on images or busy surfaces, and native `<button>` attributes such as `onClick`. With `href` it renders a link through `LinkProvider`.',
    },
    {
      name: 'FilterChip',
      interfaces: ['FilterChipProps', 'ChipCommon'],
      inherits: 'Renders a `<button>` with `aria-pressed`. Other attributes are not passed on.',
    },
    {
      name: 'InputChip',
      interfaces: ['InputChipProps', 'ChipCommon'],
      inherits:
        'Without `onClick` or `href`, the chip is focusable so that Backspace and Delete can remove it, but it has no action.',
    },
    {
      name: 'SuggestionChip',
      interfaces: ['ChipCommon'],
      inherits:
        'Also takes `elevated` and native `<button>` attributes such as `onClick`. With `href` it renders a link through `LinkProvider`.',
    },
    {
      name: 'ChipSet',
      interfaces: ['ChipSetProps'],
      inherits:
        'Also accepts `<div>` attributes. It renders `role="group"`, so give it an `aria-label`.',
    },
  ],
  guidelines: [
    'Pick the type by its job: assist chips act, filter chips narrow a list, input chips hold values people entered, and suggestion chips offer generated ideas.',
    'Put related chips in a `ChipSet` with an `aria-label`. Arrow keys, Home and End move between the chips.',
    'Keep labels to a few words. Chips do not replace buttons for the main action of a view.',
    'Use `elevated` only when chips sit on images or busy backgrounds. On plain surfaces, use the default outline.',
  ],
})

/**
 * Filter chips
 * Each chip turns a filter on or off, and a selected chip shows a check mark. With no filter on, the list shows all files.
 */
export function ExampleFilter() {
  const [statuses, setStatuses] = useState<string[]>(['shared'])
  const toggle = (status: string, on: boolean) =>
    setStatuses(on ? [...statuses, status] : statuses.filter((s) => s !== status))
  const count = FILES.filter((f) => statuses.length === 0 || statuses.includes(f.status)).length
  return (
    <div className="g-stack" style={{ alignItems: 'center' }}>
      <ChipSet aria-label="Filter files">
        <FilterChip
          label="Shared"
          selected={statuses.includes('shared')}
          onSelectedChange={(on) => toggle('shared', on)}
        />
        <FilterChip
          label="Private"
          selected={statuses.includes('private')}
          onSelectedChange={(on) => toggle('private', on)}
        />
        <FilterChip
          label="Syncing"
          selected={statuses.includes('syncing')}
          onSelectedChange={(on) => toggle('syncing', on)}
        />
        <FilterChip
          label="Archived"
          selected={statuses.includes('archived')}
          onSelectedChange={(on) => toggle('archived', on)}
        />
      </ChipSet>
      <span className="g-muted">{count} files</span>
    </div>
  )
}

/**
 * Input chips
 * Input chips hold values that people entered, such as the tags of a photo. The remove button, Backspace or Delete removes a chip.
 */
export function ExampleInput() {
  const [tags, setTags] = useState(['beach', 'family', 'summer'])
  const [text, setText] = useState('')
  const add = () => {
    const tag = text.trim().toLowerCase()
    if (tag && !tags.includes(tag)) setTags([...tags, tag])
    setText('')
  }
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 420 }}>
      <TextField
        label="Add a tag"
        value={text}
        onValueChange={setText}
        supportingText="Press Enter to add the tag."
        fullWidth
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            add()
          }
        }}
      />
      <ChipSet aria-label="Tags">
        {tags.map((tag) => (
          <InputChip
            key={tag}
            label={tag}
            icon="sell"
            onRemove={() => setTags(tags.filter((t) => t !== tag))}
          />
        ))}
      </ChipSet>
    </div>
  )
}

/**
 * Avatars and selection
 * `avatar` gives the chip round corners. With `onClick` the chip is a button, and `selected` marks the owner of the task.
 */
export function ExampleAvatars() {
  const [assignees, setAssignees] = useState(['Ada Lovelace', 'Grace Hopper', 'Alan Turing'])
  const [owner, setOwner] = useState('Ada Lovelace')
  return (
    <ChipSet aria-label="Assignees">
      {assignees.map((name) => (
        <InputChip
          key={name}
          label={name}
          avatar={<Avatar name={name} size={24} />}
          selected={owner === name}
          onClick={() => setOwner(name)}
          onRemove={() => setAssignees(assignees.filter((a) => a !== name))}
        />
      ))}
    </ChipSet>
  )
}

/**
 * Assist chips
 * Assist chips start an action related to the content, such as a photo. `elevated` chips stay readable on top of an image.
 */
export function ExampleAssist() {
  const snackbar = useSnackbar()
  return (
    <div className="g-stack" style={{ alignItems: 'center' }}>
      <ChipSet aria-label="Photo actions">
        <AssistChip
          label="Add to album"
          icon="photo_album"
          onClick={() => snackbar.show('Added to album')}
        />
        <AssistChip label="Share" icon="share" onClick={() => snackbar.show('Link copied')} />
        <AssistChip label="Print" icon="print" disabled />
      </ChipSet>
      <div style={{ position: 'relative', width: 320, height: 180 }}>
        <img
          src={IMAGES[0]}
          alt="Hills at sunset"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
        />
        <ChipSet
          aria-label="Image actions"
          style={{ position: 'absolute', insetInlineStart: 12, bottom: 12 }}
        >
          <AssistChip label="Crop" icon="crop" elevated onClick={() => snackbar.show('Crop')} />
          <AssistChip
            label="Rotate"
            icon="rotate_right"
            elevated
            onClick={() => snackbar.show('Rotate')}
          />
        </ChipSet>
      </div>
    </div>
  )
}

/**
 * Suggestion chips
 * Suggestion chips offer generated ideas, such as quick replies to an email. Choosing one fills in the field, and people can still edit it.
 */
export function ExampleSuggestions() {
  const [reply, setReply] = useState('Thanks')
  const suggestions = ['Thanks, see you there', 'Can we meet on Friday?', 'Sounds good to me']
  return (
    <div className="g-stack" style={{ width: '100%', maxWidth: 480 }}>
      <TextField label="Reply" value={reply} onValueChange={setReply} maxLength={60} fullWidth />
      <ChipSet aria-label="Suggested replies">
        {suggestions.map((s) => (
          <SuggestionChip key={s} label={s} icon="auto_awesome" onClick={() => setReply(s)} />
        ))}
      </ChipSet>
    </div>
  )
}

/**
 * Single line
 * `scroll` keeps the chips on one line and scrolls them sideways, for narrow spaces such as a mobile filter bar.
 */
export function ExampleScroll() {
  const [genre, setGenre] = useState('All')
  const genres = ['All', 'Pop', 'Rock', 'Jazz', 'Classical', 'Hip hop', 'Electronic', 'Folk']
  return (
    <ChipSet aria-label="Genre" scroll style={{ maxWidth: 360 }}>
      {genres.map((g) => (
        <FilterChip key={g} label={g} selected={genre === g} onSelectedChange={() => setGenre(g)} />
      ))}
    </ChipSet>
  )
}
