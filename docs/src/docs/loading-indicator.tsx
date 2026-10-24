import { Button, LoadingIndicator, type MaterialShapeName, Slider } from '@m3-expressive/react'
import { useEffect, useState } from 'react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'loading-indicator',
  name: 'Loading indicator',
  group: 'communication',
  icon: 'autorenew',
  order: 1,
  summary:
    'Loading indicators show that something is happening during short waits, about 200ms to 5s. A shape morphs through seven Material shapes while it rotates. It replaces most indeterminate circular progress indicators and is used for pull to refresh.',
  imports: ['LoadingIndicator', 'Button', 'Slider'],
  preview: () => (
    <div className="g-preview-row">
      <LoadingIndicator aria-label="Loading" />
      <LoadingIndicator contained aria-label="Loading" />
    </div>
  ),
  playground: {
    controls: {
      contained: { type: 'boolean', default: false },
      size: { type: 'number', default: 48, min: 24, max: 240, step: 8 },
      mode: {
        type: 'select',
        options: ['indeterminate', 'determinate'],
        default: 'indeterminate',
      },
      value: { type: 'number', default: 40, min: 0, max: 100, label: 'Progress (determinate)' },
    },
    render: (v) => (
      <LoadingIndicator
        contained={v.contained}
        size={v.size}
        value={v.mode === 'determinate' ? v.value / 100 : undefined}
        aria-label="Loading messages"
      />
    ),
    code: (v, { jsx, changed }) =>
      jsx('LoadingIndicator', {
        contained: v.contained,
        ...changed(v, ['size']),
        value: v.mode === 'determinate' ? v.value / 100 : undefined,
        'aria-label': 'Loading messages',
      }),
  },
  api: [
    {
      name: 'LoadingIndicator',
      interfaces: ['LoadingIndicatorProps'],
      inherits:
        'Also accepts native `<div>` attributes. `LOADING_INDICATOR_SHAPES` lists the default morph sequence.',
    },
  ],
  guidelines: [
    'Use a loading indicator for waits of about 200ms to 5s. Show nothing for instant results, and a progress indicator for longer tasks.',
    'Use the contained style over other content, such as a list being refreshed; the plain style on a surface.',
    'Keep the size between 24dp and 240dp. Center it in the space where the content will appear.',
    'Give it an `aria-label` that says what is loading, such as “Loading messages”. Do not turn a loading indicator into a progress indicator.',
  ],
})

/**
 * Plain and contained
 * The active indicator morphs and rotates on its own, or on a circular container for more contrast over content.
 */
export function ExampleContained() {
  return (
    <>
      <LoadingIndicator aria-label="Loading photos" />
      <LoadingIndicator contained aria-label="Loading photos" />
      <LoadingIndicator size={96} aria-label="Loading photos" />
      <LoadingIndicator size={96} contained aria-label="Loading photos" />
    </>
  )
}

/**
 * Pull to refresh
 * With `value`, the indicator follows progress, for example how far people have pulled: it grows from a circle into a burst. Drag the slider, then release it at the end to refresh.
 */
export function ExamplePull() {
  const [pull, setPull] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    if (!refreshing) return
    const timer = window.setTimeout(() => {
      setRefreshing(false)
      setPull(0)
    }, 2000)
    return () => window.clearTimeout(timer)
  }, [refreshing])
  return (
    <div className="g-stack" style={{ alignItems: 'center', width: 'min(100%, 320px)' }}>
      <LoadingIndicator
        contained
        value={refreshing ? undefined : pull / 100}
        aria-label="Refreshing inbox"
      />
      <Slider
        aria-label="Pull distance"
        value={pull}
        onChange={setPull}
        onChangeEnd={(v) => (v >= 100 ? setRefreshing(true) : setPull(0))}
        disabled={refreshing}
      />
    </div>
  )
}

/**
 * In a button
 * A button with `loading` shows a loading indicator in place of its icon, and ignores clicks while it stays focusable.
 */
export function ExampleButton() {
  const [busy, setBusy] = useState(false)
  return (
    <Button
      icon="sync"
      loading={busy}
      onClick={() => {
        setBusy(true)
        window.setTimeout(() => setBusy(false), 2500)
      }}
    >
      Check for updates
    </Button>
  )
}

/**
 * Custom shapes
 * `shapes` changes the morph sequence, for a branded loading moment. Use two or more shapes from the Material shape library.
 */
export function ExampleShapes() {
  return (
    <>
      <LoadingIndicator shapes={HEARTS} aria-label="Loading favorites" size={64} />
      <LoadingIndicator shapes={PIXELS} contained aria-label="Loading game" size={64} />
    </>
  )
}

const HEARTS: MaterialShapeName[] = ['heart', 'cookie-4', 'flower', 'circle']
const PIXELS: MaterialShapeName[] = ['pixel-circle', 'pixel-triangle', 'square']
