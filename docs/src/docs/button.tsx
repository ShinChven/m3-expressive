import { Button } from '@m3-expressive/react'
import { useState } from 'react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'button',
  name: 'Button',
  group: 'actions',
  icon: 'smart_button',
  order: 1,
  summary:
    'Buttons let people take action with one tap. Five variants show emphasis: use one filled button for the main action of a view.',
  imports: ['Button'],
  preview: () => (
    <div className="g-preview-row">
      <Button icon="send">Send</Button>
      <Button variant="outlined">Cancel</Button>
    </div>
  ),
  playground: {
    controls: {
      variant: {
        type: 'select',
        options: ['filled', 'tonal', 'elevated', 'outlined', 'text'],
        default: 'filled',
      },
      size: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], default: 'sm' },
      shape: { type: 'select', options: ['round', 'square'], default: 'round' },
      shapeMorph: { type: 'boolean', default: true, label: 'Shape morph' },
      emphasized: { type: 'boolean', default: false, label: 'Emphasized label' },
      label: { type: 'text', default: 'Send' },
      icon: { type: 'icon', default: 'send' },
      trailingIcon: { type: 'icon', default: '', label: 'Trailing icon' },
      selected: {
        type: 'select',
        options: ['none', 'off', 'on'],
        default: 'none',
        label: 'Toggle',
      },
      loading: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
    },
    render: (v) => (
      <Button
        variant={v.variant}
        size={v.size}
        shape={v.shape}
        shapeMorph={v.shapeMorph}
        emphasized={v.emphasized}
        icon={v.icon || undefined}
        trailingIcon={v.trailingIcon || undefined}
        selected={v.selected === 'none' ? undefined : v.selected === 'on'}
        loading={v.loading}
        disabled={v.disabled}
      >
        {v.label}
      </Button>
    ),
    code: (v, { jsx, changed }) =>
      jsx(
        'Button',
        {
          ...changed(v, ['variant', 'size', 'shape']),
          shapeMorph: v.shapeMorph ? undefined : { raw: 'false' },
          emphasized: v.emphasized,
          icon: v.icon,
          trailingIcon: v.trailingIcon,
          selected: v.selected === 'none' ? undefined : v.selected === 'on' || { raw: 'false' },
          loading: v.loading,
          disabled: v.disabled,
        },
        v.label,
      ),
  },
  api: [
    {
      name: 'Button',
      interfaces: ['ButtonOwnProps'],
      inherits:
        'Also accepts native `<button>` attributes. With `href` it renders a link (through `LinkProvider`) and accepts anchor attributes.',
    },
  ],
  guidelines: [
    'Use one filled button for the most important action of a view; tonal and outlined buttons for secondary actions.',
    'Labels are short verbs: “Send”, “Save changes”. Use sentence case.',
    'Prefer `loading` over `disabled` while an action runs: the button stays focusable and announces that it is busy.',
  ],
})

/**
 * Variants
 * Ordered by emphasis: filled, tonal, elevated, outlined, text.
 */
export function ExampleVariants() {
  return (
    <>
      <Button>Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </>
  )
}

/**
 * Icons
 * A leading icon clarifies the action; a trailing icon shows where it leads.
 */
export function ExampleIcons() {
  return (
    <>
      <Button icon="add">New folder</Button>
      <Button variant="tonal" icon="upload">
        Upload
      </Button>
      <Button variant="outlined" trailingIcon="open_in_new">
        Preview
      </Button>
    </>
  )
}

/**
 * Sizes and shapes
 * Five sizes from XS (32dp) to XL (136dp), with round (pill) or square corners. Small (40dp) is the default.
 */
export function ExampleSizes() {
  return (
    <>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg" shape="square" icon="bolt">
        Large
      </Button>
    </>
  )
}

/**
 * Shape morph
 * Buttons morph when pressed: the corners get smaller while the button is held down and spring back when it is released. Press and hold these buttons to see it. `shapeMorph={false}` turns it off; keep it the same across a product.
 */
export function ExampleShapeMorph() {
  return (
    <>
      <Button icon="send">Send</Button>
      <Button variant="tonal" shape="square">
        Save draft
      </Button>
      <Button variant="outlined" shapeMorph={false}>
        No morph
      </Button>
    </>
  )
}

/**
 * Emphasized label
 * `emphasized` uses the emphasized type style for the label, a heavier weight for the primary action of a view.
 */
export function ExampleEmphasized() {
  return (
    <>
      <Button size="md" emphasized icon="shopping_cart">
        Buy now
      </Button>
      <Button size="md" variant="outlined">
        Add to list
      </Button>
    </>
  )
}

/**
 * Toggle buttons
 * `selected` makes a toggle button; selected buttons change color and shape.
 */
export function ExampleToggle() {
  const [bold, setBold] = useState(true)
  const [italic, setItalic] = useState(false)
  return (
    <>
      <Button icon="format_bold" selected={bold} onClick={() => setBold(!bold)}>
        Bold
      </Button>
      <Button
        variant="outlined"
        icon="format_italic"
        selected={italic}
        onClick={() => setItalic(!italic)}
      >
        Italic
      </Button>
    </>
  )
}

/**
 * Loading and disabled
 * A loading button ignores clicks but stays focusable; a disabled button cannot be focused.
 */
export function ExampleStates() {
  const [loading, setLoading] = useState(false)
  const send = () => {
    setLoading(true)
    window.setTimeout(() => setLoading(false), 2000)
  }
  return (
    <>
      <Button icon="send" loading={loading} onClick={send}>
        Send
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
    </>
  )
}

/**
 * Links
 * With `href` the button renders a link. Inside `LinkProvider` it uses the app router.
 */
export function ExampleLinks() {
  return (
    <>
      <Button href="/theme" variant="tonal" icon="palette">
        Theme builder
      </Button>
      <Button
        href="https://m3.material.io/components/buttons"
        variant="text"
        trailingIcon="open_in_new"
        target="_blank"
        rel="noreferrer"
      >
        M3 guidelines
      </Button>
    </>
  )
}
